import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <FadeIn className="mb-16">
      <p className="text-sm font-medium tracking-widest uppercase text-blue-500 mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
    </FadeIn>
  );
}
