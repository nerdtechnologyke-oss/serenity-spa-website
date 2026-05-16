export function IntroStrip() {
  return (
    <section className="bg-background px-6 py-24 text-center md:py-32">
      <p className="mx-auto max-w-3xl font-serif text-3xl italic leading-snug text-foreground sm:text-4xl md:text-5xl">
        Your ritual. Your glow. Your moment.
      </p>
      <svg
        className="mx-auto mt-10 text-primary"
        width="160"
        height="14"
        viewBox="0 0 160 14"
        fill="none"
      >
        <path
          d="M2 7 Q 22 -3, 42 7 T 82 7 T 122 7 T 158 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </section>
  );
}
