import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import ProductVideosSection from "@/components/ProductVideosSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LogoTicker />
      <ProductVideosSection />
      <FooterSection />
    </div>
  );
};

export default Index;
