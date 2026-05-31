import React, { useState } from 'react';
import { TreeDeciduous, Clock, BookOpen, Target, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Growth() {
  const [activeReport, setActiveReport] = useState('week');

  const stats = [
    { label: '学习时长', value: '120', unit: '分钟', icon: <Clock size={20} />, color: 'text-brand-blue', bg: 'bg-brand-blue/10' },
    { label: '阅读时长', value: '45', unit: '分钟', icon: <BookOpen size={20} />, color: 'text-growth-green', bg: 'bg-growth-green/10' },
    { label: '正确率', value: '92', unit: '%', icon: <Target size={20} />, color: 'text-warm-orange', bg: 'bg-warm-orange/10' },
    { label: '课程进度', value: '85', unit: '%', icon: <CheckCircle2 size={20} />, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  return (
    <div className="p-6 space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-black text-gray-800">成长中心</h1>
        <button className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400">
          <Share2 size={20} />
        </button>
      </header>

      {/* Growth Tree System */}
      <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-blue/5 to-transparent" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-48 h-48 bg-growth-green/10 rounded-full flex items-center justify-center animate-pulse">
            <TreeDeciduous size={120} className="text-growth-green drop-shadow-lg" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl font-black text-gray-800">成长树：第二阶段</h2>
            <p className="text-sm text-gray-400 font-bold">已连续打卡 12 天</p>
          </div>
        </div>

        <div className="w-full space-y-2 relative z-10">
          <div className="flex justify-between text-xs font-bold text-gray-400">
            <span>成长值: 1,250 / 2,000</span>
            <span>🌿 成长树</span>
          </div>
          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden border-2 border-white shadow-inner">
            <div className="h-full bg-growth-green rounded-full transition-all duration-1000" style={{ width: '62.5%' }} />
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 space-y-3">
            <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center", stat.bg, stat.color)}>
              {stat.icon}
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-gray-800">{stat.value}</span>
                <span className="text-[10px] font-bold text-gray-400">{stat.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Growth Report */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-black text-gray-800">成长报告</h2>
          <div className="flex bg-gray-100 p-1 rounded-xl">
            {['week', 'month', 'year'].map(t => (
              <button 
                key={t}
                onClick={() => setActiveReport(t)}
                className={cn(
                  "px-3 py-1 rounded-lg text-[10px] font-black transition-all",
                  activeReport === t ? "bg-white shadow-sm text-brand-blue" : "text-gray-400"
                )}
              >
                {t === 'week' ? '周报' : t === 'month' ? '月报' : '学期'}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-end justify-between h-32 gap-3">
            {[45, 60, 30, 80, 50, 90, 40].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className={cn(
                    "w-full rounded-t-lg transition-all duration-500",
                    i === 5 ? "bg-brand-blue" : "bg-brand-blue/20"
                  )} 
                  style={{ height: `${h}%` }} 
                />
                <span className="text-[8px] font-bold text-gray-400">周{['一', '二', '三', '四', '五', '六', '日'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
