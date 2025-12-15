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
}

/**
 * 别名配置列表
 * 配置格式：
 * - { alias: '/page1', target: '/p1' } - 映射到 /p1
 * - { alias: '/cq', target: '/(protected)/pages/page1' } - 映射到 (protected) 路由组（需要检测）
 * - { alias: '/', target: '/white/sites' } - 映射到 /white/sites（不需要检测）
 *
 * 注意：
 * - 映射到 (protected) 路由组的路径会自动进行访问检测
 * - 映射到其他路径的不会进行检测
 */
export const routeAliases: RouteAlias[] = [
  // 注意：更具体的路由要放在前面，避免被根路径匹配
  // 需要检测的页面映射到 (protected) 路由组
  { alias: '/cq', target: '/(protected)/pages/page1' },
  // 不需要检测的页面映射到 white/sites
  { alias: '/', target: '/white/sites' },
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
 * 路由映射结果
 */
export interface RouteMappingResult {
  /** 映射的目标页面路径 */
  target: string
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
      }
    }
  }

  return null
}
