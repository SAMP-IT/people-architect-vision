const ParentBrand = () => {
  return (
    <section id="parent" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Title */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            A Venture by <span className="text-gradient">People Media</span>
          </h2>

          {/* Content */}
          <p className="font-body text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Born from the creative spirit of <span className="text-primary font-semibold">People Media</span>, 
            People Architect extends the vision — empowering stories that build people, brands, and communities.
          </p>

          <blockquote className="font-quote italic text-2xl text-primary py-8">
            "From the creators at People Media, we turn influence into awareness, 
            creativity into social design."
          </blockquote>

          {/* Connection Visual */}
          <div className="flex items-center justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-gold flex items-center justify-center mb-4 glow-gold">
                <span className="font-heading text-2xl font-bold text-primary-foreground">PM</span>
              </div>
              <p className="font-ui text-sm font-semibold text-muted-foreground">People Media</p>
            </div>

            {/* Connection Line */}
            <div className="flex-1 max-w-xs relative">
              <div className="h-px bg-gradient-to-r from-primary via-accent to-primary"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3">
                <div className="w-3 h-3 bg-gradient-gold rounded-full animate-glow-pulse"></div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-background to-secondary border-2 border-primary flex items-center justify-center mb-4 glow-gold">
                <span className="font-heading text-2xl font-bold text-gradient">PA</span>
              </div>
              <p className="font-ui text-sm font-semibold text-foreground">People Architect</p>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 border border-primary rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 border border-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentBrand;
