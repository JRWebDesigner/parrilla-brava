import { CalendarDays, Clock, MapPin, UtensilsCrossed, ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";

const details = [
  { icon: CalendarDays, label: "Fecha", value: "Sábado 5 de septiembre" },
  { icon: MapPin, label: "Lugar", value: "La Parrilla Brava" },
  { icon: UtensilsCrossed, label: "Plan", value: "Cena para dos" },
  { icon: Clock, label: "Hora sugerida", value: "20:00" },
];

export function InvitationDetails() {
  return (
    <section id="invitacion" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <p className="text-center text-[0.7rem] tracking-[0.4em] text-accent/80 uppercase">
            La reserva
          </p>
          <h2 className="font-display mt-4 text-center text-4xl text-cream sm:text-5xl">
            Primero, lo importante...
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-border bg-card/70 p-7 shadow-elegant backdrop-blur-sm sm:p-10">
            <div className="absolute inset-x-0 top-0 hairline" />
            <ul className="space-y-6">
              {details.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-secondary/60 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="font-display text-2xl text-cream">{value}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 hairline" />

            <p className="mt-7 text-center text-sm leading-relaxed text-muted-foreground italic">
              Sin demasiados protocolos.
              <br />
              Solo tú, yo, algo rico para comer
              <br />y una noche para disfrutar.
            </p>
          </div>
        </Reveal>

        <Reveal delay={250} className="mt-10 text-center">
          <a
            href="#restaurante"
            className="inline-flex items-center gap-2 rounded-full border border-accent/35 px-7 py-3.5 text-sm text-cream transition-all duration-300 hover:border-accent hover:bg-accent/10"
          >
            Ver la invitación completa
            <ArrowDown className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
