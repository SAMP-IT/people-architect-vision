import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Showcase from "@/components/Showcase";
import ParentBrand from "@/components/ParentBrand";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Showcase />
      <ParentBrand />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
