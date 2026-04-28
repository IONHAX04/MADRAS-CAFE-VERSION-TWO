import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    // Lerp-based smoothing plays much nicer with sticky/horizontal-scroll
    // sections than duration-based easing, because every frame interpolates
    // toward the target so framer-motion's useScroll receives a continuously
    // updating scroll value instead of a queued tween.
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    let frame;
    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    // Expose for debugging if ever needed
    if (typeof window !== "undefined") window.__lenis = lenis;

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (typeof window !== "undefined") delete window.__lenis;
    };
  }, []);

  return children;
}
