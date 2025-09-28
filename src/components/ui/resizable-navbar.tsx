'use client';
import { IconMenu2, IconX } from '@tabler/icons-react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'; // Changed from motion/react to framer-motion based on common usage
import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type NavbarProps = {
  children: React.ReactNode;
  className?: string;
};

type NavBodyProps = {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
};

type NavItemsProps = {
  items: {
    name: string;
    link: string;
    icon?: React.ReactNode; // Added for potential icons in nav items
  }[];
  className?: string;
  onItemClick?: () => void;
};

type MobileNavProps = {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
};

type MobileNavHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

type MobileNavMenuProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

export const ResizableNavbarContainer = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize dark mode state and observe changes
    const updateDarkMode = () => setIsDarkMode(document.documentElement.classList.contains('dark'));
    updateDarkMode(); // Set initial state
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 100);
  });

  // Define styles for ResizableNavbarContainer based on visibility and dark mode
  const containerStyle = {
    backdropFilter: !visible ? 'blur(10px)' : 'none', // Apply blur when navbar is full width
    backgroundColor: !visible
      ? (isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)')
      : 'transparent', // Apply background when navbar is full width
    borderBottomWidth: !visible ? '1px' : '0px',
    borderBottomColor: !visible
      ? (isDarkMode ? 'rgb(55 65 81)' : 'rgb(229 231 235)')
      : 'transparent',
  };

  return (
    <motion.div
      ref={ref}
      className={cn('sticky inset-x-0 top-0 z-40 w-full', className)}
      style={containerStyle} // Apply dynamic styles here
    >
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean; isDarkMode?: boolean }>,
              { visible, isDarkMode }, // Pass isDarkMode to children if they need it
            )
          : child)}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible, isDarkMode }: NavBodyProps & { isDarkMode?: boolean }) => { // Added isDarkMode prop
  // const [isDarkMode, setIsDarkMode] = useState(false); // Removed, will be passed from parent
  // useEffect logic for isDarkMode removed, will be passed from parent

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none', // Blur only when shrunk
        backgroundColor: visible
          ? (isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)')
          : 'transparent', // Transparent when full-width, parent handles bg
        borderBottomWidth: '0px', // Border is handled by ResizableNavbarContainer when full width
        borderBottomColor: 'transparent',
        boxShadow: visible
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : 'none',
        width: visible ? '60%' : '100%',
        borderRadius: visible ? '9999px' : '0px',
        y: visible ? 10 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
      }}
      style={{
        minWidth: visible ? '300px' : 'unset',
      }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start px-4 py-2 lg:flex',
        // !visible && "dark:border-gray-700 border-gray-200", // Removed, parent container handles border now
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2', // Reduced space-x-2 to space-x-1 for tighter spacing
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-3 py-2 text-neutral-600 dark:text-neutral-300" // Adjusted padding
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 size-full rounded-full bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20 flex items-center">
            {' '}
            {/* Added flex items-center */}
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {' '}
            {/* Added icon support */}
            {item.name}
          </span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible, isDarkMode }: MobileNavProps & { isDarkMode?: boolean }) => { // Added isDarkMode prop
  // const [isDarkMode, setIsDarkMode] = useState(false); // Removed
  // useEffect logic for isDarkMode removed

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none', // Blur only when shrunk
        backgroundColor: visible
          ? (isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)')
          : 'transparent', // Transparent when full-width, parent handles bg
        borderBottomWidth: '0px', // Border is handled by ResizableNavbarContainer when full width
        borderBottomColor: 'transparent',
        boxShadow: visible
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : 'none',
        width: visible ? '90%' : '100%',
        paddingRight: visible ? '12px' : '0px',
        paddingLeft: visible ? '12px' : '0px',
        borderRadius: visible ? '1rem' : '0rem',
        y: visible ? 10 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full flex-col items-center justify-between px-0 py-2 lg:hidden',
        // !visible && "dark:border-gray-700 border-gray-200", // Removed, parent container handles border now
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-between',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950',
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? <IconX className="size-6 text-black dark:text-white" onClick={onClick} /> : <IconMenu2 className="size-6 text-black dark:text-white" onClick={onClick} />; // Added h-6 w-6 for size consistency
};

export const NavbarLogo = ({ href = '/', imgSrc = 'https://assets.aceternity.com/logo-dark.png', altText = 'logo', logoText = 'Startup' }: { href?: string; imgSrc?: string; altText?: string; logoText?: string }) => {
  return (
    <a
      href={href}
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src={imgSrc}
        alt={altText}
        width={30}
        height={30}
        className="rounded-sm" // Added rounded-sm for logo image
      />
      <span className="font-medium text-black dark:text-white">{logoText}</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient';
} & (
  | React.ComponentPropsWithoutRef<'a'>
  | React.ComponentPropsWithoutRef<'button'>
)) => {
  const baseStyles
    = 'px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center'; // Removed bg-white and text-black to be handled by variants

  const variantStyles = {
    primary:
      'bg-white text-black shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    secondary: 'bg-transparent shadow-none text-black dark:text-white', // Adjusted for dark mode
    dark: 'bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    gradient:
      'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]',
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
