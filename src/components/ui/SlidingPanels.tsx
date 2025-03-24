// components/ui/SlidingPanels.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function SlidingPanels({ trigger }: { trigger: boolean }) {
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (trigger) {
      setStart(true);
    }
  }, [trigger]);

  const panels = Array.from({ length: 7 });

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[90] flex">
      {panels.map((_, index) => (
        <motion.div
          key={index}
          initial={{ y: "-100%" }}
          animate={start ? { y: "0%" } : {}}
          transition={{
            delay: index * 0.2 + 0.2,
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="h-screen w-1/7 bg-black"
        />
      ))}
    </div>
  );
}

