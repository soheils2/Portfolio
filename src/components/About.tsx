import { useRef, useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2, X } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { personalInfo } from "../data/portfolio";
import { useTerminal } from "../context/TerminalContext";
import type { Line } from "../context/TerminalContext";

const signals = [
  {
    title: "Zero to Production",
    desc: "Give me a blank repo and a deadline. I'll ship a tested, deployed product.",
    accent: "blue" as const,
  },
  {
    title: "Async & Self-Directed",
    desc: "I don't need hand-holding. Clear PRs, documented decisions, I unblock myself.",
    accent: "violet" as const,
  },
  {
    title: "Systems Thinker",
    desc: "I build architectures that prevent bugs, not just patch them after the fact.",
    accent: "emerald" as const,
  },
  {
    title: "Cross-Platform Fluent",
    desc: "Web, mobile, AR, VR. Same quality bar, same TypeScript-first approach.",
    accent: "amber" as const,
  },
];

const accentMap = {
  blue: { dot: "bg-blue-500", border: "border-blue-500/15", bg: "from-blue-500/8 to-blue-500/[0.02]" },
  violet: { dot: "bg-violet-500", border: "border-violet-500/15", bg: "from-violet-500/8 to-violet-500/[0.02]" },
  emerald: { dot: "bg-emerald-500", border: "border-emerald-500/15", bg: "from-emerald-500/8 to-emerald-500/[0.02]" },
  amber: { dot: "bg-amber-500", border: "border-amber-500/15", bg: "from-amber-500/8 to-amber-500/[0.02]" },
};

/* ─── Shared Terminal Lines Renderer ─── */
function TerminalLines({ lines, fontSize = "text-[11px]", variant = "dark" }: { lines: Line[]; fontSize?: string; variant?: "dark" | "fullscreen" }) {
  // Always dark theme styling since terminal is always dark
  const inputColor = "text-emerald-100";
  const outputColor = variant === "fullscreen" ? "text-zinc-400" : "text-zinc-400";
  const systemColor = "text-cyan-400/70";

  return (
    <>
      {lines.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap break-words">
          {line.type === "input" && (
            <p>
              <span className="text-emerald-500">❯</span>{" "}
              <span className={inputColor}>{line.text}</span>
            </p>
          )}
          {line.type === "output" && (
            <p className={`${outputColor} pl-3 ${fontSize}`}>{line.text}</p>
          )}
          {line.type === "system" && (
            <p className={`${systemColor} ${fontSize}`}>{line.text}</p>
          )}
        </div>
      ))}
    </>
  );
}

