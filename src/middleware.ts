import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const protectedPaths = ['/admin'];
  const pathname = request.nextUrl.pathname;
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p));
  const hasAccess = request.cookies.get('admin-auth')?.value === '1';

  if (isProtected && !hasAccess) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin((?!-login).*)'], // schützt /admin und Unterpfade, aber nicht z. B. /admin-login
};