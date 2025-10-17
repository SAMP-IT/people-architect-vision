import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Spotlight Effect Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Title */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Ready to Transform Your <span className="text-gradient">Digital Presence?</span>
          </h2>

          {/* Subtext */}
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            Join industry leaders who trust us to architect their brand narratives. 
            Let's create something exceptional together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="font-ui bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all glow-gold-hover group min-w-[200px]"
            >
              <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Follow on Instagram
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-ui border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all glow-gold-hover group min-w-[200px]"
            >
              <Youtube className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Subscribe on YouTube
            </Button>
          </div>

          {/* Decorative Pulse */}
          <div className="pt-8 flex justify-center gap-2">
            <div className="w-2 h-2 bg-gradient-gold rounded-full animate-glow-pulse"></div>
            <div className="w-2 h-2 bg-gradient-gold rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-gradient-gold rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
