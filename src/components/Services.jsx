const services = [
  {
    icon: "equalizer",
    iconBg: "bg-primary/20",
    iconHover: "group-hover:bg-primary group-hover:text-background-dark",
    title: "Mixing Services",
    price: "$300",
    priceNote: "per song",
    description:
      "Elevate your music with a polished, professional mix that enhances clarity, impact, and emotional connection. Perfect for band productions, singer-songwriters, hip-hop, electronic projects, and more.",
    features: [
      { text: "Full professional mix", color: "text-primary" },
      { text: "2 free mix revisions included", color: "text-primary" },
      { text: "Streaming-ready delivery", color: "text-primary" },
      { text: "$150 deposit required (non-refundable)", color: "text-primary" },
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
    price: "10% Off",
    priceNote: "8+ songs",
    description:
      "Consistency is key for your LP or EP. Submit 8 or more songs and receive a 10% discount on the full project. Get a sonically unified sound across your entire release.",
    features: [
      { text: "Sonically unified sound across tracks", color: "text-accent-purple" },
      { text: "10% discount on 8+ songs", color: "text-accent-purple" },
      { text: "2 free revisions per song", color: "text-accent-purple" },
      { text: "Streaming-ready delivery", color: "text-accent-purple" },
    ],
    linkText: "Claim Offer",
    linkColor: "text-accent-purple",
    badge: "Best Value",
    cardExtra: "border-primary/40",
  },
  {
    icon: "edit_note",
    iconBg: "bg-primary/20",
    iconHover: "group-hover:bg-primary group-hover:text-background-dark",
    title: "Additional Mix Revision",
    price: "$50",
    priceNote: "per revision",
    description:
      "Need more fine-tuning beyond your 2 included revisions? Additional revisions are available per song. Payment is required before any revision work begins.",
    features: [
      { text: "Available after 2 included revisions", color: "text-primary" },
      { text: "Per-song revision pricing", color: "text-primary" },
      { text: "Payment required upfront", color: "text-primary" },
      { text: "Non-refundable", color: "text-primary" },
    ],
    linkText: "Add Revision",
    linkColor: "text-primary",
    badge: "Sale",
    cardExtra: "",
  },
];

const steps = [
  {
    number: "1",
    title: "The Deposit",
    description:
      "This nonrefundable deposit is required in order to book your mix. Add 1 item per song you are booking. Full album submissions (8+ songs) automatically apply a 10% discount.",
  },
  {
    number: "2",
    title: "Additional Mix Revisions",
    description:
      "Each song includes 2 full mix revisions at no additional cost. For any additional revisions, add an item to the cart. Additional revisions will not be started until payment is received.",
  },
  {
    number: "3",
    title: "The Final Invoice",
    description:
      "Once your final mix or mixes are approved, final payment will be made before any final mix files are made available.",
  },
];

export default function Services() {
  return (
    <section className="py-32 relative" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mixing <span className="text-primary">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Experience professional sound mixing that brings out the best in your music. Blending instruments, vocals, and effects to achieve a cohesive, high-quality sound tailored to your vision.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">info</span>
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="glass p-8 rounded-2xl relative">
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-primary text-background-dark flex items-center justify-center font-black text-lg">
                  {step.number}
                </div>
                <h4 className="text-lg font-bold mt-2 mb-3 uppercase tracking-wide">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Album Discount Banner */}
        <div className="mb-12 bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-4xl">discount</span>
            <div>
              <h4 className="text-xl font-bold">Full Album Discount</h4>
              <p className="text-slate-400 text-sm">Submit 8+ songs and receive 10% off your entire project</p>
            </div>
          </div>
          <div className="text-3xl font-black text-primary">10% OFF</div>
        </div>

        {/* Service Cards */}
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
              <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-black text-primary">{service.price}</span>
                <span className="text-sm text-slate-500">{service.priceNote}</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">{service.description}</p>
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
                href="#contact"
              >
                {service.linkText} <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>

        {/* Policies */}
        <div className="mt-20 glass p-10 rounded-2xl">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">policy</span>
            Policies
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-3">Refund / Cancellation Policy</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mixing is a time-intensive creative service. If you are not satisfied and choose to cancel before approving a final mix, a refund may be considered. Refund amounts are at the sole discretion of Theta Wave Audio and will be based on work completed. Once a final mix is approved, payment received, and final files delivered, refunds are no longer available.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-3">Anti-Theft Protection</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mixes sent for review and approval may be submitted as .mp3 and/or contain brief silence, audible watermarks, or noise artifacts. These are temporary and removed once the project is finalized and paid in full. This ensures creative work and intellectual property remain secure throughout the approval process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
