import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to book in advance?",
    a: "We strongly recommend booking at least 24 hours ahead, especially for weekends and combined treatments. Walk-ins are welcome whenever a slot is open.",
  },
  {
    q: "What should I wear or bring to a spa session?",
    a: "Just bring yourself. We provide robes, slippers, towels and disposable undergarments for treatments. Lockers are available for your belongings.",
  },
  {
    q: "Are your products safe for sensitive skin?",
    a: "Yes. We use plant-based, cruelty-free products and always patch-test for sensitive clients. Let your therapist know about any allergies during consultation.",
  },
  {
    q: "Do you offer packages for couples or groups?",
    a: "Absolutely. We have curated couples retreats, bridal parties and small group bookings. Reach out via WhatsApp for a tailored quote.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Appointments can be rescheduled or cancelled free of charge up to 6 hours before your slot. Late cancellations may incur a 30% fee.",
  },
  {
    q: "Do you accept M-Pesa and card payments?",
    a: "Yes — we accept M-Pesa, Visa, Mastercard and cash. Tips are appreciated but never expected.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="label-eyebrow text-primary">Good to know</span>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Frequently <em className="italic">asked</em> questions
          </h2>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            Everything you need to know before your visit. Can't find an answer?
            Send us a message on WhatsApp and we'll respond within the hour.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-6 text-left font-serif text-xl hover:no-underline sm:text-2xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
