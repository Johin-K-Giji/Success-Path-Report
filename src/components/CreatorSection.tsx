import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CreatorSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToForm = () => {
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="py-10 md:py-14"
      style={{ backgroundColor: "#03C988" }}
    >
      <div className="container mx-auto px-4 max-w-3xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <span className="block text-xs font-bold tracking-widest uppercase text-[#000139] mb-2">
            Meet the Creator
          </span>

          <h2 className="font-display text-xl md:text-2xl font-extrabold text-[#000139]">
            The Mind Behind the Success Path Report
          </h2>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <img
            src="./creator.png"
            alt="Priyaa Btra – Creator of Success Path Report"
            className="w-44 md:w-56 rounded-xl shadow-lg"
          />
        </motion.div>

        {/* BIO (2 PARAGRAPHS) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center"
        >
          <p className="text-sm leading-relaxed text-[#000139]/85">
            After spending over a decade in the IT industry working on global
            technology projects, <strong>Priyaa Btra</strong> felt a deeper
            calling toward purpose-driven work. That clarity arrived when her
            Guru studied her numbers and said,
            <span className="block mt-1 font-semibold italic text-[#000139]">
              “Tum yahaan sabki madad karne aayi ho.”
            </span>
          </p>

          <p className="text-sm leading-relaxed text-[#000139]/85 mt-4">
            Since then, she has devoted her life to the ancient sciences of
            <strong> Numerology</strong> and <strong>Swar Vigyan</strong>,
            helping individuals align their energy across career,
            relationships, health, and finances through practical tools like
            the <strong>Success Path Report</strong>.
          </p>
        </motion.div>

        {/* OFFER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-8"
        >
          <p className="text-xs uppercase tracking-wide text-[#000139]/70 mb-1">
            Limited Time Access
          </p>

          <p className="text-xs text-[#000139]/60 line-through">
            Regular Price: ₹1,399
          </p>

          <p className="text-xl font-extrabold text-[#000139] mt-1">
            Today: ₹697
          </p>

          <motion.button
            onClick={scrollToForm}
            whileTap={{ scale: 0.96 }}
            className="mt-4 px-7 py-3 rounded-xl font-bold text-black shadow-lg"
            style={{ backgroundColor: "#ffffff" }}
          >
            Get My Success Path Report
          </motion.button>

          <p className="text-[11px] text-[#000139]/60 mt-2">
            One-time payment • Instant access
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CreatorSection;


