const stats = [
  { icon: "public", value: "Worldwide", label: "Artists Served" },
  { icon: "album", value: "Rock", label: "Hip-Hop \u00B7 Indie" },
  { icon: "verified", value: "$150", label: "Deposit to Start" },
  { icon: "discount", value: "10% Off", label: "Albums (8+ Tracks)" },
];

export default function TrustStrip() {
  return (
    <section className="py-12 glass border-y border-primary/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-slate-500 mb-10">
          Nashville-based mixing engineer working with artists worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {stats.map((stat) => (
            <div key={stat.value} className="flex items-center gap-3 text-center">
              <span className="material-symbols-outlined text-primary text-2xl">{stat.icon}</span>
              <div>
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
