import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CODE_SNIPPETS = [
  "const ship = () => deploy();",
  "git push origin main",
  "npm run build && npm run ship",
  "type Safety = TypeScript;",
  "useEffect(() => hustle(), []);",
  "while(awake) { code(); }",
  "sudo rm -rf doubts/",
  "export default Passion;",
  "async function dream() { await build(); }",
  "// TODO: sleep",
  "if (!bug) return celebrate();",
  "const life = { code, coffee, repeat };",
  "<Component isAwesome />",
  "yield* grind();",
  "Promise.all([learn, build, ship]);",
  "// @ts-ignore sleep",
  "console.log('shipped 🚀');",
  "docker compose up -d dreams",
  "try { breakThings(); } finally { fix(); }",
  "new Array(365).fill('code');",
  "interface Life { code: true }",
  "return <Ship fast />;",
  "Object.freeze(determination);",
  "!sleep && code();",
];

export function EasterEgg() {
  const [active, setActive] = useState(false);
  const [triggerCount, setTriggerCount] = useState(0);
  const inputRef = useRef("");
  const clearRef = useRef<ReturnType<typeof setTimeout>>();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Trigger: type "sudo" anywhere
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key.length !== 1) return;
    inputRef.current += e.key.toLowerCase();
    if (inputRef.current.length > 10) {
      inputRef.current = inputRef.current.slice(-10);
    }
    if (inputRef.current.includes("sudo")) {
      setActive(true);
      setTriggerCount((c) => c + 1);
      inputRef.current = "";
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setActive(false), 5000);
    }
    // Reset buffer after 2s of no typing
    if (clearRef.current) clearTimeout(clearRef.current);
    clearRef.current = setTimeout(() => { inputRef.current = ""; }, 2000);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      if (clearRef.current) clearTimeout(clearRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [handleKey]);

  // Name triple-click trigger
  useEffect(() => {
    const handleTripleClick = (e: MouseEvent) => {
      if (e.detail >= 3) {
        const target = e.target as HTMLElement;
        if (target.closest("h1")) {
          setActive(true);
          setTriggerCount((c) => c + 1);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setActive(false), 5000);
        }
      }
    };
    window.addEventListener("click", handleTripleClick);
    return () => window.removeEventListener("click", handleTripleClick);
  }, []);

  // Console easter egg
  useEffect(() => {
    const styles = [
      "color: #3b82f6; font-size: 16px; font-weight: bold;",
      "color: #a78bfa; font-size: 12px;",
      "color: #22c55e; font-size: 11px; font-family: monospace;",
    ];
    console.log(
      "%c👋 Hey, you found the console.\n%cThat makes you my kind of person.\n%c> Try typing 'sudo' on the page, or triple-click the name.",
      styles[0], styles[1], styles[2]
    );
  }, []);

  // Generate randomized snippets each trigger
  const snippets = active
    ? Array.from({ length: 35 }, (_, i) => ({
        id: `${triggerCount}-${i}`,
        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        x: Math.random() * 95,
        delay: Math.random() * 1.5,
        duration: 2.5 + Math.random() * 3,
        size: 10 + Math.random() * 4,
      }))
    : [];

  const messages = [
    "I code like I live — with a little madness.",
    "sudo make me a sandwich",
    "There's no place like 127.0.0.1",
    "Works on my machine ™",
    "It's not a bug, it's a feature.",
  ];

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] pointer-events-none overflow-hidden"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/85" />

          {/* Center message */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 250, damping: 20 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center z-10 px-8">
              <motion.p
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {triggerCount <= 1 ? "You found it." : `#${triggerCount} 🔥`}
              </motion.p>
              <p className="text-sm sm:text-base text-zinc-400 font-mono">
                {messages[(triggerCount - 1) % messages.length]}
              </p>
            </div>
          </motion.div>

          {/* Falling code rain */}
          {snippets.map((snippet) => (
            <motion.div
              key={snippet.id}
              initial={{ y: "-5%", opacity: 0 }}
              animate={{ y: "110vh", opacity: [0, 0.7, 0.7, 0] }}
              transition={{
                duration: snippet.duration,
                delay: snippet.delay,
                ease: "linear",
              }}
              className="absolute font-mono text-green-400/50 whitespace-nowrap"
              style={{
                left: `${snippet.x}%`,
                fontSize: `${snippet.size}px`,
              }}
            >
              {snippet.text}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
