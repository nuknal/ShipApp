'use client';

import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faDownload, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import { appConfig } from '@/config/app';

export default function AppDownloadSection() {
  const t = useTranslations('AppDownload');

  return (
    <section id="download" className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 py-20">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 size-full">
          <div className="absolute left-10 top-10 size-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 size-96 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 图标和标题 */}
          <div className="mb-8">
            <div className="mb-6 inline-flex size-20 items-center justify-center rounded-full bg-white/20">
              <FontAwesomeIcon icon={faDownload} className="text-3xl text-white" />
            </div>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {t('title')}
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
              {t('description')}
            </p>
          </div>

          {/* 特色优势 */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-white/20">
                <FontAwesomeIcon icon={faGift} className="text-2xl text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{t('benefit1.title')}</h3>
              <p className="text-white/80">{t('benefit1.description')}</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-white/20">
                <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{t('benefit2.title')}</h3>
              <p className="text-white/80">{t('benefit2.description')}</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-white/20">
                <FontAwesomeIcon icon={faDownload} className="text-2xl text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{t('benefit3.title')}</h3>
              <p className="text-white/80">{t('benefit3.description')}</p>
            </div>
          </div>

          {/* 下载按钮 */}
          <div className="mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            {appConfig.appStore.ios && (
              <a
                href={appConfig.appStore.ios}
                className="group inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faApple} className="mr-4 text-3xl" />
                <div className="text-left">
                  <div className="text-sm opacity-80">{t('downloadOn')}</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
              </a>
            )}

            {appConfig.appStore.android ? (
              <a
                href={appConfig.appStore.android}
                className="group inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faGooglePlay} className="mr-4 text-3xl" />
                <div className="text-left">
                  <div className="text-sm opacity-80">{t('downloadOn')}</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
              </a>
            ) : (
              <div className="inline-flex cursor-not-allowed items-center justify-center rounded-2xl bg-white/50 px-8 py-4 text-gray-500 opacity-60 shadow-lg">
                <FontAwesomeIcon icon={faGooglePlay} className="mr-4 text-3xl" />
                <div className="text-left">
                  <div className="text-sm opacity-80">{t('comingSoon')}</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
              </div>
            )}
          </div>

          {/* QR码下载 */}
          <div className="mx-auto max-w-2xl rounded-3xl bg-white/10 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-bold text-white">{t('qrCodeTitle')}</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {/* iOS QR */}
              <div className="text-center">
                <div className="relative mx-auto mb-4 flex size-36 items-center justify-center rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl">
                  {/* iPhone 14 Pro mini外观 */}
                  <div className="relative size-28 overflow-hidden rounded-xl bg-white">
                    {/* Dynamic Island mini */}
                    <div className="absolute left-1/2 top-1 z-10 h-2 w-6 -translate-x-1/2 rounded-full bg-black"></div>

                    {/* 截图背景 */}
                    <img
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop&crop=center"
                      alt={`iOS ${appConfig.name}`}
                      className="size-full object-cover"
                    />

                    {/* QR码覆盖层 */}
                    <div className="absolute inset-2 flex items-center justify-center rounded-lg bg-white/95 backdrop-blur-sm">
                      <div className="flex size-16 items-center justify-center rounded-lg bg-gray-800">
                        <span className="text-xs font-bold text-white">QR</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-medium text-white">{t('scanForIOS')}</p>
              </div>

              {/* Android QR */}
              <div className="text-center opacity-60">
                <div className="relative mx-auto mb-4 flex size-36 items-center justify-center rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl">
                  {/* Android手机外观 */}
                  <div className="relative size-28 overflow-hidden rounded-xl bg-white">
                    {/* 截图背景 */}
                    <img
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&crop=center"
                      alt={`Android ${appConfig.name}`}
                      className="size-full object-cover grayscale"
                    />

                    {/* Coming Soon覆盖层 */}
                    <div className="absolute inset-2 flex items-center justify-center rounded-lg bg-white/95 backdrop-blur-sm">
                      <div className="flex size-16 items-center justify-center rounded-lg bg-gray-600">
                        <span className="text-xs font-bold text-white">{t('comingSoon')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-medium text-white/70">{t('scanForAndroid')}</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70">{t('qrCodeNote')}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
