import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Medal, Star, Flame, Crown, Gift, ArrowUpRight, Award } from 'lucide-react';
import { Language, User } from '../types';

interface LeaderboardProps {
  language: Language;
  currentUser: User;
  onTabChange?: (tab: 'ranking' | 'rewards') => void;
}

const MOCK_LEADERBOARD: User[] = [
  { id: 'st-1', username: 'asu_zhalgas', name: 'Асу Жалғас', role: 'student', xp: 28500, level: 53, streak: 18, lastLoginDate: '', achievements: [], avatarSeed: 'zhalgas', completedLessons: [], rank: 1 },
  { id: 'st-2', username: 'aidyn_aiym', name: 'Айдынқызы Айым', role: 'student', xp: 26200, level: 51, streak: 12, lastLoginDate: '', achievements: [], avatarSeed: 'aiym', completedLessons: [], rank: 2 },
  { id: 'st-3', username: 'balnur_u', name: 'Асылтаева Балнұр Үсенқызы', role: 'student', xp: 24800, level: 49, streak: 30, lastLoginDate: '', achievements: [], avatarSeed: 'balnur', completedLessons: [], rank: 3 },
  { id: 'st-4', username: 'alikhan_e', name: 'Алибеков Алихан Ерланұлы', role: 'student', xp: 22500, level: 47, streak: 5, lastLoginDate: '', achievements: [], avatarSeed: 'alikhan', completedLessons: [], rank: 4 },
  { id: 'st-5', username: 'marzhan_b', name: 'Бердали Маржан Бауыржанқызы', role: 'student', xp: 21200, level: 46, streak: 8, lastLoginDate: '', achievements: [], avatarSeed: 'marzhan', completedLessons: [], rank: 5 },
  { id: 'st-6', username: 'adeliya_a', name: 'Жумагулова Аделия Айбековна', role: 'student', xp: 19100, level: 43, streak: 20, lastLoginDate: '', achievements: [], avatarSeed: 'adeliya', completedLessons: [], rank: 6 },
  { id: 'st-7', username: 'aruzhan_n', name: 'Кәрім Аружан Нұрланқызы', role: 'student', xp: 18200, level: 42, streak: 10, lastLoginDate: '', achievements: [], avatarSeed: 'aruzhan_n', completedLessons: [], rank: 7 },
  { id: 'st-8', username: 'nurbek_zh', name: 'Рымбек Нұрбек Жұлдызұлы', role: 'student', xp: 17500, level: 41, streak: 15, lastLoginDate: '', achievements: [], avatarSeed: 'nurbek', completedLessons: [], rank: 8 },
  { id: 'st-9', username: 'aruzhan_b', name: 'Рысбек Аружан Бақытбекқызы', role: 'student', xp: 16800, level: 40, streak: 7, lastLoginDate: '', achievements: [], avatarSeed: 'aruzhan_b', completedLessons: [], rank: 9 },
  { id: 'st-10', username: 'erkebulan_t', name: 'Слямбеков Еркебұлан Тлеубекұлы', role: 'student', xp: 15900, level: 39, streak: 25, lastLoginDate: '', achievements: [], avatarSeed: 'erkebulan', completedLessons: [], rank: 10 },
  { id: 'st-11', username: 'askhat_s', name: 'Турысбеков Асхат Сакенович', role: 'student', xp: 14200, level: 37, streak: 6, lastLoginDate: '', achievements: [], avatarSeed: 'askhat', completedLessons: [], rank: 11 },
  { id: 'st-12', username: 'rakhim_k', name: 'Турдыбеков Рахим Куанышевич', role: 'student', xp: 13100, level: 36, streak: 14, lastLoginDate: '', achievements: [], avatarSeed: 'rakhim', completedLessons: [], rank: 12 },
  { id: 'st-13', username: 'farangiz_b', name: 'Эргешова Фарангиз Бегмурадовна', role: 'student', xp: 12500, level: 35, streak: 9, lastLoginDate: '', achievements: [], avatarSeed: 'farangiz', completedLessons: [], rank: 13 },
];

