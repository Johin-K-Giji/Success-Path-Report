import { motion } from "framer-motion";
import {
  Wallet,
  Scale,
  Rocket,
  Heart,
  GraduationCap,
  Sparkles,
  Shield,
} from "lucide-react";

const bonuses = [
  {
    title: "Blocked Money Flow Unlock",
    desc: "Paise ke flow ko block karne wale patterns ko clear karne ke liye.",
    icon: Wallet,
    color: "#03C988",
    book: "/b1.png",
  },
  {
    title: "Court / Legal Relief Support",
    desc: "Legal matters mein delays aur stress kam karne ke liye.",
    icon: Scale,
    color: "#FFD717",
    book: "/b2.png",
  },
  {
    title: "Business Growth Boost",
    desc: "Business energy ko align karke growth aur clarity ke liye.",
    icon: Rocket,
    color: "#FF8A00",
    book: "/b3.png",
  },
  {
    title: "Marriage / Relationship Support",
    desc: "Emotional blocks clear karke harmony lane ke liye.",
    icon: Heart,
    color: "#FF6F91",
    book: "/b4.png",
  },
  {
    title: "Exam + Career Success Support",
    desc: "Focus, confidence aur performance improve karne ke liye.",
    icon: GraduationCap,
    color: "#4FACFE",
    book: "/b5.png",
  },
  {
    title: "12 Powerful Vedic Switchwords",
    desc: "Instant energy shift ke liye Vedic phrases.",
    icon: Sparkles,
    color: "#A855F7",
    book: "/b6.png",
  },
  {
    title: "9 Divine Angel Videos",
    desc: "Protection aur healing ke liye guided angelic support.",
    icon: Shield,
    color: "#22C55E",
    book: "/b7.png",
  },
];

const STAY_TIME = 4;
const TOTAL_DURATION = bonuses.length * STAY_TIME;

const BonusSection = () => {
  return (
    <section className="py-16 bg-[#000139]">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
            LIMITED-TIME BONUSES
          </span>

          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Enroll Now & Get These 7 Bonuses <br />
            <span className="text-[#03C988]">Worth ₹5,000+</span>
          </h2>

          <p className="text-white/80 text-sm mt-4 leading-relaxed">
            Aap jo <strong>₹697</strong> pay kar rahe ho… <br />
            uske saath aapko mil rahe hain bonuses jo{" "}
            <strong>10X value</strong> ke hain.
            <br />
            <span className="text-white/60">(Limited time only)</span>
          </p>
        </div>

        {/* BONUS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => {
            const delay = index * STAY_TIME;
            const Icon = bonus.icon;

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
                  scale: [1, 1.06, 1.06, 1],
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0)",
                    "0 25px 60px rgba(0,0,0,0.4)",
                    "0 25px 60px rgba(0,0,0,0.4)",
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
                {/* BOOK IMAGE */}
                <img
                  src={bonus.book}
                  alt={bonus.title}
                  className="w-14 mb-2 drop-shadow-lg"
                />

                {/* ICON */}
                <Icon className="w-6 h-6 mb-2" />

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
        <div className="text-center mt-14 max-w-xl mx-auto">
          <p className="text-white font-semibold mb-4">
            Report + Bonuses dono unlock karein <strong>(₹697 only)</strong>
          </p>

          <button
            onClick={() =>
              document
                .getElementById("order-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-xl font-extrabold text-black text-base
                       shadow-xl transition-transform active:scale-95"
            style={{ backgroundColor: "#03C988" }}
          >
            Mera Report + Bonuses Unlock Karein
          </button>

          <p className="text-xs text-white/60 mt-3">
            One-time payment • Instant access • All bonuses included
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
