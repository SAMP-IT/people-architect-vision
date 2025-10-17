import { Home, Sofa, Layers } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "Architectural Design",
    description: "Concept to completion design excellence.",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    description: "Bespoke interiors with functional beauty.",
  },
  {
    icon: Layers,
    title: "Material Consulting",
    description: "Expert advice on finishes, materials, and textures.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-card border border-border rounded-lg p-8 text-center space-y-4 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(203,161,53,0.15)]"
            >
              {/* Gold gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4 glow-gold group-hover:animate-glow-pulse">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
