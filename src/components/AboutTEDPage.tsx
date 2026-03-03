import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutTEDPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* About TEDx Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              About <span className="text-[#E62B1E]">TEDx</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              x = independently organized event
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              In the spirit of discovering and spreading ideas, TEDx is a program of local,
              self-organized events that bring people together to share a TED-like experience. At a
              TEDx event, TED Talks video and live speakers combine to spark deep discussion and
              connection. These local, self-organized events are branded TEDx, where x =
              independently organized TED event. The TED Conference provides general guidance for the
              TEDx program, but individual TEDx events are self-organized. (Subject to certain rules
              and regulations.)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100 shadow-lg border border-gray-200">
              <ImageWithFallback
                src="https://tedxcongareevista.com/assets/images/image08.png?v=d7da8152"
                alt="TEDx Community Event"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About TED Section */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
              About <span className="text-[#E62B1E]">TED</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <p>
                TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and
                spreading ideas that spark conversation, deepen understanding and drive meaningful
                change. Our organization is devoted to curiosity, reason, wonder and the pursuit of
                knowledge — without an agenda. We welcome people from every discipline and culture
                who seek a deeper understanding of the world and connection with others, and we
                invite everyone to engage with ideas and activate them in your community.
              </p>

              <p>
                TED began in 1984 as a conference where Technology, Entertainment and Design
                converged, but today it spans a multitude of worldwide communities and initiatives
                exploring everything from science and business to education, arts and global issues.
                In addition to the TED Talks curated from our annual conferences and published on
                TED.com, we produce{" "}
                <a
                  href="https://audiocollective.ted.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  original podcasts
                </a>
                ,{" "}
                <a
                  href="https://www.ted.com/series"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  short video series
                </a>
                ,{" "}
                <a
                  href="https://ed.ted.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  animated educational lessons (TED-Ed)
                </a>{" "}
                and TV programs that are translated into more than 100 languages and distributed via
                partnerships around the world. Each year, thousands of independently run{" "}
                <a
                  href="https://www.ted.com/about/programs-initiatives/tedx-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  TEDx events
                </a>{" "}
                bring people together to share ideas and bridge divides in communities on every
                continent. Through the{" "}
                <a
                  href="https://www.audaciousproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  Audacious Project
                </a>
                , TED has helped catalyze more than $3 billion in funding for projects that seek to
                make the world more beautiful, sustainable and just. In 2020, TED launched{" "}
                <a
                  href="https://countdown.ted.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  Countdown
                </a>
                , an initiative to accelerate solutions to the climate crisis and mobilize a movement
                for a net-zero future, and in 2023 TED launched{" "}
                <a
                  href="https://www.ted.com/about/programs-initiatives/teddemocracy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  TED Democracy
                </a>{" "}
                to spark a new kind of conversation focused on realistic pathways towards a more
                vibrant and equitable future. View a full list of{" "}
                <a
                  href="https://www.ted.com/about/programs-initiatives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  TED’s many programs and initiatives
                </a>
                .
              </p>

              <p>
                Follow TED on{" "}
                <a
                  href="http://www.facebook.com/TED"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  Facebook
                </a>
                ,{" "}
                <a
                  href="https://instagram.com/ted"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  Instagram
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/company/ted-conferences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  LinkedIn
                </a>
                ,{" "}
                <a
                  href="https://www.tiktok.com/@tedtoks?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  TikTok
                </a>
                , and{" "}
                <a
                  href="http://twitter.com/TEDTalks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E62B1E] hover:underline font-medium"
                >
                  X
                </a>
                .
              </p>

              <div className="pt-8 text-center flex justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#E62B1E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#CC2619] transition-all hover:scale-105 active:scale-95 shadow-md"
                >
                  View our event page on TED.com
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
