import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import { TypeWriter } from "./ui/TypeWriter";
import { personalInfo, heroRoles, socialLinks, stats, clientBrands } from "../data/portfolio";

const CODE_SNIPPETS = [
  "const ship = () => deploy();",
  "git push origin main",
  "type Safety = TypeScript;",
  "useEffect(() => hustle(), []);",
  "while(awake) { code(); }",
  "export default Passion;",
  "async function dream() {}",
  "// TODO: sleep",
  "Easter egg: 🥚 Type : 'sudo'",
  "Tripple click the name for a surprise! 😉",
  "const life = { code, repeat };",
  "Promise.all([learn, build]);",
  "yield* grind();",
  "if (!bug) celebrate();",
  "docker compose up -d",
  "npm run build && ship",
  "console.log('shipped 🚀');",
  "<Component isAwesome />",
  "new Array(365).fill(code);",
  "sudo rm -rf doubts/",
  "await build(future);",
  "interface Life { code: true }",
  "return <Ship fast />;",
  "Object.freeze(determination);",
  "try { break(); } finally { fix(); }",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── Floating code snippets — readable lines drifting upward on left/right ─── */
function FloatingCode() {
  const snippets = useMemo(() => {
    const items: {
      text: string;
      side: "left" | "right";
      x: number;
      y: number;
      speed: number;
      delay: number;
      opacity: number;
      size: number;
    }[] = [];

    const leftLines = [...CODE_SNIPPETS].sort(() => Math.random() - 0.5);
    const rightLines = [...CODE_SNIPPETS].sort(() => Math.random() - 0.5);

    // Left side — 10 snippets
    for (let i = 0; i < 10; i++) {
      items.push({
        text: leftLines[i % leftLines.length],
        side: "left",
        x: 1 + Math.random() * 18,
        y: 3 + i * 10 + Math.random() * 3,
        speed: 18 + Math.random() * 14,
        delay: i * 1.2 + Math.random() * 2,
        opacity: 0.18 + Math.random() * 0.14,
        size: 12 + Math.floor(Math.random() * 2),
      });
    }

    // Right side — 10 snippets
    for (let i = 0; i < 10; i++) {
      items.push({
        text: rightLines[i % rightLines.length],
        side: "right",
        x: 58 + Math.random() * 18,
        y: 3 + i * 10 + Math.random() * 3,
        speed: 20 + Math.random() * 14,
        delay: i * 1.2 + Math.random() * 3,
        opacity: 0.18 + Math.random() * 0.14,
        size: 12 + Math.floor(Math.random() * 2),
      });
    }

    return items;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true" style={{ userSelect: "none", WebkitUserSelect: "none" }}>
      {snippets.map((s, i) => (
        <motion.span
          key={i}
          className="absolute font-mono whitespace-nowrap select-none pointer-events-none text-blue-600 dark:text-blue-400"
          draggable={false}
          style={{
            left: `${s.x}%`,
            fontSize: `${s.size}px`,
          }}
          initial={{ y: `${s.y + 10}vh`, opacity: 0 }}
          animate={{
            y: [`${s.y + 10}vh`, `${s.y - 20}vh`],
            opacity: [0, s.opacity, s.opacity, 0],
          }}
          transition={{
            duration: s.speed,
            delay: s.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {s.text}
        </motion.span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section aria-label="Introduction — Soheil Asami, Senior Software Developer" className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-blue-500/8 via-violet-500/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-600/6 to-transparent rounded-full blur-3xl" />
        <FloatingCode />
      </div>

      {/* Main content */}
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10 pt-24"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              Available for hire
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4"
        >
          {personalInfo.name.split(" ").map((word, i) => (
            <span key={i}>
              {i === 1 && <br className="sm:hidden" />}
              {i > 0 && " "}
              {i === 1 ? (
                <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  {word}
                </span>
              ) : (
                word
              )}
            </span>
          ))}
        </motion.h1>

        {/* TypeWriter */}
        <motion.div
          variants={fadeUp}
          className="text-lg sm:text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 mb-6 h-8"
        >
          <TypeWriter words={heroRoles} delay={80} infinite gradient={false} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-8 text-balance"
        >
          {personalInfo.heroTagline}
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-6 sm:gap-8 mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6"
        >
          <a
            href="#work"
            className="group px-7 py-3 rounded-full text-sm font-medium bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2"
          >
            View my work
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.slice(0, 2).map(({ label, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
              aria-label={label}
            >
              {label === "GitHub" && <Github className="w-3.5 h-3.5" />}
              {label === "LinkedIn" && <Linkedin className="w-3.5 h-3.5" />}
              <span>{label}</span>
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Trusted By — integrated into hero bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="relative z-10 mt-auto pb-10 pt-16"
      >
        <p className="text-center text-[10px] font-semibold tracking-widest uppercase text-zinc-400/60 dark:text-zinc-500/60 mb-5">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {clientBrands.map((brand) => (
            <span
              key={brand.name}
              className="text-xs sm:text-sm font-medium tracking-tight text-zinc-400/50 dark:text-zinc-500/50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-300 select-none"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
