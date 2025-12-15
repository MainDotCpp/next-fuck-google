/**
 * URL 路由别名配置
 *
 * 简单的路径前缀替换功能
 *
 * 示例：
 * - 配置：'/page1' -> '/p1'
 * - 访问 '/page1' 会映射到 '/p1'
 * - 访问 '/page1/about' 会映射到 '/p1/about'
 * - 访问 '/page1/any/path' 会映射到 '/p1/any/path'
 */

export interface RouteAlias {
  /** 别名路径前缀 */
  alias: string
  /** 目标路径前缀 */
  target: string
  /** 可选：该路由被拦截时重定向到的页面路径，如果不设置则使用全局默认值 */
  blockedPage?: string
}

/**
 * 访问拦截配置
 */
export interface AccessControlConfig {
  /** 被拦截时重定向到的页面路径，设置为 '/not-found' 时使用 Next.js 的 notFound() */
  blockedPage: string
}

/**
 * 访问控制配置
 * 当访问被拦截时，重定向到指定的页面
 *
 * 注意：
 * - 设置为 '/not-found' 时，会使用 Next.js 的 notFound() 函数返回 404
 * - 设置为其他路径时，会使用 redirect() 重定向到该路径
 */
export const accessControlConfig: AccessControlConfig = {
  blockedPage: '/not-found',
}

/**
 * 别名配置列表
 * 配置格式：
 * - { alias: '/page1', target: '/p1' } - 映射到 /p1，使用全局默认拦截页面
 * - { alias: '/cq', target: '/(protected)/pages/page1', blockedPage: '/custom-blocked' } - 映射到 (protected) 路由组，使用自定义拦截页面
 * - { alias: '/', target: '/white/sites' } - 映射到 /white/sites（不需要检测）
 *
 * 注意：
 * - 映射到 (protected) 路由组的路径会自动进行访问检测
 * - 映射到其他路径的不会进行检测
 * - 可以为每个路由单独设置 blockedPage，如果不设置则使用全局默认值
 */
export const routeAliases: RouteAlias[] = [
  // 注意：target 路径应该匹配实际的文件系统路径
  // 对于 (protected) 路由组内的页面，路径不需要包含路由组名称
  // 因为路由组在 URL 中不显示，但 Next.js 会自动在路由组内查找
  { alias: '/cq', target: '/JP/page1', blockedPage: '/white/JP/w1' }, // 添加前导斜杠，确保路径正确
  { alias: '/', target: '/white/sites' },
  // 示例：为特定路由设置自定义拦截页面
  // { alias: '/special', target: '/JP/page1', blockedPage: '/custom-blocked' },
]

/**
 * 规范化路径
 */
function normalizePath(path: string): string {
  if (path === '')
    return '/'
  // 移除末尾的 /，但保留根路径 /
  const normalized = path.replace(/\/+$/, '') || '/'
  return normalized.startsWith('/') ? normalized : `/${normalized}`
}

/**
 * Protected 路由组的前缀配置
 * 定义哪些路径前缀属于 protected 路由组
 * 这些路由会经过访问检测，日志由 app/(protected)/layout.tsx 记录
 */
export const PROTECTED_ROUTE_PREFIXES = [
  '/JP/',
] as const

/**
 * 检查路径是否属于 protected 路由组
 * @param path 要检查的路径
 * @returns 如果是 protected 路由返回 true，否则返回 false
 */
export function isProtectedRoute(path: string): boolean {
  return PROTECTED_ROUTE_PREFIXES.some(prefix => path.startsWith(prefix))
}

/**
 * 路由映射结果
 */
export interface RouteMappingResult {
  /** 映射的目标页面路径 */
  target: string
  /** 该路由被拦截时使用的页面路径，如果未设置则使用全局默认值 */
  blockedPage?: string
}

/**
 * 根据请求路径获取映射的目标页面路径
 * @param requestPath 请求的路径
 * @returns 映射结果，如果不存在则返回 null
 */
export function getMappedPage(requestPath: string): RouteMappingResult | null {
  const normalizedPath = normalizePath(requestPath)

  // 先进行精确匹配（优先级最高）
  for (const aliasConfig of routeAliases) {
    const normalizedAlias = normalizePath(aliasConfig.alias)
    if (normalizedPath === normalizedAlias) {
      const normalizedTarget = normalizePath(aliasConfig.target)
      return {
        target: normalizedTarget,
        blockedPage: aliasConfig.blockedPage,
      }
    }
  }

  // 然后进行前缀匹配（排除根路径，因为根路径会匹配所有）
  for (const aliasConfig of routeAliases) {
    const normalizedAlias = normalizePath(aliasConfig.alias)
    // 跳过根路径，根路径在后面处理
    if (normalizedAlias === '/')
      continue

    if (normalizedPath.startsWith(`${normalizedAlias}/`)) {
      const normalizedTarget = normalizePath(aliasConfig.target)
      const remainingPath = normalizedPath.slice(normalizedAlias.length)
      return {
        target: `${normalizedTarget}${remainingPath}`,
        blockedPage: aliasConfig.blockedPage,
      }
    }
  }

  // 最后处理根路径匹配（优先级最低）
  for (const aliasConfig of routeAliases) {
    const normalizedAlias = normalizePath(aliasConfig.alias)
    if (normalizedAlias === '/') {
      const normalizedTarget = normalizePath(aliasConfig.target)
      return {
        target: `${normalizedTarget}${normalizedPath}`,
        blockedPage: aliasConfig.blockedPage,
      }
    }
  }

  return null
}
