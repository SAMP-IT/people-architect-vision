import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Architectural grid background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-start to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-gold-start to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gold-start to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Logo/Brand Name */}
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">People</span>
            <br />
            <span className="text-foreground">Architect</span>
          </h1>

          {/* Tagline */}
          <p className="font-heading text-2xl md:text-4xl font-semibold text-foreground/90 mb-4">
            Design Beyond Aesthetics.
          </p>

          {/* Subtext */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting intelligent spaces that inspire. We combine innovation, material expertise, and spatial storytelling to deliver architectural experiences that speak to both form and function.
          </p>

          {/* Highlight */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6">
            <span className="font-ui text-sm md:text-base text-primary uppercase tracking-wider">Architecture</span>
            <span className="text-primary">•</span>
            <span className="font-ui text-sm md:text-base text-primary uppercase tracking-wider">Interior Design</span>
            <span className="text-primary">•</span>
            <span className="font-ui text-sm md:text-base text-primary uppercase tracking-wider">Concept Visualization</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="font-ui bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all glow-gold-hover group"
              onClick={() => document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-ui border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all glow-gold-hover group"
            >
              <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Follow on Instagram
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-float">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-gradient-gold rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
