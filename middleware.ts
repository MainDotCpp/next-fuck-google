import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getMappedPage } from './config/route-mapping'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/pages')) {
    return NextResponse.rewrite(new URL('/404', request.url))
  }

  // 查找映射关系
  const mappedPath = getMappedPage(pathname)

  // 设置自定义 header，供 layout 使用
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)
  requestHeaders.set('x-original-path', pathname)
  // 设置域名到 header，供组件使用
  const host = request.headers.get('host') || request.headers.get('x-forwarded-host') || 'localhost'
  requestHeaders.set('x-host', host)

  if (mappedPath) {
    // 使用 rewrite 重写 URL，保持浏览器 URL 不变
    const url = request.nextUrl.clone()
    url.pathname = mappedPath

    const response = NextResponse.rewrite(url)
    // 将 header 传递给重写后的请求
    response.headers.set('x-pathname', pathname)
    response.headers.set('x-original-path', pathname)
    response.headers.set('x-host', host)
    return response
  }

  // 如果没有映射，继续正常处理，但设置 header
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set('x-pathname', pathname)
  response.headers.set('x-original-path', pathname)
  response.headers.set('x-host', host)
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}
