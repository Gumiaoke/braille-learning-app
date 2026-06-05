import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, GraduationCap, TreeDeciduous, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTimeTheme } from '../hooks/useTimeTheme';

export const Layout: React.FC = () => {
  const theme = useTimeTheme();
  const navItems = [
    { path: '/', icon: <Home size={24} />, label: '首页' },
    { path: '/learn', icon: <GraduationCap size={24} />, label: '学习' },
    { path: '/read', icon: <img src="./assets/images/IP形象.png" alt="阅读" className="w-10 h-10 object-contain" />, label: '阅读' },
    { path: '/grow', icon: <TreeDeciduous size={24} />, label: '成长' },
    { path: '/profile', icon: <User size={24} />, label: '我的' },
  ];

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto overflow-hidden shadow-2xl relative" style={{ background: theme.bgGradient, transition: 'background 0.8s ease' }}>
      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="shrink-0 h-20 bg-white/80 backdrop-blur-md border-t border-brand-blue/20 flex items-center justify-around px-2 pb-safe shadow-[0_-4px_20px_rgba(142,216,255,0.1)]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300",
              isActive 
                ? "text-brand-blue bg-brand-blue/10 scale-110" 
                : "text-gray-400 hover:text-brand-blue/60"
            )}
          >
            {item.icon}
            <span className="text-[10px] mt-1 font-bold">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
