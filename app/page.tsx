import { AboutLulinaSection } from "@/components/AboutLulinaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Icons } from "@/components/Icons";
import { PortalSection } from "@/components/PortalSection";

export default function Home() {
  return (
    <>
      <Icons />
      <Header />
      <main id="top">
        <div className="container">
          <HeroSection />
          <PortalSection />
          <AboutLulinaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
