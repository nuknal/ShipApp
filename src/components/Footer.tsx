'use client';

import {
  faApple,
  faGooglePlay,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { appConfig } from '@/config/app';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 py-16 text-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* 主要内容区域 */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* SnapEasy品牌信息 */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center">
              <div className="mr-2 flex size-12 items-center justify-center rounded-xl shadow-lg">
                <Image src="/logo.png" alt={`${appConfig.name} Logo`} width={64} height={64} className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-primary-500 dark:text-primary-500">{appConfig.name}</h3>
            </div>
            <p className="mb-6 max-w-sm leading-relaxed text-gray-300">
              {t('slogan')}
            </p>
            <div className="flex space-x-4">
              <Link
                href={`https://twitter.com/${appConfig.social.twitter?.replace('@', '') || 'shipapp'}`}
                className="flex size-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-primary-600 hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-lg" />
              </Link>
              <Link
                href="https://instagram.com/shipapp"
                className="flex size-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-primary-600 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </Link>
            </div>
          </div>

          {/* 下载应用 */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">
              {t('download')}
            </h4>
            <div className="mb-6 space-y-4">
              <a
                href={appConfig.appStore.ios}
                className="group flex items-center rounded-xl bg-gray-800 p-3 text-gray-300 transition-all duration-300 hover:bg-gray-700 hover:text-white"
              >
                <FontAwesomeIcon icon={faApple} className="mr-3 text-2xl group-hover:text-primary-400" />
                <div>
                  <div className="text-sm font-medium">{t('iosApp')}</div>
                  <div className="text-xs text-gray-400">App Store</div>
                </div>
              </a>
              <div className="flex cursor-not-allowed items-center rounded-xl bg-gray-800/50 p-3 text-gray-500 opacity-60">
                <FontAwesomeIcon icon={faGooglePlay} className="mr-3 text-2xl" />
                <div>
                  <div className="text-sm font-medium">{t('comingSoon')}</div>
                  <div className="text-xs text-gray-500">Google Play</div>
                </div>
              </div>
            </div>

            {/* 下载好处 */}
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-4">
              <p className="mb-3 text-sm font-medium text-gray-300">{t('downloadBenefitsTitle')}</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <span className="mr-3 size-1.5 rounded-full bg-primary-500"></span>
                  {t('downloadBenefit1')}
                </li>
                <li className="flex items-center">
                  <span className="mr-3 size-1.5 rounded-full bg-primary-500"></span>
                  {t('downloadBenefit2')}
                </li>
                <li className="flex items-center">
                  <span className="mr-3 size-1.5 rounded-full bg-primary-500"></span>
                  {t('downloadBenefit3')}
                </li>
              </ul>
            </div>
          </div>

          {/* 功能与支持 */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">
              {t('features')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-primary-400"
                >
                  <span className="mr-3 size-1.5 rounded-full bg-gray-600 transition-colors duration-300 group-hover:bg-primary-400"></span>
                  {t('smartAnalysis')}
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-primary-400"
                >
                  <span className="mr-3 size-1.5 rounded-full bg-gray-600 transition-colors duration-300 group-hover:bg-primary-400"></span>
                  {t('styleTransfer')}
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-primary-400"
                >
                  <span className="mr-3 size-1.5 rounded-full bg-gray-600 transition-colors duration-300 group-hover:bg-primary-400"></span>
                  {t('photographyTips')}
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-primary-400"
                >
                  <span className="mr-3 size-1.5 rounded-full bg-gray-600 transition-colors duration-300 group-hover:bg-primary-400"></span>
                  {t('helpCenter')}
                </Link>
              </li>
            </ul>

            {/* 快速链接 */}
            <div className="mt-8">
              <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">{t('company')}</h5>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={`/${locale}/privacy`}
                    className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-primary-400"
                  >
                    <span className="mr-3 size-1.5 rounded-full bg-gray-600 transition-colors duration-300 group-hover:bg-primary-400"></span>
                    {t('privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/terms`}
                    className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-primary-400"
                  >
                    <span className="mr-3 size-1.5 rounded-full bg-gray-600 transition-colors duration-300 group-hover:bg-primary-400"></span>
                    {t('terms')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${appConfig.social.email || 'support@shipapp.com'}`}
                    className="group flex items-center text-gray-300 transition-colors duration-300 hover:text-primary-400"
                  >
                    <span className="mr-3 size-1.5 rounded-full bg-gray-600 transition-colors duration-300 group-hover:bg-primary-400"></span>
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 底部版权和品牌 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                ©
                {' '}
                {new Date().getFullYear()}
                {' '}
                {appConfig.name}
                {t('copyright')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
