/**
 * 中间件示例：如何处理耗时逻辑并显示 loading
 * 
 * 注意：这个文件仅作为示例，实际使用的是 next.config.ts 中的 rewrites
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	
	// ⚠️ 问题：如果这里有耗时逻辑，用户会看到白屏
	// 例如：数据库查询、API 调用、复杂计算等
	// const result = await expensiveOperation(); // 耗时操作
	
	// ✅ 解决方案1：快速返回，将耗时逻辑移到页面组件
	// 中间件只做快速的路由判断，复杂逻辑在页面组件中使用 Suspense
	
	// ✅ 解决方案2：如果必须在中间件中执行耗时逻辑
	// 可以考虑使用 streaming 或提前返回一个 loading 响应
	// 但这需要更复杂的实现
	
	// 当前示例：快速返回，不阻塞
	return NextResponse.next();
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
	],
};

