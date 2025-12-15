# 字体应用策略对比

## 🤔 问题

是否每个页面都需要创建一个 `layout.tsx` 来应用字体？

**答案：不一定！** 有多种方案，根据场景选择。

---

## 📊 方案对比

### 方案 1: 页面级 Layout（当前方案）

**适用场景：** 单个页面需要特定字体

```typescript
// app/(protected)/JP/page1/layout.tsx
import { kaiseiDecol } from '@/lib/fonts'

export default function PageLayout({ children }) {
  return <div className={kaiseiDecol.variable}>{children}</div>
}
```

**优点：**
- ✅ 页面隔离，不影响其他页面
- ✅ 符合 Next.js 最佳实践
- ✅ 字体变量自动传递给所有子组件

**缺点：**
- ❌ 每个页面都需要一个 layout 文件
- ❌ 如果多个页面用同一字体，会有重复代码

---

### 方案 2: 在页面组件中直接应用（推荐）

**适用场景：** 单个页面需要特定字体，不想创建 layout

```typescript
// app/(protected)/JP/page1/page.tsx
import { kaiseiDecol } from '@/lib/fonts'

export default function LandingPage() {
  return (
    <div className={`... ${kaiseiDecol.variable}`}>
      {/* 页面内容 */}
    </div>
  )
}
```

**优点：**
- ✅ 不需要额外的 layout 文件
- ✅ 代码更简洁
- ✅ 字体变量仍然可以传递给子组件

**缺点：**
- ⚠️ 需要在每个页面组件中导入字体
- ⚠️ 如果页面根元素不是 `<div>`，可能需要包装

**当前项目已在使用此方案！** ✅

---

### 方案 3: 父级布局应用（批量应用）

**适用场景：** 多个页面使用相同字体

```typescript
// app/(protected)/JP/layout.tsx - 为所有 JP 页面应用字体
import { kaiseiDecol } from '@/lib/fonts'

export default function JPLayout({ children }) {
  return <div className={kaiseiDecol.variable}>{children}</div>
}

// 这样所有 /JP/* 下的页面都会使用这个字体
// app/(protected)/JP/page1/page.tsx - 不需要 layout
// app/(protected)/JP/page2/page.tsx - 不需要 layout
```

**优点：**
- ✅ 一个 layout 覆盖多个页面
- ✅ 减少重复代码
- ✅ 统一管理

**缺点：**
- ❌ 影响范围较大，可能影响不需要该字体的页面
- ❌ 如果某个页面需要不同字体，需要覆盖

---

### 方案 4: 创建可复用组件

**适用场景：** 需要在多个地方使用相同字体包装

```typescript
// components/font-wrapper.tsx
import { kaiseiDecol } from '@/lib/fonts'

export function FontWrapper({ 
  children, 
  font = kaiseiDecol 
}: { 
  children: React.ReactNode
  font?: ReturnType<typeof kaiseiDecol>
}) {
  return <div className={font.variable}>{children}</div>
}

// 在页面中使用
import { FontWrapper } from '@/components/font-wrapper'

export default function Page() {
  return (
    <FontWrapper>
      {/* 页面内容 */}
    </FontWrapper>
  )
}
```

**优点：**
- ✅ 可复用
- ✅ 灵活，可以传入不同字体
- ✅ 统一管理

**缺点：**
- ⚠️ 需要额外的组件文件
- ⚠️ 增加一层 DOM 嵌套

---

## 🎯 推荐方案

### 场景 1: 单个页面需要特定字体

**推荐：方案 2（在页面组件中直接应用）**

```typescript
// page.tsx
import { kaiseiDecol } from '@/lib/fonts'

export default function Page() {
  return (
    <div className={`... ${kaiseiDecol.variable}`}>
      {/* 内容 */}
    </div>
  )
}
```

**理由：**
- 简单直接
- 不需要额外的 layout 文件
- 当前项目已经在使用

---

### 场景 2: 多个页面使用相同字体

**推荐：方案 3（父级布局应用）**

```typescript
// app/(protected)/JP/layout.tsx
import { kaiseiDecol } from '@/lib/fonts'

export default function JPLayout({ children }) {
  return <div className={kaiseiDecol.variable}>{children}</div>
}
```

**理由：**
- 一个 layout 覆盖多个页面
- 减少重复代码
- 统一管理

---

### 场景 3: 需要灵活切换字体

**推荐：方案 4（可复用组件）**

```typescript
// components/font-wrapper.tsx
export function FontWrapper({ children, font }) {
  return <div className={font.variable}>{children}</div>
}
```

**理由：**
- 灵活，可以传入不同字体
- 可复用
- 统一管理

---

## 📝 实际项目建议

### 当前项目的最佳实践

根据你的项目结构，建议：

1. **单个页面需要特定字体** → 使用方案 2（在页面组件中直接应用）
   ```typescript
   // page.tsx
   import { kaiseiDecol } from '@/lib/fonts'
   <div className={`... ${kaiseiDecol.variable}`}>
   ```

2. **多个页面使用相同字体** → 使用方案 3（父级布局）
   ```typescript
   // app/(protected)/JP/layout.tsx
   // 为所有 /JP/* 页面应用字体
   ```

3. **需要灵活切换** → 使用方案 4（可复用组件）
   ```typescript
   // components/font-wrapper.tsx
   ```

### 混合使用

你可以同时使用多种方案：

```typescript
// 1. 父级布局：为所有 JP 页面设置默认字体
// app/(protected)/JP/layout.tsx
import { notoSansJP } from '@/lib/fonts'
export default function JPLayout({ children }) {
  return <div className={notoSansJP.variable}>{children}</div>
}

// 2. 特定页面：覆盖为特殊字体
// app/(protected)/JP/page1/page.tsx
import { kaiseiDecol } from '@/lib/fonts'
export default function Page() {
  return (
    <div className={`... ${kaiseiDecol.variable}`}>
      {/* 这个页面使用 Kaisei Decol，覆盖父级布局的字体 */}
    </div>
  )
}
```

---

## ✅ 总结

| 方案 | 适用场景 | 是否需要 layout | 推荐度 |
|------|---------|----------------|--------|
| 方案 1: 页面级 Layout | 单个页面 | ✅ 需要 | ⭐⭐⭐ |
| 方案 2: 页面组件直接应用 | 单个页面 | ❌ 不需要 | ⭐⭐⭐⭐⭐ |
| 方案 3: 父级布局 | 多个页面 | ✅ 需要（父级） | ⭐⭐⭐⭐ |
| 方案 4: 可复用组件 | 灵活切换 | ❌ 不需要 | ⭐⭐⭐ |

**结论：** 不是每个页面都需要 layout！根据实际需求选择合适的方案。
