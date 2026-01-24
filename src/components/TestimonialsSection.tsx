import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Video, Phone, MoreVertical } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Gupta",
    avatar: "RG",
    messages: [
      { type: "sent", text: "Hi! I'm Priya from Occult Yogi. Just checking in how was your experience with the Success Path Report?" },
      { type: "received", text: "Hi Priya! Thank you so much. The report was really good. I've been confused about switching jobs for months now, and this gave me such clarity on timing and energy blocks. I even followed one of the remedies and felt a shift in just a few days!" },
      { type: "sent", text: "I'm so happy to hear that! Wishing you aligned growth ahead. Do stay connected 💫" },
    ],
  },
  {
    name: "Kriti Sharma",
    avatar: "KS",
    messages: [
      { type: "sent", text: "Hi! Priya here from Occult Yogi. How was your experience with the Success Path Report?" },
      { type: "received", text: "Hi Honestly, it blew my mind. So accurate - especially the relationship part. It explained exactly why my last two relationships had the same pattern. The emotional plane insight was so on point!" },
      { type: "sent", text: "That means a lot! May you move forward with more peace and self-trust 💫" },
    ],
  },
  {
    name: "Ananya Mehta",
    avatar: "AM",
    messages: [
      { type: "sent", text: "Hi! I'm Priya from Occult Yogi. How did you find the Success Path Report?" },
      { type: "received", text: "OMG Priya! My mind is completely blown. The career section exactly explained why my last job ended. The insight was so on point! Thank you for this clarity." },
      { type: "sent", text: "That means a lot! May you move forward with more peace and clarity 💫" },
    ],
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="section-light py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-10 md:mb-12"
        >
          What Our Customers Are Saying
        </motion.h2>

        {/* Carousel */}
        <div className="relative max-w-lg mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-10 w-10 h-10 rounded-full bg-[#FFD717] text-blacke flex items-center justify-center hover:bg-maroon-dark transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-10 w-10 h-10 rounded-full bg-[#FFD717] text-black flex items-center justify-center hover:bg-maroon-dark transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="whatsapp-card mx-auto"
            >
              {/* WhatsApp Header */}
              <div className="whatsapp-header text-white">
                <ChevronLeft className="w-5 h-5" />
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-charcoal text-sm font-semibold">
                  {testimonials[activeIndex].avatar}
                </div>
                <span className="flex-1 font-medium">{testimonials[activeIndex].name}</span>
                <Video className="w-5 h-5 opacity-70" />
                <Phone className="w-5 h-5 opacity-70" />
                <MoreVertical className="w-5 h-5 opacity-70" />
              </div>

              {/* Messages */}
              <div className="whatsapp-body min-h-[280px] max-h-[320px] overflow-y-auto">
                {testimonials[activeIndex].messages.map((msg, msgIndex) => (
                  <div
                    key={msgIndex}
                    className={
                      msg.type === "sent"
                        ? "whatsapp-bubble-sent"
                        : "whatsapp-bubble-received"
                    }
                  >
                    {msg.text}
                    <span className="text-[10px] text-gray-500 block text-right mt-1">
                      {msg.type === "sent" ? "5:42 PM ✓✓" : "5:43 PM"}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#FFD717] w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
