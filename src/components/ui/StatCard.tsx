import { FadeIn } from "./FadeIn";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <FadeIn delay={delay} className="text-center md:text-left">
      <p className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {value}
      </p>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
    </FadeIn>
  );
}
