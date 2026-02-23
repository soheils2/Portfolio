import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react";

/* ─── Terminal command responses ─── */
const TERMINAL_COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "",
    "  skills      Tech stack & tools",
    "  experience  Work history snapshot",
    "  contact     How to reach me",
    "  hire        Why you should hire me",
    "  projects    Notable shipped work",
    "  whoami      About this terminal",
    "  sudo        🤫",
    "  clear       Clear terminal",
  ],
  skills: [
    "⚡ Frontend:  React · Next.js · Angular · TypeScript",
    "📱 Mobile:   React Native · Flutter",
    "🔧 Backend:  Node.js · Express · PostgreSQL",
    "☁️ DevOps:   Docker · CI/CD · AWS · Vercel",
    "🧪 Testing:  Jest · Cypress · Playwright",
    "🎨 UI/UX:    Tailwind · Framer Motion · GSAP",
  ],
  experience: [
    "▸ Tribes Digital — Sr. Frontend Developer",
    "  100+ component design system, AR/VR apps",
    "▸ VioraHR — Co-founder & Lead Engineer",
    "  Solo-built SaaS → both app stores in Y1",
    "▸ DemisCo — Frontend Architect",
    "  Enterprise UI framework, 10+ projects",
    "▸ Self-taught → 6+ years shipping production",
  ],
  contact: [
    "📧  info@soeil.net",
    "💼  linkedin.com/in/soheil-asami",
    "🐙  github.com/soheils2",
    "📄  Resume → click 'Resume' in nav above",
  ],
  hire: [
    "→ I ship fast without breaking things",
    "→ I write code the next dev will thank me for",
    "→ I've shipped 30+ production apps",
    "→ I embed with your team, not outside it",
    "→ I don't just build features — I own outcomes",
    "",
    '$ echo "Let\'s build something great"',
  ],
  projects: [
    "🏗️  Chupachups AR — brand activation camera app",
    "🛥️  Princess Yachts VR — 3yr catalogue system",
    "📱  VioraHR — full SaaS, React Native + Node.js",
    "🧱  DemisCo UI — 100+ component framework",
    "🌐  This portfolio — built with React + TS",
    "",
    "Type 'skills' to see the tech behind these.",
  ],
  whoami: [
    "soheil.terminal v1.0.0",
    "A live React component built into this portfolio.",
    "Fully interactive — try the commands above.",
    "Yes, this is real code. View source to verify 😉",
    "",
    "Built with: React + TypeScript + Tailwind",
  ],
  sudo: [
    "🔓 Access granted.",
    "",
    "  Just kidding — but you found the easter egg!",
    "  You're clearly detail-oriented.",
    "  We should work together. Type 'contact' 😉",
  ],
};

export type Line = { type: "input" | "output" | "system"; text: string };

const WELCOME: Line[] = [
  { type: "system", text: "Welcome to soheil.terminal v1.0.0" },
  { type: "system", text: "Type 'help' for available commands" },
];

interface TerminalState {
  lines: Line[];
  input: string;
  history: string[];
  historyIdx: number;
  isFullscreen: boolean;
  setInput: (v: string) => void;
  handleSubmit: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  setFullscreen: (v: boolean) => void;
  toggleFullscreen: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

const TerminalContext = createContext<TerminalState | null>(null);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [isFullscreen, setFullscreen] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = useCallback(() => {
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [...prev, cmd]);
    setHistoryIdx(-1);

    const newLines: Line[] = [{ type: "input", text: cmd }];

    if (cmd === "clear") {
      setLines(WELCOME);
      setInput("");
      return;
    }

    if (cmd === "exit" || cmd === "q") {
      setFullscreen(false);
      setInput("");
      return;
    }

    const response = TERMINAL_COMMANDS[cmd];
    if (response) {
      response.forEach((line) => newLines.push({ type: "output", text: line }));
    } else {
      newLines.push({ type: "output", text: `command not found: ${cmd}` });
      newLines.push({ type: "output", text: "type 'help' for available commands" });
    }

    setLines((prev) => [...prev, ...newLines]);
    setInput("");
  }, [input]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit();
      } else if (e.key === "Escape") {
        setFullscreen(false);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (history.length > 0) {
          const newIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
          setHistoryIdx(newIdx);
          setInput(history[newIdx]);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIdx !== -1) {
          const newIdx = historyIdx + 1;
          if (newIdx >= history.length) {
            setHistoryIdx(-1);
            setInput("");
          } else {
            setHistoryIdx(newIdx);
            setInput(history[newIdx]);
          }
        }
      }
    },
    [handleSubmit, history, historyIdx]
  );

  const toggleFullscreen = useCallback(() => {
    setFullscreen((prev) => !prev);
  }, []);

  return (
    <TerminalContext.Provider
      value={{
        lines,
        input,
        history,
        historyIdx,
        isFullscreen,
        setInput,
        handleSubmit,
        handleKeyDown,
        setFullscreen,
        toggleFullscreen,
        inputRef,
        scrollRef,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  const ctx = useContext(TerminalContext);
  if (!ctx) throw new Error("useTerminal must be used within <TerminalProvider>");
  return ctx;
}
