import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import BenefitsSection from "@/components/BenefitsSection";
import CertificationsSection from "@/components/CertificationsSection";
import SpecsTableSection from "@/components/SpecsTableSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DifferentiatorSection />
      <ProductsSection />
      <CertificationsSection />
      <SpecsTableSection />
      <BenefitsSection />
      <AboutSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
