import { Geist, Geist_Mono } from 'next/font/google'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { checkAccess } from '@/lib/api'
import { createAccessLog, logAccess } from '@/lib/logger'
import Loading from './loading'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// 设置为动态渲染，以便调用接口
export const dynamic = 'force-dynamic'

/**
 * 语言白名单配置
 * 使用完整的 Accept-Language header 字符串进行完全匹配
 */
const ALLOWED_LANGUAGES = ['en', 'zh', 'zh-CN', 'zh-TW', 'ja', 'ko']

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
 * 检查URL参数是否满足正则表达式 (gbclid|wbclid)=.{20}
 */
function checkUrlParams(searchParams: string): boolean {
  if (!searchParams)
    return false

  // 正则表达式：匹配 (gbclid|wbclid)=.{20}
  const pattern = /(?:wbraid|gclid)=.{20}/
  return pattern.test(searchParams)
}

/**
 * 过滤检查：在 Suspense 内部执行，以便显示 loading
 */
async function CheckAccess({ children }: { children: React.ReactNode }) {
  const startTime = Date.now()

  // 从 middleware 设置的 header 中获取原始路径和请求信息
  const headersList = await headers()
  const pathname = headersList.get('x-original-path') || headersList.get('x-pathname') || '/'
  const acceptLanguage = headersList.get('x-accept-language') || ''
  const searchParams = headersList.get('x-search-params') || ''
  const userAgent = headersList.get('x-user-agent') || ''
  const referer = headersList.get('x-referer') || ''
  const clientIp = headersList.get('x-client-ip') || 'unknown'
  const fullUrl = headersList.get('x-full-url') || ''

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
    notFound()
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
    notFound()
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

  // 如果接口返回 false，直接显示 404
  if (!apiResult.allowed) {
    accessLog.allowed = false
    accessLog.blockedReason = apiResult.error || 'API_CHECK_FAILED'
    accessLog.totalResponseTime = Date.now() - startTime
    await logAccess(accessLog)
    notFound()
    return <></>
  }

  // 记录成功的访问
  accessLog.allowed = true
  accessLog.totalResponseTime = Date.now() - startTime
  await logAccess(accessLog)

  return <>{children}</>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {/* 使用 Suspense 包装，调用过滤接口时会显示 loading */}
        <Suspense fallback={<Loading />}>
          <div className="page-content">
            <CheckAccess>{children}</CheckAccess>
          </div>
        </Suspense>
      </body>
    </html>
  )
}