export const Leaderboard: React.FC<LeaderboardProps> = ({ language, currentUser, onTabChange }) => {
  const t = {
    en: {
      title: 'Rating',
      subtitle: 'Top Performers of the IT School',
      rank: 'Rank',
      student: 'Student',
      xp: 'XP',
      level: 'Level',
      streak: 'Streak',
      rewards: 'Top Rewards',
      firstPlace: 'ChatGPT Plus + Gemini Advanced Bundle',
      secondPlace: 'ChatGPT Plus Subscription',
      thirdPlace: 'Midjourney Subscription'
    },
    ru: {
      title: 'Рейтинг',
      subtitle: 'Лучшие студенты IT Школы',
      rank: 'Место',
      student: 'Студент',
      xp: 'Опыт (XP)',
      level: 'Уровень',
      streak: 'Ударный режим',
      rewards: 'Главные призы',
      firstPlace: 'ChatGPT Plus + Gemini Advanced',
      secondPlace: 'Подписка ChatGPT Plus',
      thirdPlace: 'Подписка Midjourney'
    },
    kz: {
      title: 'Рейтинг',
      subtitle: 'IT мектебінің үздік студенттері',
      rank: 'Орын',
      student: 'Студент',
      xp: 'Тәжірибе (XP)',
      level: 'Деңгей',
      streak: 'Күнделік',
      rewards: 'Басты сыйлықтар',
      firstPlace: 'ChatGPT Plus + Gemini Advanced',
      secondPlace: 'ChatGPT Plus жазылымы',
      thirdPlace: 'Midjourney жазылымы'
    }
  }[language];

  // Combine mock data with current user if not present
  const fullLeaderboard = [...MOCK_LEADERBOARD];
  if (!fullLeaderboard.find(u => u.id === currentUser.id)) {
    fullLeaderboard.push({ ...currentUser, rank: 14 }); // Mock rank for user
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-8 h-8 text-yellow-400 fill-yellow-400" />;
      case 2: return <Medal className="w-8 h-8 text-slate-300 fill-slate-300" />;
      case 3: return <Medal className="w-8 h-8 text-amber-600 fill-amber-600" />;
      default: return <span className="text-xl font-bold text-gray-400">{rank}</span>;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header with Motion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="inline-flex items-center justify-center p-3 bg-yellow-500/10 rounded-full mb-4">
          <Trophy className="w-10 h-10 text-yellow-500" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl uppercase italic tracking-tighter leading-none">
          {t.title}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto italic">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Reward Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { color: 'bg-yellow-500/20 border-yellow-500/50', icon: Crown, title: t.firstPlace, rank: '1' },
          { color: 'bg-slate-300/20 border-slate-300/50', icon: Star, title: t.secondPlace, rank: '2' },
          { color: 'bg-amber-600/20 border-amber-600/50', icon: Award, title: t.thirdPlace, rank: '3' },
        ].map((reward, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onTabChange?.('rewards')}
            className={`relative p-6 rounded-2xl border ${reward.color} overflow-hidden group hover:scale-[1.02] transition-transform cursor-pointer`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <reward.icon className="w-12 h-12 mb-2" />
              <div className="bg-black/40 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
                Tier {reward.rank} Prize
              </div>
              <h3 className="text-lg font-bold text-white">{reward.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leaderboard Table */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-900/50 rounded-3xl border border-gray-800 backdrop-blur-xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">{t.rank}</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">{t.student}</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">{t.streak}</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">{t.level}</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-400 uppercase tracking-wider text-right">{t.xp}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {fullLeaderboard.map((user, idx) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className={`group hover:bg-white/5 transition-colors ${user.id === currentUser.id ? 'bg-blue-500/10 border-l-4 border-l-blue-500' : ''}`}
                >
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex items-center justify-center w-10">
                      {getRankIcon(user.rank || idx + 1)}
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white ring-2 ring-gray-800">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{user.name}</div>
                        <div className="text-xs text-gray-500">@{user.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap hidden md:table-cell">
                    <div className="flex items-center space-x-1">
                      <Flame className={`w-4 h-4 ${user.streak > 10 ? 'text-orange-500 fill-orange-500' : 'text-gray-400'}`} />
                      <span className="text-sm font-medium text-gray-300">{user.streak} days</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-blue-500 fill-blue-500" />
                      <span className="text-sm font-bold text-white">Lvl {user.level}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-right">
                    <span className="text-lg font-mono font-bold text-blue-400">
                      {user.xp.toLocaleString()}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Motivational Footer */}
      <div className="flex justify-center pt-4">
        <button 
          onClick={() => onTabChange?.('rewards')}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-2xl text-white font-bold hover:shadow-2xl hover:shadow-blue-500/20 transition-all active:scale-95 group"
        >
          <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>{language === 'en' ? 'View All Available Rewards' : language === 'ru' ? 'Посмотреть все награды' : 'Барлық сыйлықтарды көру'}</span>
          <ArrowUpRight className="w-4 h-4 opacity-50" />
        </button>
      </div>
    </div>
  );
};
