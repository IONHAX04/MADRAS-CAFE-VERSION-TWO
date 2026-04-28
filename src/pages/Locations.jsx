import { useState } from "react";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { LOCATIONS } from "../data/site";

export default function Locations() {
  const [active, setActive] = useState(LOCATIONS[0].id);
  const loc = LOCATIONS.find((l) => l.id === active) || LOCATIONS[0];

  return (
    <PageWrapper testid="locations-page">
      {/* HEADER */}
      <section className="pt-44 md:pt-56 pb-12 px-6 md:px-12 text-center">
        <p
          className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold mb-5"
          data-aos="fade-up"
        >
          Four cities · One kitchen
        </p>
        <h1
          className="font-display text-forest leading-[0.92] mx-auto max-w-5xl"
          style={{ fontSize: "clamp(3.6rem, 11vw, 9rem)" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Find <span className="font-italic-accent italic font-medium text-gold">us</span>.
        </h1>
      </section>

      {/* SPLIT-SCREEN */}
      <section
        data-testid="locations-split"
        className="grid grid-cols-1 md:grid-cols-2 border-t-[3px] border-forest"
      >
        {/* LEFT: scroll list */}
        <div className="bg-white">
          <ul className="divide-y-[3px] divide-forest">
            {LOCATIONS.map((l) => {
              const isActive = l.id === active;
              return (
                <li
                  key={l.id}
                  data-testid={`location-${l.id}`}
                  className={`relative px-6 md:px-10 py-10 md:py-12 cursor-pointer transition-colors duration-300 ${
                    isActive ? "bg-cream" : "bg-white hover:bg-cream/40"
                  }`}
                  onClick={() => setActive(l.id)}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold mb-3">
                        {l.flagship ? "Flagship · " : ""}
                        {l.city}
                      </p>
                      <h3
                        className="font-display text-forest leading-[0.95]"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                      >
                        {l.name.replace("Madras Cafe — ", "")}
                      </h3>
                      <ul className="mt-5 space-y-2 text-sm md:text-base text-forest/80">
                        <li className="flex items-start gap-3">
                          <MapPin size={16} className="mt-1 text-gold flex-shrink-0" />
                          <span>{l.address}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Phone size={16} className="mt-1 text-gold flex-shrink-0" />
                          <span>{l.phone}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Clock size={16} className="mt-1 text-gold flex-shrink-0" />
                          <span>{l.hours}</span>
                        </li>
                      </ul>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          l.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`directions-${l.id}`}
                        className="btn-sweep inline-flex items-center gap-2 mt-7 px-6 py-3 text-[11px]"
                      >
                        Directions
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                    <span
                      className={`hidden md:flex h-14 w-14 items-center justify-center font-display text-3xl border-[3px] ${
                        isActive
                          ? "bg-gold text-forest border-forest"
                          : "bg-white text-forest/40 border-forest/40"
                      }`}
                    >
                      {String(LOCATIONS.indexOf(l) + 1).padStart(2, "0")}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT: Map + visual */}
        <div className="bg-forest text-cream md:sticky md:top-0 md:h-screen md:overflow-hidden">
          <div className="relative h-[60vh] md:h-1/2 overflow-hidden border-b-[3px] border-gold">
            <img
              src={loc.image}
              alt={loc.name}
              loading="lazy"
              className="w-full h-full object-cover"
              key={loc.id + "-img"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
                Now showing
              </p>
              <p
                className="font-display leading-[0.92]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {loc.city}
              </p>
            </div>
          </div>
          <div className="relative h-[40vh] md:h-1/2">
            <iframe
              key={loc.id + "-map"}
              title={`${loc.name} map`}
              data-testid="location-map"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${loc.coords.bbox}&layer=mapnik&marker=${loc.coords.marker}`}
              className="absolute inset-0 w-full h-full grayscale-[40%] contrast-95"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 ring-[6px] ring-inset ring-forest" />
          </div>
        </div>
      </section>

      {/* PRIVATE EVENTS */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 text-center">
        <p
          className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold mb-5"
          data-aos="fade-up"
        >
          Private Events
        </p>
        <h2
          className="font-display text-forest mx-auto max-w-4xl leading-[0.95]"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The room, all to <span className="font-italic-accent italic font-medium text-gold">yourselves</span>.
        </h2>
        <p
          className="mt-6 max-w-xl mx-auto text-base md:text-lg text-forest/80 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We host small private dinners (up to 24 guests) at our Mylapore
          flagship. Write to us — we will design a menu around the occasion.
        </p>
        <a
          href="mailto:reservations@madrascafe.in"
          data-testid="locations-email"
          data-aos="fade-up"
          data-aos-delay="300"
          className="btn-sweep btn-sweep-gold inline-block mt-10 px-8 py-4 text-[12px]"
        >
          Write to us
        </a>
      </section>
    </PageWrapper>
  );
}
