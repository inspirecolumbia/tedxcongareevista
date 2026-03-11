import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const path = window.location.pathname.replace("/", "");
    return (path as Page) || "home";
  });

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.history.pushState({}, "", `/${page === "home" ? "" : page}`);
    // Dispatch a custom event so other components (like Footer) can trigger nav changes properly
    window.dispatchEvent(new Event('pushstate'));
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace("/", "");
      setCurrentPage((path as Page) || "home");
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pushstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("pushstate", handlePopState);
    };
  }, []);

  const SITE_TITLE = "TEDxCongaree Vista";

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: "",
      speakers: "Speakers",
      sponsors: "Sponsors",
      support: "Support",
      news: "News",
      about: "About",
      "about-ted": "About TED",
    };

    const pageTitle = titles[currentPage];
    document.title = pageTitle ? `${pageTitle} | ${SITE_TITLE}` : SITE_TITLE;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "speakers":
        return <SpeakersPage />;
      case "sponsors":
        return <SponsorsPage />;
      case "support":
        return <SupportPage />;
      case "news":
        return <NewsPage />;
      case "about":
        return <AboutPage />;
      case "about-ted":
        return <AboutTEDPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
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
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer must live outside AnimatePresence to prevent clipping */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </ThemeProvider>
  );
}
