/**
 * 过滤接口
 * 返回 true 表示允许访问，false 表示显示 404
 */

/**
 * 调用过滤接口
 * @param path 当前访问的路径
 * @returns true 允许访问，false 显示 404
 */
export async function checkAccess(path: string): Promise<boolean> {
	try {
		// 替换为你的实际 API 地址
		const response = await fetch("https://api.example.com/check-access", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ path }),
			cache: "no-store", // 禁用缓存，确保每次请求都调用接口
		});

		if (!response.ok) {
			// 接口错误时默认返回 false（显示 404）
			return false;
		}

		const data = await response.json();
		// 根据实际接口返回格式调整
		// 假设接口返回 { allowed: true/false } 或直接返回 true/false
		return data.allowed ?? data ?? false;
	} catch (error) {
		console.error("Filter API call failed:", error);
		// 接口调用失败时默认返回 false（显示 404）
		return false;
	}
}

/**
 * 模拟过滤接口（开发时使用）
 * @param path 当前访问的路径
 * @param delay 延迟时间（毫秒）
 * @param allowed 是否允许访问
 */
export async function mockCheckAccess(
	path: string,
	delay: number = 1000,
	allowed: boolean = true
): Promise<boolean> {
	await new Promise((resolve) => setTimeout(resolve, delay));
	return allowed;
}

