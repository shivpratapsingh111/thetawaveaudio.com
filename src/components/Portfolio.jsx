const tracks = [
  {
    title: "Kraazed — Beyond That",
    artist: "Kraazed",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thetawaveaudio/kraazed-beyondthat&color=%2300eeff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    scUrl: "https://soundcloud.com/thetawaveaudio/kraazed-beyondthat",
  },
  {
    title: "Kraazed — Live On",
    artist: "Kraazed",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thetawaveaudio/kraazed-liveon&color=%2300eeff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    scUrl: "https://soundcloud.com/thetawaveaudio/kraazed-liveon",
  },
  {
    title: "Kraazed — Rubix Cube",
    artist: "Kraazed",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thetawaveaudio/kraazed-rubixcube&color=%2300eeff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    scUrl: "https://soundcloud.com/thetawaveaudio/kraazed-rubixcube",
  },
  {
    title: "Kraazed — Serenity",
    artist: "Kraazed",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thetawaveaudio/kraazed-serenity&color=%2300eeff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    scUrl: "https://soundcloud.com/thetawaveaudio/kraazed-serenity",
  },
];

export default function Portfolio() {
  return (
    <section className="py-32 glass border-y border-primary/10" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Listen to real mixes completed by Theta Wave Audio. More coming soon.
            </p>
          </div>
          <a
            href="https://soundcloud.com/thetawaveaudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-bold text-sm hover:underline shrink-0"
          >
            <span className="material-symbols-outlined">cloud</span>
            View all on SoundCloud
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>

        {/* SoundCloud Embeds */}
        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="glass p-6 rounded-2xl glow-border group hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">music_note</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">{track.title}</h4>
                  <p className="text-xs text-slate-500">Mixed by Cory Miller</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={track.embedUrl}
                  title={track.title}
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* More Coming Soon */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
              More projects coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
