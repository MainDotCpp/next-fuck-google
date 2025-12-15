# 快速安装字体指南

## 🚀 快速开始

### 方法 1：添加更多 Google Fonts（最简单）

1. **打开 `lib/fonts.ts`**
2. **取消注释想要使用的字体**，例如：

```typescript
// 取消注释这行
import { Zen_Kaku_Gothic_New, Kosugi_Maru } from 'next/font/google'

// 取消注释字体配置
export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: '--font-zen-kaku-gothic-new',
  subsets: ['japanese', 'latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
})
```

3. **在 `app/layout.tsx` 中添加字体变量**：

```typescript
import { zenKakuGothicNew } from '@/lib/fonts'

// 在 body className 中添加
className={`${zenKakuGothicNew.variable} ...`}
```

4. **在页面中使用**：

```tsx
<span className="[font-family:var(--font-zen-kaku-gothic-new)]">
  文本内容
</span>
```

### 方法 2：安装本地字体文件

1. **下载字体文件**
   - 访问 [Google Fonts](https://fonts.google.com/)
   - 搜索并下载字体（选择 .woff2 格式）

2. **将字体文件放到 `public/fonts/` 目录**

3. **在 `lib/fonts.ts` 中添加配置**：

```typescript
import localFont from 'next/font/local'

export const myCustomFont = localFont({
  src: [
    {
      path: '../public/fonts/MyFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MyFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-my-custom',
  display: 'swap',
})
```

4. **在 `app/layout.tsx` 中使用**：

```typescript
import { myCustomFont } from '@/lib/fonts'

className={`${myCustomFont.variable} ...`}
```

## 📦 推荐的日文字体

### 已安装的字体
- ✅ Noto Sans JP - 基础字体
- ✅ Noto Serif JP - 标题字体
- ✅ M PLUS Rounded 1c - 友好字体

### 可以快速添加的字体

**Zen Kaku Gothic New** - 现代数字字体
```typescript
// 在 lib/fonts.ts 中取消注释
export const zenKakuGothicNew = Zen_Kaku_Gothic_New({...})
```

**Kosugi Maru** - 圆润可爱字体
```typescript
export const kosugiMaru = Kosugi_Maru({
  variable: '--font-kosugi-maru',
  subsets: ['japanese', 'latin'],
  weight: ['400'],
})
```

**Sawarabi Gothic** - 传统日式字体
```typescript
export const sawarabiGothic = Sawarabi_Gothic({
  variable: '--font-sawarabi-gothic',
  subsets: ['japanese', 'latin'],
  weight: ['400'],
})
```

## 🎯 使用示例

### 在落地页中使用不同字体

```tsx
// 标题使用衬线字体
<h1 className="[font-family:var(--font-noto-serif-jp)]">
  标题
</h1>

// 数字使用现代字体
<span className="[font-family:var(--font-zen-kaku-gothic-new)]">
  12.5万
</span>

// 按钮使用友好字体
<Button className="[font-family:var(--font-m-plus-rounded)]">
  按钮文本
</Button>
```

## ⚡ 性能提示

1. **只加载需要的权重** - 不要加载所有字体权重
2. **使用 preload: true** - 对主要字体启用预加载
3. **减少字体数量** - 每个字体都会增加页面大小
4. **使用 display: 'swap'** - 确保文本可见

## 📚 更多信息

- 详细安装指南：查看 `FONT_INSTALLATION.md`
- 字体使用指南：查看 `FONT_USAGE.md`
- 本地字体示例：查看 `lib/fonts-local-example.ts`
