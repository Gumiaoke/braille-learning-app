import React from 'react';
import { cn } from '../lib/utils';

interface DolphinAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  expression?: 'happy' | 'thinking' | 'talking';
}

export const DolphinAvatar: React.FC<DolphinAvatarProps> = ({
  size = 'md',
  className,
  expression = 'happy'
}) => {
  const sizes = {
    sm: 'w-10 h-10 text-xl',
    md: 'w-20 h-20 text-4xl',
    lg: 'w-32 h-32 text-6xl',
    xl: 'w-48 h-48 text-8xl'
  };

  const expressions = {
    happy: '🐬',
    thinking: '🤔',
    talking: '💬'
  };

  return (
    <div className={cn(
      "relative rounded-full bg-gradient-to-br from-brand-blue to-white flex items-center justify-center shadow-lg border-4 border-white overflow-hidden",
      sizes[size],
      className
    )}>
      <span role="img" aria-label="dolphin" className="animate-bounce">
        {expression === 'happy' ? '🐬' : expression === 'thinking' ? '🐬' : '🐬'}
      </span>
      {expression === 'thinking' && (
        <div className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-sm text-sm">
          💭
        </div>
      )}
      {expression === 'talking' && (
        <div className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-sm text-sm">
          💬
        </div>
      )}
    </div>
  );
};
