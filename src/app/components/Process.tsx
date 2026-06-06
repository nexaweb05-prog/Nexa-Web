import { MessageSquare, Palette, Code2, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <MessageSquare size={20} />,
    title: "Conversamos",
    description:
      "Escuchamos tu idea, entendemos tu negocio y definimos juntos los objetivos del proyecto.",
    color: "#3B82F6",
    colorLight: "#EFF6FF",
  },
  {
    number: "02",
    icon: <Palette size={20} />,
    title: "Diseñamos",
    description:
      "Creamos mockups y prototipos visuales para que puedas ver cómo lucirá tu sitio antes de construirlo.",
    color: "#8B5CF6",
    colorLight: "#F5F3FF",
  },
  {
    number: "03",
    icon: <Code2 size={20} />,
    title: "Desarrollamos",
    description:
      "Codificamos tu sitio con tecnología moderna, rápida y segura, siguiendo las mejores prácticas.",
    color: "#EC4899",
    colorLight: "#FDF2F8",
  },
  {
    number: "04",
    icon: <Rocket size={20} />,
    title: "Entregamos",
    description:
      "Publicamos tu sitio en línea, te enseñamos a usarlo y lo dejamos listo para recibir visitas.",
    color: "#F59E0B",
    colorLight: "#FFFBEB",
  },
  {
    number: "05",
    icon: <HeartHandshake size={20} />,
    title: "Soporte",
    description:
      "Seguimos contigo con mantenimiento continuo, actualizaciones y soporte técnico cuando lo necesites.",
    color: "#10B981",
    colorLight: "#ECFDF5",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32" style={{ backgroundColor: "var(--nexa-section-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--nexa-blue)" }}
          >
            Metodología
          </span>
          <h2
            className="mt-3 text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Así trabajamos
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Un proceso claro y transparente de inicio a fin para que siempre sepas en qué etapa está tu proyecto.
          </p>
        </div>

        {/* Timeline — desktop horizontal, mobile vertical */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-0 right-0 mx-auto max-w-5xl">
            <div className="mx-16 h-0.5 bg-border" />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center gap-5 group">
                {/* Circle with icon */}
                <div className="relative z-10">
                  <div
                    className="w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                    style={{ backgroundColor: step.colorLight }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider mb-1"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    <span style={{ color: step.color }}>{step.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <h3
                    className="font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              {/* Left: circle + line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex-shrink-0 flex flex-col items-center justify-center border-2 border-white shadow-md"
                  style={{ backgroundColor: step.colorLight }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                  <span style={{ color: step.color }} className="mt-0.5">{step.icon}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-0.5 bg-border my-2 min-h-[40px]" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-10 pt-1 flex-1">
                <h3
                  className="font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
