import { motion } from "framer-motion";
import {
  Wallet,
  Scale,
  Rocket,
  Heart,
  FileText,
  Sparkles,
  Shield,
} from "lucide-react";

const bonuses = [
  {
    title: "Unlock Blocked Money Flow",
    desc: "Clear financial resistance and activate smoother income movement.",
    icon: Wallet,
    color: "#ACBCA2",
  },
  {
    title: "Court & Legal Relief",
    desc: "Reduce delays, stress, and energetic interference in legal matters.",
    icon: Scale,
    color: "#E6D3A3",
  },
  {
    title: "Accelerate Business Growth",
    desc: "Align your business energy for faster results and clarity.",
    icon: Rocket,
    color: "#fffb1b",
  },
  {
    title: "Marriage & Relationship Support",
    desc: "Remove emotional blocks and improve compatibility timing.",
    icon: Heart,
    color: "#D7A1A8",
  },
  {
    title: "Exam & Career Success",
    desc: "Enhance focus, confidence, and performance during critical periods.",
    icon: FileText,
    color: "#fd7717",
  },
  {
    title: "12 Magnetic Vedic Switchwords",
    desc: "Powerful phrases to shift energy instantly and effectively.",
    icon: Sparkles,
    color: "#1b7572",
  },
  {
    title: "9 Divine Angel Videos",
    desc: "Spiritual protection and healing through guided angelic support.",
    icon: Shield,
    color: "#C3B6E2",
  },
];

const STAY_TIME = 4; // seconds per card
const TOTAL_DURATION = bonuses.length * STAY_TIME;

const BonusSection = () => {
  return (
    <section className="py-16 bg-[#000139]">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
            LIMITED-TIME BONUSES
          </span>

          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white leading-tight">
            7 Powerful Bonuses <br />
            <span className="text-[#03C988]">Worth ₹5,000+</span>
          </h2>

          <p className="text-white/70 text-sm mt-3 max-w-md mx-auto">
            These bonuses are designed to amplify results, remove blocks,
            and accelerate transformation alongside your report.
          </p>
        </div>

        {/* BONUS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => {
            const delay = index * STAY_TIME;

            return (
              <motion.div
                key={index}
                animate={{
                  backgroundColor: [
                    "rgba(255,255,255,0.05)",
                    bonus.color,
                    bonus.color,
                    "rgba(255,255,255,0.05)",
                  ],
                  color: ["#ffffff", "#000139", "#000139", "#ffffff"],
                  scale: [1, 1.05, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0)",
                    "0 25px 60px rgba(0,0,0,0.35)",
                    "0 25px 60px rgba(0,0,0,0.35)",
                    "0 0 0 rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: TOTAL_DURATION,
                  times: [
                    0,
                    delay / TOTAL_DURATION,
                    (delay + STAY_TIME) / TOTAL_DURATION,
                    (delay + STAY_TIME + 0.1) / TOTAL_DURATION,
                  ],
                  ease: "linear",
                  repeat: Infinity,
                }}
               className={`rounded-xl px-4 py-5 flex flex-col items-center text-center
           border border-white/10 backdrop-blur-sm
           ${
             index === bonuses.length - 1
               ? "col-span-2 mx-auto max-w-xs"
               : ""
           }`}

              >
                <bonus.icon className="w-7 h-7 mb-2" />
                <p className="text-sm font-bold leading-snug">
                  {bonus.title}
                </p>
                <p className="text-xs mt-1 opacity-80 leading-relaxed">
                  {bonus.desc}
                </p>
                <span className="text-[10px] mt-2 font-bold opacity-70">
                  BONUS
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={() =>
              document
                .getElementById("order-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-xl font-bold text-black text-base
                       shadow-xl transition-transform active:scale-95"
            style={{ backgroundColor: "#03C988" }}
          >
            Unlock My Report + All Bonuses
          </button>

          <p className="text-xs text-white/60 mt-3">
            One-time payment • Instant access • Bonuses included
          </p>
        </div>

      </div>
    </section>
  );
};

export default BonusSection;
