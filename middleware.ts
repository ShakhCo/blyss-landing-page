import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(uz|uz-Cyrl|ru|en)/:path*', '/demo-1'],
};
