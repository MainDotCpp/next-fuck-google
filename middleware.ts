import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getMappedPage } from './config/route-mapping'
import { COOKIE_NAME, setRequestContext } from './lib/request-context'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 查找映射关系
  const mappingResult = getMappedPage(pathname)
  const mappedPath = mappingResult?.target || null

  // 准备请求上下文数据
  const host = request.headers.get('host') || request.headers.get('x-forwarded-host') || 'localhost'
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
    blockedPage: '/not-found',
  }

  // 设置请求上下文到 cookie（更可靠的方式）
  const cookieValue = setRequestContext(request, requestContext)

  // 同时设置 header（向后兼容）
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)
  requestHeaders.set('x-original-path', pathname)
  requestHeaders.set('x-host', host)
  requestHeaders.set('x-accept-language', acceptLanguage)
  requestHeaders.set('x-search-params', searchParams)
  requestHeaders.set('x-user-agent', userAgent)
  requestHeaders.set('x-referer', referer)
  requestHeaders.set('x-client-ip', clientIp)
  requestHeaders.set('x-full-url', fullUrl)
  requestHeaders.set('x-blocked-page', '/not-found')

  // 设置 cookie 的配置
  // 在开发环境中不使用 secure，生产环境使用
  const cookieOptions = {
    httpOnly: true,
    secure: false, // 开发环境设为 false，生产环境可通过环境变量控制
    sameSite: 'lax' as const,
    maxAge: 60, // 60 秒
    path: '/',
  }

  if (mappedPath) {
    // 使用 rewrite 重写 URL，保持浏览器 URL 不变
    const url = request.nextUrl.clone()
    url.pathname = mappedPath

    const response = NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    })

    // 设置 cookie
    response.cookies.set(COOKIE_NAME, cookieValue, cookieOptions)

    // 同时设置 response headers（向后兼容）
    response.headers.set('x-pathname', pathname)
    response.headers.set('x-original-path', pathname)
    response.headers.set('x-host', host)
    response.headers.set('x-accept-language', acceptLanguage)
    response.headers.set('x-search-params', searchParams)
    response.headers.set('x-user-agent', userAgent)
    response.headers.set('x-referer', referer)
    response.headers.set('x-client-ip', clientIp)
    response.headers.set('x-full-url', fullUrl)
    response.headers.set('x-blocked-page', '/not-found')

    return response
  }

  // 如果没有映射，继续正常处理
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // 设置 cookie
  response.cookies.set(COOKIE_NAME, cookieValue, cookieOptions)

  // 同时设置 response headers（向后兼容）
  response.headers.set('x-pathname', pathname)
  response.headers.set('x-original-path', pathname)
  response.headers.set('x-host', host)
  response.headers.set('x-accept-language', acceptLanguage)
  response.headers.set('x-search-params', searchParams)
  response.headers.set('x-user-agent', userAgent)
  response.headers.set('x-referer', referer)
  response.headers.set('x-client-ip', clientIp)
  response.headers.set('x-full-url', fullUrl)
  response.headers.set('x-blocked-page', '/not-found')

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}
