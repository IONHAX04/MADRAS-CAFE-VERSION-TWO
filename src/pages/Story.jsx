import PageWrapper from "../components/PageWrapper";
import { STORY_IMAGE, INTERIOR_IMAGE } from "../data/site";

const TIMELINE = [
  { year: "1962", title: "Twelve guests, one veranda", body: "Lakshmi Iyer cooks her first dosa for the neighbours of Mylapore." },
  { year: "1978", title: "The brass davarah arrives", body: "A regular gifts an heirloom set of filter coffee tumblers. They have never left the counter." },
  { year: "1995", title: "The kitchen opens its doors", body: "Madras Cafe moves to its current heritage building. Two recipes change. Twenty-three remain untouched." },
  { year: "2014", title: "Indiranagar opens", body: "Our second outlet opens in Bengaluru, with the same six cooks training the new line for a year." },
  { year: "Today", title: "A loud, considered kitchen", body: "Three generations have cooked here. The menu is short, the rooms are small, the welcome is the same." },
];

export default function Story() {
  return (
    <PageWrapper testid="story-page">
      {/* HEADER */}
      <section className="pt-44 md:pt-56 pb-16 px-6 md:px-12 text-center">
        <p
          className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold mb-5"
          data-aos="fade-up"
        >
          Sixty years · One room · Three generations
        </p>
        <h1
          className="font-display text-forest leading-[0.9] mx-auto max-w-5xl"
          style={{ fontSize: "clamp(3.6rem, 11vw, 9rem)" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our <span className="font-italic-accent italic font-medium text-gold">story</span>.
        </h1>
      </section>

      {/* PULL QUOTE / IMG */}
      <section
        data-testid="story-hero-image"
        className="bg-forest text-cream px-6 md:px-12 py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-7" data-aos="fade-up">
            <p className="font-italic-accent italic text-3xl md:text-5xl leading-[1.1]">
              “We did not start a restaurant.
              <br />
              We started a Tuesday lunch — and the neighbours stayed.”
            </p>
            <p className="mt-8 text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
              — Lakshmi Iyer · 1962
            </p>
          </div>
          <div
            className="md:col-span-5 img-hover border-[6px] border-gold shadow-[16px_16px_0_#f4b700]"
            data-aos="zoom-in"
          >
            <img
              src={STORY_IMAGE}
              alt="Chef plating in the Madras Cafe kitchen"
              loading="lazy"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section
        data-testid="story-timeline"
        className="bg-cream py-24 md:py-32 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-[11px] font-bold tracking-[0.4em] uppercase text-forest/70 text-center mb-4"
            data-aos="fade-up"
          >
            A timeline
          </p>
          <h2
            className="font-display text-forest text-center leading-[0.92] mb-16 md:mb-24"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Sixty years, in <span className="font-italic-accent italic font-medium text-gold">five chapters</span>.
          </h2>

          <ol className="relative border-l-[3px] border-forest pl-8 md:pl-12 space-y-16">
            {TIMELINE.map((t, i) => (
              <li
                key={t.year}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative"
              >
                <span className="absolute -left-[42px] md:-left-[55px] top-1 h-5 w-5 bg-gold border-[3px] border-forest" />
                <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold mb-3">
                  {t.year}
                </p>
                <h3 className="font-display text-3xl md:text-5xl text-forest leading-tight">
                  {t.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-forest/80 max-w-2xl leading-relaxed">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CHEF SPLIT */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center">
          <div
            className="md:col-span-6 img-hover border-[6px] border-forest shadow-[16px_16px_0_#f4b700]"
            data-aos="zoom-in"
          >
            <img
              src={INTERIOR_IMAGE}
              alt="Madras Cafe interior"
              loading="lazy"
              className="w-full h-[420px] md:h-[600px] object-cover"
            />
          </div>
          <div className="md:col-span-6" data-aos="fade-up">
            <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold mb-5">
              The Kitchen Today
            </p>
            <h2
              className="font-display text-forest leading-[0.92]"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
            >
              A small, <span className="font-italic-accent italic font-medium">considered</span> kitchen.
            </h2>
            <p className="mt-7 text-base md:text-lg text-forest/80 leading-relaxed max-w-lg">
              Our team is six. The menu is twenty-five plates. We open the
              doors at half past seven, sweep the floors with coconut-fibre
              brooms, and light the first stove with a match — the way we
              always have.
            </p>
            <p className="mt-5 text-base md:text-lg text-forest/80 leading-relaxed max-w-lg">
              Three of our cooks have worked here for more than thirty years.
              They will tell you, kindly, when a dish is wrong. They are
              usually right.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
