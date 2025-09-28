import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default intlMiddleware;

export const config = {
  matcher: [
    // 国际化路由匹配
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
