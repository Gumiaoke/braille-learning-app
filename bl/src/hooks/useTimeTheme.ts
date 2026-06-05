import { useState, useEffect } from 'react';

export type TimePeriod = 'morning' | 'afternoon' | 'evening' | 'night';

export interface ThemeColors {
  period: TimePeriod;
  bgGradient: string;
  accentColor: string;
  glowColor: string;
  greeting: string;
  emoji: string;
}

const themes: Record<TimePeriod, Omit<ThemeColors, 'period'>> = {
  morning: {
    bgGradient: 'linear-gradient(175deg, #FFF8E1 0%, #FFF3E0 15%, #FFFDE7 30%, #FFF 60%, #FFF8E7 100%)',
    accentColor: '#FFB74D',
    glowColor: 'rgba(255,183,77,0.2)',
    greeting: '早上好',
    emoji: '☀️',
  },
  afternoon: {
    bgGradient: 'linear-gradient(175deg, #E3F2FD 0%, #F0F8FF 15%, #F5FAFE 30%, #FFF 55%, #F8FDFF 100%)',
    accentColor: '#7ED8FF',
    glowColor: 'rgba(126,216,255,0.2)',
    greeting: '下午好',
    emoji: '🌤',
  },
  evening: {
    bgGradient: 'linear-gradient(175deg, #F3E5F5 0%, #EDE7F6 15%, #F5F0FA 30%, #FFF 55%, #F8F5FC 100%)',
    accentColor: '#CE93D8',
    glowColor: 'rgba(206,147,216,0.18)',
    greeting: '傍晚好',
    emoji: '🌅',
  },
  night: {
    bgGradient: 'linear-gradient(175deg, #E8EAF6 0%, #D5D9EE 15%, #E3E8F5 30%, #EEF0F8 55%, #F5F6FA 100%)',
    accentColor: '#7986CB',
    glowColor: 'rgba(121,134,203,0.15)',
    greeting: '晚上好',
    emoji: '🌙',
  },
};

export function getTimePeriod(): TimePeriod {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 20) return 'evening';
  return 'night';
}

export function useTimeTheme() {
  const [theme, setTheme] = useState<ThemeColors>(() => {
    const period = getTimePeriod();
    return { period, ...themes[period] };
  });

  useEffect(() => {
    const update = () => {
      const period = getTimePeriod();
      setTheme({ period, ...themes[period] });
    };

    // Check every minute for period change
    const interval = setInterval(update, 60000);

    // Also update on visibility change (tab focus)
    const onVisible = () => update();
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  return theme;
}
