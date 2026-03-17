const services = [
  {
    icon: "equalizer",
    iconBg: "bg-primary/20",
    iconHover: "group-hover:bg-primary group-hover:text-background-dark",
    title: "Professional Mixing",
    description: "Full multi-track mixing including vocal tuning, drum replacement, and analog summing for that classic warmth.",
    features: [
      { text: "Industry Standard EQ/Comp", color: "text-primary" },
      { text: "Creative FX Design", color: "text-primary" },
      { text: "Unlimited Revisions", color: "text-primary" },
    ],
    linkText: "Get Started",
    linkColor: "text-primary",
    badge: null,
    cardExtra: "",
  },
  {
    icon: "library_music",
    iconBg: "bg-accent-purple/20",
    iconHover: "group-hover:bg-accent-purple group-hover:text-white",
    title: "Full Album Package",
    description: "Consistency is key for your LP or EP. We offer significant discounts for bulk project commitments.",
    features: [
      { text: "Sonically Unified Sound", color: "text-accent-purple" },
      { text: "25% Project Discount", color: "text-accent-purple" },
      { text: "Dedicated Project Lead", color: "text-accent-purple" },
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
    description: "Not ready for a full mix? Get expert feedback on your production and DIY mixes to hit that professional edge.",
    features: [
      { text: "60-min Deep Dive", color: "text-primary" },
      { text: "Actionable Gear Lists", color: "text-primary" },
      { text: "Post-session Report", color: "text-primary" },
    ],
    linkText: "Book Session",
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
