import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { Confetti } from "./Confetti";
import { Reveal } from "./Reveal";

/** Replace with the real number, international format, no spaces or "+". */
const WHATSAPP_NUMBER = "59100000000";
const WHATSAPP_MESSAGE =
  "Sí, acepto la cena de mañana ❤️ Nos vemos en La Parrilla Brava.";

export function AcceptanceSection() {
  const [accepted, setAccepted] = useState(false);
  const [dodge, setDodge] = useState({ x: 0, y: 0 });

  const runAway = () => {
    const x = (Math.random() - 0.5) * 140;
    const y = (Math.random() - 0.5) * 70;
    setDodge({ x, y });
  };

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="respuesta" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="absolute inset-x-0 top-1/3 mx-auto h-64 w-64 rounded-full bg-ember/25 blur-3xl animate-soft-glow" />
      {accepted && <Confetti />}

      <div className="relative mx-auto max-w-lg text-center">
        {!accepted ? (
          <>
            <Reveal>
              <p className="text-[0.7rem] tracking-[0.4em] text-accent/80 uppercase">
                Entonces, Rossy...
              </p>
              <h2 className="font-display mt-6 text-6xl text-cream sm:text-7xl">¿Aceptas?</h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-14 flex flex-col items-center gap-5">
                <button
                  type="button"
                  onClick={() => setAccepted(true)}
                  className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-ember px-8 py-4 text-base font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
                >
                  Obvio que sí
                  <Heart className="h-4 w-4 animate-heartbeat fill-current" />
                </button>

                <button
                  type="button"
                  onMouseEnter={runAway}
                  onFocus={runAway}
                  onClick={runAway}
                  onTouchStart={runAway}
                  style={{ transform: `translate(${dodge.x}px, ${dodge.y}px)` }}
                  className="rounded-full border border-border px-7 py-3 text-sm text-muted-foreground transition-transform duration-500 ease-out hover:text-cream"
                >
                  Déjame pensarlo...
                </button>
              </div>
            </Reveal>
          </>
        ) : (
          <div className="animate-rise">
            <h2 className="font-display text-4xl text-cream sm:text-5xl">
              Sabía que dirías que sí 😌
            </h2>
            <p className="font-display mt-8 text-3xl text-gilded animate-shimmer sm:text-4xl">
              Nos vemos mañana ❤️
            </p>
            <p className="mt-6 text-sm tracking-wide text-muted-foreground">
              La noche queda oficialmente reservada.
            </p>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-secondary/50 px-8 py-4 text-sm text-cream transition-all duration-300 hover:scale-[1.03] hover:border-accent hover:bg-accent/10"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              Confirmar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
