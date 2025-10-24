import { motion } from "framer-motion";
import { ArrowLeft, Mail, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Architect Name",
    role: "Principal Architect & Founder",
    bio: "With over 15 years of experience in architectural design, our founder leads the creative vision of People Architect with a passion for sustainable and innovative design.",
    education: "B.Arch, M.Arch in Urban Design",
    specialization: "Residential & Commercial Architecture",
    email: "architect@peoplearchitect.in"
  },
  {
    name: "Interior Designer Name",
    role: "Lead Interior Designer",
    bio: "Specializing in creating functional yet beautiful interior spaces, bringing expertise in material selection and spatial planning to every project.",
    education: "B.Des in Interior Design",
    specialization: "Residential Interiors, Material Consulting",
    email: "interiors@peoplearchitect.in"
  },
  {
    name: "Project Manager Name",
    role: "Project Manager",
    bio: "Ensuring seamless project execution from concept to completion, coordinating with clients, contractors, and consultants for timely delivery.",
    education: "B.E Civil, PMP Certified",
    specialization: "Project Management, Construction Oversight",
    email: "projects@peoplearchitect.in"
  }
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-primary hover:text-gold-highlight transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-ui text-sm">Back to Home</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-6"></div>
            <p className="font-body text-lg text-muted-foreground">
              A passionate team of architects, designers, and project managers dedicated to bringing your vision to life.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-3 gap-8 bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all"
              >
                <div className="md:col-span-1">
                  <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Profile Photo</span>
                  </div>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-secondary border border-border rounded-full hover:border-primary transition-all"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4 text-foreground" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-secondary border border-border rounded-full hover:border-primary transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 text-foreground" />
                    </a>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h2 className="font-heading text-2xl font-bold mb-2">{member.name}</h2>
                    <p className="font-ui text-primary text-sm uppercase tracking-wide">{member.role}</p>
                  </div>

                  <p className="font-body text-foreground/80 leading-relaxed">{member.bio}</p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <div>
                      <p className="font-ui text-sm text-muted-foreground mb-1">Education</p>
                      <p className="font-body text-foreground text-sm">{member.education}</p>
                    </div>
                    <div>
                      <p className="font-ui text-sm text-muted-foreground mb-1">Specialization</p>
                      <p className="font-body text-foreground text-sm">{member.specialization}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="font-heading text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented architects and designers. Check our careers page or get in touch.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
