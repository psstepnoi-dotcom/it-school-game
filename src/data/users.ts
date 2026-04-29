import { User } from '../types';

export const initialUsers: User[] = [
  { id: 'st-1', username: 'asu_zhalgas', name: 'Асу Жалғас', role: 'student', password: '1234', xp: 28500, level: 53, streak: 18, lastLoginDate: new Date().toISOString(), achievements: ['a1', 'a2', 'a3'], avatarSeed: 'zhalgas', completedLessons: ['python-1', 'python-2'] },
  { id: 'st-2', username: 'aidyn_aiym', name: 'Айдынқызы Айым', role: 'student', password: '1234', xp: 26200, level: 51, streak: 12, lastLoginDate: new Date().toISOString(), achievements: ['a1', 'a2'], avatarSeed: 'aiym', completedLessons: ['html-1', 'html-2'] },
  { id: 'st-3', username: 'balnur_u', name: 'Асылтаева Балнұр Үсенқызы', role: 'student', password: '1234', xp: 24800, level: 49, streak: 30, lastLoginDate: new Date().toISOString(), achievements: ['a1', 'a3'], avatarSeed: 'balnur', completedLessons: ['csharp-1', 'python-1'] },
  { id: 'st-4', username: 'alikhan_e', name: 'Алибеков Алихан Ерланұлы', role: 'student', password: '1234', xp: 22500, level: 47, streak: 5, lastLoginDate: new Date().toISOString(), achievements: ['a1'], avatarSeed: 'alikhan', completedLessons: ['cisco-1'] },
  { id: 'st-5', username: 'marzhan_b', name: 'Бердали Маржан Бауыржанқызы', role: 'student', password: '1234', xp: 21200, level: 46, streak: 8, lastLoginDate: new Date().toISOString(), achievements: ['a2'], avatarSeed: 'marzhan', completedLessons: ['python-1'] },
  { id: 'st-6', username: 'adeliya_a', name: 'Жумагулова Аделия Айбековна', role: 'student', password: '1234', xp: 19100, level: 43, streak: 20, lastLoginDate: new Date().toISOString(), achievements: ['a1', 'a2'], avatarSeed: 'adeliya', completedLessons: ['html-1'] },
  { id: 'st-7', username: 'aruzhan_n', name: 'Кәрім Аружан Нұрланқызы', role: 'student', password: '1234', xp: 18200, level: 42, streak: 10, lastLoginDate: new Date().toISOString(), achievements: [], avatarSeed: 'aruzhan_n', completedLessons: [] },
  { id: 'st-8', username: 'nurbek_zh', name: 'Рымбек Нұрбек Жұлдызұлы', role: 'student', password: '1234', xp: 17500, level: 41, streak: 15, lastLoginDate: new Date().toISOString(), achievements: ['a1'], avatarSeed: 'nurbek', completedLessons: ['cisco-1'] },
  { id: 'st-9', username: 'aruzhan_b', name: 'Рысбек Аружан Бақытбекқызы', role: 'student', password: '1234', xp: 16800, level: 40, streak: 7, lastLoginDate: new Date().toISOString(), achievements: [], avatarSeed: 'aruzhan_b', completedLessons: [] },
  { id: 'st-10', username: 'erkebulan_t', name: 'Слямбеков Еркебұлан Тлеубекұлы', role: 'student', password: '1234', xp: 15900, level: 39, streak: 25, lastLoginDate: new Date().toISOString(), achievements: ['a1', 'a2'], avatarSeed: 'erkebulan', completedLessons: ['python-1', 'python-2'] },
  { id: 'st-11', username: 'askhat_s', name: 'Турысбеков Асхат Сакенович', role: 'student', password: '1234', xp: 14200, level: 37, streak: 6, lastLoginDate: new Date().toISOString(), achievements: [], avatarSeed: 'askhat', completedLessons: [] },
  { id: 'st-12', username: 'rakhim_k', name: 'Турдыбеков Рахим Куанышевич', role: 'student', password: '1234', xp: 13100, level: 36, streak: 14, lastLoginDate: new Date().toISOString(), achievements: [], avatarSeed: 'rakhim', completedLessons: [] },
  { id: 'st-13', username: 'farangiz_b', name: 'Эргешова Фарангиз Бегмурадовна', role: 'student', password: '1234', xp: 12500, level: 35, streak: 9, lastLoginDate: new Date().toISOString(), achievements: [], avatarSeed: 'farangiz', completedLessons: [] },
  {
    id: 'admin',
    username: 'admin',
    name: 'Kuanysh Shaimardanov',
    role: 'admin',
    password: 'admin123',
    xp: 99999,
    level: 100,
    streak: 99,
    lastLoginDate: new Date().toISOString(),
    achievements: ['a1', 'a2', 'a3', 'a4'],
    avatarSeed: 'admin-pro',
    completedLessons: []
  }
];
