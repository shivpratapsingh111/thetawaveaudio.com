const filters = ["All", "Cinematic", "Electronic", "Pop/RnB"];

const items = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpC3v-PruKYckXS2amL-XJse45iIDy_9Y0GmBAYUm7KrkuBm-8EeJgXi-TFLe9zMrecpvX7X8xkRQ4LBDOYzb_KxiqsTNuU6Voz-wePTxi77Arp1ybYgIcp2j-VSA8QpBdxkEUj-TfbM2399ThrlX4MaIT6uON6OuHkLKjPA5jhrPgTjmx6HdBliRZtim6JOyGTVvZo7NhtYOEbBuJgOUwiVsqh3J82vxJaVf7yyXkPcy_ryEEAZH9tnUIontyBklQaSk-eLJomu5-",
    alt: "Dark aesthetic concert DJ",
    genre: "Electronic",
    title: "Glitch Heart",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPIQsFaShg7eoypVs-ERZjC45d9nJ4mfpUJxJtZQQ9ukWZuzgXGGzuS_SahlmXDlev7xT43-eONGaLor9PPrKHua1JnTmgbAcKYwHCPiB0ipr1UhQftj_P_uobi8L0NESsNMoZAybK_BiJ_R0qvYOVxO22gpMjzDUpUBGSU4j7xv3YlntEg19p8nSbNkqkUegKWE4MliuC65lUUisJ0JtlursZVwncn5aPs4JH5G48vvMeNH4V8-CjxAgiW4767u6erewtKm6te7PC",
    alt: "Vocalist recording in a modern booth",
    genre: "RnB",
    title: "Velvet Soul",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMoWE8wRtAChzucgXRF0fSEzo6RWdiDGcaqXgCXs4IyK_gK5ycpowMSXzxoLMDK1COBxdg0YEKyYsRs284sYRJKK9tBOrfN4pvJn4mArGiKJ6kV7HggI8kdjrWEyqnz30kUFsbFnY72-BdFdQqAeDsQJH9GzSCAQJBwRIpHPR7rfXFIJaM0z2k2b6km8bVc0AxCTlCCLKLCGXuwwBqN99gi7ERQvd620xlS-jvDQZNFNyEjer0pNFLS1p6iPzsLfiBL1GxKaApCaRB",
    alt: "Dramatic stage lighting for pop performance",
    genre: "Pop",
    title: "Neon Skyline",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3IXXhj-UJXig96kJynZyrEiw7U7DmZPp1CFHcJAJeonQbnPf3gazSa1pxqwfOuVMnpTg3ottvVKZr0P4Osng_wCasA5ZagmuVTsqGVssx9_9aw-T06f5rF0TRllf-sq4DOg6rVDwY9LbO_nYsFOMhkIa2SWks_DVyjB5O29Sz2xqfHLzqiTkpPRQ7yhPBlphVBIUlj__-OkmRTel3h8PWsxHdG3tMwU7vL1gKmlWIUM14CkSGYqdpRKeiYpCWrmp9lhpRKq1Hdel_",
    alt: "Epic orchestral session",
    genre: "Cinematic",
    title: "Aetheris",
  },
];

export default function Portfolio() {
  return (
    <section className="py-32 glass border-y border-primary/10" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Discography</h2>
            <p className="text-slate-400">A collection of tracks that hit the billboard and the heart.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={
                  i === 0
                    ? "px-5 py-2 rounded-full bg-primary text-background-dark text-xs font-bold uppercase tracking-widest"
                    : "px-5 py-2 rounded-full glass text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.title} className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={item.alt}
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{item.genre}</p>
                <h5 className="font-bold leading-tight">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
