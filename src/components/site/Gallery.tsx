const images = [
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1607008829749-c0f284a49841?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=80",
];

export function Gallery() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto mb-12 max-w-6xl px-6 text-center">
        <span className="label-eyebrow text-primary">Inside the studio</span>
        <h2 className="mt-4 text-4xl sm:text-5xl">Moments captured</h2>
      </div>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 md:px-12">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative h-[360px] w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-2xl sm:h-[440px] sm:w-[340px]"
          >
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
}
