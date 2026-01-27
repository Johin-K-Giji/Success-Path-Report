import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

const contents = [
  {
    title: "Aapka Complete Energy Map",
    desc: "Aapki life mein kaha energy boost hai aur kaha block — sab clear dikhega.",
  },
  {
    title: "Hidden Traits + Emotional Patterns",
    desc: "Wo traits aur emotions jo unknowingly aapke decisions ko affect karte hain.",
  },
  {
    title: "Next 7-Year Life Cycle Forecast",
    desc: "Kab growth hogi, kab slowdown aur kab aapka best time aane wala hai.",
  },
  {
    title: "Career, Paisa & Relationship Insights",
    desc: "Career, money aur relationships — teeno ke clear insights, simple words mein.",
  },
  {
    title: "Action Steps + Remedies",
    desc: "Practical steps aur remedies jo aap real life mein easily follow kar sakte ho.",
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
            Success Path Report mein <br />
            kya-kya milega?
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
            {/* COVER PAGE */}
            <div className="page bg-[#000139]">
              <div className="h-full flex flex-col items-center justify-center text-center px-8">
                <h3 className="text-[#03C988] text-2xl font-extrabold mb-3">
                  Success Path Report
                </h3>
                <p className="text-white/80 text-sm">
                  Tap ya swipe karke pages dekhiye
                </p>
              </div>
            </div>

            {/* CONTENT PAGES */}
            {contents.map((item, index) => (
              <div key={index} className="page bg-[#000139]">
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <h4 className="text-[#03C988] text-lg font-bold mb-4">
                    ✅ {item.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* LAST PAGE – CTA */}
            <div className="page bg-[#000139]">
              <div className="h-full flex flex-col items-center justify-center text-center px-8">
                <h4 className="text-[#03C988] text-lg font-bold mb-3">
                  Ready to Align Your Path?
                </h4>

                <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-xs">
                  Ye report aapko clarity, direction aur alignment deti hai —
                  bina guessing, bina confusion.
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
