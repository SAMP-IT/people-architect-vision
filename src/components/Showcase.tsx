import { Instagram } from "lucide-react";

const showcaseItems = [
  { id: 1, type: "post", placeholder: "Social Story 1" },
  { id: 2, type: "reel", placeholder: "Creative Reel 1" },
  { id: 3, type: "post", placeholder: "Brand Design 1" },
  { id: 4, type: "reel", placeholder: "Creative Reel 2" },
  { id: 5, type: "post", placeholder: "Social Story 2" },
  { id: 6, type: "post", placeholder: "Brand Design 2" },
];

const Showcase = () => {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-secondary">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-4"></div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our award-winning creative work and strategic campaigns that drive measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {showcaseItems.map((item, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </section>
  );
};

export default Showcase;
