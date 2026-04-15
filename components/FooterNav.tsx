"use client";

const links = ["Services", "Gallery", "About", "Contact"];

export default function FooterNav() {
  return (
    <div className="flex gap-6">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => {
            const el = document.getElementById(link.toLowerCase());
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-sm uppercase tracking-widest text-white/50 transition-colors hover:text-gold"
        >
          {link}
        </button>
      ))}
    </div>
  );
}
