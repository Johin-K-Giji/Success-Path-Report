import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Kya main ye science seekh sakta/sakti hoon?",
    answer:
      "Haan. Priyaa ne bhi scratch se start kiya tha. Ye science step-by-step, simple tareeke se sikhayi jaati hai.",
  },
  {
    question: "Kya ye sach mein work karta hai?",
    answer:
      "Jab aap report ke according action aur remedies follow karte hain, tab results kaafi strong aur visible hote hain.",
  },
  {
    question: "Report kab milega?",
    answer:
      "Payment ke baad aapko WhatsApp par turant report mil jaayegi.",
  },
  {
    question: "Kya sabka report same hota hai?",
    answer:
      "Nahi. Har report aapke personal details ke hisaab se customized hoti hai. Isliye har report unique hota hai.",
  },
  {
    question: "Remedies practical milengi ya sirf theory?",
    answer:
      "Sirf theory nahi. Is report mein practical steps aur easy remedies included hoti hain jo aap daily life mein follow kar sakte ho.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="bg-charcoal py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-center text-off-white mb-10 md:mb-12"
        >
          FAQs
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="faq-item border-gray-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-question text-off-white"
              >
                <span className="text-left">
                  <span className="text-gold mr-2">{index + 1}.</span>
                  {faq.question}
                </span>
                <span className="text-gold flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="faq-answer text-gray-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
