const photos = [
  {
    src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop&auto=format",
    alt: "Adoración congregacional",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1579975096649-e773152b04cb?w=600&h=400&fit=crop&auto=format",
    alt: "Servicio de jóvenes",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1761258779622-454cbecb2006?w=600&h=400&fit=crop&auto=format",
    alt: "Interior de la iglesia",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?w=600&h=400&fit=crop&auto=format",
    alt: "Congregación en actividad",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1778911033724-77e1397a1b87?w=600&h=400&fit=crop&auto=format",
    alt: "Niños en el servicio",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1762967033307-3eae0a87f1be?w=600&h=400&fit=crop&auto=format",
    alt: "Cruz en el santuario",
    span: "",
  },
];

export function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[#2563EB] text-xs tracking-widest uppercase font-medium mb-4">
            Galería
          </p>
          <h2
            className="text-[#0f172a]"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Momentos en Comunidad
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-[#dbeafe] group ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
