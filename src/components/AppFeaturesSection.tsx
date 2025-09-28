'use client';

import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import { appConfig } from '@/config/app';
import { getIcon, getColorClasses } from '@/lib/utils';

export default function AppFeaturesSection() {
  const t = useTranslations('AppFeatures');

  return (
    <section id="features" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 头部 */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
            {t('tag')}
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t('title')}
            <span className="gradient-text-primary block">
              {t('titleHighlight')}
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
        </div>

        {/* 功能网格 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {appConfig.features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const icon = getIcon(feature.icon);
            return (
              <div
                key={index}
                className={`rounded-3xl border p-8 ${colors.border} ${colors.bg} group transition-all duration-300 hover:shadow-lg`}
              >
                <div className={`inline-flex size-16 items-center justify-center rounded-2xl ${colors.text} mb-6 bg-white shadow-md transition-transform duration-300 group-hover:scale-110 dark:bg-gray-800`}>
                  <FontAwesomeIcon icon={icon} className="text-2xl" />
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 底部CTA */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              {t('ctaTitle')}
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-8 py-3 font-medium text-white transition-colors hover:bg-primary-600"
              >
                {t('downloadNow')}
              </a>
              <button className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                {t('learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
