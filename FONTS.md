# 字体配置说明

## 当前方案：Noto Sans JP（已应用）

已为日文落地页配置了 **Noto Sans JP** 字体，这是 Google 专门为日文优化的字体，具有以下优点：

- ✅ 完整的日文字符集支持
- ✅ 优秀的可读性
- ✅ 现代、专业的视觉效果
- ✅ Next.js 自动优化（字体文件在构建时下载并自托管）

## 如何切换到其他方案

### 方案二：M PLUS Rounded 1c（圆润友好）

如果您想要更圆润、友好的字体风格，可以切换到 M PLUS Rounded 1c：

**步骤：**
1. 打开 `app/layout.tsx`
2. 将 `notoSansJP` 替换为 `mPlusRounded`：

```typescript
import { mPlusRounded, geistMono } from '@/lib/fonts'

// 在 body className 中
className={`${mPlusRounded.variable} ${geistMono.variable} antialiased h-full`}
```

3. 更新 `app/globals.css` 中的字体栈：

```css
--font-sans: var(--font-m-plus-rounded), "M PLUS Rounded 1c", "Hiragino Kaku Gothic ProN", sans-serif;
```

### 方案三：系统字体栈（最佳性能）

如果您想要最佳性能（不加载外部字体），可以使用系统字体：

**步骤：**
1. 打开 `app/layout.tsx`
2. 移除字体导入，直接使用系统字体：

```typescript
// 移除字体导入
// import { notoSansJP, geistMono } from '@/lib/fonts'

// 在 body className 中
className={`${geistMono.variable} antialiased h-full`}
```

3. 更新 `app/globals.css`：

```css
--font-sans: "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo", "MS PGothic", "Yu Gothic", "YuGothic", sans-serif;
```

### 方案四：混合方案（Inter + Noto Sans JP）

如果您需要英文和日文使用不同字体：

**步骤：**
1. 打开 `app/layout.tsx`
2. 导入两个字体：

```typescript
import { inter, notoSansJP, geistMono } from '@/lib/fonts'

className={`${inter.variable} ${notoSansJP.variable} ${geistMono.variable} antialiased h-full`}
```

3. 更新 `app/globals.css`：

```css
--font-sans: var(--font-inter), var(--font-noto-sans-jp), "Noto Sans JP", sans-serif;
```

## 其他可用的日文字体选项

在 `lib/fonts.ts` 中，您还可以添加其他 Google Fonts 日文字体：

- **Noto Serif JP** - 衬线字体，适合正式文档
- **Zen Kaku Gothic** - 现代无衬线字体
- **Kosugi Maru** - 圆润可爱的字体
- **Sawarabi Gothic** - 传统日式风格

添加方式：

```typescript
import { Noto_Serif_JP } from 'next/font/google'

export const notoSerifJP = Noto_Serif_JP({
  variable: '--font-noto-serif-jp',
  subsets: ['japanese', 'latin'],
  weight: ['400', '700'],
  display: 'swap',
})
```

## 字体权重说明

当前配置的字体权重：
- `400` - 常规（Regular）
- `500` - 中等（Medium）
- `700` - 粗体（Bold）
- `900` - 超粗（Black）

如果不需要某些权重，可以从 `weight` 数组中移除以减少字体文件大小。

## 性能优化建议

1. **只加载需要的权重** - 移除不使用的字体权重
2. **使用 `preload: true`** - 对主要字体启用预加载
3. **使用 `display: 'swap'`** - 确保字体加载时文本可见
4. **考虑使用系统字体** - 如果性能优先，可以使用系统字体栈

## 测试字体

修改字体后，建议：
1. 清除浏览器缓存
2. 检查日文字符显示是否正确
3. 测试不同设备上的显示效果
4. 检查页面加载性能
