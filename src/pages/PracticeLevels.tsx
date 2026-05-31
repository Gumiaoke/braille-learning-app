import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, Lock, Trophy } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PracticeLevels() {
  const navigate = useNavigate();

  const levels = [
    { id: 1, title: '字母关', status: 'completed', stars: 3 },
    { id: 2, title: '拼音关', status: 'completed', stars: 2 },
    { id: 3, title: '词语关', status: 'current', stars: 0 },
    { id: 4, title: '阅读关', status: 'locked', stars: 0 },
    { id: 5, title: '进阶关', status: 'locked', stars: 0 },
  ];

  return (
    <div className="h-full flex flex-col bg-brand-blue/5 max-w-md mx-auto">
      <header className="p-4 flex items-center gap-4 bg-white">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="font-black text-gray-800 text-lg">闯关地图</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-12 relative">
        {/* Connection Line */}
        <div className="absolute left-1/2 top-12 bottom-12 w-2 bg-brand-blue/10 -translate-x-1/2 rounded-full" />

        <div className="flex flex-col gap-16 relative">
          {levels.map((level, i) => (
            <div 
              key={level.id} 
              className={cn(
                "flex items-center gap-6",
                i % 2 === 0 ? "flex-row" : "flex-row-reverse text-right"
              )}
            >
              <div className="flex-1">
                <h3 className={cn("font-black text-lg", level.status === 'locked' ? "text-gray-300" : "text-gray-800")}>
                  {level.title}
                </h3>
                <div className={cn("flex gap-1 mt-1", i % 2 === 0 ? "justify-start" : "justify-end")}>
                  {[1, 2, 3].map(s => (
                    <Star 
                      key={s} 
                      size={14} 
                      fill={s <= level.stars ? "#FFD966" : "none"} 
                      className={s <= level.stars ? "text-joy-yellow" : "text-gray-200"} 
                    />
                  ))}
                </div>
              </div>

              <div className={cn(
                "w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-transform active:scale-90 relative z-10",
                level.status === 'completed' ? "bg-growth-green text-white" :
                level.status === 'current' ? "bg-brand-blue text-white ring-8 ring-brand-blue/20" :
                "bg-gray-200 text-gray-400"
              )}>
                {level.status === 'locked' ? <Lock size={32} /> : <span className="text-2xl font-black">{level.id}</span>}
                
                {level.status === 'current' && (
                  <div className="absolute -top-6 -right-2 bg-warm-orange text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm animate-bounce">
                    挑战中
                  </div>
                )}
              </div>

              <div className="flex-1" />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-joy-yellow rounded-full flex items-center justify-center text-white shadow-xl">
            <Trophy size={48} />
          </div>
          <p className="font-black text-gray-400">终点大奖：超级勋章</p>
        </div>
      </div>
    </div>
  );
}
