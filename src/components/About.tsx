import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeading } from "./ui/SectionHeading";
import { personalInfo, stats } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionHeading label="About" title="How I got here" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">
          {/* Narrative */}
          <div className="space-y-6">
            {personalInfo.aboutParagraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p
                  className={`leading-relaxed text-zinc-600 dark:text-zinc-400 ${
                    i === 0
                      ? "text-lg md:text-xl font-medium text-zinc-700 dark:text-zinc-300"
                      : "text-base md:text-lg"
                  }`}
                >
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Avatar card */}
          <FadeIn delay={0.2} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-60" />
              <img
                src="/assets/avtg.png"
                alt="Soheil Asami — Senior Software Developer"
                loading="lazy"
                className="relative w-full rounded-2xl object-cover border border-zinc-200 dark:border-zinc-800"
              />
            </div>
          </FadeIn>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <motion.div
                className="relative p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-center group hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-50 dark:to-zinc-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
