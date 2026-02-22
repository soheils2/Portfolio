import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import { TypeWriter } from "./ui/TypeWriter";
import { personalInfo, heroRoles, socialLinks, stats } from "../data/portfolio";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Ambient gradient mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-blue-500/8 via-violet-500/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-600/6 to-transparent rounded-full blur-3xl" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge — anchoring with availability + location authority */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              Available for hire
            </span>
          </div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            Based in Ireland & UK
          </span>
        </motion.div>

        {/* Name — large, confident, gradient accent */}
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

        {/* TypeWriter subtitle — dynamic role authority */}
        <motion.div
          variants={fadeUp}
          className="text-lg sm:text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 mb-6 h-8"
        >
          <TypeWriter words={heroRoles} delay={80} infinite gradient={false} />
        </motion.div>

        {/* Tagline — specific, outcome-driven */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-8 text-balance"
        >
          {personalInfo.heroTagline}
        </motion.p>

        {/* Quick stats strip — social proof above the fold */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-6 sm:gap-8 mb-10"
        >
          {stats.slice(0, 3).map((stat) => (
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

        {/* CTAs — primary + secondary */}
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

        {/* Social links — subtle, professional */}
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

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
