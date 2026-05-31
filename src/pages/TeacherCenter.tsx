import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Plus, Users, BookOpen, BarChart3, FileText, Send } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TeacherCenter() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col bg-gray-50 max-w-md mx-auto">
      <header className="p-4 flex items-center gap-4 bg-white border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="font-black text-gray-800 text-lg">老师端</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Class Overview */}
        <div className="bg-gradient-to-br from-brand-blue to-indigo-500 p-6 rounded-[2rem] text-white shadow-xl shadow-indigo-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-black">一年级 (2) 班</h2>
              <p className="text-xs text-brand-blue/20 font-bold opacity-80">当前在线: 18/25 人</p>
            </div>
            <div className="bg-white/20 p-2 rounded-xl">
              <Users size={24} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-3 rounded-2xl">
              <p className="text-[10px] opacity-70">平均进度</p>
              <p className="text-lg font-black">78%</p>
            </div>
            <div className="bg-white/10 p-3 rounded-2xl">
              <p className="text-[10px] opacity-70">今日作业完成</p>
              <p className="text-lg font-black">12/25</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <section className="grid grid-cols-2 gap-4">
          <button className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-growth-green/10 rounded-2xl flex items-center justify-center text-growth-green">
              <Plus size={28} />
            </div>
            <span className="font-bold text-gray-700 text-sm">发布任务</span>
          </button>
          <button className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
              <BookOpen size={28} />
            </div>
            <span className="font-bold text-gray-700 text-sm">上传教材</span>
          </button>
        </section>

        {/* Homework List */}
        <section className="space-y-4">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-sm font-black text-gray-500 uppercase tracking-widest">近期任务</h2>
            <button className="text-brand-blue text-xs font-bold">查看全部</button>
          </div>
          <div className="space-y-3">
            {[
              { title: '完成第五课拼音练习', deadline: '今天 18:00', type: '练习', count: '15/25' },
              { title: '阅读《小海豚点点》', deadline: '明天 12:00', type: '阅读', count: '8/25' },
            ].map((task, i) => (
              <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-center">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                  <FileText size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-800">{task.title}</h4>
                  <p className="text-[10px] text-gray-400">截止: {task.deadline}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-brand-blue">{task.count}</p>
                  <p className="text-[8px] text-gray-300">已提交</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Performance */}
        <section className="space-y-4">
          <h2 className="text-sm font-black text-gray-500 uppercase tracking-widest px-2">学生成绩统计</h2>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-end justify-between h-32 gap-2">
              {[60, 80, 45, 95, 70, 55, 85].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-indigo-100 rounded-t-md relative group">
                    <div className="absolute inset-0 bg-indigo-500 rounded-t-md transition-all duration-1000" style={{ height: `${h}%` }} />
                  </div>
                  <span className="text-[8px] font-bold text-gray-400">学生{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
