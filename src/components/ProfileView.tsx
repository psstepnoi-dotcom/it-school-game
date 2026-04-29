import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { User, Language } from '../types';
import { translations } from '../translations';
import { courses } from '../data/courses';

interface ProfileViewProps {
  user: User;
  lang: Language;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ user, lang }) => {
  const t = translations[lang];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="hud-panel p-8 md:p-12 border border-white/10 bg-white/5 rounded-[3rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan to-blue-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-black relative flex items-center justify-center border-4 border-white/10 overflow-hidden">
              <span className="text-5xl font-black text-neon-cyan">{user.name.charAt(0)}</span>
            </div>
            <div className="absolute bottom-2 right-2 bg-neon-cyan text-black px-3 py-1 rounded-full text-[10px] font-black tracking-widest border-2 border-[#020617]">
              LVL {user.level}
            </div>
          </div>

          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">{user.name}</h2>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">
                {user.role}
              </span>
            </div>
            <p className="text-white/40 font-mono text-sm tracking-widest">UID_{user.id?.toUpperCase()}_RUNTIME_OK</p>
            
            <div className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start">
              {[
                { label: t.xp, value: user.xp, icon: 'Star', color: 'text-yellow-400' },
                { label: t.streak, value: user.streak, icon: 'Zap', color: 'text-orange-400' },
                { label: t.lessonsCompleted, value: user.completedLessons.length, icon: 'BookOpen', color: 'text-blue-400' },
              ].map((stat, i) => (
                <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                  {/* @ts-ignore */}
                  {React.createElement(Icons[stat.icon], { size: 14, className: stat.color })}
                  <div className="flex flex-col">
                    <span className="text-[8px] text-white/30 uppercase font-bold tracking-widest">{stat.label}</span>
                    <span className="text-sm font-black text-white">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Progress Grid */}
        <div className="hud-panel p-8 border border-white/10 rounded-[2.5rem] bg-white/5 space-y-6">
          <h3 className="text-xl font-black tracking-tight text-neon-cyan uppercase">{t.courses}</h3>
          <div className="space-y-4">
            {courses.map(course => {
              const completed = user.completedLessons.filter(lId => lId.startsWith(course.id)).length;
              const total = course.lessons.length;
              const percent = (completed / total) * 100;
              return (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                    <span className="text-white/60">{course.name[lang]}</span>
                    <span className="text-neon-cyan">{Math.round(percent)}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      className={`h-full bg-gradient-to-r ${course.color}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="hud-panel p-8 border border-white/10 rounded-[2.5rem] bg-white/5 space-y-6">
          <h3 className="text-xl font-black tracking-tight text-neon-cyan uppercase">{t.achievements}</h3>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i} 
                className={`aspect-square rounded-2xl border-2 flex items-center justify-center transition-all group relative ${
                  user.achievements.length > i ? 'bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan cursor-pointer' : 'bg-white/5 border-white/10 text-white/10 grayscale opacity-40'
                }`}
              >
                <Icons.Trophy size={20} className={user.achievements.length > i ? 'animate-bounce' : ''} />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 border border-white/10 rounded-lg text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Mystery Reward {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
