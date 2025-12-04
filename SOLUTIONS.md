# 中间件耗时逻辑显示 Loading 的解决方案

## 问题

如果中间件（middleware）中有复杂且耗时的逻辑（如数据库查询、API 调用等），用户会看到白屏，因为中间件在页面渲染之前执行。

## 解决方案

### 方案1：将耗时逻辑移到页面组件（推荐）⭐

**原理**：中间件只做快速的路由判断，耗时逻辑在页面组件中使用 `Suspense` + `loading.tsx`。

**优点**：
- ✅ 可以显示 loading 状态
- ✅ 用户体验好
- ✅ 符合 Next.js 最佳实践
- ✅ 支持 streaming

**实现步骤**：

1. 中间件快速返回：
```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  // 只做快速的路由判断
  const mappedPath = getMappedPage(pathname);
  if (mappedPath) {
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
```

2. 在页面组件中使用 Suspense：
```tsx
// app/pages/page1/page.tsx
import { Suspense } from "react";
import Loading from "./loading";

async function ExpensiveContent() {
  // 耗时操作
  await expensiveOperation();
  return <div>Content</div>;
}

export default function Page1() {
  return (
    <Suspense fallback={<Loading />}>
      <ExpensiveContent />
    </Suspense>
  );
}
```

### 方案2：在 Layout 中使用 Suspense

**原理**：在根 Layout 中使用 `Suspense` 包装所有子页面，当页面加载时会自动显示 `loading.tsx`。

**优点**：
- ✅ 全局生效，无需在每个页面添加
- ✅ 自动显示 loading

**缺点**：
- ⚠️ 如果页面是静态的，不会触发 loading
- ⚠️ 需要将页面设置为动态渲染

**实现**：
```tsx
// app/layout.tsx
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
```

### 方案3：使用动态路由 + 异步页面组件

**原理**：将页面设置为动态渲染，页面组件改为异步，这样 `loading.tsx` 会自动显示。

**实现**：
```tsx
// app/pages/page1/page.tsx
export const dynamic = "force-dynamic";

export default async function Page1() {
  // 耗时操作
  await expensiveOperation();
  return <div>Content</div>;
}
```

**注意**：需要在对应目录下创建 `loading.tsx` 文件。

## 推荐方案

**优先使用方案1**，因为：
1. 性能最好（静态页面可以预渲染）
2. 用户体验最佳（精确控制 loading 显示时机）
3. 符合 Next.js 最佳实践
4. 支持 streaming 和部分渲染

## 示例文件

- `middleware.example.ts` - 中间件示例
- `app/pages/page1/page-with-loading.example.tsx` - 方案1示例
- `app/layout-with-suspense.example.tsx` - 方案2示例

