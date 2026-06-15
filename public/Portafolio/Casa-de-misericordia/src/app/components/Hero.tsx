export function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[#0f172a]">
        <img
          src="https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd?w=1600&h=900&fit=crop&auto=format"
          alt="Congregación levantando las manos en adoración"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-[#0f172a]/30 to-[#0f172a]/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-[#93c5fd] text-sm tracking-widest uppercase mb-6 font-medium">
          Bienvenido
        </p>
        <h1
          className="text-white mb-6 leading-tight"
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 600,
            lineHeight: 1.15,
          }}
        >
          Bienvenido a<br />
          <span className="text-[#60a5fa]">Elias</span>
        </h1>
        <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Un lugar para crecer en la fe, encontrar propósito y vivir en
          comunidad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("#horarios")}
            className="bg-[#2563EB] text-white px-8 py-3.5 rounded-full hover:bg-[#1d4ed8] transition-colors text-sm font-medium shadow-lg shadow-blue-900/30"
          >
            Ver Horarios
          </button>
          <button
            onClick={() => scrollTo("#contacto")}
            className="bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors text-sm font-medium backdrop-blur-sm"
          >
            Contáctanos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest">
        <span>DESCUBRE MÁS</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
