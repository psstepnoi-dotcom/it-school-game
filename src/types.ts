
export type Language = 'en' | 'ru' | 'kz';
export type UserRole = 'student' | 'admin';

export interface Lesson {
  id: string;
  title: Record<Language, string>;
  theory: Record<Language, string>;
  task: Record<Language, string>;
  result: Record<Language, string>;
  example?: string;
  testQuestions?: Question[];
}

export interface Question {
  id: string;
  text: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  hint: Record<Language, string>;
}

export interface Game {
  type: 'cisco' | 'python' | 'html' | 'csharp';
  title: Record<Language, string>;
  description: Record<Language, string>;
}

export interface Course {
  id: string;
  name: Record<Language, string>;
  icon: string;
  color: string;
  lessons: Lesson[];
  questions: Question[];
  game: Game;
}

export interface UserProgress {
  userId: string;
  courseId: string;
  lessonId: string;
  completed: boolean;
  testScore: number;
  lastFeedback?: 'like' | 'dislike';
}

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  password?: string;
  xp: number;
  level: number;
  streak: number;
  lastLoginDate: string;
  achievements: string[];
  avatarSeed: string;
  completedLessons: string[];
  rank?: number; // Added for leaderboard
}

export interface Reward {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  cost: number;
  icon: string;
  type: 'badge' | 'physical' | 'experience';
}

export interface Achievement {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  requirement?: (user: User) => boolean;
}
