export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/80 to-background-dark"></div>
        <img
          className="w-full h-full object-cover opacity-40 scale-105"
          alt="Abstract cinematic mixing console in a dark studio"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK_8VzoDvcwOL0rpir3Ouj02nG_CT9j5JVAaLgid_ZiCaO2fuyx5g31EsWAKHdk8X8NXQS41_B2DCztoQMH1tg0uYkPA5pmmmpth-rGAvZ3UHnuad963pd9xqPWUIWXyAoSJqb-ICM-N6dLiCmHQ3L0oClDqGdVBkWMbn_1pGY2Q5-yAcOAVvgNqfswmf1l_eDU0EkXT3L5RqrnAUlFSvRqOvHkAyFl4cJHu97ryqGljEu9LaxLP_zo7y2-_HTiAuG-xA78YkzRYJG"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Now accepting new projects
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
          Professional mixes for artists who want their songs to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
            compete
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Mixing engineer Cory Miller brings clarity, balance, and life to rock, hip-hop, and indie music — working with artists from every corner of the world.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-primary text-background-dark px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,238,255,0.4)] transition-all">
            Book Your Mix
          </button>
          <button className="w-full sm:w-auto glass border-white/10 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">play_circle</span>
            Hear the Difference
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
}
