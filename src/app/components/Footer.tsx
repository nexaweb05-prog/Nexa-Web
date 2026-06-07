import { Instagram, Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];



const socials = [
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/snexaweb/", label: "Instagram" },
  { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
  { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
  { icon: <Github size={18} />, href: "#", label: "GitHub" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Top CTA strip */}
      <div
        className="border-b border-white/10"
        style={{ backgroundColor: "var(--nexa-blue)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-display)" }}>
            ¿Listo para empezar tu proyecto?
          </p>
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ color: "var(--nexa-blue)" }}
          >
            Hablemos ahora <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--nexa-blue)" }}
              >
                <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                  N
                </span>
              </div>
              <span
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nexa<span style={{ color: "#93c5fd" }}>Web</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Diseño y desarrollo web para negocios que quieren destacar en internet.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:nexa.web05@gmail.com"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  nexa.web05@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8493878293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  +1 (849) 387-8293
                </a>
              </li>
              <li className="text-sm text-white/60">
                Todos los dias
                <br />
                A todas horas
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Nexa Web. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
