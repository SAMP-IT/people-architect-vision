import { Button } from "@/components/ui/button";
import { Mail, Users } from "lucide-react";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <section id="careers" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent glow-gold animate-glow-pulse">
            <Users className="h-10 w-10 text-primary-foreground" />
          </div>

          {/* Title */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            We're Growing. <span className="text-gradient">Join Us.</span>
          </h2>

          {/* Divider */}
          <div className="w-20 h-1 bg-gradient-gold mx-auto"></div>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Be a part of our design movement. We're looking for passionate architects and designers who want to make an impact through innovative spatial storytelling and architectural excellence.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="font-ui bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all glow-gold-hover group"
              asChild
            >
              <a href="mailto:hello@peoplearchitect.in">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Apply Now
              </a>
            </Button>
          </div>

          {/* Decorative Pulse */}
          <div className="pt-8 flex justify-center gap-2">
            <div className="w-2 h-2 bg-gradient-gold rounded-full animate-glow-pulse"></div>
            <div className="w-2 h-2 bg-gradient-gold rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-gradient-gold rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
