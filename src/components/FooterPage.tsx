import { useState } from "react";
import { Instagram, Facebook, Linkedin, Youtube, Mail, Loader2, CheckCircle2, XCircle } from "lucide-react";
import footerLogo from "../assets/longlogo-black.png";
import footerLogoDard from "../assets/longlogo-white.png";
import { motion } from "motion/react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const apiKey = process.env.CONVERTKIT_API_KEY;
      const formId = process.env.CONVERTKIT_FORM_ID;

      if (!apiKey || !formId) {
        throw new Error("Newsletter configuration missing");
      }

      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

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
              © 2026{" "}
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
                  <Icon className="h-5 w-5" />
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
          <div className="max-w-lg mx-auto w-full">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 bg-white placeholder-gray-500 focus:border-[#E62B1E] focus:outline-none text-black disabled:opacity-50 disabled:bg-gray-100"
              />
              <motion.button
                whileHover={status === "loading" || status === "success" ? {} : { scale: 1.05 }}
                whileTap={status === "loading" || status === "success" ? {} : { scale: 0.95 }}
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-8 py-4 bg-[#E62B1E] text-white rounded-full hover:bg-[#CC2619] transition-colors whitespace-nowrap flex items-center justify-center min-w-[140px] disabled:opacity-80 disabled:hover:bg-[#E62B1E]"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  "Subscribe"
                )}
              </motion.button>
            </form>

            {/* Status Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 flex items-center justify-center gap-2 text-sm ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status === "success" ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <XCircle className="w-4 h-4" />
                )}
                {message}
              </motion.div>
            )}
          </div>
        </div>
        <br></br>
      </div>
    </footer>
  );
}
