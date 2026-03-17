const waveformBars = [
  { h: "h-4", o: "bg-primary/20" },
  { h: "h-8", o: "bg-primary/30" },
  { h: "h-12", o: "bg-primary/40" },
  { h: "h-10", o: "bg-primary/60" },
  { h: "h-14", o: "bg-primary", glow: true },
  { h: "h-8", o: "bg-primary" },
  { h: "h-16", o: "bg-primary", glow: true },
  { h: "h-12", o: "bg-primary/80" },
  { h: "h-6", o: "bg-primary/60" },
  { h: "h-10", o: "bg-primary/40" },
  { h: "h-14", o: "bg-primary/20" },
  { h: "h-8", o: "bg-primary/30" },
  { h: "h-4", o: "bg-primary/40" },
  { h: "h-12", o: "bg-primary/50" },
  { h: "h-10", o: "bg-primary/70" },
  { h: "h-16", o: "bg-primary/90", glow: true },
  { h: "h-12", o: "bg-primary/80" },
  { h: "h-8", o: "bg-primary/60" },
  { h: "h-14", o: "bg-primary/40" },
  { h: "h-10", o: "bg-primary/30" },
  { h: "h-6", o: "bg-primary/20" },
  { h: "h-12", o: "bg-primary/30" },
  { h: "h-4", o: "bg-primary/40" },
  { h: "h-14", o: "bg-primary/60" },
  { h: "h-16", o: "bg-primary", glow: true },
  { h: "h-10", o: "bg-primary/80" },
  { h: "h-12", o: "bg-primary/50" },
];

export default function AudioPlayer() {
  return (
    <section className="py-24 bg-surface-dark relative overflow-hidden">
      <div className="waveform-bg absolute inset-0 opacity-20"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear the Transformation</h2>
          <p className="text-slate-400">Toggle between the rough home demo and the Theta Wave final master.</p>
        </div>
        <div className="glass p-10 rounded-3xl border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="relative group">
              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  alt="Cyberpunk style album cover art"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPBprELBQAtyfcu8nEFFXYlQb9A1k9ke98KVAYdsrV-pcTt3_SOwrHrKJMHW7CtA7Nk5KmGXkMEasaiuTSGX3U6iGAbuDy4Kk3X3Kq2WJ6v5hSEd_YO-KKjsKZPpbfDSXHVTYZQoz3DvNoFJwN1-m_DhWC43X0xQJMl43Wdb4hlJcMmCWjvi-OMM_hhaLVrFZXaRZzq8-o19vw59gCYgUrj4ElgeQ_WMm8GcUTKECeBf663tT24Fwjk7BTj91RR8BIGJBZQ6BQBER3"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="material-symbols-outlined text-6xl text-background-dark">play_arrow</span>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold mb-1">Neon Afterglow</h4>
              <p className="text-primary font-medium mb-4">Synthetic Dreams (Single)</p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Demo</span>
                <div className="w-24 h-6 bg-slate-800 rounded-full relative p-1 cursor-pointer">
                  <div className="absolute right-1 top-1 bottom-1 left-12 bg-primary rounded-full transition-all"></div>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Mixed</span>
              </div>
            </div>
          </div>
          <div className="space-y-1 mb-6">
            <div className="flex items-end justify-between gap-1 h-16">
              {waveformBars.map((bar, i) => (
                <div
                  key={i}
                  className={`w-1 ${bar.o} ${bar.h} rounded-full${bar.glow ? " shadow-[0_0_10px_rgba(0,238,255,0.8)]" : ""}`}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>01:42</span>
            <span>03:45</span>
          </div>
        </div>
      </div>
    </section>
  );
}
