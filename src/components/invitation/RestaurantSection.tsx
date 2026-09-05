import { Beef, Sparkles, Wine } from "lucide-react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

const cards = [
  { icon: Beef, title: "Buena comida", note: "Parrilla, fuego lento y calma." },
  { icon: Wine, title: "Algo para tomar", note: "Lo que se te antoje esa noche." },
  { icon: Sparkles, title: "Buena compañía", note: "Esa parte ya está resuelta." },
];

export function RestaurantSection() {
  return (
    <section id="restaurante" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-night opacity-70" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <Logo />
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display mt-10 text-4xl text-cream sm:text-5xl">
            El plan empieza aquí <span className="align-middle">🔥</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Una buena parrilla, algo para tomar, una charla tranquila y dejar que la noche haga lo
            suyo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {cards.map(({ icon: Icon, title, note }, i) => (
            <Reveal key={title} delay={150 + i * 130}>
              <div className="group h-full rounded-2xl border border-border bg-card/60 p-7 shadow-elegant backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ember/90 text-primary-foreground shadow-glow transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-5 text-2xl text-cream">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
