/**
 * URL 路由映射配置
 * 格式：请求路径 -> 实际页面路径
 * 
 * 示例：
 * '/a' -> '/pages/page1' (显示 pages/page1/page.tsx 的内容)
 * '/b' -> '/pages/page1' (显示 pages/page1/page.tsx 的内容)
 * '/' -> '/pages/contact/form/data1' (显示 pages/contact/form/data1/page.tsx 的内容)
 */

export type RouteMapping = {
	[requestPath: string]: string;
};

export const routeMapping: RouteMapping = {
	"/":"/white/sites",
	"/a": "/pages/page1",
};

/**
 * 根据请求路径获取映射的目标页面路径
 * @param requestPath 请求的路径
 * @returns 映射的目标页面路径，如果不存在则返回 null
 */
export function getMappedPage(requestPath: string): string | null {
	// 规范化路径（确保以 / 开头，移除末尾的 /）
	const normalizedPath = requestPath === "" ? "/" : `/${requestPath.split("/").filter(Boolean).join("/")}`;
	return routeMapping[normalizedPath] || null;
}

