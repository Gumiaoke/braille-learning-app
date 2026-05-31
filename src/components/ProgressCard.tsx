import React from 'react';
import { cn } from '../lib/utils';

interface ProgressCardProps {
  title: string;
  progress: number; // 0 to 100
  icon: React.ReactNode;
  colorClass: string;
  subtitle?: string;
  className?: string;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  progress,
  icon,
  colorClass,
  subtitle,
  className
}) => {
  return (
    <div className={cn("bg-white p-4 rounded-3xl shadow-sm border border-gray-100", className)}>
      <div className="flex items-center gap-3 mb-3">
        <div className={cn("p-2 rounded-2xl", colorClass)}>
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>
      <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
        <div 
          className={cn("h-full rounded-full transition-all duration-500", colorClass.replace('bg-', 'bg-opacity-100 bg-'))} 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-[10px] font-bold text-gray-400">{progress}%</span>
      </div>
    </div>
  );
};
