import { notFound, redirect } from 'next/navigation'
import { Suspense } from 'react'
import { checkAccess } from '@/lib/api'
import { createAccessLog, logAccess } from '@/lib/logger'
import Loading from '../loading'

// 设置为动态渲染，以便调用接口
export const dynamic = 'force-dynamic'

/**
 * 语言白名单配置
 * 使用完整的 Accept-Language header 字符串进行完全匹配
 */
const ALLOWED_LANGUAGES = ['ja', 'ja-JP', 'ko', 'ko-KR', 'ko-KR,ko;q=0.9']

/**
 * 检查语言是否在白名单中（完全匹配整个 Accept-Language 字符串）
 */
function checkLanguage(acceptLanguage: string): boolean {
  if (!acceptLanguage)
    return false

  // 直接使用完整的 Accept-Language 字符串进行完全匹配
  return ALLOWED_LANGUAGES.includes(acceptLanguage)
}

/**
 * 检查URL参数是否满足正则表达式 (wbraid|gclid)=.{20}
 */
function checkUrlParams(searchParams: string): boolean {
  if (!searchParams)
    return false

  // 正则表达式：匹配 (wbraid|gclid)=.{20}
  const pattern = /(?:wbraid|gclid)=.{20}/
  return pattern.test(searchParams)
}

/**
 * 访问检测组件
 * 在 (protected) 路由组内的所有页面都会经过这个检测
 */
async function ProtectedAccessCheck({ children }: { children: React.ReactNode }) {
  const startTime = Date.now()

  // 从请求上下文获取数据（优先使用 cookie，更可靠）
  const { getRequestContext } = await import('@/lib/request-context')
  const context = await getRequestContext()

  const {
    pathname,
    acceptLanguage,
    searchParams,
    userAgent,
    referer,
    clientIp,
    fullUrl,
    blockedPage,
  } = context

  // 0. 检查是否有 d=d 参数，如果有则直接放行
  if (searchParams) {
    const params = new URLSearchParams(searchParams)
    if (params.get('d') === 'd') {
      // 直接放行，不记录日志
      return <>{children}</>
    }
  }

  // 创建访问日志
  const accessLog = createAccessLog({
    path: pathname,
    fullUrl,
    queryParams: searchParams,
    clientIp,
    userAgent,
    acceptLanguage,
    referer,
    languageCheck: {
      passed: false,
      language: acceptLanguage,
      allowedLanguages: ALLOWED_LANGUAGES,
    },
    urlParamsCheck: {
      passed: false,
      params: searchParams,
      pattern: '(?:wbraid|gclid)=.{20}',
    },
  })

  // 1. 检查语言是否在白名单中
  const languageAllowed = checkLanguage(acceptLanguage)
  accessLog.languageCheck.passed = languageAllowed
  if (!languageAllowed) {
    accessLog.allowed = false
    accessLog.blockedReason = 'LANGUAGE_NOT_ALLOWED'
    accessLog.totalResponseTime = Date.now() - startTime
    await logAccess(accessLog)
    // 使用配置的拦截页面
    if (blockedPage === '/not-found') {
      notFound()
    }
    else {
      redirect(blockedPage)
    }
    return <></>
  }

  // 2. 检查URL参数是否满足正则表达式
  const urlParamsValid = checkUrlParams(searchParams)
  accessLog.urlParamsCheck.passed = urlParamsValid
  if (!urlParamsValid) {
    accessLog.allowed = false
    accessLog.blockedReason = 'URL_PARAMS_INVALID'
    accessLog.totalResponseTime = Date.now() - startTime
    await logAccess(accessLog)
    // 使用配置的拦截页面
    if (blockedPage === '/not-found') {
      notFound()
    }
    else {
      redirect(blockedPage)
    }
    return <></>
  }

  // 3. 调用过滤接口
  const apiResult = await checkAccess({
    userAgent,
    visitUrl: fullUrl || pathname,
    clientIp,
    clientLanguage: acceptLanguage,
    referer,
  })

  // 记录 API 检查结果
  accessLog.apiCheck = {
    passed: apiResult.allowed,
    apiResponse: apiResult.response
      ? {
          code: apiResult.response.code,
          message: apiResult.response.message,
          success: apiResult.response.success,
          status: apiResult.response.data?.status || false,
        }
      : undefined,
    apiError: apiResult.error,
    responseTime: apiResult.responseTime,
  }

  // 如果接口返回 false，使用配置的拦截页面
  if (!apiResult.allowed) {
    accessLog.allowed = false
    accessLog.blockedReason = apiResult.error || 'API_CHECK_FAILED'
    accessLog.totalResponseTime = Date.now() - startTime
    await logAccess(accessLog)
    // 使用配置的拦截页面
    if (blockedPage === '/not-found') {
      notFound()
    }
    else {
      redirect(blockedPage)
    }
    return <></>
  }

  // 记录成功的访问
  accessLog.allowed = true
  accessLog.totalResponseTime = Date.now() - startTime
  await logAccess(accessLog)

  return <>{children}</>
}

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<Loading />}>
      <ProtectedAccessCheck>{children}</ProtectedAccessCheck>
    </Suspense>
  )
}
