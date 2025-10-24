import { Instagram, Youtube, Grid3x3, Film, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const SocialShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "posts" | "reels" | "youtube">("all");

  // Placeholder for Instagram reels/posts
  const socialPosts = [
    { id: 1, type: "Modern living space design", category: "posts" },
    { id: 2, type: "Material texture showcase", category: "reels" },
    { id: 3, type: "Architectural concept", category: "posts" },
    { id: 4, type: "Interior transformation", category: "youtube" },
    { id: 5, type: "Design process video", category: "reels" },
    { id: 6, type: "Client project reveal", category: "posts" },
  ];

  const filters = [
    { label: "All", value: "all" as const, icon: Grid3x3 },
    { label: "Posts", value: "posts" as const, icon: ImageIcon },
    { label: "Reels", value: "reels" as const, icon: Film },
    { label: "YouTube", value: "youtube" as const, icon: Youtube },
  ];

  const filteredPosts = activeFilter === "all"
    ? socialPosts
    : socialPosts.filter(post => post.category === activeFilter);

  return (
    <section id="social" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Our Voice on <span className="text-gradient">Social Media</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto"></div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our journey on Instagram and YouTube for design inspiration, process insights, and project reveals
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-ui text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-gradient-gold text-primary-foreground shadow-lg glow-gold"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <filter.icon className="h-4 w-4" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid of social content placeholders */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-square bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Instagram className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-ui text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {post.type}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="font-ui bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all glow-gold-hover group"
          >
            <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Follow Us on Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialShowcase;
