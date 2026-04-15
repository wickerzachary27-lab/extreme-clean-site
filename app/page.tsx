import Image from "next/image";
import {
  Droplets,
  Armchair,
  Car,
  Shield,
  Flashlight,
  Wrench,
  Zap,
  Truck,
  Anchor,
  Star,
  BadgeCheck,
  Phone,
  MapPin,
  Clock,
  Camera,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroCTAs from "@/components/HeroCTAs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ContactForm from "@/components/ContactForm";
import DiscountCTA from "@/components/DiscountCTA";
import FooterNav from "@/components/FooterNav";

const services = [
  {
    name: "Hand Car Wash",
    icon: Droplets,
    description:
      "Meticulous hand washing that protects your paint while removing every trace of dirt and grime.",
  },
  {
    name: "Interior Detailing",
    icon: Armchair,
    description:
      "Deep cleaning of every surface — seats, carpets, dashboard, and door panels restored to showroom condition.",
  },
  {
    name: "Exterior Detailing",
    icon: Car,
    description:
      "Paint correction, clay bar treatment, and hand polish for a mirror-like finish that turns heads.",
  },
  {
    name: "Ceramic Coatings",
    icon: Shield,
    description:
      "Long-lasting ceramic protection that repels water, dirt, and UV rays for years of effortless shine.",
  },
  {
    name: "Headlight Restoration",
    icon: Flashlight,
    description:
      "Crystal-clear headlights restored from hazy and yellowed — improving both safety and appearance.",
  },
  {
    name: "Engine Cleaning",
    icon: Wrench,
    description:
      "Professional engine bay degreasing and detailing that looks as good as it runs.",
  },
  {
    name: "Scratch Removal",
    icon: Zap,
    description:
      "Expert paint correction that eliminates scratches, swirl marks, and surface imperfections.",
  },
  {
    name: "Fleet Cleaning",
    icon: Truck,
    description:
      "Volume pricing for business fleets. Keep your company vehicles looking professional every day.",
  },
  {
    name: "Boat Cleaning",
    icon: Anchor,
    description:
      "Full marine detailing — hull cleaning, interior refresh, and protective coatings for your vessel.",
  },
];

const testimonials = [
  {
    quote:
      "My 11-year-old luxury car has NEVER looked so good.",
    name: "Sarah",
  },
  {
    quote:
      "Fantastic work — we had water damage and mold. After Ryan was finished I realized I've really been missing out on keeping my cars fresh.",
    name: "Mike",
  },
  {
    quote:
      "I brought my Nissan in that had been sitting for over a year and was mice infested, so the smell was awful. Extreme Clean did a great job getting all the smell out and making the carpets and seats look brand new again. 110% recommend.",
    name: "Jessica",
  },
  {
    quote:
      "I brought my jeep in for a full detail — got all the dog hair out, all the mold removed from my trunk. 10/10, the customer service was great and felt like my car was in good hands the whole time.",
    name: "Chris",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section id="hero" className="relative flex min-h-screen items-center">
        <Image
          src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=1800&q=80"
          alt="Freshly detailed dark car with ceramic coating shine"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Eugene, Oregon
          </p>
          <h1 className="mb-6 max-w-4xl font-display text-5xl leading-none tracking-wider text-white sm:text-7xl lg:text-8xl">
            LANE COUNTY&apos;S FINEST AUTO DETAILING
          </h1>
          <p className="mb-10 max-w-xl text-lg text-white/70">
            21 years of transforming vehicles in Eugene. Interior, exterior,
            ceramic coatings, and more.
          </p>
          <HeroCTAs />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-charcoal py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-around gap-10 px-6 md:flex-row md:gap-0">
          {[
            { number: "21+", label: "Years in Business" },
            { number: "1,000+", label: "Happy Customers" },
            { number: "100%", label: "Satisfaction Guaranteed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl tracking-wider text-gold sm:text-6xl">
                {stat.number}
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-gold">
            Our Services
          </p>
          <h2 className="mb-16 text-center font-display text-4xl tracking-wider text-white sm:text-5xl">
            WHAT WE DO
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="border border-transparent bg-charcoal p-8 transition-colors hover:border-gold"
                >
                  <Icon className="mb-4 h-8 w-8 text-gold" />
                  <h3 className="mb-2 font-display text-xl tracking-wider text-white">
                    {service.name.toUpperCase()}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BEFORE / AFTER ===== */}
      <section id="gallery" className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-gold">
            Results
          </p>
          <h2 className="mb-16 text-center font-display text-4xl tracking-wider text-white sm:text-5xl">
            THE TRANSFORMATION
          </h2>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* ===== WHY EXTREME CLEAN ===== */}
      <section id="about" className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-gold">
            Why Us
          </p>
          <h2 className="mb-16 text-center font-display text-4xl tracking-wider text-white sm:text-5xl">
            WHY EXTREME CLEAN
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: Flashlight,
                title: "21 YEARS OF EXPERTISE",
                body: "Family-owned and woman-managed since 2003. We've seen every kind of mess and we know exactly how to fix it.",
              },
              {
                icon: Star,
                title: "RESULTS THAT SPEAK FOR THEMSELVES",
                body: "From mold and mildew to pet hair and water damage — our customers consistently say it looks better than the day they bought it.",
              },
              {
                icon: BadgeCheck,
                title: "EVERY VEHICLE, EVERY TIME",
                body: "Senior, military, student, and fleet discounts available. We treat every car like it's our own.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <Icon className="mx-auto mb-4 h-10 w-10 text-gold" />
                  <h3 className="mb-3 font-display text-2xl tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-2 text-center text-sm uppercase tracking-[0.3em] text-gold">
            Reviews
          </p>
          <h2 className="mb-16 text-center font-display text-4xl tracking-wider text-white sm:text-5xl">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-charcoal p-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-white/80 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/40">
                    Eugene, OR &middot; Verified Yelp Review
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DISCOUNTS BANNER ===== */}
      <section className="bg-gold py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-display text-4xl tracking-wider text-dark sm:text-5xl">
            WE APPRECIATE YOUR SERVICE
          </h2>
          <p className="mb-8 text-lg font-medium text-dark/80">
            Senior &middot; Military &middot; Student &middot; Fleet &middot;
            Multi-Car
          </p>
          <DiscountCTA />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left: info */}
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gold">
                Get in Touch
              </p>
              <h2 className="mb-8 font-display text-4xl tracking-wider text-white sm:text-5xl">
                READY TO BOOK?
              </h2>
              <p className="mb-8 text-lg text-white/60">
                Call or text Trina directly.
              </p>
              <div className="flex flex-col gap-6">
                <a
                  href="tel:+15415562832"
                  className="flex items-center gap-3 text-lg text-white transition-colors hover:text-gold"
                >
                  <Phone className="h-5 w-5 text-gold" />
                  (541) 556-2832
                </a>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>2040 W 6th Ave, Eugene, OR 97402</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Clock className="h-5 w-5 text-gold" />
                  <span>Mon&ndash;Fri 9am&ndash;6pm</span>
                </div>
                <a
                  href="https://instagram.com/extremecleaneugene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 transition-colors hover:text-gold"
                >
                  <Camera className="h-5 w-5 text-gold" />
                  @extremecleaneugene
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gold bg-dark/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-xl tracking-wider text-gold">
              EXTREME CLEAN AUTO DETAIL
            </p>
            <p className="text-sm text-white/40">
              Eugene, OR &middot; (541) 556-2832
            </p>
          </div>
          <FooterNav />
          <p className="text-xs text-white/30">
            &copy; 2025 Extreme Clean Auto Detail. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

