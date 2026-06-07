import { Heart, Users, HandHeart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Fe",
    desc: "Creemos en el poder transformador de la fe en Cristo Jesús y en su Palabra viva.",
  },
  {
    icon: Users,
    title: "Comunidad",
    desc: "Somos una familia que se acompaña, apoya y crece junta en amor y unidad.",
  },
  {
    icon: HandHeart,
    title: "Servicio",
    desc: "Estamos comprometidos a servir a nuestra comunidad con amor, compasión y generosidad.",
  },
];

export function About() {
  return (
    <section id="sobre-nosotros" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#2563EB] text-xs tracking-widest uppercase font-medium mb-4">
            Sobre Nosotros
          </p>
          <h2
            className="text-[#0f172a] mb-6"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Quiénes Somos
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">
            Casa de Misericordia es una iglesia comprometida con compartir el
            amor de Dios, servir a la comunidad y acompañar a las personas en
            su crecimiento espiritual. Somos un lugar de encuentro, sanidad y
            esperanza para todos.
          </p>
        </div>

        {/* Layout: image + values */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#dbeafe]">
              <img
                src="https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=800&h=1000&fit=crop&auto=format"
                alt="Congregación en adoración"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-6 bg-[#2563EB] text-white rounded-2xl px-6 py-4 shadow-xl shadow-blue-200">
              <p className="text-3xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>15+</p>
              <p className="text-blue-100 text-sm">Años de ministerio</p>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center">
                  <Icon size={22} className="text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="text-[#0f172a] mb-1"
                    style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.2rem", fontWeight: 600 }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
