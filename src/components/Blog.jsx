const posts = [
  {
    title: "Compression for Beginners Part 2: FET",
    excerpt:
      "FET compression is where things start to click for a lot of people, because it moves compression out of the purely 'technical' category and into something you can actually hear shaping a mix.",
    date: "Mar 17, 2026",
    readTime: "7 min",
    category: "Mixing Tutorials",
    views: 7,
  },
  {
    title: "A Beginners Guide to Compression",
    excerpt:
      "Compression is one of the most powerful tools in mixing — and also one of the most misunderstood. At its core, compression is automatic volume control.",
    date: "Mar 7, 2026",
    readTime: "4 min",
    category: "Mixing Tutorials",
    views: 26,
  },
  {
    title: "Preparing Multitracks: How to Send Files to a Mixing Engineer",
    excerpt:
      "One of the most overlooked parts of the mixing process happens before the mix even begins. File preparation. No amount of skill can fully overcome poorly prepared multitracks.",
    date: "Feb 28, 2026",
    readTime: "3 min",
    category: "Mixing Tutorials",
    views: 9,
  },
  {
    title: "The Mixing Process: What Happens After You Send Your Song",
    excerpt:
      "For many artists, sending a song to a mixing engineer can feel like handing your work to a black box. Professional mixing is a deliberate, multi-stage process.",
    date: "Feb 28, 2026",
    readTime: "4 min",
    category: "Mixing Tutorials",
    views: 8,
  },
  {
    title: "Why Your Rough Mix Sounds Better Than Your Final Mix",
    excerpt:
      "Every song begins with a rough mix. But rough mixes can create an unexpected problem — they begin to shape your expectations in ways that can make achieving a truly professional mix harder.",
    date: "Feb 27, 2026",
    readTime: "3 min",
    category: "Mixing Tutorials",
    views: 15,
  },
  {
    title: "Why I Use a Template (And Why You Probably Should Too)",
    excerpt:
      "Opening a completely blank session every time feels noble. It also wastes mental energy on decisions you've already made 100 times before.",
    date: "Feb 25, 2026",
    readTime: "8 min",
    category: "Mixing Tutorials",
    views: 47,
  },
  {
    title: "Clip Gain vs. Fader Gain: Why Where You Turn It Up Matters",
    excerpt:
      "Clip gain and fader gain may both change level, but they do it at different points in the signal flow — and that difference fundamentally changes how your mix behaves.",
    date: "Feb 24, 2026",
    readTime: "4 min",
    category: "Mixing Tutorials",
    views: 13,
  },
  {
    title: "Mixing the iPhone Recording",
    excerpt:
      "Projects built around phone-mic vocal recordings will not be accepted. This is not about ego. It's about professional standards, time investment, and reputation risk.",
    date: "Feb 22, 2026",
    readTime: "3 min",
    category: "The Water Cooler",
    views: 11,
  },
  {
    title: "Master Bus Architecture: What the Pros Actually Do",
    excerpt:
      "The master bus is not where you fix your mix. It's where you finalize intent. Elite mixers use it to refine density, tone, and translation with intention.",
    date: "Feb 22, 2026",
    readTime: "4 min",
    category: "Mixing Tutorials",
    views: 13,
  },
  {
    title: "Arrangement vs Mixing",
    excerpt:
      "If your mix sounds muddy, small, or flat — it's probably not your EQ. It's your arrangement. You can't mix clutter into clarity.",
    date: "Feb 19, 2026",
    readTime: "3 min",
    category: "Mixing Tutorials",
    views: 19,
  },
  {
    title: "Can't We All Just Get Along?",
    excerpt:
      "Spend five minutes on Instagram or Reddit inside the 'audio engineering' world and you'll see it. A little ball-busting? Fair game. But cruelty dressed up as expertise? That's not engineering.",
    date: "Feb 18, 2026",
    readTime: "2 min",
    category: "The Water Cooler",
    views: 36,
  },
  {
    title: "Plugin Addiction",
    excerpt:
      "As of writing this, I have 1,992 plugins installed on my system. When I think about that number, I realize it's about 1,982 more than I actually need.",
    date: "Dec 10, 2025",
    readTime: "3 min",
    category: "The Water Cooler",
    views: 69,
  },
  {
    title: "How to Build a Better Mix: Start with a Solid Static Mix",
    excerpt:
      "The static mix — it's the foundation of everything that follows. If the static mix is solid, your processing choices become easier and your mix translates better.",
    date: "Dec 5, 2025",
    readTime: "3 min",
    category: "Mixing Tutorials",
    views: 51,
  },
];

const categoryColors = {
  "Mixing Tutorials": "bg-primary/10 text-primary",
  "The Water Cooler": "bg-accent-purple/10 text-accent-purple",
};

export default function Blog() {
  return (
    <section className="py-32 glass border-y border-primary/10" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Blog</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Mixing tutorials, studio stories, and honest takes on the craft — all written by Cory
              Miller.
            </p>
          </div>
          <p className="text-sm text-slate-500 font-bold">{posts.length} posts</p>
        </div>

        {/* Featured Post */}
        <div className="glass p-8 md:p-10 rounded-2xl mb-8 glow-border group">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${categoryColors[posts[0].category]}`}
                >
                  {posts[0].category}
                </span>
                <span className="text-xs text-slate-500">{posts[0].date}</span>
                <span className="text-xs text-slate-500">{posts[0].readTime} read</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {posts[0].title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{posts[0].excerpt}</p>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm shrink-0">
              <span className="material-symbols-outlined text-sm">visibility</span>
              {posts[0].views} views
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <article
              key={post.title}
              className="glass p-6 rounded-2xl group hover:border-primary/20 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    categoryColors[post.category] || "bg-white/10 text-white"
                  }`}
                >
                  {post.category}
                </span>
              </div>
              <h4 className="font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">visibility</span>
                  {post.views}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
