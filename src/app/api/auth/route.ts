import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const validPassword = process.env.SITE_PASSWORD || 'denarii2004';

    if (password === validPassword) {
      // Set secure HTTP-only cookie
      const response = NextResponse.json({ success: true });
      response.cookies.set('denarii-auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });
      return response;
    } else {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('denarii-auth');
  
  return NextResponse.json({ 
    authenticated: authCookie?.value === 'authenticated' 
  });
} 