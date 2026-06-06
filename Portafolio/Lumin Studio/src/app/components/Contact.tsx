import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    color: "#e8edf8",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.5rem",
    padding: "0.85rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="py-32"
      style={{ background: "#06080f" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <div style={{ width: "2rem", height: "1px", background: "#4f9eff" }} />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                color: "#4f9eff",
                textTransform: "uppercase",
              }}
            >
              Get in Touch
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 300,
              color: "#e8edf8",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Let's create something{" "}
            <em style={{ fontStyle: "italic", color: "#4f9eff" }}>extraordinary</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left: contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Info cards */}
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "hello@luminstudio.com",
                sub: "We reply within 24 hours",
                href: "mailto:hello@luminstudio.com",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+1 (415) 555 0192",
                sub: "Available Mon–Sat, 9am–7pm PST",
                href: "https://wa.me/14155550192",
                isWhatsApp: true,
              },
              {
                icon: MapPin,
                label: "Studio Location",
                value: "348 Hayes Street",
                sub: "San Francisco, CA 94102",
                href: "#",
              },
            ].map(({ icon: Icon, label, value, sub, href, isWhatsApp }) => (
              <a
                key={label}
                href={href}
                target={isWhatsApp ? "_blank" : undefined}
                rel="noreferrer"
                className="flex gap-4 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "0.5rem",
                    background: isWhatsApp
                      ? "rgba(37,211,102,0.08)"
                      : "rgba(79,158,255,0.08)",
                    border: isWhatsApp
                      ? "1px solid rgba(37,211,102,0.2)"
                      : "1px solid rgba(79,158,255,0.15)",
                  }}
                >
                  <Icon
                    size={16}
                    color={isWhatsApp ? "#25d366" : "#4f9eff"}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.14em",
                      color: "#4f4f6a",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      color: "#e8edf8",
                      fontWeight: 400,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      color: "#8892a4",
                      marginTop: "0.15rem",
                    }}
                  >
                    {sub}
                  </div>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div
              className="relative mt-2 overflow-hidden"
              style={{
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.06)",
                height: "180px",
                background: "#0a0f1e",
              }}
            >
              <iframe
                title="Lumin Studio location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.4241!3d37.7759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzMzLjIiTiAxMjLCsDI1JzI2LjciVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.7) saturate(0.5)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/14155550192"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 py-3.5 transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                letterSpacing: "0.1em",
                fontWeight: 500,
                color: "#06080f",
                background: "linear-gradient(135deg, #25d366 0%, #1da851 100%)",
                borderRadius: "0.5rem",
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(37,211,102,0.2)",
              }}
            >
              <MessageCircle size={16} />
              CHAT ON WHATSAPP
            </a>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full gap-5 py-20"
                style={{
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(79,158,255,0.2)",
                  background: "rgba(79,158,255,0.04)",
                }}
              >
                <CheckCircle size={48} color="#4f9eff" />
                <h3
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    color: "#e8edf8",
                    textAlign: "center",
                  }}
                >
                  Message Received
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "#8892a4",
                    textAlign: "center",
                    maxWidth: "320px",
                    lineHeight: 1.6,
                  }}
                >
                  Thank you for reaching out. We'll be in touch within 24 hours to discuss your vision.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", service: "", date: "", message: "" }); }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    color: "#4f9eff",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "0.5rem",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                style={{
                  padding: "2.5rem",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.14em",
                        color: "#8892a4",
                        textTransform: "uppercase",
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Elena Vasquez"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(79,158,255,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.14em",
                        color: "#8892a4",
                        textTransform: "uppercase",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(79,158,255,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.14em",
                        color: "#8892a4",
                        textTransform: "uppercase",
                      }}
                    >
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(79,158,255,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ background: "#0d1220" }}>Select a service</option>
                      <option value="wedding" style={{ background: "#0d1220" }}>Wedding Photography</option>
                      <option value="portrait" style={{ background: "#0d1220" }}>Portrait Session</option>
                      <option value="commercial" style={{ background: "#0d1220" }}>Commercial Photography</option>
                      <option value="events" style={{ background: "#0d1220" }}>Event Coverage</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.14em",
                        color: "#8892a4",
                        textTransform: "uppercase",
                      }}
                    >
                      Event / Session Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(79,158,255,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.14em",
                      color: "#8892a4",
                      textTransform: "uppercase",
                    }}
                  >
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Share the details of your event, your aesthetic preferences, any special moments you'd like captured..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(79,158,255,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-3 py-4 transition-all duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    letterSpacing: "0.12em",
                    fontWeight: 500,
                    color: loading ? "#8892a4" : "#06080f",
                    background: loading
                      ? "rgba(79,158,255,0.2)"
                      : "linear-gradient(135deg, #4f9eff 0%, #2563eb 100%)",
                    borderRadius: "0.5rem",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: loading ? "none" : "0 0 40px rgba(79,158,255,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {loading ? (
                    <>
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          border: "2px solid rgba(79,158,255,0.3)",
                          borderTop: "2px solid #4f9eff",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                        }}
                      />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
