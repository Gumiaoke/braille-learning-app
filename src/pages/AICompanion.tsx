import React, { useState } from 'react';
import { Send, Lightbulb, Book, PenTool, Heart, Mic } from 'lucide-react';
import { DolphinAvatar } from '../components/DolphinAvatar';
import { cn } from '../lib/utils';

export default function AICompanion() {
  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', text: '你好呀！我是点点～今天想和我聊点什么呢？' },
    { id: 2, type: 'user', text: '月亮为什么发光？' },
    { id: 3, type: 'ai', text: '其实月亮本身不会发光哦，它像一面大镜子，反射的是太阳公公的光芒！' },
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), type: 'user', text: input }]);
    setInput('');
    // Mock response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'ai', text: '太棒了，我也在想这个问题呢！' }]);
    }, 1000);
  };

  const suggestions = [
    { icon: <Lightbulb size={16} />, text: '知识问答', color: 'bg-yellow-100 text-yellow-600' },
    { icon: <Book size={16} />, text: '讲个故事', color: 'bg-blue-100 text-blue-600' },
    { icon: <PenTool size={16} />, text: '学习辅导', color: 'bg-green-100 text-green-600' },
    { icon: <Heart size={16} />, text: '情感陪伴', color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="h-full flex flex-col bg-white max-w-md mx-auto">
      {/* Header / IP Character */}
      <header className="bg-gradient-to-b from-brand-blue/20 to-white p-6 flex flex-col items-center gap-4">
        <DolphinAvatar size="lg" expression="happy" />
        <div className="text-center">
          <h1 className="text-xl font-black text-gray-800">小海豚点点</h1>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <div className="w-2 h-2 bg-growth-green rounded-full animate-pulse" />
            <span className="text-xs font-bold text-gray-400">在线陪练中</span>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={cn(
              "flex items-start gap-3 max-w-[85%]",
              msg.type === 'user' ? "ml-auto flex-row-reverse" : ""
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
              msg.type === 'ai' ? "bg-brand-blue text-white" : "bg-gray-100 text-gray-400"
            )}>
              {msg.type === 'ai' ? '🐬' : '👤'}
            </div>
            <div className={cn(
              "p-3 rounded-2xl text-sm font-medium shadow-sm",
              msg.type === 'ai' 
                ? "bg-white border border-brand-blue/10 text-gray-800 rounded-tl-none" 
                : "bg-brand-blue text-white rounded-tr-none"
            )}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-50 space-y-4">
        {/* Quick Suggestions */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {suggestions.map((s, i) => (
            <button key={i} className={cn("shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-transform active:scale-95", s.color)}>
              {s.icon}
              {s.text}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="p-3 bg-gray-100 rounded-2xl text-gray-400">
            <Mic size={24} />
          </button>
          <div className="flex-1 relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="问问点点吧..."
              className="w-full bg-gray-100 rounded-2xl py-3 px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
            />
            <button 
              onClick={handleSend}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-blue text-white rounded-xl shadow-md"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
