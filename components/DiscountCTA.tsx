"use client";

export default function DiscountCTA() {
  return (
    <button
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      className="bg-dark px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-dark/80"
    >
      Ask About Your Discount
    </button>
  );
}
