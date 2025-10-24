import aboutVisual from "@/assets/about-visual.jpg";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";

const valueCards = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To transform spaces into experiences that inspire, function beautifully, and stand the test of time through innovative architectural solutions."
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be recognized as pioneers in spatial storytelling, setting new standards in architectural excellence and sustainable design practices."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, innovation, and collaboration guide every project. We believe in creating meaningful spaces that enhance human experiences."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Who We Are</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-gold"></div>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              People Architect is an independent creative design studio redefining living spaces through architectural excellence and innovative spatial design.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              We combine innovation, material expertise, and spatial storytelling to deliver architectural experiences that speak to both form and function. Our approach transforms concepts into reality, creating spaces that inspire and endure.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 font-quote italic text-xl text-primary">
              "Architecture is not just about buildings — it's about crafting experiences that elevate human life."
            </blockquote>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-lg overflow-hidden glow-gold-hover">
              <img
                src={aboutVisual}
                alt="Creative team collaboration"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            {/* Decorative Corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary opacity-50"></div>
          </div>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(203,161,53,0.15)]"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent mb-6 glow-gold group-hover:animate-glow-pulse">
                <card.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-body text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
