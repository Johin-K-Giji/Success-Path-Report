import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const discoveries = [
  {
    number: "01",
    text: "Experience unseen shifts when your energy aligns, Life responds.",
    color: "light",
  },
  {
    number: "02",
    text: "Understand the Real You so you finally Stop Following the Wrong Paths.",
    color: "accent",
  },
  {
    number: "03",
    text: "Discover Hidden Opportunities meant only for You.",
    color: "light",
  },
  {
    number: "04",
    text: "Experience unseen shifts when your energy aligns, Life responds.",
    color: "accent",
  },
  {
    number: "05",
    text: "Experience unseen shifts when your energy aligns, Life responds.",
    color: "light",
  },
];

const DiscoverSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { margin: "-30% 0px -30% 0px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-20"
      style={{ backgroundColor: "#000139" }}
    >
      {/* SAFE BACKGROUND DIM */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: sectionInView ? 0.35 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ backgroundColor: "#000139" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER – unchanged */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            What Makes This Destiny
            <br />
            Report Truly{" "}
            <span className="text-[#03C988]">Life-Changing</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {discoveries.map((item, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const cardInView = useInView(cardRef, {
              margin: "-40% 0px -40% 0px",
              once: false,
            });

            return (
              <motion.div
                ref={cardRef}
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                animate={{
                  opacity: 1,
                  scale: cardInView ? 1.03 : 0.97,
                  x: 0,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className={`
                  relative flex items-center gap-4 
                  p-4 md:p-5 rounded-xl
                  ${
                    item.color === "accent"
                      ? "bg-[#FFD717] text-[#000139] flex-row-reverse"
                      : "bg-white text-[#000139]"
                  }
                `}
                style={{
                  boxShadow: cardInView
                    ? "0 40px 90px rgba(0,0,0,0.55)"
                    : "0 14px 32px rgba(0,0,0,0.25)",
                  zIndex: cardInView ? 20 : 10,
                }}
              >
                {/* NUMBER – unchanged */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg font-display text-lg font-bold bg-[#000139] text-white">
                  {item.number}
                </div>

                {/* TEXT – unchanged */}
                <p className="text-base md:text-lg font-medium">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
