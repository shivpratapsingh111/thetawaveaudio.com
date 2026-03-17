export default function FinalCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-[#00c2cf] to-accent-purple p-1 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,238,255,0.2)]">
          <div className="bg-background-dark rounded-[1.4rem] px-10 py-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 waveform-bg"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Ready to take your track to a <span className="text-primary">professional</span> level?
              </h2>
              <p className="text-slate-400 mb-12 text-lg">
                Limited slots available for this month. Get a custom quote for your project in under 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-primary text-background-dark px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,238,255,0.4)] transition-all">
                  Start Your Project
                </button>
                <button className="w-full sm:w-auto glass px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
