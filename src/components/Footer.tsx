import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12">
      {/* Golden Line Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Branding */}
          <div className="text-center mb-8">
            <h3 className="font-heading text-3xl font-bold mb-2">
              <span className="text-gradient">People Architect</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Building stories, one space at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="group p-3 bg-card border border-border rounded-full hover:border-primary transition-all glow-gold-hover"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="group p-3 bg-card border border-border rounded-full hover:border-primary transition-all glow-gold-hover"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="group p-3 bg-card border border-border rounded-full hover:border-primary transition-all glow-gold-hover"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-8">
            <a href="mailto:hello@peoplearchitect.in" className="font-ui text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="h-4 w-4" />
              hello@peoplearchitect.in
            </a>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <a href="https://instagram.com/people_architect" target="_blank" rel="noopener noreferrer" className="font-ui text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              @people_architect
            </a>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <a href="https://youtube.com/@PeopleArchitect" target="_blank" rel="noopener noreferrer" className="font-ui text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              /PeopleArchitect
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 People Architect. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
