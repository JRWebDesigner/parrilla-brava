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
        <Reveal>
          <p className="font-display text-4xl leading-tight text-cream sm:text-5xl">
            Pero te advierto algo...
          </p>
        </Reveal>

        <Reveal delay={600}>
          <p className="font-display mt-10 text-3xl leading-tight text-gilded animate-shimmer sm:text-4xl">
            La cena es solo el comienzo.
          </p>
        </Reveal>

        <Reveal delay={1200}>
          <p className="font-display mt-10 text-3xl leading-tight text-cream/90 sm:text-4xl">
            Después...
            <br />
            vemos qué pinta.
          </p>
        </Reveal>

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
