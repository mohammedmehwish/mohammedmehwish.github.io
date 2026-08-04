import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Hide cursor on touch/mobile devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyber-cyan rounded-full pointer-events-none z-50 shadow-glow-cyan"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Outer reticle ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyber-cyan/50 rounded-full pointer-events-none z-50 flex items-center justify-center"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? '#00f0ff' : 'rgba(0, 240, 255, 0.4)',
          rotate: isHovered ? 90 : 0
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {/* Reticle ticks */}
        <div className="absolute w-1.5 h-[1px] bg-cyber-cyan top-0 left-1/2 -translate-x-1/2" />
        <div className="absolute w-1.5 h-[1px] bg-cyber-cyan bottom-0 left-1/2 -translate-x-1/2" />
        <div className="absolute h-1.5 w-[1px] bg-cyber-cyan left-0 top-1/2 -translate-y-1/2" />
        <div className="absolute h-1.5 w-[1px] bg-cyber-cyan right-0 top-1/2 -translate-y-1/2" />
      </motion.div>
    </>
  );
};
