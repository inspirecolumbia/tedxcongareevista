import { motion } from "motion/react";
import { Heart, Users, MessageSquare, Calendar } from "lucide-react";
import "./AboutPage.css";
import "./NewsPage.css";

export function SupportPage() {
  const supportWays = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of passionate volunteers and help create an unforgettable experience",
      action: "Sign Up to Volunteer",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScFrVyPWl-e2bKzhG4zqqTGjCIn4XrtUKUvkGjOpkvb5qpxUg/viewform",
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Your generous donation to ChangeMakers Events helps us continue spreading ideas that matter",
      action: "Make a Donation",
      href: "https://www.zeffy.com/en-US/donation-form/support-educational-events-in-columbia-sc",
    },
    {
      icon: MessageSquare,
      title: "Spread the Word",
      description: "Share TEDxCongaree Vista with your network and help us reach more people",
      action: "Share Event",
      href: "https://www.instagram.com/tedxcongareevista",
    },
    {
      icon: Calendar,
      title: "Attend",
      description: "Be part of the live audience and experience the power of ideas firsthand",
      action: "Get Tickets",
      href: "https://tickets.coladaily.com/events/tedxcongaree-vista-3-14-2026",
    },
  ];

  const volunteerRoles = [
    "Event Day Coordination",
    "Speaker Support",
    "Registration & Guest Services",
    "Social Media & Marketing",
    "Photography & Videography",
    "Technical Support",
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <section className="about-hero news-hero">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-hero-title">
              Support Our Mission
            </h1>
            <p className="about-hero-subtitle">
              Help us create a platform for ideas worth spreading in our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Ways */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportWays.map((way, index) => (
              <a key={way.title} href={way.href} target="_blank" rel="noopener noreferrer" aria-label={`${way.title} - opens in new window`} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-[#E62B1E] rounded-full mb-6"
                  >
                    <way.icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-2xl mb-3 text-black">{way.title}</h3>
                  <p className="text-gray-600 mb-6">{way.description}</p>
                  <span className="text-[#E62B1E] group-hover:underline">
                    {way.action} →
                  </span>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-black">
              Volunteer <span className="text-[#E62B1E]">Roles</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore opportunities to contribute your skills and passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#E62B1E] transition-colors text-center cursor-pointer"
              >
                <p className="text-lg text-black">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}