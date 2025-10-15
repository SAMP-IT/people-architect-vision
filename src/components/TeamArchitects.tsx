import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Reed",
    title: "Creative Lead",
    philosophy: "Empowering voices through visual storytelling.",
    avatar: "AR"
  },
  {
    name: "Priya Sharma",
    title: "Brand Architect",
    philosophy: "Building trust with purposeful design.",
    avatar: "PS"
  },
  {
    name: "Jordan Kim",
    title: "Social Strategist",
    philosophy: "Connecting communities through authentic narratives.",
    avatar: "JK"
  },
  {
    name: "Maya Patel",
    title: "Content Architect",
    philosophy: "Crafting stories that inspire change.",
    avatar: "MP"
  }
];

const TeamArchitects = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Meet Our <span className="text-gradient">People Architects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto"></div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            The minds behind the vision — crafting narratives, designing presence, and empowering communities.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-card border border-border rounded-lg p-6 text-center space-y-4 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                {/* Avatar */}
                <div className="relative mx-auto w-32 h-32">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-gold group-hover:animate-glow-pulse">
                    <span className="font-heading text-3xl font-bold text-primary-foreground">
                      {member.avatar}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="font-ui text-sm font-semibold text-primary uppercase tracking-wide">
                  {member.title}
                </p>

                {/* Philosophy */}
                <p className="font-quote italic text-muted-foreground leading-relaxed">
                  "{member.philosophy}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamArchitects;
