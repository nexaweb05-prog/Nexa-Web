import { Globe, Smartphone, Zap, Search, MessageCircle, Wrench } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Globe size={22} />,
    title: "Diseño Web Corporativo",
    description:
      "Creamos sitios web que transmiten profesionalismo y generan confianza en tus clientes desde el primer clic.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Diseño Responsive",
    description:
      "Tu sitio se adapta perfectamente a cualquier dispositivo: escritorio, tablet o móvil, sin comprometer el diseño.",
  },
  {
    icon: <Zap size={22} />,
    title: "Optimización de Rendimiento",
    description:
      "Sitios rápidos que cargan en segundos. Mejoramos la velocidad para reducir rebotes y mejorar la experiencia.",
  },
  {
    icon: <Search size={22} />,
    title: "SEO Básico",
    description:
      "Optimizamos tu sitio para los motores de búsqueda, ayudándote a aparecer cuando tus clientes te buscan.",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Integración con WhatsApp",
    description:
      "Conectamos tu sitio con WhatsApp Business para que tus visitantes puedan contactarte en segundos.",
  },
  {
    icon: <Wrench size={22} />,
    title: "Mantenimiento Web",
    description:
      "Nos encargamos de mantener tu sitio actualizado, seguro y funcionando correctamente mes a mes.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div
      className="group relative flex flex-col gap-5 p-7 rounded-2xl bg-card border border-black/8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300"
        style={{ backgroundColor: "var(--nexa-blue)" }}
      >
        {service.icon}
      </div>

      {/* Number */}
      <span
        className="absolute top-6 right-6 text-5xl font-bold opacity-[0.04] select-none"
        style={{ fontFamily: "var(--font-display)" }}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <h3
          className="font-semibold text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Hover accent bar */}
      <div
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: "var(--nexa-blue)" }}
      />
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--nexa-blue)" }}
          >
            Servicios
          </span>
          <h2
            className="mt-3 text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ¿Qué podemos hacer por tu negocio?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Ofrecemos soluciones digitales completas para impulsar tu presencia en internet.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-16 rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: "var(--nexa-section-bg)" }}
        >
          <div>
            <h3
              className="text-2xl lg:text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ¿Listo para transformar tu presencia digital?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Cuéntanos tu proyecto y te enviamos una propuesta sin costo.
            </p>
          </div>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 shadow-lg whitespace-nowrap"
            style={{ backgroundColor: "var(--nexa-blue)" }}
          >
            Solicitar propuesta
          </a>
        </div>
      </div>
    </section>
  );
}
