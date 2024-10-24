'use client'

import Link from 'next/link'
import { useState } from 'react'

type Tier = {
  title: string;
  addons: Addon[];
};

type Addon = {
  label: string;
  price: string;
  detail: string;
  checked: boolean;
};

export default function EventPricingPage() {
  const [addonsState, setAddonsState] = useState<Addon[][]>([]);

  const generateMailtoUrl = (tier: Tier, addons: Addon[]) => {
    const subject = encodeURIComponent(`${tier.title} event photography booking request`);
    const body = encodeURIComponent(`
      Hi Lana,

      I would like to book your photography services for a ${tier.title} event.

      Add-ons:
      ${addons.filter(addon => addon.checked).map(addon => `- ${addon.label} — ${addon.price}`).join('\n')}

      Please let me know the next steps to confirm the booking.

      Thank you,
    `);

    return `mailto:lana@skovaphotos.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans antialiased">
      <header className="fixed top-0 left-0 right-0 p-4 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#222222]">
        <div className="container mx-auto text-center text-sm tracking-wider lowercase">
          lana dubkova • event photography
        </div>
      </header>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:fixed lg:top-0 lg:left-0 lg:w-[45vw] h-[50vh] lg:h-screen relative">
          <div className="lr_embed" style={{width:'100%', height:'100%'}}>
            <iframe 
              src="https://lightroom.adobe.com/embed/shares/6f526c55191f47d89acc4ae2908012c9/slideshow?background_color=%230a0a0a&color=%23e0e0e0"
              style={{width:'100%', height:'100%', position: 'absolute', top:0, left:0}}
              frameBorder="0"
            />
          </div>
        </div>

        <main className="lg:w-[55vw] lg:ml-[45vw] p-8 lg:p-16 space-y-16 bg-[#0a0a0a] relative">
          <div className="absolute top-0 left-0 w-px h-full bg-[#222222] hidden lg:block" />
          <div className="relative">
            <section className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight lowercase">
                event photography<br />
                <span className="font-normal text-[#888888]">*with on-site printing*</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#888888] max-w-2xl">
              I shoot events in a fun, fly-on-the-wall documentary, paparazzi style. coverage for corporate events, holiday parties, celebrations, and soirées of all kinds. on-site printing options available for immediate memories.
              </p>
            </section>

            <section className="space-y-12 mt-16">
              {[
                {
                  title: "Two Hours",
                  price: "$575",
                  detail: "ideal for small gatherings",
                  features: [
                    "2 hours of professional coverage",
                    "one photographer",
                    "edited online gallery delivery within 5 days",
                    "all edited high-resolution images",
                    "unlimited personal usage rights",
                  ],
                  addons: [
                    { label: "on-site 4x6 prints", price: "$275", detail: "includes 100 prints", checked: false },
                    { label: "on-site 2x2 prints", price: "$200", detail: "includes 100 prints", checked: false },
                    { label: "additional 50 prints", price: "$75", detail: "same-size prints", checked: false },
                  ],
                },
                {
                  title: "Half Day",
                  price: "$975",
                  detail: "4 hours of coverage",
                  features: [
                    "4 hours of professional coverage",
                    "one photographer",
                    "edited online gallery delivery within 7 days",
                    "all edited high-resolution images",
                    "unlimited personal usage rights",
                  ],
                  addons: [
                    { label: "on-site 4x6 prints", price: "$325", detail: "includes 150 prints", checked: false },
                    { label: "on-site 2x2 prints", price: "$250", detail: "includes 150 prints", checked: false },
                    { label: "additional 50 prints", price: "$75", detail: "same-size prints", checked: false },
                  ],
                },
                {
                  title: "Full Day",
                  price: "$1,800",
                  detail: "8 hours of coverage",
                  features: [
                    "8 hours of professional coverage",
                    "one photographer",
                    "edited online gallery delivery within 10 days",
                    "all edited high-resolution images",
                    "unlimited personal usage rights",
                  ],
                  addons: [
                    { label: "on-site 4x6 prints", price: "$400", detail: "includes 200 prints", checked: false },
                    { label: "on-site 2x2 prints", price: "$300", detail: "includes 200 prints", checked: false },
                    { label: "additional 50 prints", price: "$50", detail: "same-size prints", checked: false },
                  ],
                },
              ].map((tier, index) => {
                if (!addonsState[index]) {
                  setAddonsState((prev) => {
                    const newState = [...prev];
                    newState[index] = tier.addons.map(addon => ({ ...addon, checked: false }));
                    return newState;
                  });
                }

                const addons = addonsState[index] || [];

                return (
                  <div key={index} className="space-y-6 pb-8 border-b border-[#222222] last:border-b-0">
                    <div className="flex justify-between items-baseline">
                      <h2 className="text-2xl lg:text-3xl font-light lowercase">{tier.title}</h2>
                      <div className="text-right">
                        <span className="text-2xl lg:text-3xl font-normal">{tier.price}</span>
                        <p className="text-sm text-[#888888]">{tier.detail}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-[#666666] mr-2">—</span>
                          <span className="text-[#bbbbbb]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-3">
                      {addons.map((addon, addonIndex) => (
                        <label key={addonIndex} className="flex items-center space-x-2 text-sm text-[#bbbbbb]">
                          <input
                            type="checkbox"
                            className="rounded border-[#333333] bg-[#111111] text-[#888888] focus:ring-0 focus:ring-offset-0"
                            checked={addon.checked}
                            onChange={() => {
                              const newAddons = [...addons];
                              newAddons[addonIndex].checked = !newAddons[addonIndex].checked;
                              const newAddonsState = [...addonsState];
                              newAddonsState[index] = newAddons;
                              setAddonsState(newAddonsState);
                            }}
                          />
                          <div>
                            <span>{addon.label} — {addon.price}</span>
                            <span className="block text-xs text-[#666666]">{addon.detail}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    <Link
                      href={generateMailtoUrl(tier, addons)}
                      className="inline-block border-b border-[#bbbbbb] text-sm text-[#bbbbbb] hover:border-[#e0e0e0] hover:text-[#e0e0e0] transition-colors lowercase"
                    >
                      book this option
                    </Link>
                  </div>
                )
              })}
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
              {[
                {
                  title: "the process",
                  description: "professional event coverage with optional on-site printing setup. perfect for corporate events, holiday parties, and special occasions where immediate prints are desired.",
                },
                {
                  title: "what's included",
                  description: "professional photography, expert lighting, basic culling and editing of all images, color correction, and easy online gallery delivery. printing add-ons include professional printer setup and attendant.",
                },
                {
                  title: "printing options",
                  description: "choose between classic 4x6 prints or trendy 2x2 square prints of your unedited photos. all prints are high-quality, professional grade.",
                },
                {
                  title: "coverage area",
                  description: "serving manhattan, brooklyn, and surrounding areas. travel fees may apply for locations outside nyc.",
                },
              ].map((info, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-normal text-[#666666] lowercase">{info.title}</h3>
                  <p className="text-sm text-[#888888]">{info.description}</p>
                </div>
              ))}
            </section>

            <footer className="text-xs text-[#666666] lowercase mt-16">
              nyc-based • servicing manhattan, brooklyn, and beyond • lana@skovaphotos.com
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}