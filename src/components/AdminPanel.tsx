import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { User, Language } from '../types';
import { storage } from '../lib/storage';
import { translations } from '../translations';

interface AdminPanelProps {
  lang: Language;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ lang, onClose }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const t = translations[lang];

  useEffect(() => {
    setUsers(storage.getUsers());
  }, []);

  const handleAddXP = (userId: string) => {
    storage.addXP(userId, 500);
    setUsers(storage.getUsers());
  };

  const handleReset = () => {
    if (confirm('Reset everything?')) {
      storage.resetAll();
      setUsers(storage.getUsers());
    }
  };

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase()) || 
    u.username.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    totalUsers: users.length,
    activeToday: users.filter(u => new Date(u.lastLoginDate).toDateString() === new Date().toDateString()).length,
    totalXP: users.reduce((acc, u) => acc + u.xp, 0),
  };

  return (
    <div className="fixed inset-0 z-[60] bg-[#020617] p-4 md:p-8 overflow-y-auto font-sans text-white">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tighter text-neon-cyan">{t.adminPanel}</h1>
            <p className="text-white/40 uppercase text-xs tracking-[0.3em]">System Overseer Interface</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Icons.X size={24} />
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: t.users, value: stats.totalUsers, icon: 'Users', color: 'text-blue-400' },
            { label: t.activeUsers, value: stats.activeToday, icon: 'Zap', color: 'text-yellow-400' },
            { label: t.totalXP, value: stats.totalXP, icon: 'Star', color: 'text-purple-400' },
          ].map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="hud-panel p-6 border border-white/10 bg-white/5 rounded-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-white/40 uppercase text-[10px] font-bold tracking-widest">{s.label}</span>
                {/* @ts-ignore */}
                {React.createElement(Icons[s.icon], { size: 16, className: s.color })}
              </div>
              <div className="text-3xl font-black text-white">{s.value}</div>
            </motion.div>
          ))}
        </div>

        {/* User Management */}
        <div className="hud-panel border border-white/10 bg-white/5 rounded-3xl overflow-hidden mb-12">
          <div className="p-6 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold">{t.users}</h2>
            <div className="relative w-full md:w-64">
              <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input 
                type="text" 
                placeholder="Search command..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 outline-none focus:border-neon-cyan transition-colors"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button onClick={handleReset} className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl text-xs font-bold hover:bg-red-500/30 transition-all uppercase tracking-widest">
              {t.resetProgress}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-white/40 uppercase text-[10px] font-bold tracking-widest">
                  <th className="px-6 py-4">{t.user}</th>
                  <th className="px-6 py-4">{t.status}</th>
                  <th className="px-6 py-4">{t.xp}</th>
                  <th className="px-6 py-4">{t.lessonsCompleted}</th>
                  <th className="px-6 py-4">{t.lastLogin}</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-blue-600 flex items-center justify-center font-black text-xs">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                          <div className="text-[10px] text-white/40">@{user.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${user.role === 'admin' ? 'bg-purple-500/20 text-purple-400' : 'bg-green-500/20 text-green-400'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-sm">{user.xp}</td>
                    <td className="px-6 py-4 font-mono text-sm">{user.completedLessons.length}</td>
                    <td className="px-6 py-4 text-xs text-white/40">{new Date(user.lastLoginDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleAddXP(user.id)}
                        className="p-2 hover:bg-neon-cyan/20 text-neon-cyan transition-colors rounded-lg"
                      >
                        <Icons.Zap size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
