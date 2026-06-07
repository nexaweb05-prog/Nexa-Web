import { Calendar, Clock } from "lucide-react";

const schedules = [
  {
    day: "Domingo",
    dayShort: "DOM",
    event: "Servicio General",
    time: "10:00 AM",
    desc: "Alabanza, predicación y comunión para toda la familia.",
    color: "#2563EB",
    bg: "#eff6ff",
  },
  {
    day: "Miércoles",
    dayShort: "MIÉ",
    event: "Estudio Bíblico",
    time: "7:00 PM",
    desc: "Profundizamos en la Palabra de Dios en un ambiente íntimo.",
    color: "#0ea5e9",
    bg: "#f0f9ff",
  },
  {
    day: "Viernes",
    dayShort: "VIE",
    event: "Reunión de Jóvenes",
    time: "7:30 PM",
    desc: "Espacio dinámico de adoración y comunidad para jóvenes.",
    color: "#6366f1",
    bg: "#eef2ff",
  },
];

export function Schedule() {
  return (
    <section id="horarios" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[#2563EB] text-xs tracking-widest uppercase font-medium mb-4">
            Horarios
          </p>
          <h2
            className="text-[#0f172a]"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Horarios de Reunión
          </h2>
          <p className="text-[#64748b] text-base mt-4">
            Te esperamos con los brazos abiertos. Ven como eres.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {schedules.map((s) => (
            <div
              key={s.day}
              className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 bg-white"
            >
              {/* Day badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: s.bg, color: s.color }}
              >
                <Calendar size={12} />
                {s.day}
              </div>

              <h3
                className="text-[#0f172a] mb-1"
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.4rem", fontWeight: 600 }}
              >
                {s.event}
              </h3>

              <div className="flex items-center gap-1.5 mb-4">
                <Clock size={14} style={{ color: s.color }} />
                <span className="text-sm font-semibold" style={{ color: s.color }}>
                  {s.time}
                </span>
              </div>

              <p className="text-[#64748b] text-sm leading-relaxed">{s.desc}</p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Sora', sans-serif", color: s.color, opacity: 0.15 }}
                >
                  {s.dayShort}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 bg-[#2563EB] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>
              ¿Primera vez que nos visitas?
            </p>
            <p className="text-blue-200 text-sm mt-1">
              Escríbenos y con gusto te orientamos. ¡Bienvenido a casa!
            </p>
          </div>
          <a
            href="https://wa.me/50212345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-[#2563EB] text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Escríbenos →
          </a>
        </div>
      </div>
    </section>
  );
}
