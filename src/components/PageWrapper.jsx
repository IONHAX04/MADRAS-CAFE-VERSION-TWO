import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PageWrapper({ children, testid }) {
  return (
    <motion.main
      data-testid={testid}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="min-h-screen bg-white text-forest"
    >
      {children}
    </motion.main>
  );
}
