import { HeroSection } from "../components/HeroSection";
import { ClientLogos } from "../components/ClientLogos";
import { StatsSection } from "../components/StatsSection";
import { CaseStudies } from "../components/CaseStudies";
import { ServicesSection } from "../components/ServicesSection";
import { ContactForm } from "../components/ContactForm";
import { AboutSection } from "../components/AboutSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <StatsSection />
      <CaseStudies />
      <ServicesSection />
      <AboutSection />
      <ContactForm />
    </>
  );
}