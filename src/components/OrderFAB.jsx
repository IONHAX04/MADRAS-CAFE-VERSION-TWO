import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { FAB_LABEL } from "../data/site";

export default function OrderFAB() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.7, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[900]"
    >
      <Link
        to="/menu"
        data-testid="order-fab"
        aria-label={FAB_LABEL}
        className="group relative inline-flex items-center gap-3 bg-gold text-forest font-bold tracking-[0.2em] uppercase text-[11px] py-4 pl-5 pr-6 border-[3px] border-forest shadow-[6px_6px_0_#1a5e3a] hover:shadow-[10px_10px_0_#1a5e3a] hover:-translate-x-[3px] hover:-translate-y-[3px] transition-all duration-300"
      >
        <span className="relative h-9 w-9 rounded-full bg-forest text-gold flex items-center justify-center">
          <ShoppingBag size={16} />
          <span className="absolute -inset-1 rounded-full border-2 border-forest animate-spin-slow opacity-30" />
        </span>
        {FAB_LABEL}
      </Link>
    </motion.div>
  );
}
