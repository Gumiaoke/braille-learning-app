import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Battery, Wifi, BookOpen, GraduationCap, MessageSquare, BarChart3, ChevronRight } from 'lucide-react';
import { ProgressCard } from '../components/ProgressCard';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-2 bg-growth-green/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-growth-green rounded-full animate-pulse" />
          <span className="text-xs font-bold text-gray-600">设备已连接</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <span className="text-xs font-bold">80%</span>
          <Battery size={18} />
        </div>
      </header>

      {/* Hero Stats */}
      <section className="bg-white rounded-3xl p-6 shadow-sm border border-brand-blue/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full -mr-12 -mt-12" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-joy-yellow/5 rounded-full -ml-8 -mb-8" />
        
        <p className="text-gray-400 text-sm font-medium mb-1">今日学习时间</p>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black text-brand-blue">35</span>
          <span className="text-gray-400 font-bold">分钟</span>
        </div>
      </section>

      {/* Today's Tasks */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-black text-gray-800">今日任务</h2>
          <button className="text-brand-blue text-xs font-bold flex items-center">
            全部任务 <ChevronRight size={14} />
          </button>
        </div>
        <div className="space-y-3">
          <ProgressCard 
            title="拼音课程 - 第3课" 
            progress={65} 
            icon={<GraduationCap size={20} className="text-brand-blue" />}
            colorClass="bg-brand-blue/10"
            subtitle="已学习 12/20 分钟"
          />
          <ProgressCard 
            title="阅读故事 - 10分钟" 
            progress={80} 
            icon={<BookOpen size={20} className="text-growth-green" />}
            colorClass="bg-growth-green/10"
            subtitle="还差 2 分钟完成"
          />
          <ProgressCard 
            title="练习中心 - 2组" 
            progress={50} 
            icon={<BarChart3 size={20} className="text-joy-yellow" />}
            colorClass="bg-joy-yellow/10"
            subtitle="已完成 1 组"
          />
        </div>
      </section>

      {/* Quick Access */}
      <section>
        <h2 className="text-lg font-black text-gray-800 mb-4">快速入口</h2>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => navigate('/learn')}
            className="bg-brand-blue p-6 rounded-3xl text-white flex flex-col items-center gap-2 shadow-lg shadow-brand-blue/20 active:scale-95 transition-transform"
          >
            <div className="bg-white/20 p-3 rounded-2xl">
              <GraduationCap size={28} />
            </div>
            <span className="font-bold">开始学习</span>
          </button>
          
          <button 
            onClick={() => navigate('/read')}
            className="bg-growth-green p-6 rounded-3xl text-white flex flex-col items-center gap-2 shadow-lg shadow-growth-green/20 active:scale-95 transition-transform"
          >
            <div className="bg-white/20 p-3 rounded-2xl">
              <BookOpen size={28} />
            </div>
            <span className="font-bold">继续阅读</span>
          </button>
          
          <button 
            onClick={() => navigate('/ai')}
            className="bg-warm-orange p-6 rounded-3xl text-white flex flex-col items-center gap-2 shadow-lg shadow-warm-orange/20 active:scale-95 transition-transform"
          >
            <div className="bg-white/20 p-3 rounded-2xl">
              <MessageSquare size={28} />
            </div>
            <span className="font-bold">AI问答</span>
          </button>
          
          <button 
            onClick={() => navigate('/grow')}
            className="bg-purple-400 p-6 rounded-3xl text-white flex flex-col items-center gap-2 shadow-lg shadow-purple-400/20 active:scale-95 transition-transform"
          >
            <div className="bg-white/20 p-3 rounded-2xl">
              <BarChart3 size={28} />
            </div>
            <span className="font-bold">学习报告</span>
          </button>
        </div>
      </section>
    </div>
  );
}
