"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", target: "services" },
  { label: "Gallery", target: "gallery" },
  { label: "About", target: "about" },
  { label: "Contact", target: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-2xl tracking-wider text-gold"
        >
          EXTREME CLEAN
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="text-sm font-medium uppercase tracking-widest text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-gold px-6 py-2 text-sm font-bold uppercase tracking-widest text-dark transition-colors hover:bg-gold/90"
          >
            Book Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-dark/98 md:hidden">
          <button
            className="absolute top-4 right-6 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => {
                scrollTo(link.target);
                setMenuOpen(false);
              }}
              className="font-display text-3xl tracking-wider text-white transition-colors hover:text-gold"
            >
              {link.label.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => {
              scrollTo("contact");
              setMenuOpen(false);
            }}
            className="bg-gold px-8 py-3 font-display text-xl tracking-wider text-dark"
          >
            BOOK NOW
          </button>
        </div>
      )}
    </nav>
  );
}
