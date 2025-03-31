import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const text = "SOHEIL ASAMI";

// Define variants for the background panels
const panelVariants = {
  static: {
    y: 0,
    opacity: 1,
  },
  exit: (i: number) => ({
    y: "100%",
    opacity: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

export function HandwritingAnimation({ onComplete }: { onComplete: () => void }) {
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartExit(true);
      setTimeout(() =>{ onComplete(); }, 1500); // Allow time for exit animations to complete
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Background Panels – rendered instantly with no initial animation */}
      <div className="absolute inset-0 flex z-[90]">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            custom={index}
            // Disable any initial animation by setting initial={false}
            initial={false}
            animate={startExit ? "exit" : "static"}
            variants={panelVariants}
            className="h-full w-1/10 dark:bg-white bg-gray-900  "
          />
        ))}
      </div>

      {/* Handwriting Text */}
      <div className="relative z-[100] text-white dark:text-gray-900 text-[10vw] font-exo2 font-bold tracking-[-0.02em] leading-none flex overflow-hidden">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 180, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={
              startExit
                ? {
                    y: 1000,
                    rotate: 5,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: "easeInOut",
                    },
                  }
                : {}
            }
            transition={{
              duration: 0.35,
              delay: index * 0.04,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
