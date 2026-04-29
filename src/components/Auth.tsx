import React, { useState } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { storage } from '../lib/storage';
import { Language, User } from '../types';
import { translations } from '../translations';
import { Logo } from './Logo';

interface AuthProps {
  lang: Language;
  onLogin: (user: User) => void;
  onLangChange: (lang: Language) => void;
}

export const Auth: React.FC<AuthProps> = ({ lang, onLogin, onLangChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const t = translations[lang];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users = storage.getUsers();
    const user = users.find(u => u.username === username.toLowerCase() && u.password === password);

    if (user) {
      storage.setCurrentUser(user);
      onLogin(user);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md hud-panel bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative z-10 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]"
      >
        <div className="flex flex-col items-center mb-10">
          <Logo className="w-20 h-20 mb-6 drop-shadow-[0_0_20px_rgba(0,242,255,0.4)]" />
          <h1 className="text-4xl font-black tracking-tighter text-white mb-2">{t.title}</h1>
          <p className="text-white/40 uppercase text-[10px] tracking-[0.4em] font-bold">{t.subtitle}</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">{t.login}</label>
            <div className="relative">
              <Icons.User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                type="text" 
                className={`w-full bg-black/40 border ${error ? 'border-red-500' : 'border-white/10'} rounded-2xl py-4 pl-14 pr-6 outline-none focus:border-neon-cyan focus:bg-black/60 transition-all text-white font-medium`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">{t.password}</label>
            <div className="relative">
              <Icons.Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                type="password" 
                className={`w-full bg-black/40 border ${error ? 'border-red-500' : 'border-white/10'} rounded-2xl py-4 pl-14 pr-6 outline-none focus:border-neon-cyan focus:bg-black/60 transition-all text-white font-medium`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-neon-cyan to-blue-600 py-5 rounded-2xl text-black font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_-5px_rgba(0,242,255,0.4)] hover:shadow-[0_15px_40px_-5px_rgba(0,242,255,0.6)] transition-all flex items-center justify-center gap-3 mt-4"
          >
            {t.signIn}
            <Icons.ChevronRight size={20} />
          </motion.button>
        </form>

        <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-4">
          {['en', 'ru', 'kz'].map((l) => (
            <button 
              key={l}
              onClick={() => onLangChange(l as Language)}
              className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg transition-all ${lang === l ? 'bg-white/10 text-white' : 'text-white/20 hover:text-white/40'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
