import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Smartphone, Calendar, FolderOpen, Clock, Settings, ChevronRight, Award } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Profile() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Shield size={20} />, label: '家长中心', color: 'text-indigo-500', bg: 'bg-indigo-50', path: '/parent' },
    { icon: <Award size={20} />, label: '老师端', color: 'text-warm-orange', bg: 'bg-warm-orange/5', path: '/teacher' },
    { icon: <Smartphone size={20} />, label: '设备管理', color: 'text-brand-blue', bg: 'bg-brand-blue/5' },
    { icon: <Calendar size={20} />, label: '学习计划', color: 'text-growth-green', bg: 'bg-growth-green/5' },
    { icon: <FolderOpen size={20} />, label: '内容管理', color: 'text-purple-500', bg: 'bg-purple-50' },
    { icon: <Clock size={20} />, label: '使用限制', color: 'text-red-500', bg: 'bg-red-50' },
    { icon: <Settings size={20} />, label: '系统设置', color: 'text-gray-500', bg: 'bg-gray-50' },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* User Info */}
      <header className="flex flex-col items-center gap-4 py-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-blue to-growth-green p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl">
              👶
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-joy-yellow w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
            <span className="text-xs font-black">L5</span>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-black text-gray-800">快乐的小点点</h1>
          <p className="text-xs font-bold text-gray-400 mt-1">ID: 8888 6666</p>
        </div>
      </header>

      {/* Stats Summary */}
      <div className="flex bg-white rounded-3xl p-6 shadow-sm border border-gray-100 divide-x divide-gray-50">
        <div className="flex-1 text-center space-y-1">
          <p className="text-2xl font-black text-gray-800">12</p>
          <p className="text-[10px] font-bold text-gray-400">获得勋章</p>
        </div>
        <div className="flex-1 text-center space-y-1">
          <p className="text-2xl font-black text-gray-800">35</p>
          <p className="text-[10px] font-bold text-gray-400">已读绘本</p>
        </div>
        <div className="flex-1 text-center space-y-1">
          <p className="text-2xl font-black text-gray-800">1.2k</p>
          <p className="text-[10px] font-bold text-gray-400">累计积分</p>
        </div>
      </div>

      {/* Menu List */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        {menuItems.map((item, i) => (
          <button
            key={i}
            onClick={() => item.path && navigate(item.path)}
            className={cn(
              "w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors",
              i !== menuItems.length - 1 && "border-b border-gray-50"
            )}
          >
            <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center", item.bg, item.color)}>
              {item.icon}
            </div>
            <span className="flex-1 font-bold text-gray-700 text-left">{item.label}</span>
            <ChevronRight size={20} className="text-gray-300" />
          </button>
        ))}
      </div>

      {/* Logout / Switch */}
      <button className="w-full py-5 rounded-3xl bg-gray-50 text-gray-400 font-bold text-sm">
        切换账号
      </button>
    </div>
  );
}
