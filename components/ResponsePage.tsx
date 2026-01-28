'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ResponsePageProps {
  accepted: boolean;
}

export default function ResponsePage({ accepted }: ResponsePageProps) {
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setShowContent(true), 300);
  }, []);

  if (!mounted) return null;

  if (accepted) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
        {/* Celebratory background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated orbs */}
          <div 
            className="absolute top-[10%] left-[15%] w-96 h-96 rounded-full bg-gradient-to-br from-rose-400/40 to-pink-500/40 blur-3xl"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          />
          <div 
            className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-red-400/30 to-rose-500/30 blur-3xl"
            style={{ animation: 'float 8s ease-in-out infinite 2s' }}
          />
          <div 
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-300/20 to-rose-400/20 blur-3xl"
            style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
          />

          {/* Confetti particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#dc143c', '#ff1744', '#f50057', '#ff4081', '#ff69b4'][Math.floor(Math.random() * 5)],
                animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
                opacity: 0.6,
              }}
            />
          ))}

          {/* Floating hearts */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`heart-${i}`}
              className="absolute text-rose-400/30 text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite ${Math.random() * 5}s`,
                fontSize: `${20 + Math.random() * 30}px`,
              }}
            >
              ♥
            </div>
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
          <div 
            className={`w-full max-w-5xl transition-all duration-1000 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Success message */}
            <div className="text-center mb-12">
              <div 
                className="inline-block mb-8"
                style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-rose-500/50">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <h1 
                className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: 'linear-gradient(135deg, #dc143c 0%, #ff1744 50%, #f50057 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'fadeInUp 0.8s ease-out',
                }}
              >
                Yes! 🎉
              </h1>

              <p 
                className="text-2xl md:text-3xl text-gray-700 font-light mb-8"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                }}
              >
                We're officially best friends!
              </p>

              <div 
                className="inline-block px-8 py-3 glass-dark rounded-full"
                style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
              >
                <p className="text-white font-medium">
                  ✨ This is the beginning of something special ✨
                </p>
              </div>
            </div>

            {/* Profile images */}
            <div 
              className="grid sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto mb-12 px-4"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
            >
              {/* Evara's image */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-red-600 rounded-3xl blur-2xl opacity-50 animate-pulse" />
                  <div className="relative glass shadow-premium rounded-3xl p-3 hover-lift">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-2xl overflow-hidden">
                      <Image
                        src="https://cdn.discordapp.com/avatars/1283426724100444185/7dce2a242eb9c6f162a44cbcefbefb05.webp?size=2048"
                        alt="Evara"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Evara
                </h3>
                <p className="text-rose-600 font-semibold text-base sm:text-lg">aka Minnie</p>
              </div>

              {/* Byte's image */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="relative glass shadow-premium rounded-3xl p-3 hover-lift">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-2xl overflow-hidden">
                      <Image
                        src="https://media.discordapp.net/attachments/1464633701769023735/1465787321386405920/IMG_20260128_004318.jpg?ex=697b0912&is=6979b792&hm=fa3ab83e653c38bfceeb8ca5e7fcf4fcc0301a23f0a83227305a1b86d51ed323&=&format=webp&width=854&height=1188"
                        alt="Byte"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Byte
                </h3>
                <p className="text-rose-600 font-semibold text-base sm:text-lg">Your Best Friend</p>
              </div>
            </div>

            {/* Final message */}
            <div 
              className="text-center max-w-2xl mx-auto"
              style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
            >
              <div className="glass shadow-premium rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-red-200/30 to-transparent rounded-tr-full" />
                
                <div className="relative z-10">
                  <div className="text-6xl mb-6 animate-[heartbeat_1.5s_ease-in-out_infinite]">
                    ♥
                  </div>
                  <h2 
                    className="text-4xl font-bold mb-4 text-gradient-cherry"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Best Friends Forever
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Here's to all the moments we'll share—big or small, near or far.
                    <br />
                    Thank you for saying yes! 🌟
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Rejection page
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[20%] left-[10%] w-80 h-80 rounded-full bg-gray-300/20 blur-3xl"
          style={{ animation: 'float 12s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-[25%] right-[15%] w-72 h-72 rounded-full bg-slate-300/15 blur-3xl"
          style={{ animation: 'float 14s ease-in-out infinite 3s' }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div 
          className={`w-full max-w-2xl transition-all duration-1000 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="glass shadow-premium rounded-3xl p-12 md:p-16 text-center">
            {/* Icon */}
            <div 
              className="inline-block mb-8"
              style={{ animation: 'fadeInUp 0.6s ease-out' }}
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-400 to-slate-500 rounded-full flex items-center justify-center shadow-xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            {/* Message */}
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-800"
              style={{
                fontFamily: "'Playfair Display', serif",
                animation: 'fadeInUp 0.6s ease-out 0.2s both',
              }}
            >
              That's Okay
            </h1>

            <div 
              className="space-y-4 text-gray-600 text-lg leading-relaxed"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
            >
              <p>
                I understand, and I respect your decision.
              </p>
              <p>
                No hard feelings—maybe another time, or maybe we'll just be regular friends.
              </p>
              <p className="text-gray-500 italic text-base mt-6">
                Either way, I appreciate you taking the time to read this. 💭
              </p>
            </div>

            {/* Decorative footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-400">
                Take care, Evara ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
