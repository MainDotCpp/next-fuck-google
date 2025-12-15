import { Geist, Geist_Mono } from 'next/font/google'
import { headers } from 'next/headers'
import { Suspense } from 'react'
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
 * 访问日志记录组件
 * RootLayout 只负责记录所有访问日志，不进行检测
 */
async function AccessLogger({ children }: { children: React.ReactNode }) {
  const startTime = Date.now()

  // 从 middleware 设置的 header 中获取请求信息
  const headersList = await headers()
  const pathname = headersList.get('x-original-path') || headersList.get('x-pathname') || '/'
  const acceptLanguage = headersList.get('x-accept-language') || ''
  const searchParams = headersList.get('x-search-params') || ''
  const userAgent = headersList.get('x-user-agent') || ''
  const referer = headersList.get('x-referer') || ''
  const clientIp = headersList.get('x-client-ip') || 'unknown'
  const fullUrl = headersList.get('x-full-url') || ''

  // 创建访问日志（仅记录，不检测）
  const accessLog = createAccessLog({
    path: pathname,
    fullUrl,
    queryParams: searchParams,
    clientIp,
    userAgent,
    acceptLanguage,
    referer,
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
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {/* RootLayout 只负责记录访问日志，不进行检测 */}
        <Suspense fallback={<Loading />}>
          <AccessLogger>{children}</AccessLogger>
        </Suspense>
      </body>
    </html>
  )
}
