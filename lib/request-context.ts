/**
 * 请求上下文工具
 * 使用 Headers 在 middleware 和 Server Components 之间传递数据
 * Headers 只在服务端可见，不会暴露到客户端
 * 
 * 注意：Next.js 会自动过滤掉以 'x-' 开头的自定义 headers，不会发送到客户端
 */

import type { NextRequest } from 'next/server'

/**
 * 请求上下文数据
 */
export interface RequestContext {
  pathname: string
  originalPath: string
  host: string
  acceptLanguage: string
  searchParams: string
  userAgent: string
  referer: string
  clientIp: string
  fullUrl: string
  blockedPage: string
}

/**
 * 在 middleware 中设置请求上下文到 Headers
 * Headers 只在服务端可见，不会发送到客户端
 */
export function setRequestContextHeaders(requestHeaders: Headers, context: Partial<RequestContext>): void {
  // 设置所有上下文数据到 headers
  // 使用 'x-' 前缀确保 Next.js 不会将这些 headers 发送到客户端
  if (context.pathname)
    requestHeaders.set('x-pathname', context.pathname)
  if (context.originalPath)
    requestHeaders.set('x-original-path', context.originalPath)
  if (context.host)
    requestHeaders.set('x-host', context.host)
  if (context.acceptLanguage)
    requestHeaders.set('x-accept-language', context.acceptLanguage)
  if (context.searchParams !== undefined)
    requestHeaders.set('x-search-params', context.searchParams)
  if (context.userAgent)
    requestHeaders.set('x-user-agent', context.userAgent)
  if (context.referer)
    requestHeaders.set('x-referer', context.referer)
  if (context.clientIp)
    requestHeaders.set('x-client-ip', context.clientIp)
  if (context.fullUrl)
    requestHeaders.set('x-full-url', context.fullUrl)
  if (context.blockedPage)
    requestHeaders.set('x-blocked-page', context.blockedPage)
}

/**
 * 在 Server Components 中获取请求上下文
 * 从 Headers 读取，这些 headers 只在服务端可见
 */
export async function getRequestContext(): Promise<RequestContext> {
  const { headers } = await import('next/headers')
  const headersList = await headers()

  return {
    pathname: headersList.get('x-pathname') || headersList.get('x-original-path') || '/',
    originalPath: headersList.get('x-original-path') || headersList.get('x-pathname') || '/',
    host: headersList.get('x-host') || 'localhost',
    acceptLanguage: headersList.get('x-accept-language') || '',
    searchParams: headersList.get('x-search-params') || '',
    userAgent: headersList.get('x-user-agent') || '',
    referer: headersList.get('x-referer') || '',
    clientIp: headersList.get('x-client-ip') || 'unknown',
    fullUrl: headersList.get('x-full-url') || '',
    blockedPage: headersList.get('x-blocked-page') || '/not-found',
  }
}
