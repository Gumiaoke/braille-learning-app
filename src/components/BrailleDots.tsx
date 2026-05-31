import React from 'react';
import { cn } from '../lib/utils';

interface BrailleDotsProps {
  dots?: boolean[]; // Array of 6 booleans
  interactive?: boolean;
  onToggle?: (index: number) => void;
  size?: 'sm' | 'md' | 'lg';
}

export const BrailleDots: React.FC<BrailleDotsProps> = ({
  dots = [false, false, false, false, false, false],
  interactive = false,
  onToggle,
  size = 'md'
}) => {
  const dotSizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const gapSizes = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  };

  return (
    <div className={cn("grid grid-cols-2 bg-white/50 p-4 rounded-2xl border-2 border-brand-blue/30 inline-grid", gapSizes[size])}>
      {dots.map((active, index) => (
        <button
          key={index}
          disabled={!interactive}
          onClick={() => interactive && onToggle?.(index)}
          className={cn(
            dotSizes[size],
            "rounded-full transition-all duration-200",
            active 
              ? "bg-brand-blue shadow-[0_0_10px_rgba(142,216,255,0.8)] scale-110" 
              : "bg-gray-200 shadow-inner",
            interactive && "hover:scale-105 active:scale-95 cursor-pointer"
          )}
        />
      ))}
    </div>
  );
};
