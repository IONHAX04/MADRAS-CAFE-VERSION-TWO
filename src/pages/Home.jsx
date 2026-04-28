import PageWrapper from "../components/PageWrapper";
import HeroCarousel from "../components/HeroCarousel";
import StickyHorizontalScroll from "../components/StickyHorizontalScroll";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../data/site";

const featured = MENU_ITEMS.slice(0, 6);

export default function Home() {
  return (
    <PageWrapper testid="home-page">
      <HeroCarousel />

      {/* Marquee strip */}
      <section
        data-testid="marquee-strip"
        className="bg-forest text-gold py-6 overflow-hidden border-y-[3px] border-forest"
      >
        <div className="marquee-track gap-16 font-display text-4xl md:text-6xl whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-16 pr-16">
              <span>Ghee Roast Dosa</span>
              <span className="text-gold/40">•</span>
              <span className="font-italic-accent italic">Filter Coffee</span>
              <span className="text-gold/40">•</span>
              <span>Chettinad Biryani</span>
              <span className="text-gold/40">•</span>
              <span className="font-italic-accent italic">Bisi Bele Bath</span>
              <span className="text-gold/40">•</span>
              <span>Idli Sambar</span>
              <span className="text-gold/40">•</span>
              <span className="font-italic-accent italic">Medu Vada</span>
              <span className="text-gold/40">•</span>
            </div>
          ))}
        </div>
      </section>

      <StickyHorizontalScroll />

      {/* FEATURED MENU GRID */}
      <section
        data-testid="featured-grid"
        className="bg-cream py-24 md:py-32 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-forest/70 mb-4">
                Six plates, one room
              </p>
              <h2
                className="font-display text-forest leading-[0.92]"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                data-aos="fade-up"
              >
                The greatest hits.
              </h2>
            </div>
            <Link
              to="/menu"
              data-testid="featured-see-all"
              className="btn-sweep px-7 py-3 text-[12px] self-start md:self-end"
            >
              See full menu →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
            {featured.map((d, i) => (
              <article
                key={d.id}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="dish-card group"
              >
                <div className="img-hover aspect-[4/5]">
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6 relative">
                  <span className="absolute -top-5 right-5 price-tag">
                    {d.price}
                  </span>
                  <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold mb-2">
                    {d.tag} · {d.category}
                  </p>
                  <h3 className="font-display text-3xl text-forest leading-tight">
                    {d.name}
                  </h3>
                  <p className="text-sm text-forest/75 mt-3 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pull-quote band */}
      <section className="bg-white py-28 md:py-36 px-6 text-center">
        <p
          className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold mb-6"
          data-aos="fade-up"
        >
          On Hospitality
        </p>
        <blockquote
          className="font-italic-accent italic text-forest max-w-4xl mx-auto leading-[1.1]"
          style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          “To feed someone is to remember them. Everything else, we have
          learned, is decoration.”
        </blockquote>
        <p
          className="mt-8 text-[11px] font-bold tracking-[0.4em] uppercase text-forest/70"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          — Lakshmi Iyer · Founder · 1962
        </p>
      </section>
    </PageWrapper>
  );
}
