import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageSquare, ChevronDown } from "lucide-react";
import { products } from "../../data/products";
import Logo from "../../assets/Logo3.png"
import Logo1 from "../../assets/LogoF1.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState<string | boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Home Furniture", 
      href: "/products",
      dropdown: true,
      dropdownId: "home"
    },
    { 
      name: "Other Furniture", 
      href: "/other-furniture",
      dropdown: true,
      dropdownId: "other"
    },
    //{ name: "Materials", href: "/materials" },
    { name: "Contact", href: "/contact" },
  ];

  const  homeDropdownItems = [
    { name: "Kitchen Furniture", id: "modular-kitchen" },
    { name: "TV Unit", id: "tv-units" },
    { name: "Bedroom", id: "bedroom" },
    { name: "Wardrobe", id: "wardrobes" },
    { name: "Dressing Table", id: "dressing-tables" },
    { name: "Sofa", id: "sofa-sets" },
  ];

  const otherDropdownItems = [
    { name: "Hotel Furniture", id: "hotel-furniture" },
    { name: "Hospital Furniture", id: "hospital-furniture" },
    { name: "School Furniture", id: "school-furniture" },
  ];

  return (
    <nav className={`transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1">
          
          <img 
            src= {Logo1}
            alt="PlyNest Logo" 
            className="h-10 md:h-14 w-auto object-contain"
            id="brand-logo-navbar"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative group h-full flex items-center"
              onMouseEnter={() => link.dropdown && setIsDropdownOpen(link.dropdownId || "")}
              onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
            >
              <Link 
                to={link.href} 
                className={`text-sm font-medium hover:text-brand-primary transition-colors uppercase tracking-wider flex items-center gap-1 ${location.pathname === link.href ? 'text-brand-primary' : 'text-gray-600'}`}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen === link.dropdownId ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {isDropdownOpen === link.dropdownId && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-sm border-t-2 border-brand-primary mt-2 overflow-hidden"
                    >
                      {(link.dropdownId === "home" ? homeDropdownItems : otherDropdownItems).map((item, idx) => (
                        <Link 
                          key={idx}
                          to={`/products/${item.id}`}
                          className="block px-6 py-4 text-sm font-bold text-gray-900 border-b border-gray-50 hover:bg-gray-50 hover:text-brand-primary transition-all flex items-center justify-between group/item"
                        >
                          {item.name}
                          <motion.div 
                            initial={{ x: -5, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            className="text-brand-primary"
                          >
                            →
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <a 
            href="https://wa.me/919850985027" 
            target="_blank" 
            rel="noreferrer"
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-all flex items-center gap-2"
          >
            <MessageSquare size={16} />
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-brand-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-2 lg:hidden border-t border-gray-100 overflow-hidden"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                <div className="flex items-center justify-between py-3 border-b border-gray-50">
                  <Link 
                    to={link.href} 
                    className={`text-lg font-medium ${location.pathname === link.href ? 'text-brand-primary' : 'text-gray-900'}`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setIsDropdownOpen(isDropdownOpen === link.dropdownId ? false : (link.dropdownId || ""));
                      }}
                      className="p-2 text-brand-primary"
                    >
                      <ChevronDown size={20} className={`transition-transform ${isDropdownOpen === link.dropdownId ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {link.dropdown && isDropdownOpen === link.dropdownId && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="pl-4 flex flex-col bg-gray-50/50"
                  >
                    {(link.dropdownId === "home" ? homeDropdownItems : otherDropdownItems).map((item, idx) => (
                      <Link 
                        key={idx}
                        to={`/products/${item.id}`}
                        className="py-3 text-sm font-medium text-gray-600 border-b border-gray-100 last:border-0"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <a 
              href="https://wa.me/919850985027"
              className="bg-brand-primary text-white px-6 py-3 rounded-xl text-center font-semibold mt-4 flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} />
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
