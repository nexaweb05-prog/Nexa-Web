import { CheckCircle, Layers, Shield, Users } from "lucide-react";

const values = [
  { icon: <Layers size={18} />, label: "Diseño estratégico" },
  { icon: <Shield size={18} />, label: "Código limpio y seguro" },
  { icon: <Users size={18} />, label: "Orientados al cliente" },
  { icon: <CheckCircle size={18} />, label: "Entregas a tiempo" },
];

const stats = [
  { value: "+10", label: "Proyectos completados" },
  { value: "+1", label: "Años de experiencia" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — visual */}
          <div className="relative order-2 lg:order-1">
            {/* Main card */}
            <div
              className="relative rounded-3xl overflow-hidden p-10 lg:p-14"
              style={{ backgroundColor: "var(--nexa-section-bg)" }}
            >
              {/* Abstract tech illustration */}
              <div className="relative">
                {/* Code window mockup */}
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-white/5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-gray-500 font-mono">nexa-web.tsx</span>
                  </div>
                  <div className="p-5 font-mono text-xs leading-7">
                    <div><span className="text-blue-400">const</span> <span className="text-white">NexaWeb</span> <span className="text-gray-400">= {"{"}</span></div>
                    <div className="pl-4"><span className="text-purple-400">misión</span><span className="text-gray-400">:</span> <span className="text-green-400">"Digitalizar negocios"</span><span className="text-gray-400">,</span></div>
                    <div className="pl-4"><span className="text-purple-400">enfoque</span><span className="text-gray-400">:</span> <span className="text-green-400">"Diseño + Desarrollo"</span><span className="text-gray-400">,</span></div>
                    <div className="pl-4"><span className="text-purple-400">tecnologías</span><span className="text-gray-400">: [</span></div>
                    <div className="pl-8"><span className="text-yellow-400">"React"</span><span className="text-gray-400">,</span> <span className="text-yellow-400">"Next.js"</span><span className="text-gray-400">,</span></div>
                    <div className="pl-8"><span className="text-yellow-400">"Tailwind"</span><span className="text-gray-400">,</span> <span className="text-yellow-400">"TypeScript"</span></div>
                    <div className="pl-4"><span className="text-gray-400">],</span></div>
                    <div className="pl-4"><span className="text-purple-400">proyectos</span><span className="text-gray-400">:</span> <span className="text-orange-400">20</span><span className="text-gray-400">,</span></div>
                    <div className="pl-4"><span className="text-purple-400">satisfacción</span><span className="text-gray-400">:</span> <span className="text-green-400">"100%"</span></div>
                    <div><span className="text-gray-400">{"}"}</span></div>
                    <div className="mt-2 flex items-center gap-1">
                      <span className="text-gray-500">// </span>
                      <span className="text-gray-500">Construimos tu presencia digital</span>
                      <span className="inline-block w-2 h-4 bg-blue-400 opacity-80 animate-pulse ml-1" />
                    </div>
                  </div>
                </div>

                {/* Floating tech badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-3 py-2 border border-black/5 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground">React</span>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-3 py-2 border border-black/5 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-2xl border border-black/8 shadow-sm p-4 text-center"
                >
                  <p
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-display)", color: "var(--nexa-blue)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — copy */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div>
              <span
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "var(--nexa-blue)" }}
              >
                Sobre nosotros
              </span>
              <h2
                className="mt-3 text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nexa Web
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Desarrollamos sitios web modernos para empresas y negocios que buscan fortalecer
              su presencia digital y generar confianza en sus clientes.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Combinamos diseño visual cuidado con desarrollo técnico sólido para crear
              experiencias digitales que no solo se ven bien, sino que también funcionan
              excepcionalmente bien en cualquier dispositivo y condición.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value) => (
                <div
                  key={value.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-black/8 bg-card"
                >
                  <span style={{ color: "var(--nexa-blue)" }}>{value.icon}</span>
                  <span className="text-sm font-medium text-foreground">{value.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 shadow-lg w-fit"
              style={{ backgroundColor: "var(--nexa-blue)" }}
            >
              Trabaja con nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
