import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Brain, Map, Heart, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Mehnat ho rahi hai… par results slow hain",
    text: "Aap effort daal rahe ho, par growth expected speed se nahi aa rahi.",
  },
  {
    icon: Brain,
    title: "Job / Business ko leke confusion",
    text: "Direction clear nahi ho rahi, decisions delay ho rahe hain.",
  },
  {
    icon: Map,
    title: "Paise aate hain… par rukte nahi",
    text: "Income hai, lekin savings aur stability nahi ban pa rahi.",
  },
  {
    icon: Heart,
    title: "Relationship mein same issues repeat",
    text: "Chahe effort ho, par patterns baar-baar wapas aa jaate hain.",
  },
  {
    icon: Sparkles,
    title: "Mood low + energy drained",
    text: "Motivation kam lagti hai, aur cheezein heavy feel hoti hain.",
  },
];

const WhySection = () => {
  const scrollToForm = () => {
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      className="py-8 md:py-12"
      style={{ backgroundColor: "#03C988" }}
    >
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-black leading-snug">
            Sach bataiye…
            <br />
            Kya ye sab chal raha hai?
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {/* PAIN POINT CARDS */}
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-white rounded-xl p-4 md:p-5 shadow-md h-full flex flex-col"
            >
              <div className="w-10 h-10 mb-3 rounded-lg bg-black/10 flex items-center justify-center">
                <reason.icon className="w-5 h-5 text-black" />
              </div>

              <h3 className="text-base font-bold text-black mb-1">
                {reason.title}
              </h3>

              <p className="text-sm text-black/80 leading-snug">
                {reason.text}
              </p>
            </motion.div>
          ))}

          {/* BLUE CTA CARD — BOTTOM RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="
              bg-[#000139] rounded-xl p-5 md:p-6 shadow-lg
              h-full flex flex-col
              sm:col-start-2 sm:row-start-3
            "
          >
            <div>
              <div className="w-10 h-10 mb-3 rounded-lg bg-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-base md:text-lg font-extrabold text-white mb-2 leading-snug">
                Problem aap nahi…
                <br />
                aapki energy ka pattern hai
              </h3>

              <p className="text-white/80 text-sm leading-snug">
                Aur sabse achhi baat?
                <br />
                <strong>Ye pattern realign ho sakta hai.</strong>
              </p>
            </div>

            <div className="flex-grow" />

            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="mt-4 w-full py-2.5 rounded-lg font-bold text-black shadow-md text-base"
              style={{ backgroundColor: "#ffffff" }}
            >
              Mera Report Unlock Karein
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
