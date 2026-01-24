import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

const contents = [
  {
    title: "Lo-Shu Grid & Analysis",
    desc: "Understand the hidden structure of your life through your Lo-Shu Grid and identify missing or dominant energies.",
  },
  {
    title: "Planes of Influence",
    desc: "See how your mental, emotional, physical, and spiritual planes influence your decisions and outcomes.",
  },
  {
    title: "Your Numbers & Analysis",
    desc: "Decode your life path, destiny, soul urge, and personality numbers in a simple, meaningful way.",
  },
  {
    title: "Lucky & Unlucky Factors",
    desc: "Discover which numbers, dates, and patterns support you—and which quietly block progress.",
  },
  {
    title: "Maha Dasha & Planetary Influence",
    desc: "Understand long-term planetary cycles that impact career, finances, and major life shifts.",
  },
  {
    title: "Marriage & Relationship Insights",
    desc: "Gain clarity on compatibility, emotional patterns, and relationship timing.",
  },
  {
    title: "Finance & Career Insights",
    desc: "Identify growth periods, career alignment, and financial energy blocks.",
  },
  {
    title: "Health & Wellness Guidance",
    desc: "Spot energetic stress points and receive guidance for balance and vitality.",
  },
];

const ReportContentsSection = () => {
  const bookRef = useRef<any>(null);

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* SECTION HEADING */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-black leading-tight">
            What’s Inside Your <br />
            Success Path Report
          </h2>
        </div>

        {/* BOOK */}
        <div className="flex justify-center">
          <HTMLFlipBook
            ref={bookRef}
            width={360}
            height={520}
            size="fixed"
            minWidth={315}
            maxWidth={500}
            minHeight={420}
            maxHeight={720}
            startPage={0}
            drawShadow
            maxShadowOpacity={0.4}
            showCover
            mobileScrollSupport
            className="shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
          >
            {/* COVER PAGE – CENTERED */}
            <div className="page bg-[#000139]">
              <div className="h-full flex flex-col items-center justify-center text-center px-8">
                <h3 className="text-[#03C988] text-2xl font-extrabold mb-3">
                  Success Path Report
                </h3>
                <p className="text-white/80 text-sm">
                  Tap or swipe to open
                </p>
              </div>
            </div>

            {/* CONTENT PAGES – ONE TOPIC PER PAGE */}
            {contents.map((item, index) => (
              <div key={index} className="page bg-[#000139]">
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <h4 className="text-[#03C988] text-lg font-bold mb-4">
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* LAST PAGE WITH CTA – CENTERED */}
            <div className="page bg-[#000139]">
              <div className="h-full flex flex-col items-center justify-center text-center px-8">
                <h4 className="text-[#03C988] text-lg font-bold mb-3">
                  Ready to Align Your Path?
                </h4>

                <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-xs">
                  Your personalized Success Path Report gives you clarity,
                  direction, and alignment for the next phase of your life.
                </p>

                <button
  onClick={() => {
    const el = document.getElementById("order-form");
    el?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-6 py-3 rounded-xl font-bold text-black text-sm
             shadow-lg transition-transform active:scale-95"
  style={{ backgroundColor: "#03C988" }}
>
  Unlock My Report
</button>

              </div>
            </div>

          </HTMLFlipBook>
        </div>
      </div>
    </section>
  );
};

export default ReportContentsSection;
