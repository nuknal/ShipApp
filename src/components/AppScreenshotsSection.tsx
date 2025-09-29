'use client';

import { faCamera, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useAppConfig } from '@/lib/useAppConfig';
import IPhone14ProMockup from './iPhone14ProMockup';

export default function AppScreenshotsSection() {
  const t = useTranslations('AppScreenshots');
  const appConfig = useAppConfig();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 使用配置中的截图数据，如果没有配置则使用默认数据
  const screenshots = appConfig.screenshots.length > 0 ? appConfig.screenshots.map((screenshot, index) => ({
    id: index + 1,
    title: screenshot.title,
    description: screenshot.description,
    image: screenshot.image,
    category: 'main',
  })) : [
    {
      id: 1,
      title: t('screenshot1.title'),
      description: t('screenshot1.description'),
      image: '/images/screenshots/index.jpg',
      category: 'main',
    },
    {
      id: 2,
      title: t('screenshot3.title'),
      description: t('screenshot3.description'),
      image: '/images/screenshots/diagnosis01.jpg',
      category: 'result',
    },
    {
      id: 3,
      title: t('screenshot4.title'),
      description: t('screenshot4.description'),
      image: '/images/screenshots/ai-sample.jpg',
      category: 'style',
    },
    {
      id: 4,
      title: t('screenshot5.title'),
      description: t('screenshot5.description'),
      image: '/images/screenshots/style02.jpg',
      category: 'gallery',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 头部 */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <FontAwesomeIcon icon={faCamera} className="mr-2" />
            {t('tag')}
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 左侧：手机mockup和截图轮播 */}
          <div className="relative">
            <div className="relative mx-auto h-[700px] w-[350px] overflow-hidden">
              {/* 截图滑动容器 */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {screenshots.map(screenshot => (
                  <div key={screenshot.id} className="size-full shrink-0">
                    <IPhone14ProMockup
                      imageUrl={screenshot.image}
                      imageAlt={screenshot.title}
                      size="large"
                      className="mx-1"
                    />
                  </div>
                ))}
              </div>

              {/* 轮播控制按钮 */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-xl transition-all hover:scale-110 hover:bg-white dark:bg-gray-700/90 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-xl transition-all hover:scale-110 hover:bg-white dark:bg-gray-700/90 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          {/* 右侧：功能描述 */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                  {screenshots[currentSlide].title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  {screenshots[currentSlide].description}
                </p>
              </div>

              {/* 截图指示器 */}
              <div className="flex space-x-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`size-3 rounded-full transition-colors ${
                      index === currentSlide
                        ? 'bg-primary-500'
                        : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              {/* 特性列表 */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
                    <div className="size-2 rounded-full bg-primary-500"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{t('feature1')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900/30">
                    <div className="size-2 rounded-full bg-secondary-500"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{t('feature2')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-200 dark:bg-primary-800/30">
                    <div className="size-2 rounded-full bg-primary-600"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{t('feature3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
