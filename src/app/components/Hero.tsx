import { ArrowRight, Monitor } from "lucide-react";

export function Hero() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--nexa-blue) 1px, transparent 1px), linear-gradient(90deg, var(--nexa-blue) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue accent blob */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ backgroundColor: "var(--nexa-blue)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-black/10 bg-white shadow-sm">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--nexa-blue)" }}
              />
              <span className="text-xs font-medium text-muted-foreground">
                Agencia de Diseño & Desarrollo Web
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Creamos{" "}
              <span
                className="relative inline-block"
                style={{ color: "var(--nexa-blue)" }}
              >
                experiencias
              </span>{" "}
              digitales únicas
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Diseñamos sitios web modernos, rápidos y adaptables que ayudan a
              negocios y empresas a destacar en internet.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => handleNavClick("#proyectos")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 shadow-lg"
                style={{ backgroundColor: "var(--nexa-blue)" }}
              >
                Ver Proyectos
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => handleNavClick("#contacto")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-foreground bg-white border border-black/10 transition-all duration-200 hover:border-black/20 hover:shadow-md hover:-translate-y-0.5"
              >
                Hablemos
              </button>
            </div>

            {/* Trust signal */}
          </div>

          {/* Right — laptop mockup */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-xl">
              {/* Glow behind laptop */}
              <div
                className="absolute inset-0 blur-3xl opacity-20 rounded-full scale-75"
                style={{ backgroundColor: "var(--nexa-blue)" }}
              />

              {/* Laptop frame */}
              <div className="relative">
                {/* Screen */}
                <div className="bg-gray-900 rounded-2xl p-3 shadow-2xl ring-1 ring-black/10">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="rounded-lg overflow-hidden aspect-[16/10] relative bg-gray-800">
                    <img
                      src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800&h=500&fit=crop&auto=format"
                      alt="Proyecto destacado Lumin Studio en portátil"
                      className="w-full h-full object-cover opacity-90"
                    />
                    {/* Screen overlay with mini UI */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-xs font-medium opacity-80">Lumin Studio</p>
                      <p className="text-white/60 text-xs">Fotografía Profesional</p>
                    </div>
                  </div>
                </div>

                {/* Laptop base */}
                <div className="flex justify-center">
                  <div className="h-3 w-3/4 bg-gray-200 rounded-b-lg shadow-lg" />
                </div>
                <div className="flex justify-center">
                  <div className="h-1 w-full bg-gray-300 rounded-b-xl" />
                </div>

                {/* Floating cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 border border-black/5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--nexa-blue-light)" }}>
                    <Monitor size={14} style={{ color: "var(--nexa-blue)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Diseño Responsive</p>
                    <p className="text-xs text-muted-foreground">100% adaptable</p>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 border border-black/5">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full animate-pulse"
                      style={{ backgroundColor: "#22c55e" }}
                    />
                    <p className="text-xs font-semibold text-foreground">+20 proyectos</p>
                  </div>
                  <p className="text-xs text-muted-foreground">entregados con éxito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
