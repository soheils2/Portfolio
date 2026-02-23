import { Layers } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { ProjectShowcase } from "./ProjectCard";
import { projects } from "../data/portfolio";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Selected projects and case studies"
      className="py-24 md:py-32 relative"
    >
      {/* Section background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <FadeIn className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/15">
              <Layers className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-sm font-medium tracking-widest uppercase text-blue-500">
              Selected Work
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Built to ship, built to last
          </h2>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
            AR platforms, native apps on both stores, enterprise component
            libraries, and real-time delivery systems. Every project tells a
            story about solving hard problems under real constraints.
          </p>
        </FadeIn>

        {/* Interactive Project Showcase */}
        <FadeIn>
          <ProjectShowcase projects={projects} />
        </FadeIn>
      </div>
    </section>
  );
}
