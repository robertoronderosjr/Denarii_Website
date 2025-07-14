import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL('/', request.url));
  
  // Clear the authentication cookie
  response.cookies.set('auth-token', '', {
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  
  return response;
}

export async function POST(request: NextRequest) {
  return GET(request);
} 