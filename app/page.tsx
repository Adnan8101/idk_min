'use client';

import { useState } from 'react';
import PasswordPage from '@/components/PasswordPage';
import LetterPage from '@/components/LetterPage';
import ResponsePage from '@/components/ResponsePage';

export default function Home() {
  const [stage, setStage] = useState<'password' | 'letter' | 'accepted' | 'rejected'>('password');

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
}

