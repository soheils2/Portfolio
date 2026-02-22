import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeading } from "./ui/SectionHeading";
import { techDomains } from "../data/portfolio";

const domainColors: Record<string, { gradient: string; pill: string; border: string }> = {
  "Frontend": {
    gradient: "from-blue-500/10 to-cyan-500/10",
    pill: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    border: "hover:border-blue-500/30 dark:hover:border-blue-500/20",
  },
  "Backend & APIs": {
    gradient: "from-violet-500/10 to-purple-500/10",
    pill: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    border: "hover:border-violet-500/30 dark:hover:border-violet-500/20",
  },
  "Mobile": {
    gradient: "from-emerald-500/10 to-teal-500/10",
    pill: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-500/30 dark:hover:border-emerald-500/20",
  },
  "DevOps & Tools": {
    gradient: "from-orange-500/10 to-amber-500/10",
    pill: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    border: "hover:border-orange-500/30 dark:hover:border-orange-500/20",
  },
};

const fallbackColor = {
  gradient: "from-blue-500/10 to-violet-500/10",
  pill: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  border: "hover:border-blue-500/30 dark:hover:border-blue-500/20",
};

export function TechStack() {
  return (
    <section id="stack" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionHeading label="Technical Expertise" title="What I work with" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techDomains.map((domain, i) => {
            const colors = domainColors[domain.category] || fallbackColor;

            return (
              <FadeIn key={domain.category} delay={i * 0.1}>
                <motion.div
                  className={`group relative p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 transition-all duration-300 ${colors.border}`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  <div className="relative">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                      {domain.category}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {domain.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 text-xs font-mono rounded-full ${colors.pill}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {domain.context}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
