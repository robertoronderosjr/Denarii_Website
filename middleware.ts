import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('🔒 Middleware executed for:', request.nextUrl.pathname);
  
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
    request.nextUrl.pathname.endsWith('.svg') ||
    request.nextUrl.pathname.endsWith('.png') ||
    request.nextUrl.pathname.endsWith('.jpg') ||
    request.nextUrl.pathname.endsWith('.jpeg') ||
    request.nextUrl.pathname.endsWith('.gif') ||
    request.nextUrl.pathname.endsWith('.ico')
  ) {
    return NextResponse.next();
  }

  // Handle authentication form submission
  if (request.method === 'POST' && request.nextUrl.pathname === '/auth') {
    return handleAuth(request);
  }

  // Check if user is authenticated
  const isAuthenticated = request.cookies.get('auth-token')?.value === 'denarii-labs-preview';

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return showLoginPage(request);
  }

  // User is authenticated, continue
  return NextResponse.next();
}

async function handleAuth(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get('password') as string;
  const correctPassword = process.env.SITE_PASSWORD;

  console.log('🔐 Authentication attempt');

  if (!correctPassword) {
    console.log('❌ No password configured');
    const url = new URL(request.url);
    url.searchParams.set('error', 'config');
    return NextResponse.redirect(url);
  }

  if (password === correctPassword) {
    console.log('✅ Authentication successful');
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.set('auth-token', 'denarii-labs-preview', {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    return response;
  } else {
    console.log('❌ Authentication failed');
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
        <title>Access Required - Denarii Labs</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .container {
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            padding: 40px;
            max-width: 400px;
            width: 90%;
          }
          
          .logo {
            text-align: center;
            margin-bottom: 30px;
          }
          
          .logo h1 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
          }
          
          .logo p {
            color: #64748b;
            font-size: 14px;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          label {
            display: block;
            margin-bottom: 8px;
            color: #374151;
            font-weight: 500;
          }
          
          input[type="password"] {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.2s;
          }
          
          input[type="password"]:focus {
            outline: none;
            border-color: #667eea;
          }
          
          .submit-btn {
            width: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: opacity 0.2s;
          }
          
          .submit-btn:hover {
            opacity: 0.9;
          }
          
          .error {
            background: #fee2e2;
            border: 1px solid #fecaca;
            color: #dc2626;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 14px;
          }
          
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">
            <h1>Denarii Labs</h1>
            <p>Web3 Accelerator & Consulting</p>
          </div>
          
          ${error === 'invalid' ? '<div class="error">Invalid access code. Please try again.</div>' : ''}
          ${error === 'config' ? '<div class="error">Site configuration error. Please contact administrator.</div>' : ''}
          
          <form method="POST" action="/auth">
            <div class="form-group">
              <label for="password">Enter your access code:</label>
              <input type="password" id="password" name="password" required>
            </div>
            
            <button type="submit" class="submit-btn">
              Access Website
            </button>
          </form>
          
          <div class="footer">
            <p>This is a private preview. Access is restricted to authorized users only.</p>
          </div>
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
  runtime: 'nodejs',  // Use Node.js runtime
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