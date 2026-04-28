import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoBgW from "../assets/logo/logo_bg_w.png";

const linksLeft = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
];
const linksRight = [
  { to: "/story", label: "Story" },
  { to: "/locations", label: "Locations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className="fixed top-0 inset-x-0 z-[1000] transition-all duration-500"
    >
      <div
        className={`mx-auto bg-white/80 backdrop-blur-md border-b-2 border-forest/10 transition-all duration-500 ${scrolled ? "shadow-[0_8px_30px_-12px_rgba(26,94,58,0.25)]" : ""
          }`}
        style={{ height: scrolled ? 72 : 96 }}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* LEFT */}
          <nav className="hidden md:flex items-center gap-10 flex-1">
            {linksLeft.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `nav-link text-[12px] font-bold tracking-[0.25em] uppercase text-forest ${isActive ? "active" : ""
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* CENTER LOGO */}
          <Link
            to="/"
            data-testid="nav-logo"
            aria-label="Madras Cafe — Home"
            className="flex flex-col items-center select-none"
          >
            <img
              src={logoBgW}
              alt="Madras Cafe"
              className={`object-contain transition-all duration-500 h-20`}
            />
          </Link>

          {/* RIGHT */}
          <nav className="hidden md:flex items-center gap-10 flex-1 justify-end">
            {linksRight.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `nav-link text-[12px] font-bold tracking-[0.25em] uppercase text-forest ${isActive ? "active" : ""
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            data-testid="mobile-menu-toggle"
            aria-label="Open menu"
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden text-forest p-2 -mr-2"
          >
            {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-white border-b-2 border-forest"
            data-testid="mobile-menu-panel"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {[...linksLeft, ...linksRight].map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  data-testid={`mobile-link-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-display text-4xl ${isActive ? "text-gold" : "text-forest"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/franchise"
                data-testid="mobile-franchise"
                className="font-display text-4xl text-forest"
              >
                Franchise
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
