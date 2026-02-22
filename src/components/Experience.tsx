import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeading } from "./ui/SectionHeading";
import { experienceGroups } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading label="Experience" title="Where I've worked" />

        <div className="space-y-16">
          {experienceGroups.map((group, gi) => (
            <FadeIn key={group.era} delay={gi * 0.1}>
              {/* Era label with divider lines */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
                <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                  {group.era}
                </p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
              </div>

              <div className="space-y-8 border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 ml-2">
                {group.positions.map((pos, pi) => (
                  <motion.div
                    key={`${pos.company}-${pi}`}
                    className="relative group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        pos.current
                          ? "bg-blue-500 border-blue-500 shadow-sm shadow-blue-500/50"
                          : "bg-white dark:bg-[#0a0a0b] border-zinc-300 dark:border-zinc-600 group-hover:border-blue-400 dark:group-hover:border-blue-500"
                      }`}
                    />

                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {pos.title}
                        </h3>
                        <span className="text-sm text-blue-500">
                          {pos.company}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mt-0.5">
                        {pos.period}
                      </p>

                      {pos.description && (
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                          {pos.description}
                        </p>
                      )}

                      {pos.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {pos.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
