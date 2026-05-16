import { Award, Leaf, Sparkles } from "lucide-react";

const items = [
  { icon: Award, title: "Certified Therapists", desc: "Trained, licensed and continually mentored." },
  { icon: Leaf, title: "Premium Products", desc: "Botanical, cruelty-free and ethically sourced." },
  { icon: Sparkles, title: "Relaxing Ambiance", desc: "Warm lighting, soft scents, quiet rooms." },
];

export function WhyUs() {
  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <span className="label-eyebrow text-primary-deep">Why us</span>
        <h2 className="mt-4 text-4xl text-foreground sm:text-5xl">Crafted with care</h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="flex flex-col items-center">
                <Icon className="text-primary" size={40} strokeWidth={1.3} />
                <h3 className="mt-6 text-2xl">{it.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/70">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
