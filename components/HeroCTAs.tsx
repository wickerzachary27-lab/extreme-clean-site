"use client";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function HeroCTAs() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <button
        onClick={() => scrollTo("contact")}
        className="bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-dark transition-colors hover:bg-gold/90"
      >
        Book a Detail
      </button>
      <button
        onClick={() => scrollTo("gallery")}
        className="border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-gold hover:text-gold"
      >
        See Our Work
      </button>
    </div>
  );
}
