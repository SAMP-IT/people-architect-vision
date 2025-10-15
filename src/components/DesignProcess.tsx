import { motion } from "framer-motion";
import { Ear, Pencil, Hammer, Volume2, TrendingUp } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Listen",
    description: "We begin by understanding your voice, vision, and values.",
    icon: Ear
  },
  {
    number: 2,
    title: "Design",
    description: "Crafting authentic narratives that resonate with your audience.",
    icon: Pencil
  },
  {
    number: 3,
    title: "Build",
    description: "Creating digital presence across platforms with purpose.",
    icon: Hammer
  },
  {
    number: 4,
    title: "Amplify",
    description: "Empowering your message to reach and inspire communities.",
    icon: Volume2
  },
  {
    number: 5,
    title: "Evolve",
    description: "Continuous growth and adaptation with changing landscapes.",
    icon: TrendingUp
  }
];

const DesignProcess = () => {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Design Process</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto"></div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From vision to reality — a structured journey of transformation.
          </p>
        </motion.div>

        {/* Process Steps - Desktop Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>

            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Step Card */}
                    <div className="bg-card border border-border rounded-lg p-6 text-center space-y-4 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                      {/* Number Badge */}
                      <div className="relative mx-auto w-16 h-16 mb-4">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent glow-gold group-hover:animate-glow-pulse flex items-center justify-center">
                          <span className="font-heading text-xl font-bold text-primary-foreground">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center">
                        <IconComponent className="w-10 h-10 text-primary" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet Vertical */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-24 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-30"></div>
                )}

                <div className="flex gap-6">
                  {/* Number Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent glow-gold flex items-center justify-center z-10 relative">
                      <span className="font-heading text-xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card border border-border rounded-lg p-6 space-y-3 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-8 h-8 text-primary" strokeWidth={1.5} />
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
