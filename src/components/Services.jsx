const services = [
  {
    icon: "equalizer",
    iconBg: "bg-primary/20",
    iconHover: "group-hover:bg-primary group-hover:text-background-dark",
    title: "Professional Mixing",
    description: "Experience professional sound mixing that brings out the best in your music. Blending instruments, vocals, and effects to achieve a cohesive, high-quality sound tailored to your vision.",
    features: [
      { text: "$150 Deposit to Get Started", color: "text-primary" },
      { text: "All Genres Welcome", color: "text-primary" },
      { text: "Revision Rounds Included", color: "text-primary" },
    ],
    linkText: "Book Your Mix",
    linkColor: "text-primary",
    badge: null,
    cardExtra: "",
  },
  {
    icon: "library_music",
    iconBg: "bg-accent-purple/20",
    iconHover: "group-hover:bg-accent-purple group-hover:text-white",
    title: "Full Album Package",
    description: "Consistency is key for your LP or EP. Get a sonically unified sound across your entire project with a dedicated discount for 8+ tracks.",
    features: [
      { text: "Sonically Unified Sound", color: "text-accent-purple" },
      { text: "10% Discount (8+ Tracks)", color: "text-accent-purple" },
      { text: "Priority Scheduling", color: "text-accent-purple" },
    ],
    linkText: "Claim Offer",
    linkColor: "text-accent-purple",
    badge: "Best Value",
    cardExtra: "border-primary/40",
  },
  {
    icon: "forum",
    iconBg: "bg-primary/20",
    iconHover: "group-hover:bg-primary group-hover:text-background-dark",
    title: "Mix Consultation",
    description: "Not ready for a full mix? Get expert feedback on your production and DIY mixes. I'm always happy to help clarify anything you're unsure about.",
    features: [
      { text: "Detailed Mix Feedback", color: "text-primary" },
      { text: "Actionable Improvements", color: "text-primary" },
      { text: "No Commitment Required", color: "text-primary" },
    ],
    linkText: "Get in Touch",
    linkColor: "text-primary",
    badge: null,
    cardExtra: "",
  },
];

export default function Services() {
  return (
    <section className="py-32 relative" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Premium <span className="text-primary">Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Tailored audio solutions designed to take your raw recordings to commercial-ready masterpieces.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`glass p-8 rounded-2xl glow-border transition-all group relative ${service.cardExtra}`}
            >
              {service.badge && (
                <div className="absolute -top-4 right-8 bg-primary text-background-dark text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  {service.badge}
                </div>
              )}
              <div
                className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 ${service.iconHover} transition-all`}
              >
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                {service.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-2">
                    <span className={`material-symbols-outlined ${feature.color} text-sm`}>check_circle</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <a
                className={`${service.linkColor} font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform`}
                href="#"
              >
                {service.linkText} <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
