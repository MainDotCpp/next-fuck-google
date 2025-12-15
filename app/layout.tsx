import { Suspense } from 'react'

import { createAccessLog, logAccess } from '@/lib/logger'

import Loading from './loading'
import './globals.css'

// 设置为动态渲染，以便调用接口
export const dynamic = 'force-dynamic'

/**
 * 访问日志记录组件
 * RootLayout 只负责记录非 protected 路由的访问日志，不进行检测
 * Protected 路由的日志由 app/(protected)/layout.tsx 记录
 */
async function AccessLogger({ children }: { children: React.ReactNode }) {
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
    host,
  } = context

  // 检查是否是 protected 路由（通过检查路径是否映射到 protected 路由组）
  // protected 路由的日志由 app/(protected)/layout.tsx 记录，这里跳过以避免重复
  const { getMappedPage } = await import('@/config/route-mapping')
  const mappingResult = getMappedPage(pathname)

  // 如果路径映射到 protected 路由组（target 以 /JP/ 开头），不记录日志
  // 因为 ProtectedLayout 会记录更详细的检测信息
  if (mappingResult?.target?.startsWith('/JP/')) {
    return <>{children}</>
  }

  // 创建访问日志（仅记录，不检测）
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
      passed: true, // RootLayout 不检测，默认通过
      language: acceptLanguage,
      allowedLanguages: [],
    },
    urlParamsCheck: {
      passed: true, // RootLayout 不检测，默认通过
      params: searchParams,
      pattern: '',
    },
    apiCheck: {
      passed: true, // RootLayout 不检测，默认通过
    },
    allowed: true, // RootLayout 不拦截，默认允许
  })

  // 记录访问日志
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
    <html lang="ja" className="h-full">
      <body className="antialiased h-full">
        {/* RootLayout 只负责记录访问日志，不进行检测 */}
        <Suspense fallback={<Loading />}>
          <AccessLogger>{children}</AccessLogger>
        </Suspense>
      </body>
    </html>
  )
}
