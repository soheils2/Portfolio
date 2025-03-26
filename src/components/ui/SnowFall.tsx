import React, { useEffect, useState } from "react";

export function SnowFall() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const element = document.elementFromPoint(
        e.clientX,
        e.clientY
      ) as HTMLElement | null;
      if (element) {
        const computedCursor = getComputedStyle(element).cursor;
        // Hide custom cursor if hovering over an element with its own cursor style
        if (
          computedCursor &&
          computedCursor !== "auto" &&
          computedCursor !== "default" &&
          computedCursor !== "none"
        ) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.body.classList.add("cursor-none");

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  if (isTouchDevice || !visible) return null;

  return (
    <>
      {/* Outer Ring */}
      <div className="fixed w-full inset-0 overflow-hidden pointer-events-none z-5">
        {Array.from({ length: 120 }).map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 60}vh`; // Random vertical start position
          const delay = `${Math.random() * 10}s`;
          const duration = `${8 + Math.random() * 50}s`; // Slower fall
          const sizex = 1 + Math.random() * 3; // Random size between 1 to 5
          const sizey = 1 + Math.random() * 4; // Random size between 1 to 5

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
    </>
  );
}
