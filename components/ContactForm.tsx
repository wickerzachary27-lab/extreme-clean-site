"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Detail Request from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nVehicle: ${form.vehicle}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:extremecleanauto@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="font-display text-3xl tracking-wider text-gold">
          We&apos;ll be in touch soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        className="border border-white/20 bg-charcoal px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={handleChange}
        className="border border-white/20 bg-charcoal px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
      />
      <input
        type="text"
        name="vehicle"
        placeholder="Year / Make / Model"
        value={form.vehicle}
        onChange={handleChange}
        className="border border-white/20 bg-charcoal px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Tell us what you need"
        rows={4}
        value={form.message}
        onChange={handleChange}
        className="border border-white/20 bg-charcoal px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        className="bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-dark transition-colors hover:bg-gold/90"
      >
        Send Message
      </button>
    </form>
  );
}
