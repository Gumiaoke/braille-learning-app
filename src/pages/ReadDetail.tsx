import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Volume2, Play, Pause, SkipForward, Settings, MessageCircle } from 'lucide-react';
import { BrailleDots } from '../components/BrailleDots';
import { cn } from '../lib/utils';

export default function ReadDetail() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-full flex flex-col bg-white max-w-md mx-auto">
      {/* Header */}
      <header className="p-4 flex justify-between items-center border-b border-gray-50">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-xl hover:bg-gray-100 text-gray-600"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="font-black text-gray-800">小海豚点点历险记</h1>
        <button className="p-2 rounded-xl hover:bg-gray-100 text-gray-600">
          <Settings size={20} />
        </button>
      </header>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div className="aspect-[4/3] bg-brand-blue/10 rounded-3xl flex items-center justify-center text-8xl shadow-inner">
          🐬
        </div>
        
        <div className="space-y-4">
          <p className="text-xl font-bold text-gray-800 leading-relaxed text-center">
            在一个蔚蓝的大海里，住着一只聪明的小海豚，它的名字叫点点。
          </p>
          <p className="text-gray-500 text-center text-sm">
            Zài yīgè wèilán de dàhǎi lǐ, zhùzhe yī zhǐ cōngmíng de xiǎo hǎitún, tā de míngzì jiào diǎndiǎn.
          </p>
        </div>

        {/* AI Interaction Bubble */}
        <div className="bg-brand-blue/5 p-4 rounded-2xl border border-brand-blue/10 flex gap-3 items-start">
          <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white shrink-0">
            🐬
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-brand-blue">点点提示：</p>
            <p className="text-xs text-gray-600">点击下方按钮，我可以用盲文为你演示“大海”怎么写哦！</p>
          </div>
        </div>
      </div>

      {/* Braille Display Area */}
      <div className="bg-gray-50 p-6 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] space-y-6">
        <div className="flex justify-center gap-4">
          <BrailleDots dots={[true, false, true, true, false, false]} size="md" />
          <BrailleDots dots={[true, true, false, true, true, false]} size="md" />
        </div>
        
        <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="w-1.5 h-1.5 bg-growth-green rounded-full animate-pulse" />
          设备已同步盲文输出
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-4 pb-4">
          <button className="p-3 rounded-2xl bg-white shadow-sm text-gray-400">
            <MessageCircle size={24} />
          </button>
          
          <div className="flex items-center gap-6">
            <button className="text-brand-blue">
              <SkipForward size={24} className="rotate-180" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/30 active:scale-95 transition-transform"
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>
            <button className="text-brand-blue">
              <SkipForward size={24} />
            </button>
          </div>

          <button className="p-3 rounded-2xl bg-white shadow-sm text-brand-blue">
            <Volume2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