/* ─── Inline Terminal Card (in About grid) ─── */
function TerminalCard() {
  const terminal = useTerminal();
  const cardRef = useRef<HTMLDivElement>(null);
  const localInputRef = useRef<HTMLInputElement>(null);
  const localScrollRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (localScrollRef.current) {
      localScrollRef.current.scrollTop = localScrollRef.current.scrollHeight;
    }
  }, [terminal.lines]);

  // Placeholder when fullscreen
  if (terminal.isFullscreen) {
    return (
      <FadeIn delay={0.15} className="lg:col-span-5 flex flex-col">
        <div className="relative flex-1 flex flex-col rounded-2xl border border-emerald-500/20 bg-[#0d1117] overflow-hidden max-h-[480px] min-h-[320px] items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-emerald-500/30 animate-pulse mb-3" />
          <p className="text-xs text-emerald-500/50 font-mono">
            terminal running in fullscreen
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={0.15} className="lg:col-span-5 flex flex-col">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => { setIsHovering(false); setMousePos({ x: 50, y: 50 }); }}
        onClick={() => localInputRef.current?.focus()}
        className="relative flex-1 flex flex-col rounded-2xl border overflow-hidden cursor-text max-h-[480px] min-h-[320px]"
        style={{
          background: "#0d1117",
          borderColor: isHovering ? "rgba(16,185,129,0.3)" : "rgba(16,185,129,0.12)",
          boxShadow: isHovering
            ? "0 0 40px -10px rgba(16,185,129,0.2), 0 8px 40px -10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(16,185,129,0.06)"
            : "0 0 20px -10px rgba(16,185,129,0.08), 0 4px 30px -8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(16,185,129,0.04)",
          transition: "border-color 0.4s ease, box-shadow 0.5s ease",
        }}
      >
        {/* Mouse-reactive green glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(16,185,129,0.06), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Subtle scanline texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16,185,129,0.15) 2px, rgba(16,185,129,0.15) 4px)",
          }}
          aria-hidden="true"
        />

        {/* Title bar */}
        <div className="relative flex items-center gap-2 px-4 py-2.5 border-b border-emerald-500/10 bg-[#0a0e14] flex-shrink-0">
          <div className="flex gap-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); }}
              className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all"
              aria-label="Close"
            />
            <button
              onClick={(e) => { e.stopPropagation(); }}
              className="w-2.5 h-2.5 rounded-full bg-[#febc2e] hover:brightness-110 transition-all"
              aria-label="Minimize"
            />
            <button
              onClick={(e) => { e.stopPropagation(); terminal.setFullscreen(true); }}
              className="w-2.5 h-2.5 rounded-full bg-[#28c840] hover:brightness-110 transition-all cursor-pointer relative group"
              aria-label="Expand terminal to fullscreen"
            >
              <Maximize2 className="w-1.5 h-1.5 absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity text-green-900" />
            </button>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); terminal.setFullscreen(true); }}
            className="flex-1 text-center text-[10px] font-medium text-zinc-500 font-mono hover:text-emerald-400 transition-colors cursor-pointer"
            aria-label="Expand terminal"
          >
            soheil@portfolio <span className="text-emerald-500/40">~</span> <span className="text-zinc-600">%</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); terminal.setFullscreen(true); }}
            className="p-1 rounded hover:bg-emerald-500/10 transition-colors text-zinc-600 hover:text-emerald-400"
            aria-label="Fullscreen"
          >
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>

        {/* Terminal body */}
        <div
          ref={localScrollRef}
          className="flex-1 overflow-y-auto p-4 font-mono text-[11px] leading-relaxed space-y-0.5 min-h-0 scrollbar-hide"
          style={{ userSelect: "text", WebkitUserSelect: "text" }}
        >
          <TerminalLines lines={terminal.lines} />

          {/* Active input line */}
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`flex-shrink-0 ${terminal.connectStep !== "idle" ? "text-amber-500" : "text-emerald-500"}`}>❯</span>
            <input
              ref={localInputRef}
              type="text"
              value={terminal.input}
              onChange={(e) => terminal.setInput(e.target.value)}
              onKeyDown={terminal.handleKeyDown}
              className={`flex-1 bg-transparent outline-none text-[16px] sm:text-[11px] font-mono placeholder:text-zinc-700 ${terminal.connectStep !== "idle" ? "text-amber-100 caret-amber-400" : "text-emerald-100 caret-emerald-400"}`}
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="Terminal input"
              placeholder={terminal.connectStep === "idle" ? "type help..." : ""}
            />
          </div>
        </div>

        {/* Bottom bar - status */}
        <div className="flex-shrink-0 px-4 py-1.5 border-t border-emerald-500/8 bg-[#0a0e14] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${terminal.connectStep !== "idle" ? "bg-amber-400" : "bg-emerald-400"}`} />
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${terminal.connectStep !== "idle" ? "bg-amber-500" : "bg-emerald-500"}`} />
            </span>
            <span className={`text-[9px] font-mono uppercase tracking-wider ${terminal.connectStep !== "idle" ? "text-amber-500/60" : "text-emerald-500/50"}`}>
              {terminal.connectStep !== "idle" ? "connect flow" : "interactive"}
            </span>
          </div>
          <span className="text-[9px] font-mono text-zinc-700">
            {terminal.connectStep !== "idle" ? "type cancel to exit" : "click to expand"}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

/* ─── Fullscreen Terminal Overlay ─── */
function TerminalFullscreen() {
  const terminal = useTerminal();
  const fullscreenInputRef = useRef<HTMLInputElement>(null);
  const fullscreenScrollRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when fullscreen opens
  useEffect(() => {
    if (terminal.isFullscreen) {
      // Small delay to let animation start
      const t = setTimeout(() => fullscreenInputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [terminal.isFullscreen]);

  // Auto-scroll
  useEffect(() => {
    if (fullscreenScrollRef.current) {
      fullscreenScrollRef.current.scrollTop = fullscreenScrollRef.current.scrollHeight;
    }
  }, [terminal.lines, terminal.isFullscreen]);

  // Lock body scroll when fullscreen
  useEffect(() => {
    if (terminal.isFullscreen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [terminal.isFullscreen]);

  return (
    <AnimatePresence>
      {terminal.isFullscreen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => terminal.setFullscreen(false)}
          />

          {/* Terminal window */}
          <motion.div
            className="relative w-[95vw] h-[90vh] sm:w-[90vw] sm:h-[85vh] max-w-[1200px] max-h-[800px] flex flex-col rounded-2xl border border-emerald-500/20 overflow-hidden"
            initial={{ scale: 0.4, opacity: 0, y: 80, borderRadius: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0, borderRadius: 16 }}
            exit={{ scale: 0.4, opacity: 0, y: 80, borderRadius: 24 }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 300,
              mass: 0.8,
            }}
            style={{
              background: "#0d1117",
              boxShadow: "0 0 80px -20px rgba(16,185,129,0.15), 0 25px 100px -20px rgba(0,0,0,0.6)",
            }}
            onClick={() => fullscreenInputRef.current?.focus()}
          >
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16,185,129,0.15) 2px, rgba(16,185,129,0.15) 4px)",
              }}
              aria-hidden="true"
            />

            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-emerald-500/10 bg-[#0a0e14] flex-shrink-0">
              <div className="flex gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); terminal.setFullscreen(false); }}
                  className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all cursor-pointer relative group"
                  aria-label="Close fullscreen"
                >
                  <X className="w-2 h-2 absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity text-red-900" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); terminal.setFullscreen(false); }}
                  className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-110 transition-all cursor-pointer relative group"
                  aria-label="Minimize terminal"
                >
                  <Minimize2 className="w-2 h-2 absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity text-yellow-900" />
                </button>
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <p className="flex-1 text-center text-xs font-medium text-zinc-500 font-mono">
                soheil@portfolio <span className="text-emerald-500/40">~</span> <span className="text-zinc-600">%</span>
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); terminal.setFullscreen(false); }}
                className="p-1.5 rounded-lg hover:bg-emerald-500/10 transition-colors text-zinc-600 hover:text-emerald-400"
                aria-label="Minimize"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal body */}
            <div
              ref={fullscreenScrollRef}
              className="flex-1 overflow-y-auto p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed space-y-1 min-h-0 scrollbar-hide cursor-text"
              style={{ userSelect: "text", WebkitUserSelect: "text" }}
            >
              <TerminalLines lines={terminal.lines} fontSize="text-xs sm:text-sm" variant="fullscreen" />

              {/* Active input */}
              <div className="flex items-center gap-2 mt-2">
                <span className={`flex-shrink-0 text-sm ${terminal.connectStep !== "idle" ? "text-amber-500" : "text-emerald-500"}`}>❯</span>
                <input
                  ref={fullscreenInputRef}
                  type="text"
                  value={terminal.input}
                  onChange={(e) => terminal.setInput(e.target.value)}
                  onKeyDown={terminal.handleKeyDown}
                  className={`flex-1 bg-transparent outline-none text-[16px] sm:text-sm font-mono placeholder:text-zinc-700 ${terminal.connectStep !== "idle" ? "text-amber-100 caret-amber-400" : "text-emerald-100 caret-emerald-400"}`}
                  spellCheck={false}
                  autoComplete="off"
                  autoCapitalize="off"
                  aria-label="Terminal input (fullscreen)"
                  placeholder={terminal.connectStep === "idle" ? "type a command..." : ""}
                />
              </div>
            </div>

            {/* Footer hint */}
            <div className="flex-shrink-0 px-5 py-2 border-t border-emerald-500/8 bg-[#0a0e14] flex items-center justify-between">
              {terminal.connectStep !== "idle" ? (
                <>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                    </span>
                    <span className="text-[10px] font-mono text-amber-500/60 uppercase tracking-wider">connect flow</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-700">esc or type cancel to exit</span>
                </>
              ) : (
                <p className="text-[10px] font-mono text-zinc-600 text-center w-full">
                  type <span className="text-emerald-500/60">help</span> for commands
                  {" · "}
                  <span className="text-emerald-500/60">connect</span> to reach out
                  {" · "}
                  <span className="text-zinc-700">esc</span> to minimize
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function About() {
  const [pullQuote, ...narrative] = personalInfo.aboutParagraphs;

  return (
    <>
      <section
        id="about"
        aria-label="About Soheil Asami"
        className="py-16 md:py-20 relative"
      >
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Section label */}
          <FadeIn className="mb-8">
            <p className="text-sm font-medium tracking-widest uppercase text-blue-500 mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Why teams hire me
            </h2>
          </FadeIn>

          {/* Pull quote */}
          <FadeIn delay={0.05} className="mb-10">
            <div className="relative pl-5 md:pl-6 border-l-[3px] border-gradient-to-b border-blue-500">
              <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 to-violet-500 rounded-full" />
              <p className="text-xl md:text-2xl lg:text-[1.65rem] font-medium leading-snug text-zinc-800 dark:text-zinc-200 tracking-tight">
                {pullQuote}
              </p>
            </div>
          </FadeIn>

          {/* Two-column: narrative + terminal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left — narrative + signal grid */}
            <div className="lg:col-span-7 space-y-5">
              {narrative.map((p, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.06}>
                  <p className="text-[15px] md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {p}
                  </p>
                </FadeIn>
              ))}

              {/* Signal cards */}
              <FadeIn delay={0.25}>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {signals.map((s) => {
                    const a = accentMap[s.accent];
                    return (
                      <div
                        key={s.title}
                        className={`rounded-xl border bg-gradient-to-br p-3.5 ${a.border} ${a.bg}`}
                      >
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`} />
                          <h3 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                            {s.title}
                          </h3>
                        </div>
                        <p className="text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {s.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>

            {/* Right — terminal card */}
            <TerminalCard />
          </div>
        </div>
      </section>

      {/* Fullscreen terminal portal — renders above everything */}
      <TerminalFullscreen />
    </>
  );
}
