import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import logoBgW from "../assets/logo/logo_bg_w.png";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-white border-t-[3px] border-forest"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 flex flex-col items-center text-center">
        {/* Brand */}
        <div className="select-none flex flex-col items-center">
          <img src={logoBgW} alt="Madras Cafe" className="h-32 object-contain" />
        </div>

        {/* Tagline */}
        <p className="font-italic-accent italic text-2xl md:text-3xl text-forest mt-10 max-w-xl">
          “Cooking that remembers — three generations, twenty-five plates, one
          brass davarah.”
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4 mt-12">
          <SocialLink href="#" label="Instagram" testid="footer-instagram">
            <Instagram size={18} />
          </SocialLink>
          <SocialLink href="#" label="Facebook" testid="footer-facebook">
            <Facebook size={18} />
          </SocialLink>
          <SocialLink href="#" label="Twitter" testid="footer-twitter">
            <Twitter size={18} />
          </SocialLink>
        </div>

        {/* Big nav grid */}
        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-bold text-[11px] tracking-[0.3em] uppercase text-forest">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/menu" className="nav-link">Menu</Link></li>
          <li><Link to="/story" className="nav-link">Story</Link></li>
          <li><Link to="/locations" className="nav-link">Locations</Link></li>
          <li><Link to="/franchise" className="nav-link">Franchise</Link></li>
        </ul>

        <div className="hairline my-12 w-full max-w-md h-px bg-forest/20" />

        {/* Bottom fineprint */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-3 text-[10px] uppercase tracking-[0.3em] text-forest/60">
          <p>© {new Date().getFullYear()} Madras Cafe. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li><a href="#" className="hover:text-forest">Privacy</a></li>
            <li><a href="#" className="hover:text-forest">Terms</a></li>
            <li><a href="#" className="hover:text-forest">Press</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, testid, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      data-testid={testid}
      className="h-11 w-11 inline-flex items-center justify-center border-2 border-forest text-forest hover:bg-forest hover:text-gold transition-all duration-300"
    >
      {children}
    </a>
  );
}
