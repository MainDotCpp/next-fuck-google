# 字体安装指南

## 方法一：使用 next/font/local（推荐 - 本地字体文件）

这是最灵活的方法，可以使用任何字体文件。

### 步骤 1：创建字体目录

```bash
mkdir -p public/fonts
```

### 步骤 2：下载字体文件

将字体文件（.woff2, .woff, .ttf, .otf）放到 `public/fonts/` 目录。

**推荐的日文字体下载源：**
- [Google Fonts](https://fonts.google.com/) - 搜索日文字体，下载文件
- [Adobe Fonts](https://fonts.adobe.com/) - 需要订阅
- [Font Squirrel](https://www.fontsquirrel.com/) - 免费字体
- [Noto CJK](https://www.google.com/get/noto/) - Google 官方日文字体

### 步骤 3：配置字体

在 `lib/fonts.ts` 中添加本地字体配置：

```typescript
import localFont from 'next/font/local'

// 示例：安装本地字体
export const customFont = localFont({
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

## 方法二：通过 npm 安装字体包

某些字体可以通过 npm 安装：

```bash
# 安装字体包（如果可用）
pnpm add @fontsource/noto-sans-jp
pnpm add @fontsource/noto-serif-jp
```

然后在代码中导入：

```typescript
import '@fontsource/noto-sans-jp/400.css'
import '@fontsource/noto-sans-jp/700.css'
```

## 方法三：使用 Google Fonts（当前方法）

当前项目已经使用 `next/font/google`，这是最简单的方法：

```typescript
import { Noto_Sans_JP } from 'next/font/google'

export const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['japanese', 'latin'],
  weight: ['400', '700'],
})
```

## 推荐的日文字体

### 1. Noto Sans JP（已安装）
- 来源：Google Fonts
- 特点：专业、现代、易读
- 安装：已通过 `next/font/google` 安装

### 2. Noto Serif JP（已安装）
- 来源：Google Fonts
- 特点：优雅、传统、有权威感
- 安装：已通过 `next/font/google` 安装

### 3. M PLUS Rounded 1c（已安装）
- 来源：Google Fonts
- 特点：圆润、友好
- 安装：已通过 `next/font/google` 安装

### 4. 其他推荐的日文字体

**可以通过 Google Fonts 安装：**
- Kosugi Maru（圆润可爱）
- Sawarabi Gothic（传统日式）
- Zen Kaku Gothic（现代简洁）
- Shippori Mincho（传统衬线）

## 快速安装示例

### 安装 Zen Kaku Gothic

1. 更新 `lib/fonts.ts`：

```typescript
import { Zen_Kaku_Gothic_New } from 'next/font/google'

export const zenKakuGothic = Zen_Kaku_Gothic_New({
  variable: '--font-zen-kaku-gothic',
  subsets: ['japanese', 'latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
})
```

2. 在 `app/layout.tsx` 中添加：

```typescript
import { zenKakuGothic } from '@/lib/fonts'

// 在 body className 中添加
className={`${zenKakuGothic.variable} ...`}
```

3. 在 CSS 中使用：

```css
.font-zen-kaku {
  font-family: var(--font-zen-kaku-gothic);
}
```

## 下载字体文件的步骤

### 从 Google Fonts 下载：

1. 访问 [Google Fonts](https://fonts.google.com/)
2. 搜索字体（如 "Noto Sans JP"）
3. 点击字体卡片
4. 点击右上角的 "Download family"
5. 解压文件
6. 将 `.woff2` 文件复制到 `public/fonts/` 目录

### 使用命令行下载（macOS/Linux）：

```bash
# 创建字体目录
mkdir -p public/fonts

# 下载 Noto Sans JP（示例）
curl -o public/fonts/NotoSansJP-Regular.woff2 \
  "https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75s.ttf"
```

## 字体文件格式说明

- **.woff2** - 推荐，最小文件大小，最佳性能
- **.woff** - 良好兼容性
- **.ttf** - 传统格式，文件较大
- **.otf** - OpenType 格式

## 性能优化建议

1. **只加载需要的权重** - 不要加载所有字体权重
2. **使用 woff2 格式** - 文件最小
3. **启用 preload** - 对主要字体启用预加载
4. **使用 display: 'swap'** - 确保文本可见
5. **子集化字体** - 只包含需要的字符集

## 故障排除

### 字体不显示？
1. 检查文件路径是否正确
2. 确认字体文件格式支持
3. 检查浏览器控制台错误
4. 清除浏览器缓存

### 字体加载慢？
1. 减少字体权重数量
2. 使用 woff2 格式
3. 启用字体预加载
4. 考虑使用系统字体作为后备
