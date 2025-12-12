import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Design Beyond Aesthetics.";
  const { scrollY } = useScroll();

  // Parallax effect for background
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        <img
          src={heroBg}
          alt="Architectural grid background"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </motion.div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-start to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-gold-start to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gold-start to-transparent"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Logo/Brand Name */}
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">People</span>
            <br />
            <span className="text-foreground">Architect</span>
          </h1>

          {/* Year Established Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-block"
          >
            <span className="font-ui text-xs md:text-sm text-primary border border-primary/30 px-4 py-2 rounded-full backdrop-blur-sm bg-primary/5">
              Established 2010 • 15+ Years of Excellence
            </span>
          </motion.div>

          {/* Tagline with Typing Animation */}
          <p className="font-heading text-2xl md:text-4xl font-semibold text-foreground/90 mb-4 min-h-[3rem] md:min-h-[4rem]">
            {text}
            <span className="animate-pulse">|</span>
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

          {/* Scroll Progress Indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-gold origin-left z-50"
            style={{ scaleX: useTransform(scrollY, [0, 2000], [0, 1]) }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
