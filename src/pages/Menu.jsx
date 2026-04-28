import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/site";

export default function Menu() {
  const [active, setActive] = useState("All");

  const items = useMemo(
    () =>
      active === "All"
        ? MENU_ITEMS
        : MENU_ITEMS.filter((m) => m.category === active),
    [active]
  );

  return (
    <PageWrapper testid="menu-page">
      {/* HEADER */}
      <section className="pt-44 md:pt-56 pb-12 px-6 md:px-12 text-center">
        <p
          className="text-[11px] font-bold tracking-[0.4em] uppercase text-gold mb-5"
          data-aos="fade-up"
        >
          Bill of Fare · 25 Plates · 4 Meals a Day
        </p>
        <h1
          className="font-display text-forest leading-[0.92] mx-auto max-w-5xl"
          style={{ fontSize: "clamp(3.6rem, 11vw, 9rem)" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The <span className="font-italic-accent italic font-medium text-gold">menu</span>.
        </h1>
        <p
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-forest/80 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Three regions, four meals a day. Recipes from Tamil Nadu, Karnataka,
          and Kerala — cooked the way our grandmothers taught us.
        </p>
      </section>

      {/* FILTER PILLS */}
      <section className="px-6 md:px-12 sticky top-[100px] md:top-[110px] z-30 bg-white/85 backdrop-blur-md py-5 border-y-2 border-forest/10">
        <div
          data-testid="menu-filters"
          className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3"
        >
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(cat)}
              className={`tag-pill ${active === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="bg-cream/50 py-20 md:py-28 px-6 md:px-12">
        <motion.div
          layout
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence>
            {items.map((d) => (
              <motion.article
                layout
                key={d.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`dish-${d.id}`}
                className="dish-card group"
              >
                <div className="img-hover aspect-[4/5] relative">
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-forest text-gold px-3 py-1 text-[10px] font-bold tracking-[0.3em] uppercase">
                    {d.tag}
                  </span>
                </div>
                <div className="p-5 md:p-6 relative">
                  <span className="absolute -top-5 right-5 price-tag">
                    {d.price}
                  </span>
                  <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-forest/60 mb-2">
                    {d.category}
                  </p>
                  <h3 className="font-display text-3xl text-forest leading-tight">
                    {d.name}
                  </h3>
                  <p className="text-sm text-forest/75 mt-3 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {items.length === 0 && (
          <p className="text-center mt-16 font-italic-accent italic text-2xl text-forest/60">
            Nothing on this list — yet.
          </p>
        )}
      </section>
    </PageWrapper>
  );
}
