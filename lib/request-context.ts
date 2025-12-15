/**
 * 请求上下文工具
 * 使用 Cookies 在 middleware 和 Server Components 之间传递数据
 * Cookies 比 Headers 更可靠，因为它们在请求链中始终可用
 */

import { cookies } from 'next/headers'
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

export const COOKIE_NAME = 'x-request-context'
const COOKIE_MAX_AGE = 60 // 60 秒，足够完成请求

/**
 * 在 middleware 中设置请求上下文到 cookie
 * 返回序列化后的 cookie 值，由调用者设置到 response
 */
export function setRequestContext(request: NextRequest, context: Partial<RequestContext>): string {
  // 合并现有上下文和新上下文
  const existingContext = getRequestContextFromCookie(request)
  const mergedContext: RequestContext = {
    pathname: context.pathname || existingContext?.pathname || request.nextUrl.pathname,
    originalPath: context.originalPath || existingContext?.originalPath || request.nextUrl.pathname,
    host: context.host || existingContext?.host || request.headers.get('host') || 'localhost',
    acceptLanguage: context.acceptLanguage || existingContext?.acceptLanguage || request.headers.get('accept-language') || '',
    searchParams: context.searchParams || existingContext?.searchParams || request.nextUrl.searchParams.toString(),
    userAgent: context.userAgent || existingContext?.userAgent || request.headers.get('user-agent') || '',
    referer: context.referer || existingContext?.referer || request.headers.get('referer') || '',
    clientIp: context.clientIp || existingContext?.clientIp || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown',
    fullUrl: context.fullUrl || existingContext?.fullUrl || request.url,
    blockedPage: context.blockedPage || existingContext?.blockedPage || '/not-found',
  }

  // 将上下文序列化为 JSON
  return JSON.stringify(mergedContext)
}

/**
 * 从 cookie 读取请求上下文（用于 middleware）
 */
export function getRequestContextFromCookie(request: NextRequest): RequestContext | null {
  const cookieValue = request.cookies.get(COOKIE_NAME)?.value
  if (!cookieValue)
    return null

  try {
    return JSON.parse(cookieValue) as RequestContext
  }
  catch {
    return null
  }
}

/**
 * 在 Server Components 中获取请求上下文
 */
export async function getRequestContext(): Promise<RequestContext> {
  const cookieStore = await cookies()
  const cookieValue = cookieStore.get(COOKIE_NAME)?.value

  if (!cookieValue) {
    // 如果 cookie 不存在，尝试从 headers 读取（向后兼容）
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

  try {
    return JSON.parse(cookieValue) as RequestContext
  }
  catch {
    // 如果解析失败，返回默认值
    return {
      pathname: '/',
      originalPath: '/',
      host: 'localhost',
      acceptLanguage: '',
      searchParams: '',
      userAgent: '',
      referer: '',
      clientIp: 'unknown',
      fullUrl: '',
      blockedPage: '/not-found',
    }
  }
}

/**
 * 清除请求上下文 cookie（可选，用于清理）
 */
export function clearRequestContext(response: Response): void {
  response.headers.set('Set-Cookie', `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`)
}
