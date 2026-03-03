// NewsPage.tsx
import { motion } from "motion/react";
import { ExternalLink, Play } from "lucide-react";
import "./AboutPage.css";
import "./NewsPage.css";

const VIDEOS = [
  {
    href: "https://youtu.be/nfvWXBNgobg",
    id: "nfvWXBNgobg",
    title: "Meet the Team!",
  },
  {
    href: "https://www.youtube.com/watch?v=dLq_kUdfb9M",
    id: "dLq_kUdfb9M",
    title: "Do people in Columbia, SC know about TEDx? | Part 1",
  },
  {
    href: "https://www.youtube.com/watch?v=AwS1o-OA_-s",
    id: "AwS1o-OA_-s",
    title: "Live on Wis 10!",
  },
  {
    href: "https://www.youtube.com/watch?v=6Yj4aHgXcKE",
    id: "6Yj4aHgXcKE",
    title: "Do people in Columbia, SC know about TEDx? | Part 2",
  },
  {
    href: "https://www.youtube.com/watch?v=PYfPmI1uQdo",
    id: "PYfPmI1uQdo",
    title: "Speaker meet & greet!",
  },
];

export function NewsPage() {
  const NEWS_URL = "https://news.tedxcongareevista.com";

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header (match AboutPage style) */}
      <section className="about-hero">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <h1 className="about-hero-title">
              Latest <span className="text-[#E62B1E]">News</span>
            </h1>
            <p className="about-hero-subtitle">
              Updates and announcements from TEDxCongaree Vista.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="pt-20 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT: News Feed (80%) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="news-card rounded-2xl border border-gray-200 bg-transparent">
                <div className="news-card-header">
                  <div className="min-w-0">
                    <p className="news-card-title text-black">
                      News Feed
                    </p>
                    <p className="news-card-subtitle text-gray-600 truncate">
                      Latest posts from our newsletter site.
                    </p>
                  </div>

                  <a
                    href={NEWS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="news-open-link"
                  >
                    Open <ExternalLink size={16} />
                  </a>
                </div>

                <div className="news-iframe-wrap">
                  <iframe
                    title="TEDxCongaree Vista News"
                    src={NEWS_URL}
                    className="news-iframe"
                    sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Videos Sidebar (20%) — scrollable */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:flex-shrink-0 lg:w-1/5"
            >
              <div className="video-card border border-gray-200 bg-transparent">
                <div className="video-card-header">
                  <div className="min-w-0">
                    <p className="video-card-title text-black">
                      Videos
                    </p>
                    <p className="video-card-subtitle text-gray-600">
                      Watch & share.
                    </p>
                  </div>
                </div>

                <div className="video-list">
                  {VIDEOS.map((v) => (
                    <a
                      key={v.id}
                      href={v.href}
                      target="_blank"
                      rel="noreferrer"
                      className="video-item"
                    >
                      <div className="video-thumb">
                        <img
                          src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                          alt={v.title}
                          loading="lazy"
                        />
                        <div className="video-thumb-overlay" />
                        <span className="video-play" aria-hidden="true">
                          <Play size={16} />
                        </span>
                      </div>

                      <div className="video-meta">
                        <div className="video-title text-black">
                          {v.title}
                        </div>
                        <div className="video-action text-gray-700">
                          Watch on YouTube <ExternalLink size={14} />
                        </div>
                      </div>
                    </a>
                  ))}

                  {VIDEOS.length === 0 && (
                    <div className="video-empty text-gray-700">
                      No videos yet.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}