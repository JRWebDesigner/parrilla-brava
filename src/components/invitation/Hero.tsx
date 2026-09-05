import { useEffect, useState } from "react";
import { ChevronDown, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Logo } from "./Logo";
import { Particles } from "./Particles";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-20">
      <img
        src={heroBg}
        alt="Ambiente cálido y tenue de un restaurante por la noche"
        width={1536}
        height={1024}
        className="absolute inset-0 h-[120%] w-full object-cover opacity-55"
        style={{ transform: `translateY(${offset * 0.18}px) scale(1.05)` }}
      />
      <div className="absolute inset-0 bg-night opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
      <Particles />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <div className="animate-rise" style={{ animationDelay: "120ms" }}>
          <Logo size="lg" />
        </div>

        <p
          className="animate-rise mt-10 text-[0.7rem] tracking-[0.42em] text-accent/90 uppercase sm:text-xs"
          style={{ animationDelay: "700ms" }}
        >
          Rossy, tengo una propuesta...
        </p>

        <h1
          className="animate-rise font-display mt-5 text-5xl leading-[1.05] text-cream sm:text-6xl"
          style={{ animationDelay: "950ms" }}
        >
          ¿Cenamos juntos <span className="text-gilded animate-shimmer">mañana</span>?
        </h1>

        <p
          className="animate-rise mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "1200ms" }}
        >
          Hay una mesa esperando...
          <br />y una noche que todavía no tiene plan.
        </p>

        <a
          href="#invitacion"
          className="animate-rise group mt-10 inline-flex items-center gap-2 rounded-full bg-ember px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.99]"
          style={{ animationDelay: "1450ms" }}
        >
          Sí, acepto la invitación
          <Heart className="h-4 w-4 animate-heartbeat fill-current" />
        </a>

        <p
          className="animate-rise mt-5 text-xs text-muted-foreground/80 italic"
          style={{ animationDelay: "1650ms" }}
        >
          Prometo buena comida. Lo demás... vemos.
        </p>

        <ChevronDown
          className="animate-rise mt-14 h-5 w-5 animate-bounce text-accent/60"
          style={{ animationDelay: "1900ms" }}
        />
      </div>
    </section>
  );
}
