# 风格化字体使用指南

## 已配置的字体类型

### 1. **基础字体** (`--font-sans`)
- **字体**: Noto Sans JP
- **用途**: 正文、一般文本
- **特点**: 专业、现代、易读
- **使用方式**: 
  ```tsx
  <p className="...">正文内容</p>
  ```
  默认字体，无需特别指定

### 2. **标题字体** (`--font-serif`)
- **字体**: Noto Serif JP
- **用途**: 标题、重要声明、强调文本
- **特点**: 优雅、传统、有权威感
- **使用方式**:
  ```tsx
  <h1 className="[font-family:var(--font-serif)]">标题</h1>
  <CardTitle className="[font-family:var(--font-serif)]">卡片标题</CardTitle>
  ```

### 3. **数字字体** (`--font-display`)
- **字体**: Zen Kaku Gothic New
- **用途**: 数字、统计数据、百分比、强调数字
- **特点**: 现代、简洁、有力、醒目
- **使用方式**:
  ```tsx
  <span className="[font-family:var(--font-display)] tracking-tight">12.5万</span>
  <span className="[font-family:var(--font-display)]">4倍以上</span>
  ```

### 4. **超大数字字体** (`--font-impact`)
- **字体**: Bebas Neue
- **用途**: 超大数字、醒目标题、统计数据
- **特点**: 粗壮、现代、冲击力强
- **使用方式**:
  ```tsx
  <div className="[font-family:var(--font-impact)] tracking-tight">12.5万</div>
  ```

### 5. **友好字体** (`--font-rounded`)
- **字体**: M PLUS Rounded 1c
- **用途**: 按钮文本、友好提示、CTA
- **特点**: 圆润、友好、亲和力强
- **使用方式**:
  ```tsx
  <Button className="[font-family:var(--font-rounded)]">按钮文本</Button>
  ```

### 6. **英文标题字体** (`--font-heading-en`)
- **字体**: Poppins
- **用途**: 英文标题、数字（如果需要英文风格）
- **特点**: 现代、几何、醒目
- **使用方式**:
  ```tsx
  <h2 className="[font-family:var(--font-heading-en)]">English Title</h2>
  ```

## 在落地页中的应用示例

### 标题使用衬线字体
```tsx
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold [font-family:var(--font-serif)]">
  主标题
</h1>
```

### 数字使用显示字体
```tsx
<span className="text-2xl sm:text-3xl font-extrabold [font-family:var(--font-display)] tracking-tight">
  1日で7〜12％
</span>
```

### 超大数字使用冲击字体
```tsx
<div className="text-3xl font-bold [font-family:var(--font-impact)] tracking-tight">
  12.5万
</div>
```

### 按钮使用友好字体
```tsx
<Button className="[font-family:var(--font-rounded)]">
  今すぐ無料相談する
</Button>
```

### 重要声明使用衬线字体
```tsx
<p className="text-xl font-bold [font-family:var(--font-serif)]">
  "資金の移動"という明確なサイン。
</p>
```

## Tailwind CSS 类名快捷方式

如果您想创建 Tailwind 类名快捷方式，可以在 `tailwind.config.ts` 中添加：

```typescript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-noto-sans-jp)', 'sans-serif'],
        'serif': ['var(--font-noto-serif-jp)', 'serif'],
        'display': ['var(--font-zen-kaku-gothic)', 'sans-serif'],
        'rounded': ['var(--font-m-plus-rounded)', 'sans-serif'],
        'impact': ['var(--font-bebas-neue)', 'sans-serif'],
        'heading-en': ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
}
```

然后可以直接使用：
```tsx
<h1 className="font-serif">标题</h1>
<span className="font-display">数字</span>
<Button className="font-rounded">按钮</Button>
```

## 字体组合建议

### 专业金融风格
- 标题: `--font-serif` (Noto Serif JP)
- 数字: `--font-display` (Zen Kaku Gothic New)
- 正文: `--font-sans` (Noto Sans JP)
- 按钮: `--font-rounded` (M PLUS Rounded 1c)

### 现代科技风格
- 标题: `--font-display` (Zen Kaku Gothic New)
- 数字: `--font-impact` (Bebas Neue)
- 正文: `--font-sans` (Noto Sans JP)
- 按钮: `--font-sans` (Noto Sans JP)

### 友好亲和风格
- 标题: `--font-rounded` (M PLUS Rounded 1c)
- 数字: `--font-display` (Zen Kaku Gothic New)
- 正文: `--font-sans` (Noto Sans JP)
- 按钮: `--font-rounded` (M PLUS Rounded 1c)

## 性能优化

- 只加载需要的字体权重
- 使用 `preload: true` 预加载主要字体
- 使用 `display: 'swap'` 确保文本可见
- 考虑使用系统字体作为后备

## 注意事项

1. **字体加载**: 某些字体可能较大，注意加载性能
2. **字符支持**: 确保字体支持所需的字符集（日文、英文等）
3. **视觉一致性**: 保持页面内字体使用的统一性
4. **移动端**: 测试移动设备上的字体显示效果
