
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("work")}
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("work")}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
