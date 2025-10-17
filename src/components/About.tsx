import aboutVisual from "@/assets/about-visual.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            {/* Decorative Corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
