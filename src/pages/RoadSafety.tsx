import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, ShieldCheck, Car, Footprints, ZoomIn, X, Download } from 'lucide-react';
// @ts-ignore
import roadSafetyMap from '../assets/images/road_safety_map_1779362470597.png';

export function RoadSafety() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = roadSafetyMap;
    link.download = `road-safety-map.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 animate-fade-in"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-950 mb-4 tracking-tight">Жол қауіпсіздігі</h1>
        <p className="text-lg text-slate-600 font-medium">Колледж аумағындағы және оның маңындағы қауіпсіз қозғалыс ережелері мен маршруттары.</p>
      </div>

      {/* High-Fidelity Exact 1:1 Map Showcase */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 p-4 max-w-5xl mx-auto">
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden group">
          <img 
            src={roadSafetyMap} 
            alt="Жол қауіпсіздігі схемасы" 
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain max-h-[600px] mx-auto block"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
            <button 
              onClick={() => setIsZoomed(true)}
              className="bg-white text-slate-950 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-all font-bold text-sm shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" />
              Үлкейтіп көру
            </button>
            <button 
              onClick={handleDownload}
              className="bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition-all font-bold text-sm shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Картаны жүктеу
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between items-center px-2 gap-4">
          <p className="text-xs text-slate-500 font-medium max-w-md">
            * Картада Қабанбай батыр көшесі мен Қаным Мұхамедханов даңғылы қиылысы, жаяу жүргінші өткелдері мен тұрақтар көрсетілген.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setIsZoomed(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              Үлкейту
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Жүктеу
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isZoomed && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92vh]"
            >
              <div className="p-6 bg-slate-950 text-white flex justify-between items-center border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 animate-pulse" />
                  <div>
                    <h3 className="text-xl font-bold">Жол қауіпсіздігі схемасы</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Түпнұсқа схема (PNG)</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsZoomed(false)}
                  className="p-2 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6 text-slate-300 hover:text-white" />
                </button>
              </div>

              <div className="overflow-auto p-6 bg-slate-955 flex justify-center items-center min-h-[450px]">
                <img
                  src={roadSafetyMap}
                  alt="Жол қауіпсіздігі схемасы үлкейтілген"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[72vh] object-contain mx-auto rounded-lg"
                />
              </div>

              <div className="p-6 bg-white border-t border-slate-100 flex justify-between items-center sm:flex-row flex-col gap-4 shrink-0">
                <p className="text-sm text-slate-600 max-w-xl">
                  Қауіпсіздік ережелеріне сәйкес, жол қозғалысы белгілері мен ұсынылған қауіпсіз бағыттарды қатаң сақтаңыз.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Картаны жүктеу
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Rules Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <Footprints className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Жаяу жүргіншілерге</h3>
          </div>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Жолды тек белгіленген өткелдерден (зебра) өтіңіз.</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Жолдан өтерде телефонға қарамаңыз және құлаққапты шешіңіз.</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Көліктердің толық тоқтағанына көз жеткізіңіз.</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span>Қараңғы уақытта жарық шағылыстыратын элементтерді тағыңыз.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Көлік жүргізушілеріне</h3>
          </div>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Колледж аумағында жылдамдықты 20 км/сағ асырмаңыз.</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Көлікті тек рұқсат етілген тұрақтарға қойыңыз.</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>Жаяу жүргіншілерге әрқашан жол беріңіз.</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span>Эвакуациялық шығу жолдарын жаппаңыз.</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
