import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { submitContactForm } from "@/services/contactService";

const projectTypes = [
  "Residential Architecture",
  "Commercial Architecture",
  "Interior Design",
  "Renovation",
  "Material Consulting",
  "Other"
];

const budgetRanges = [
  "Under ₹10 Lakhs",
  "₹10-25 Lakhs",
  "₹25-50 Lakhs",
  "₹50 Lakhs - 1 Crore",
  "Above ₹1 Crore",
  "Prefer not to say"
];

const timelines = [
  "Urgent (Within 1 month)",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "12+ months",
  "Flexible"
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Firebase Firestore
      const docId = await submitContactForm(formData);

      console.log("Form submitted successfully with ID:", docId);

      // Show success state
      setIsSubmitted(true);

      // Show success toast
      toast({
        title: "Inquiry Submitted Successfully! 🎉",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
        duration: 5000,
      });

      // Reset form after 3 seconds and redirect
      setTimeout(() => {
        navigate("/");
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error toast
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your inquiry. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStep1Valid = formData.projectType && formData.budget && formData.timeline;
  const isStep2Valid = formData.name && formData.email && formData.phone && formData.location;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-primary hover:text-gold-highlight transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-ui text-sm">Back to Home</span>
            </button>

            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Let's Create <span className="text-gradient">Something Amazing</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-6"></div>
            <p className="font-body text-lg text-muted-foreground">
              Share your vision with us. We'll guide you through the process and bring your dream space to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <a
                    href="mailto:hello@peoplearchitect.in"
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:animate-glow-pulse">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-ui text-sm text-muted-foreground">Email</p>
                      <p className="font-body text-foreground">hello@peoplearchitect.in</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:animate-glow-pulse">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-ui text-sm text-muted-foreground">Phone</p>
                      <p className="font-body text-foreground">+91 98765 43210</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-ui text-sm text-muted-foreground">Office</p>
                      <p className="font-body text-foreground">Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-heading text-lg font-bold mb-3">Office Hours</h3>
                <p className="font-body text-muted-foreground text-sm">
                  Monday - Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: By Appointment
                </p>
              </div>
            </motion.div>

            {/* Multi-step Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-3"
            >
              <div className="bg-card border border-border rounded-lg p-8">
                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-ui text-sm font-bold transition-all ${
                          step >= num
                            ? "bg-gradient-gold text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {num}
                      </div>
                      {num < 3 && (
                        <div
                          className={`flex-1 h-1 mx-2 transition-all ${
                            step > num ? "bg-gradient-gold" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Project Details */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-2">Project Details</h3>
                        <p className="font-body text-muted-foreground text-sm mb-6">
                          Tell us about your project
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <select
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full mt-2 px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          required
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="budget">Budget Range *</Label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full mt-2 px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          required
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="timeline">Project Timeline *</Label>
                        <select
                          id="timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full mt-2 px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          required
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>

                      <Button
                        type="button"
                        onClick={handleNext}
                        disabled={!isStep1Valid}
                        className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all"
                      >
                        Next Step
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  )}

                  {/* Step 2: Contact Information */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-2">Your Information</h3>
                        <p className="font-body text-muted-foreground text-sm mb-6">
                          How can we reach you?
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="location">Project Location *</Label>
                        <Input
                          id="location"
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="City, State"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          onClick={handlePrev}
                          variant="outline"
                          className="flex-1"
                        >
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          Previous
                        </Button>
                        <Button
                          type="button"
                          onClick={handleNext}
                          disabled={!isStep2Valid}
                          className="flex-1 bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all"
                        >
                          Next Step
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Additional Details */}
                  {step === 3 && !isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-heading text-2xl font-bold mb-2">Tell Us More</h3>
                        <p className="font-body text-muted-foreground text-sm mb-6">
                          Share your vision with us
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="message">Project Description</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project, requirements, inspirations, or any specific needs..."
                          className="mt-2 min-h-[200px]"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="p-4 bg-secondary/30 border border-border rounded-lg">
                        <p className="font-body text-sm text-muted-foreground">
                          By submitting this form, you agree to our privacy policy and consent to be contacted about your project.
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          onClick={handlePrev}
                          variant="outline"
                          className="flex-1"
                          disabled={isSubmitting}
                        >
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          Previous
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all glow-gold-hover"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Submit Inquiry
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Success State */}
                  {step === 3 && isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 glow-gold animate-glow-pulse">
                        <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
                      </div>

                      <h3 className="font-heading text-3xl font-bold mb-4 text-gradient">
                        Thank You!
                      </h3>

                      <p className="font-body text-lg text-foreground mb-2">
                        Your inquiry has been submitted successfully.
                      </p>

                      <p className="font-body text-muted-foreground">
                        We'll review your project details and get back to you within 24 hours.
                      </p>

                      <div className="mt-8">
                        <p className="font-ui text-sm text-muted-foreground">
                          Redirecting you to homepage...
                        </p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
