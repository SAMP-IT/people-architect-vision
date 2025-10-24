import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  process: { step: string; description: string }[];
  deliverables: string[];
  timeline: string;
  priceRange: string;
}

const servicesData: Record<string, ServiceData> = {
  "architectural-design": {
    id: "architectural-design",
    title: "Architectural Design",
    tagline: "From Concept to Completion",
    description: "Complete architectural design services from initial concept through construction documentation.",
    longDescription: "Our architectural design services encompass every phase of your project, from initial site analysis and conceptual design through detailed construction documentation and construction administration. We blend creativity with technical expertise to deliver spaces that are both beautiful and functional, meeting all regulatory requirements while exceeding your expectations.",
    features: [
      "Site analysis and feasibility studies",
      "Conceptual design and schematic development",
      "3D visualization and renderings",
      "Detailed construction drawings",
      "Building permit assistance",
      "Construction administration",
      "Sustainable design integration",
      "Regulatory compliance"
    ],
    process: [
      { step: "Discovery & Research", description: "We begin by understanding your vision, requirements, site conditions, and local regulations." },
      { step: "Concept Development", description: "Initial sketches and 3D models to explore different design directions and spatial arrangements." },
      { step: "Design Development", description: "Refinement of chosen concept with detailed plans, elevations, and material selections." },
      { step: "Documentation", description: "Comprehensive construction drawings and specifications for permits and construction." },
      { step: "Permit Assistance", description: "Support through the building permit approval process with local authorities." },
      { step: "Construction Oversight", description: "Regular site visits and coordination to ensure design intent is maintained." }
    ],
    deliverables: [
      "Site plans and surveys",
      "Floor plans (all levels)",
      "Elevations (all sides)",
      "Section drawings",
      "3D renderings",
      "Material specifications",
      "Construction details",
      "Permit-ready drawing set"
    ],
    timeline: "3-6 months (varies by project complexity)",
    priceRange: "₹2-8 Lakhs (depends on scope and square footage)"
  },
  "interior-design": {
    id: "interior-design",
    title: "Interior Design",
    tagline: "Spaces That Reflect Your Style",
    description: "Bespoke interior design solutions that blend aesthetics with functionality.",
    longDescription: "Our interior design services transform empty shells into personalized environments that reflect your unique style and enhance your daily life. We consider every detail—from spatial flow and lighting design to furniture selection and custom millwork—to create interiors that are both stunning and supremely functional.",
    features: [
      "Space planning and layout optimization",
      "Color scheme and material selection",
      "Custom furniture design",
      "Lighting design",
      "3D visualization",
      "Furniture and fixture sourcing",
      "Art and accessory curation",
      "Project management and installation"
    ],
    process: [
      { step: "Initial Consultation", description: "Understanding your lifestyle, preferences, and functional requirements." },
      { step: "Space Planning", description: "Optimizing layout for flow, functionality, and furniture placement." },
      { step: "Concept Presentation", description: "Mood boards, color palettes, and material samples for your approval." },
      { step: "Detailed Design", description: "Furniture selections, custom pieces, lighting plan, and finishing details." },
      { step: "Procurement", description: "Sourcing all furniture, fixtures, materials, and accessories." },
      { step: "Installation & Styling", description: "Coordinating installation and final styling for a complete look." }
    ],
    deliverables: [
      "Space plans with furniture layout",
      "3D interior renderings",
      "Material and finish boards",
      "Furniture specifications",
      "Lighting plan",
      "Custom millwork drawings",
      "Color schemes",
      "Shopping list and budget"
    ],
    timeline: "2-4 months (design) + procurement time",
    priceRange: "₹1.5-5 Lakhs (varies by scope and finishes)"
  },
  "material-consulting": {
    id: "material-consulting",
    title: "Material Consulting",
    tagline: "Expert Guidance on Finishes & Materials",
    description: "Professional advice on selecting the perfect materials, finishes, and textures for your project.",
    longDescription: "Material selection can make or break a design project. Our material consulting service provides expert guidance on choosing the right materials for your aesthetic goals, budget, and performance requirements. We leverage our extensive knowledge of materials, suppliers, and latest innovations to help you make informed decisions.",
    features: [
      "Material selection for all surfaces",
      "Finish recommendations",
      "Texture and pattern coordination",
      "Durability and maintenance guidance",
      "Cost-effective alternatives",
      "Sustainable material options",
      "Supplier connections",
      "Sample procurement"
    ],
    process: [
      { step: "Project Brief", description: "Understanding your design direction, budget, and performance needs." },
      { step: "Material Research", description: "Identifying options that meet your aesthetic and functional criteria." },
      { step: "Sample Presentation", description: "Physical samples of recommended materials for your review." },
      { step: "Cost Analysis", description: "Detailed pricing and comparison of material options." },
      { step: "Supplier Coordination", description: "Connecting you with reliable suppliers and negotiating pricing." },
      { step: "Specification", description: "Detailed material specifications for installation." }
    ],
    deliverables: [
      "Material palette boards",
      "Physical samples",
      "Cost comparisons",
      "Supplier contacts",
      "Installation specifications",
      "Maintenance guidelines",
      "Sustainability reports (if applicable)",
      "Material schedule"
    ],
    timeline: "2-4 weeks",
    priceRange: "₹50,000 - ₹2 Lakhs (project dependent)"
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Service Not Found</h1>
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
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-primary hover:text-gold-highlight transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-ui text-sm">Back to Home</span>
          </button>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="font-heading text-2xl md:text-3xl text-primary mb-6">
              {service.tagline}
            </p>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              {service.longDescription}
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What We Offer */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl font-bold mb-6">
                  What We <span className="text-gradient">Offer</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Our Process */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-heading text-3xl font-bold mb-6">
                  Our <span className="text-gradient">Process</span>
                </h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div
                      key={index}
                      className="relative pl-8 pb-6 border-l-2 border-border last:border-0 last:pb-0"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-gold"></div>
                      <h3 className="font-heading text-xl font-bold mb-2 text-foreground">
                        {index + 1}. {step.step}
                      </h3>
                      <p className="font-body text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Deliverables */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="font-heading text-3xl font-bold mb-6">
                  <span className="text-gradient">Deliverables</span>
                </h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="font-body text-muted-foreground mb-4">
                    Upon completion, you'll receive:
                  </p>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-body text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 space-y-6"
              >
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">
                    Quick Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-ui text-sm text-muted-foreground mb-1">Timeline</p>
                        <p className="font-body text-foreground">{service.timeline}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-ui text-sm text-muted-foreground mb-1">Investment</p>
                        <p className="font-body text-foreground">{service.priceRange}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-6 text-center">
                  <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
                    Ready to Start?
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-6">
                    Let's discuss your project and create something amazing together.
                  </p>
                  <Button
                    onClick={() => navigate("/contact")}
                    className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all glow-gold-hover"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Get a Quote
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

export default ServiceDetail;
