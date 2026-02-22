import { FadeIn } from "./ui/FadeIn";
import { clientBrands } from "../data/portfolio";

export function TrustedBy() {
  return (
    <section className="py-16 md:py-20 border-y border-zinc-100 dark:border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="text-center text-[11px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8">
            Trusted by teams at
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {clientBrands.map((brand) => (
              <div
                key={brand.name}
                className="group relative flex items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-300"
                title={brand.name}
              >
                <span className="text-sm sm:text-base font-semibold tracking-tight text-zinc-600 dark:text-zinc-400">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
