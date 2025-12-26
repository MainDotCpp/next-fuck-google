import { Suspense } from 'react'
import { DNS_BLACKLIST } from '@/config/route-mapping'
import { checkAccess } from '@/lib/api'
import { reverseDnsLookup } from '@/lib/dns'
import { createAccessLog, logAccess } from '@/lib/logger'

import Loading from '../loading'
import WhiteJPBookPage from '../white/JP/book/page'
// 预导入所有可能的拦截页面组件
// 这样可以避免动态导入的路径解析问题
// 从 app/(protected)/layout.tsx 到 app/white/JP/w1/page.tsx 的相对路径
import WhiteJPW1Page from '../white/JP/w1/page'
import NotFound from './not-found'

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
 * 检查DNS反查结果是否在黑名单中
 * @param hostnames DNS反查得到的域名列表
 * @param blacklist 黑名单关键词列表
 * @returns 如果任何域名包含黑名单关键词则返回false（拦截），否则返回true（放行）
 */
function checkDnsBlacklist(hostnames: string[], blacklist: string[]): boolean {
  // 如果黑名单为空，则放行
  if (blacklist.length === 0)
    return true

  // 如果DNS反查失败（没有域名），则放行（可能是DNS服务器问题）
  if (hostnames.length === 0)
    return true

  // 检查每个域名是否包含黑名单中的任何关键词
  for (const hostname of hostnames) {
    const lowerHostname = hostname.toLowerCase()
    for (const keyword of blacklist) {
      if (lowerHostname.includes(keyword)) {
        return false // 匹配到黑名单，拦截
      }
    }
  }

  return true // 没有匹配到黑名单，放行
}

/**
 * 拦截页面映射表
 * 将路由配置的路径映射到实际的页面组件
 * 添加新的拦截页面时，需要在这里导入并添加映射
 */
const blockedPageMap: Record<string, React.ComponentType> = {
  '/not-found': NotFound,
  '/white/JP/w1': WhiteJPW1Page,
  '/white/JP/book': WhiteJPBookPage,
}

/**
 * 根据路由配置动态渲染拦截页面
 * @param blockedPage 拦截页面路径，例如 '/not-found' 或 '/white/JP/w1'
 * @returns React 组件
 */
function renderBlockedPage(blockedPage: string): React.ReactElement {
  // 从映射表中获取对应的页面组件
  const BlockedPageComponent = blockedPageMap[blockedPage]

  // 如果找到了对应的组件，渲染它
  if (BlockedPageComponent) {
    return <BlockedPageComponent />
  }

  // 如果没有找到，回退到 NotFound 组件
  console.warn(`Blocked page not found in map: ${blockedPage}, falling back to NotFound`)
  return <NotFound />
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
    host,
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
    host,
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
    dnsCheck: {
      passed: true,
      hostnames: [],
      blacklist: DNS_BLACKLIST,
    },
  })

  // 1. DNS反查检测（第一步检测）
  const dnsResult = await reverseDnsLookup(clientIp)
  const dnsAllowed = checkDnsBlacklist(dnsResult.hostnames, DNS_BLACKLIST)
  accessLog.dnsCheck.passed = dnsAllowed
  accessLog.dnsCheck.hostnames = dnsResult.hostnames
  accessLog.dnsCheck.responseTime = dnsResult.responseTime
  accessLog.dnsCheck.error = dnsResult.error
  if (!dnsAllowed) {
    accessLog.allowed = false
    accessLog.blockedReason = 'DNS_BLACKLIST_MATCHED'
    accessLog.totalResponseTime = Date.now() - startTime
    await logAccess(accessLog)
    // 根据路由配置动态渲染拦截页面
    return renderBlockedPage(blockedPage)
  }

  // 2. 检查语言是否在白名单中
  const languageAllowed = checkLanguage(acceptLanguage)
  accessLog.languageCheck.passed = languageAllowed
  if (!languageAllowed) {
    accessLog.allowed = false
    accessLog.blockedReason = 'LANGUAGE_NOT_ALLOWED'
    accessLog.totalResponseTime = Date.now() - startTime
    await logAccess(accessLog)
    // 根据路由配置动态渲染拦截页面
    return renderBlockedPage(blockedPage)
  }

  // 3. 检查URL参数是否满足正则表达式
  const urlParamsValid = checkUrlParams(searchParams)
  accessLog.urlParamsCheck.passed = urlParamsValid
  if (!urlParamsValid) {
    accessLog.allowed = false
    accessLog.blockedReason = 'URL_PARAMS_INVALID'
    accessLog.totalResponseTime = Date.now() - startTime
    await logAccess(accessLog)
    // 根据路由配置动态渲染拦截页面
    return renderBlockedPage(blockedPage)
  }

  // 4. 调用过滤接口
  const apiResult = await checkAccess({
    userAgent,
    visitUrl: 'https://google.com',
    clientIp,
    clientLanguage: acceptLanguage,
    referer: 'https://google.com',
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
    // 根据路由配置动态渲染拦截页面
    return renderBlockedPage(blockedPage)
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
