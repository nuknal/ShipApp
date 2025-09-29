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
// 注意：这些是 i18n key，实际内容将从语言文件中获取
export const appConfig: AppConfig = {
  name: "AppConfig.name",
  tagline: "AppConfig.tagline", 
  description: "AppConfig.description",
  
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
      title: "AppConfig.features.feature1.title",
      description: "AppConfig.features.feature1.description",
      icon: "brain",
      color: "primary"
    },
    {
      title: "AppConfig.features.feature2.title", 
      description: "AppConfig.features.feature2.description",
      icon: "wand-magic-sparkles",
      color: "secondary"
    },
    {
      title: "AppConfig.features.feature3.title",
      description: "AppConfig.features.feature3.description",
      icon: "camera",
      color: "green"
    },
    {
      title: "AppConfig.features.feature4.title",
      description: "AppConfig.features.feature4.description",
      icon: "star",
      color: "pink"
    },
    {
      title: "AppConfig.features.feature5.title",
      description: "AppConfig.features.feature5.description",
      icon: "chart-line",
      color: "orange"
    },
    {
      title: "AppConfig.features.feature6.title",
      description: "AppConfig.features.feature6.description",
      icon: "heart",
      color: "red"
    }
  ],
  
  testimonials: [
    {
      name: "AppConfig.testimonials.testimonial1.name",
      role: "AppConfig.testimonials.testimonial1.role",
      content: "AppConfig.testimonials.testimonial1.content",
      rating: 5
    },
    {
      name: "AppConfig.testimonials.testimonial2.name",
      role: "AppConfig.testimonials.testimonial2.role",
      content: "AppConfig.testimonials.testimonial2.content",
      rating: 5
    },
    {
      name: "AppConfig.testimonials.testimonial3.name",
      role: "AppConfig.testimonials.testimonial3.role",
      content: "AppConfig.testimonials.testimonial3.content",
      rating: 5
    }
  ],
  
  screenshots: [
    {
      title: "AppConfig.screenshots.screenshot1.title",
      description: "AppConfig.screenshots.screenshot1.description",
      image: "/images/screenshots/profile.svg"
    },
    {
      title: "AppConfig.screenshots.screenshot2.title", 
      description: "AppConfig.screenshots.screenshot2.description",
      image: "/images/screenshots/settings.svg"
    },
    {
      title: "AppConfig.screenshots.screenshot3.title",
      description: "AppConfig.screenshots.screenshot3.description",
      image: "/images/screenshots/profile.svg"
    },
    {
      title: "AppConfig.screenshots.screenshot4.title",
      description: "AppConfig.screenshots.screenshot4.description",
      image: "/images/screenshots/settings.svg"
    },
    {
      title: "AppConfig.screenshots.screenshot5.title",
      description: "AppConfig.screenshots.screenshot5.description",
      image: "/images/screenshots/notifications.svg"
    }
  ],
  
  faqs: [
    {
      question: "AppConfig.faqs.faq1.question",
      answer: "AppConfig.faqs.faq1.answer"
    },
    {
      question: "AppConfig.faqs.faq2.question",
      answer: "AppConfig.faqs.faq2.answer"
    },
    {
      question: "AppConfig.faqs.faq3.question",
      answer: "AppConfig.faqs.faq3.answer"
    },
    {
      question: "AppConfig.faqs.faq4.question",
      answer: "AppConfig.faqs.faq4.answer"
    },
    {
      question: "AppConfig.faqs.faq5.question",
      answer: "AppConfig.faqs.faq5.answer"
    }
  ]
};
