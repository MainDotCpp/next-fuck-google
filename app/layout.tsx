import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import "./globals.css";
import Loading from "./loading";
import { checkAccess, mockCheckAccess } from "@/lib/api";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// 设置为动态渲染，以便调用接口
export const dynamic = "force-dynamic";

/**
 * 过滤检查：在 Suspense 内部执行，以便显示 loading
 */
async function CheckAccess({ children }: { children: React.ReactNode }) {
	// 从 middleware 设置的 header 中获取原始路径
	const headersList = await headers();
	const pathname = headersList.get("x-original-path") || headersList.get("x-pathname") || "/";
	
	// 调用过滤接口
	// 开发时使用 mockCheckAccess，生产时使用 checkAccess
	const allowed = await mockCheckAccess(pathname, 500, true);
	// const allowed = await checkAccess(pathname);

	// 如果接口返回 false，直接显示 404
	if (!allowed) {
		notFound();
	}

	return <>{children}</>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {/* 使用 Suspense 包装，调用过滤接口时会显示 loading */}
        <Suspense fallback={<Loading/>}>
          <div className="page-content">
            <CheckAccess>{children}</CheckAccess>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
