import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Líderes", href: "#lideres" },
  { label: "Horarios", href: "#horarios" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav("#inicio")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L9.5 6H15L10.5 9.5L12 14.5L8 11L4 14.5L5.5 9.5L1 6H6.5L8 1Z" fill="white" />
            </svg>
          </div>
          <span
            className={`font-semibold text-[15px] tracking-tight transition-colors ${
              scrolled ? "text-[#0f172a]" : "text-white"
            }`}
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Casa de Misericordia
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={`text-sm transition-colors hover:text-[#2563EB] ${
                  scrolled ? "text-[#334155]" : "text-white/90"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav("#contacto")}
          className="hidden md:flex items-center gap-2 bg-[#2563EB] text-white text-sm px-5 py-2 rounded-full hover:bg-[#1d4ed8] transition-colors"
        >
          Visítanos
        </button>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#0f172a]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-left text-[#334155] text-sm py-1 hover:text-[#2563EB] transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contacto")}
            className="mt-2 bg-[#2563EB] text-white text-sm px-5 py-2.5 rounded-full w-full hover:bg-[#1d4ed8] transition-colors"
          >
            Visítanos
          </button>
        </div>
      )}
    </header>
  );
}
