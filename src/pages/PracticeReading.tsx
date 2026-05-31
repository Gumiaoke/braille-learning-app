import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PracticeReading() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  const options = ['小海豚', '大白鲨', '小企鹅'];

  return (
    <div className="h-full flex flex-col bg-white p-6 max-w-md mx-auto">
      <header className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="font-black text-gray-800 text-lg">阅读理解</h1>
      </header>

      <div className="flex-1 space-y-8">
        <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 italic text-gray-700 leading-relaxed">
          “大海里住着一只聪明的小海豚，它的名字叫点点。点点每天都喜欢和朋友们一起玩耍。”
        </div>

        <div className="space-y-4">
          <h3 className="font-black text-gray-800">问题：故事的主人公是谁？</h3>
          <div className="grid grid-cols-1 gap-3">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={cn(
                  "w-full py-5 px-6 rounded-2xl font-bold text-left transition-all",
                  selected === i 
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20" 
                    : "bg-white border border-gray-100 text-gray-600"
                )}
              >
                {String.fromCharCode(65 + i)}. {opt}
              </button>
            ))}
          </div>
        </div>

        <button 
          className="w-full bg-growth-green py-5 rounded-3xl text-white font-black text-xl shadow-lg shadow-growth-green/20 mt-4 disabled:opacity-50"
          disabled={selected === null}
        >
          确定答案
        </button>
      </div>
    </div>
  );
}
