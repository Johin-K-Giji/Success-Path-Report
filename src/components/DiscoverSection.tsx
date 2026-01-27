import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const transformations = [
  {
    number: "01",
    text: "Confusion kam hoga — career, relationship aur business decisions clear honge.",
    color: "light",
  },
  {
    number: "02",
    text: "Right timing samajh aayegi — kab start karna hai, kab wait, kab push.",
    color: "accent",
  },
  {
    number: "03",
    text: "Energy blocks identify honge — stuck kyu feel ho raha hai, root reason clear hoga.",
    color: "light",
  },
  {
    number: "04",
    text: "Money flow ka pattern clear hoga — income aati hai par rukti nahi, cause + solution milega.",
    color: "accent",
  },
  {
    number: "05",
    text: "Relationship patterns samajh aayenge — repeat fights aur misunderstandings ka root clear hoga.",
    color: "light",
  },
  {
    number: "06",
    text: "Self-confidence improve hoga — strengths aur weak spots clearly dikhne lagenge.",
    color: "accent",
  },
  {
    number: "07",
    text: "Practical remedies milengi — heavy gyaan nahi, simple daily-life steps.",
    color: "light",
  },
];

const DiscoverSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const sectionInView = useInView(sectionRef, {
    margin: "-30% 0px -30% 0px",
  });

  // 👉 SCROLL TO FORM
  const scrollToForm = () => {
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-20"
      style={{ backgroundColor: "#000139" }}
    >
      {/* BACKGROUND DIM */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: sectionInView ? 0.35 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ backgroundColor: "#000139" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Report se kya change hoga?
          </h2>
          <p className="text-white/80 text-base md:text-lg font-medium">
            Is report ke baad <strong>“guessing band”</strong> ho jaayegi. <br />
            Aapko clear milega ki block kaha hai aur unlock kaise karna hai —
            <strong> bina overthinking.</strong>
          </p>
        </div>

        {/* TRANSFORMATIONS */}
        <div className="max-w-3xl mx-auto space-y-4">
          {transformations.map((item, index) => {
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
                transition={{ duration: 0.45, ease: "easeOut" }}
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
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg font-display text-lg font-bold bg-[#000139] text-white">
                  {item.number}
                </div>

                <p className="text-base md:text-lg font-medium">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-white text-lg md:text-xl font-bold mb-4">
            Haan, mujhe chahiye (₹697)
          </p>

          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-xl font-extrabold text-black text-lg shadow-lg"
            style={{ backgroundColor: "#03C988" }}
          >
            Report Unlock Karein
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
