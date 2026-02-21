import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";
import footerLogo from "../assets/longlogo-black.png";
import footerLogoDard from "../assets/longlogo-white.png";
import { motion } from "motion/react";

export function Footer() {
  const socials = [
    {
      Icon: Instagram,
      href: "https://www.instagram.com/tedxcongareevista/",
      label: "Instagram",
    },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/TEDxCongareeVista",
      label: "Facebook",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/tedxcongareevista/",
      label: "LinkedIn",
    },
    {
      Icon: Youtube,
      href: "https://www.youtube.com/@tedxcongareevista",
      label: "YouTube",
    },
    { Icon: Mail, href: "mailto:info@tedxcongareevista.org", label: "Email" },
  ];

  return (
    <footer className="bg-white/10 text-white px-6 pt-10 pb-28 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src={footerLogo}
            alt="TEDxCongaree Vista Footer Logo"
            className="w-full max-w-2xl h-auto object-contain"
          />

          {/* Disclaimer + Copyright */}
          <div className="mt-4">
            <p className="text-sm text-black">
              This independent TEDx event is operated under license from{" "}
              <a
                href="https://www.ted.com/"
                className="!underline underline-offset-4"
              >
                TED
              </a>
              .
            </p>

            <p className="text-sm text-black">
              © 2025{" "}
              <a
                href="https://changemakersevents.org/"
                className="!underline underline-offset-4"
              >
                ChangeMakers Events Inc.
              </a>
              , a 501(c)3 nonprofit. All rights reserved.
            </p>
          </div>
          <br></br>

          {/* Social Icons */}
          <div className="mt-10 w-full px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#E62B1E] transition hover:scale-110"
                >
                  <Icon className="h-15 w-20" />
                </a>
              ))}
            </div>
          </div>
          <br></br>

          {/* Links */}
            <div className="mt-4 flex items-center justify-center gap-6 text-sm text-black">
            <a
              href="https://tedxcongareevista.com/#about-ted"
              className="underline underline-offset-4 hover:text-gray-200"
            >
              About TED
            </a>
            <span className="text-gray-500">•</span>
            <a
              href="https://tedxcongareevista.com/#about-us"
              className="underline underline-offset-4 hover:text-gray-200"
            >
              About Us
            </a>
            <span className="text-gray-500">•</span>
            <a
              href="https://tedxcongareevista.com/#contact"
              className="underline underline-offset-4 hover:text-gray-200"
            >
              Contact Us
            </a>
          </div>
          <br></br>

          {/* Newsletter Signup */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 bg-white text-black placeholder-black focus:border-[#E62B1E] focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#E62B1E] text-white rounded-full hover:bg-[#CC2619] transition-colors whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
        <br></br>
      </div>
    </footer>
  );
}
