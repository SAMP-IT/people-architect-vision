import { Instagram, Grid3x3, Film, Image as ImageIcon, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SocialShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "posts" | "reels">("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Instagram reels with actual links
  const socialPosts = [
    {
      id: 1,
      type: "Modern living space design",
      category: "reels",
      url: "https://www.instagram.com/reel/DOqYCTGjx6G/",
      embedUrl: "https://www.instagram.com/reel/DOqYCTGjx6G/embed",
      thumbnail: "https://www.instagram.com/reel/DOqYCTGjx6G/media/?size=l",
      gradient: "from-amber-900/40 via-stone-900/60 to-zinc-900/80"
    },
    {
      id: 2,
      type: "Material texture showcase",
      category: "reels",
      url: "https://www.instagram.com/reel/DOljm30ExBv/",
      embedUrl: "https://www.instagram.com/reel/DOljm30ExBv/embed",
      thumbnail: "https://www.instagram.com/reel/DOljm30ExBv/media/?size=l",
      gradient: "from-stone-800/40 via-neutral-900/60 to-zinc-900/80"
    },
    {
      id: 3,
      type: "Architectural concept",
      category: "reels",
      url: "https://www.instagram.com/reel/DNYC9pPhX83/",
      embedUrl: "https://www.instagram.com/reel/DNYC9pPhX83/embed",
      thumbnail: "https://www.instagram.com/reel/DNYC9pPhX83/media/?size=l",
      gradient: "from-zinc-800/40 via-stone-900/60 to-neutral-900/80"
    },
    {
      id: 4,
      type: "Interior transformation",
      category: "reels",
      url: "https://www.instagram.com/reel/DNVT8FZhp13/",
      embedUrl: "https://www.instagram.com/reel/DNVT8FZhp13/embed",
      thumbnail: "https://www.instagram.com/reel/DNVT8FZhp13/media/?size=l",
      gradient: "from-yellow-900/30 via-amber-900/50 to-zinc-900/80"
    },
    {
      id: 5,
      type: "Design process video",
      category: "reels",
      url: "https://www.instagram.com/reel/DNNvu4OhGhL/",
      embedUrl: "https://www.instagram.com/reel/DNNvu4OhGhL/embed",
      thumbnail: "https://www.instagram.com/reel/DNNvu4OhGhL/media/?size=l",
      gradient: "from-neutral-800/40 via-zinc-900/60 to-stone-900/80"
    },
    {
      id: 6,
      type: "Client project reveal",
      category: "reels",
      url: "https://www.instagram.com/reel/DNLRoTmhKdj/",
      embedUrl: "https://www.instagram.com/reel/DNLRoTmhKdj/embed",
      thumbnail: "https://www.instagram.com/reel/DNLRoTmhKdj/media/?size=l",
      gradient: "from-amber-800/30 via-stone-900/50 to-zinc-900/80"
    },
  ];

  const filters = [
    { label: "All", value: "all" as const, icon: Grid3x3 },
    { label: "Posts", value: "posts" as const, icon: ImageIcon },
    { label: "Reels", value: "reels" as const, icon: Film },
  ];

  const filteredPosts = activeFilter === "all"
    ? socialPosts
    : socialPosts.filter(post => post.category === activeFilter);

  return (
    <section id="social" className="py-28 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/50 via-background to-background"></div>
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium tracking-wide"
          >
            @people_architect
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Our Voice on <span className="text-gradient">Social Media</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50"></div>
            <div className="w-3 h-3 rotate-45 border border-primary/50"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Follow our journey on Instagram for design inspiration, process insights, and project reveals
          </p>
        </motion.div>

        {/* Filter Tabs - Refined design */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          <div className="inline-flex bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-1.5">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-ui text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeFilter === filter.value && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold-start))] to-[hsl(var(--gold-end))] rounded-xl shadow-lg"
                    style={{ boxShadow: '0 4px 20px hsla(43, 74%, 49%, 0.3)' }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <filter.icon className="h-4 w-4" />
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid of social content - Premium card design */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
          >
            {filteredPosts.map((post, index) => (
              <Dialog key={post.id}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredCard(post.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group relative aspect-[4/5] cursor-pointer"
                    onClick={() => setSelectedVideo(post.embedUrl)}
                  >
                    {/* Card container with glass effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden bg-card border border-border/30 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/10">

                      {/* Background embed */}
                      <div className="absolute inset-0">
                        <iframe
                          src={post.embedUrl}
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-110"
                          loading="lazy"
                        />
                      </div>

                      {/* Multi-layer gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90 group-hover:to-black/95 transition-all duration-500"></div>

                      {/* Animated border glow on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(135deg, hsla(43, 74%, 49%, 0.1) 0%, transparent 50%, hsla(45, 70%, 63%, 0.1) 100%)',
                          boxShadow: 'inset 0 0 30px hsla(43, 74%, 49%, 0.1)'
                        }}
                      ></div>

                      {/* Play Button - Elegant centered design */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="relative"
                          animate={{
                            scale: hoveredCard === post.id ? 1.1 : 1
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Outer ring */}
                          <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-[1.8] transition-all duration-700"></div>

                          {/* Inner glow ring */}
                          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                          {/* Play button */}
                          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--gold-start))] to-[hsl(var(--gold-end))] flex items-center justify-center shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/40">
                            <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Content footer - Refined layout */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="space-y-3">
                          {/* Instagram badge */}
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--gold-start))] to-[hsl(var(--gold-end))] flex items-center justify-center">
                              <Instagram className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <span className="text-xs font-medium text-primary/80 tracking-wide uppercase">Reel</span>
                          </div>

                          {/* Title */}
                          <h3 className="font-heading text-lg text-foreground font-semibold leading-tight group-hover:text-primary/90 transition-colors duration-300">
                            {post.type}
                          </h3>

                          {/* Animated reveal line */}
                          <div className="flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <span className="text-xs text-muted-foreground">Watch on Instagram</span>
                            <ExternalLink className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute top-4 right-8 w-1 h-1 rounded-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
                    </div>
                  </motion.div>
                </DialogTrigger>

                <DialogContent className="max-w-3xl w-full h-[85vh] p-0 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-black/20 to-black/60">
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
        </AnimatePresence>

        {/* CTA - Premium button design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/people_architect/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="relative font-ui text-base px-8 py-6 bg-transparent border-2 border-primary/50 text-foreground hover:text-primary-foreground overflow-hidden group"
            >
              {/* Animated background fill */}
              <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold-start))] to-[hsl(var(--gold-end))] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-3">
                <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Follow Us on Instagram
                <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </span>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialShowcase;
