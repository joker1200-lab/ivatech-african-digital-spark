import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import SolarROICalculator from "@/components/SolarROICalculator";
import CoverageMap from "@/components/CoverageMap";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <>
      <SEO
        title="Ivatech Informatics Limited | Telecoms, Security & Energy Solutions"
        description="Turnkey service providers to the telecoms, security and energy industries in Tanzania. CCTV, access control, fire detection, structured cabling and more."
      />
      <Hero />
      <Services />
      <AboutSection />
      <SolarROICalculator />
      <CoverageMap />
      <Partners />
      <PortfolioSection />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <CTA />
    </>
  );
};

export default Index;
