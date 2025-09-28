# Mobile App Landing Page Template

现代化的移动应用发布页面模板，专为iOS和Android应用开发者设计。

## 项目简介

这是一个完全静态的、现代化的移动应用Landing Page模板，包含：
- 🌐 **专业Landing Page** - 展示应用功能特性和品牌价值
- 📱 **移动优先设计** - 完全响应式，在所有设备上完美显示
- 🌍 **多语言支持** - 内置中英文支持，易于扩展其他语言
- ⚡ **极速加载** - 静态生成，CDN友好，SEO优化
- 🎨 **现代UI** - 支持深色/浅色主题，动画效果丰富

## 核心功能

### Landing Page组件
- **Hero区块** - 突出应用的核心价值主张
- **功能展示** - 可配置的功能特性网格
- **应用截图** - 展示应用界面和用户体验
- **用户评价** - 真实用户反馈和评分
- **下载链接** - App Store和Google Play下载按钮
- **FAQ区块** - 常见问题解答
- **响应式导航** - 支持移动端和桌面端

### 技术特性
- **配置驱动** - 通过简单配置文件定制所有内容
- **SEO优化** - 完整的meta标签、结构化数据、sitemap
- **性能优化** - 图片优化、代码分割、静态生成
- **无障碍访问** - 符合WCAG标准
- **PWA就绪** - 支持渐进式Web应用

## 技术栈

- **框架**: Next.js 15 + React 19 + TypeScript
- **样式**: TailwindCSS + 自定义组件
- **动画**: Framer Motion
- **图标**: FontAwesome + Tabler Icons
- **国际化**: next-intl
- **部署**: 静态导出，支持任意CDN

## 快速开始

### 1. 克隆并安装

```bash
# 克隆模板
git clone <repository-url> my-app-landing
cd my-app-landing

# 安装依赖
pnpm install
# 或者 npm install
```

### 2. 配置应用信息

编辑 `src/config/app.ts` 文件，修改应用基本信息：

```typescript
export const appConfig: AppConfig = {
  name: "Your App Name",
  tagline: "Your amazing app tagline", 
  description: "Your app description...",
  
  appStore: {
    ios: "https://apps.apple.com/app/your-app-id",
    android: "https://play.google.com/store/apps/details?id=com.yourcompany.yourapp"
  },
  
  // ... 更多配置
}
```

### 3. 替换图片资源

- 替换 `public/logo.png` - 应用图标
- 替换 `public/favicon.png` - 网站图标  
- 添加应用截图到 `public/images/screenshots/`

### 4. 启动开发服务器

```bash
pnpm dev
# 或者 npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 5. 构建和部署

```bash
# 构建静态站点
pnpm build

# 导出静态文件（可选）
pnpm export
```

## 定制指南

### 修改应用配置

所有应用相关的配置都在 `src/config/app.ts` 中：

- **基本信息**: 应用名称、标语、描述
- **下载链接**: App Store和Google Play链接
- **功能特性**: 自定义功能列表和图标
- **用户评价**: 添加真实用户反馈
- **截图展示**: 配置应用截图
- **FAQ**: 常见问题和答案

### 多语言内容

1. 编辑翻译文件：
   - `src/messages/en.json` - 英文内容
   - `src/messages/zh.json` - 中文内容

2. 添加新语言：
   - 在 `src/messages/` 下创建新的语言文件
   - 更新 `src/i18n/routing.ts` 中的语言配置

### 自定义样式

- 主题颜色在 `tailwind.config.js` 中配置
- 组件样式使用 Tailwind CSS
- 自定义CSS在 `src/app/globals.css` 中

## 部署

### 静态部署（推荐）

支持部署到任意静态托管平台：

```bash
# 构建静态版本
pnpm build
pnpm export

# 部署 out/ 目录到任意CDN
```

### Vercel部署

1. 连接GitHub仓库到Vercel
2. 自动部署，无需额外配置

### Netlify部署

1. 构建命令: `pnpm build`
2. 发布目录: `out`

## 开发指南

### 添加新组件

1. 在 `src/components/` 下创建组件
2. 使用配置系统获取数据
3. 支持多语言和主题切换

### 修改页面结构

主页面在 `src/app/[locale]/page.tsx`，包含所有区块组件。

### 自定义图标

在 `src/lib/utils.ts` 的 `iconMap` 中添加新图标映射。

## 许可证

MIT License
