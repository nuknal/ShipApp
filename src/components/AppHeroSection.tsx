'use client';

import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faCamera, faClock, faStar, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { formatRating } from '@/lib/utils';
import { useAppConfig } from '@/lib/useAppConfig';
import IPhone14ProMockup from './iPhone14ProMockup';

export default function AppHeroSection() {
  const t = useTranslations('AppHero');
  const appConfig = useAppConfig();
  const { score, total } = formatRating(appConfig.rating.score, appConfig.rating.total);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 size-72 animate-blob rounded-full bg-primary-200 opacity-30 mix-blend-multiply blur-xl dark:bg-primary-800"></div>
        <div className="animation-delay-2000 absolute right-10 top-40 size-72 animate-blob rounded-full bg-secondary-200 opacity-30 mix-blend-multiply blur-xl dark:bg-secondary-800"></div>
        <div className="animation-delay-4000 absolute bottom-20 left-1/2 size-72 animate-blob rounded-full bg-primary-300 opacity-30 mix-blend-multiply blur-xl dark:bg-primary-700"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2">
          {/* 左侧内容 */}
          <div className="text-center lg:text-left">
            {/* 应用图标和名称 */}
            <div className="mb-6 flex items-center justify-center text-left lg:justify-start">
              <div className="mr-4 flex size-16 items-center justify-center ">
                <Image src="/logo.png" alt={`${appConfig.name} Logo`} width={64} height={64} className="rounded-xl" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary-500 dark:text-primary-500">{appConfig.name}</h1>
                <div className="mt-1 flex items-center">
                  <div className="mr-2 flex items-center">
                    {Array.from({ length: 5 }).fill(0).map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-sm text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{score} ({total})</span>
                </div>
              </div>
            </div>

            {/* 主标题 */}
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              {t('headline')}
              <span className="gradient-text-primary block">
                {t('headlineHighlight')}
              </span>
            </h2>

            {/* 描述 */}
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-0">
              {t('description')}
            </p>

            {/* 特色功能标签 */}
            <div className="mb-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="flex items-center rounded-full bg-white px-4 py-2 shadow-md dark:bg-gray-800">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2 text-primary-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('feature1')}</span>
              </div>
              <div className="flex items-center rounded-full bg-white px-4 py-2 shadow-md dark:bg-gray-800">
                <FontAwesomeIcon icon={faCamera} className="mr-2 text-primary-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('feature2')}</span>
              </div>
              <div className="flex items-center rounded-full bg-white px-4 py-2 shadow-md dark:bg-gray-800">
                <FontAwesomeIcon icon={faClock} className="mr-2 text-primary-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('feature3')}</span>
              </div>
            </div>

            {/* 下载按钮 */}
            <div className="space-y-4 sm:flex sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
              <a
                href={appConfig.appStore.ios}
                className="group inline-flex w-full items-center justify-center rounded-xl bg-black px-8 py-4 text-white shadow-lg transition-colors hover:bg-gray-800 sm:w-auto"
              >
                <FontAwesomeIcon icon={faApple} className="mr-3 text-2xl" />
                <div className="text-left">
                  <div className="text-xs">{t('downloadOn')}</div>
                  <div className="-mt-1 text-lg font-semibold">App Store</div>
                </div>
              </a>

              <div className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-xl bg-gray-400 px-8 py-4 text-gray-600 opacity-60 shadow-lg sm:w-auto">
                <FontAwesomeIcon icon={faGooglePlay} className="mr-3 text-2xl" />
                <div className="text-left">
                  <div className="text-xs">{t('comingSoon')}</div>
                  <div className="-mt-1 text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </div>

            {/* 统计数据 */}
            <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{t('stat1Number')}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('stat1Label')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{t('stat2Number')}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('stat2Label')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{t('stat3Number')}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('stat3Label')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧手机mockup */}
          <div className="flex justify-center lg:justify-end">
            <IPhone14ProMockup
              imageUrl="/images/screenshots/main.svg"
              imageAlt={`${appConfig.name} App Screenshot`}
              size="large"
              showFloatingLabel={true}
              floatingLabel={(
                <div className="rounded-full border border-green-300 bg-gradient-to-r from-green-400 to-green-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  <span className="flex items-center">
                    <span className="mr-2 size-2 animate-bounce rounded-full bg-white"></span>
                    {t('freeLabel')}
                  </span>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
