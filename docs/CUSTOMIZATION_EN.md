# Customization Guide

This guide will help you quickly customize your mobile app landing page template.

## 📋 Customization Checklist

Before getting started, please prepare the following materials:

- [ ] App name and tagline
- [ ] App description (1-2 sentences)
- [ ] App Store and Google Play download links
- [ ] App icon (PNG format, recommended 512x512px)
- [ ] App screenshots (3-5 images, recommended 1080x1920px)
- [ ] Feature list (3-6 main features)
- [ ] User testimonials (3-6 real feedback)
- [ ] Frequently asked questions and answers

## 🔧 Basic Configuration

### 1. App Basic Information

Edit `src/config/app.ts`:

```typescript
export const appConfig: AppConfig = {
  // Basic information
  name: "MyAwesome App",                    // App name
  tagline: "Make life better with our app",  // App tagline
  description: "This is an app that helps users...",  // App description
  
  // App rating
  rating: {
    score: 4.8,                            // Rating (1-5)
    total: 1250                            // Total reviews
  },
  
  // Download links
  appStore: {
    ios: "https://apps.apple.com/app/your-app-id",
    android: "https://play.google.com/store/apps/details?id=com.yourcompany.yourapp"
  },
  
  // Contact information
  social: {
    twitter: "@yourapp",
    email: "contact@yourapp.com",
    website: "https://yourapp.com"
  }
}
```

### 2. Feature Configuration

Configure features in the same file:

```typescript
features: [
  {
    title: "Smart Recommendations",
    description: "AI-powered recommendations tailored for you",
    icon: "brain",                         // Icon name
    color: "primary"                       // Color theme
  },
  {
    title: "Lightning Fast", 
    description: "Millisecond response time for smooth user experience",
    icon: "bolt",
    color: "orange"
  }
  // Supports up to 6 features
]
```

#### Available Icons

```typescript
// Icons defined in src/lib/utils.ts
'brain', 'wand-magic-sparkles', 'camera', 'star', 
'chart-line', 'heart', 'lightbulb', 'mobile', 
'shield', 'bolt', 'users', 'cog', 'check', 
'arrow-right', 'download'
```

#### Available Color Themes

```typescript
'primary', 'secondary', 'green', 'pink', 
'orange', 'red', 'blue', 'purple'
```

### 3. User Testimonials Configuration

```typescript
testimonials: [
  {
    name: "John Smith",
    role: "Product Manager", 
    content: "This app has truly transformed my workflow...",
    rating: 5
  }
  // Recommend 3-6 testimonials
]
```

### 4. App Screenshots Configuration

```typescript
screenshots: [
  {
    title: "Main Interface",
    description: "Clean and intuitive main interface design",
    image: "/images/screenshots/main.jpg"   // Image path
  }
  // Recommend 3-5 screenshots
]
```

### 5. FAQ Configuration

```typescript
faqs: [
  {
    question: "How do I get started?",
    answer: "After downloading the app, follow the onboarding guide to complete registration and start using it."
  }
  // Recommend 5-8 common questions
]
```

## 🎨 Visual Customization

### 1. Replace Image Assets

```bash
# App icon - recommended 512x512px PNG format
public/logo.png

# Website icon - recommended 32x32px PNG format  
public/favicon.png

# App screenshots - recommended 1080x1920px or proportional
public/images/screenshots/
├── main.jpg
├── features.jpg
└── settings.jpg
```

### 2. Custom Color Theme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#3b82f6',    // Primary color
        600: '#2563eb',
        // ... other shades
      },
      secondary: {
        500: '#8b5cf6',    // Secondary color
        // ... other shades
      }
    }
  }
}
```

### 3. Custom Fonts

In `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --font-family: 'Inter', sans-serif;
}
```

## 🌍 Multi-Language Customization

### 1. Edit Existing Languages

Edit translation files:

```bash
# English content
src/messages/en.json

# Chinese content  
src/messages/zh.json
```

### 2. Add New Languages

1. Create new language files:
```bash
src/messages/fr.json  # French
src/messages/ja.json  # Japanese
```

2. Update routing configuration `src/i18n/routing.ts`:
```typescript
export const routing = defineRouting({
  locales: ['en', 'zh', 'fr', 'ja'],
  defaultLocale: 'en'
});
```

### 3. Translation File Structure

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

## 🚀 Advanced Customization

### 1. Adding New Page Sections

1. Create component:
```typescript
// src/components/MyCustomSection.tsx
export default function MyCustomSection() {
  return (
    <section className="py-20">
      {/* Your content */}
    </section>
  )
}
```

2. Add to main page:
```typescript
// src/app/[locale]/page.tsx
import MyCustomSection from '@/components/MyCustomSection'

export default function HomePage() {
  return (
    <>
      <AppHeroSection />
      <MyCustomSection />
      {/* Other sections */}
    </>
  )
}
```

### 2. Custom Animations

Use Framer Motion to add animations:

```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### 3. Add Analytics Tools

Configure in `env.example`:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other analytics tools
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## ✅ Pre-Launch Checklist

- [ ] All configuration information updated
- [ ] Image assets replaced
- [ ] Download links tested
- [ ] Multi-language content translated
- [ ] Display tested on different devices
- [ ] SEO information optimized
- [ ] Build test passed

## 🆘 Common Questions

### Q: How to change website title and description?
A: Edit the metadata configuration in `src/app/[locale]/layout.tsx`.

### Q: How to add more icons?
A: Add new FontAwesome icon mappings in the `iconMap` in `src/lib/utils.ts`.

### Q: How to customize 404 page?
A: Create a `not-found.tsx` file in `src/app/[locale]/`.

### Q: Getting image optimization errors during build?
A: Make sure `images: { unoptimized: true }` is set in `next.config.ts`.

## 📞 Getting Help

If you encounter issues during customization:

1. Check [Next.js Documentation](https://nextjs.org/docs)
2. Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. Submit a GitHub Issue
4. Send email to support@template.com
