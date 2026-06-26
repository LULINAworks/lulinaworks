import { AboutLulinaSection } from "@/components/AboutLulinaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Icons } from "@/components/Icons";
import { PortalSection } from "@/components/PortalSection";
import { ToolsSection } from "@/components/ToolsSection";

export default function Home() {
  return (
    <>
      <Icons />
      <Header />
      <main id="top">
        <HeroSection />
        <div className="container">
          <PortalSection />
          <ToolsSection />
          <AboutLulinaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
