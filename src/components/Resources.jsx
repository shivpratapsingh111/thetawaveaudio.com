import { useState } from "react";

const categories = ["All", "YouTube", "Books", "Plugins"];

const resources = [
  // YouTube channels
  {
    category: "YouTube",
    title: "Dan Worrall",
    description:
      "Deep technical audio education — EQ behavior, phase relationships, loudness, and the science behind how audio tools actually work. Known for FabFilter tutorials.",
    link: "https://www.youtube.com/@DanWorrall",
    icon: "play_circle",
  },
  {
    category: "YouTube",
    title: "Produce Like A Pro",
    description:
      "Hosted by Warren Huart, covering recording, mixing, microphone placement, gear, and in-depth interviews with legendary producers and engineers.",
    link: "http://www.youtube.com/@Producelikeapro",
    icon: "play_circle",
  },
  {
    category: "YouTube",
    title: "White Sea Studio",
    description:
      "Run by Wytse Gerichhausen — mixing, mastering, plugin reviews, and honest gear evaluations with a straightforward, no-nonsense approach.",
    link: "https://www.youtube.com/@Whiteseastudio",
    icon: "play_circle",
  },
  {
    category: "YouTube",
    title: "SonicScoop",
    description:
      "Run by Justin Colletti — focused on developing listening skills and strong engineering fundamentals over 'magic plugins.'",
    link: "https://www.youtube.com/@SonicScoop",
    icon: "play_circle",
  },
  {
    category: "YouTube",
    title: "Studio Stuff Podcast",
    description:
      "Hosted by Chris Selim and Steve Dierkens — practical engineering knowledge with real-world studio conversation about recording, mixing, and plugins.",
    link: "https://www.youtube.com/@studiostuffpodcast",
    icon: "play_circle",
  },
  {
    category: "YouTube",
    title: "The House of Kush",
    description:
      "Run by Gregory Scott (UBK) of Kush Audio — deep philosophy behind mixing, emotional impact, and how engineers listen and make decisions.",
    link: "https://www.youtube.com/@TheHouseofKushTV",
    icon: "play_circle",
  },
  {
    category: "YouTube",
    title: "Studio Life",
    description:
      "Hosted by Sean and Dan — candid conversations about studio life, gear reviews, interviews with industry professionals, and building an audio career.",
    link: "https://www.youtube.com/@StudioLife101",
    icon: "play_circle",
  },
  {
    category: "YouTube",
    title: "Recording Studio Rockstars",
    description:
      "Nashville-based podcast by Lij Shaw featuring interviews with producers, engineers, and studio owners sharing real-world stories and tips.",
    link: "https://www.youtube.com/@RecordingStudioRockstars",
    icon: "play_circle",
  },
  {
    category: "YouTube",
    title: "Custom Cut Studios",
    description:
      "Run by Evan Jaffee — mix breakdowns, live mixing streams, and honest discussions about arrangement, workflows, and the mixing mindset.",
    link: "https://www.youtube.com/@customcutstudios",
    icon: "play_circle",
  },
  // Books
  {
    category: "Books",
    title: "The Mixing Engineer's Handbook",
    description:
      "By Bobby Owsinski — foundational book blending practical mixing techniques with interviews from legendary engineers like Chris Lord-Alge and Dave Pensado.",
    link: null,
    icon: "menu_book",
    author: "Bobby Owsinski",
  },
  {
    category: "Books",
    title: "Mixing Audio: Concepts, Practices, and Tools",
    description:
      "By Roey Izhaki — one of the most comprehensive textbooks on mixing, connecting techniques to psychoacoustics and human perception. Used in university audio programs.",
    link: null,
    icon: "menu_book",
    author: "Roey Izhaki",
  },
  {
    category: "Books",
    title: "Mixing with Impact",
    description:
      "By Wessel Oltheten — focuses on the decision-making process behind great mixes, encouraging engineers to think musically rather than just technically.",
    link: null,
    icon: "menu_book",
    author: "Wessel Oltheten",
  },
  // Plugins
  {
    category: "Plugins",
    title: "Plugin Alliance",
    description:
      "Professional audio marketplace partnering with brands like Brainworx, AMEK, Shadow Hills, and SPL. Known for detailed analog modeling including bx_console, HG-2, and AMEK EQ series.",
    link: "https://www.plugin-alliance.com/",
    icon: "extension",
  },
  {
    category: "Plugins",
    title: "Universal Audio (UA)",
    description:
      "Legendary audio company founded by Bill Putnam Sr. Known for meticulous emulations of the 1176, LA-2A, Ampex ATR-102, and more. Offers UAD hardware and native plugins.",
    link: "https://www.uaudio.com/",
    icon: "extension",
  },
];

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? resources
      : resources.filter((r) => r.category === activeFilter);

  return (
    <section className="py-32" id="resources">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Resources</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            Every engineer's journey is built on the shoulders of the people and tools that came
            before them. This is my curated collection of YouTube channels, books, and plugin
            companies that have shaped the way I think about recording and mixing.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeFilter === cat
                  ? "bg-primary text-background-dark"
                  : "glass hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource) => (
            <div
              key={resource.title}
              className="glass p-6 rounded-2xl glow-border transition-all group hover:border-primary/30"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-background-dark transition-all">
                  <span className="material-symbols-outlined text-2xl">{resource.icon}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {resource.category}
                  </span>
                  <h3 className="text-lg font-bold">{resource.title}</h3>
                  {resource.author && (
                    <p className="text-xs text-slate-500">by {resource.author}</p>
                  )}
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{resource.description}</p>
              {resource.link && (
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                >
                  Visit Channel{" "}
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
