'use client'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans antialiased">
      <header className="fixed top-0 left-0 right-0 p-4 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#222222]">
        <div className="container mx-auto text-center text-sm tracking-wider lowercase">
          lana dubkova • terms & conditions
        </div>
      </header>

      <main className="container mx-auto px-4 py-24 md:px-8 max-w-3xl">
        <h1 className="text-4xl font-light tracking-tight mb-12 lowercase">terms & conditions</h1>

        <div className="space-y-12">
          {/* Payment & Booking */}
          <section className="space-y-4">
            <h2 className="text-2xl font-light text-[#bbbbbb] lowercase">payment & booking</h2>
            <ul className="space-y-3 text-[#888888]">
              <li className="flex gap-3">
                <span className="text-[#666666]">—</span>
                <span>Payment accepted via credit card, Zelle (347-738-8058), or Venmo (@Svetlana-Dubkova, last 4 digits: 8058).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#666666]">—</span>
                <span>A non-refundable 50% retainer is required to secure your session date.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#666666]">—</span>
                <span>Remaining balance must be paid on or before the session date.</span>
              </li>
            </ul>
          </section>

          {/* Rescheduling & Cancellation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-light text-[#bbbbbb] lowercase">rescheduling & cancellation</h2>
            <ul className="space-y-3 text-[#888888]">
              <li className="flex gap-3">
                <span className="text-[#666666]">—</span>
                <span>Rescheduling requests made less than 48 hours before the session incur a 25% fee.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#666666]">—</span>
                <span>Cancelled sessions forfeit the 50% deposit, with any remaining balance returned if already paid.</span>
              </li>
            </ul>
          </section>

          {/* Usage Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-light text-[#bbbbbb] lowercase">usage rights</h2>
            <ul className="space-y-3 text-[#888888]">
              <li className="flex gap-3">
                <span className="text-[#666666]">—</span>
                <span>Package fees cover personal/private use only.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#666666]">—</span>
                <span>Commercial usage rights must be purchased separately.</span>
              </li>
            </ul>
          </section>

          {/* Legal Agreement */}
          <section className="space-y-6">
            <h2 className="text-2xl font-light text-[#bbbbbb] lowercase">legal agreement</h2>
            
            <div className="space-y-6 text-[#888888]">
              <div className="space-y-3">
                <h3 className="text-[#bbbbbb]">1. Grant of Rights</h3>
                <p>1.1. The Client grants to the Photographer the exclusive, worldwide, irrevocable, perpetual, royalty-free right to use, reproduce, distribute, publish, display, and create derivative works of the photographs.</p>
                <p>1.2. The Photographer may use the Photographs for any lawful purpose, including but not limited to marketing, advertising, promotional materials, exhibitions, and editorial content.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[#bbbbbb]">2. Client&apos;s Rights</h3>
                <p>2.1. The Client retains the right to use the Photographs for personal, non-commercial purposes, such as posting on social media or using them in their portfolio.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[#bbbbbb]">3. Limitations and Restrictions</h3>
                <p>3.1. The Photographer has the sole and exclusive right to sell the Photographs or grant licenses to third parties.</p>
                <p>3.2. The Client may not sell or distribute the Photographs.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[#bbbbbb]">4. Term and Termination</h3>
                <p>4.1. This Agreement shall remain in full force and effect unless terminated earlier by mutual agreement between the Photographer and the Client.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[#bbbbbb]">5. Governing Law</h3>
                <p>5.1. This Agreement shall be governed by and construed in accordance with the laws of the State of New York.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[#bbbbbb]">6. Entire Agreement</h3>
                <p>6.1. This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements, understandings, or communications.</p>
              </div>
            </div>
          </section>

          <footer className="text-[#666666] text-sm italic">
            I appreciate your understanding and adherence to these policies, which allow me to deliver a seamless, high-quality experience for all clients.
          </footer>
        </div>
      </main>
    </div>
  )
}