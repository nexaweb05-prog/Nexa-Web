import { Instagram, Facebook } from "lucide-react";

const leaders = [
  {
    name: "Pbro. Miguel Ángel Torres",
    role: "Pastor Principal",
    img: "https://images.unsplash.com/photo-1535119782-71efca81996b?w=400&h=400&fit=crop&auto=format&crop=faces",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Pbro. Carlos Mendoza",
    role: "Copastor",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&crop=faces",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Pbra. Ana Lucía Mendoza",
    role: "Copastora",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&auto=format&crop=faces",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Hna. Sofía Ramírez",
    role: "Líder de Damas",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&auto=format&crop=faces",
    instagram: "#",
    facebook: null,
  },
  {
    name: "Hno. Roberto Fuentes",
    role: "Líder de Caballeros",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&auto=format&crop=faces",
    instagram: null,
    facebook: "#",
  },
  {
    name: "Hno. Diego Solano",
    role: "Líder de Jóvenes",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&auto=format&crop=faces",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Hna. Valentina Cruz",
    role: "Líder de Adoración",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&auto=format&crop=faces",
    instagram: "#",
    facebook: "#",
  },
];

export function Leaders() {
  return (
    <section id="lideres" className="py-24 md:py-32 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[#2563EB] text-xs tracking-widest uppercase font-medium mb-4">
            Equipo
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
            Nuestro Equipo de Liderazgo
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="aspect-square bg-[#dbeafe] overflow-hidden">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-[#0f172a] text-sm mb-0.5 leading-snug"
                  style={{ fontWeight: 600, fontFamily: "'Inter', sans-serif" }}
                >
                  {leader.name}
                </h3>
                <p className="text-[#2563EB] text-xs mb-3">{leader.role}</p>
                <div className="flex gap-2">
                  {leader.instagram && (
                    <a
                      href={leader.instagram}
                      className="w-7 h-7 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:bg-[#2563EB] hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={13} />
                    </a>
                  )}
                  {leader.facebook && (
                    <a
                      href={leader.facebook}
                      className="w-7 h-7 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:bg-[#2563EB] hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
