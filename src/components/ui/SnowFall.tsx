import React, { useEffect, useState } from "react";

export function SnowFall() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // if (isTouchDevice) return null;

  return (
    <div className="fixed w-full inset-0 overflow-hidden pointer-events-none z-10">
      {Array.from({ length: isTouchDevice ? 50 : 120 }).map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 60}vh`;
        const delay = `${Math.random() * 10}s`;
        const duration = `${8 + Math.random() * 50}s`;
        const sizex = 1 + Math.random() * 3;
        const sizey = 1 + Math.random() * 4;

        return (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-blue-600 dark:bg-white opacity-0 rounded-full animate-star-fall filter blur-[1px] brightness-125"
            style={{
              left,
              top,
              animationDelay: delay,
              animationDuration: duration,
              width: `${sizex}px`,
              height: `${sizey}px`,
            }}
          />
        );
      })}
    </div>
  );
}
