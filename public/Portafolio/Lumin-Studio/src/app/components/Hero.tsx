import { useEffect, useRef, useState } from "react";
import { ArrowDown, ChevronRight } from "lucide-react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
      });
    };
    const el = heroRef.current;
    el?.addEventListener("mousemove", handleMouse);
    return () => el?.removeEventListener("mousemove", handleMouse);
  }, []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "700px" }}
    >
      {/* Background image with subtle parallax */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px) scale(1.06)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1680624629496-0a2c2444153e?w=1920&h=1080&fit=crop&auto=format"
          alt="Wedding couple dancing in dramatic lighting"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.42) saturate(0.7)" }}
        />
      </div>

      {/* Multi-layer gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,8,15,0.3) 0%, rgba(6,8,15,0.1) 40%, rgba(6,8,15,0.5) 75%, rgba(6,8,15,0.95) 100%)",
        }}
      />
      {/* Side vignettes */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(6,8,15,0.6) 100%)",
        }}
      />

      {/* Electric blue glow accent */}
      <div
        className="absolute"
        style={{
          top: "20%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(79,158,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          <div style={{ width: "2.5rem", height: "1px", background: "#4f9eff" }} />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: "#4f9eff",
              textTransform: "uppercase",
            }}
          >
            Lumin Studio · Est. 2014
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "clamp(3rem, 7vw, 7rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#e8edf8",
            letterSpacing: "-0.02em",
            maxWidth: "820px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
          }}
        >
          Capturing{" "}
          <em style={{ fontStyle: "italic", color: "#4f9eff" }}>Moments</em>
          <br />
          That Last Forever
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 300,
            color: "#8892a4",
            marginTop: "1.75rem",
            maxWidth: "440px",
            lineHeight: 1.7,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          Award-winning photography studio crafting timeless images for weddings,
          portraits, and premium brands since 2014.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4 mt-10"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.55s",
          }}
        >
          <button
            onClick={() => handleScroll("#portfolio")}
            className="group flex items-center gap-2.5 px-8 py-4 transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              color: "#06080f",
              background: "linear-gradient(135deg, #4f9eff 0%, #2563eb 100%)",
              borderRadius: "0.375rem",
              boxShadow: "0 0 40px rgba(79,158,255,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 50px rgba(79,158,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(79,158,255,0.25)";
            }}
          >
            VIEW PORTFOLIO
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => handleScroll("#contact")}
            className="flex items-center gap-2.5 px-8 py-4 transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              color: "#e8edf8",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "0.375rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(79,158,255,0.5)";
              e.currentTarget.style.color = "#4f9eff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#e8edf8";
            }}
          >
            CONTACT US
          </button>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-10 mt-16 pt-10"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
          }}
        >
          {[
            { num: "10+", label: "Years Experience" },
            { num: "850+", label: "Sessions Completed" },
            { num: "230+", label: "Weddings Captured" },
            { num: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "#4f9eff",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  color: "#8892a4",
                  marginTop: "0.35rem",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("#portfolio")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300 hover:opacity-60"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 1s 1s",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            color: "#8892a4",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ArrowDown size={14} color="#8892a4" className="animate-bounce" />
      </button>
    </section>
  );
}
