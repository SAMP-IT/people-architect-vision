import { Instagram, Home, Building2, Sofa, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const showcaseItems = [
  { id: 1, type: "post", placeholder: "Residential Design", category: "residential" },
  { id: 2, type: "reel", placeholder: "Modern Interior", category: "interior" },
  { id: 3, type: "post", placeholder: "Office Space", category: "commercial" },
  { id: 4, type: "reel", placeholder: "Material Showcase", category: "exterior" },
  { id: 5, type: "post", placeholder: "Villa Concept", category: "residential" },
  { id: 6, type: "post", placeholder: "Luxury Living", category: "interior" },
  { id: 7, type: "post", placeholder: "Corporate HQ", category: "commercial" },
  { id: 8, type: "reel", placeholder: "Facade Design", category: "exterior" },
];

const categories = [
  { label: "All Projects", value: "all", icon: Sparkles },
  { label: "Residential", value: "residential", icon: Home },
  { label: "Commercial", value: "commercial", icon: Building2 },
  { label: "Interior", value: "interior", icon: Sofa },
  { label: "Exterior", value: "exterior", icon: Layers },
];

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? showcaseItems
    : showcaseItems.filter(item => item.category === activeCategory);

  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-secondary">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-4"></div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected architectural and interior design works showcasing our commitment to form, function, and innovation
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-ui text-sm font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-gradient-gold text-primary-foreground shadow-lg glow-gold"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <category.icon className="h-4 w-4" />
              {category.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative aspect-square bg-card rounded-lg overflow-hidden cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-secondary">
                <div className="text-center">
                  <Instagram className="h-12 w-12 text-primary mx-auto mb-2 opacity-50" />
                  <p className="font-ui text-sm text-muted-foreground">{item.placeholder}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-ui text-sm font-semibold text-foreground bg-background/90 px-4 py-2 rounded-full border border-primary">
                  View on Instagram
                </span>
              </div>

              {/* Golden Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-300 rounded-lg"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </section>
  );
};

export default Showcase;
