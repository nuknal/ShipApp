'use client';

import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import { useAppConfig } from '@/lib/useAppConfig';

export default function AppTestimonialsSection() {
  const t = useTranslations('AppTestimonials');
  const appConfig = useAppConfig();


  return (
    <section id="testimonials" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 头部 */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-600 dark:bg-green-900/30 dark:text-green-400">
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            {t('tag')}
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
        </div>

        {/* 统计数据 */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary-600 dark:text-primary-400">{t('stat1.number')}</div>
            <div className="text-gray-600 dark:text-gray-400">{t('stat1.label')}</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-secondary-600 dark:text-secondary-400">{t('stat2.number')}</div>
            <div className="text-gray-600 dark:text-gray-400">{t('stat2.label')}</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary-500 dark:text-primary-300">{t('stat3.number')}</div>
            <div className="text-gray-600 dark:text-gray-400">{t('stat3.label')}</div>
          </div>
        </div>

        {/* 评价卡片网格 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {appConfig.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
            >
              {/* 引用图标 */}
              <div className="mb-6">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl text-primary-400/20" />
              </div>

              {/* 评分 */}
              <div className="mb-4 flex items-center">
                {Array.from({ length: 5 }).fill(0).map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`text-sm ${
                      i < testimonial.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.rating}
                  .0
                </span>
              </div>

              {/* 评价内容 */}
              <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                "
                {testimonial.content}
                "
              </p>

              {/* 用户信息 */}
              <div className="flex items-center">
                <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-lg font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* App Store评分展示 */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <div className="grid items-center gap-8 md:grid-cols-2">
              {/* App Store */}
              <div className="text-center">
                <div className="mb-4">
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">4.8</div>
                  <div className="mb-2 flex items-center justify-center">
                    {Array.from({ length: 5 }).fill(0).map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-lg text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">App Store</div>
                </div>
              </div>

              {/* Google Play */}
              <div className="text-center">
                <div className="mb-4">
                  <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">4.7</div>
                  <div className="mb-2 flex items-center justify-center">
                    {Array.from({ length: 5 }).fill(0).map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-lg text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Google Play</div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400">
                {t('storeRatingNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
