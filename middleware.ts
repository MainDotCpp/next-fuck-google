import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { accessControlConfig, getMappedPage } from './config/route-mapping'
import { setRequestContextHeaders } from './lib/request-context'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 查找映射关系
  const mappingResult = getMappedPage(pathname)
  const mappedPath = mappingResult?.target || null

  // 确定使用的拦截页面：优先使用路由特定的，否则使用全局默认值
  const blockedPage = mappingResult?.blockedPage || accessControlConfig.blockedPage

  // 准备请求上下文数据
  // 获取 host 并去掉端口号
  const rawHost = request.headers.get('host') || request.headers.get('x-forwarded-host') || 'localhost'
  const host = rawHost.split(':')[0] // 去掉端口号，只保留主机名
  const acceptLanguage = request.headers.get('accept-language') || ''
  const searchParams = request.nextUrl.searchParams.toString()
  const userAgent = request.headers.get('user-agent') || ''
  const referer = request.headers.get('referer') || ''
  const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown'
  const fullUrl = request.url

  // 准备请求上下文数据
  const requestContext = {
    pathname,
    originalPath: pathname,
    host,
    acceptLanguage,
    searchParams,
    userAgent,
    referer,
    clientIp,
    fullUrl,
    blockedPage,
  }

  // 设置请求上下文到 Headers（只在服务端可见，不会发送到客户端）
  const requestHeaders = new Headers(request.headers)
  setRequestContextHeaders(requestHeaders, requestContext)

  if (mappedPath) {
    // 使用 rewrite 重写 URL，保持浏览器 URL 不变
    const url = request.nextUrl.clone()
    url.pathname = mappedPath

    const response = NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    })

    // 注意：不需要设置 response headers，因为 Next.js 会自动将 request headers 传递给 Server Components
    // 而且以 'x-' 开头的 headers 不会被发送到客户端

    return response
  }

  // 如果没有映射，继续正常处理
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // 注意：不需要设置 response headers，因为 Next.js 会自动将 request headers 传递给 Server Components
  // 而且以 'x-' 开头的 headers 不会被发送到客户端

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}
