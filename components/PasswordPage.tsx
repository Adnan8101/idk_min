'use client';

import { useState, useEffect } from 'react';

interface PasswordPageProps {
  onSuccess: () => void;
}

export default function PasswordPage({ onSuccess }: PasswordPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === '050506') {
      // Success animation before transition
      const input = document.getElementById('password-input');
      if (input) {
        input.classList.add('animate-pulse');
      }
      setTimeout(onSuccess, 500);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => {
        setError(false);
        setShake(false);
        setPassword('');
      }, 800);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-rose-50">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-rose-200/40 to-pink-300/40 blur-3xl"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div 
          className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-gradient-to-br from-red-200/30 to-rose-300/30 blur-3xl"
          style={{ animation: 'float 10s ease-in-out infinite 2s' }}
        />
        <div 
          className="absolute bottom-[10%] left-[40%] w-72 h-72 rounded-full bg-gradient-to-br from-pink-200/25 to-red-200/25 blur-3xl"
          style={{ animation: 'float 12s ease-in-out infinite 4s' }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-rose-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div 
          className="w-full max-w-lg"
          style={{ 
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          {/* Main card */}
          <div className="glass shadow-premium rounded-3xl p-10 md:p-14 relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-200/20 to-transparent rounded-tr-full" />
            
            {/* Icon header */}
            <div className="relative text-center mb-10">
              <div 
                className="inline-flex items-center justify-center w-24 h-24 mb-6 relative"
                style={{ animation: 'float 3s ease-in-out infinite' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl transform rotate-6 opacity-80 blur-sm" />
                <div className="relative bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl w-full h-full flex items-center justify-center shadow-cherry">
                  <svg 
                    className="w-12 h-12 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" 
                    />
                  </svg>
                </div>
              </div>
              
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight px-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #dc143c 70%, #ff1744 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'slideInLeft 0.8s ease-out 0.2s both',
                }}
              >
                A Letter Awaits
              </h1>
              
              <p 
                className="text-gray-600 text-base sm:text-lg leading-relaxed mb-2 px-4"
                style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
              >
                Something special is waiting inside
              </p>
              
              <div 
                className="inline-block mt-4 px-4 sm:px-6 py-2 rounded-full glass border border-rose-200/50 mx-4"
                style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
              >
                <p className="text-xs sm:text-sm text-gray-500">
                  <span className="font-medium text-rose-600">Hint:</span> If your birthday is 20 September 2003<br />
                  <span className="text-xs">Password will be: 200903 (DDMMYY)</span>
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="relative">
                <label 
                  htmlFor="password-input" 
                  className="block text-center text-sm font-medium text-gray-700 mb-3"
                >
                  Enter the date in DDMMYY format
                </label>
                
                <input
                  id="password-input"
                  type="text"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                    setPassword(value);
                    if (error) setError(false);
                  }}
                  maxLength={6}
                  className={`
                    w-full px-8 py-5 text-center text-3xl font-bold tracking-[0.5em] 
                    rounded-2xl border-2 transition-all duration-300 outline-none
                    bg-white/50
                    ${error 
                      ? 'border-red-400 bg-red-50/80 text-red-600 shadow-lg shadow-red-200/50' 
                      : 'border-gray-200 hover:border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-100 focus:shadow-xl'
                    }
                    ${shake ? 'animate-[shake_0.6s_ease-in-out]' : ''}
                  `}
                  placeholder="••••••"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.4em',
                  }}
                />
                
                {error && (
                  <div 
                    className="absolute -bottom-9 left-0 right-0 text-center"
                    style={{ animation: 'fadeInUp 0.3s ease-out' }}
                  >
                    <p className="text-red-500 text-sm font-medium flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Not quite right, try again
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={password.length < 6}
                  className={`
                    w-full group relative px-10 py-5 
                    bg-gradient-to-r from-gray-900 via-black to-rose-900
                    text-white rounded-2xl font-semibold text-lg 
                    overflow-hidden transition-all duration-300
                    hover:shadow-2xl hover:shadow-rose-500/20
                    disabled:opacity-40 disabled:cursor-not-allowed
                    disabled:hover:shadow-none
                    btn-press
                    ${password.length === 6 ? 'hover:scale-[1.02] active:scale-[0.98]' : ''}
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    Open the Letter
                    <svg 
                      className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </button>
              </div>
            </form>

            {/* Footer hint */}
            <div className="mt-10 pt-8 border-t border-gray-200/50 text-center">
              <p className="text-xs text-gray-400 italic flex items-center justify-center gap-2 px-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Think about a special date...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
