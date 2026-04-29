import React from 'react';
import { motion } from 'motion/react';
import { Gift, ShieldCheck, Cpu, HardDrive, Smartphone, Laptop, Award, Star } from 'lucide-react';
import { Language, User, Reward } from '../types';

interface RewardsStoreProps {
  language: Language;
  user: User;
  onTabChange?: (tab: 'ranking' | 'rewards') => void;
}

const REWARDS: Reward[] = [
  { id: '1', title: { en: 'ChatGPT Plus Subscription', ru: 'Подписка ChatGPT Plus', kz: 'ChatGPT Plus жазылымы' }, description: { en: 'Full access to GPT-4o and advanced AI tools for 1 month.', ru: 'Полный доступ к GPT-4o и инструментам ИИ на 1 месяц.', kz: '1 айға GPT-4o және ИИ құралдарына толық қолжетімділік.' }, cost: 5000, icon: 'Cpu', type: 'experience' },
  { id: '2', title: { en: 'Gemini Advanced', ru: 'Gemini Advanced', kz: 'Gemini Advanced' }, description: { en: 'Google’s Ultra 1.0 model and 2TB storage for 1 month.', ru: 'Модель Google Ultra 1.0 и 2ТБ хранилища на 1 месяц.', kz: 'Google Ultra 1.0 моделі және 2ТБ сақтау орны 1 айға.' }, cost: 5000, icon: 'ShieldCheck', type: 'experience' },
  { id: '3', title: { en: 'Midjourney Basic Plan', ru: 'Подписка Midjourney', kz: 'Midjourney жазылымы' }, description: { en: 'Create professional AI art for your projects.', ru: 'Создавайте профессиональное ИИ-искусство для проектов.', kz: 'Жобаларыңыз үшін кәсіби ИИ-өнерін жасаңыз.' }, cost: 4000, icon: 'Award', type: 'experience' },
  { id: '4', title: { en: 'GitHub Copilot Pro', ru: 'GitHub Copilot Pro', kz: 'GitHub Copilot Pro' }, description: { en: 'The world’s most widely adopted AI developer tool.', ru: 'Самый популярный инструмент ИИ для разработчиков.', kz: 'Әзірлеушілерге арналған ең танымал ИИ құралы.' }, cost: 3000, icon: 'Smartphone', type: 'experience' },
];

export const RewardsStore: React.FC<RewardsStoreProps> = ({ language, user, onTabChange }) => {
  const t = {
    en: { title: 'Rewards & Prizes', subtitle: 'Earn XP and claim your trophies', yourXp: 'Your current XP', levelReq: 'Level required', comingSoon: 'Coming Soon' },
    ru: { title: 'Сыйлықтар мен Призы', subtitle: 'Зарабатывай опыт и забирай трофеи', yourXp: 'Твой текущий опыт', levelReq: 'Нужен уровень', comingSoon: 'Скоро в продаже' },
    kz: { title: 'Сыйлықтар мен Жүлделер', subtitle: 'Тәжірибе жинап, олжаларды ал', yourXp: 'Сенің тәжірибең', levelReq: 'Қажетті деңгей', comingSoon: 'Жақын арада' }
  }[language];

  return (
    <div className="space-y-12 pb-24">
      <div className="text-center space-y-4">
        <button 
          onClick={() => onTabChange?.('ranking')}
          className="mb-4 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-neon-cyan transition-colors"
        >
          &larr; Back to Hall of Fame
        </button>
        <h2 className="text-4xl font-black tracking-tighter uppercase italic">{t.title}</h2>
        <div className="flex items-center justify-center space-x-2 text-neon-cyan">
          <Gift className="w-5 h-5" />
          <span className="font-bold text-lg">{t.yourXp}: {user.xp.toLocaleString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {REWARDS.map((reward, i) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative hud-panel bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck className="w-12 h-12" />
            </div>
            
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform">
               {reward.icon === 'Cpu' && <Cpu className="text-white w-10 h-10" />}
               {reward.icon === 'ShieldCheck' && <ShieldCheck className="text-white w-10 h-10" />}
               {reward.icon === 'Award' && <Award className="text-white w-10 h-10" />}
               {reward.icon === 'Smartphone' && <Smartphone className="text-white w-10 h-10" />}
               {reward.icon === 'Star' && <Star className="text-white w-10 h-10" />}
            </div>

            <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{reward.title[language]}</h3>
            <p className="text-xs text-white/40 mb-8 leading-relaxed font-medium">
              {reward.description[language]}
            </p>

            <div className="mt-auto space-y-4 w-full">
              <div className="text-2xl font-black text-neon-cyan tracking-tighter italic">
                {reward.cost.toLocaleString()} XP
              </div>
              <button disabled className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/20 cursor-not-allowed">
                {t.comingSoon}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
