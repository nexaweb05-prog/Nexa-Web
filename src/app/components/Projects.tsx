import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  palette: {
    bg: string;
    accent: string;
    text: string;
    badge: string;
    badgeText: string;
  };
  href: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Lumin Studio",
    category: "Fotografía Profesional",
    description: "Portafolio elegante con galería interactiva y estética oscura premium.",
    image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800&h=500&fit=crop&auto=format",
    palette: {
      bg: "#111111",
      accent: "#c9a96e",
      text: "#ffffff",
      badge: "rgba(201,169,110,0.15)",
      badgeText: "#c9a96e",
    },
    href: "/Portafolio/Lumin-Studio/index.html",
  },
  {
    id: 2,
    name: "Apex Barbershop",
    category: "Barbería Moderna",
    description: "Sitio de reservas en línea con identidad visual negro y dorado.",
    image: "https://images.unsplash.com/photo-1675599193990-33d71150902b?w=800&h=500&fit=crop&auto=format",
    palette: {
      bg: "#1a1108",
      accent: "#d4a017",
      text: "#ffffff",
      badge: "rgba(212,160,23,0.15)",
      badgeText: "#d4a017",
    },
    href: "#",
  },
  {
    id: 3,
    name: "Nova Fitness",
    category: "Gimnasio & Entrenamiento",
    description: "Plataforma de membresías con diseño enérgico y llamada a la acción potente.",
    image: "https://images.unsplash.com/photo-1603665409265-bdc00027c217?w=800&h=500&fit=crop&auto=format",
    palette: {
      bg: "#1a0505",
      accent: "#ef4444",
      text: "#ffffff",
      badge: "rgba(239,68,68,0.15)",
      badgeText: "#ef4444",
    },
    href: "#",
  },
  {
    id: 4,
    name: "Café del Mar",
    category: "Restaurante & Gastronomía",
    description: "Menú digital y reservas con paleta natural, cálida y acogedora.",
    image: "https://images.unsplash.com/photo-1631465257929-ad9cb7069859?w=800&h=500&fit=crop&auto=format",
    palette: {
      bg: "#0d1a0e",
      accent: "#6aab5e",
      text: "#f5f0e8",
      badge: "rgba(106,171,94,0.15)",
      badgeText: "#6aab5e",
    },
    href: "#",
  },
  {
    id: 5,
    name: "Orion Group",
    category: "Empresa Corporativa",
    description: "Presencia digital institucional con diseño limpio, azul y confiable.",
    image: "https://images.unsplash.com/photo-1501501753674-3cc5ea1bc1ff?w=800&h=500&fit=crop&auto=format",
    palette: {
      bg: "#0a1628",
      accent: "#3B82F6",
      text: "#ffffff",
      badge: "rgba(59,130,246,0.15)",
      badgeText: "#93c5fd",
    },
    href: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image area */}
      <div className="relative overflow-hidden aspect-[16/10]" style={{ backgroundColor: project.palette.bg }}>
        <img
          src={project.image}
          alt={`Proyecto ${project.name}`}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border"
            style={{
              backgroundColor: project.palette.badge,
              color: project.palette.badgeText,
              borderColor: `${project.palette.accent}30`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Hover: Ver Proyecto button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
          >
            Ver Proyecto <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">{project.description}</p>
        </div>
        <a
          href={project.href}
          className="flex-shrink-0 ml-4 w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-transparent transition-all duration-200 group-hover:scale-110"
          style={{ "--hover-bg": "var(--nexa-blue)" } as React.CSSProperties}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--nexa-blue)";
            (e.currentTarget as HTMLElement).style.color = "#fff";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "";
            (e.currentTarget as HTMLElement).style.color = "";
          }}
          aria-label={`Ver proyecto ${project.name}`}
        >
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="py-24 lg:py-32" style={{ backgroundColor: "var(--nexa-section-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--nexa-blue)" }}
            >
              Portafolio
            </span>
            <h2
              className="mt-3 text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Proyectos destacados
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Cada negocio necesita una identidad digital diferente.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white px-4 py-2.5 rounded-full border border-black/8 shadow-sm w-fit">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#22c55e" }}
            />
            {projects.length} proyectos completados
          </div>
        </div>

        {/* Grid: 2 columns desktop, 1 mobile. First card spans 2 cols on large */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured: first two side by side spanning 2 cols */}
          <div className="md:col-span-2 lg:col-span-2">
            <ProjectCard project={projects[0]} />
          </div>
          <div>
            <ProjectCard project={projects[1]} />
          </div>
          <div>
            <ProjectCard project={projects[2]} />
          </div>
          <div>
            <ProjectCard project={projects[3]} />
          </div>
          <div>
            <ProjectCard project={projects[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
