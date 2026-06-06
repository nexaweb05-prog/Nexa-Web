import { Camera, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const footerLinks = {
  Services: [
    "Wedding Photography",
    "Portrait Sessions",
    "Commercial Photography",
    "Event Coverage",
  ],
  Studio: ["About Us", "Our Team", "Portfolio", "Awards & Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer
      style={{
        background: "#030510",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #4f9eff 0%, #1e40af 100%)",
                }}
              >
                <Camera size={16} color="#fff" />
              </div>
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  color: "#e8edf8",
                  letterSpacing: "-0.01em",
                }}
              >
                Lumin<span style={{ color: "#4f9eff" }}>.</span>
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                color: "#8892a4",
                lineHeight: 1.75,
                maxWidth: "300px",
                marginBottom: "1.5rem",
              }}
            >
              Award-winning photography studio based in San Francisco. Capturing
              love stories, brands, and moments that deserve to last forever.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 transition-all duration-200"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#8892a4",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,158,255,0.35)";
                    (e.currentTarget as HTMLElement).style.color = "#4f9eff";
                    (e.currentTarget as HTMLElement).style.background = "rgba(79,158,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#8892a4";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.16em",
                  color: "#4f9eff",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                {group}
              </div>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "#8892a4",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#e8edf8")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8892a4")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#4f4f6a",
            }}
          >
            © {new Date().getFullYear()} Lumin Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4f9eff",
                boxShadow: "0 0 8px rgba(79,158,255,0.6)",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: "#4f4f6a",
                textTransform: "uppercase",
              }}
            >
              San Francisco · CA · Est. 2014
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#4f4f6a",
            }}
          >
            hello@luminstudio.com · +1 (415) 555 0192
          </p>
        </div>
      </div>
    </footer>
  );
}
