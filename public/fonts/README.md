# 字体文件目录

将字体文件（.woff2, .woff, .ttf, .otf）放在这个目录中。

## 推荐的文件命名格式

```
FontName-Regular.woff2
FontName-Medium.woff2
FontName-Bold.woff2
FontName-Black.woff2
```

或者：

```
FontName-400.woff2
FontName-500.woff2
FontName-700.woff2
FontName-900.woff2
```

## 如何下载字体

### 方法 1：从 Google Fonts 下载

1. 访问 https://fonts.google.com/
2. 搜索字体（如 "Noto Sans JP"）
3. 点击字体卡片
4. 点击右上角 "Download family"
5. 解压后将 `.woff2` 文件复制到此目录

### 方法 2：使用字体转换工具

如果只有 .ttf 或 .otf 文件，可以使用在线工具转换为 .woff2：

- https://cloudconvert.com/ttf-to-woff2
- https://convertio.co/ttf-woff2/

### 方法 3：使用命令行工具

```bash
# 安装 woff2 工具（macOS）
brew install woff2

# 转换字体
woff2_compress font.ttf
```

## 文件大小建议

- 单个字体文件建议 < 200KB
- 如果文件太大，考虑使用字体子集化工具
- 只包含需要的字符集（日文、拉丁文等）

## 注意事项

- 确保字体文件有使用许可
- 商业字体需要购买许可证
- Google Fonts 的字体都是开源免费的
