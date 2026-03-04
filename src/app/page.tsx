import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { HowItWorksSection } from "@/components/organisms/HowItWorksSection";
import { StartBusinessSection } from "@/components/organisms/StartBusinessSection";
import { PartnersSection } from "@/components/organisms/PartnersSection";
import { CommunitySection } from "@/components/organisms/CommunitySection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <HeroSection />
        <HowItWorksSection />
        <StartBusinessSection />
        <PartnersSection />
        <CommunitySection />
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
