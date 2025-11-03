import { Instagram, Youtube, Grid3x3, Film, Image as ImageIcon, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useState } from "react";

const SocialShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "posts" | "reels" | "youtube">("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Instagram reels with actual links
  const socialPosts = [
    {
      id: 1,
      type: "Modern living space design",
      category: "reels",
      url: "https://www.instagram.com/reel/DOqYCTGjx6G/",
      embedUrl: "https://www.instagram.com/reel/DOqYCTGjx6G/embed",
      thumbnail: "https://www.instagram.com/reel/DOqYCTGjx6G/media/?size=l"
    },
    {
      id: 2,
      type: "Material texture showcase",
      category: "reels",
      url: "https://www.instagram.com/reel/DOljm30ExBv/",
      embedUrl: "https://www.instagram.com/reel/DOljm30ExBv/embed",
      thumbnail: "https://www.instagram.com/reel/DOljm30ExBv/media/?size=l"
    },
    {
      id: 3,
      type: "Architectural concept",
      category: "reels",
      url: "https://www.instagram.com/reel/DNYC9pPhX83/",
      embedUrl: "https://www.instagram.com/reel/DNYC9pPhX83/embed",
      thumbnail: "https://www.instagram.com/reel/DNYC9pPhX83/media/?size=l"
    },
    {
      id: 4,
      type: "Interior transformation",
      category: "reels",
      url: "https://www.instagram.com/reel/DNVT8FZhp13/",
      embedUrl: "https://www.instagram.com/reel/DNVT8FZhp13/embed",
      thumbnail: "https://www.instagram.com/reel/DNVT8FZhp13/media/?size=l"
    },
    {
      id: 5,
      type: "Design process video",
      category: "reels",
      url: "https://www.instagram.com/reel/DNNvu4OhGhL/",
      embedUrl: "https://www.instagram.com/reel/DNNvu4OhGhL/embed",
      thumbnail: "https://www.instagram.com/reel/DNNvu4OhGhL/media/?size=l"
    },
    {
      id: 6,
      type: "Client project reveal",
      category: "reels",
      url: "https://www.instagram.com/reel/DNLRoTmhKdj/",
      embedUrl: "https://www.instagram.com/reel/DNLRoTmhKdj/embed",
      thumbnail: "https://www.instagram.com/reel/DNLRoTmhKdj/media/?size=l"
    },
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

        {/* Grid of social content with embedded videos */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
        >
          {filteredPosts.map((post, index) => (
            <Dialog key={post.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative aspect-square bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedVideo(post.embedUrl)}
                >
                  {/* Background Image/Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background">
                    <iframe
                      src={post.embedUrl}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-80"
                      style={{ transform: 'scale(1.1)' }}
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-lg">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <Instagram className="h-8 w-8 text-primary mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-ui text-sm text-foreground font-medium">
                      {post.type}
                    </p>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-2xl w-full h-[80vh] p-0 bg-background border-2 border-primary/20">
                <div className="w-full h-full flex items-center justify-center bg-black/50">
                  <iframe
                    src={selectedVideo || post.embedUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
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
