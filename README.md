# Mobile App Landing Page Template

A modern, mobile app landing page template designed specifically for iOS and Android app developers.

## Project Overview

This is a completely static, modern mobile app landing page template that includes:
- 🌐 **Professional Landing Page** - Showcase app features and brand value
- 📱 **Mobile-First Design** - Fully responsive, perfect display on all devices
- 🌍 **Multi-Language Support** - Built-in English and Chinese support, easy to extend to other languages
- ⚡ **Lightning Fast** - Static generation, CDN-friendly, SEO optimized
- 🎨 **Modern UI** - Supports dark/light themes with rich animations

## Core Features

### Landing Page Components
- **Hero Section** - Highlight the app's core value proposition
- **Feature Showcase** - Configurable feature grid
- **App Screenshots** - Display app interface and user experience
- **User Testimonials** - Real user feedback and ratings
- **Download Links** - App Store and Google Play download buttons
- **FAQ Section** - Frequently asked questions
- **Responsive Navigation** - Support for mobile and desktop

### Technical Features
- **Configuration-Driven** - Customize all content through simple configuration files
- **SEO Optimized** - Complete meta tags, structured data, sitemap
- **Performance Optimized** - Image optimization, code splitting, static generation
- **Accessibility** - WCAG compliant
- **PWA Ready** - Progressive Web App support

## Tech Stack

- **Framework**: Next.js 15 + React 19 + TypeScript
- **Styling**: TailwindCSS + Custom Components
- **Animation**: Framer Motion
- **Icons**: FontAwesome + Tabler Icons
- **Internationalization**: next-intl
- **Deployment**: Static export, supports any CDN

## Quick Start

### 1. Clone and Install

```bash
# Clone the template
git clone <repository-url> my-app-landing
cd my-app-landing

# Install dependencies
pnpm install
# or npm install
```

### 2. Configure App Information

Edit the `src/config/app.ts` file to modify basic app information:

```typescript
export const appConfig: AppConfig = {
  name: "Your App Name",
  tagline: "Your amazing app tagline", 
  description: "Your app description...",
  
  appStore: {
    ios: "https://apps.apple.com/app/your-app-id",
    android: "https://play.google.com/store/apps/details?id=com.yourcompany.yourapp"
  },
  
  // ... more configuration
}
```

### 3. Replace Image Assets

- Replace `public/logo.png` - App icon
- Replace `public/favicon.png` - Website icon  
- Add app screenshots to `public/images/screenshots/`

### 4. Start Development Server

```bash
pnpm dev
# or npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the result.

### 5. Build and Deploy

```bash
# Build static site
pnpm build

# Export static files (optional)
pnpm export
```

## Customization Guide

### Modify App Configuration

All app-related configurations are in `src/config/app.ts`:

- **Basic Information**: App name, tagline, description
- **Download Links**: App Store and Google Play links
- **Features**: Custom feature list and icons
- **User Testimonials**: Add real user feedback
- **Screenshots**: Configure app screenshots
- **FAQ**: Common questions and answers

### Multi-Language Content

1. Edit translation files:
   - `src/messages/en.json` - English content
   - `src/messages/zh.json` - Chinese content

2. Add new languages:
   - Create new language files in `src/messages/`
   - Update language configuration in `src/i18n/routing.ts`

### Custom Styling

- Theme colors are configured in `tailwind.config.js`
- Component styles use Tailwind CSS
- Custom CSS in `src/app/globals.css`

## Deployment

### Static Deployment (Recommended)

Supports deployment to any static hosting platform:

```bash
# Build static version
pnpm build
pnpm export

# Deploy the out/ directory to any CDN
```

### Vercel Deployment

1. Connect GitHub repository to Vercel
2. Automatic deployment, no additional configuration needed

### Netlify Deployment

1. Build command: `pnpm build`
2. Publish directory: `out`

## Development Guide

### Adding New Components

1. Create component in `src/components/`
2. Use configuration system to get data
3. Support multi-language and theme switching

### Modify Page Structure

Main page is in `src/app/[locale]/page.tsx`, containing all section components.

### Custom Icons

Add new icon mappings in the `iconMap` in `src/lib/utils.ts`.

## License

MIT License
