import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid WhatsApp number"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
});

type FormData = z.infer<typeof formSchema>;

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 11, seconds: 46 });
  const [isSubmitting, setIsSubmitting] = useState(false);
   const [fireAddToCart, setFireAddToCart] = useState(false);

  const formatDateOfBirth = (dateStr: string) => {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) =>
        prev.seconds > 0
          ? { ...prev, seconds: prev.seconds - 1 }
          : prev.minutes > 0
          ? { minutes: prev.minutes - 1, seconds: 59 }
          : { minutes: 11, seconds: 46 }
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  const formattedDOB = formatDateOfBirth(data.dateOfBirth);

  const paymentUrl = new URL(
    "https://pages.razorpay.com/pl_RshmIpTqnHKlIP/view"
  );

  paymentUrl.searchParams.append("full_name", data.fullName);
  paymentUrl.searchParams.append("email", data.email);
  paymentUrl.searchParams.append("phone", data.phone);
  paymentUrl.searchParams.append("date_of_birth", formattedDOB);

  // Small delay for UX polish
  setTimeout(() => {
    window.location.href = paymentUrl.toString();
  }, 500);


    /* 🔥 FACEBOOK PIXEL — DO NOT CHANGE */
  useFacebookPixel(
    fireAddToCart
      ? {
          eventName: "AddToCart",
          eventParams: {
            content_name: "Success_Report_Product",
            content_type: "product",
            value: 697,
            currency: "INR",
          },
        }
      : undefined
  );

};


  return (
    <section
      id="order-form"
      className="relative overflow-hidden py-6 md:py-16"
      style={{ backgroundColor: "#000139" }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="font-display font-extrabold text-2xl md:text-5xl xl:text-6xl text-white leading-tight mb-4">
             Aap unlucky nahi ho…
              <br />
              <span className="text-[#03C988] font-extrabold">
                Bas aapki energy misaligned chal rahi hai ⚡
              </span>
            </h1>

            <p className="font-display font-bold text-2xl md:text-3xl text-[#FFD717] mb-4">
              2026 ko slip mat hone dijiye
            </p>

            <p className="text-white/90 text-base md:text-lg font-medium max-w-xl mb-8">
              Apna next 7 saal ka <strong>success cycle jaaniye Success Path Report ke saath.</strong>
            </p>

            {/* FLOATING BOOK */}
            <div className="relative flex justify-center lg:justify-start">
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <img
                  src="./book2.webp"
                  alt="Success Path Report"
                  className="w-72 md:w-64 lg:w-72 rounded-xl shadow-[0_50px_90px_rgba(0,0,0,0.4)]"
                />
                
              </motion.div>
            </div>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#fbfaf7] rounded-2xl p-6 md:p-8 shadow-2xl w-full max-w-md mx-auto"
          >
            {/* OFFER HEADER */}
            <div className="text-center mb-5">
              <span className="inline-block text-xs font-bold px-4 py-1 rounded-full bg-[#03C988]/25 text-[#3f463d] mb-2">
                 Limited Time Offer
              </span>

              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1e1e1e]">
               Success Path Report
              </h3>

              <div className="mt-2 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-bold">
                ⏳ Offer Expires In{" "}
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
            </div>

            {/* PRICE */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 line-through font-medium">
                ₹1,399
              </p>
              <p className="text-2xl md:text-2xl font-extrabold text-[#1e1e1e]">
                ₹697
              </p>
              <p className="text-xs text-gray-500 font-medium">
                1-time payment • WhatsApp pe instant access
              </p>
            </div>

            {/* FORM FIELDS */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {[
                {
                  label: "Full Name",
                  name: "fullName",
                  type: "text",
                  placeholder: "Enter your name",
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "Enter your email",
                },
                {
                  label: "WhatsApp Number",
                  name: "phone",
                  type: "tel",
                  placeholder: "Enter WhatsApp number",
                },
                {
                  label: "Date of Birth",
                  name: "dateOfBirth",
                  type: "date",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    {...register(field.name as keyof FormData)}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base font-medium
                      focus:outline-none focus:border-[#ACBCA2]
                      focus:ring-2 focus:ring-[#ACBCA2]/40"
                  />
                  {errors[field.name as keyof FormData] && (
                    <p className="text-xs font-semibold text-red-500 mt-1">
                      {
                        errors[field.name as keyof FormData]
                          ?.message as string
                      }
                    </p>
                  )}
                </div>
              ))}

              {/* CTA BUTTON – TEMPTING */}
              <motion.button
  type="submit"
  disabled={isSubmitting}
  whileTap={{ scale: 0.95 }}
  animate={{
    boxShadow: [
      "0 0 0 rgba(172,188,162,0)",
      "0 0 25px rgba(172,188,162,0.6)",
      "0 0 0 rgba(172,188,162,0)",
    ],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="w-full mt-3 py-4 rounded-xl font-extrabold text-black text-lg shadow-lg flex flex-col items-center justify-center gap-1"
  style={{ backgroundColor: "#03C988" }}
>
  {isSubmitting ? (
    "Processing..."
  ) : (
    <>
      <span className="text-lg font-extrabold">
        Mera Report Unlock Karein
      </span>
      <span className="text-lg font-extrabold text-black/80">
        <span className="line-through mr-1 font-sm text-black/50">₹1399</span> ₹697
      </span>
    </>
  )}
</motion.button>


              <p className="text-[11px] text-center text-gray-500 mt-2 font-medium">
                🔒 Aapka data 100% safe hai. Kabhi share nahi hota
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
