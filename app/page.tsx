'use client';

import { useState } from 'react';
import PasswordPage from '@/components/PasswordPage';
import LetterPage from '@/components/LetterPage';
import ResponsePage from '@/components/ResponsePage';

export default function Home() {
  const [stage, setStage] = useState<'password' | 'letter' | 'accepted' | 'rejected'>('password');

  // Website closed message
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[10%] left-[15%] w-96 h-96 rounded-full bg-gradient-to-br from-rose-400/40 to-pink-500/40 blur-3xl"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-red-400/30 to-rose-500/30 blur-3xl"
          style={{ animation: 'float 8s ease-in-out infinite 2s' }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="glass shadow-premium rounded-3xl p-12 max-w-2xl mx-auto">
          <div 
            className="text-7xl mb-6"
            style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}
          >
            💕
          </div>
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #dc143c 0%, #ff1744 50%, #f50057 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Website Closed
          </h1>
          <p className="text-xl text-gray-700 font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            This special page has served its purpose
          </p>
          <p className="text-lg text-rose-600">
            hehehe &lt;3
          </p>
        </div>
      </div>
    </main>
  );

  /*
  return (
    <main>
      {stage === 'password' && (
        <PasswordPage onSuccess={() => setStage('letter')} />
      )}
      {stage === 'letter' && (
        <LetterPage 
          onAccept={() => setStage('accepted')}
          onReject={() => setStage('rejected')}
        />
      )}
      {(stage === 'accepted' || stage === 'rejected') && (
        <ResponsePage accepted={stage === 'accepted'} />
      )}
    </main>
  );
  */
}

