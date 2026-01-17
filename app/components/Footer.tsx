"use client";

import { Printer, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Document Printing",
  "Photo Printing",
  "Color Printing",
  "Black & White",
  "Binding & Lamination",
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    /* Changed bg-charcoal to bg-secondary (deep slate) */
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg gradient-hero">
                {/* primary-foreground is white, works perfectly on the blue gradient icon box */}
                <Printer className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-white">Vivian Printing</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm mb-6 leading-relaxed">
              Your trusted local printing partner. Quality prints, fast turnaround, and exceptional service since 2010.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="https://www.facebook.com/profile.php?id=61586257096758" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-secondary-foreground/60 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>vivianjoy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/10">
        <div className="container px-4 py-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/40 text-xs">
            © {new Date().getFullYear()} Vivian Printing. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-secondary-foreground/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};