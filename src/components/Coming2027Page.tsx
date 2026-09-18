import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Bell, CalendarClock, Mail, Mic, Ticket, UserPlus, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImg from "../assets/2017ColumbiaSkylineTEDx.webp";
import "./AboutPage.css";
import "./Coming2027Page.css";

// TODO: swap in the real 2027 speaker application link once it's live.
const SPEAKER_APPLICATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf_SdqT8h5yr8yoOKKQHBEkiATuG-Sysx0LheKy7xSFA7Q5WQ/viewform?usp=dialog";
const SPONSOR_EMAIL = "sponsorships@tedxcongareevista.com";
const NEWSLETTER_SCRIPT_SRC = "https://tedxcongareevista.kit.com/df833b7ecf/index.js";
const NEWSLETTER_UID = "df833b7ecf";
const NEWSLETTER_FALLBACK_URL = "https://news.tedxcongareevista.com";
const TEAM_APPLICATION_URL = "https://www.inspirecolumbia.org/positions/associate-2026";

export function Coming2027Page() {
  const newsletterFormRef = useRef<HTMLDivElement>(null);
  const [newsletterUnavailable, setNewsletterUnavailable] = useState(false);

  useEffect(() => {
    const container = newsletterFormRef.current;
    // Kit's script replaces itself with a <form> once it loads, so a
    // "script" check alone misses an already-rendered form on a second
    // effect run (e.g. dev Fast Refresh) and would inject a duplicate.
    if (!container || container.hasChildNodes()) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = NEWSLETTER_SCRIPT_SRC;
    script.setAttribute("data-uid", NEWSLETTER_UID);

    // Kit's embed is allow-listed to the production domain, so it silently
    // no-ops (no error event) on Vercel preview URLs. Fall back to a plain
    // link if the form never actually renders within a few seconds.
    const fallbackTimer = window.setTimeout(() => {
      if (!container.querySelector(".formkit-form")) {
        setNewsletterUnavailable(true);
      }
    }, 4000);

    script.onerror = () => {
      window.clearTimeout(fallbackTimer);
      setNewsletterUnavailable(true);
    };

    script.onload = () => {
      window.clearTimeout(fallbackTimer);
      const fields = container.querySelector(".formkit-fields");
      const submitBtn = container.querySelector(".formkit-submit");
      if (!fields) {
        setNewsletterUnavailable(true);
        return;
      }
      // The hosted form template for this account ships without an email
      // field, so add the standard Kit field the submit handler expects.
      if (!fields.querySelector("input[name='email_address']")) {
        const field = document.createElement("div");
        field.className = "formkit-field";
        const input = document.createElement("input");
        input.className = "formkit-input";
        input.type = "email";
        input.name = "email_address";
        input.placeholder = "Email Address";
        input.autocomplete = "email";
        input.required = true;
        field.appendChild(input);
        fields.insertBefore(field, submitBtn);
      }
    };
    container.appendChild(script);

    return () => {
      window.clearTimeout(fallbackTimer);
      container.innerHTML = "";
    };
  }, []);

  const teasers = [
    { icon: CalendarClock, label: "Date", value: "Coming soon" },
    { icon: Ticket, label: "Tickets", value: "Coming soon" },
    { icon: Users, label: "Speakers", value: "Coming soon" },
  ];

  const actions = [
    {
      icon: Mic,
      title: "Apply to Speak",
      description:
        "Speaker applications for TEDxCongaree Vista 2027 are open now. Tell us about the idea worth spreading you'd bring to our stage.",
      href: SPEAKER_APPLICATION_URL,
      label: "Start Your Application",
      variant: "solid" as const,
    },
    {
      icon: Users,
      title: "Become a Sponsor",
      description:
        "Partner with us early and help shape the return of TEDxCongaree Vista. Reach out to our sponsor team to talk opportunities.",
      href: `mailto:${SPONSOR_EMAIL}`,
      label: "Email Our Sponsorships Team",
      variant: "outline" as const,
      icon2: Mail,
    },
    {
      icon: UserPlus,
      title: "Join Our Team",
      description:
        "We're building our 2027 team across Finance & Legal, Tech & Web, Marketing & Press, Sponsorships & Fundraising, Speaker Curation, and Production & Operations.",
      href: TEAM_APPLICATION_URL,
      label: "Apply to Join Our Team",
      variant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero */}
      <section className="coming-2027-hero">
        <ImageWithFallback
          src={heroImg}
          alt="Congaree Vista skyline"
          className="coming-2027-hero-img"
        />
        <div className="coming-2027-hero-overlay" />
        <div className="coming-2027-hero-content max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="coming-2027-title">
              TEDxCongaree Vista is <span className="coming-2027-title-accent">coming back.</span>
            </h1>
            <p className="coming-2027-tagline">April 2027 &middot; Columbia, SC</p>
            <p className="coming-2027-subtitle">
              The date, tickets, and our next lineup of speakers are on the way. In the
              meantime, here's how to get involved right now.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Get involved */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actions.map((action, index) => {
              const Icon2 = action.icon2 ?? ArrowRight;
              return (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-md flex flex-col"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E62B1E] rounded-full mb-6">
                    <action.icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-2xl mb-3 text-black">{action.title}</h2>
                  <p className="text-gray-600 mb-6">{action.description}</p>
                  {action.variant === "solid" ? (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#E62B1E] text-white rounded-full hover:bg-[#CC2619] transition-colors"
                    >
                      {action.label} <ArrowRight size={18} />
                    </motion.a>
                  ) : (
                    <a
                      href={action.href}
                      target={action.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={action.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="email-btn mt-auto inline-flex items-center justify-center gap-2 border border-gray-200 text-black hover:bg-gray-50"
                    >
                      <Icon2 size={18} /> {action.label}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Newsletter */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="coming-2027-newsletter"
          >
            <div className="coming-2027-newsletter-copy">
              <div className="coming-2027-newsletter-icon">
                <Bell className="text-white" size={20} />
              </div>
              <div>
                <h2 className="coming-2027-newsletter-title">Subscribe to our Newsletter</h2>
                <p className="coming-2027-newsletter-text">
                  Be the first to get notified when the date, tickets, and speaker lineup go live.
                </p>
              </div>
            </div>
            <div
              className="coming-2027-newsletter-form"
              ref={newsletterFormRef}
              style={newsletterUnavailable ? { display: "none" } : undefined}
            />
            {newsletterUnavailable && (
              <a
                href={NEWSLETTER_FALLBACK_URL}
                target="_blank"
                rel="noreferrer"
                className="coming-2027-newsletter-fallback"
              >
                Sign Up at news.tedxcongareevista.com
                <ArrowRight size={16} />
              </a>
            )}
          </motion.div>
        </section>

        {/* Stay tuned strip */}
        <section className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {teasers.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="coming-2027-teaser-card"
              >
                <Icon className="coming-2027-teaser-icon" size={28} />
                <p className="coming-2027-teaser-label">{label}</p>
                <p className="coming-2027-teaser-value">{value}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
