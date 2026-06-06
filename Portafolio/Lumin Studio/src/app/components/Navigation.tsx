import { useState, useEffect } from "react";
import { Menu, X, Camera } from "lucide-react";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(6, 8, 15, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #4f9eff 0%, #1e40af 100%)" }}
            >
              <Camera size={16} color="#fff" />
            </div>
            <span
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#e8edf8",
                letterSpacing: "-0.01em",
              }}
            >
              Lumin<span style={{ color: "#4f9eff" }}>.</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm tracking-wide transition-colors duration-200"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    color: "#8892a4",
                    letterSpacing: "0.06em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8edf8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8892a4")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-6 py-2.5 text-sm tracking-widest transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "#06080f",
                background: "linear-gradient(135deg, #4f9eff 0%, #2563eb 100%)",
                borderRadius: "0.375rem",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.opacity = "0.88")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.opacity = "1")
              }
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ color: "#e8edf8" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(6,8,15,0.97)" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#e8edf8",
                  letterSpacing: "-0.01em",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-4 px-8 py-3 text-sm tracking-widest"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "#06080f",
                background: "linear-gradient(135deg, #4f9eff 0%, #2563eb 100%)",
                borderRadius: "0.375rem",
              }}
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
}
