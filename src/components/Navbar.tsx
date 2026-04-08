import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CTA_URL = "https://libertyfunding.us/capital";

const navLinks = [
  { label: "Home", href: CTA_URL },
  { label: "Services", href: CTA_URL },
  { label: "About", href: CTA_URL },
  { label: "Contact", href: CTA_URL },
];



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(10, 22, 40, 0.95)" : "transparent" }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex flex-col">
          <span className="text-lg md:text-xl font-bold tracking-wide text-white">LIBERTY FUNDING</span>
          <span className="text-[10px] md:text-xs tracking-[0.2em] text-gray-400 uppercase -mt-1">Business Capital Solutions</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-red text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Apply For Funding
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md border-b border-white/10"
            style={{ backgroundColor: "rgba(10, 22, 40, 0.98)" }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-red text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
              >
                Apply For Funding
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
