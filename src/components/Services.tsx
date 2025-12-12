import { Home, Sofa, Layers, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Home,
    title: "Architectural Design",
    description: "Concept to completion design excellence.",
    details: "From initial concept sketches to final construction documentation, we handle every phase of architectural design with precision and creativity.",
    slug: "architectural-design",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    description: "Bespoke interiors with functional beauty.",
    details: "Our interior design services transform spaces into personalized environments that reflect your style while maximizing functionality and comfort.",
    slug: "interior-design",
  },
  {
    icon: Layers,
    title: "Material Consulting",
    description: "Expert advice on finishes, materials, and textures.",
    details: "We provide expert guidance on material selection, helping you choose the perfect finishes, textures, and surfaces for your project.",
    slug: "material-consulting",
  },
];

const faqs = [
  {
    question: "What is your design process like?",
    answer: "Our design process begins with understanding your vision and requirements. We then move through concept development, design refinement, documentation, and construction oversight to ensure your project is realized exactly as envisioned."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A residential design project typically takes 3-6 months from concept to completion, while larger commercial projects may take 6-12 months or more."
  },
  {
    question: "Do you handle project management and construction?",
    answer: "Yes, we offer comprehensive project management services and work closely with trusted contractors to oversee construction, ensuring quality and adherence to design specifications."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve clients in Madurai and surrounding regions of Tamil Nadu, but we're open to discussing projects across India and internationally for the right opportunities."
  },
  {
    question: "How do you charge for your services?",
    answer: "Our fees are project-specific and depend on scope, complexity, and timeline. We offer transparent pricing with detailed proposals after an initial consultation. Contact us for a customized quote."
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-card border border-border rounded-lg p-8 text-center space-y-4 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(203,161,53,0.15)]"
            >
              {/* Gold gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4 glow-gold group-hover:animate-glow-pulse">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Details */}
                <p className="font-body text-sm text-muted-foreground/80 leading-relaxed mb-6">
                  {service.details}
                </p>

                {/* View Details Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h3>
            <div className="w-20 h-1 bg-gradient-gold mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-all"
              >
                <AccordionTrigger className="font-heading text-lg font-semibold text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="font-body text-muted-foreground mb-6">
              Have more questions? We're here to help.
            </p>
            <Button
              className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all glow-gold-hover"
              onClick={() => window.location.href = "/contact"}
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
