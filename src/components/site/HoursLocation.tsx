import { BRAND } from "@/lib/brand";

const hours = [
  { d: "Monday – Friday", t: "8:00 AM – 7:00 PM" },
  { d: "Saturday", t: "9:00 AM – 6:00 PM" },
  { d: "Sunday", t: "10:00 AM – 4:00 PM" },
];

export function HoursLocation() {
  return (
    <section className="bg-cream/40 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <span className="label-eyebrow text-primary">Visit</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">Opening hours</h2>
          <ul className="mt-10 divide-y divide-border">
            {hours.map((h) => (
              <li key={h.d} className="flex items-baseline justify-between py-5">
                <span className="font-serif text-xl">{h.d}</span>
                <span className="text-muted-foreground">{h.t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="label-eyebrow text-primary">Find us here</span>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Nakuru,Kenya&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-muted-foreground">{BRAND.address}</p>
        </div>
      </div>
    </section>
  );
}
