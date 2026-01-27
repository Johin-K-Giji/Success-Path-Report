import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const scrollToForm = () => {
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="py-14 md:py-20 bg-[#000139]"
    >
      <div className="container mx-auto px-4 max-w-3xl text-center">
        
        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-5"
        >
          2026 ko <span className="text-[#03C988]">“same loop”</span> mat banne dijiye.
          <br />
          ₹697 mein apna <span className="text-[#03C988]">next 7-year cycle</span>{" "}
          unlock karein.
        </motion.h2>

        {/* SUB LINE */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/80 text-base md:text-lg font-semibold mb-8"
        >
          Clarity aaj lein… <br className="md:hidden" />
          pattern repeat hone se pehle.
        </motion.p>

        {/* PRICE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-sm text-white/60 line-through">
            ₹1,399
          </p>
          <p className="text-3xl font-extrabold text-white">
            ₹697 <span className="text-sm font-bold">only</span>
          </p>

          <p className="text-xs text-white/70 mt-2">
            1-time payment • WhatsApp pe Report delivery <br />
            Bonuses included
          </p>
        </motion.div>

        {/* CTA BUTTON */}
        <motion.button
          onClick={scrollToForm}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          animate={{
            boxShadow: [
              "0 0 0 rgba(3,201,136,0)",
              "0 0 30px rgba(3,201,136,0.6)",
              "0 0 0 rgba(3,201,136,0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="px-10 py-4 rounded-xl font-extrabold text-black text-base md:text-lg shadow-xl"
          style={{ backgroundColor: "#03C988" }}
        >
          Mera Success Path Report Chahiye
        </motion.button>

        {/* TRUST LINE */}
        <p className="text-[11px] text-white/60 mt-4 font-medium">
          🔒 Secure checkout • Data safe • Instant access
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
