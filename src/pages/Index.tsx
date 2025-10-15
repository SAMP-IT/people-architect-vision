import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TeamArchitects from "@/components/TeamArchitects";
import Mission from "@/components/Mission";
import DesignProcess from "@/components/DesignProcess";
import Showcase from "@/components/Showcase";
import ImpactStories from "@/components/ImpactStories";
import ParentBrand from "@/components/ParentBrand";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TeamArchitects />
      <Mission />
      <DesignProcess />
      <Showcase />
      <ImpactStories />
      <ParentBrand />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
