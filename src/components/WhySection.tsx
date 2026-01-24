import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Map, Brain, TrendingUp, Heart, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Map,
    title: "Complete Energy Map",
    text: "Get a complete energy map of your life.",
  },
  {
    icon: Brain,
    title: "Hidden Personality Traits",
    text: "Discover hidden personality traits and emotional patterns.",
  },
  {
    icon: TrendingUp,
    title: "7-Year Life Forecast",
    text: "Unlock the next 7-year forecast of your life.",
  },
  {
    icon: Heart,
    title: "Actionable Life Insights",
    text: "Get clear, actionable insights across health, marriage, and finances.",
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
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#FFD717] text-black mb-2">
            5 Reasons
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#000]">
            Why You Need This Report Right Now
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          {/* LEFT CARDS */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="bg-white rounded-xl p-4 md:p-5 shadow-md flex flex-col"
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
          </div>

          {/* FEATURED CTA CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#000139] rounded-xl p-5 md:p-6 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="w-10 h-10 mb-3 rounded-lg bg-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-xl font-extrabold text-white mb-2">
                This Is Your Turning Point
              </h3>
              <p className="text-white/80 text-sm leading-snug">
                Most people repeat the same life cycles unknowingly.
                This report shows you exactly where you are — and how to
                realign your path before the next cycle begins.
              </p>
            </div>

            <motion.button
             onClick={scrollToForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="mt-4 w-full py-2.5 rounded-lg font-bold text-black shadow-md text-lg"
              style={{ backgroundColor: "#ffffff" }}
            >
              Unlock My Report
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
