import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const runAway = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    const range = isMobile ? 80 : 450;
    const x = (Math.random() - 0.5) * range;
    const y = (Math.random() - 0.5) * range;
    setNoPos({ x, y });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, hsl(330 100% 86% / 0.45) 0%, transparent 70%)",
        }}
      />

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-secondary fill-secondary"
            style={{
              left: `${8 + i * 9}%`,
              top: `${12 + (i % 4) * 22}%`,
              width: `${12 + (i % 5) * 5}px`,
              opacity: 0.18 + (i % 3) * 0.08,
              animationDelay: `${i * 0.5}s`,
              animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-lg relative z-10 animate-fade-in">
        <Sparkles className="mx-auto mb-5 w-7 h-7 text-primary opacity-70" />

        <p
          className="text-lg md:text-xl leading-relaxed text-foreground mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          I just searched:{" "}
          <span className="font-semibold text-primary italic">
            "How to ask someone amazing to be my Valentine."
          </span>
        </p>

        <p
          className="text-lg md:text-xl leading-relaxed text-foreground mb-12 tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Google said:{" "}
          <span className="font-semibold text-primary italic">
            "Stop thinking and just ask chashmish."
          </span>
        </p>

        <h1
          className="text-4xl md:text-5xl font-bold text-primary mb-12 drop-shadow-sm"
          style={{ fontFamily: "var(--font-display)" }}
        >
          So, Be My Valentine?
        </h1>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => navigate("/yes")}
            className="px-12 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              boxShadow: "0 8px 30px -8px hsl(330 46% 54% / 0.45)",
            }}
          >
            Yes
          </button>

          <button
            onMouseEnter={runAway}
            onMouseMove={runAway}
            onTouchStart={runAway}
            className="px-12 py-3.5 rounded-full border-2 border-primary text-primary font-semibold text-lg transition-all duration-200 backdrop-blur-sm"
            style={{
              transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
