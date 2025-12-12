import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ProjectData {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  tags: string[];
}

// Sample project data - in production, this would come from a CMS or database
const projectsData: Record<string, ProjectData> = {
  "modern-villa-madurai": {
    id: "modern-villa-madurai",
    title: "Modern Villa in Madurai",
    category: "Residential",
    location: "Madurai, Tamil Nadu",
    year: "2024",
    area: "4,500 sq ft",
    description: "A contemporary villa design that seamlessly blends indoor and outdoor living spaces while maintaining privacy and maximizing natural light.",
    challenge: "The client wanted a modern home that felt spacious yet intimate, with strong connections to the outdoor garden while ensuring privacy from neighboring properties.",
    solution: "We designed a series of interconnected pavilions arranged around a central courtyard, creating visual connections between spaces while maintaining privacy. Large sliding glass doors and strategically placed skylights flood the interior with natural light.",
    features: [
      "Open-plan living and dining areas",
      "Central courtyard with landscaping",
      "Master suite with private terrace",
      "Home office with garden views",
      "Infinity pool and deck",
      "Sustainable materials and energy-efficient systems",
      "Smart home integration"
    ],
    tags: ["Modern", "Residential", "Sustainable", "Luxury"]
  },
  // Add more projects as needed
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/#showcase")}
            className="inline-flex items-center gap-2 text-primary hover:text-gold-highlight transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-ui text-sm">Back to Portfolio</span>
          </button>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="aspect-video bg-gradient-to-br from-muted to-secondary rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Project Image Placeholder</p>
              </div>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="font-body text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl font-bold mb-4">
                  The <span className="text-gradient">Challenge</span>
                </h2>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  {project.challenge}
                </p>
              </motion.section>

              {/* Solution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Our <span className="text-gradient">Solution</span>
                </h2>
                <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
                  {project.solution}
                </p>

                <h3 className="font-heading text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-gold mt-2 flex-shrink-0"></span>
                      <span className="font-body text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* Image Gallery Placeholder */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="font-heading text-3xl font-bold mb-6">
                  Project <span className="text-gradient">Gallery</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">Image {i}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24 space-y-6"
              >
                {/* Project Info */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-heading text-xl font-bold mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Tag className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-ui text-sm text-muted-foreground mb-1">Category</p>
                        <p className="font-body text-foreground">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-ui text-sm text-muted-foreground mb-1">Location</p>
                        <p className="font-body text-foreground">{project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-ui text-sm text-muted-foreground mb-1">Completed</p>
                        <p className="font-body text-foreground">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ExternalLink className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-ui text-sm text-muted-foreground mb-1">Area</p>
                        <p className="font-body text-foreground">{project.area}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-heading text-xl font-bold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-ui rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-6 text-center">
                  <h3 className="font-heading text-xl font-bold mb-3">Start Your Project</h3>
                  <p className="font-body text-sm text-muted-foreground mb-6">
                    Ready to create something amazing? Let's discuss your vision.
                  </p>
                  <Button
                    onClick={() => navigate("/contact")}
                    className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all glow-gold-hover"
                  >
                    Get in Touch
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
