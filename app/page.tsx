import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import BestSection from "@/components/BestSection";
import ProgramsSection from "@/components/ProgramsSection";
import InstructorsSection from "@/components/InstructorsSection";
import ContactSection from "@/components/ContactSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <BestSection />
            <ProgramsSection />
            <InstructorsSection />
            <PricingSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
