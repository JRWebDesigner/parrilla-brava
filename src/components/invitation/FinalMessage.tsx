import { Reveal } from "./Reveal";

export function FinalMessage() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-16 sm:pt-32">
      <div className="absolute inset-0 bg-night opacity-80" />
      <div className="relative mx-auto max-w-lg text-center">
        <Reveal delay={1400}>
          <p className="mt-10 text-sm text-muted-foreground italic">
            Lo importante es que sea contigo.
          </p>
        </Reveal>

        <Reveal delay={1600}>
          <div className="mt-20">
            <div className="hairline" />
            <p className="mt-8 text-[0.7rem] tracking-[0.4em] text-accent/80 uppercase">
              La Parrilla Brava × Rossy
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Sábado 5 de septiembre · Cena para dos
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
