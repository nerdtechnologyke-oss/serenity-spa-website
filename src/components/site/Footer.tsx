import { Facebook, Instagram } from "lucide-react";
import { BRAND } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-background px-6 py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-3">
        <div className="font-serif text-2xl">{BRAND.name}</div>
        <p className="text-center text-sm italic text-muted-foreground">{BRAND.tagline}</p>
        <div className="flex justify-start gap-4 md:justify-end">
          <a href="#" aria-label="Facebook" className="text-primary transition hover:text-primary-deep"><Facebook size={18} /></a>
          <a href="#" aria-label="Instagram" className="text-primary transition hover:text-primary-deep"><Instagram size={18} /></a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-center text-xs tracking-wider text-muted-foreground">
        © 2025 {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
