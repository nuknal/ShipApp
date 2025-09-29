import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ThemeProvider';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'DefaultLayout' });
  const siteName = 'ShipApp.com';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shipapp.com';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('metaTitle', { siteName }),
      template: `%s | ${siteName}`,
    },
    description: t('metaDescription'),
    keywords: t('metaKeywords', {
      defaultKeywords: 'Mobile App Template, App Landing Page, iOS App Website, Android App Website, ShipApp',
    })
      .split(',')
      .map((k: string) => k.trim()),
    authors: [{ name: siteName, url: baseUrl }],
    creator: siteName,
    publisher: siteName,

    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: routing.locales.reduce(
        (acc, loc) => {
          acc[loc] = `${baseUrl}/${loc}`;
          return acc;
        },
        {} as Record<string, string>,
      ),
    },

    icons: {
      icon: '/favicon.ico',
      apple: '/favicon.ico',
    },

    openGraph: {
      title: t('ogTitle', { siteName }),
      description: t('ogDescription'),
      url: `${baseUrl}/${locale}`,
      siteName,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
      locale,
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle', { siteName }),
      description: t('twitterDescription'),
      creator: '@shipapp',
      images: [`${baseUrl}/twitter-image.png`],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        'index': true,
        'follow': true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await import(`@/messages/${locale}.json`).then(
    module => module.default,
  );

  const siteName = 'ShipApp.com';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shipapp.com';
  const t = await getTranslations({ locale, namespace: 'DefaultLayout' });

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': siteName,
    'url': baseUrl,
    'logo': `${baseUrl}/icon.png`,
    'sameAs': [
      // Add actual social media links here when available
      // e.g., 'https://twitter.com/shipapp',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': siteName,
    'url': baseUrl,
    'description': t('metaDescription'),
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        (process.env.NEXT_PUBLIC_UMAMI_SCRIPT && (
        <Script
          src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        />
        ))
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
