const steps = [
  { icon: "upload_file", title: "Send Tracks", description: "Upload your stems via our secure portal." },
  { icon: "visibility", title: "Review", description: "We analyze your project and vision." },
  { icon: "blur_on", title: "The Mix", description: "The sonic magic happens in our studio.", active: true },
  { icon: "edit_note", title: "Revisions", description: "Fine-tune until you are 100% happy." },
  { icon: "verified_user", title: "Delivery", description: "High-res masters ready for distribution." },
];

export default function Process() {
  return (
    <section className="py-32" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">The Workflow</h2>
          <p className="text-slate-400">Streamlined, digital-first, and completely transparent.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-4 relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10 z-0"></div>
          {steps.map((step) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center text-center group">
              <div
                className={
                  step.active
                    ? "w-20 h-20 rounded-full bg-primary border-4 border-primary/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,238,255,0.3)]"
                    : "w-20 h-20 rounded-full bg-background-dark border-4 border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary transition-colors"
                }
              >
                <span className={`material-symbols-outlined ${step.active ? "text-background-dark" : "text-primary"}`}>
                  {step.icon}
                </span>
              </div>
              <h4 className="font-bold mb-2">{step.title}</h4>
              <p className="text-xs text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
