"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, ImageIcon, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Refined Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtler Primary Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        {/* Subtler Secondary/Slate Glow */}
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <Printer className="w-3.5 h-3.5" />
              Your Local Printing Partner
            </motion.div>

            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
              Fast & Reliable Printing for{" "}
              <span className="text-gradient-primary">Documents, PDFs & Photos</span> /
              <span className="text-gradient-primary"> Lamination</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience professional-grade printing with a personal touch. From high-volume business documents to vibrant photo prints, we ensure perfection in every pixel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="gradient-hero shadow-medium text-white hover:opacity-90 transition-all text-base px-8 py-6 rounded-xl"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#pricing")}
                className="text-base px-8 py-6 border-2 rounded-xl hover:bg-muted transition-colors"
              >
                View Pricing
              </Button>
            </div>

            {/* Trust Badges - Using the new professional palette */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-medium">Affordable Prices</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative p-2 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
              <div className="bg-card rounded-[2rem] shadow-medium p-8 border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  {/* Document Card */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-muted/50 rounded-2xl p-6 flex flex-col items-center gap-4 border border-border/50"
                  >
                    <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center shadow-soft">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-semibold text-foreground">Documents</span>
                  </motion.div>

                  {/* Photo Card */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="bg-muted/50 rounded-2xl p-6 flex flex-col items-center gap-4 border border-border/50"
                  >
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shadow-soft">
                      <ImageIcon className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-semibold text-foreground">Photos</span>
                  </motion.div>
                </div>

                <div className="mt-6 p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                       <Printer className="w-10 h-10 text-primary" />
                       <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground">Status: Ready</span>
                        <span className="text-xs text-muted-foreground">Queue: 0 items</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Floating Tag */}
              <motion.div
                animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-900 rounded-full shadow-medium py-2 px-4 border border-border flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-white font-bold uppercase tracking-wider text-foreground">Store Open</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};