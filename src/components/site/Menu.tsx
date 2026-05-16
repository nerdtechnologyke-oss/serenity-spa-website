import { useState } from "react";

const menu = {
  Spa: [
    { name: "Signature Facial", price: 2200 },
    { name: "Detox Body Wrap", price: 3500 },
    { name: "Aromatherapy Ritual", price: 2800 },
    { name: "Hot Stone Therapy", price: 3000 },
    { name: "Couples Spa Package", price: 6500 },
  ],
  Massage: [
    { name: "Deep Tissue Massage", price: 2500 },
    { name: "Swedish Massage", price: 2000 },
    { name: "Reflexology", price: 1500 },
    { name: "Sports Recovery", price: 2800 },
    { name: "Prenatal Massage", price: 2400 },
  ],
  Hair: [
    { name: "Hair Wash & Blowout", price: 1200 },
    { name: "Precision Cut", price: 1800 },
    { name: "Color & Highlights", price: 4500 },
    { name: "Keratin Treatment", price: 5500 },
    { name: "Bridal Styling", price: 6000 },
  ],
  Nails: [
    { name: "Classic Manicure", price: 800 },
    { name: "Gel Nails", price: 1500 },
    { name: "Luxury Pedicure", price: 1800 },
    { name: "Nail Art Design", price: 1200 },
    { name: "Acrylic Extensions", price: 2200 },
  ],
} as const;

type Tab = keyof typeof menu;
const tabs = Object.keys(menu) as Tab[];

export function Menu() {
  const [active, setActive] = useState<Tab>("Spa");
  return (
    <section id="menu" className="bg-cream/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <span className="label-eyebrow text-primary">The Menu</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">Treatments & pricing</h2>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-[40px] px-6 py-2.5 text-sm tracking-wide transition-all ${
                active === t
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="divide-y divide-border rounded-2xl bg-background/70 px-6 py-2 sm:px-10 backdrop-blur">
          {menu[active].map((item) => (
            <li
              key={item.name}
              className="flex items-baseline justify-between gap-6 py-5 transition-colors hover:text-primary-deep"
            >
              <span className="font-serif text-xl sm:text-2xl">{item.name}</span>
              <span className="hidden flex-1 border-b border-dashed border-border/60 sm:block" />
              <span className="font-sans text-base text-muted-foreground sm:text-lg">
                KES {item.price.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
