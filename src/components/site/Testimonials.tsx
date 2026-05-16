const testimonials = [
  {
    name: "Achieng Otieno",
    role: "Regular client · Nakuru",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    quote:
      "The deep tissue massage was honestly life-changing. The ambience, the scents, the gentle music — every detail feels intentional. I leave feeling lighter every single time.",
  },
  {
    name: "Brian Kimani",
    role: "Couples retreat",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "Booked the couples package for our anniversary. The therapists were warm, professional and unhurried. Easily the most relaxed evening we've had all year.",
  },
  {
    name: "Wanjiku Mwangi",
    role: "Hair & nails",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    quote:
      "I've finally found a salon that listens. My stylist took time to understand what I wanted and the finish was flawless. The gel manicure has lasted three weeks.",
  },
  {
    name: "Naomi Cherono",
    role: "Bridal package",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
    quote:
      "They handled my bridal party of eight with so much grace. Everyone was glowing on the wedding day. Worth every shilling.",
  },
  {
    name: "Daniel Mutiso",
    role: "Sports recovery",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80",
    quote:
      "As a runner, I rely on monthly sports massages here. Knowledgeable therapists who actually understand muscle recovery. Highly recommend.",
  },
  {
    name: "Faith Njeri",
    role: "Facials & spa",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote:
      "My skin has never looked better. The hydrating facial is pure magic and the staff genuinely care about results, not upselling. A rare find.",
  },
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary text-primary">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="label-eyebrow text-primary">Kind words</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">What our guests say</h2>
          <p className="mt-5 text-base text-muted-foreground">
            Real reviews from the people who trust us with their rituals of rest, beauty and self-care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <blockquote className="flex-1 font-serif text-lg leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
