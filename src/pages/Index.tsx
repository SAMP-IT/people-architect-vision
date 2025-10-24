import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SocialShowcase from "@/components/SocialShowcase";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import ImpactStories from "@/components/ImpactStories";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO />
      <Header />
      <Hero />
      <About />
      <SocialShowcase />
      <Services />
      <Showcase />
      <ImpactStories />
      <Careers />
      <Footer />
    </main>
  );
};

export default Index;
