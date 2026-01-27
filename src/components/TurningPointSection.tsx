import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TurningPointSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const scrollToForm = () => {
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        
        {/* TITLE */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-display text-xl md:text-2xl font-extrabold text-[#000139] mb-5"
        >
          Same cycle repeat kyu hota hai?
        </motion.h3>

        {/* EMOTIONAL COPY */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base md:text-lg font-semibold text-black/80 leading-relaxed mb-6"
        >
          Most log unknowingly <br className="md:hidden" />
          <strong>same patterns repeat</strong> karte rehte hain —
          <br />
          same delays, same confusion, same stress 😵‍💫
        </motion.p>

        {/* INSIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#000139]/5 rounded-xl px-5 py-4 mb-6"
        >
          <p className="text-sm md:text-base font-semibold text-[#000139] leading-relaxed">
            Ye report aapko batayega:
            <br />
            <span className="block mt-1">
              👉 Aap abhi <strong>kis phase</strong> mein hain
            </span>
            <span className="block">
              👉 Aur <strong>2026 mein kaunsa move</strong> best rahega
            </span>
          </p>
        </motion.div>

        {/* HOPE LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-sm md:text-base font-bold text-black/80 mb-7"
        >
          Abhi realign kar liya… <br className="md:hidden" />
          toh <span className="text-[#03C988]">2026 strong</span> ban sakta hai.
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={scrollToForm}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-3.5 rounded-xl font-extrabold text-black text-base shadow-lg"
          style={{ backgroundColor: "#03C988" }}
        >
          Abhi unlock karein (₹697)
          <br />
          <span className="text-sm font-bold">
            ➡️ Mera Report Unlock Karein
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default TurningPointSection;
