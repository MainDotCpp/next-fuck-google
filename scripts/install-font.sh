#!/bin/bash

# 字体安装脚本
# 使用方法: ./scripts/install-font.sh [font-name]

set -e

FONT_DIR="public/fonts"
FONT_NAME=${1:-"Noto_Sans_JP"}

echo "📦 准备安装字体: $FONT_NAME"
echo "📁 字体目录: $FONT_DIR"

# 创建字体目录
mkdir -p "$FONT_DIR"

# 检查是否安装了必要的工具
if ! command -v curl &> /dev/null; then
    echo "❌ 错误: 需要安装 curl"
    exit 1
fi

echo ""
echo "请选择安装方式:"
echo "1) 从 Google Fonts 下载（需要手动下载）"
echo "2) 查看可用字体列表"
echo "3) 退出"
read -p "请选择 (1-3): " choice

case $choice in
    1)
        echo ""
        echo "📥 请按照以下步骤下载字体:"
        echo ""
        echo "1. 访问 https://fonts.google.com/"
        echo "2. 搜索字体名称: $FONT_NAME"
        echo "3. 点击字体卡片"
        echo "4. 点击右上角 'Download family'"
        echo "5. 解压文件"
        echo "6. 将 .woff2 文件复制到 $FONT_DIR/ 目录"
        echo ""
        echo "完成后，在 lib/fonts.ts 中配置字体。"
        ;;
    2)
        echo ""
        echo "📋 推荐的日文字体列表:"
        echo ""
        echo "Google Fonts 可用字体:"
        echo "  - Noto_Sans_JP (已安装)"
        echo "  - Noto_Serif_JP (已安装)"
        echo "  - M_PLUS_Rounded_1c (已安装)"
        echo "  - Zen_Kaku_Gothic_New"
        echo "  - Kosugi_Maru"
        echo "  - Sawarabi_Gothic"
        echo "  - Shippori_Mincho"
        echo ""
        echo "使用方法:"
        echo "  1. 在 lib/fonts.ts 中取消注释对应字体的导入"
        echo "  2. 在 app/layout.tsx 中添加字体变量"
        echo "  3. 在 CSS 中使用字体变量"
        ;;
    3)
        echo "退出"
        exit 0
        ;;
    *)
        echo "无效选择"
        exit 1
        ;;
esac

echo ""
echo "✅ 完成！查看 FONT_INSTALLATION.md 了解更多信息。"
