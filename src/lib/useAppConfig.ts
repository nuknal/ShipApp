'use client';

import { useTranslations } from 'next-intl';
import { appConfig as rawAppConfig, AppConfig, AppFeature, AppTestimonial, AppScreenshot, AppFAQ } from '@/config/app';

/**
 * 自定义钩子函数，用于处理 appConfig 的国际化内容
 * 将 i18n key 转换为实际的翻译内容
 */
export function useAppConfig(): AppConfig {
  const t = useTranslations('AppConfig');

  // 处理功能特性的国际化
  const features: AppFeature[] = rawAppConfig.features.map((feature, index) => ({
    ...feature,
    title: t(`features.feature${index + 1}.title`),
    description: t(`features.feature${index + 1}.description`),
  }));

  // 处理用户评价的国际化
  const testimonials: AppTestimonial[] = rawAppConfig.testimonials.map((testimonial, index) => ({
    ...testimonial,
    name: t(`testimonials.testimonial${index + 1}.name`),
    role: t(`testimonials.testimonial${index + 1}.role`),
    content: t(`testimonials.testimonial${index + 1}.content`),
  }));

  // 处理截图的国际化
  const screenshots: AppScreenshot[] = rawAppConfig.screenshots.map((screenshot, index) => ({
    ...screenshot,
    title: t(`screenshots.screenshot${index + 1}.title`),
    description: t(`screenshots.screenshot${index + 1}.description`),
  }));

  // 处理FAQ的国际化
  const faqs: AppFAQ[] = rawAppConfig.faqs.map((faq, index) => ({
    question: t(`faqs.faq${index + 1}.question`),
    answer: t(`faqs.faq${index + 1}.answer`),
  }));

  // 返回完整的国际化配置对象
  return {
    ...rawAppConfig,
    name: t('name'),
    tagline: t('tagline'),
    description: t('description'),
    features,
    testimonials,
    screenshots,
    faqs,
  };
}
