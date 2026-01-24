import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 10, seconds: 15 });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 10, seconds: 15 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 60, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-0 z-50"
    >
      {/* STICKY BAR */}
      <div className="w-full" style={{ backgroundColor: "#0F1A2B" }}>
        <div className="mx-auto max-w-md px-4 py-3">
          <div className="flex items-center justify-between gap-3">

            {/* TIMER */}
            <div className="flex items-center gap-2 text-[#FFD717] text-lg font-semibold">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[red] font-bold"
              >
                Offer Ends in
              </motion.span>

              <span>
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>

            {/* CTA */}
            <motion.button
              onClick={scrollToForm}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg font-bold text-black text-sm shadow-md whitespace-nowrap"
              style={{ backgroundColor: "#03C988" }}
            >
              Unlock Report →
            </motion.button>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyCTA;
