'use client';

import { useState, useEffect, useRef } from 'react';

interface LetterPageProps {
  onAccept: () => void;
  onReject: () => void;
}

export default function LetterPage({ onAccept, onReject }: LetterPageProps) {
  const [opened, setOpened] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Auto-open envelope after a moment
    const timer = setTimeout(() => {
      setOpened(true);
      setTimeout(() => setShowButtons(true), 1200);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (opened && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw decorative border
      ctx.strokeStyle = '#dc143c';
      ctx.lineWidth = 3;
      ctx.setLineDash([10, 5]);
      ctx.strokeRect(20, 20, rect.width - 40, rect.height - 40);

      // Draw corner decorations
      const corners = [
        { x: 30, y: 30 },
        { x: rect.width - 30, y: 30 },
        { x: 30, y: rect.height - 30 },
        { x: rect.width - 30, y: rect.height - 30 },
      ];

      ctx.fillStyle = '#dc143c';
      corners.forEach(corner => {
        ctx.beginPath();
        ctx.arc(corner.x, corner.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw decorative heart patterns
      const drawHeart = (x: number, y: number, size: number, opacity: number) => {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = '#dc143c';
        ctx.translate(x, y);
        ctx.scale(size, size);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-0.5, -0.5, -1, -0.3, -1, 0.3);
        ctx.bezierCurveTo(-1, 0.7, -0.5, 1, 0, 1.5);
        ctx.bezierCurveTo(0.5, 1, 1, 0.7, 1, 0.3);
        ctx.bezierCurveTo(1, -0.3, 0.5, -0.5, 0, 0);
        ctx.fill();
        ctx.restore();
      };

      // Draw small hearts around the border
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const radius = Math.min(rect.width, rect.height) / 2 - 50;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        drawHeart(x, y, 0.3, 0.15);
      }

      // Draw sparkles
      const sparkles = [
        { x: rect.width * 0.2, y: rect.height * 0.25 },
        { x: rect.width * 0.8, y: rect.height * 0.3 },
        { x: rect.width * 0.15, y: rect.height * 0.7 },
        { x: rect.width * 0.85, y: rect.height * 0.75 },
      ];

      ctx.strokeStyle = '#dc143c';
      ctx.lineWidth = 2;
      sparkles.forEach(sparkle => {
        // Draw sparkle
        ctx.beginPath();
        ctx.moveTo(sparkle.x - 6, sparkle.y);
        ctx.lineTo(sparkle.x + 6, sparkle.y);
        ctx.moveTo(sparkle.x, sparkle.y - 6);
        ctx.lineTo(sparkle.x, sparkle.y + 6);
        ctx.moveTo(sparkle.x - 4, sparkle.y - 4);
        ctx.lineTo(sparkle.x + 4, sparkle.y + 4);
        ctx.moveTo(sparkle.x + 4, sparkle.y - 4);
        ctx.lineTo(sparkle.x - 4, sparkle.y + 4);
        ctx.stroke();
      });
    }
  }, [opened]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-rose-50 to-pink-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[15%] left-[5%] w-96 h-96 rounded-full bg-gradient-to-br from-rose-300/30 to-pink-400/30 blur-3xl"
          style={{ animation: 'float 10s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-red-300/25 to-rose-400/25 blur-3xl"
          style={{ animation: 'float 12s ease-in-out infinite 3s' }}
        />
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-400/20 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s ease-in-out infinite ${Math.random() * 5}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          {/* Envelope animation */}
          <div className="mb-8 text-center">
            <div 
              className={`inline-block transition-all duration-1000 ${opened ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
            >
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl shadow-2xl animate-[pulse_2s_ease-in-out_infinite]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Letter */}
          <div 
            className={`transition-all duration-1000 ${opened ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ 
              animation: opened ? 'letter-emerge 1s ease-out 0.3s both' : 'none',
            }}
          >
            <div className="glass shadow-premium rounded-3xl overflow-hidden">
              {/* Letter canvas background */}
              <div className="relative bg-gradient-to-br from-white via-rose-50/30 to-white p-8 md:p-12 letter-texture">
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ mixBlendMode: 'multiply', opacity: 0.6 }}
                />

                <div className="relative z-10">
                  {/* Letter header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-rose-400" />
                      <div 
                        className="text-4xl"
                        style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}
                      >
                        ♥
                      </div>
                      <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-rose-400 to-rose-400" />
                    </div>

                    <h2 
                      className="text-5xl md:text-6xl font-bold mb-4"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #dc143c 70%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Dear Evara,
                    </h2>
                    <p className="text-gray-500 italic text-sm">aka Minnie</p>
                  </div>

                  {/* Letter content */}
                  <div className="max-w-2xl mx-auto space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg md:text-xl text-center font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                      I know this might seem early, and I know friends don't always have time—
                      but I wanted to ask you something important.
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-8" />

                    <p className="text-xl md:text-2xl text-center font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Will you be my best friend?
                    </p>

                    <p className="text-center text-gray-600 italic">
                      I don't need a lot of time—just knowing we're there for each other,
                      <br />
                      minimum or maximum, would mean everything to me.
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-8" />

                    <p className="text-center text-sm text-gray-500">
                      No pressure, just a question from the heart 💭
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-12 text-right">
                    <p className="text-lg font-semibold text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                      With hope and warmth,
                    </p>
                    <p className="text-2xl font-bold mt-2 text-gradient-cherry">
                      Your friend
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons section */}
              <div 
                className={`bg-gradient-to-br from-gray-50 to-rose-50/50 p-8 border-t-2 border-rose-100 transition-all duration-700 ${
                  showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                  <div className="max-w-md mx-auto px-4">
                  <p className="text-center text-sm text-gray-600 mb-6 font-medium">
                    What does your heart say?
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Accept button */}
                    <button
                      onClick={onAccept}
                      className="group relative px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-br from-rose-500 to-red-600 text-white rounded-2xl font-bold text-base sm:text-lg shadow-cherry hover:shadow-2xl hover:shadow-rose-500/40 transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Accept
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-red-700 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                    </button>

                    {/* Reject button */}
                    <button
                      onClick={onReject}
                      className="group relative px-6 sm:px-8 py-4 sm:py-5 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold text-base sm:text-lg hover:border-gray-400 hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Not Yet
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
