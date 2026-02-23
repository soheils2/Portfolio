import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mldjwvre";

/* ─── Terminal command responses ─── */
const TERMINAL_COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "",
    "  connect     Send me a message right here",
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
    "▸ Tribes Digital - Sr. Frontend Developer",
    "  100+ component design system, AR/VR apps",
    "▸ VioraHR - Co-founder & Lead Engineer",
    "  Solo-built SaaS → both app stores in Y1",
    "▸ DemisCo - Frontend Architect",
    "  Enterprise UI framework, 10+ projects",
    "▸ Self-taught → 6+ years shipping production",
  ],
  contact: [
    "📧  info@soeil.net",
    "💼  linkedin.com/in/soheil-asami",
    "🐙  github.com/soheils2",
    "📄  Resume → click 'Resume' in nav above",
    "",
    "Or type 'connect' to reach out right from here.",
  ],
  hire: [
    "→ I ship fast without breaking things",
    "→ I write code the next dev will thank me for",
    "→ I've shipped 30+ production apps",
    "→ I embed with your team, not outside it",
    "→ I don't just build features, I own outcomes",
    "",
    '$ echo "Let\'s build something great"',
  ],
  projects: [
    "🏗️  Chupachups AR - brand activation camera app",
    "🛥️  Princess Yachts VR - 3yr catalogue system",
    "📱  VioraHR - full SaaS, React Native + Node.js",
    "🧱  DemisCo UI - 100+ component framework",
    "🌐  This portfolio - built with React + TS",
    "",
    "Type 'skills' to see the tech behind these.",
  ],
  whoami: [
    "soheil.terminal v1.0.0",
    "A live React component built into this portfolio.",
    "Fully interactive. Try the commands above.",
    "Yes, this is real code. View source to verify 😉",
    "",
    "Built with: React + TypeScript + Tailwind",
  ],
  sudo: [
    "🔓 Access granted.",
    "",
    "  Just kidding. But you found the easter egg!",
    "  You're clearly detail-oriented.",
    "  We should work together. Type 'contact' 😉",
  ],
};

export type Line = { type: "input" | "output" | "system"; text: string };

const WELCOME: Line[] = [
  { type: "system", text: "Welcome to soheil.terminal v1.0.0" },
  { type: "system", text: "Type 'help' for available commands" },
];

/* ─── Connect flow state machine ─── */
type ConnectStep = "idle" | "name" | "email" | "hiring" | "urgency" | "confirm" | "sending";

interface ConnectData {
  name: string;
  email: string;
  hiring: boolean;
  urgency: string;
}

const URGENCY_MAP: Record<string, string> = {
  "1": "Just exploring",
  "2": "Planning to hire soon",
  "3": "Need someone ASAP",
};

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
  connectStep: ConnectStep;
}

