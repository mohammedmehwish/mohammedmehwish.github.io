import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, CpuIcon } from 'lucide-react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING ROBOTICS CORE...");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next > 30 && next < 60) {
          setStatusText("LOADING EMBEDDED SUBSYSTEMS & SENSORS...");
        } else if (next >= 60 && next < 90) {
          setStatusText("COMPUTING VISION MODELS & SYSTEM MATRIX...");
        } else if (next >= 90) {
          setStatusText("MOHAMMED MEHWISH PORTFOLIO READY");
        }
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070b19] text-white select-none overflow-hidden"
        >
          {/* Tech Grid Overlay */}
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          {/* Glowing Animated Core */}
          <div className="relative mb-8 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="w-28 h-28 rounded-full stroke-cyber-cyan border-2 border-dashed border-cyber-cyan/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute w-20 h-20 rounded-full border border-cyber-blue/60 border-t-cyber-cyan"
            />
            <div className="absolute p-4 rounded-full bg-cyber-card/80 border border-cyber-cyan/30 shadow-glow-cyan">
              <Cpu className="w-8 h-8 text-cyber-cyan animate-pulse" />
            </div>
          </div>

          {/* Name Header */}
          <h1 className="text-2xl md:text-3xl font-bold font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-blue mb-2">
            MOHAMMED MEHWISH V M
          </h1>
          <p className="text-xs font-mono text-cyber-sky tracking-wider uppercase mb-8">
            Robotics & Mechatronics Engineering
          </p>

          {/* Progress Bar Container */}
          <div className="w-72 md:w-96 bg-cyber-card/80 p-1.5 rounded-full border border-cyber-cyan/20 shadow-glass">
            <div className="relative h-2.5 w-full bg-slate-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-blue via-cyber-sky to-cyber-cyan rounded-full shadow-glow-cyan"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Diagnostics Text */}
          <div className="mt-4 flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
            <span className="text-cyber-cyan font-semibold">{progress}%</span>
            <span className="text-slate-500">|</span>
            <span className="truncate max-w-[280px]">{statusText}</span>
          </div>

          {/* Corner HUD Markers */}
          <div className="absolute top-6 left-6 font-mono text-[10px] text-cyber-cyan/40">
            SYS_BOOT_VER_2.4.0 <br /> ARCH: MECHATRONICS_OS
          </div>
          <div className="absolute top-6 right-6 font-mono text-[10px] text-cyber-cyan/40 text-right">
            LATENCY: 0.2ms <br /> SECURE ENCLAVE OK
          </div>
          <div className="absolute bottom-6 left-6 font-mono text-[10px] text-slate-600">
            LOC: KERALA, INDIA
          </div>
          <div className="absolute bottom-6 right-6 font-mono text-[10px] text-slate-600">
            © 2026 MEHWISH
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
