import React from 'react';
import { motion } from 'framer-motion';

export function CurtainReveal() {
  const sections = Array.from({ length: 5 });

  return (
    <div className="absolute inset-0 z-[110] flex flex-col">
      {sections.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={{ y: '100%' }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
          className="flex-1 bg-black"
        />
      ))}
    </div>
  );
}
