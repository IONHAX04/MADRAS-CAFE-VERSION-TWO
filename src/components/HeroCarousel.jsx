import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "../data/site";

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.0, ease: [0.65, 0, 0.35, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 1,
    transition: { duration: 1.0, ease: [0.65, 0, 0.35, 1] },
  }),
};

const textVariants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      setIndex((i) => (i + dir + HERO_SLIDES.length) % HERO_SLIDES.length);
    },
    []
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [go]);

  const slide = HERO_SLIDES[index];

  return (
    <section
      data-testid="hero-carousel"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title.join(" ")}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 max-w-7xl mx-auto pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-text"}
            variants={textVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-3xl pointer-events-auto"
          >
            <p className="text-[11px] md:text-xs font-bold tracking-[0.4em] uppercase text-gold mb-5">
              {slide.eyebrow}
            </p>
            <h1
              className="font-display text-white leading-[0.92]"
              style={{ fontSize: "clamp(3.2rem, 9vw, 8.5rem)" }}
            >
              {slide.title.map((t, i) => (
                <span key={i} className="block">
                  {t}
                </span>
              ))}
            </h1>
            <p className="font-italic-accent text-2xl md:text-3xl text-cream mt-6 max-w-xl">
              {slide.subtitle}
            </p>
            <button
              data-testid={`hero-cta-${slide.id}`}
              className="btn-sweep btn-sweep-gold mt-10 px-8 py-4 text-[12px]"
            >
              {slide.cta}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <button
        aria-label="Previous slide"
        data-testid="hero-prev"
        onClick={() => go(-1)}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 h-14 w-14 items-center justify-center bg-white/15 backdrop-blur-md border border-white/35 text-white hover:bg-gold hover:text-forest transition-all duration-300"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        aria-label="Next slide"
        data-testid="hero-next"
        onClick={() => go(1)}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 h-14 w-14 items-center justify-center bg-white/15 backdrop-blur-md border border-white/35 text-white hover:bg-gold hover:text-forest transition-all duration-300"
      >
        <ChevronRight size={28} />
      </button>

      {/* DOTS / progress */}
      <div className="absolute bottom-10 right-6 md:right-16 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            data-testid={`hero-dot-${i}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-[3px] transition-all duration-500 ${
              i === index ? "w-12 bg-gold" : "w-6 bg-white/45"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 left-6 md:left-16 z-20 text-white font-display flex items-baseline gap-2">
        <span className="text-3xl">{String(index + 1).padStart(2, "0")}</span>
        <span className="text-sm font-bold tracking-[0.3em] uppercase text-white/60">
          / {String(HERO_SLIDES.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
