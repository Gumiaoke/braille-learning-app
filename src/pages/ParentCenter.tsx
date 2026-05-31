import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Smartphone, Shield, Clock, Volume2, Power, RefreshCw, Download } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ParentCenter() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col bg-gray-50 max-w-md mx-auto">
      <header className="p-4 flex items-center gap-4 bg-white border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="font-black text-gray-800 text-lg">家长中心</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Device Status */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-growth-green/10 rounded-2xl flex items-center justify-center text-growth-green">
                <Smartphone size={28} />
              </div>
              <div>
                <h3 className="font-black text-gray-800">智能盲文板</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-growth-green rounded-full" />
                  <span className="text-[10px] font-bold text-gray-400">在线 · 电量 80%</span>
                </div>
              </div>
            </div>
            <button className="bg-gray-50 p-2 rounded-xl text-gray-400">
              <RefreshCw size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-2xl">
              <p className="text-[10px] font-bold text-gray-400 uppercase">存储空间</p>
              <p className="font-black text-gray-700">12.5GB / 32GB</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-2xl">
              <p className="text-[10px] font-bold text-gray-400 uppercase">固件版本</p>
              <p className="font-black text-gray-700">v2.1.0</p>
            </div>
          </div>
        </section>

        {/* Remote Control */}
        <section className="space-y-4">
          <h2 className="text-sm font-black text-gray-500 uppercase tracking-widest px-2">远程控制</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: <Power size={20} />, label: '关机', color: 'text-red-500' },
              { icon: <RefreshCw size={20} />, label: '重启', color: 'text-brand-blue' },
              { icon: <Volume2 size={20} />, label: '音量', color: 'text-growth-green' },
            ].map((btn, i) => (
              <button key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center gap-2 active:scale-95 transition-transform">
                <div className={cn("p-2 rounded-xl bg-gray-50", btn.color)}>
                  {btn.icon}
                </div>
                <span className="text-xs font-bold text-gray-600">{btn.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Content Management */}
        <section className="space-y-4">
          <h2 className="text-sm font-black text-gray-500 uppercase tracking-widest px-2">内容下载</h2>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {[
              { name: '小学语文 一年级下', size: '128MB', status: 'downloaded' },
              { name: '格林童话 全集', size: '45MB', status: 'downloading' },
              { name: '盲文数学基础', size: '89MB', status: 'not_started' },
            ].map((item, i) => (
              <div key={i} className={cn("p-4 flex items-center gap-4", i !== 2 && "border-b border-gray-50")}>
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                  <Download size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
                  <p className="text-[10px] text-gray-400">{item.size}</p>
                </div>
                {item.status === 'downloaded' ? (
                  <span className="text-[10px] font-bold text-growth-green bg-growth-green/10 px-2 py-1 rounded-full">已下载</span>
                ) : item.status === 'downloading' ? (
                  <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue w-1/2" />
                  </div>
                ) : (
                  <button className="text-brand-blue text-[10px] font-bold">下载</button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Restrictions */}
        <section className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
              <Clock size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">晚上9点自动锁定</h3>
              <p className="text-[10px] text-gray-400">保护视力，保证睡眠</p>
            </div>
          </div>
          <div className="w-12 h-6 bg-brand-blue rounded-full relative p-1 cursor-pointer">
            <div className="absolute right-1 w-4 h-4 bg-white rounded-full shadow-sm" />
          </div>
        </section>
      </div>
    </div>
  );
}
