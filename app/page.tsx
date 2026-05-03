export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Hypertension Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track BP Meds Effectiveness{' '}
          <span className="text-[#58a6ff]">with Data</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Log blood pressure readings, track medication timing and dosages, and see clear charts showing exactly how your treatment is working.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $11/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No commitment.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['BP trend charts','Medication log','Dose timing correlation','Caregiver sharing','Daily reminders','Export to PDF'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$11</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to manage hypertension</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited BP readings',
              'Medication schedule tracking',
              'Correlation charts & insights',
              'Caregiver access (1 user)',
              'PDF & CSV export',
              'Email reminders'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the medication correlation work?',
              a: 'You log each BP reading with a timestamp, and separately log when you take each medication and at what dose. The app overlays these on a timeline chart so you can visually see how your BP responds after each dose.'
            },
            {
              q: 'Can my doctor or caregiver access my data?',
              a: 'Yes. The Pro plan includes one caregiver seat. You can invite a family member or healthcare provider who gets read-only access to your dashboard and can export reports.'
            },
            {
              q: 'Is my health data secure?',
              a: 'All data is encrypted at rest and in transit. We never sell your data. You can export or delete your account at any time from the settings page.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} BP Med Optimizer. Not a substitute for medical advice.
      </footer>
    </main>
  )
}
