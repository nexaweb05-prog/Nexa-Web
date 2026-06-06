import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Isabelle & Thomas Renard",
    role: "Wedding Clients · Napa Valley, 2023",
    avatar: "IR",
    rating: 5,
    text: "We are still speechless. Elena and her team captured something we didn't even know was there — the quiet, electric tension of two people falling completely into each other. Every album page is a gallery-worthy print. Lumin Studio doesn't just document weddings, they interpret them.",
    service: "Wedding Photography",
  },
  {
    id: 2,
    name: "David Whitmore",
    role: "CEO, Whitmore Ventures · Commercial Client",
    avatar: "DW",
    rating: 5,
    text: "We hired Lumin for our annual brand campaign and the results exceeded every expectation. Marcus understood our brand language immediately and delivered images that have since featured in Forbes and our flagship annual report. The investment paid for itself tenfold.",
    service: "Commercial Photography",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Portrait Session Client · New York",
    avatar: "PS",
    rating: 5,
    text: "I've had professional headshots done before, but never like this. Sofia made me feel completely at ease — I forgot the camera was there. The final images were so natural, so confident, so me. Three of my LinkedIn connections asked which retoucher I used. None — just great photography.",
    service: "Portrait Session",
  },
  {
    id: 4,
    name: "The Grand Meridian Hotel",
    role: "Events Director · San Francisco",
    avatar: "GM",
    rating: 5,
    text: "We've worked with Lumin Studio for our annual gala for the past four years. They blend into our events seamlessly while capturing every critical moment. Their quick turnaround — 48 hours — is unmatched in the industry. They are, without question, our exclusive photography partner.",
    service: "Event Coverage",
  },
  {
    id: 5,
    name: "Camille & Julien Moreau",
    role: "Elopement Wedding · Tuscany, 2024",
    avatar: "CJ",
    rating: 5,
    text: "We eloped with 12 guests in a Tuscan vineyard. Lumin Studio flew in and created images that looked like a feature film. The light they found, the angles, the story — it's beyond what we imagined was possible with photography. These are the images we will pass to our grandchildren.",
    service: "Wedding Photography",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06080f 0%, #080c18 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
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
                Client Stories
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
              What clients{" "}
              <em style={{ fontStyle: "italic", color: "#4f9eff" }}>say</em>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="flex items-center justify-center w-11 h-11 transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                color: "#8892a4",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(79,158,255,0.4)";
                e.currentTarget.style.color = "#4f9eff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "#8892a4";
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#8892a4",
                letterSpacing: "0.12em",
              }}
            >
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="flex items-center justify-center w-11 h-11 transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                color: "#8892a4",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(79,158,255,0.4)";
                e.currentTarget.style.color = "#4f9eff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "#8892a4";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="flex flex-col p-7 transition-all duration-500"
              style={{
                borderRadius: "0.75rem",
                border: i === 0 ? "1px solid rgba(79,158,255,0.2)" : "1px solid rgba(255,255,255,0.06)",
                background: i === 0 ? "rgba(79,158,255,0.05)" : "rgba(255,255,255,0.02)",
                backdropFilter: "blur(12px)",
                opacity: i === 0 ? 1 : i === 1 ? 0.8 : 0.5,
                transform: i === 0 ? "scale(1)" : "scale(0.98)",
              }}
            >
              {/* Quote icon */}
              <Quote size={24} color="#4f9eff" style={{ opacity: 0.4, marginBottom: "1rem" }} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={12} color="#4f9eff" fill="#4f9eff" />
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "#c8d0e0",
                  lineHeight: 1.75,
                  flex: 1,
                  marginBottom: "1.5rem",
                }}
              >
                "{t.text}"
              </p>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "1.25rem" }} />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(79,158,255,0.3) 0%, rgba(37,99,235,0.3) 100%)",
                    border: "1px solid rgba(79,158,255,0.2)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#4f9eff",
                    letterSpacing: "0.06em",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "#e8edf8",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      color: "#4f9eff",
                      marginTop: "0.15rem",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "1.75rem" : "0.4rem",
                height: "0.4rem",
                borderRadius: "1rem",
                background: i === current ? "#4f9eff" : "rgba(255,255,255,0.15)",
                transition: "all 0.3s",
                border: "none",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
