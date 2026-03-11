import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { SpeakersPage } from "./components/SpeakersPage";
import { SponsorsPage } from "./components/SponsorsPage";
import { SupportPage } from "./components/SupportPage";
import { NewsPage } from "./components/NewsPage";
import { AboutPage } from "./components/AboutPage";
import { AboutTEDPage } from "./components/AboutTEDPage";
import { Footer } from "./components/FooterPage";

type Page = "home" | "speakers" | "sponsors" | "support" | "news" | "about" | "about-ted";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Backward compatibility redirects for hashes
  useEffect(() => {
    if (location.hash) {
      const hashMap: Record<string, string> = {
        "#speakers": "/speakers",
        "#sponsorships": "/sponsors",
        "#support": "/support",
        "#about-us": "/about",
      };

      const redirectPath = hashMap[location.hash];
      if (redirectPath) {
        navigate(redirectPath, { replace: true });
      }
    }
  }, [location.hash, navigate]);

  const SITE_TITLE = "TEDxCongaree Vista";

  // Infer a readable "currentPage" from the path so Navigation and title still work
  const currentPage = location.pathname.split("/")[1] || "home";

  useEffect(() => {
    const titles: Record<string, string> = {
      home: "",
      speakers: "Speakers",
      sponsors: "Sponsors",
      support: "Support",
      news: "News",
      about: "About",
      "about-ted": "About TED",
    };

    const pageTitle = titles[currentPage] || "";
    document.title = pageTitle ? `${pageTitle} | ${SITE_TITLE}` : SITE_TITLE;
  }, [currentPage]);

  // Pass navigation behavior temporarily to components expecting onNavigate prop
  const handleNavigate = (page: string) => {
    if (page === "home") {
      navigate("/");
    } else {
      navigate(`/${page}`);
    }
  };

  return (
    <ThemeProvider>
      {/* Make the app a column so footer can't get clipped by animated container */}
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-black/80 to-black">

        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Only animate page content */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
                <Route path="/speakers" element={<SpeakersPage />} />
                <Route path="/sponsors" element={<SponsorsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<HomePage onNavigate={handleNavigate} />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer must live outside AnimatePresence to prevent clipping */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
