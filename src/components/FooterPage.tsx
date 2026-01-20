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

function FooterBrand() {
  return (
    <div className="lg:col-span-5">
      <img
        src={footerLogo}
        alt="TEDxCongaree Vista"
        className="h-[64px] md:h-[78px] w-auto object-contain"
      />
      <p className="mt-6 text-[15px] leading-relaxed text-white/80 max-w-xl">
        TEDxCongaree Vista is an independently organized TEDx event based in Columbia, SC —
        built to spotlight local ChangeMakers and ideas worth spreading.
      </p>
      <p className="mt-5 text-[13px] text-white/65 leading-relaxed max-w-xl">
        This independent TEDx event is operated under license from{" "}
        <a
          href="https://www.ted.com/"
          className="underline underline-offset-4 hover:text-white"
        >
          TED
        </a>.
      </p>
    </div>
  );
}

function QuickLinks() {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-tight text-white">Quick links</h4>
      <ul className="mt-4 space-y-3">
        {QUICK_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[15px] text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <span className="h-[6px] w-[6px] rounded-full bg-[#E62B1E]" />
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {SOCIALS.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="
            h-11 w-11 rounded-xl bg-white/10 border border-white/10
            flex items-center justify-center
            hover:bg-white/15 transition-colors
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
      <h4 className="text-sm font-semibold tracking-tight text-white">Stay in the loop</h4>
      <p className="mt-4 text-[15px] text-white/75 leading-relaxed">
        Get updates on speakers, tickets, partners, and event announcements.
      </p>

      <form onSubmit={onSubmit} className="mt-5">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="
              h-12 w-full sm:flex-1 rounded-xl bg-white/10 border border-white/10 px-4
              text-white placeholder:text-white/45
              focus:outline-none focus:ring-2 focus:ring-[#E62B1E]
            "
          />
          <button
            type="submit"
            className="
              h-12 rounded-xl px-5 bg-[#E62B1E] text-white font-medium
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

function BottomBar() {
  return (
    <div className="mt-12 pt-7 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <p className="text-[13px] text-white/60">
        © 2026{" "}
        <a
          href="https://changemakersevents.org/"
          className="underline underline-offset-4 hover:text-white/80"
        >
          ChangeMakers Events Inc.
        </a>
        , a 501(c)3 nonprofit. All rights reserved.
      </p>

      <div className="flex items-center gap-3 text-[13px] text-white/60">
        <span className="inline-flex items-center gap-2">
          <span className="h-[6px] w-[6px] rounded-full bg-[#E62B1E]" />
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
  );
}

// --- Main Component ---

export function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white">
      {/* Subtle gradient top border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <FooterBrand />
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <QuickLinks />
              <NewsletterForm />
            </div>
          </div>
        </div>

        <BottomBar />
      </div>
    </footer>
  );
}