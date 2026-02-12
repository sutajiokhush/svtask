import { useEffect } from "react";
import { Heart } from "lucide-react";
import confetti from "canvas-confetti";

const Yes = () => {
  useEffect(() => {
    // Heart-shaped confetti burst
    const colors = ["#FFB8E0", "#EC7FA9", "#BE5985", "#FFEDFA"];
    const end = Date.now() + 3000;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors,
        shapes: ["circle"],
        scalar: 1.2,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors,
        shapes: ["circle"],
        scalar: 1.2,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(330 100% 86% / 0.5) 0%, transparent 65%)",
        }}
      />

      {/* Celebration hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <Heart
            key={i}
            className="absolute fill-secondary text-secondary"
            style={{
              left: `${4 + i * 7}%`,
              top: `${8 + (i % 5) * 18}%`,
              width: `${10 + (i % 5) * 5}px`,
              opacity: 0.15 + (i % 4) * 0.06,
              animationDelay: `${i * 0.35}s`,
              animation: `float ${2.5 + (i % 3)}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 animate-fade-in">
        <h1
          className="text-4xl md:text-5xl font-bold text-primary drop-shadow-sm leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          You clicked Yes.<br />I'm smiling like an idiot now.
        </h1>
      </div>
    </div>
  );
};

export default Yes;
