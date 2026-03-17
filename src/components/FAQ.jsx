import { useState } from "react";

const faqs = [
  {
    question: "How should I submit my multitrack for mixing?",
    answer: (
      <>
        <p className="mb-4">
          My preference is to have separate audio files per sound/instrument. For example:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          {[
            "Kick In.wav",
            "Kick Out.wav",
            "Snare Top.wav",
            "Snare Bottom.wav",
            "Overhead R.wav",
            "Overhead L.wav",
            "Bass DI.wav",
            "Bass Amp.wav",
            "Rhythm Guitar.wav",
            "Lead Guitar.wav",
            "Keys.wav",
            "Synth.wav",
            "Lead Vocal.wav",
            "BG Vocal.wav",
            "Percussion.wav",
          ].map((f) => (
            <span
              key={f}
              className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-mono"
            >
              {f}
            </span>
          ))}
        </div>
        <p className="mb-3 text-red-400 font-semibold text-sm">What to avoid:</p>
        <div className="flex gap-2 mb-4">
          {["Drums.wav", "Music.wav", "Vocals.wav"].map((f) => (
            <span
              key={f}
              className="text-xs bg-red-500/10 text-red-400 px-3 py-1.5 rounded-lg font-mono line-through"
            >
              {f}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Submitting tracks as separate as possible is key to giving a mixing engineer the most
          control over the mix. Submitting stereo tracks that include all drum elements severely
          limits the amount of control and type of processing that can be done. When exporting your
          multitracks, make sure everything you want in the mix is included and DO NOT include
          anything that is not to be used in the mix.
        </p>
      </>
    ),
  },
  {
    question: "Should I include any processing from my session?",
    answer: (
      <>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          My preference is to have the tracks submitted dry. There are certain exceptions — if
          you have used plugins/effects that are intentional and part of an effect, then great.
          You can also export a dry version and a wet version. This gives me the flexibility to
          make more informed decisions. Please be sure to label these tracks clearly to avoid confusion.
        </p>
        <p className="text-sm text-slate-400 leading-relaxed">
          I would prefer that the multitrack be exported <strong className="text-white">WITHOUT</strong> any
          mix bus processing such as compression, EQ, and limiting. The raw dynamics will be more
          useful to me than receiving something that is devoid of them. It is hard, next to
          impossible, to get those dynamics or frequencies back if the tracks submitted do not
          contain the information.
        </p>
      </>
    ),
  },
  {
    question: "What is the pricing structure?",
    answer: (
      <>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          My pricing is set at <strong className="text-primary">$300 per mix</strong>. 50% ($150)
          is required as a deposit to retain services. No work will be performed unless this deposit
          is paid. The deposit is non-refundable after 48 hours of receiving payment. If you wish to
          cancel within 48 hours, you will receive a 100% refund. After 48 hours, any refund is at
          the sole discretion of Theta Wave Audio and will never exceed 50% ($75).
        </p>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          Your mix will include <strong className="text-white">2 full mix revisions</strong> per
          song. Additional revisions are charged at $50 each. Payment for additional revisions must
          be received before work begins and is non-refundable.
        </p>
        <div className="glass p-4 rounded-xl mt-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Example: 2 Songs
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex justify-between">
              <span>2 Deposits @ $150 ea</span>
              <span className="text-primary font-bold">$300</span>
            </li>
            <li className="flex justify-between">
              <span>2 Final Invoices @ $150 ea</span>
              <span className="text-primary font-bold">$300</span>
            </li>
            <li className="flex justify-between border-t border-white/10 pt-2 mt-2">
              <span className="font-bold">Total</span>
              <span className="text-primary font-bold">$600</span>
            </li>
            <li className="text-xs text-slate-500">+ any additional mix revisions</li>
          </ul>
        </div>
      </>
    ),
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="glass rounded-2xl overflow-hidden transition-all">
      <button
        className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-lg font-bold pr-4">{faq.question}</h3>
        <span
          className={`material-symbols-outlined text-primary text-2xl shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          add
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8">{faq.answer}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-32" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Everything you need to know before booking your mix.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
