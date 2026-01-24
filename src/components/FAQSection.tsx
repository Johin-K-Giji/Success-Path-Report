import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Will I be able to learn this science too?",
    answer:
      "Yes! Priya Ji, a former IT professional turned energy guide, now teaches and simplifies this science for everyday life. If she could learn it from scratch, so can you step by step.",
  },
  {
    question: "Does this science really work?",
    answer:
      "Absolutely! Numerology and Swar Vigyan are ancient sciences that have been practiced for thousands of years. The Success Path Report combines these powerful systems to give you actionable insights tailored to your unique birth chart.",
  },
  {
    question: "How will I get my Success Path Report?",
    answer:
      "After completing your purchase, you'll receive your personalized Success Path Report via email within 24-48 hours. The report will be a detailed PDF that you can download and keep forever.",
  },
  {
    question: "Is this report the same for everyone?",
    answer:
      "No! Each report is uniquely generated based on your date of birth, name, and other personal factors. No two reports are ever the same.",
  },
  {
    question: "Will I get practical remedies or just theory?",
    answer:
      "You'll get BOTH! The report includes deep insights into your life path along with practical, easy-to-follow remedies that you can start implementing immediately.",
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
          FAQS
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
                    <p className="faq-answer text-gray-400">{faq.answer}</p>
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
