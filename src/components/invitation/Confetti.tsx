import { useMemo } from "react";

/** Lightweight falling confetti + hearts, rendered once on acceptance. */
export function Confetti({ pieces = 40 }: { pieces?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: pieces }, (_, i) => ({
        id: i,
        left: (i * 17) % 100,
        delay: ((i * 13) % 30) / 10,
        duration: 3.5 + ((i * 7) % 25) / 10,
        heart: i % 4 === 0,
        size: 6 + ((i * 5) % 7),
        tone: ["var(--gold)", "var(--ember)", "var(--cream)", "var(--burgundy)"][i % 4],
      })),
    [pieces],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            animation: `fall ${p.duration}s cubic-bezier(0.3,0.1,0.5,1) ${p.delay}s forwards`,
          }}
        >
          {p.heart ? (
            <span style={{ color: p.tone, fontSize: p.size * 2 }}>❤</span>
          ) : (
            <span
              style={{
                display: "block",
                width: p.size,
                height: p.size * 1.6,
                background: p.tone,
                borderRadius: 2,
                opacity: 0.9,
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
