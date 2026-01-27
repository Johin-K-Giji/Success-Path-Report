import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, MessageCircle, FileText } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    text: "Payment complete hota hai",
  },
  {
    icon: MessageCircle,
    text: "WhatsApp pe aapko report milti hai",
  },
  {
    icon: FileText,
    text: "Report + bonuses ek hi jagah, easy format mein",
  },
];

const DeliverySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-120px" });

  return (
    <section
      ref={ref}
      className="py-6 md:py-8 bg-white"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        {/* TITLE */}
        <h3 className="text-center font-display text-lg md:text-xl font-extrabold text-[#000139] mb-5">
          Report milega kaise?
        </h3>

        {/* FLOW */}
        <div className="flex flex-col gap-3">
          {steps.map((step, index) => {
            const StepIcon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.4 }}
                animate={{
                  opacity: isInView ? 1 : 0.4,
                  backgroundColor: isInView
                    ? "rgba(3,201,136,0.08)"
                    : "transparent",
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-black/5"
              >
                <div className="w-8 h-8 rounded-full bg-[#03C988]/15 flex items-center justify-center flex-shrink-0">
                  <StepIcon className="w-4 h-4 text-[#03C988]" />
                </div>

                <p className="text-sm md:text-base font-semibold text-[#000139]">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* FOOT NOTE */}
        <p className="text-center text-[11px] text-black/60 mt-4 font-medium">
          Simple • Fast • WhatsApp delivery
        </p>
      </div>
    </section>
  );
};

export default DeliverySection;
