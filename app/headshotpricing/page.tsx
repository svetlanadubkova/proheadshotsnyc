'use client'

import Link from 'next/link'
import { useState } from 'react'

type Tier = {
  title: string;
  price: string;
  detail: string;
  features: string[];
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
    const subject = encodeURIComponent(`${tier.title} portrait session booking request`);
    const body = encodeURIComponent(`
      Hi Lana,

      I would like to book a ${tier.title} portrait session.

      Add-ons:
      ${addons.filter(addon => addon.checked).map(addon => `- ${addon.label} — ${addon.price}`).join('\n')}

      Please let me know the next steps to confirm the booking.

      Thank you,
    `);

    return `mailto:lana@skovaphotos.com?subject=${subject}&body=${body}`;
  };

  const locationTiers = [
    {
      title: "Essential Portrait",
      price: "$375",
      detail: "30-minute session",
      features: [
        "bright indoor or outdoor location",
        "all culled, color-corrected images",
        "online gallery delivery in 7 days",
      ],
      addons: [
        { label: "advanced retouching (extensive edits)", price: "starting at $25/photo", checked: false },
        { label: "rush delivery (3 days)", price: "$150", checked: false },
      ],
    },
    {
      title: "Signature Portrait",
      price: "$525",
      detail: "1-hour session",
      features: [
        "multiple locations (indoor/outdoor)",
        "all culled, color-corrected images",
        "online gallery delivery in 7 days",
      ],
      addons: [
        { label: "advanced retouching (extensive edits)", price: "starting at $25/photo", checked: false },
        { label: "rush delivery (3 days)", price: "$150", checked: false },
      ],
    },
    {
      title: "Premium Portrait",
      price: "$725",
      detail: "2-hour session",
      features: [
        "multiple premium locations",
        "all culled, color-corrected images",
        "online gallery delivery in 7 days",
      ],
      addons: [
        { label: "advanced retouching (extensive edits)", price: "starting at $25/photo", checked: false },
        { label: "rush delivery (3 days)", price: "$150", checked: false },
      ],
    },
  ];

  const studioTiers = [
    {
      title: "Studio Essential",
      price: "$475",
      detail: "30-minute session",
      features: [
        "professional studio setup",
        "all culled, color-corrected images",
        "online gallery delivery in 7 days",
      ],
      addons: [
        { label: "advanced retouching (extensive edits)", price: "starting at $25/photo", checked: false },
        { label: "rush delivery (3 days)", price: "$150", checked: false },
      ],
    },
    {
      title: "Studio Signature",
      price: "$625",
      detail: "1-hour session",
      features: [
        "multiple studio backgrounds",
        "all culled, color-corrected images",
        "online gallery delivery in 7 days",
      ],
      addons: [
        { label: "advanced retouching (extensive edits)", price: "starting at $25/photo", checked: false },
        { label: "rush delivery (3 days)", price: "$150", checked: false },
      ],
    },
    {
      title: "Studio Premium",
      price: "$825",
      detail: "2-hour session",
      features: [
        "unlimited studio setups",
        "all culled, color-corrected images",
        "online gallery delivery in 7 days",
      ],
      addons: [
        { label: "advanced retouching (extensive edits)", price: "starting at $25/photo", checked: false },
        { label: "rush delivery (3 days)", price: "$150", checked: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <header className="fixed top-0 left-0 right-0 p-4 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto text-center text-sm tracking-wider lowercase">
          lana dubkova • portrait photography
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
                modern portraits<br />
                <span className="font-normal">*carefully crafted*</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
                clean, contemporary portraits for your personal brand. perfect for linkedin, social media, and professional profiles. 100% satisfaction guaranteed.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {/* On Location Column */}
              <div>
                <h2 className="text-2xl font-light mb-8 lowercase">on location</h2>
                <div className="space-y-12">
                  {locationTiers.map((tier, index) => renderTierCard(tier, index, 0))}
                </div>
              </div>

              {/* Studio Column */}
              <div>
                <h2 className="text-2xl font-light mb-8 lowercase">in studio</h2>
                <div className="space-y-12">
                  {studioTiers.map((tier, index) => renderTierCard(tier, index, 1))}
                </div>
              </div>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
              {[
                {
                  title: "the process",
                  description: "personalized portrait experience focused on capturing your authentic self. natural direction and posing guidance provided throughout the session.",
                },
                {
                  title: "what's included",
                  description: "professional photography, expert direction, color correction & culling of all images, and convenient online gallery delivery. advanced retouching available as add-on.",
                },
                {
                  title: "locations",
                  description: "on-location sessions in parks, urban settings, or indoor spaces with beautiful natural light. studio sessions in our professional manhattan space.",
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

  function renderTierCard(tier: Tier, index: number, columnIndex: number) {
    // Initialize state for each tier's addons
    if (!addonsState[columnIndex * 3 + index]) {
      setAddonsState((prev) => {
        const newState = [...prev];
        newState[columnIndex * 3 + index] = tier.addons.map(addon => ({ ...addon, checked: false }));
        return newState;
      });
    }

    const addons = addonsState[columnIndex * 3 + index] || [];

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
                  newAddonsState[columnIndex * 3 + index] = newAddons;
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
          book this session
        </Link>
      </div>
    );
  }
}