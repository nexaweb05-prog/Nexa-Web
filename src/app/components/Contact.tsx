import { Mail, MessageCircle, ArrowRight, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-24 lg:py-32" style={{ backgroundColor: "var(--nexa-section-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--nexa-blue)" }}
          >
            Contacto
          </span>
          <h2
            className="mt-3 text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Cuéntanos tu idea y te responderemos en menos de 24 horas con una propuesta sin costo.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: contact options */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/8493878293"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl bg-card border border-black/8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#25D36615" }}
              >
                <MessageCircle size={24} style={{ color: "#25D366" }} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  WhatsApp
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Respuesta inmediata en horario laboral
                </p>
                <p className="text-sm font-medium mt-1" style={{ color: "#25D366" }}>
                  +1 (849) 387-8293
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-muted-foreground group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:nexa.web05@gmail.com"
              className="group flex items-center gap-5 p-6 rounded-2xl bg-card border border-black/8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--nexa-blue-light)" }}
              >
                <Mail size={24} style={{ color: "var(--nexa-blue)" }} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  Correo electrónico
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Te respondemos en menos de 24 horas
                </p>
                <p className="text-sm font-medium mt-1" style={{ color: "var(--nexa-blue)" }}>
                  nexa.web05@gmail.com
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-muted-foreground group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>

            {/* Info tiles */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-5 rounded-2xl bg-card border border-black/8 shadow-sm">
                <MapPin size={18} style={{ color: "var(--nexa-blue)" }} />
                <p className="mt-2 text-sm font-medium text-foreground">Ubicación</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Trabajo remoto — atendemos todo el mundo hispanohablante
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-black/8 shadow-sm">
                <Clock size={18} style={{ color: "var(--nexa-blue)" }} />
                <p className="mt-2 text-sm font-medium text-foreground">Horario</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  todos los dias a cualquier hora 
                </p>
              </div>
            </div>
          </div>

          //{/* Right: contact form */}
          <form
            className="lg:col-span-3 bg-card rounded-3xl border border-black/8 shadow-sm p-8 lg:p-10 flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-muted/40 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all text-sm"
                  style={{ "--tw-ring-color": "var(--nexa-blue)" } as React.CSSProperties}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="empresa">
                  Empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  placeholder="Tu empresa (opcional)"
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-muted/40 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="email">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="correo@tuempresa.com"
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-muted/40 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="servicio">
                Servicio de interés
              </label>
              <select
                id="servicio"
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-muted/40 text-foreground focus:outline-none focus:ring-2 transition-all text-sm appearance-none cursor-pointer"
              >
                <option value="">Selecciona un servicio</option>
                <option>Diseño Web Corporativo</option>
                <option>Diseño Responsive</option>
                <option>Optimización de Rendimiento</option>
                <option>SEO Básico</option>
                <option>Integración con WhatsApp</option>
                <option>Mantenimiento Web</option>
                <option>Proyecto completo</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-muted/40 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 shadow-lg mt-2"
              style={{ backgroundColor: "var(--nexa-blue)" }}
            >
              Enviar mensaje
              <ArrowRight size={16} />
            </button>

            <p className="text-xs text-center text-muted-foreground">
              También puedes escribirnos directamente por{" "}
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--nexa-blue)" }}>
                WhatsApp
              </a>
              . Te respondemos en menos de 24 horas.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
