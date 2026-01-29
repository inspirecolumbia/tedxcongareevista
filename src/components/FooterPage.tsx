import { Instagram, Facebook, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import footerLogo from "/assets/footer-logo.png";

// --- Constants ---
const SOCIALS = [
  { Icon: Instagram, href: "https://www.instagram.com/tedxcongareevista/", label: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/TEDxCongareeVista", label: "Facebook" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/tedxcongareevista/", label: "LinkedIn" },
  { Icon: Youtube, href: "https://www.youtube.com/@tedxcongareevista", label: "YouTube" },
  { Icon: Mail, href: "mailto:info@tedxcongareevista.org", label: "Email" },
];

const QUICK_LINKS = [
  { label: "About TED", href: "#about-ted" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact" },
];

// --- Sub-Components ---

function SocialLinks() {
  return (
    <div className="mt-4 flex gap-3">
      {SOCIALS.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="
            h-10 w-10 rounded-full bg-white/10 border border-white/20
            flex items-center justify-center
            hover:bg-[#E62B1E] hover:border-[#E62B1E] transition-all
          "
        >
          <Icon className="h-5 w-5 text-white" />
        </a>
      ))}
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API logic goes here
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="
              h-11 w-full sm:flex-1 rounded-lg bg-white/10 border border-white/20 px-4
              text-white placeholder:text-white/45 text-sm
              focus:outline-none focus:ring-2 focus:ring-[#E62B1E] focus:border-transparent
            "
          />
          <button
            type="submit"
            className="
              h-11 rounded-lg px-4 bg-[#E62B1E] text-white font-medium text-sm
              hover:bg-[#CC2619] transition-colors
              inline-flex items-center justify-center gap-2 whitespace-nowrap
            "
          >
            Subscribe <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>
      <SocialLinks />
    </div>
  );
}

// --- Main Component ---

export function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white">
      {/* Subtle gradient top border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section: Brand + Stay in Loop Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Logo and Description */}
          <div>
            <img
              src={footerLogo}
              alt="TEDxCongaree Vista"
              className="h-12 md:h-14 w-auto object-contain mb-4"
            />
            <p className="text-[14px] leading-relaxed text-white/75">
              TEDxCongaree Vista is an independently organized TEDx event based in Columbia, SC — built to spotlight local ChangeMakers and ideas worth spreading.
            </p>
            <p className="mt-3 text-[13px] text-white/60 leading-relaxed">
              This independent TEDx event is operated under license from{" "}
              <a
                href="https://www.ted.com/"
                className="underline underline-offset-4 hover:text-white/80"
              >
                TED
              </a>.
            </p>
          </div>

          {/* Right: Stay in Loop Header */}
          <div>
            <h4 className="text-sm font-semibold tracking-tight text-white mb-4">Stay in the loop</h4>
            <p className="text-[14px] text-white/75 leading-relaxed">
              Get updates on speakers, tickets, partners, and event announcements.
            </p>
          </div>
        </div>

        {/* Middle Section: Quick Links + Newsletter Form + Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-tight text-white mb-4">Quick links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-white/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Newsletter Form */}
          <NewsletterForm />
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-[12px]">
          <p className="text-white/60">
            © 2026{" "}
            <a
              href="https://changemakersevents.org/"
              className="underline underline-offset-4 hover:text-white/80"
            >
              ChangeMakers Events Inc.
            </a>
            , a 501(c)3 nonprofit. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-white/60">
            <span className="inline-flex items-center gap-2">
              <span className="h-[5px] w-[5px] rounded-full bg-[#E62B1E]" />
              Columbia, South Carolina
            </span>
            <span className="text-white/25">•</span>
            <a
              href="mailto:info@tedxcongareevista.org"
              className="underline underline-offset-4 hover:text-white/80"
            >
              info@tedxcongareevista.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}