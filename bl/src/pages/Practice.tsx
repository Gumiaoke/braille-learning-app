import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Mic, Type, FileText, Trophy, ChevronRight, Star, Play } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Practice() {
  const navigate = useNavigate();

  const modes = [
    { 
      id: 'listen', 
      title: '听音识字', 
      desc: '听发音，选出对应的盲文', 
      icon: <Mic size={24} />, 
      color: 'bg-brand-blue', 
      path: '/practice/listen',
      stats: '已练 120 词'
    },
    { 
      id: 'spell', 
      title: '盲文拼写', 
      desc: '根据汉字拼写盲文点位', 
      icon: <Type size={24} />, 
      color: 'bg-growth-green', 
      path: '/practice/spell',
      stats: '正确率 95%'
    },
    { 
      id: 'reading', 
      title: '阅读理解', 
      desc: '读短文并回答小问题', 
      icon: <FileText size={24} />, 
      color: 'bg-warm-orange', 
      path: '/practice/reading',
      stats: '已读 15 篇'
    },
    { 
      id: 'levels', 
      title: '闯关系统', 
      desc: '挑战自我，赢取勋章', 
      icon: <Trophy size={24} />, 
      color: 'bg-joy-yellow', 
      path: '/practice/levels',
      stats: '当前 第5关'
    },
  ];

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto w-full">
      <header className="flex items-center gap-3">
        <button onClick={() => navigate('/learn')} className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 active:scale-95 transition-transform">
          <ChevronLeft size={20} />
        </button>
        <div>
          <h1 className="text-xl font-black text-gray-800">练习中心</h1>
          <p className="text-gray-400 text-xs mt-0.5">多练多学，你是最棒的！</p>
        </div>
      </header>

      {/* Hero Stats */}
      <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-6 text-white flex justify-between items-center shadow-xl shadow-indigo-200">
        <div className="space-y-1">
          <p className="text-indigo-100 text-xs font-bold uppercase tracking-wider">当前积分</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black">1,250</span>
            <Star size={20} fill="currentColor" className="text-joy-yellow" />
          </div>
        </div>
        <div className="text-right">
          <p className="text-indigo-100 text-xs font-bold">全国排名</p>
          <p className="text-xl font-black">第 88 名</p>
        </div>
      </div>

      {/* Practice Modes */}
      <div className="grid grid-cols-1 gap-4">
        {modes.map(mode => (
          <button
            key={mode.id}
            onClick={() => navigate(mode.path)}
            className="btn-glass p-5 rounded-3xl flex items-center gap-4 text-left transition-all"
          >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", mode.color)}>
              {mode.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{mode.title}</h3>
              <p className="text-xs text-gray-500">{mode.desc}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 mb-1">{mode.stats}</p>
              <div className="bg-gray-50 p-1.5 rounded-full inline-block text-gray-400">
                <ChevronRight size={16} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Daily Challenge */}
      <section className="bg-joy-yellow/10 border-2 border-dashed border-joy-yellow/30 rounded-3xl p-6 flex flex-col items-center gap-3 text-center">
        <div className="w-12 h-12 bg-joy-yellow rounded-full flex items-center justify-center text-white shadow-lg">
          <Play size={24} fill="currentColor" />
        </div>
        <div>
          <h3 className="font-black text-gray-800">每日挑战</h3>
          <p className="text-xs text-gray-500">完成即可获得 50 积分奖励</p>
        </div>
        <button className="bg-joy-yellow px-8 py-2.5 rounded-full text-white font-bold text-sm shadow-lg shadow-joy-yellow/20">
          立即开始
        </button>
      </section>
    </div>
  );
}
