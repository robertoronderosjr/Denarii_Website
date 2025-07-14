'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, EyeOff } from 'lucide-react';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check authentication status from server
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth');
      const data = await response.json();
      setIsAuthenticated(data.authenticated);
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
        setPassword('');
      } else {
        setError(data.error || 'Invalid password. Please try again.');
        setPassword('');
      }
    } catch (error) {
      setError('Authentication failed. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = async () => {
    try {
      // Clear server-side session
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-purple-500 border-t-transparent"></div>
          <span className="text-white font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-950 relative overflow-hidden">
        {/* Background effects similar to main page */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat bg-fixed opacity-10"></div>
        
        {/* Hero radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.25) 0%, rgba(30, 27, 75, 0.1) 25%, rgba(0, 0, 0, 0) 50%)",
          }}
        ></div>
        
        {/* Left side glow */}
        <div
          className="absolute left-0 top-0 w-1/3 h-screen"
          style={{
            background:
              "radial-gradient(ellipse at left, rgba(125, 80, 230, 0.18) 0%, rgba(0, 0, 0, 0) 70%)",
            filter: "blur(40px)",
            transform: "translateY(10%)",
          }}
        ></div>

        {/* Right side glow */}
        <div
          className="absolute right-0 top-0 w-1/3 h-screen"
          style={{
            background:
              "radial-gradient(ellipse at right, rgba(79, 70, 229, 0.18) 0%, rgba(0, 0, 0, 0) 70%)",
            filter: "blur(40px)",
            transform: "translateY(20%)",
          }}
        ></div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 shadow-2xl">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-2">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                    Denarii Labs
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Enter the password to access the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  {error && (
                    <div className="text-red-400 text-sm bg-red-900/20 border border-red-800 rounded p-2">
                      {error}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    Access Site
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {children}
      {/* Logout button - fixed in top right */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 z-50 bg-gray-800/80 hover:bg-gray-700/80 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200"
      >
        Logout
      </button>
    </div>
  );
} 