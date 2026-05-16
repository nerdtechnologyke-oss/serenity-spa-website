import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { IntroStrip } from "@/components/site/IntroStrip";
import { Services } from "@/components/site/Services";
import { Menu } from "@/components/site/Menu";
import { Booking } from "@/components/site/Booking";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { HoursLocation } from "@/components/site/HoursLocation";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Serenity Spa & Salon — Where Beauty Meets Serenity" },
      {
        name: "description",
        content:
          "Boutique spa, massage, hair and nail studio in Nakuru. Book a restorative ritual with our certified therapists.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <IntroStrip />
      <Services />
      <Menu />
      <Booking />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <HoursLocation />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
