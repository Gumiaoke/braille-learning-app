import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'braille-onboarding-done';

const steps = [
  {
    title: '这是点点盲文学习机',
    desc: 'AI智能陪伴，让盲文学习变得有趣又简单',
    emoji: '📦',
  },
  {
    title: '开始你的学习之旅',
    desc: '拼音、阅读、练习，丰富的课程等你来探索',
    emoji: '📚',
  },
  {
    title: '和点点一起聊天吧',
    desc: 'AI伙伴点点随时陪伴，回答问题、讲故事',
    emoji: '💬',
  },
];

export const Onboarding: React.FC = () => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const done = localStorage.getItem(STORAGE_KEY);
    if (!done) {
      setShow(true);
    }
  }, []);

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      finish();
    }
  };

  const finish = () => {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  const skip = () => {
    finish();
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.55)' }}
      >
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white rounded-3xl p-8 mx-6 max-w-sm w-full text-center shadow-2xl relative"
        >
          <div className="text-5xl mb-4">{steps[step].emoji}</div>
          <h2 className="text-xl font-extrabold text-gray-800 mb-2">
            {steps[step].title}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            {steps[step].desc}
          </p>

          {/* Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === step ? 'w-6 h-1.5 bg-brand-blue' : 'w-1.5 h-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={skip}
              className="text-sm text-gray-400 font-medium hover:text-gray-600 transition-colors"
            >
              跳过
            </button>
            <button
              onClick={next}
              className="px-6 py-2.5 bg-brand-blue text-white rounded-full font-bold text-sm shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 active:scale-95 transition-all"
            >
              {step < steps.length - 1 ? '下一步 →' : '开始使用 🎉'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
