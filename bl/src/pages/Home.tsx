import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Battery, BookOpen, GraduationCap, MessageSquare, BarChart3, Clock, FileText, Headphones } from 'lucide-react';
import { useTimeTheme } from '../hooks/useTimeTheme';

export default function Home() {
  const navigate = useNavigate();
  const theme = useTimeTheme();

  return (
    <div className="p-4 space-y-4">
      {/* ===== GREETING ===== */}
      <div className="mb-1">
        <p className="text-lg font-extrabold text-gray-800">
          {theme.emoji} {theme.greeting}，点点
        </p>
      </div>

      {/* ===== DEVICE STATUS CARD ===== */}
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue/20 to-white flex items-center justify-center overflow-hidden">
            <img src="./assets/images/avatar/微信图片_20260604182405_181_99.png" alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-800">点点盲文学习机</h3>
            <p className="text-[10px] text-gray-400">智能陪伴 · 快乐学习</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-mint/30 px-2.5 py-1 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-green-700">蓝牙已连接</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <span className="text-xs font-bold">87%</span>
            <Battery size={16} />
          </div>
        </div>
      </header>

      {/* ===== PRODUCT SHOWCASE ===== */}
      <section className="py-4 text-center relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-joy-yellow/10 rounded-full -ml-10 -mb-10" />

        <div className="relative z-10">
          <div className="mb-3">
            <img
              src="./assets/images/电商4.png"
              alt="盲文学习机"
              className="w-64 h-auto max-h-[220px] object-contain mx-auto drop-shadow-[0_12px_32px_rgba(126,216,255,0.3)]"
              style={{ animation: 'productFloat 3s ease-in-out infinite' }}
            />
          </div>

          <div className="flex justify-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-brand-blue" />
            <div className="w-2 h-2 rounded-full bg-brand-blue/30" />
            <div className="w-2 h-2 rounded-full bg-brand-blue/30" />
          </div>

        </div>
      </section>

      {/* ===== DATA CARDS ===== */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { icon: <Clock size={16} />, value: '35', unit: '分', label: '今日学习', color: 'bg-brand-blue/15 text-brand-blue' },
          { icon: <FileText size={16} />, value: '3/5', unit: '', label: '学习任务', color: 'bg-joy-yellow/25 text-yellow-700' },
          { icon: <BarChart3 size={16} />, value: '68', unit: '%', label: '学习进度', color: 'bg-mint/25 text-green-700' },
          { icon: <BookOpen size={16} />, value: '25', unit: '分', label: '阅读时长', color: 'bg-purple-200 text-purple-700' },
        ].map((d, i) => (
          <div key={i} className="bg-white/80 backdrop-blur-md rounded-2xl p-3 text-center shadow-sm">
            <div className={`w-8 h-8 rounded-xl ${d.color} flex items-center justify-center mx-auto mb-1.5`}>
              {d.icon}
            </div>
            <div className="text-lg font-extrabold text-gray-800">
              {d.value}<span className="text-xs font-medium text-gray-400">{d.unit}</span>
            </div>
            <div className="text-[10px] text-gray-400 mt-0.5">{d.label}</div>
          </div>
        ))}
      </div>

      {/* ===== QUICK ACTIONS ===== */}
      <section>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button onClick={() => navigate('/learn')}
            className="btn-glass p-5 rounded-3xl text-gray-800 flex items-center gap-3 transition-all">
            <div className="bg-brand-blue/15 p-2.5 rounded-2xl"><GraduationCap size={24} className="text-brand-blue" /></div>
            <span className="font-extrabold text-sm">开始学习</span>
          </button>
          <button onClick={() => navigate('/read')}
            className="btn-glass p-5 rounded-3xl text-gray-800 flex items-center gap-3 transition-all">
            <div className="bg-mint/20 p-2.5 rounded-2xl"><BookOpen size={24} className="text-green-600" /></div>
            <span className="font-extrabold text-sm">继续阅读</span>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <button onClick={() => navigate('/ai')}
            className="btn-glass p-4 rounded-3xl text-gray-800 flex flex-col items-center gap-1 transition-all">
            <div className="bg-joy-yellow/20 p-2 rounded-xl"><MessageSquare size={18} className="text-yellow-600" /></div>
            <span className="font-bold text-xs">AI问答</span>
          </button>
          <button onClick={() => navigate('/learn')}
            className="btn-glass p-4 rounded-3xl text-gray-800 flex flex-col items-center gap-1 transition-all">
            <div className="bg-purple-100 p-2 rounded-xl"><Headphones size={18} className="text-purple-500" /></div>
            <span className="font-bold text-xs">课程中心</span>
          </button>
          <button onClick={() => navigate('/learn')}
            className="btn-glass p-4 rounded-3xl text-gray-800 flex flex-col items-center gap-1 transition-all">
            <div className="bg-red-100 p-2 rounded-xl">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-red-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
            <span className="font-bold text-xs">资源下载</span>
          </button>
        </div>
      </section>

      {/* Spacer for bottom nav */}
      <div className="h-4" />
    </div>
  );
}
