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
  checked: boolean;
};

export default function Page() {
  const [addonsState, setAddonsState] = useState<Addon[][]>([]);

  const generateMailtoUrl = (tier: Tier, addons: Addon[]) => {
    const subject = encodeURIComponent(`${tier.title} headshot booking request`);
    const body = encodeURIComponent(`
      Hi Lana,

      I would like to book a ${tier.title} headshot session for [TELL ME THE AMOUNT PLEASE!] team members.

      Add-ons:
      ${addons.filter(addon => addon.checked).map(addon => `- ${addon.label} — ${addon.price}`).join('\n')}

      Please let me know the next steps to confirm the booking.

      Thank you,
    `);

    return `mailto:lana@skovaphotos.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <header className="fixed top-0 left-0 right-0 p-4 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto text-center text-sm tracking-wider lowercase">
          lana dubkova • headshot photography
        </div>
      </header>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:fixed lg:top-0 lg:left-0 lg:w-[45vw] h-[50vh] lg:h-screen relative">
          <div className='lr_embed' style={{width:'100%', height:'100%'}}>
            <iframe 
              src='https://lightroom.adobe.com/embed/shares/4b87383a57f340ec89f3eb8f2143f4a6/slideshow?background_color=%23FBFBFB&color=%23707070' 
              style={{width:'100%', height:'100%', position: 'absolute', top:0, left:0}}
              frameBorder='0'
            />
          </div>
        </div>

        <main className="lg:w-[55vw] lg:ml-[45vw] p-8 lg:p-16 space-y-16 bg-white relative">
          <div className="absolute top-0 left-0 w-px h-full bg-gray-200 hidden lg:block" />
          <div className="relative">
            <section className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight lowercase">
                professional headshots<br />
                <span className="font-normal">*on location*</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
                clean, modern corporate portraits at your workspace. for linkedin, company websites, and professional profiles.
              </p>
            </section>

            <section className="space-y-12 mt-16">
              {[
                {
                  title: "Small team",
                  price: "$575",
                  detail: "5-10 people",
                  features: [
                    "single professional setup at your location",
                    "10-15 minute slot per person",
                    "3 retouched photos each",
                    "online gallery delivery in 7 days",
                  ],
                  addons: [
                    { label: "rush delivery (3 days)", price: "$150", checked: false },
                    { label: "express delivery (1 day)", price: "$250", checked: false },
                  ],
                },
                {
                  title: "Mid-size team",
                  price: "$55/person",
                  detail: "11-20 people",
                  features: [
                    "single professional setup at your location",
                    "10-15 minute slot per person",
                    "3 retouched photos each",
                    "online gallery delivery in 10 days",
                  ],
                  addons: [
                    { label: "rush delivery (5 days)", price: "$200", checked: false },
                    { label: "express delivery (2 days)", price: "$350", checked: false },
                  ],
                },
                {
                  title: "Large team",
                  price: "$50/person",
                  detail: "21+ people",
                  features: [
                    "single professional setup at your location",
                    "10-15 minute slot per person",
                    "3 retouched photos each",
                    "online gallery delivery in 14 days",
                  ],
                  addons: [
                    { label: "rush delivery (7 days)", price: "$300", checked: false },
                    { label: "express delivery (3 days)", price: "$500", checked: false },
                  ],
                },
              ].map((tier, index) => {
                // Initialize state for each tier's addons
                if (!addonsState[index]) {
                  setAddonsState((prev) => {
                    const newState = [...prev];
                    newState[index] = tier.addons.map(addon => ({ ...addon, checked: false }));
                    return newState;
                  });
                }

                const addons = addonsState[index] || [];

                return (
                  <div key={index} className="space-y-6 pb-8 border-b border-gray-200 last:border-b-0">
                    <div className="flex justify-between items-baseline">
                      <h2 className="text-2xl lg:text-3xl font-light lowercase">{tier.title}</h2>
                      <div className="text-right">
                        <span className="text-2xl lg:text-3xl font-normal">{tier.price}</span>
                        <p className="text-sm text-gray-500">{tier.detail}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-gray-400 mr-2">—</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-2">
                      {addons.map((addon, addonIndex) => (
                        <label key={addonIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                            checked={addon.checked}
                            onChange={() => {
                              const newAddons = [...addons];
                              newAddons[addonIndex].checked = !newAddons[addonIndex].checked;
                              const newAddonsState = [...addonsState];
                              newAddonsState[index] = newAddons;
                              setAddonsState(newAddonsState);
                            }}
                          />
                          <span>{addon.label} — {addon.price}</span>
                        </label>
                      ))}
                    </div>
                    <Link
                      href={generateMailtoUrl(tier, addons)}
                      className="inline-block border-b border-gray-900 text-sm hover:border-gray-500 transition-colors lowercase"
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
                  description: "clean, professional headshots taken at your office. single (1) setup using available space, flexible to teams of all sizes.",
                },
                {
                  title: "what's included",
                  description: "professional photography, expert direction, basic retouching (blemishes, stray hairs, skin smoothing), and easy online delivery.",
                },
                {
                  title: "additional options",
                  description: "extra retouched photos ($25/image), makeup artist services, and creative setups available upon request.",
                },
                {
                  title: "coverage area",
                  description: "serving manhattan, brooklyn, and surrounding areas. travel fees may apply for locations outside nyc.",
                },
              ].map((info, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-normal text-gray-400 lowercase">{info.title}</h3>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              ))}
            </section>

            <footer className="text-xs text-gray-400 lowercase mt-16">
              nyc-based • servicing manhattan, brooklyn, and beyond • lana@skovaphotos.com
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}
