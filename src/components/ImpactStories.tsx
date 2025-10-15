import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, BookOpen, Award, Quote } from "lucide-react";

const impactData = [
  {
    type: "testimonial",
    quote: "People Architect transformed our brand narrative into a movement that resonates with our community.",
    author: "Sarah Johnson",
    role: "Founder, CreativeHub"
  },
  {
    type: "metric",
    metric: "50K+",
    description: "Voices Amplified",
    icon: Users
  },
  {
    type: "metric",
    metric: "100+",
    description: "Stories Crafted",
    icon: BookOpen
  },
  {
    type: "testimonial",
    quote: "They don't just create content—they architect presence and purpose.",
    author: "Michael Chen",
    role: "Social Impact Leader"
  },
  {
    type: "metric",
    metric: "25+",
    description: "Brands Transformed",
    icon: Award
  }
];

const ImpactStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % impactData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + impactData.length) % impactData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % impactData.length);
  };

  const currentItem = impactData[currentIndex];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Impact</span> Stories
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto"></div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Real voices, real impact — the stories that define our purpose.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 min-h-[300px] flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.1)]">
            <AnimatePresence mode="wait">
              {currentItem.type === "testimonial" ? (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-6 max-w-3xl"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center">
                    <Quote className="w-12 h-12 text-primary opacity-50" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="font-quote italic text-2xl md:text-3xl text-foreground leading-relaxed">
                    "{currentItem.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="space-y-1">
                    <p className="font-heading text-lg font-bold text-primary">
                      {currentItem.author}
                    </p>
                    <p className="font-ui text-sm text-muted-foreground">
                      {currentItem.role}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-6"
                >
                  {/* Icon */}
                  <div className="flex justify-center">
                    {currentItem.icon && (
                      <currentItem.icon className="w-16 h-16 text-primary glow-gold" strokeWidth={1.5} />
                    )}
                  </div>

                  {/* Metric */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-6xl md:text-7xl font-bold text-gradient">
                      {currentItem.metric}
                    </h3>
                    <p className="font-ui text-xl text-muted-foreground uppercase tracking-wide">
                      {currentItem.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-card border border-border rounded-full p-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-card border border-border rounded-full p-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {impactData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
