import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, XCircle } from 'lucide-react';
import { BrailleDots } from '../components/BrailleDots';
import { cn } from '../lib/utils';

export default function PracticeSpell() {
  const navigate = useNavigate();
  const [dots, setDots] = useState([false, false, false, false, false, false]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="h-full flex flex-col bg-white p-6 max-w-md mx-auto">
      <header className="flex items-center gap-4 mb-12">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="font-black text-gray-800 text-lg">盲文拼写</h1>
      </header>

      <div className="flex-1 flex flex-col items-center gap-12">
        <div className="text-center space-y-2">
          <p className="text-gray-400 font-bold">请拼写出：</p>
          <div className="bg-brand-blue/10 px-8 py-4 rounded-3xl border-2 border-brand-blue/20">
            <h2 className="text-4xl font-black text-brand-blue">学校</h2>
          </div>
        </div>

        <BrailleDots 
          dots={dots} 
          interactive={!submitted} 
          onToggle={(i) => {
            const n = [...dots];
            n[i] = !n[i];
            setDots(n);
          }} 
          size="lg" 
        />

        <div className="w-full mt-auto space-y-4">
          <button 
            onClick={() => setSubmitted(true)}
            className="w-full bg-brand-blue py-5 rounded-3xl text-white font-black text-xl shadow-lg shadow-brand-blue/20"
          >
            提交拼写
          </button>
        </div>
      </div>
    </div>
  );
}
