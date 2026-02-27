import { motion } from "motion/react";
import { Mail } from "lucide-react";
import "./AboutPage.css";
import theDesignStudio from "../assets/sponsors/theDesignStudio.png";
import lfted from "../assets/sponsors/lfted.png";
import betheaFamilyDentistry from "../assets/sponsors/betheaFamilyDentistry.png";
import dominionEnergy from "../assets/sponsors/dominionEnergy.jpg";
import caba from "../assets/sponsors/caba.jpg";
import grace from "../assets/sponsors/grace.png";
import beyondThe from "../assets/sponsors/beyondThe.png";
import snaplySites from "../assets/sponsors/snaplySites.png";
import dnd from "../assets/sponsors/dnd.png";
import carolinaScreenPrinters from "../assets/sponsors/carolinaScreenPrinters.png";
import villaTronco from "../assets/sponsors/villaTronco.png";
import breakPoint from "../assets/sponsors/breakPoint.jpg";
import noreta from "../assets/sponsors/noreta.jpg";
import boydInnovation from "../assets/sponsors/boydInnovation.jpg";
import colaOBO from "../assets/sponsors/colaOBO.jpg";
import asme from "../assets/sponsors/asme.jpg";
import cityOfColumbia from "../assets/sponsors/cityOfColumbia.png";
import cayce from "../assets/sponsors/cayce.png";
import columbiaConnectors from "../assets/sponsors/columbiaConnectors.png";
import cor from "../assets/sponsors/cor.png";
import columbiaChamber from "../assets/sponsors/columbiaChamber.png";
import colaDaily from "../assets/sponsors/colaDaily.png";



export function SponsorsPage() {
  const sponsorTiers = [
    {
      tier: "ChangeMaker Sponsors",
      sponsors: [
        { name: "The Design Studio", logo: theDesignStudio, href: "https://sc.edu/study/colleges_schools/artsandsciences/visual_art_and_design/study/undergraduate/studio_art/graphics/course_experience/design_studio/" },
        { name: "LFTED Marketing Management", logo: lfted, href: "https://getlfted.com/" },
      ],
    },
    {
      tier: "Platinum Sponsors",
      sponsors: [ 
        { name: "Bethea Family Dentistry", logo: betheaFamilyDentistry, href: "https://betheafamilydentistry.com/" },
        { name: "Dominion Energy", logo: dominionEnergy, href: "https://www.dominionenergy.com/south-carolina"},
        { name: "Carolinas AAPI Business Alliance", logo: caba, href: "https://www.cabausa.org/"},
        { name: "Grace", logo: grace, href: "https://graceoutdoor.com/"},

      ],
    },
    {
      tier: "Silver Sponsors",
      sponsors: [
        { name: "Beyond The", logo: beyondThe, href: ""},
        { name: "Snaply Sites", logo: snaplySites, href: "https://snaplysites.com/"},
        { name: "D. Nichole Davis", logo: dnd, href: "https://www.dnicholedavis.com/"},
        { name: "Carolina Screen Printers", logo: carolinaScreenPrinters, href: "https://www.carolinascreenprinters.com/"},
      ],
    },
    {
      tier: "Bronze Sponsors",
      sponsors: [
        { name: "Villa Tronco", logo: villaTronco, href: "https://www.villatronco.com/"},
        { name: "Break Point", logo: breakPoint, href: "https://www.breakpointcola.com/"},
      ],
    },
    {
      tier: "Production Sponsors",
      sponsors: [
        { name: "Noreta", logo: noreta, href: "https://www.noreta.com/"},
      ],
    },
    {
      tier: "Premium Partners",
      sponsors: [
        { name: "Boyd Innovation", logo: boydInnovation, href: "https://www.boydinnovation.org/"},
        { name: "Columbia OBO", logo: colaOBO, href: "https://www.obo.columbiasc.gov/"},
        {
          name: "ASME Columbia Section",
          logo: asme,
          href: "https://www.asme.org/communities/sections/columbia-sc",
        }
      ],
    },
    {
      tier: "City Partners",
      sponsors: [
        { name: "City of Columbia", logo: cityOfColumbia, href: "https://www.columbiasc.gov/"},
        { name: "Cayce", logo: cayce, href: "https://www.caycesc.gov/"},
      ],
    },
    {
      tier: "Promotional Partners",
      sponsors: [
        { name: "Columbia Connectors", logo: columbiaConnectors, href: "https://www.columbiaconnectors.com/"},
        { name: "COR", logo: cor, href: "https://www.ourcor.org/"},
        { name: "Columbia Chamber", logo: columbiaChamber, href: "https://www.columbiachamber.com/"},
        { name: "Cola Daily", logo: colaDaily, href: "https://www.coladaily.com/"},
      ],
    },
  ];

  const email = "sponsorships@tedxcongareevista.com";

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <section className="about-hero">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-hero-title">
              Our <span className="text-[#E62B1E]">Sponsors</span>
            </h1>
            <p className="about-hero-subtitle">
              Thank you to our generous partners who make TEDxCongaree Vista possible
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * tierIndex, duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <h2 className="text-3xl md:text-4xl text-center text-black dark:text-white">{tier.tier}</h2>
              </div>
              {/* Sponsor Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {tier.sponsors.map((sponsor, index) => (
                  <motion.a
                    key={`${tier.tier}-${sponsor.name}`}
                    href={sponsor.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className={`
                      bg-white
                      dark:bg-white
                      border border-gray-200
                      rounded-xl
                      h-[200px] w-[200px]
                      flex items-center justify-center
                      shadow-sm hover:shadow-md
                      transition-all
                    `}
                  >
                    <div className="w-70 h-70 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-gray-100 dark:to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-black dark:text-white">
            Become a <span className="text-[#E62B1E]">Sponsor</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Partner with us to amplify ideas worth spreading and make a lasting impact in our community
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#E62B1E] text-white rounded-full hover:bg-[#CC2619] transition-colors"
              href="https://drive.google.com/file/d/1W9mbkAPoluSqgIxdvHNCxzdjsKxX8aPG/view"
              target="_blank"
              rel="noreferrer"
            >
              Sponsorship Opportunities
            </motion.a>
            <a
              href={`mailto:${email}`}
              className="email-btn inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Mail size={18} /> Email Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}