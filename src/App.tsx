import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { translations } from './translations';
import { courses } from './data/courses';
import { Language, User, Course, Lesson } from './types';
import { Logo } from './components/Logo';
import { GameSystem } from './components/Games';
import { Auth } from './components/Auth';
import { AdminPanel } from './components/AdminPanel';
import { ProfileView } from './components/ProfileView';
import { Leaderboard } from './components/Leaderboard';
import { RewardsStore } from './components/RewardsStore';
import { storage } from './lib/storage';

type View = 'home' | 'course' | 'profile' | 'leaderboard';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [lang, setLang] = useState<Language>('ru');
  const [view, setView] = useState<View>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [showTest, setShowTest] = useState(false);
  const [currentTestAnswers, setCurrentTestAnswers] = useState<number[]>([]);
  const [testError, setTestError] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showDailyReward, setShowDailyReward] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [leaderboardTab, setLeaderboardTab] = useState<'ranking' | 'rewards'>('ranking');

  const MOTIVATION_QUOTES = {
    en: ["Winners never quit, quitters never win.", "Code is your superpower.", "Every line of code is a step to greatness.", "The future is written in C# and Python."],
    ru: ["Победители не сдаются, сдавшиеся не побеждают.", "Код — твоя суперсила.", "Каждая строка кода — шаг к величию.", "Будущее пишется на C# и Python."],
    kz: ["Жеңімпаздар берілмейді, берілгендер жеңбейді.", "Код — сенің суперкүшің.", "Әрбір код жолы — ұлылыққа қадам.", "Болашақ C# және Python тілдерінде жазылады."]
  };

  const currentQuote = useMemo(() => {
    const q = MOTIVATION_QUOTES[lang];
    return q[Math.floor(Math.random() * q.length)];
  }, [lang]);

  const t = translations[lang];

  useEffect(() => {
    storage.init();
    const currentUser = storage.getCurrentUser();
    if (currentUser) setUser(currentUser);
    setLang(storage.getLang());
    
    // Daily reward check
    const lastReward = localStorage.getItem('last_reward_date');
    const today = new Date().toDateString();
    if (currentUser && lastReward !== today) {
      setShowDailyReward(true);
      localStorage.setItem('last_reward_date', today);
    }
  }, []);

  const completeLesson = (courseId: string, lessonId: string) => {
    if (!user) return;
    if (!user.completedLessons.includes(lessonId)) {
      const updatedUser = {
        ...user,
        xp: user.xp + 100,
        completedLessons: [...user.completedLessons, lessonId],
      };
      // Simple level calculation: lvl = floor(sqrt(xp/100)) + 1
      const newLevel = Math.floor(Math.sqrt(updatedUser.xp / 100)) + 1;
      if (newLevel > user.level) {
        setShowLevelUp(true);
      }
      updatedUser.level = newLevel;
      
      storage.updateUser(updatedUser);
      setUser(updatedUser);
    }
  };

  const handleLogout = () => {
    storage.setCurrentUser(null);
    setUser(null);
    setView('home');
  };

  const handleLangChange = (l: Language) => {
    setLang(l);
    storage.setLang(l);
  };

  if (!user) {
    return <Auth lang={lang} onLogin={(u) => setUser(u)} onLangChange={handleLangChange} />;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col font-sans selection:bg-neon-cyan selection:text-black">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-cyan/5 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>

      {/* HUD NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 h-16 md:h-20 flex items-center px-6 justify-between">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setView('home')}>
          <Logo className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:rotate-12" />
          <span className="hidden md:block font-black text-xl tracking-tighter text-white uppercase italic">{t.title}</span>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden md:flex gap-4 md:gap-6 mr-4 md:mr-6">
            <button onClick={() => setView('home')} className={`text-[10px] font-black uppercase tracking-widest transition-all ${view === 'home' ? 'text-neon-cyan' : 'text-white/40 hover:text-white'}`}>{t.courses}</button>
            <button onClick={() => setView('profile')} className={`text-[10px] font-black uppercase tracking-widest transition-all ${view === 'profile' ? 'text-neon-cyan' : 'text-white/40 hover:text-white'}`}>{t.profile}</button>
            <button onClick={() => setView('leaderboard')} className={`text-[10px] font-black uppercase tracking-widest transition-all ${view === 'leaderboard' ? 'text-neon-cyan' : 'text-white/40 hover:text-white'}`}>{t.leaderboard}</button>
          </div>

          {/* User Capsule */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black tracking-tighter text-neon-cyan leading-none">{user.name}</span>
              <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{user.xp} XP</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-blue-600 flex items-center justify-center font-black text-xs">
              {user.name.charAt(0)}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg">
              {(['en', 'ru', 'kz'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`px-2 py-1 rounded-md text-[10px] font-bold transition-all ${lang === l ? 'bg-white/10 text-neon-cyan' : 'text-white/40 hover:text-white'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            {user.role === 'admin' && (
              <button onClick={() => setShowAdmin(true)} className="p-2 hover:bg-white/10 rounded-xl transition-all text-yellow-400">
                <Icons.Shield size={20} />
              </button>
            )}
            <button onClick={handleLogout} className="p-2 hover:bg-white/10 rounded-xl transition-all text-red-400">
              <Icons.Power size={20} />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-24 md:pt-32 px-4 md:px-8 max-w-7xl mx-auto w-full pb-24 relative z-10">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {/* Hero */}
              <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-900/40 via-black to-purple-900/40 p-8 md:p-16 border border-white/10 shadow-2xl">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
                  <div className="absolute top-0 right-0 border-r-2 border-neon-cyan/20 h-full w-full skew-x-[-12deg]" />
                </div>
                
                <div className="relative z-10 max-w-2xl text-center md:text-left">
                  <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 leading-[0.9]">
                    {t.welcome.toUpperCase()}
                  </h1>
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl mb-6 inline-block">
                    <p className="text-neon-cyan text-[10px] font-black uppercase tracking-widest italic animate-pulse">
                      "{currentQuote}"
                    </p>
                  </div>
                  <p className="text-lg text-white/50 mb-8 font-medium leading-relaxed uppercase tracking-widest text-[10px]">
                    {t.subtitle} • {t.core}_SYSTEM_ONLINE
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <button 
                      onClick={() => {
                        const first = courses[0];
                        setSelectedCourse(first);
                        setView('course');
                      }}
                      className="px-8 py-4 bg-neon-cyan text-black font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_10px_30px_rgba(0,242,255,0.4)] hover:scale-105 transition-all flex items-center gap-3"
                    >
                      {t.continueJourney} <Icons.ArrowRight size={20} />
                    </button>
                    <button 
                      onClick={() => setView('leaderboard')}
                      className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all group"
                    >
                      <Icons.Trophy className="text-yellow-400 group-hover:scale-110 transition-transform" />
                      <span className="font-black text-[10px] tracking-widest uppercase">{t.hallOfFame}</span>
                    </button>
                    <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                      <Icons.Flame className="text-orange-400" />
                      <span className="font-black text-xl">{user.streak} <span className="text-[10px] text-white/30 tracking-widest">{t.days}</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Quest Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative p-8 rounded-[3rem] bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Icons.Target className="w-24 h-24 text-blue-500 group-hover:scale-110 transition-transform" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full text-blue-400 text-[10px] font-black tracking-widest uppercase">
                    <Icons.Zap size={12} /> {t.weeklyGoal}
                  </div>
                  <h3 className="text-2xl font-black italic">{t.dailyQuest}</h3>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-wider">{t.rewardText}</p>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[65%]" />
                  </div>
                  <p className="text-[10px] text-white/20 font-black italic tracking-widest">65%_COMPLETE_SYNC_REQUIRED</p>
                </div>
              </motion.div>

              {/* Courses Grid */}
              <div className="space-y-6">
                <h2 className="text-3xl font-black tracking-tighter uppercase italic">{t.courses}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {courses.map((course, idx) => {
                    const completedCount = user.completedLessons.filter(l => l.startsWith(course.id)).length;
                    const progress = (completedCount / course.lessons.length) * 100;
                    
                    return (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        key={course.id}
                        onClick={() => {
                          setSelectedCourse(course);
                          setView('course');
                        }}
                        className="group relative cursor-pointer"
                      >
                        <div className={`absolute -inset-1 bg-gradient-to-r ${course.color} rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500`} />
                        <div className="relative hud-panel p-8 bg-black border border-white/10 rounded-[2.5rem] h-full flex flex-col items-center text-center hover:border-white/20 transition-all border-b-4 hover:-translate-y-1">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 shadow-lg`}>
                             {/* @ts-ignore */}
                             {Icons[course.icon] ? React.createElement(Icons[course.icon], { size: 32, className: "text-white" }) : <Icons.Zap size={32} />}
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors uppercase tracking-tight">{course.name[lang]}</h3>
                          <div className="w-full h-1.5 bg-white/5 rounded-full mt-auto mb-4 overflow-hidden border border-white/5">
                            <div className={`h-full bg-gradient-to-r ${course.color}`} style={{ width: `${progress}%` }} />
                          </div>
                          <div className="flex justify-between w-full text-[10px] font-black tracking-widest text-white/30 uppercase italic">
                            <span>{completedCount}/{course.lessons.length} {t.levels}</span>
                            <span>{Math.round(progress)}%</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'course' && selectedCourse && (
            <motion.div 
              key="course"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8"
            >
              <div className="space-y-8">
                <header className="flex items-center gap-6 mb-12">
                  <button onClick={() => setView('home')} className="p-3 hover:bg-white/10 rounded-2xl transition-all border border-white/10">
                    <Icons.ArrowLeft size={24} />
                  </button>
                  <div>
                    <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic">{selectedCourse.name[lang]}</h2>
                    <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.2em]">Core Module Execution • Active</p>
                  </div>
                </header>

                {!selectedLesson ? (
                  <div className="hud-panel p-8 md:p-16 border border-white/10 bg-white/5 rounded-[3rem] text-center space-y-6">
                    <Icons.BrainCircuit size={64} className="text-neon-cyan animate-pulse mx-auto mb-6" />
                    <h3 className="text-4xl font-black text-white italic">{t.currentLesson}</h3>
                    <p className="text-white/40 max-w-md mx-auto uppercase text-[10px] tracking-widest leading-loose">
                      Select a module from the right panel to initialize decryption.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="hud-panel p-8 md:p-12 border border-white/10 bg-white/5 rounded-[3rem] space-y-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 blur-3xl rounded-full" />
                      <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10 relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">{t.module} {selectedLesson.id}</span>
                        <span className="text-xs font-black text-neon-cyan tracking-tighter">REWARD: +100 XP</span>
                      </div>
                      
                      <h2 className="text-4xl font-black tracking-tight leading-tight italic relative z-10">{selectedLesson.title[lang]}</h2>
                      
                      <div className="space-y-6 relative z-10">
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-neon-cyan">{t.theory}</h4>
                          <p className="text-xl text-white/60 leading-relaxed font-medium">
                            {selectedLesson.theory[lang]}
                          </p>
                        </div>
                        
                        {selectedLesson.example && (
                          <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-neon-cyan">{t.codeSandbox}</h4>
                            <pre className="bg-black/60 border border-white/10 p-8 rounded-2xl font-mono text-cyan-400 overflow-x-auto shadow-inner">
                              <code>{selectedLesson.example}</code>
                            </pre>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2 p-6 bg-white/5 border border-white/10 rounded-2xl">
                             <h4 className="text-[10px] font-black uppercase tracking-widest text-neon-cyan">{t.practicalTask}</h4>
                             <p className="text-sm text-white/60">{selectedLesson.task[lang]}</p>
                           </div>
                           <div className="space-y-2 p-6 bg-white/5 border border-white/10 rounded-2xl">
                             <h4 className="text-[10px] font-black uppercase tracking-widest text-neon-cyan">{t.expectedResult}</h4>
                             <p className="text-sm text-white/60">{selectedLesson.result[lang]}</p>
                           </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => {
                          if (selectedLesson.testQuestions && selectedLesson.testQuestions.length > 0) {
                            setShowTest(true);
                            setCurrentTestAnswers(new Array(selectedLesson.testQuestions.length).fill(-1));
                          } else {
                            completeLesson(selectedCourse.id, selectedLesson.id);
                          }
                        }}
                        disabled={user.completedLessons.includes(selectedLesson.id)}
                        className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-xl relative z-10 ${
                          user.completedLessons.includes(selectedLesson.id) 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-white text-black hover:bg-neon-cyan hover:scale-[1.02] active:scale-95'
                        }`}
                      >
                        {user.completedLessons.includes(selectedLesson.id) ? (
                          <> <Icons.CheckCircle2 size={24} /> {t.missionComplete} </>
                        ) : (
                          <> {t.validateKnowledge} <Icons.ChevronRight size={24} /> </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-8 bg-white/5 p-6 rounded-[2.5rem] border border-white/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{t.helpful}</span>
                      <div className="flex gap-4">
                        <button className="p-3 hover:bg-neon-cyan/20 rounded-xl transition-all border border-white/10 hover:border-neon-cyan/30 text-white/40 hover:text-neon-cyan"><Icons.ThumbsUp size={20} /></button>
                        <button className="p-3 hover:bg-red-500/20 rounded-xl transition-all border border-white/10 hover:border-red-500/30 text-white/40 hover:text-red-400"><Icons.ThumbsDown size={20} /></button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="hud-panel p-6 border border-white/10 bg-white/5 rounded-[2.5rem] flex flex-col h-[600px] md:h-[800px]">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-6 px-4 italic">{t.lessons}</h3>
                <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                  {selectedCourse.lessons.map((lesson, idx) => {
                    const isCompleted = user.completedLessons.includes(lesson.id);
                    const isSelected = selectedLesson?.id === lesson.id;
                    const isLocked = idx > 0 && !user.completedLessons.includes(selectedCourse.lessons[idx-1].id);

                    return (
                      <button 
                        key={lesson.id}
                        disabled={isLocked}
                        onClick={() => setSelectedLesson(lesson)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all relative overflow-hidden group ${
                          isSelected ? 'bg-neon-cyan/10 border-neon-cyan/40 scale-[1.02]' : 
                          isLocked ? 'opacity-30 border-white/5 grayscale' : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-4 relative z-10">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs min-w-[32px] ${
                            isCompleted ? 'bg-green-500 text-black' : isSelected ? 'bg-neon-cyan text-black' : 'bg-white/10 text-white/40'
                          }`}>
                            {isCompleted ? <Icons.Check size={14} /> : idx + 1}
                          </div>
                          <div className="flex flex-col flex-1 truncate">
                            <span className={`text-xs font-bold truncate leading-snug ${isSelected ? 'text-white' : 'text-white/60'}`}>{lesson.title[lang]}</span>
                            <span className="text-[8px] font-black uppercase tracking-widest mt-1 opacity-40 italic">UNIT_{idx + 1}_LOG</span>
                          </div>
                          {isLocked && <Icons.Lock size={12} className="text-white/20" />}
                        </div>
                        {isSelected && <div className="absolute top-0 right-0 w-16 h-full bg-neon-cyan/10 blur-[20px] pointer-events-none" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <ProfileView user={user} lang={lang} />
            </motion.div>
          )}
          
          {view === 'leaderboard' && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-8"
            >
              <div className="flex justify-center">
                <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 flex items-center gap-1">
                  <button 
                    onClick={() => setLeaderboardTab('ranking')}
                    className={`px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${leaderboardTab === 'ranking' ? 'bg-white text-black shadow-xl shadow-white/10' : 'text-white/40 hover:text-white'}`}
                  >
                    {t.hallOfFame}
                  </button>
                  <button 
                    onClick={() => setLeaderboardTab('rewards')}
                    className={`px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${leaderboardTab === 'rewards' ? 'bg-white text-black shadow-xl shadow-white/10' : 'text-white/40 hover:text-white'}`}
                  >
                    {t.prizesTitle}
                  </button>
                </div>
              </div>
              
              {leaderboardTab === 'ranking' ? (
                <Leaderboard language={lang} currentUser={user} onTabChange={setLeaderboardTab} />
              ) : (
                <RewardsStore language={lang} user={user} onTabChange={setLeaderboardTab} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* MOBILE NAV */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50 h-18 bg-[#020617]/90 backdrop-blur-3xl border border-white/10 rounded-[2rem] flex items-center justify-around px-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)]">
        {[
          { icon: <Icons.Home />, view: 'home' },
          { icon: <Icons.User />, view: 'profile' },
          { icon: <Icons.Trophy />, view: 'leaderboard' },
          { icon: <Icons.Grid />, view: 'home' }
        ].map((item, i) => (
          <button 
            key={i}
            onClick={() => setView(item.view as View)}
            className={`p-4 rounded-2xl transition-all ${view === item.view ? 'bg-neon-cyan text-black scale-110' : 'text-white/40 hover:text-white'}`}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {showAdmin && <AdminPanel lang={lang} onClose={() => setShowAdmin(false)} />}
      
      {/* Test Modal */}
      <AnimatePresence>
        {showTest && selectedLesson && selectedLesson.testQuestions && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-3xl p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }}
              className="hud-panel p-8 md:p-12 bg-white/5 border border-white/10 rounded-[3rem] max-w-2xl w-full my-auto"
            >
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
                <div>
                  <h2 className="text-2xl font-black italic tracking-tighter">{t.validateKnowledge}</h2>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Integrity Verification Required</p>
                </div>
                <button onClick={() => setShowTest(false)} className="p-2 hover:bg-white/10 rounded-full transition-all">
                  <Icons.X size={24} />
                </button>
              </div>

              <div className="space-y-8 mb-12">
                {selectedLesson.testQuestions.map((q, qIdx) => (
                  <div key={q.id} className="space-y-4">
                    <h3 className="text-lg font-bold flex gap-3">
                      <span className="text-neon-cyan/40">0{qIdx + 1}</span>
                      {q.text[lang]}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {q.options[lang].map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => {
                            const newAnswers = [...currentTestAnswers];
                            newAnswers[qIdx] = optIdx;
                            setCurrentTestAnswers(newAnswers);
                          }}
                          className={`p-4 rounded-xl border text-left transition-all text-sm font-bold ${
                            currentTestAnswers[qIdx] === optIdx 
                            ? 'bg-neon-cyan/20 border-neon-cyan/50 text-white' 
                            : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => {
                  const isCorrect = selectedLesson.testQuestions?.every((q, i) => currentTestAnswers[i] === q.correctIndex);
                  if (isCorrect) {
                     completeLesson(selectedCourse!.id, selectedLesson.id);
                     setShowTest(false);
                     setTestError(false);
                  } else {
                     setTestError(true);
                     setTimeout(() => setTestError(false), 3000);
                  }
                }}
                disabled={currentTestAnswers.some(a => a === -1)}
                className={`w-full py-5 font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,242,255,0.2)] disabled:opacity-30 disabled:grayscale mb-4 ${
                  testError ? 'bg-red-500 text-white' : 'bg-neon-cyan text-black'
                }`}
              >
                {currentTestAnswers.some(a => a === -1) ? t.selectAnswers : (testError ? t.testFailed : t.submitTest)}
              </button>
              
              {testError && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400 text-[10px] font-black uppercase tracking-widest animate-shake"
                >
                  SYSTEM_INTEGRITY_COMPROMISED • RE-EVALUATE_INPUT
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Daily Reward Modal */}
      <AnimatePresence>
        {showDailyReward && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-3xl p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }}
              className="hud-panel p-12 bg-white/5 border border-white/10 rounded-[4rem] text-center max-w-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400" />
              <Icons.Flame className="w-24 h-24 text-orange-400 mx-auto mb-8 animate-bounce drop-shadow-[0_0_20px_rgba(251,146,60,0.5)]" />
              <h2 className="text-4xl font-black mb-2 italic tracking-tighter text-white">STREAK_BONUS!</h2>
              <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.4em] mb-10">Day {user.streak} Protocol Engaged</p>
              <div className="text-6xl font-black text-neon-cyan mb-10 tracking-tighter">+200 XP</div>
              <button 
                onClick={() => {
                   storage.addXP(user.id, 200);
                   setShowDailyReward(false);
                }}
                className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                CLAIM_REWARD
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Level Up Modal */}
      <AnimatePresence>
        {showLevelUp && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4"
          >
            <motion.div 
              initial={{ scale: 0.5, rotate: -10 }} animate={{ scale: 1, rotate: 0 }}
              className="hud-panel p-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/20 rounded-[5rem] text-center max-w-sm relative overflow-hidden shadow-[0_0_100px_rgba(0,242,255,0.3)]"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-cyan animate-shimmer" />
              <Icons.Star className="w-24 h-24 text-yellow-400 mx-auto mb-8 animate-spin-slow drop-shadow-[0_0_30px_rgba(250,204,21,0.6)]" />
              <h2 className="text-5xl font-black mb-4 italic tracking-tighter text-white uppercase">{t.levelUp}</h2>
              <div className="text-8xl font-black text-neon-cyan mb-8 tracking-tighter">{user.level}</div>
              <p className="text-white/60 font-bold uppercase text-xs tracking-[0.2em] mb-12">{t.levelUpReward}</p>
              <button 
                onClick={() => setShowLevelUp(false)}
                className="w-full py-6 bg-neon-cyan text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,242,255,0.3)]"
              >
                CONTINUE_EVOLUTION
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-16 mt-auto border-t border-white/5 text-center text-white/10 text-[10px] font-black uppercase tracking-[0.6em] relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <div>&copy; {t.copyright}</div>
          <div className="text-neon-cyan/40 hover:text-neon-cyan transition-colors cursor-default tracking-[0.8em]">{t.creator}</div>
          <div className="opacity-10 select-none">ARCHITECTURE_ALPHA_V26 • AS_STUDIO_GENESIS</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
