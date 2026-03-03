import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import "./AboutPage.css";
import "./NewsPage.css"

import ElisePartin from "../assets/speakers/ElisePartin.jpg"
import TysonKBrown from "../assets/speakers/TysonKBrown.jpg"
import IvanSegura from "../assets/speakers/IvanSegura.jpg"
import ShannonIvey from "../assets/speakers/ShannonIvey.jpg"
import AndrewNye from "../assets/speakers/AndrewNye.jpg"
import KimberlySmith from "../assets/speakers/KimberlySmith.jpg"
import FabioMatta from "../assets/speakers/FabioMatta.jpg"
import MelissaBoylan from "../assets/speakers/MelissaBoylan.jpg"
import AlvinKing from "../assets/speakers/AlvinKing.jpg"
import ChristinaJones from "../assets/speakers/ChristinaJones.jpg"
import RisdonNSlate from "../assets/speakers/RisdonNSlate.jpg"
import MajdAbdallah from "../assets/speakers/MajdAbdallah.jpg"
import KevinWilliams from "../assets/speakers/KevinWilliams.jpg"
import TylerRobertson from "../assets/speakers/TylerRobertson.jpg"
import JordanThomas from "../assets/speakers/JordanThomas.jpg"
import MattVaadi from "../assets/speakers/MattVaadi.jpg"


// If this file lives in src/pages/, change the imports above to:
// import female1 from "../../assets/sample-speaker-female1.png";
// import female2 from "../../assets/sample-speaker-female2.png";
// import male from "../../assets/sample-speaker-male.png";

