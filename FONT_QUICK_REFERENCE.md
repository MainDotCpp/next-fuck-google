# 字体配置快速参考

## 🚀 快速开始

### 1. 添加新字体

```typescript
// lib/fonts.ts
import { Font_Name } from 'next/font/google'

export const myFont = Font_Name({
  variable: '--font-my-font',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
```

### 2. 创建页面布局

```typescript
// app/your-page/layout.tsx
import { myFont } from '@/lib/fonts'

export default function PageLayout({ children }) {
  return <div className={myFont.variable}>{children}</div>
}
```

### 3. 定义 CSS 变量

```css
/* app/globals.css */
@theme inline {
  --font-my-style: var(--font-my-font), "Font Name", fallback, serif;
}
```

### 4. 在组件中使用

```typescript
// 组件中
<h1 className="[font-family:var(--font-my-font)]">标题</h1>
// 或使用语义化变量
<h1 className="[font-family:var(--font-my-style)]">标题</h1>
```

---

## 📋 常用配置模板

### 日文字体

```typescript
import { Kaisei_Decol } from 'next/font/google'

export const kaiseiDecol = Kaisei_Decol({
  variable: '--font-kaisei-decol',
  weight: ['400', '500', '700'],
  subsets: ['latin'], // 某些版本可能需要移除 subsets
  display: 'swap',
  preload: true,
})
```

### 英文字体

```typescript
import { Inter } from 'next/font/google'

export const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
```

### 本地字体

```typescript
import localFont from 'next/font/local'

export const localCustomFont = localFont({
  src: [
    {
      path: '../public/fonts/CustomFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/CustomFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
  display: 'swap',
})
```

---

## 🎯 常见问题速查

| 问题 | 解决方案 |
|------|---------|
| 字体不显示 | 1. 检查布局中是否应用了 `font.variable`<br>2. 检查 CSS 变量是否正确定义<br>3. 检查浏览器控制台是否有加载错误 |
| 字体加载慢 | 1. 启用 `preload: true`<br>2. 使用 `display: 'swap'`<br>3. 只加载需要的字重 |
| TypeScript 错误 | 移除 `subsets: ['japanese']` 或只使用 `['latin']` |
| 影响其他页面 | 使用页面级布局，不要在全球布局中应用 |

---

## 📝 文件结构示例

```
lib/
  └── fonts.ts                    # 所有字体定义

app/
  ├── layout.tsx                  # 根布局（不应用字体）
  ├── globals.css                 # CSS 变量定义
  └── (protected)/
      └── your-page/
          ├── layout.tsx          # 页面布局（应用字体）
          └── page.tsx            # 页面组件（使用字体）
```

---

## ✅ 最佳实践检查清单

- [ ] 字体定义在 `lib/fonts.ts`
- [ ] 使用页面级布局应用字体
- [ ] CSS 变量在 `globals.css` 中定义
- [ ] 提供后备字体
- [ ] 只加载需要的字重
- [ ] 启用 `preload` 和 `display: 'swap'`
- [ ] 使用语义化 CSS 变量名

---

详细文档请参考：[FONT_BEST_PRACTICES.md](./FONT_BEST_PRACTICES.md)
