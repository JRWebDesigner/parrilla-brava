import { Reveal } from "./Reveal";
import { Particles } from "./Particles";

export function SurpriseSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="absolute inset-0 bg-ember opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-70" />
      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-3xl animate-soft-glow" />
      <Particles count={12} />

      <div className="relative mx-auto max-w-xl text-center">
        <Reveal delay={1600}>
          <div className="mx-auto mt-12 max-w-xs">
            <div className="hairline" />
            <p className="mt-6 text-sm leading-relaxed text-cream/70">
              Sin planear demasiado.
              <br />
              Sin expectativas raras.
              <br />
              Solo pasarla bien.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
