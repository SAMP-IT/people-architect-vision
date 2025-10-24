import { Instagram, Youtube, Mail, Send, MapPin, Phone, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitNewsletterSubscription } from "@/services/contactService";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitNewsletterSubscription(email);

      toast({
        title: "Successfully Subscribed! 📬",
        description: "Thank you for subscribing to our newsletter. Stay tuned for design inspiration!",
        duration: 5000,
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to our newsletter. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/#showcase" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative border-t border-border py-16">
      {/* Golden Line Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                <span className="text-gradient">People Architect</span>
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                Crafting intelligent spaces that inspire through architectural excellence and innovative spatial design.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/people_architect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-card border border-border rounded-full hover:border-primary transition-all glow-gold-hover"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://youtube.com/@PeopleArchitect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 bg-card border border-border rounded-full hover:border-primary transition-all glow-gold-hover"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:hello@peoplearchitect.in"
                  className="group p-2 bg-card border border-border rounded-full hover:border-primary transition-all glow-gold-hover"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-ui text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-4 text-foreground">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@peoplearchitect.in"
                    className="font-ui text-sm text-muted-foreground hover:text-primary transition-colors flex items-start gap-2"
                  >
                    <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>hello@peoplearchitect.in</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919876543210"
                    className="font-ui text-sm text-muted-foreground hover:text-primary transition-colors flex items-start gap-2"
                  >
                    <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>+91 98765 43210</span>
                  </a>
                </li>
                <li className="font-ui text-sm text-muted-foreground flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </li>
                <li className="font-ui text-sm text-muted-foreground flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Mon-Sat: 9AM - 7PM</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-4 text-foreground">Stay Updated</h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for design inspiration and updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="bg-background"
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-ui text-sm text-muted-foreground text-center md:text-left">
                © 2025 People Architect. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="font-ui text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="font-ui text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="font-ui text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
