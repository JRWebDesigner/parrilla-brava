import { useMemo } from "react";

/** Slow floating embers — decorative only. */
export function Particles({ count = 18 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        size: 2 + ((i * 7) % 4),
        duration: 12 + ((i * 5) % 14),
        delay: (i * 1.7) % 12,
        opacity: 0.25 + ((i * 13) % 40) / 100,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="animate-drift absolute bottom-0 rounded-full bg-gold"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            boxShadow: "0 0 10px currentColor",
          }}
        />
      ))}
    </div>
  );
}
