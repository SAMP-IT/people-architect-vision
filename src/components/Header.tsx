import { useState, useEffect } from "react";
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === "/") {
      // Already on home, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home
      navigate("/");
    }
  };

  const handleGetQuote = () => {
    navigate("/contact");
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "hero", isRoute: false },
    { name: "About", id: "about", isRoute: false },
    { name: "Services", id: "services", isRoute: false },
    { name: "Portfolio", id: "showcase", isRoute: false },
    { name: "Blog", id: "/blog", isRoute: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-gold-start/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-20 sm:h-20 md:h-20" : "h-24 sm:h-28 md:h-32 lg:h-36"
        }`}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src="/logo.png"
              alt="People Architect Logo"
              className={`transition-all duration-300 ${
                isScrolled
                  ? "h-14 sm:h-14 md:h-16 w-auto"
                  : "h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
              }`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => link.isRoute ? navigate(link.id) : scrollToSection(link.id)}
                className="font-ui text-sm font-medium text-foreground hover:text-gold-start transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </nav>

          {/* CTA + Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleGetQuote}
              size="sm"
              className="font-ui bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all glow-gold-hover"
            >
              <Phone className="mr-2 h-4 w-4" />
              Get a Quote
            </Button>

            <div className="flex items-center space-x-3 ml-2 pl-4 border-l border-border">
              <a
                href="https://www.instagram.com/people_architect/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-gold-start transition-colors glow-gold-hover"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@peoplearchitect.in"
                className="text-foreground hover:text-gold-start transition-colors glow-gold-hover"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-gold-start transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-gold-start/20"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => link.isRoute ? navigate(link.id) : scrollToSection(link.id)}
                  className="font-ui text-base font-medium text-foreground hover:text-gold-start transition-colors text-left py-2"
                >
                  {link.name}
                </button>
              ))}

              {/* Get Quote CTA - Mobile */}
              <Button
                onClick={handleGetQuote}
                size="lg"
                className="font-ui bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all glow-gold-hover w-full mt-2"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get a Quote
              </Button>

              {/* Social Icons - Mobile */}
              <div className="flex items-center space-x-6 pt-4 border-t border-gold-start/20">
                <a
                  href="https://www.instagram.com/people_architect/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-gold-start transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="mailto:hello@peoplearchitect.in"
                  className="text-foreground hover:text-gold-start transition-colors"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
