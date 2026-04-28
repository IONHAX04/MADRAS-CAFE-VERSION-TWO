import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoBgW from "../assets/logo/logo_bg_w.png";

export default function SplashLoader({ onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      onDone?.();
    }, 1500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="splash-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-gold"
        >
          <div className="relative h-[300px] w-[300px] flex items-center justify-center rounded-full bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]">
            <Logo />
            {/* progress bar inside the circle */}
            <div className="absolute bottom-[58px] left-1/2 -translate-x-1/2 h-[3px] w-[180px] bg-forest/15 overflow-hidden">
              <div className="h-full bg-forest animate-progress-bar" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Logo() {
  return (
    <div className="flex flex-col items-center animate-pulse-logo">
      <img src={logoBgW} alt="Madras Cafe" className="h-32 object-contain" />
    </div>
  );
}
