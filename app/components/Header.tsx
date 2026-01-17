"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Printer, UserCircle } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-soft h-16" 
          : "bg-transparent h-20"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection("#home")} 
          className="flex items-center gap-2.5 group transition-transform active:scale-95"
        >
          <div className="p-2 rounded-xl gradient-hero shadow-medium">
            <Printer className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-foreground">
            Vivian <span className="text-primary">Printing</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="text-sm font-bold text-foreground hover:text-primary hover:bg-primary/5 rounded-xl px-5"
          >
            Login
          </Button>
          <Button 
            className="gradient-hero shadow-medium text-white px-6 rounded-xl hover:opacity-90 transition-all font-bold"
          >
            Register
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-medium overflow-hidden"
          >
            <nav className="container px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="py-3 px-4 text-left text-foreground font-medium hover:bg-primary/5 hover:text-primary rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}
              
              {/* Mobile Auth Section */}
              <div className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full border-border hover:bg-muted font-bold py-6 rounded-xl"
                >
                  Login
                </Button>
                <Button
                  className="w-full gradient-hero shadow-medium text-white font-bold py-6 rounded-xl"
                >
                  Register
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};