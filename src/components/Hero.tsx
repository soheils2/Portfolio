import { useMemo } from "react";
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
  "Triple click the name for a surprise! 😉",
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

/* ─── Matrix rain — snippets drop top→bottom, green, faded ─── */
function FloatingCode() {
  const drops = useMemo(() => {
    const shuffled = [...CODE_SNIPPETS].sort(() => Math.random() - 0.5);

    return shuffled.map((text, i) => ({
      text,
      x: 2 + (i * 3.7) % 96,
      speed: 16 + Math.random() * 14,
      delay: Math.random() * 18,
      size: 11 + Math.floor(Math.random() * 3),
    }));
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {drops.map((d, i) => (
        <span
          key={i}
          className="absolute font-mono whitespace-nowrap text-emerald-500 dark:text-emerald-400"
          style={{
            left: `${d.x}%`,
            top: 0,
            fontSize: `${d.size}px`,
            animation: `matrixDrop ${d.speed}s linear ${d.delay}s infinite`,
            animationFillMode: "backwards",
            willChange: "transform, opacity",
          }}
        >
          {d.text}
        </span>
      ))}
    </div>
  );
}

/* ─── Liquid Glass Name — the whole name is made of glass ─── */
function GlassName() {
  const name = personalInfo.name;

  return (
    <span className="relative inline-block">
      {/* Glass text — gradient fill clipped to text */}
      <span
        className="relative font-bold"
        style={{
          background: "linear-gradient(135deg, rgba(96,165,250,0.95) 0%, rgba(139,92,246,0.9) 35%, rgba(59,130,246,0.95) 65%, rgba(167,139,250,0.85) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 20px rgba(59,130,246,0.25)) drop-shadow(0 0 40px rgba(139,92,246,0.1))",
          WebkitTextStroke: "0.5px rgba(255,255,255,0.1)",
        }}
      >
        {name}
      </span>
      {/* Shine sweep — clipped to text shape */}
      <span
        className="absolute inset-0 pointer-events-none glass-text-shine"
        style={{
          background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 47%, rgba(255,255,255,0.06) 53%, transparent 70%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          backgroundSize: "250% 100%",
        }}
        aria-hidden="true"
      >
        {name}
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction — Soheil Asami, Senior Software Developer"
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
    >
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

        {/* Name — liquid glass */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4"
        >
          <GlassName />
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
            className="group px-7 py-3 rounded-full text-sm font-medium bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            View my work
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Social links — min 44px touch targets */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-2"
        >
          {socialLinks.slice(0, 2).map(({ label, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs min-h-[44px] min-w-[44px] justify-center py-2 px-3 rounded-lg text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
              aria-label={label}
            >
              {label === "GitHub" && <Github className="w-3.5 h-3.5" />}
              {label === "LinkedIn" && <Linkedin className="w-3.5 h-3.5" />}
              <span>{label}</span>
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            className="flex items-center gap-1.5 text-xs min-h-[44px] min-w-[44px] justify-center py-2 px-3 rounded-lg text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
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
        className="relative z-10 mt-auto pb-6 pt-6"
      >
        <p className="text-center text-[10px] font-semibold tracking-widest uppercase text-zinc-400/60 dark:text-zinc-500/60 mb-5">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {clientBrands.map((brand) => (
            <span
              key={brand.name}
              className="text-xs sm:text-sm font-medium tracking-tight text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-300 select-none"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
