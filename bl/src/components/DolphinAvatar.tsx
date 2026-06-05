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
}) => {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  return (
    <div className={cn(
      "relative rounded-full bg-gradient-to-br from-brand-blue/20 to-white flex items-center justify-center shadow-lg border-4 border-white overflow-hidden",
      sizes[size],
      className
    )}>
      <img
        src="./assets/images/IP形象.png"
        alt="点点"
        className="w-[85%] h-[85%] object-contain"
        style={{ animation: 'mascotBounce 2s ease-in-out infinite' }}
      />
    </div>
  );
};
