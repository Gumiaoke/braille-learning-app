import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Book, Headphones, GraduationCap, ChevronRight, Star } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Read() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('picture');

  const tabs = [
    { id: 'picture', label: '绘本馆', icon: <Book size={18} /> },
    { id: 'textbook', label: '教材馆', icon: <GraduationCap size={18} /> },
    { id: 'audio', label: '有声书', icon: <Headphones size={18} /> },
  ];

  const pictureBooks = [
    { id: '1', title: '小海豚点点历险记', author: '童话世界', cover: '🐬', color: 'bg-brand-blue/20' },
    { id: '2', title: '森林里的聚会', author: '动物王国', cover: '🐻', color: 'bg-growth-green/20' },
    { id: '3', title: '月亮的味道', author: '科普乐园', cover: '🌙', color: 'bg-joy-yellow/20' },
  ];

  const textbooks = [
    { id: '4', title: '小学语文 一年级上', progress: 45, icon: '📚' },
    { id: '5', title: '小学英语 三年级下', progress: 12, icon: '📖' },
  ];

  return (
    <div className="p-6 space-y-6">
      <header className="space-y-4">
        <h1 className="text-2xl font-black text-gray-800">阅读中心</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="搜索你想读的书..." 
            className="w-full bg-white border border-gray-100 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
          />
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100/50 p-1 rounded-2xl">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all",
                activeTab === tab.id 
                  ? "bg-white text-brand-blue shadow-sm" 
                  : "text-gray-500"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Content based on Tab */}
      <div className="space-y-6">
        {activeTab === 'picture' && (
          <>
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-black text-gray-800">热门绘本</h2>
                <button className="text-brand-blue text-xs font-bold">查看全部</button>
              </div>
              <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                {pictureBooks.map(book => (
                  <div 
                    key={book.id}
                    onClick={() => navigate(`/read-detail`)}
                    className="shrink-0 w-40 space-y-2 cursor-pointer active:scale-95 transition-transform"
                  >
                    <div className={cn("aspect-[3/4] rounded-3xl flex items-center justify-center text-6xl shadow-sm", book.color)}>
                      {book.cover}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm truncate">{book.title}</h3>
                      <p className="text-[10px] text-gray-500">{book.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-black text-gray-800 mb-4">推荐阅读</h2>
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-center">
                <div className="w-16 h-16 bg-warm-orange/20 rounded-2xl flex items-center justify-center text-3xl">
                  🦊
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm">狐狸与乌鸦</h3>
                  <p className="text-[10px] text-gray-500">寓言故事 · 5分钟读完</p>
                </div>
                <button className="bg-brand-blue/10 p-2 rounded-xl text-brand-blue">
                  <ChevronRight size={20} />
                </button>
              </div>
            </section>
          </>
        )}

        {activeTab === 'textbook' && (
          <div className="space-y-4">
            {textbooks.map(book => (
              <div key={book.id} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                  {book.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm">{book.title}</h3>
                  <div className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: `${book.progress}%` }} />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-400">{book.progress}%</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'audio' && (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-500">
                  <Headphones size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm">名著导读：西游记 0{i}</h3>
                  <p className="text-[10px] text-gray-500">时长: 15:00</p>
                </div>
                <button className="bg-purple-50 p-2 rounded-full text-purple-500">
                  <Play size={16} fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const Play = ({ size, fill, className }: { size?: number, fill?: string, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
