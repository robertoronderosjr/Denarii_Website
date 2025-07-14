import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow access to public assets and API routes
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/favicon.ico') ||
    request.nextUrl.pathname.startsWith('/Logo') ||
    request.nextUrl.pathname.startsWith('/Chains') ||
    request.nextUrl.pathname.startsWith('/People') ||
    request.nextUrl.pathname.startsWith('/Sponsors') ||
    request.nextUrl.pathname.startsWith('/blog') ||
    request.nextUrl.pathname.startsWith('/contact-bg.jpg') ||
    request.nextUrl.pathname.startsWith('/grid.svg') ||
    request.nextUrl.pathname.match(/\.(jpg|jpeg|png|svg|gif|ico|css|js|woff|woff2|ttf|eot)$/i)
  ) {
    return NextResponse.next();
  }

  // Handle authentication form submission
  if (request.method === 'POST') {
    return handleAuth(request);
  }

  // Check if user is authenticated
  const isAuthenticated = request.cookies.get('auth-token')?.value === 'denarii-labs-preview';

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return showLoginPage(request);
  }

  return NextResponse.next();
}

async function handleAuth(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get('password');
  
  // Get password from environment variable
  const correctPassword = process.env.SITE_PASSWORD;
  
  // If no password is set in environment, deny access
  if (!correctPassword) {
    const url = new URL(request.url);
    url.searchParams.set('error', 'config');
    return NextResponse.redirect(url);
  }
  
  if (password === correctPassword) {
    // Set authentication cookie and redirect
    const response = NextResponse.redirect(request.url);
    response.cookies.set('auth-token', 'denarii-labs-preview', {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    return response;
  } else {
    // Redirect back with error
    const url = new URL(request.url);
    url.searchParams.set('error', 'invalid');
    return NextResponse.redirect(url);
  }
}

function showLoginPage(request: NextRequest) {
  const url = new URL(request.url);
  const error = url.searchParams.get('error');
  
  return new NextResponse(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Denarii Labs - Private Preview</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 20px;
          }
          .login-container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 400px;
            width: 100%;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 10px;
          }
          .subtitle {
            color: #666;
            margin-bottom: 30px;
          }
          input {
            width: 100%;
            padding: 12px;
            border: 2px solid #e1e5e9;
            border-radius: 8px;
            font-size: 16px;
            margin-bottom: 20px;
            box-sizing: border-box;
          }
          input:focus {
            outline: none;
            border-color: #667eea;
          }
          button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s;
          }
          button:hover {
            transform: translateY(-2px);
          }
          .error {
            color: #e74c3c;
            margin-top: 10px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="login-container">
          <div class="logo">🚀 Denarii Labs</div>
          <div class="subtitle">Private Preview Access</div>
          <form method="POST">
            <input type="password" name="password" placeholder="Enter access code" required>
            <button type="submit">Access Preview</button>
          </form>
          ${error === 'invalid' ? '<div class="error">Invalid access code. Please try again.</div>' : ''}
          ${error === 'config' ? '<div class="error">Site configuration error. Please contact administrator.</div>' : ''}
        </div>
      </body>
    </html>
    `,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 