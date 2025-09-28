'use client';

import type { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type Attribute = 'class' | 'data-theme' | 'data-mode';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: string;
  attribute?: Attribute | Attribute[];
  enableSystem?: boolean;
  enableColorScheme?: boolean;
  storageKey?: string;
  forcedTheme?: string;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
