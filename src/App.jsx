import { useEffect, useState } from "react";
import "@/App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";

import LenisProvider from "@/components/LenisProvider";
import SplashLoader from "@/components/SplashLoader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Story from "@/pages/Story";
import Locations from "@/pages/Locations";
import Franchise from "@/pages/Franchise";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/story" element={<Story />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      mirror: false,
    });
  }, []);

  return (
    <div className="App">
      {!loaded && <SplashLoader onDone={() => setLoaded(true)} />}
      <BrowserRouter>
        <LenisProvider>
          <ScrollToTop />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </LenisProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
