export default function About() {
  return (
    <section className="py-32" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-purple/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 glass p-3 rounded-[2rem] transform -rotate-2">
              <img
                className="w-full rounded-[1.5rem] shadow-2xl"
                alt="Portrait of a professional audio engineer in a studio"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKLA0weMEx9HAzntFrQrXkuh69YKJBvL4jvo2Fy2NuLrrb_4Bf0Rr8uCx9T7zey_6jXnOG1yMjAgcWseAFrcjCs90iAb1Ui3SYxvoXmz4LBfmi2vAz77Sb106j9ISxrwNhyA6jkIyN4wphp5bJJrrZJTRSwEaWvu3nFnYFOpVhY4q4H-_TgJz9ZAbm3ULBrmonI6lUhDovupIMBvsViTa4ZtJi2KwXjvEwmmZp8wgVCSI_3hEeGybqpfROxbOf1VFFwIGfVHggwJg3"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-xl border-primary/20 z-20">
              <p className="text-3xl font-black text-primary">15+</p>
              <p className="text-[10px] font-bold uppercase text-slate-400">Years Experience</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Artists first, <br />
              <span className="text-primary">Egos last.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Founded by multi-instrumentalist and engineer Leo Thorne, Theta Wave Audio was built on a simple principle: your music deserves the same sonic landscape as the world's biggest stars.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We don't just "mix" tracks; we build immersive audio experiences. We listen to your story, your inspirations, and your sonic goals before we ever touch a fader.
            </p>
            <div className="flex items-center gap-12">
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Satisfied Artists</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1.2k</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Tracks Polished</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Happy Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
