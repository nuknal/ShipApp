'use client';

import { faChevronDown, faChevronUp, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { appConfig } from '@/config/app';

export default function AppFAQSection() {
  const t = useTranslations('AppFAQ');
  const [openItems, setOpenItems] = useState<number[]>([0]); // 默认第一个展开


  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index],
    );
  };

  return (
    <section id="faq" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* 头部 */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
            {t('tag')}
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
        </div>

        {/* FAQ列表 */}
        <div className="space-y-4">
          {appConfig.faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <h3 className="pr-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <FontAwesomeIcon
                  icon={openItems.includes(index) ? faChevronUp : faChevronDown}
                  className="shrink-0 text-gray-500 dark:text-gray-400"
                />
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4 dark:border-gray-600">
                    <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 联系支持 */}
        <div className="mt-16 text-center">
          <div className="rounded-3xl bg-gradient-to-r from-primary-50 to-secondary-50 p-8 dark:from-primary-900/20 dark:to-secondary-900/20">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              {t('stillHaveQuestions')}
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {t('contactDescription')}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:support@shipapp.com"
                className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700"
              >
                {t('emailSupport')}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
