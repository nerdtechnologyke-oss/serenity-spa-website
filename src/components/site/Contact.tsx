import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { BRAND } from "@/lib/brand";

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.59a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.02z"/>
  </svg>
);

const WAIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/>
  </svg>
);

export function Contact() {
  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <span className="label-eyebrow text-primary">Get in touch</span>
        <h2 className="mt-4 text-4xl sm:text-5xl">Say hello</h2>

        <div className="mt-12 flex flex-col items-center gap-5 text-lg">
          <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-3 text-primary transition hover:underline">
            <Phone size={18} /> {BRAND.phone}
          </a>
          <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-3 text-primary transition hover:underline">
            <Mail size={18} /> {BRAND.email}
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener" aria-label="WhatsApp"
             className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white transition hover:-translate-y-0.5">
            <WAIcon className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-primary transition hover:bg-primary hover:text-primary-foreground">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-primary transition hover:bg-primary hover:text-primary-foreground">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="TikTok" className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-primary transition hover:bg-primary hover:text-primary-foreground">
            <TikTokIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
