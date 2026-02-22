import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeading } from "./ui/SectionHeading";
import { CaseStudy } from "./CaseStudy";
import { caseStudies, compactProjects } from "../data/portfolio";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Selected Work" title="Projects I've shipped" />

        {/* Featured case studies */}
        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <CaseStudy key={study.slug} study={study} index={i} />
          ))}
        </div>

        {/* Divider */}
        <FadeIn className="mt-24 mb-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
              More Projects
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
          </div>
        </FadeIn>

        {/* Compact projects — interactive cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {compactProjects.map((project, i) => (
            <CompactCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CompactCard({
  project,
  index,
}: {
  project: (typeof compactProjects)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.06}>
      <motion.div
        className="group relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25 }}
      >
        {/* Image */}
        <div className="relative h-36 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} — project screenshot`}
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-700 ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Link overlay */}
          {project.links.length > 0 && (
            <a
              href={project.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-1">
            {project.title}
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="px-1.5 py-0.5 text-[9px] font-mono text-zinc-400">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}
