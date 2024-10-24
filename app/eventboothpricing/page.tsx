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

export default function PhotoSetupPage() {
  const [addonsState, setAddonsState] = useState<Addon[][]>([]);

  const generateMailtoUrl = (tier: Tier, addons: Addon[]) => {
    const subject = encodeURIComponent(`${tier.title} on-site portrait setup booking request`);
    const body = encodeURIComponent(`
      Hi Lana,

      I would like to book your on-site portrait setup for a ${tier.title} session.

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
          lana dubkova • on-site portrait setup
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
                on-site portraits<br />
                <span className="font-normal text-[#888888]">*with instant prints*</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#888888] max-w-2xl">
              elegant portrait station with professional lighting and instant prints. perfect for corporate events, holiday parties, and celebrations. includes dedicated attendant for a seamless experience.
              </p>
            </section>

            <section className="space-y-12 mt-16">
              {[
                {
                  title: "Two Hours",
                  price: "$950",
                  detail: "includes setup & breakdown",
                  features: [
                    "2 hours of portrait station operation",
                    "minimal backdrop setup",
                    "professional lighting",
                    "dedicated attendant",
                    "unlimited 4x6 or 2x2 prints",
                    "optional simple props",
                    "digital copies provided",
                  ],
                  addons: [
                    { label: "custom backdrop design", price: "$250", detail: "branded or themed", checked: false },
                    { label: "styling kit", price: "$150", detail: "mirror, touch-up essentials", checked: false },
                    { label: "extra hour", price: "$300", detail: "portrait station operation", checked: false },
                  ],
                },
                {
                  title: "Half Day",
                  price: "$1,500",
                  detail: "4 hours of operation",
                  features: [
                    "4 hours of portrait station operation",
                    "minimal backdrop setup",
                    "professional lighting",
                    "dedicated attendant",
                    "unlimited 4x6 or 2x2 prints",
                    "optional simple props",
                    "digital copies provided",
                  ],
                  addons: [
                    { label: "custom backdrop design", price: "$250", detail: "branded or themed", checked: false },
                    { label: "styling kit", price: "$150", detail: "mirror, touch-up essentials", checked: false },
                    { label: "extra hour", price: "$250", detail: "portrait station operation", checked: false },
                  ],
                },
                {
                  title: "Full Day",
                  price: "$2,500",
                  detail: "8 hours of operation",
                  features: [
                    "8 hours of portrait station operation",
                    "minimal backdrop setup",
                    "professional lighting",
                    "dedicated attendant",
                    "unlimited 4x6 or 2x2 prints",
                    "styling kit included",
                    "digital copies provided",
                  ],
                  addons: [
                    { label: "custom backdrop design", price: "$250", detail: "branded or themed", checked: false },
                    { label: "second attendant", price: "$350", detail: "for large events", checked: false },
                    { label: "extra hour", price: "$250", detail: "portrait station operation", checked: false },
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
                  title: "the setup",
                  description: "minimal and elegant portrait station with professional lighting and instant printing. includes dedicated attendant to ensure a smooth experience for your guests.",
                },
                {
                  title: "what's included",
                  description: "clean minimal backdrop, studio lighting setup, instant printing station, optional simple props, dedicated attendant, and digital copies of all photos.",
                },
                {
                  title: "printing details",
                  description: "choose between classic 4x6 prints or trendy 2x2 square prints. all prints are high-quality, professional grade. unlimited prints during operation.",
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