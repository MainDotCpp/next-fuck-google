# 字体方案最佳实践

本文档总结了本项目中使用 Next.js 16 + Tailwind CSS 的字体配置最佳实践。

## 📋 目录

1. [架构概览](#架构概览)
2. [核心原则](#核心原则)
3. [实施步骤](#实施步骤)
4. [常见场景](#常见场景)
5. [性能优化](#性能优化)
6. [故障排查](#故障排查)

---

## 🏗️ 架构概览

### 文件结构

```
项目根目录/
├── lib/
│   └── fonts.ts              # 字体配置集中管理
├── app/
│   ├── layout.tsx              # 根布局（不应用字体）
│   ├── globals.css             # 全局 CSS 变量定义
│   └── (protected)/
│       └── JP/
│           └── page1/
│               ├── layout.tsx  # 页面级布局（应用字体）
│               └── page.tsx   # 页面组件（使用字体）
```

### 数据流

```
lib/fonts.ts (定义字体)
    ↓
页面级 layout.tsx (应用字体变量类)
    ↓
globals.css (定义 CSS 变量)
    ↓
页面组件 (使用 CSS 变量)
```

---

## 🎯 核心原则

### 1. **集中管理原则**

所有字体配置集中在 `lib/fonts.ts` 文件中，便于维护和复用。

```typescript
// ✅ 正确：集中管理
// lib/fonts.ts
import { Kaisei_Decol } from 'next/font/google'

export const kaiseiDecol = Kaisei_Decol({
  variable: '--font-kaisei-decol',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

// ❌ 错误：分散在各个文件中
// 不要在多个文件中重复定义字体
```

### 2. **页面级隔离原则**

使用 Next.js 的嵌套布局系统，只为特定页面应用字体，不影响其他页面。

```typescript
// ✅ 正确：页面级布局
// app/(protected)/JP/page1/layout.tsx
import { kaiseiDecol } from '@/lib/fonts'

export default function PageLayout({ children }) {
  return (
    <div className={kaiseiDecol.variable}>
      {children}
    </div>
  )
}

// ❌ 错误：在根布局中应用
// app/layout.tsx - 不要在这里应用特定字体
```

### 3. **CSS 变量系统原则**

在 `globals.css` 中定义语义化的 CSS 变量，提供后备字体。

```css
/* ✅ 正确：定义 CSS 变量 */
@theme inline {
  --font-stylized: var(--font-kaisei-decol), "Kaisei Decol", "Hiragino Mincho ProN", "Yu Mincho", serif;
}

/* ❌ 错误：直接使用字体名称 */
/* 不要直接在组件中硬编码字体名称 */
```

---

## 📝 实施步骤

### 步骤 1: 定义字体配置

在 `lib/fonts.ts` 中定义字体：

```typescript
import { Kaisei_Decol } from 'next/font/google'

/**
 * 风格化日文字体：Kaisei Decol（海青デコル）
 */
export const kaiseiDecol = Kaisei_Decol({
  variable: '--font-kaisei-decol',  // CSS 变量名
  weight: ['400', '500', '700'],      // 需要的字重
  subsets: ['latin'],                 // 字符集（日文字体可能需要 'japanese'）
  display: 'swap',                    // 字体加载策略
  preload: true,                      // 是否预加载
})
```

**关键配置说明：**

- `variable`: CSS 变量名，必须以 `--font-` 开头
- `weight`: 只加载需要的字重，减少文件大小
- `subsets`: 指定字符集，日文字体使用 `['japanese', 'latin']`
- `display: 'swap'`: 确保文本在字体加载时立即可见
- `preload: true`: 预加载关键字体，提升性能

### 步骤 2: 创建页面级布局

为需要特定字体的页面创建 `layout.tsx`：

```typescript
// app/(protected)/JP/page1/layout.tsx
import { kaiseiDecol } from '@/lib/fonts'

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={kaiseiDecol.variable}>
      {children}
    </div>
  )
}
```

**注意事项：**

- 布局组件必须是 Server Component（默认）
- 使用 `kaiseiDecol.variable` 类名来设置 CSS 变量
- 这个类名会在该布局及其子组件中生效

### 步骤 3: 定义全局 CSS 变量

在 `app/globals.css` 中定义语义化的 CSS 变量：

```css
@theme inline {
  /* 风格化日文字体 - Kaisei Decol */
  --font-stylized: var(--font-kaisei-decol), "Kaisei Decol", "Hiragino Mincho ProN", "Yu Mincho", serif;
  
  /* 其他字体变量... */
}
```

**后备字体策略：**

1. 首先使用 CSS 变量 `var(--font-kaisei-decol)`
2. 如果变量未定义，使用字体名称 `"Kaisei Decol"`
3. 如果字体未加载，使用系统字体 `"Hiragino Mincho ProN"`
4. 最后使用通用后备 `serif`

### 步骤 4: 在组件中使用字体

在页面组件中使用 Tailwind 的任意值语法：

```typescript
// app/(protected)/JP/page1/page.tsx
import { kaiseiDecol } from '@/lib/fonts'

export default function LandingPage() {
  return (
    <div className={`... ${kaiseiDecol.variable}`}>
      {/* 方法 1: 使用 CSS 变量 */}
      <h1 className="[font-family:var(--font-kaisei-decol)]">
        标题文本
      </h1>
      
      {/* 方法 2: 使用语义化变量 */}
      <h2 className="[font-family:var(--font-stylized)]">
        副标题文本
      </h2>
    </div>
  )
}
```

**使用方式：**

- `[font-family:var(--font-kaisei-decol)]`: 直接使用字体变量
- `[font-family:var(--font-stylized)]`: 使用语义化变量（推荐）

---

## 🎨 常见场景

### 场景 1: 全局字体

如果需要为整个应用设置默认字体：

```typescript
// app/layout.tsx
import { notoSansJP } from '@/lib/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

### 场景 2: 多页面不同字体

为不同页面使用不同字体：

```typescript
// app/(protected)/JP/page1/layout.tsx - 使用 Kaisei Decol
import { kaiseiDecol } from '@/lib/fonts'
export default function PageLayout({ children }) {
  return <div className={kaiseiDecol.variable}>{children}</div>
}

// app/(protected)/JP/page2/layout.tsx - 使用其他字体
import { kosugiMaru } from '@/lib/fonts'
export default function PageLayout({ children }) {
  return <div className={kosugiMaru.variable}>{children}</div>
}
```

### 场景 3: 混合字体

在同一页面中使用多种字体：

```typescript
// lib/fonts.ts
export const kaiseiDecol = Kaisei_Decol({ ... })
export const notoSansJP = Noto_Sans_JP({ ... })

// app/(protected)/JP/page1/layout.tsx
import { kaiseiDecol, notoSansJP } from '@/lib/fonts'

export default function PageLayout({ children }) {
  return (
    <div className={`${kaiseiDecol.variable} ${notoSansJP.variable}`}>
      {children}
    </div>
  )
}

// 在组件中使用
<h1 className="[font-family:var(--font-kaisei-decol)]">标题</h1>
<p className="[font-family:var(--font-noto-sans-jp)]">正文</p>
```

---

## ⚡ 性能优化

### 1. **只加载需要的字重**

```typescript
// ✅ 正确：只加载需要的字重
weight: ['400', '700']

// ❌ 错误：加载所有字重
weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
```

### 2. **使用 preload**

```typescript
// ✅ 正确：预加载关键字体
preload: true

// ❌ 错误：不预加载（可能导致 FOUT）
preload: false
```

### 3. **指定字符集**

```typescript
// ✅ 正确：只加载需要的字符集
subsets: ['latin']  // 或 ['japanese', 'latin'] 对于日文字体

// ❌ 错误：加载所有字符集（增加文件大小）
// 不指定 subsets 会加载所有可用字符集
```

### 4. **使用 display: 'swap'**

```typescript
// ✅ 正确：确保文本立即可见
display: 'swap'

// ❌ 错误：可能导致文本延迟显示
display: 'block'
```

---

## 🔧 故障排查

### 问题 1: 字体不显示

**可能原因：**

1. CSS 变量未正确设置
2. 字体文件未加载
3. 字符集不匹配

**解决方案：**

```typescript
// 1. 确保在布局中应用字体变量类
<div className={kaiseiDecol.variable}>

// 2. 检查字体配置
export const kaiseiDecol = Kaisei_Decol({
  variable: '--font-kaisei-decol',
  subsets: ['latin'], // 或 ['japanese', 'latin']
  // ...
})

// 3. 在组件中也应用字体变量类（双重保险）
<div className={`... ${kaiseiDecol.variable}`}>
```

### 问题 2: 字体加载慢

**解决方案：**

```typescript
// 1. 启用预加载
preload: true

// 2. 使用 display: 'swap'
display: 'swap'

// 3. 只加载需要的字重
weight: ['400', '700'] // 而不是所有字重
```

### 问题 3: TypeScript 错误

**错误：** `Type '"japanese"' is not assignable to type '...subsets'`

**解决方案：**

```typescript
// 某些 Next.js 版本可能不支持 'japanese' 子集
// 尝试移除 subsets 或只使用 'latin'
export const kaiseiDecol = Kaisei_Decol({
  variable: '--font-kaisei-decol',
  // subsets: ['japanese', 'latin'], // 如果报错，移除这行
  subsets: ['latin'],
  // ...
})
```

### 问题 4: 字体变量未传递

**解决方案：**

```typescript
// 方法 1: 在布局中应用（推荐）
// app/(protected)/JP/page1/layout.tsx
<div className={kaiseiDecol.variable}>{children}</div>

// 方法 2: 在页面组件中也应用（双重保险）
// app/(protected)/JP/page1/page.tsx
<div className={`... ${kaiseiDecol.variable}`}>
```

---

## 📚 参考资源

- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Google Fonts](https://fonts.google.com/)
- [Tailwind CSS Arbitrary Values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values)

---

## ✅ 检查清单

在实施字体方案时，确保：

- [ ] 字体配置集中在 `lib/fonts.ts`
- [ ] 使用页面级布局应用字体（不污染全局）
- [ ] 在 `globals.css` 中定义语义化 CSS 变量
- [ ] 提供合适的后备字体
- [ ] 只加载需要的字重和字符集
- [ ] 启用 `preload` 和 `display: 'swap'`
- [ ] 在组件中使用 Tailwind 任意值语法
- [ ] 测试字体在不同浏览器中的显示效果

---

## 🎯 总结

本项目的字体方案遵循以下最佳实践：

1. **集中管理** - 所有字体配置在 `lib/fonts.ts`
2. **页面隔离** - 使用嵌套布局只为特定页面应用字体
3. **CSS 变量** - 通过 CSS 变量系统实现灵活性和可维护性
4. **性能优化** - 只加载需要的资源，使用预加载和 swap 策略
5. **后备方案** - 提供多层后备字体确保兼容性

这种方案既保证了性能，又提供了灵活性，同时不会影响其他页面的字体设置。
