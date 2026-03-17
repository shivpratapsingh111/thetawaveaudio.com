const brands = [
  { icon: "album", name: "RECORD.CO", color: "text-primary" },
  { icon: "bolt", name: "SONIC LABS", color: "text-accent-purple" },
  { icon: "graphic_eq", name: "WAVEFORM", color: "text-primary" },
  { icon: "music_note", name: "INDIE HUB", color: "text-accent-purple" },
];

export default function TrustStrip() {
  return (
    <section className="py-12 glass border-y border-primary/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-slate-500 mb-10">
          Trusted by artists &amp; labels worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center gap-2 text-2xl font-bold italic">
              <span className={`material-symbols-outlined ${brand.color}`}>{brand.icon}</span>
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
