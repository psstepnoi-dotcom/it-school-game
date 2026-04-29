import { Achievement, User } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-win',
    name: { en: 'First Step', ru: 'Первый шаг', kz: 'Алғашқы қадам' },
    description: { en: 'Complete your first lesson.', ru: 'Завершите свой первый урок.', kz: 'Алғашқы сабағыңызды аяқтаңыз.' },
    icon: 'Flag',
    requirement: (user: User) => user.completedLessons.length >= 1
  },
  {
    id: 'html-master',
    name: { en: 'HTML Master', ru: 'Мастер HTML', kz: 'HTML шебері' },
    description: { en: 'Complete all HTML lessons.', ru: 'Завершите все уроки HTML.', kz: 'HTML бойынша барлық сабақты аяқтаңыз.' },
    icon: 'Layout',
    requirement: (user: User) => user.completedLessons.filter(id => id.startsWith('html')).length >= 5
  },
  {
    id: 'xp-hunter',
    name: { en: 'XP Hunter', ru: 'Охотник за XP', kz: 'XP аулаушы' },
    description: { en: 'Reach 1000 XP.', ru: 'Наберите 1000 очков опыта.', kz: '1000 XP жинаңыз.' },
    icon: 'Zap',
    requirement: (user: User) => user.xp >= 1000
  },
  {
    id: 'high-level',
    name: { en: 'Senior Dev', ru: 'Сеньор', kz: 'Сеньор' },
    description: { en: 'Reach level 10.', ru: 'Достигните 10 уровня.', kz: '10-шы деңгейге жетіңіз.' },
    icon: 'Award',
    requirement: (user: User) => user.level >= 10
  }
];
