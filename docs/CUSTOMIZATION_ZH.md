# 定制指南

本指南将帮助您快速定制移动应用Landing Page模板。

## 📋 定制清单

在开始之前，请准备以下资料：

- [ ] 应用名称和标语
- [ ] 应用描述（1-2句话）
- [ ] App Store和Google Play下载链接
- [ ] 应用图标（PNG格式，建议512x512px）
- [ ] 应用截图（3-5张，建议1080x1920px）
- [ ] 功能特性列表（3-6个主要功能）
- [ ] 用户评价（3-6条真实反馈）
- [ ] 常见问题和答案

## 🔧 基础配置

### 1. 应用基本信息

编辑 `src/config/app.ts`：

```typescript
export const appConfig: AppConfig = {
  // 基本信息
  name: "MyAwesome App",                    // 应用名称
  tagline: "让生活更美好的应用",             // 应用标语
  description: "这是一个帮助用户...",        // 应用描述
  
  // 应用评分
  rating: {
    score: 4.8,                            // 评分（1-5）
    total: 1250                            // 评价总数
  },
  
  // 下载链接
  appStore: {
    ios: "https://apps.apple.com/app/your-app-id",
    android: "https://play.google.com/store/apps/details?id=com.yourcompany.yourapp"
  },
  
  // 联系方式
  social: {
    twitter: "@yourapp",
    email: "contact@yourapp.com",
    website: "https://yourapp.com"
  }
}
```

### 2. 功能特性配置

在同一文件中配置功能特性：

```typescript
features: [
  {
    title: "智能推荐",
    description: "基于AI算法为您推荐最适合的内容",
    icon: "brain",                         // 图标名称
    color: "primary"                       // 颜色主题
  },
  {
    title: "极速体验", 
    description: "毫秒级响应，流畅如丝的用户体验",
    icon: "bolt",
    color: "orange"
  }
  // 最多支持6个功能特性
]
```

#### 可用图标

```typescript
// 在 src/lib/utils.ts 中定义的图标
'brain', 'wand-magic-sparkles', 'camera', 'star', 
'chart-line', 'heart', 'lightbulb', 'mobile', 
'shield', 'bolt', 'users', 'cog', 'check', 
'arrow-right', 'download'
```

#### 可用颜色主题

```typescript
'primary', 'secondary', 'green', 'pink', 
'orange', 'red', 'blue', 'purple'
```

### 3. 用户评价配置

```typescript
testimonials: [
  {
    name: "张小明",
    role: "产品经理", 
    content: "这个应用真的改变了我的工作方式...",
    rating: 5
  }
  // 建议3-6条评价
]
```

### 4. 应用截图配置

```typescript
screenshots: [
  {
    title: "主界面",
    description: "简洁直观的主界面设计",
    image: "/images/screenshots/main.jpg"   // 图片路径
  }
  // 建议3-5张截图
]
```

### 5. FAQ配置

```typescript
faqs: [
  {
    question: "如何开始使用？",
    answer: "下载应用后，按照引导完成注册即可开始使用。"
  }
  // 建议5-8个常见问题
]
```

## 🎨 视觉定制

### 1. 替换图片资源

```bash
# 应用图标 - 建议512x512px PNG格式
public/logo.png

# 网站图标 - 建议32x32px PNG格式  
public/favicon.png

# 应用截图 - 建议1080x1920px或等比例
public/images/screenshots/
├── main.jpg
├── features.jpg
└── settings.jpg
```

### 2. 自定义颜色主题

编辑 `tailwind.config.js`：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#3b82f6',    // 主色调
        600: '#2563eb',
        // ... 其他色阶
      },
      secondary: {
        500: '#8b5cf6',    // 辅助色
        // ... 其他色阶
      }
    }
  }
}
```

### 3. 自定义字体

在 `src/app/globals.css` 中：

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --font-family: 'Inter', sans-serif;
}
```

## 🌍 多语言定制

### 1. 编辑现有语言

编辑翻译文件：

```bash
# 英文内容
src/messages/en.json

# 中文内容  
src/messages/zh.json
```

### 2. 添加新语言

1. 创建新语言文件：
```bash
src/messages/fr.json  # 法语
src/messages/ja.json  # 日语
```

2. 更新路由配置 `src/i18n/routing.ts`：
```typescript
export const routing = defineRouting({
  locales: ['en', 'zh', 'fr', 'ja'],
  defaultLocale: 'en'
});
```

### 3. 翻译文件结构

```json
{
  "AppHero": {
    "appName": "Your App Name",
    "headline": "Transform Your Life with",
    "headlineHighlight": "Smart Technology"
  },
  "AppFeatures": {
    "title": "Powerful Features",
    "description": "Everything you need in one app"
  }
}
```

## 🚀 高级定制

### 1. 添加新的页面区块

1. 创建组件：
```typescript
// src/components/MyCustomSection.tsx
export default function MyCustomSection() {
  return (
    <section className="py-20">
      {/* 你的内容 */}
    </section>
  )
}
```

2. 添加到主页：
```typescript
// src/app/[locale]/page.tsx
import MyCustomSection from '@/components/MyCustomSection'

export default function HomePage() {
  return (
    <>
      <AppHeroSection />
      <MyCustomSection />
      {/* 其他区块 */}
    </>
  )
}
```

### 2. 自定义动画

使用 Framer Motion 添加动画：

```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* 内容 */}
</motion.div>
```

### 3. 添加分析工具

在 `env.example` 中配置：

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 其他分析工具
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## ✅ 发布前检查清单

- [ ] 所有配置信息已更新
- [ ] 图片资源已替换
- [ ] 下载链接已测试
- [ ] 多语言内容已翻译
- [ ] 在不同设备上测试显示效果
- [ ] SEO信息已优化
- [ ] 构建测试通过

## 🆘 常见问题

### Q: 如何更改网站标题和描述？
A: 编辑 `src/app/[locale]/layout.tsx` 中的 metadata 配置。

### Q: 如何添加更多图标？
A: 在 `src/lib/utils.ts` 的 `iconMap` 中添加新的 FontAwesome 图标映射。

### Q: 如何自定义404页面？
A: 在 `src/app/[locale]/` 下创建 `not-found.tsx` 文件。

### Q: 构建时出现图片优化错误？
A: 确保 `next.config.ts` 中设置了 `images: { unoptimized: true }`。

## 📞 获取帮助

如果在定制过程中遇到问题：

1. 查看 [Next.js 文档](https://nextjs.org/docs)
2. 查看 [Tailwind CSS 文档](https://tailwindcss.com/docs)
3. 提交 GitHub Issue
4. 发送邮件到 support@template.com
