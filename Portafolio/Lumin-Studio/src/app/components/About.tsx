import { Award, Camera, Users } from "lucide-react";

const milestones = [
  { year: "2014", label: "Studio Founded" },
  { year: "2017", label: "First National Award" },
  { year: "2020", label: "500 Weddings Milestone" },
  { year: "2023", label: "International Recognition" },
];

const team = [
  {
    name: "Elena Vasquez",
    role: "Lead Photographer & Founder",
    image: "https://images.unsplash.com/photo-1570900721572-8328b624fca2?w=400&h=500&fit=crop&auto=format",
    bio: "12 years of capturing love stories across 3 continents.",
  },
  {
    name: "Marcus Chen",
    role: "Portrait & Commercial Director",
    image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=500&fit=crop&auto=format",
    bio: "Former editorial photographer for Vogue and Harper's Bazaar.",
  },
  {
    name: "Sofia Laurent",
    role: "Second Shooter & Editor",
    image: "https://images.unsplash.com/photo-1535579710123-3c0f261c474e?w=400&h=500&fit=crop&auto=format",
    bio: "Expert colorist and retoucher with a cinematic eye.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-32"
      style={{ background: "#06080f" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Top: story grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">
          {/* Left: text */}
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
                Our Story
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                fontWeight: 300,
                color: "#e8edf8",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "1.75rem",
              }}
            >
              A decade of{" "}
              <em style={{ fontStyle: "italic", color: "#4f9eff" }}>chasing light</em>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                color: "#8892a4",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Lumin Studio was born in 2014 from a simple obsession: light, emotion, and
              the fleeting instants that define who we are. Founded by Elena Vasquez in a
              converted warehouse in San Francisco, we've grown into a team of three
              passionate photographers who share one philosophy — every image should
              stop time.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                color: "#8892a4",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              From intimate elopements in Tuscany to Fortune 500 brand campaigns, our
              work has been featured in Vogue, The Knot, and exhibited at the San
              Francisco Museum of Modern Art. We believe that premium photography is not
              a luxury — it's a form of remembrance.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Award, label: "8× Award Winner" },
                { icon: Camera, label: "850+ Sessions" },
                { icon: Users, label: "3 Expert Photographers" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon size={16} color="#4f9eff" />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      color: "#8892a4",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with overlaid stats */}
          <div className="relative">
            <div
              className="overflow-hidden"
              style={{ borderRadius: "0.75rem", aspectRatio: "4/5" }}
            >
              <img
                src="https://images.unsplash.com/photo-1701027650719-26d223876edc?w=700&h=900&fit=crop&auto=format"
                alt="Elena Vasquez photographing a wedding couple"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.75) saturate(0.8)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(6,8,15,0.5) 100%)",
                }}
              />
            </div>

            {/* Glassmorphism stat card */}
            <div
              className="absolute -bottom-6 -left-6 px-6 py-5"
              style={{
                background: "rgba(13,18,32,0.85)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(79,158,255,0.2)",
                borderRadius: "0.75rem",
                minWidth: "180px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "2.5rem",
                  fontWeight: 400,
                  color: "#4f9eff",
                  lineHeight: 1,
                }}
              >
                10+
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  color: "#8892a4",
                  marginTop: "0.35rem",
                  textTransform: "uppercase",
                }}
              >
                Years of Excellence
              </div>
            </div>

            {/* Blue glow */}
            <div
              className="absolute"
              style={{
                top: "-40px",
                right: "-40px",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(79,158,255,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* Timeline */}
        <div
          className="mb-28 py-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative">
                {i < milestones.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-4 left-full w-full h-px"
                    style={{ background: "rgba(79,158,255,0.15)" }}
                  />
                )}
                <div
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    color: "#4f9eff",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {m.year}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "#8892a4",
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="flex items-center gap-3 mb-10">
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
              The Team
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.7) saturate(0.7)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(6,8,15,0.9) 100%)",
                    }}
                  />
                </div>
                <div className="p-5">
                  <div
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "#e8edf8",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      color: "#4f9eff",
                      marginTop: "0.25rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {member.role}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      color: "#8892a4",
                      marginTop: "0.6rem",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
