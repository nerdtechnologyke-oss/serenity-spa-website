import { useEffect, useState } from "react";
import { BRAND } from "@/lib/brand";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80",
    label: "Spa Treatments",
  },
  {
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80",
    label: "Massage Therapy",
  },
  {
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80",
    label: "Hair Salon",
  },
  {
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=2000&q=80",
    label: "Nail Parlor",
  },
  {
    img: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=2000&q=80",
    label: "Wellness Rituals",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={s.img}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <img
            src={s.img}
            alt={s.label}
            className="h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <span className="label-eyebrow mb-6 text-white/85">{BRAND.name}</span>
        <h1 className="max-w-4xl text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Where Beauty Meets <em className="italic">Serenity</em>
        </h1>
        <p className="mt-6 text-base tracking-[0.18em] text-white/90 sm:text-lg">
          Spa &nbsp;·&nbsp; Massage &nbsp;·&nbsp; Salon &nbsp;·&nbsp; Nails
        </p>
        <a
          href="#booking"
          className="mt-10 inline-flex items-center gap-2 rounded-[40px] bg-primary px-8 py-4 text-sm font-medium tracking-wider text-primary-foreground shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-primary-deep"
        >
          Book an Appointment
        </a>

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-[3px] rounded-full transition-all ${
                i === idx ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
