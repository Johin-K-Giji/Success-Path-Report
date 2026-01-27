import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CreatorSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const scrollToForm = () => {
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="py-6 md:py-8"
      style={{ backgroundColor: "#000139" }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-6 items-start">

          {/* LEFT COLUMN – IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35 }}
            className="hidden md:flex justify-center items-center mt-28"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <img
                src="./coach.JPG"
                alt="Priyaa Btra – Creator of Success Path Report"
                className="w-74 object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35 }}
            className="text-center md:text-left"
          >
            {/* TITLE */}
            <h2 className="font-display text-xl md:text-2xl font-extrabold text-white leading-snug mb-3">
              Hi, main{" "}
              <span className="text-[#03C988]">Priyaa Btra</span> hoon —
              <br />
              Success Path Report ki creator ✨
            </h2>

            {/* MOBILE IMAGE */}
            <div className="md:hidden flex justify-center mb-4">
              <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
                <img
                  src="./coach.JPG"
                  alt="Priyaa Btra – Creator of Success Path Report"
                  className="w-64 object-cover"
                />
              </div>
            </div>

            {/* PARAGRAPH 1 */}
            <p className="text-sm md:text-[15px] font-semibold leading-relaxed text-white/85 mb-3">
              Mainne <strong>10+ saal IT industry</strong> mein global projects
              handle kiye — deadlines, pressure aur high-performance life.
              Wahin mujhe yeh clear dikha ki{" "}
              <strong>
                log mehnat toh karte hain, par phir bhi life mein same patterns
                repeat hote rehte hain.
              </strong>
              Jab mere Guru ne kaha —
              <span className="block mt-1 italic font-bold text-white">
                “Aap yahan sabki madad karne aayi hain.”
              </span>
              wahi moment mera turning point ban gaya.
            </p>

            {/* PARAGRAPH 2 */}
            <p className="text-sm md:text-[15px] font-semibold leading-relaxed text-white/85">
              Tab se main <strong>Numerology</strong> aur{" "}
              <strong>Swar Vigyan</strong> ko simple aur practical bana kar
              logon ko <strong>career, money, relationship aur health</strong>{" "}
              mein clarity aur alignment deti hoon.
              <strong> Success Path Report</strong> ek personal success map hai —
              jo batata hai <strong>block kaha hai, kyu hai</strong> aur
              <strong> next 7 saal ka best cycle</strong> kaise unlock karna hai.
            </p>

            {/* CTA */}
            <div className="mt-4">
              <p className="text-xs text-white/60 line-through">
                Regular Price: ₹1,399
              </p>
              <p className="text-lg font-extrabold text-white mb-2">
                Today: ₹697
              </p>

              <motion.button
                onClick={scrollToForm}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-2.5 rounded-lg font-extrabold text-black shadow-lg text-sm md:text-base"
                style={{ backgroundColor: "#03C988" }}
              >
                Get My Success Path Report
              </motion.button>

              <p className="text-[11px] text-white/60 mt-1">
                One-time payment • Instant access
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
