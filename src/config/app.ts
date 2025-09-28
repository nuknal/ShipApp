export interface AppFeature {
  title: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'green' | 'pink' | 'orange' | 'red' | 'blue' | 'purple';
}

export interface AppTestimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface AppScreenshot {
  title: string;
  description: string;
  image: string;
}

export interface AppFAQ {
  question: string;
  answer: string;
}

export interface AppConfig {
  // 基本信息
  name: string;
  tagline: string;
  description: string;
  
  // 下载链接
  appStore: {
    ios?: string;
    android?: string;
  };
  
  // 社交媒体和联系方式
  social: {
    twitter?: string;
    email?: string;
    website?: string;
  };
  
  // 应用评分
  rating: {
    score: number;
    total: number;
  };
  
  // 功能特性
  features: AppFeature[];
  
  // 用户评价
  testimonials: AppTestimonial[];
  
  // 应用截图
  screenshots: AppScreenshot[];
  
  // 常见问题
  faqs: AppFAQ[];
  
  // 品牌颜色（可选，使用默认主题色）
  colors?: {
    primary?: string;
    secondary?: string;
  };
}

// 默认配置 - 开发者可以修改这些值来定制自己的应用
export const appConfig: AppConfig = {
  name: "ShipApp",
  tagline: "Ship your app faster than ever",
  description: "The ultimate mobile app landing page template to help developers create stunning websites for their iOS and Android apps.",
  
  appStore: {
    ios: "https://apps.apple.com/app/your-app-id",
    android: "https://play.google.com/store/apps/details?id=com.yourcompany.yourapp"
  },
  
  social: {
    twitter: "@shipapp",
    email: "contact@shipapp.com",
    website: "https://shipapp.com"
  },
  
  rating: {
    score: 4.8,
    total: 1250
  },
  
  features: [
    {
      title: "Feature One",
      description: "Description of your first amazing feature that users will love.",
      icon: "brain",
      color: "primary"
    },
    {
      title: "Feature Two", 
      description: "Description of your second amazing feature that solves user problems.",
      icon: "wand-magic-sparkles",
      color: "secondary"
    },
    {
      title: "Feature Three",
      description: "Description of your third feature that makes your app unique.",
      icon: "camera",
      color: "green"
    },
    {
      title: "Feature Four",
      description: "Description of your fourth feature that adds value for users.",
      icon: "star",
      color: "pink"
    },
    {
      title: "Feature Five",
      description: "Description of your fifth feature that enhances user experience.",
      icon: "chart-line",
      color: "orange"
    },
    {
      title: "Feature Six",
      description: "Description of your sixth feature that completes the experience.",
      icon: "heart",
      color: "red"
    }
  ],
  
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Happy User",
      content: "This app has completely transformed how I approach daily tasks. The interface is intuitive and the features are exactly what I needed.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Professional User",
      content: "I've tried many similar apps, but this one stands out with its attention to detail and user experience. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Regular User",
      content: "Simple, effective, and beautifully designed. This app has become an essential part of my daily routine.",
      rating: 5
    }
  ],
  
  screenshots: [
    {
      title: "Main Interface",
      description: "Clean and intuitive main interface with modern design and easy navigation",
      image: "/images/screenshots/profile.svg"
    },
    {
      title: "Feature Overview", 
      description: "Comprehensive feature showcase with beautiful UI components and smooth animations",
      image: "/images/screenshots/settings.svg"
    },
    {
      title: "User Profile",
      description: "Personalized user dashboard with statistics and project management",
      image: "/images/screenshots/profile.svg"
    },
    {
      title: "Settings Panel",
      description: "Customizable settings with dark mode support and advanced preferences",
      image: "/images/screenshots/settings.svg"
    },
    {
      title: "Notifications",
      description: "Smart notification system with categorized alerts and real-time updates",
      image: "/images/screenshots/notifications.svg"
    }
  ],
  
  faqs: [
    {
      question: "How do I get started with the app?",
      answer: "Simply download the app from the App Store or Google Play, create an account, and follow the onboarding process. It takes less than 2 minutes to get started."
    },
    {
      question: "Is the app free to use?",
      answer: "The app offers a free tier with essential features. Premium features are available through a subscription for enhanced functionality."
    },
    {
      question: "What devices are supported?",
      answer: "The app is available for iOS 14.0+ and Android 8.0+. It works on phones and tablets with full responsive design."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team through the app's help section, or email us directly at contact@yourapp.com. We typically respond within 24 hours."
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes, most core features work offline. Some features require internet connectivity for syncing and updates."
    }
  ]
};
