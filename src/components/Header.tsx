import { useState, useEffect } from "react";
import { Menu, X, Instagram, Youtube, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Team", id: "team" },
    { name: "Mission", id: "mission" },
    { name: "Process", id: "process" },
    { name: "Showcase", id: "showcase" },
    { name: "Impact", id: "impact" },
    { name: "Peoples Media", id: "parent" },
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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-gradient">
              People Architect
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.id)}
                className="font-ui text-sm font-medium text-foreground hover:text-gold-start transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-gold-start transition-colors glow-gold-hover"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-gold-start transition-colors glow-gold-hover"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="mailto:contact@peoplearchitect.com"
              className="text-foreground hover:text-gold-start transition-colors glow-gold-hover"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
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
                  onClick={() => scrollToSection(link.id)}
                  className="font-ui text-base font-medium text-foreground hover:text-gold-start transition-colors text-left py-2"
                >
                  {link.name}
                </button>
              ))}
              
              {/* Social Icons - Mobile */}
              <div className="flex items-center space-x-6 pt-4 border-t border-gold-start/20">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-gold-start transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-gold-start transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={22} />
                </a>
                <a
                  href="mailto:contact@peoplearchitect.com"
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
