import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import { STORY_IMAGE, INTERIOR_IMAGE, MENU_ITEMS } from "../data/site";

// Sticky horizontal scroll: container is h-[300vh], inner panel is sticky and translates X.
// On mobile we stack panels vertically.

const PANELS = [
  {
    kind: "intro",
    eyebrow: "Chapter 01",
    title: "A small kitchen,",
    titleAccent: "a long table.",
    body: "Madras Cafe is a sixty-year-old room in Mylapore. We cook the south of India the way our grandmothers did — slowly, quietly, with a brass davarah on the counter that has never left.",
    cta: { label: "Read the Story", to: "/story" },
    bg: "bg-cream",
    image: STORY_IMAGE,
  },
  {
    kind: "menu",
    eyebrow: "Chapter 02",
    title: "Twenty-five plates.",
    titleAccent: "One bill of fare.",
    body: "Three regions, four meals a day. Ghee Roast Dosas, Chettinad Biryani, Bisi Bele Bath, and a coffee that takes a minute and a half to pour.",
    cta: { label: "See the Menu", to: "/menu" },
    bg: "bg-forest text-white",
    items: MENU_ITEMS.slice(0, 4),
  },
  {
    kind: "lifestyle",
    eyebrow: "Chapter 03",
    title: "Loud floor.",
    titleAccent: "Loud kitchen.",
    body: "Our team is six. The menu is twenty-five plates. We open the doors at half past seven and light the first stove with a match — the way we always have.",
    cta: { label: "Find a Location", to: "/locations" },
    bg: "bg-gold text-forest",
    image: INTERIOR_IMAGE,
  },
];

export default function StickyHorizontalScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth the raw scrollYProgress with a spring so the horizontal pan feels
  // continuous even when Lenis is mid-interpolation. This prevents the
  // "snap/judder" that occurs when useScroll reads window.scrollY between
  // Lenis frames.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.35,
    restDelta: 0.0005,
  });

  // translate from 0 to -((PANELS.length - 1) * 100)vw over the section.
  // Important: percentages on a flex container are resolved against its OWN
  // width (sum of all panels = N * 100vw), so we use vw units to translate
  // exactly one viewport-width per panel transition.
  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0vw", `-${(PANELS.length - 1) * 100}vw`]
  );

  return (
    <>
      {/* Desktop sticky horizontal — give it 1.4x the panel count of vertical
          scroll room so each chapter has more "dwell time" while panning. */}
      <section
        ref={ref}
        data-testid="horizontal-scroll-section"
        className="relative hidden md:block"
        style={{ height: `${PANELS.length * 140}vh`, position: "relative" }}
      >
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          <motion.div
            style={{ x, willChange: "transform" }}
            className="flex h-full"
          >
            {PANELS.map((p, i) => (
              <Panel key={i} panel={p} index={i} />
            ))}
          </motion.div>

          {/* progress indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 bg-white/80 backdrop-blur-md px-5 py-3 border-2 border-forest">
            {PANELS.map((_, i) => (
              <ProgressBlip key={i} index={i} progress={smoothProgress} total={PANELS.length} />
            ))}
            <span className="ml-3 font-bold text-[10px] tracking-[0.4em] uppercase text-forest">
              Scroll →
            </span>
          </div>
        </div>
      </section>

      {/* Mobile stacked */}
      <section className="md:hidden" data-testid="horizontal-scroll-mobile">
        {PANELS.map((p, i) => (
          <div key={i} className={`min-h-screen w-full ${p.bg}`}>
            <Panel panel={p} index={i} mobile />
          </div>
        ))}
      </section>
    </>
  );
}

function ProgressBlip({ index, progress, total }) {
  // Each blip "fills" while the corresponding panel is the active one.
  // We map the global progress to a 0-1 fill range scoped to that panel's
  // share of the total scroll length: the active panel changes when the
  // user has crossed (panel-index / panels-1) of the way through.
  const denom = Math.max(1, total - 1);
  const start = index === 0 ? 0 : (index - 0.5) / denom;
  const end = (index + 0.5) / denom;
  const clampedStart = Math.max(0, start);
  const clampedEnd = Math.min(1, end);
  const w = useTransform(
    progress,
    [clampedStart, clampedEnd],
    ["0%", "100%"],
    { clamp: true }
  );
  return (
    <div className="relative h-[3px] w-10 bg-forest/20">
      <motion.div style={{ width: w }} className="absolute inset-y-0 left-0 bg-gold" />
    </div>
  );
}

function Panel({ panel, index, mobile = false }) {
  return (
    <div
      className={`flex-shrink-0 w-screen h-full ${panel.bg} relative ${
        mobile ? "py-24 px-6" : "px-10 md:px-20"
      }`}
      data-testid={`panel-${index}`}
    >
      <div className={`max-w-7xl mx-auto h-full grid grid-cols-1 ${
        panel.kind === "menu" ? "" : "md:grid-cols-2"
      } gap-12 md:gap-20 items-center`}>
        <div>
          <p className="text-[11px] font-bold tracking-[0.4em] uppercase mb-6 opacity-80">
            {panel.eyebrow}
          </p>
          <h2
            className="font-display leading-[0.92]"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            {panel.title}
            <br />
            <span className="font-italic-accent italic font-medium" style={{ fontSize: "0.85em" }}>
              {panel.titleAccent}
            </span>
          </h2>
          <p className="mt-7 text-lg md:text-xl leading-relaxed max-w-xl opacity-90">
            {panel.body}
          </p>
          <Link
            to={panel.cta.to}
            data-testid={`panel-${index}-cta`}
            className={`btn-sweep mt-10 inline-block px-8 py-4 text-[12px] ${
              panel.kind === "menu"
                ? "border-gold text-gold"
                : panel.kind === "lifestyle"
                ? "border-forest text-forest"
                : "border-forest text-forest"
            }`}
          >
            {panel.cta.label}
          </Link>
        </div>

        {panel.image && (
          <div className="relative img-hover h-[60vh] md:h-[70vh] border-[6px] border-forest shadow-[16px_16px_0_#f4b700]">
            <img
              src={panel.image}
              alt={panel.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {panel.kind === "menu" && (
          <div className="grid grid-cols-2 gap-5 md:gap-7 max-w-2xl md:absolute md:right-20 md:top-1/2 md:-translate-y-1/2 md:w-[44%] mt-10 md:mt-0">
            {panel.items.map((m) => (
              <div
                key={m.id}
                className="img-hover bg-white p-3 border-[3px] border-gold"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="pt-3 pb-1 flex items-baseline justify-between gap-3">
                  <p className="font-display text-lg text-forest leading-tight">
                    {m.name}
                  </p>
                  <span className="text-xs font-bold text-gold whitespace-nowrap">
                    {m.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
