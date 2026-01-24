import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import DiscoverSection from "@/components/DiscoverSection";
import ReportContentsSection from "@/components/ReportContentsSection";
import BonusesSection from "@/components/BonusesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CreatorSection from "@/components/CreatorSection";
import FAQSection from "@/components/FAQSection";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <WhySection />
      <DiscoverSection />
      <TestimonialsSection />
      <CreatorSection />
      <ReportContentsSection />
      <BonusesSection />
      <FAQSection />
      <Footer />
      <StickyCTA />
    </main>
  );
};

export default Index;
