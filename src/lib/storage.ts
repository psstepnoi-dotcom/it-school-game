import { User, UserProgress, Language } from '../types';
import { initialUsers } from '../data/users';

const KEYS = {
  USERS: 'it_school_users',
  CURRENT_USER: 'it_school_current_user',
  PROGRESS: 'it_school_progress',
  LANG: 'it_school_lang'
};

export const storage = {
  init: () => {
    const stored = localStorage.getItem(KEYS.USERS);
    if (!stored) {
      localStorage.setItem(KEYS.USERS, JSON.stringify(initialUsers));
    } else {
      // Sync logic: add new users from initialUsers if they don't exist
      const users = JSON.parse(stored) as User[];
      let changed = false;
      initialUsers.forEach(u => {
        if (!users.find(existing => existing.id === u.id)) {
          users.push(u);
          changed = true;
        }
      });
      if (changed) {
        localStorage.setItem(KEYS.USERS, JSON.stringify(users));
      }
    }
  },

  getUsers: (): User[] => {
    return JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
  },

  saveUsers: (users: User[]) => {
    localStorage.setItem(KEYS.USERS, JSON.stringify(users));
  },

  updateUser: (updatedUser: User) => {
    const users = storage.getUsers();
    const index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      storage.saveUsers(users);
      // Also update current user if it's the same
      const current = storage.getCurrentUser();
      if (current && current.id === updatedUser.id) {
        storage.setCurrentUser(updatedUser);
      }
    }
  },

  getCurrentUser: (): User | null => {
    return JSON.parse(localStorage.getItem(KEYS.CURRENT_USER) || 'null');
  },

  setCurrentUser: (user: User | null) => {
    localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user));
  },

  getLang: (): Language => {
    return (localStorage.getItem(KEYS.LANG) as Language) || 'ru';
  },

  setLang: (lang: Language) => {
    localStorage.setItem(KEYS.LANG, lang);
  },

  resetAll: () => {
    localStorage.clear();
    storage.init();
  },

  addXP: (userId: string, amount: number) => {
    const users = storage.getUsers();
    const user = users.find(u => u.id === userId);
    if (user) {
      user.xp += amount;
      // Simple level calculation: lvl = floor(sqrt(xp/100)) + 1
      user.level = Math.floor(Math.sqrt(user.xp / 100)) + 1;
      storage.updateUser(user);
    }
  }
};
