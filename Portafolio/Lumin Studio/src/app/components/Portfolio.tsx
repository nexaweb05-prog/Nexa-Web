import { useState } from "react";
import Masonry from "react-responsive-masonry";
import ResponsiveMasonry from "react-responsive-masonry";

const categories = ["All", "Wedding", "Portrait", "Commercial", "Events"];

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1680624629496-0a2c2444153e?w=600&h=800&fit=crop&auto=format",
    alt: "Wedding couple dancing in dramatic light",
    category: "Wedding",
    height: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&h=450&fit=crop&auto=format",
    alt: "Elegant portrait in black and white",
    category: "Portrait",
    height: "medium",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=750&fit=crop&auto=format",
    alt: "Corporate conference event coverage",
    category: "Events",
    height: "tall",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1535536253538-02a258fdf0e0?w=600&h=400&fit=crop&auto=format",
    alt: "Grayscale wedding couple",
    category: "Wedding",
    height: "short",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop&auto=format",
    alt: "Professional portrait session",
    category: "Portrait",
    height: "tall",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1561489413-985b06da5bee?w=600&h=450&fit=crop&auto=format",
    alt: "Executive event dinner photography",
    category: "Commercial",
    height: "medium",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1664674842761-afabadbdc57d?w=600&h=700&fit=crop&auto=format",
    alt: "Intimate wedding kiss moment",
    category: "Wedding",
    height: "tall",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&h=500&fit=crop&auto=format",
    alt: "Studio portrait in black",
    category: "Portrait",
    height: "medium",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1561489411-c0ce86e994bb?w=600&h=400&fit=crop&auto=format",
    alt: "Professional speaker at corporate event",
    category: "Events",
    height: "short",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1570900721572-8328b624fca2?w=600&h=750&fit=crop&auto=format",
    alt: "Romantic wedding silhouette",
    category: "Wedding",
    height: "tall",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=600&h=500&fit=crop&auto=format",
    alt: "Fashion portrait editorial",
    category: "Commercial",
    height: "medium",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1535579710123-3c0f261c474e?w=600&h=700&fit=crop&auto=format",
    alt: "Moody studio portrait",
    category: "Portrait",
    height: "tall",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32" style={{ background: "#06080f" }}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Section header */}
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
              Our Work
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
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
              Selected <em style={{ fontStyle: "italic", color: "#4f9eff" }}>Portfolio</em>
            </h2>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 text-xs transition-all duration-200"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.08em",
                    fontWeight: activeCategory === cat ? 500 : 400,
                    color: activeCategory === cat ? "#06080f" : "#8892a4",
                    background:
                      activeCategory === cat
                        ? "linear-gradient(135deg, #4f9eff 0%, #2563eb 100%)"
                        : "transparent",
                    border: activeCategory === cat
                      ? "1px solid transparent"
                      : "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "2rem",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Masonry grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3 }}>
          <Masonry gutter="12px">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className="relative overflow-hidden cursor-pointer"
                style={{ borderRadius: "0.5rem" }}
                onMouseEnter={() => setHoveredId(photo.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover block transition-transform duration-700"
                  style={{
                    transform: hoveredId === photo.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-400"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,8,15,0.9) 0%, transparent 60%)",
                    opacity: hoveredId === photo.id ? 1 : 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.16em",
                      color: "#4f9eff",
                      textTransform: "uppercase",
                    }}
                  >
                    {photo.category}
                  </span>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.88rem",
                      color: "#e8edf8",
                    }}
                  >
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* View more */}
        <div className="flex justify-center mt-14">
          <button
            className="flex items-center gap-3 px-8 py-4 transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              color: "#e8edf8",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "0.375rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(79,158,255,0.4)";
              e.currentTarget.style.color = "#4f9eff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#e8edf8";
            }}
          >
            VIEW FULL PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
}