const TerminalContext = createContext<TerminalState | null>(null);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [isFullscreen, setFullscreen] = useState(false);

  // Connect flow state
  const [connectStep, setConnectStep] = useState<ConnectStep>("idle");
  const connectDataRef = useRef<Partial<ConnectData>>({});

  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const addLines = useCallback((newLines: Line[]) => {
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const sendToFormspree = useCallback(async (data: ConnectData) => {
    const urgencyLabel = URGENCY_MAP[data.urgency] || data.urgency;
    const message = [
      `[Terminal Connect]`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Hiring for a team: ${data.hiring ? "Yes" : "No"}`,
      `Urgency: ${urgencyLabel}`,
    ].join("\n");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message,
          _subject: `Portfolio Terminal: ${data.name} (${urgencyLabel})`,
        }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }, []);

  const handleConnectStep = useCallback((rawInput: string) => {
    const trimmed = rawInput.trim();
    const newLines: Line[] = [{ type: "input", text: rawInput }];

    // Allow cancel at any step
    if (trimmed.toLowerCase() === "cancel" || trimmed.toLowerCase() === "abort") {
      newLines.push({ type: "system", text: "Cancelled. Back to normal mode." });
      setConnectStep("idle");
      connectDataRef.current = {};
      addLines(newLines);
      setInput("");
      return;
    }

    switch (connectStep) {
      case "name": {
        if (trimmed.length < 2) {
          newLines.push({ type: "output", text: "That's too short. What's your name?" });
          break;
        }
        connectDataRef.current.name = trimmed;
        newLines.push({ type: "system", text: `Got it, ${trimmed}.` });
        newLines.push({ type: "output", text: "What's your email?" });
        setConnectStep("email");
        break;
      }
      case "email": {
        // basic email check
        if (!trimmed.includes("@") || !trimmed.includes(".")) {
          newLines.push({ type: "output", text: "That doesn't look like an email. Try again." });
          break;
        }
        connectDataRef.current.email = trimmed;
        newLines.push({ type: "system", text: `Email saved.` });
        newLines.push({ type: "output", text: "Are you hiring for a team? (yes / no)" });
        setConnectStep("hiring");
        break;
      }
      case "hiring": {
        const lower = trimmed.toLowerCase();
        if (lower !== "yes" && lower !== "no" && lower !== "y" && lower !== "n") {
          newLines.push({ type: "output", text: "Just type yes or no." });
          break;
        }
        connectDataRef.current.hiring = lower === "yes" || lower === "y";
        newLines.push({ type: "system", text: connectDataRef.current.hiring ? "Team hire. Noted." : "Got it, solo inquiry." });
        newLines.push({ type: "output", text: "How urgent is this?" });
        newLines.push({ type: "output", text: "  1  Just exploring" });
        newLines.push({ type: "output", text: "  2  Planning to hire soon" });
        newLines.push({ type: "output", text: "  3  Need someone ASAP" });
        setConnectStep("urgency");
        break;
      }
      case "urgency": {
        if (!["1", "2", "3"].includes(trimmed)) {
          newLines.push({ type: "output", text: "Pick 1, 2, or 3." });
          break;
        }
        connectDataRef.current.urgency = trimmed;
        const urgLabel = URGENCY_MAP[trimmed];
        const d = connectDataRef.current;
        newLines.push({ type: "system", text: "" });
        newLines.push({ type: "system", text: "┌─── Message Preview ───────────────" });
        newLines.push({ type: "output", text: `│  Name:     ${d.name}` });
        newLines.push({ type: "output", text: `│  Email:    ${d.email}` });
        newLines.push({ type: "output", text: `│  Hiring:   ${d.hiring ? "Yes" : "No"}` });
        newLines.push({ type: "output", text: `│  Urgency:  ${urgLabel}` });
        newLines.push({ type: "system", text: "└──────────────────────────────────" });
        newLines.push({ type: "output", text: "" });
        newLines.push({ type: "output", text: "Send this? (yes / no)" });
        setConnectStep("confirm");
        break;
      }
      case "confirm": {
        const lower = trimmed.toLowerCase();
        if (lower !== "yes" && lower !== "no" && lower !== "y" && lower !== "n") {
          newLines.push({ type: "output", text: "Type yes to send or no to cancel." });
          break;
        }
        if (lower === "no" || lower === "n") {
          newLines.push({ type: "system", text: "Cancelled. Your data was not sent." });
          setConnectStep("idle");
          connectDataRef.current = {};
          break;
        }
        // Send it
        newLines.push({ type: "system", text: "Sending..." });
        setConnectStep("sending");
        addLines(newLines);
        setInput("");

        const data = connectDataRef.current as ConnectData;
        sendToFormspree(data).then((ok) => {
          if (ok) {
            addLines([
              { type: "system", text: "" },
              { type: "system", text: "✓ Message sent! I'll get back to you within 24h." },
              { type: "system", text: "  Back to normal mode. Type 'help' for commands." },
            ]);
          } else {
            addLines([
              { type: "system", text: "" },
              { type: "system", text: "✗ Failed to send. Try emailing info@soeil.net directly." },
            ]);
          }
          setConnectStep("idle");
          connectDataRef.current = {};
        });
        return; // early return since we already called addLines & setInput
      }
    }

    addLines(newLines);
    setInput("");
  }, [connectStep, addLines, sendToFormspree]);

  const handleSubmit = useCallback(() => {
    const raw = input.trim();
    if (!raw) return;

    // If we're in connect flow, route to the wizard
    if (connectStep !== "idle" && connectStep !== "sending") {
      handleConnectStep(raw);
      return;
    }

    // If currently sending, ignore input
    if (connectStep === "sending") {
      setInput("");
      return;
    }

    const cmd = raw.toLowerCase();

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

    // Start connect flow
    if (cmd === "connect" || cmd === "msg" || cmd === "message") {
      newLines.push({ type: "system", text: "" });
      newLines.push({ type: "system", text: "─── Quick Connect ───────────────" });
      newLines.push({ type: "output", text: "I'll collect a few details and send them straight to Soheil." });
      newLines.push({ type: "output", text: "Type 'cancel' anytime to bail." });
      newLines.push({ type: "system", text: "" });
      newLines.push({ type: "output", text: "What's your name?" });
      setConnectStep("name");
      addLines(newLines);
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

    addLines(newLines);
    setInput("");
  }, [input, connectStep, handleConnectStep, addLines]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit();
      } else if (e.key === "Escape") {
        if (connectStep !== "idle") {
          // Cancel connect flow on Escape
          addLines([
            { type: "input", text: "cancel" },
            { type: "system", text: "Cancelled. Back to normal mode." },
          ]);
          setConnectStep("idle");
          connectDataRef.current = {};
          setInput("");
        } else {
          setFullscreen(false);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (connectStep === "idle" && history.length > 0) {
          const newIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
          setHistoryIdx(newIdx);
          setInput(history[newIdx]);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (connectStep === "idle" && historyIdx !== -1) {
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
    [handleSubmit, history, historyIdx, connectStep, addLines]
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
        connectStep,
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
