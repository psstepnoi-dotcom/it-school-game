
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { Language, Course } from '../types';
import { translations } from '../translations';

interface GameProps {
  course: Course;
  lang: Language;
  onFinish: (xp: number) => void;
  onClose: () => void;
}

export const GameSystem: React.FC<GameProps> = ({ course, lang, onFinish, onClose }) => {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(false);
  const t = translations[lang];

  const triggerFinish = () => {
    setCompleted(true);
    onFinish(150);
  };

  const triggerError = () => {
    setError(true);
    setTimeout(() => setError(false), 500);
  };

  // Cisco: Network Builder
  const CiscoGame = () => {
    const [connections, setConnections] = useState<string[]>([]);
    const targetOrder = ['Modem', 'Router', 'Switch', 'PC'];

    const addDevice = (device: string) => {
      if (device === targetOrder[connections.length]) {
        const newConnections = [...connections, device];
        setConnections(newConnections);
        if (newConnections.length === targetOrder.length) triggerFinish();
      } else {
        triggerError();
      }
    };

    return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex gap-4 items-center min-h-[120px] p-6 bg-black/40 rounded-3xl border border-white/10 w-full justify-center">
        {connections.map((d, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-neon-cyan flex items-center justify-center text-[#050510] border-2 border-white shadow-[0_0_15px_#00f2ff]">
                <Icons.Network size={28} />
              </div>
              <span className="text-[10px] uppercase font-black mt-2 text-neon-cyan tracking-widest">{t[d.toLowerCase()] || d}</span>
            </div>
            {i < targetOrder.length - 1 && <div className="h-1 w-8 bg-neon-cyan/50 shadow-[0_0_10px_#00f2ff55]" />}
          </React.Fragment>
        ))}
        {Array.from({ length: targetOrder.length - connections.length }).map((_, i) => (
           <React.Fragment key={i}>
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-dashed border-white/20" />
              {i < targetOrder.length - connections.length - 1 && <div className="h-1 w-8 bg-white/5" />}
           </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {targetOrder.sort(() => Math.random() - 0.5).map(device => (
          <button
            key={device}
            disabled={connections.includes(device)}
            onClick={() => addDevice(device)}
            className={`p-4 rounded-xl border font-black uppercase tracking-widest text-[10px] transition-all ${connections.includes(device) ? 'opacity-10 grayscale border-white/5' : 'border-white/10 hover:border-neon-cyan bg-white/5 hover:bg-neon-cyan/10 text-white'}`}
          >
            {t[device.toLowerCase()] || device}
          </button>
        ))}
      </div>
    </div>
    );
  };

  // Python: Code Puzzle
  const PythonGame = () => {
    const [code, setCode] = useState(['print(', ' "Hello" ', ')']);
    const [shuffled, setShuffled] = useState<string[]>([]);
    
    useEffect(() => {
      setShuffled([' "Hello" ', ')', 'print(']);
    }, []);

    const [current, setCurrent] = useState<string[]>([]);

    const addPart = (part: string) => {
      const nextIdx = current.length;
      if (part === code[nextIdx]) {
        const newCurrent = [...current, part];
        setCurrent(newCurrent);
        if (newCurrent.length === code.length) triggerFinish();
      } else {
        triggerError();
      }
    };

    return (
      <div className="flex flex-col items-center gap-8">
        <div className="w-full bg-[#0a0a14] rounded-2xl p-8 font-mono text-xl text-neon-purple border border-white/10 min-h-[100px] shadow-[inset_0_0_20px_rgba(188,19,254,0.1)]">
          {current.map((p, i) => <span key={i} className="bg-neon-purple/20 px-1 rounded shadow-[0_0_10px_rgba(188,19,254,0.3)]">{p}</span>)}
        </div>
        
        <div className="flex gap-4">
          {shuffled.map((part, i) => (
            <button
              key={i}
              disabled={current.includes(part)}
              onClick={() => addPart(part)}
              className={`px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-mono font-black hover:border-neon-purple hover:bg-neon-purple/10 transition-all ${current.includes(part) ? 'opacity-10 grayscale' : 'text-white'}`}
            >
              {part}
            </button>
          ))}
        </div>
      </div>
    );
  };

    // HTML: Tag Matcher
    const HtmlGame = () => {
      const challenges = [
        { tag: '<h1>', desc: t.mainHeading },
        { tag: '<img>', desc: t.displayImage },
        { tag: '<p>', desc: t.textParagraph }
      ];
      const [currentChallenge, setCurrentChallenge] = useState(0);

      const check = (tag: string) => {
        if (tag === challenges[currentChallenge].tag) {
          if (currentChallenge < challenges.length - 1) {
            setCurrentChallenge(currentChallenge + 1);
          } else {
            triggerFinish();
          }
        } else {
          triggerError();
        }
      };

      return (
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] mb-2 font-black">{t.findLogicalSegment}</p>
            <h4 className="text-4xl font-black text-[#ff9f43] tracking-tighter drop-shadow-[0_0_15px_rgba(255,159,67,0.4)]">{challenges[currentChallenge].desc}</h4>
          </div>

          <div className="grid grid-cols-2 gap-4">
          {['<p>', '<h1>', '<img>', '<div>', '<a>', '<ul>'].map(tag => (
            <button
              key={tag}
              onClick={() => check(tag)}
              className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 font-black hover:bg-[#ff9f43]/20 hover:border-[#ff9f43] transition-all text-xl text-white tracking-widest shadow-xl"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // C#: Output Master
  const CSharpGame = () => {
    const code = 'int x = 5;\nint y = 2;\nConsole.WriteLine(x + y);';
    const [input, setInput] = useState('');

    const check = () => {
      if (input.trim() === '7') triggerFinish();
      else triggerError();
    };

    return (
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="w-full bg-[#0a0a14] rounded-2xl p-8 border border-white/10 font-mono text-xl text-[#44bd32] shadow-[inset_0_0_20px_rgba(68,189,50,0.1)]">
          <pre className="leading-relaxed">{code}</pre>
        </div>
        
        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <label className="text-[10px] uppercase tracking-widest text-white/30 font-black mb-1">{t.predictOutput}</label>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-white/5 border-2 border-white/10 rounded-2xl p-5 text-center text-3xl font-black focus:border-[#44bd32] outline-none transition-all text-white placeholder:opacity-10"
            placeholder="0"
          />
          <button 
            onClick={check}
            className="w-full py-5 bg-[#44bd32] text-[#050510] font-black rounded-2xl hover:brightness-110 transition-all uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(68,189,50,0.3)]"
          >
            {t.executeRuntime}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`transition-all duration-300 ${error ? 'translate-x-2' : ''}`}>
      {completed ? (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <div className="w-28 h-28 rounded-2xl bg-neon-cyan flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(0,242,255,0.4)] border-4 border-white rotate-12">
            <Icons.Zap className="text-[#050510] fill-[#050510]" size={56} />
          </div>
          <h4 className="text-5xl font-black mb-4 tracking-tighter">{t.dataSynced}</h4>
          <p className="text-neon-cyan mb-10 font-black tracking-[0.2em] uppercase text-xs">{t.missionIntegrity} • +150 {t.xp}</p>
          <button 
            onClick={onClose}
            className="px-16 py-5 bg-white text-[#050510] font-black rounded-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm shadow-xl"
          >
            {t.returnToCore}
          </button>
        </motion.div>
      ) : (
        <>
          {course.id === 'cisco' && <CiscoGame />}
          {course.id === 'python' && <PythonGame />}
          {course.id === 'html' && <HtmlGame />}
          {course.id === 'csharp' && <CSharpGame />}
        </>
      )}
    </div>
  );
};
