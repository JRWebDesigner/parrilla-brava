import { Flame } from "lucide-react";

/**
 * La Parrilla Brava branding.
 *
 * TO USE THE REAL LOGO: drop the image file in `src/assets/` (for example
 * `src/assets/logo-parrilla-brava.png`), then replace the markup below with:
 *
 *   import logo from "@/assets/logo-parrilla-brava.png";
 *   <img src={logo} alt="La Parrilla Brava" className="h-24 w-auto" />
 *
 * Until then this typographic mark keeps the same visual language.
 */
export function Logo({ className = "", size = "md" }: { className?: string; size?: "md" | "lg" }) {
  const scale = size === "lg" ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl";

  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <span className="flex items-center gap-2 text-ember">
        <span className="hairline w-10 opacity-70" />
        <Flame className="h-5 w-5 animate-soft-glow" strokeWidth={1.5} />
        <span className="hairline w-10 opacity-70" />
      </span>
      <span
        className={`font-display ${scale} leading-none tracking-[0.28em] text-gilded animate-shimmer uppercase`}
      >
        La Parrilla
      </span>
      <span className="font-display text-4xl leading-none tracking-[0.2em] text-ember uppercase sm:text-5xl">
        Brava
      </span>
      <span className="text-[0.6rem] tracking-[0.45em] text-muted-foreground uppercase">
        Restaurante · Bar
      </span>
    </div>
  );
}
