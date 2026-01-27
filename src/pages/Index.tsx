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
import { useFacebookPixel } from "@/hooks/useFacebookPixelHome";
import FinalCTASection from "@/components/FinalCTASection";
import DeliverySection from "@/components/DeliverySection";
import TurningPointSection from "@/components/TurningPointSection";

const Index = () => {
  useFacebookPixel()
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <WhySection />
      <TurningPointSection/>
      <DiscoverSection />
      <TestimonialsSection />
      <CreatorSection />
      <ReportContentsSection />
      <BonusesSection />
      <DeliverySection/>
      <FAQSection />
      <FinalCTASection/>
      <Footer />
      <StickyCTA />
    </main>
  );
};

export default Index;
