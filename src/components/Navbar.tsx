'use client';

import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { appConfig } from '@/config/app';
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
  NavBody,
  NavItems,
  ResizableNavbarContainer,
} from '@/components/ui/resizable-navbar';

const Navbar = () => {
  const t = useTranslations('Navbar');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: t('features'), link: '#features' },
    { name: t('screenshots'), link: '#screenshots' },
    { name: t('reviews'), link: '#testimonials' },
    { name: t('faq'), link: '#faq' },
  ];

  return (
    <ResizableNavbarContainer className="">
      {/* Desktop Navbar */}
      <NavBody className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center ">
            <div className="mr-2 flex size-8 items-center justify-center">
              <Image src="/logo.png" alt={`${appConfig.name} Logo`} width={32} height={32} className="rounded-lg" />
            </div>
            <span className="text-xl font-bold text-primary-500 dark:text-primary-500">
              {appConfig.name}
            </span>
          </Link>
        </div>

        <NavItems items={navItems} onItemClick={() => setIsMobileMenuOpen(false)} />

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <LanguageSwitcher />
          {/* <NavbarButton
            href={appConfig.appStore.ios}
            variant="dark"
            className="hidden items-center md:inline-flex"
          >
            <FontAwesomeIcon icon={faApple} className="mr-2" />
            iOS
          </NavbarButton>
          <NavbarButton
            href={appConfig.appStore.android}
            variant="dark"
            className="hidden items-center md:inline-flex"
          >
            <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
            Android
          </NavbarButton> */}
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <MobileNavHeader>
          <Link href="/" className="flex items-center ">
            <div className="mr-2 flex size-8 items-center justify-center">
              <Image src="/logo.png" alt={`${appConfig.name} Logo`} width={32} height={32} className="rounded-lg" />
            </div>
            <span className="text-lg font-bold text-primary-500 dark:text-primary-500">
              {appConfig.name}
            </span>
          </Link>
          <div className="flex items-center space-x-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map(item => (
            <a
              key={item.link}
              href={item.link}
              className="block py-2 text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          {/* Mobile Download Buttons */}
          <div className="mt-4 w-full border-t border-gray-200 pt-4 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-3">
              <NavbarButton
                href={appConfig.appStore.ios}
                variant="dark"
                className="w-full"
              >
                <FontAwesomeIcon icon={faApple} className="mr-2" />
                App Store
              </NavbarButton>
              <NavbarButton
                href={appConfig.appStore.android}
                variant="dark"
                className="w-full"
              >
                <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                Google Play
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbarContainer>
  );
};

export default Navbar;
