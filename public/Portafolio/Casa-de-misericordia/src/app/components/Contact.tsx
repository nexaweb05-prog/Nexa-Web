import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "4a Calle 2-45, Zona 1, Ciudad de Guatemala",
    href: null,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+502 1234-5678",
    href: "https://wa.me/50212345678",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+502 2345-6789",
    href: "tel:+50223456789",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "info@casademisericordia.org",
    href: "mailto:info@casademisericordia.org",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[#2563EB] text-xs tracking-widest uppercase font-medium mb-4">
            Contacto
          </p>
          <h2
            className="text-[#0f172a] mb-4"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Visítanos
          </h2>
          <p className="text-[#64748b]">
            Estamos aquí para recibirte. No importa de dónde vengas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div>
            <div className="flex flex-col gap-5 mb-8">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#eff6ff] flex items-center justify-center">
                    <Icon size={19} className="text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#94a3b8] text-xs uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[#0f172a] text-sm hover:text-[#2563EB] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#0f172a] text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/50212345678?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20Casa%20de%20Misericordia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25d366] text-white px-7 py-3.5 rounded-full hover:bg-[#1ebe5a] transition-colors text-sm font-medium shadow-md shadow-green-100"
            >
              <MessageCircle size={17} />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-72 md:h-full min-h-64 bg-[#f1f5f9]">
            <iframe
              title="Ubicación Casa de Misericordia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30756.63843753634!2d-90.53498!3d14.64072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3c4c2a60825%3A0x5e69f81a3d9e5bd7!2sZona%201%2C%20Ciudad%20de%20Guatemala!5e0!3m2!1ses!2sgt!4v1680000000000!5m2!1ses!2sgt"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "256px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
