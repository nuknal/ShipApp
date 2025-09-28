'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-9 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      <FontAwesomeIcon
        icon={theme === 'dark' ? faSun : faMoon}
        className="text-sm text-gray-700 dark:text-gray-300"
      />
    </button>
  );
}
