import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Play, Volume2, BookOpen, GraduationCap, Star, Lock } from 'lucide-react';
import { BrailleDots } from '../components/BrailleDots';
import { cn } from '../lib/utils';

export default function Learn() {
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    { id: 1, name: '盲文启蒙', status: 'completed' },
    { id: 2, name: '拼音学习', status: 'current' },
    { id: 3, name: '汉字学习', status: 'locked' },
    { id: 4, name: '词语学习', status: 'locked' },
    { id: 5, name: '句子阅读', status: 'locked' },
    { id: 6, name: '文章阅读', status: 'locked' },
  ];

  return (
    <div className="p-6 space-y-6">
      <header className="flex flex-col gap-4">
        <h1 className="text-2xl font-black text-gray-800">学习中心</h1>
        
        {/* Progress Path */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {stages.map((stage, idx) => (
            <React.Fragment key={stage.id}>
              <div className={cn(
                "shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all",
                stage.status === 'completed' ? "bg-growth-green text-white" :
                stage.status === 'current' ? "bg-brand-blue text-white ring-4 ring-brand-blue/20 scale-110" :
                "bg-gray-100 text-gray-400"
              )}>
                {stage.id}
              </div>
              {idx < stages.length - 1 && (
                <div className={cn(
                  "shrink-0 w-4 h-1 rounded-full",
                  stage.status === 'completed' ? "bg-growth-green" : "bg-gray-100"
                )} />
              )}
            </React.Fragment>
          ))}
        </div>
      </header>

      {/* Modules */}
      <div className="space-y-4">
        {/* Module 1 - Braille Intro */}
        <section className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 overflow-hidden relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full">模块 1</span>
              <h2 className="text-lg font-black text-gray-800 mt-1">盲文启蒙</h2>
            </div>
            <button className="bg-brand-blue/10 p-2 rounded-xl text-brand-blue">
              <Play size={18} fill="currentColor" />
            </button>
          </div>
          
          <div className="flex gap-4 items-center">
            <BrailleDots dots={[true, true, false, false, false, false]} size="sm" />
            <div className="flex-1 space-y-2">
              <p className="text-xs text-gray-500 leading-relaxed">
                盲文由六个点组成，通过不同组合表达不同的意思。
              </p>
              <div className="flex items-center gap-1 text-brand-blue font-bold text-xs">
                <span>设备同步中</span>
                <span className="flex gap-0.5">
                  <span className="w-1 h-1 bg-brand-blue rounded-full animate-bounce" />
                  <span className="w-1 h-1 bg-brand-blue rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1 h-1 bg-brand-blue rounded-full animate-bounce [animation-delay:0.4s]" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Module 2 - Pinyin */}
        <section className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 border-l-4 border-l-brand-blue">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-black text-gray-800">拼音学习</h2>
            <span className="text-xs font-bold text-brand-blue">8/26 已完成</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-brand-blue/5 p-4 rounded-2xl flex flex-col items-center gap-2 border border-brand-blue/10">
              <span className="text-3xl font-black text-brand-blue">b</span>
              <button className="bg-white p-2 rounded-full shadow-sm text-brand-blue">
                <Volume2 size={16} />
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center gap-2 border border-dashed border-gray-200">
              <span className="text-3xl font-black text-gray-300">p</span>
              <button className="bg-white p-2 rounded-full shadow-sm text-gray-300">
                <Volume2 size={16} />
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/practice')}
            className="w-full mt-4 bg-brand-blue py-3 rounded-2xl text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20"
          >
            去练习 <ChevronRight size={18} />
          </button>
        </section>

        {/* Module 3 - Hanzi */}
        <section className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 opacity-80">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-black text-gray-800 flex items-center gap-2">
              汉字学习
              <Lock size={16} className="text-gray-400" />
            </h2>
          </div>
          <div className="flex gap-3">
            {['爸爸', '妈妈', '苹果'].map((word) => (
              <div key={word} className="flex-1 aspect-square bg-gray-50 rounded-2xl flex flex-col items-center justify-center gap-1">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <span className="text-[10px] font-bold text-gray-400">{word}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Module 4 - English */}
        <section className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 opacity-80">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-black text-gray-800 flex items-center gap-2">
              英语学习
              <Lock size={16} className="text-gray-400" />
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center">
              <span className="font-bold text-gray-400">Apple</span>
              <Star size={16} className="text-gray-300" />
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center">
              <span className="font-bold text-gray-400">Dog</span>
              <Star size={16} className="text-gray-300" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
