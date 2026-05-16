import { Sparkles, HandHeart, Scissors, Flower2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: Sparkles,
    title: "Spa Treatments",
    desc: "Restorative facials, body wraps and aromatherapy crafted for total renewal.",
  },
  {
    icon: HandHeart,
    title: "Massage Therapy",
    desc: "Deep tissue, Swedish and hot stone — tailored to release every knot.",
  },
  {
    icon: Scissors,
    title: "Hair Salon",
    desc: "Cuts, color and conditioning by stylists who treat hair as artistry.",
  },
  {
    icon: Flower2,
    title: "Nail Parlor",
    desc: "Manicures, pedicures and gel finishes in a calm, sanitised studio.",
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" ref={ref} className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <span className="label-eyebrow text-primary">What we offer</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">A sanctuary for every sense</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="reveal group flex flex-col items-start rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <Icon
                  className="mb-6 text-primary transition-colors group-hover:text-primary-deep"
                  size={36}
                  strokeWidth={1.4}
                />
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href="#menu"
                  className="mt-6 text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary-deep"
                >
                  View Services →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
