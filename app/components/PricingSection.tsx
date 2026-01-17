"use client";

import { motion } from "framer-motion";
import { FileText, Copy, ImageIcon, ShieldCheck, Zap } from "lucide-react";

const priceCategories = [
  {
    title: "Bond Paper Printing",
    icon: FileText,
    items: [
      { label: "Short", price: "₱7" },
      { label: "A4", price: "₱8" },
      { label: "Long", price: "₱9" },
    ],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Photocopy / Xerox",
    icon: Copy,
    subtitle: "Colored",
    items: [
      { label: "Short", price: "₱6" },
      { label: "A4", price: "₱7" },
      { label: "Long", price: "₱8" },
    ],
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    title: "Xerox (B&W)",
    icon: Copy,
    subtitle: "Non-Colored",
    items: [
      { label: "Short", price: "₱5" },
      { label: "A4", price: "₱6" },
      { label: "Long", price: "₱7" },
    ],
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    title: "Photo Printing",
    icon: ImageIcon,
    items: [
      { label: "A4 Size", price: "₱45" },
      { label: "5R Size", price: "₱30" },
      { label: "4R Size", price: "₱23" },
      { label: "3R Size", price: "₱15" },
    ],
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Lamination",
    icon: ShieldCheck,
    items: [
      { label: "A4 Size", price: "₱60" },
      { label: "Long Size", price: "₱65" },
      { label: "ID Size", price: "₱30" },
    ],
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Pricing Menu</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gradient-primary">Service Rates</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            High-quality printing and finishing services at honest, local prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priceCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-3xl p-8 border border-border/60 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl ${cat.color}`}>
                  <cat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">{cat.title}</h3>
                  {cat.subtitle && <p className="text-xs text-muted-foreground uppercase font-semibold">{cat.subtitle}</p>}
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                {cat.items.map((item) => (
                  <div key={item.label} className="flex justify-between items-center group">
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="h-px w-8 bg-border group-hover:w-12 transition-all duration-300" />
                      <span className="font-display font-bold text-lg text-foreground">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/40">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground/60">
                  <Zap className="w-3 h-3 text-amber-500" />
                  Same-day release available
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-12 italic">
          * Prices are subject to change. Bulk discounts are calculated upon checkout or in-store.
        </p>
      </div>
    </section>
  );
};