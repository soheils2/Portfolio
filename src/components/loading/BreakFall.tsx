import React from 'react';
import { motion } from 'framer-motion';

export function BreakFall() {
  const rows = 6;
  const cols = 10;
  const blocks = Array.from({ length: rows * cols });

  return (
    <div className="absolute inset-0 z-[110] grid grid-cols-10 grid-rows-6">
      {blocks.map((_, i) => (
        <motion.div
          key={i}
          className="bg-gray-900 dark:bg-white"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: '100vh', opacity: 0 }}
          transition={{
            delay: Math.random() * 0.5,
            duration: 0.8,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
