'use client';

import { useTranslations } from 'next-intl';
import { useParams, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function UnsubscribePage() {
  const t = useTranslations('Unsubscribe');
  const params = useParams();
  const locale = params.locale as string;
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const key = searchParams.get('key') || '';

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [staySubscribed, setStaySubscribed] = useState(false);

  const handleUnsubscribe = async () => {
    if (!email || !key) {
      setStatus('error');
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        `/api/unsubcribe?email=${encodeURIComponent(email)}&key=${encodeURIComponent(key)}`,
        {
          method: 'POST',
        },
      );

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStaySubscribed = () => {
    setStaySubscribed(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800">
            <div className="p-6 sm:p-10">
              <div className="mb-8 text-center">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                  {staySubscribed ? t('thankYou') : t('title')}
                </h1>

                {status === 'idle' && !staySubscribed && (
                  <>
                    <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                      {t('confirmationText1')}
                      <span className="font-medium text-blue-600 dark:text-blue-400">{email}</span>
                      {t('confirmationText2')}
                    </p>

                    <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-900/30">
                      <h2 className="mb-3 text-xl font-semibold text-amber-800 dark:text-amber-400">
                        {t('beforeYouGo')}
                      </h2>
                      <p className="mb-4 text-amber-700 dark:text-amber-300">
                        {t('benefitsIntro')}
                      </p>
                      <ul className="mb-6 space-y-2 text-left">
                        <li className="flex items-start">
                          <svg
                            className="mr-2 mt-0.5 size-5 text-amber-600 dark:text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            >
                            </path>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t('benefits.updates')}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="mr-2 mt-0.5 size-5 text-amber-600 dark:text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            >
                            </path>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t('benefits.tips')}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="mr-2 mt-0.5 size-5 text-amber-600 dark:text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            >
                            </path>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t('benefits.earlyAccess')}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="mr-2 mt-0.5 size-5 text-amber-600 dark:text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            >
                            </path>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">
                            {t('benefits.offers')}
                          </span>
                        </li>
                      </ul>
                      <p className="mb-4 text-sm italic text-amber-700 dark:text-amber-300">
                        {t('emailFrequency')}
                      </p>
                    </div>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                      <button
                        onClick={handleStaySubscribed}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        {t('staySubscribed')}
                      </button>
                      <button
                        onClick={handleUnsubscribe}
                        disabled={isLoading}
                        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                      >
                        {isLoading ? t('processing') : t('confirmUnsubscribe')}
                      </button>
                    </div>
                  </>
                )}

                {status === 'success' && (
                  <div className="text-center">
                    <div className="mb-6 inline-flex size-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                      <svg
                        className="size-8 text-green-600 dark:text-green-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        >
                        </path>
                      </svg>
                    </div>
                    <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                      {t('success.title')}
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      {t('success.message')}
                    </p>
                    <a
                      href={`/${locale}`}
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {t('backToHome')}
                    </a>
                  </div>
                )}

                {status === 'error' && (
                  <div className="text-center">
                    <div className="mb-6 inline-flex size-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                      <svg
                        className="size-8 text-red-600 dark:text-red-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        >
                        </path>
                      </svg>
                    </div>
                    <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                      {t('error.title')}
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      {t('error.message')}
                    </p>
                    <a
                      href={`/${locale}`}
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {t('backToHome')}
                    </a>
                  </div>
                )}

                {staySubscribed && (
                  <div className="text-center">
                    <div className="mb-6 inline-flex size-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                      <svg
                        className="size-8 text-green-600 dark:text-green-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        >
                        </path>
                      </svg>
                    </div>
                    <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                      {t('stayedSubscribed.title')}
                    </h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      {t('stayedSubscribed.message')}
                    </p>
                    <a
                      href={`/${locale}`}
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {t('backToHome')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
