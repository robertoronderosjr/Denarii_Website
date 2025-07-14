import { NextResponse } from 'next/server'

export function middleware() {
  return new NextResponse('MIDDLEWARE WORKS!')
}

export const config = {
  runtime: 'nodejs',
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
} 