export function SpeakersPage() {
  const speakers = [
    { name: "Elise Partin, Mayor of Cayce", bio: "Longest-serving mayor in the Midlands; U.S. State Department speaker and advocate for women in leadership.", title: "It benefits us all to have more women in elected office. Let's make it happen", description: "Why communities thrive with more women leaders and the practical approach needed to elect and support them.", image: ElisePartin },
    { name: "Tyson Keon Brown, Executive Director, Project OneWay", bio: "Youth and culture leader; consultant to the City of Columbia on generational inclusion and small business development.", title: "Grow Up and Grow Old: Creating Cities of Lifelong Belonging", description: "Transforming cities by connecting young talent to real opportunities so they build and stay in the community long-term.", image: TysonKBrown },
    { name: "Ivan Segura, Director of Multicultural Affairs, SC Commission for Minority Affairs", bio: "Latino advocate with 20 years of grassroots leadership; founder of Palmetto Luna Arts; ACLU National Board member.", title: "Find Your Passion: Become a Pioneer", description: "Inspiring Latinos to use passion for advocacy to build stronger communities and expand representation.", image: IvanSegura },
    { name: "Shannon Ivey, Founder, #whatshesaidproject", bio: "Actor, director, TEDx alum, professional coach, founder of #whatshesaidproject, and stage III colorectal cancer survivor.", title: "Elephants Care Better", description: "What elephants and ring theory teach about centering and protecting vulnerable people and building stronger caring cultures.", image: ShannonIvey },
    { name: "Andrew Nye, Founder and CEO, Qatalyst Health", bio: "Founder of Qatalyst Health; USC alumnus working to reduce nursing home administrative burden through AI.", title: "Nowhere to Go: The Coming Nursing Home Crisis", description: "The looming workforce shortage in long-term care and how tech and policy must work together to protect aging Americans.", image: AndrewNye },
    { name: "Kimberly Smith, CEO, Health Evolve Technologies", bio: "CEO of Health Evolve Technologies; former hospital system executive and past Board Chair of the Preeclampsia Foundation; PhD student in Global Health Equity.", title: "From Hospital to Home: Tech's Role in Reclaiming America's Maternal Health Story", description: "Why maternal health outcomes improve when care moves beyond hospital walls into homes by blending devices, digital navigation, and social supports to close deadly gaps.", image: KimberlySmith },
    { name: "Fabio Matta, Associate Professor, Civil and Environmental Engineering, USC", bio: "USC engineering professor researching hazard-resistant earth masonry.", title: "From the ground up: Hazard-resistant homebuilding with dirt", description: "Using reinforced local soil to create affordable, sustainable homes that outperform traditional structures in extreme weather.", image: FabioMatta },
    { name: "Melissa Boylan, MD, Family Medicine Physician, Noreta Family Medicine", bio: "Family physician and founder of Noreta Family Medicine, using the direct primary care model.", title: "The Doctor Will See You Now, For Real This Time", description: "Why direct primary care strengthens doctor-patient trust, improves access, and reduces system burnout.", image: MelissaBoylan },
    { name: "Alvin King, Founder and Executive Director, Range Fore Hope Foundation", bio: "Retired U.S. Army First Sergeant; founder of Range Fore Hope Foundation supporting veterans and families.", title: "Teeing Off Trauma: How Golf Became a Lifeline for Veterans and Their Families", description: "How golf builds connection, restores identity, and supports healing for veterans and loved ones.", image: AlvinKing },
    { name: "Christina Jones, Licensed Professional Counselor, University of South Carolina", bio: "Licensed Professional Counselor and Supervisor at USC; neurodivergent advocate and trainer.", title: "Rethinking Spaces Through Neurodivergent Eyes", description: "Practical sensory environment changes, such as sound, light, and layout, that transform exclusion into belonging for neurodivergent people and everyone.", image: ChristinaJones },
    { name: "Risdon Nichols Slate, Professor Emeritus of Criminology, Florida Southern College", bio: "Professor Emeritus of Criminology; national expert on mental illness and criminal justice; congressional witness and CIT trainer.", title: "Mental Illness and the Criminal Justice System; Crisis and Opportunity", description: "Personal disclosure and systemic reform to reduce stigma and divert individuals with mental illness from incarceration toward treatment.", image: RisdonNSlate },
    { name: "Majd Abdallah, Founder, Foster Friendz", bio: "Foster care advocate; Clemson graduate; foster family recruiter; founder of Foster Friendz.", title: "From Foster Child to Changemaker: A Blue Bear's Story", description: "A simple blue stuffed bear as a tool to raise awareness, ignite empathy, and mobilize community support for foster youth.", image: MajdAbdallah }, 
    { name: "Kevin Williams, Co-Founder, Drawbridge Solutions", bio: "Vistage Chair and tech leader; founder of Drawbridge Solutions and owner of Escapology Columbia.", title: "The Irreplaceable Spark: Why Wild Ideas Matter More Than Ever", description: "Generative AI is derivative, which is why human creativity is more crucial than ever for original solutions and careers.", image: KevinWilliams },
    { name: "Tyler Robertson, Founder and CEO, Diesel Laptops", bio: "Founder who scaled Diesel Laptops from a $1,000 idea to a $100M+ company; blue-collar tech innovator.", title: "Leading When You Are Not in Charge", description: "A practical leadership formula built on clarity, competence, character, and connection for influence without authority.", image: TylerRobertson },
    { name: "Jordan Thomas, Co-Founder, share ONE love", bio: "Youth justice and peacebuilding practitioner working with SCDJJ and Global Unities.", title: "The Sport Remedy", description: "How sport biology and rhythm build regulation, connection, and resilience for youth on the margins.", image: JordanThomas },
    { name: "Matt Vaadi, CEO, guHRoo Payroll and HR", bio: "Social entrepreneur; CEO of guHRoo; co-founder of GrowCo supporting responsible entrepreneurial growth.", title: "Mission Over Margin: The Ripple Effect of Generosity in Entrepreneurship", description: "Giving early and often builds stronger companies, loyalty, and community impact.", image: MattVaadi },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <section className="about-hero news-hero">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="about-hero-title">
              Our <span className="text-[#E62B1E]">Speakers</span>
            </h1>
            <p className="about-hero-subtitle">
              Meet the visionaries, innovators, and changemakers who will share their groundbreaking ideas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} className="w-full h-full">
                    <ImageWithFallback src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-lg font-bold leading-snug line-clamp-2">{speaker.title}</p>
                      <div className="my-3 h-px w-16 bg-gradient-to-r from-white/0 via-white/60 to-white/0" />
                      <p className="pl-4 border-l-2 border-white/40 text-white/90 text-sm leading-relaxed line-clamp-3">{speaker.description}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {speaker.bio}
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
