import { useState } from "react";
import { Heart, User, Briefcase, Calendar, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Heart,
    title: "Wedding Photography",
    tagline: "Your love story, told beautifully",
    description:
      "From intimate elopements to grand celebrations, we document every tender moment with artistry and discretion. Full-day coverage, second shooter, and premium album included.",
    features: ["Full-day coverage", "Second photographer", "500+ edited images", "Luxury album"],
    price: "From $2,800",
    image: "https://images.unsplash.com/photo-1755810666625-d510d007dafc?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    icon: User,
    title: "Portrait Sessions",
    tagline: "Authentic. Striking. Timeless.",
    description:
      "Studio or on-location portrait sessions designed to reveal your truest, most compelling self. For individuals, families, and professionals seeking images that stand out.",
    features: ["2-hour session", "3 outfit changes", "50+ retouched images", "Online gallery"],
    price: "From $480",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Commercial Photography",
    tagline: "Imagery that drives results",
    description:
      "High-impact commercial photography for brands, products, and editorial campaigns. We work with creative directors, agencies, and in-house teams to deliver premium assets.",
    features: ["Creative direction", "Product & brand shots", "Licensing included", "Fast turnaround"],
    price: "From $1,200",
    image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: 4,
    icon: Calendar,
    title: "Event Coverage",
    tagline: "Every moment preserved",
    description:
      "Comprehensive event documentation for galas, conferences, product launches, and private gatherings. Delivered within 5 business days in a private online gallery.",
    features: ["Multi-hour coverage", "Candid & staged shots", "Quick delivery", "Print-ready files"],
    price: "From $950",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format",
  },
];

export function Services() {
  const [activeId, setActiveId] = useState<number>(1);
  const active = services.find((s) => s.id === activeId)!;

  return (
    <section
      id="services"
      className="py-32"
      style={{ background: "linear-gradient(180deg, #06080f 0%, #080c18 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16">
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
              What We Offer
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
            Our <em style={{ fontStyle: "italic", color: "#4f9eff" }}>Services</em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: service tabs */}
          <div className="flex flex-col gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className="text-left transition-all duration-300"
                  style={{
                    padding: "1.5rem 1.75rem",
                    borderRadius: "0.625rem",
                    background: isActive
                      ? "rgba(79,158,255,0.08)"
                      : "rgba(255,255,255,0.02)",
                    border: isActive
                      ? "1px solid rgba(79,158,255,0.25)"
                      : "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                          borderRadius: "50%",
                          background: isActive
                            ? "linear-gradient(135deg, #4f9eff20, #2563eb20)"
                            : "rgba(255,255,255,0.04)",
                          border: isActive
                            ? "1px solid rgba(79,158,255,0.3)"
                            : "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <Icon size={16} color={isActive ? "#4f9eff" : "#8892a4"} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontSize: "1.1rem",
                            fontWeight: 400,
                            color: isActive ? "#e8edf8" : "#8892a4",
                            letterSpacing: "-0.01em",
                            transition: "color 0.2s",
                          }}
                        >
                          {service.title}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.78rem",
                            color: isActive ? "#4f9eff" : "#4f4f6a",
                            marginTop: "0.2rem",
                            transition: "color 0.2s",
                          }}
                        >
                          {service.tagline}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.75rem",
                        color: isActive ? "#4f9eff" : "#4f4f6a",
                        transition: "color 0.2s",
                      }}
                    >
                      {service.price}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: active service detail */}
          <div
            key={activeId}
            className="sticky top-28"
            style={{
              animation: "fadeSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.7) saturate(0.8)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(8,12,24,0.95) 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-5">
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.16em",
                      color: "#4f9eff",
                      textTransform: "uppercase",
                    }}
                  >
                    {active.price}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-7">
                <h3
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    color: "#e8edf8",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {active.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "#8892a4",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {active.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {active.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-xs"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#8892a4",
                        background: "rgba(79,158,255,0.06)",
                        border: "1px solid rgba(79,158,255,0.15)",
                        borderRadius: "2rem",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() =>
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-2 transition-all duration-200"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    color: "#4f9eff",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
                >
                  BOOK THIS SERVICE <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
