import { useState } from "react";

const referralSources = ["Instagram", "Reddit", "Threads", "Youtube", "Other"];
const topics = [
  "Mixing Services",
  "Full Album Package",
  "Mix Consultation",
  "General Question",
  "Collaboration",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    hearAbout: [],
    topic: "",
    message: "",
  });

  const toggleSource = (source) => {
    setForm((prev) => ({
      ...prev,
      hearAbout: prev.hearAbout.includes(source)
        ? prev.hearAbout.filter((s) => s !== source)
        : [...prev.hearAbout, source],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.topic || "Inquiry"}] from ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nCompany: ${form.company || "N/A"}\nHow they heard about TWA: ${form.hearAbout.join(", ") || "N/A"}\nTopic: ${form.topic || "N/A"}\n\n${form.message}`
    );
    window.location.href = `mailto:contact@thetawaveaudio.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-32 relative" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            For any inquiries, collaborations, or questions, feel free to reach out. Your message is
            important and will be responded to promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-bold text-lg mb-6">Connect</h3>
              <ul className="space-y-5">
                <li>
                  <a
                    href="https://www.instagram.com/theta_wave_audio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-400 hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-all">
                      <span className="material-symbols-outlined text-lg">photo_camera</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Instagram</p>
                      <p className="text-xs">@theta_wave_audio</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://soundcloud.com/thetawaveaudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-400 hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-all">
                      <span className="material-symbols-outlined text-lg">cloud</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">SoundCloud</p>
                      <p className="text-xs">thetawaveaudio</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@thetawaveaudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-400 hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-all">
                      <span className="material-symbols-outlined text-lg">play_circle</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">YouTube</p>
                      <p className="text-xs">@thetawaveaudio</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-bold text-lg mb-3">Location</h3>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Nashville, TN</span>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                Working with artists worldwide — no matter where you are, we can make it work.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="lg:col-span-3 glass p-8 md:p-10 rounded-2xl space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                How did you hear about Theta Wave Audio? <span className="text-primary">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {referralSources.map((source) => (
                  <button
                    key={source}
                    type="button"
                    onClick={() => toggleSource(source)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                      form.hearAbout.includes(source)
                        ? "bg-primary text-background-dark"
                        : "glass hover:bg-white/5"
                    }`}
                  >
                    {source}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Topic
              </label>
              <select
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-background-dark">Select a topic</option>
                {topics.map((t) => (
                  <option key={t} value={t} className="bg-background-dark">
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Questions / Notes
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Feel free to leave any requests, questions, notes, or concerns here. I'm listening!"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-background-dark py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,238,255,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
