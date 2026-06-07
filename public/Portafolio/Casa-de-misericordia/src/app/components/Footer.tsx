import { Instagram, Facebook, Youtube, MapPin } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Líderes", href: "#lideres" },
    { label: "Horarios", href: "#horarios" },
    { label: "Contacto", href: "#contacto" },
  ];

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L9.5 6H15L10.5 9.5L12 14.5L8 11L4 14.5L5.5 9.5L1 6H6.5L8 1Z" fill="white" />
                </svg>
              </div>
              <span
                className="font-semibold text-[15px]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Casa de Misericordia
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Un lugar para crecer en la fe, encontrar propósito y vivir en
              comunidad.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:bg-[#2563EB] hover:text-white transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-5">Navegación</p>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-5">Encuéntranos</p>
            <div className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#2563EB]" />
              4a Calle 2-45, Zona 1<br />
              Ciudad de Guatemala
            </div>
            <div className="mt-4 flex flex-col gap-1 text-slate-400 text-sm">
              <p>Domingo — 10:00 AM</p>
              <p>Miércoles — 7:00 PM</p>
              <p>Viernes — 7:30 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Casa de Misericordia. Todos los derechos reservados.</p>
          <p>Hecho con amor para la comunidad</p>
        </div>
      </div>
    </footer>
  );
}
