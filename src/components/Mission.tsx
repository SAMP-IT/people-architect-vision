import { Sparkles, Users, Target } from "lucide-react";

const missionCards = [
  {
    icon: Sparkles,
    title: "Brand Storytelling",
    description: "Transforming ideas into authentic narratives that resonate and inspire."
  },
  {
    icon: Target,
    title: "Social Media Identity",
    description: "Designing visual experiences that capture attention and build lasting connections."
  },
  {
    icon: Users,
    title: "Community Growth",
    description: "Connecting people through meaningful engagement and shared purpose."
  }
];

const Mission = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            We Build <span className="text-gradient">Digital Presence</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {missionCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 glow-gold-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-4 bg-gradient-gold rounded-full">
                <card.icon className="h-8 w-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-ui text-2xl font-semibold mb-4 text-foreground group-hover:text-gradient transition-colors">
                {card.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {card.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
