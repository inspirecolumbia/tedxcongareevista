import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { SpeakersPage } from "./components/SpeakersPage";
import { SponsorsPage } from "./components/SponsorsPage";
import { SupportPage } from "./components/SupportPage";
import { NewsPage } from "./components/NewsPage";
import { AboutPage } from "./components/AboutPage";
import { AboutTEDPage } from "./components/AboutTEDPage";
import { Footer } from "./components/FooterPage";

const SITE_TITLE = "TEDxCongaree Vista";

const PAGE_TITLES: Record<string, string> = {
  home: "",
  speakers: "Speakers",
  sponsors: "Sponsors",
  support: "Support",
  news: "News",
  about: "About",
  "about-ted": "About TED",
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = location.pathname.split("/")[1] || "home";

  // Update document title on navigation
  useEffect(() => {
    const pageTitle = PAGE_TITLES[currentPage] ?? "";
    document.title = pageTitle ? `${pageTitle} | ${SITE_TITLE}` : SITE_TITLE;
  }, [currentPage]);

  // Backward-compatibility redirects for legacy hash URLs from the old Carrd site
  useEffect(() => {
    if (!location.hash) return;
    const hashMap: Record<string, string> = {
      "#speakers": "/speakers",
      "#sponsorships": "/sponsors",
      "#support": "/support",
      "#about-us": "/about",
    };
    const redirect = hashMap[location.hash];
    if (redirect) navigate(redirect, { replace: true });
  }, [location.hash, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-black/80 to-black">
      <Navigation />

      <main className="flex-1">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/speakers" element={<SpeakersPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about-ted" element={<AboutTEDPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer lives outside AnimatePresence to avoid being clipped during transitions */}
      <Footer />
    </div>
  );
}
