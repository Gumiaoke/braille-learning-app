import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Volume2, CheckCircle2, XCircle } from 'lucide-react';
import { BrailleDots } from '../components/BrailleDots';
import { cn } from '../lib/utils';
import { toast } from 'sonner';

export default function PracticeListen() {
  const navigate = useNavigate();
  const [dots, setDots] = useState([false, false, false, false, false, false]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Target for "苹果" (Píngguǒ) - just a sample dot pattern
  const targetDots = [true, true, false, false, true, false];

  const handleToggle = (index: number) => {
    if (submitted) return;
    const newDots = [...dots];
    newDots[index] = !newDots[index];
    setDots(newDots);
  };

  const handleSubmit = () => {
    const correct = dots.every((dot, i) => dot === targetDots[i]);
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) {
      toast.success('太棒了！完全正确！');
    } else {
      toast.error('哎呀，再试一次吧～');
    }
  };

  const handleNext = () => {
    setDots([false, false, false, false, false, false]);
    setSubmitted(false);
  };

  return (
    <div className="h-full flex flex-col bg-white max-w-md mx-auto">
      <header className="p-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="font-black text-gray-800 text-lg">听音识字</h1>
        <div className="ml-auto flex gap-1">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={cn("w-2 h-2 rounded-full", i === 1 ? "bg-brand-blue" : "bg-gray-200")} />
          ))}
        </div>
      </header>

      <div className="flex-1 p-6 flex flex-col items-center justify-center space-y-12">
        <div className="text-center space-y-4">
          <p className="text-gray-500 font-bold">听发音，拼出对应的盲文</p>
          <button className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center text-white shadow-xl shadow-brand-blue/30 active:scale-95 transition-transform">
            <Volume2 size={48} />
          </button>
          <h2 className="text-3xl font-black text-gray-800">苹果</h2>
        </div>

        <div className="relative">
          <BrailleDots dots={dots} interactive={!submitted} onToggle={handleToggle} size="lg" />
          
          {submitted && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-2xl backdrop-blur-sm animate-in fade-in zoom-in duration-300">
              {isCorrect ? (
                <div className="flex flex-col items-center text-growth-green">
                  <CheckCircle2 size={64} fill="currentColor" className="text-white" />
                  <span className="font-black text-2xl mt-2">正确!</span>
                </div>
              ) : (
                <div className="flex flex-col items-center text-red-500">
                  <XCircle size={64} fill="currentColor" className="text-white" />
                  <span className="font-black text-2xl mt-2">错误</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="w-full space-y-4">
          {!submitted ? (
            <button 
              onClick={handleSubmit}
              disabled={!dots.some(d => d)}
              className="w-full bg-brand-blue py-5 rounded-3xl text-white font-black text-xl shadow-lg shadow-brand-blue/20 disabled:opacity-50"
            >
              提交检查
            </button>
          ) : (
            <button 
              onClick={handleNext}
              className="w-full bg-growth-green py-5 rounded-3xl text-white font-black text-xl shadow-lg shadow-growth-green/20"
            >
              下一题
            </button>
          )}
          <button 
            onClick={() => navigate(-1)}
            className="w-full py-4 text-gray-400 font-bold"
          >
            退出练习
          </button>
        </div>
      </div>
    </div>
  );
}
