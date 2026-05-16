import { useState, FormEvent } from "react";
import { BRAND } from "@/lib/brand";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
  </svg>
);

const categories = ["Spa", "Massage", "Hair", "Nails"];

export function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "Spa",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const update = (k: keyof typeof form) => (e: any) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `*New Appointment Request*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Category:* ${form.category}%0A` +
      `*Service:* ${form.service}%0A` +
      `*Date:* ${form.date}%0A` +
      `*Time:* ${form.time}%0A` +
      `*Notes:* ${form.notes || "—"}`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${msg}`, "_blank");
  };

  const inputCls =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0 transition-colors";

  return (
    <section id="booking" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="label-eyebrow text-primary">Reserve</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">Book your moment</h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Choose your service and preferred time. We'll confirm instantly via WhatsApp,
            so your ritual begins the moment you arrive.
          </p>
          <div className="mt-10 hidden h-px w-24 bg-primary lg:block" />
        </div>

        <form onSubmit={submit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="label-eyebrow text-muted-foreground">Full Name</label>
            <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Your name" />
          </div>
          <div>
            <label className="label-eyebrow text-muted-foreground">Phone</label>
            <input required type="tel" value={form.phone} onChange={update("phone")} className={inputCls} placeholder="+254..." />
          </div>
          <div>
            <label className="label-eyebrow text-muted-foreground">Category</label>
            <select value={form.category} onChange={update("category")} className={inputCls}>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="label-eyebrow text-muted-foreground">Specific Service</label>
            <input value={form.service} onChange={update("service")} className={inputCls} placeholder="e.g. Deep Tissue Massage" />
          </div>
          <div>
            <label className="label-eyebrow text-muted-foreground">Date</label>
            <input required type="date" value={form.date} onChange={update("date")} className={inputCls} />
          </div>
          <div>
            <label className="label-eyebrow text-muted-foreground">Time</label>
            <input required type="time" value={form.time} onChange={update("time")} className={inputCls} />
          </div>
          <div className="sm:col-span-2">
            <label className="label-eyebrow text-muted-foreground">Notes</label>
            <textarea rows={3} value={form.notes} onChange={update("notes")} className={inputCls} placeholder="Anything we should know..." />
          </div>

          <button
            type="submit"
            className="sm:col-span-2 mt-4 inline-flex items-center justify-center gap-3 rounded-[40px] bg-whatsapp px-8 py-4 text-base font-medium text-white shadow-lg shadow-whatsapp/30 transition hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
