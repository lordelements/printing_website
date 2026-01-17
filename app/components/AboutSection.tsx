"use client";

import { motion } from "framer-motion";
import { Award, Clock, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We use premium materials and state-of-the-art equipment for crisp, vibrant prints.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Same-day service available. We respect your deadlines and deliver on time.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Your satisfaction is our priority. We go the extra mile for every project.",
  },
  {
    icon: Users,
    title: "Local Business",
    description: "Proudly serving our community with personalized, friendly service.",
  },
];

export const AboutSection = () => {
  return (
    /* Changed bg-muted/50 to bg-background for a cleaner section break with borders */
    <section id="about" className="py-20 md:py-28 bg-background border-y border-border/40">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Professional tag styling */}
            <span className="inline-block text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Your Trusted Local <span className="text-gradient-primary">Printing Partner</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At Vivian Printing, we believe every print job matters. Whether it's a single document or a bulk order, we treat each project with the same dedication and attention to detail.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              As a small, family-owned business, we pride ourselves on building lasting relationships. We're not just a printing service – we're your neighbors, committed to helping you put your best print forward.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                /* Using bg-card and a subtle border for a "layered" professional look */
                className="group bg-card rounded-2xl p-6 shadow-soft border border-border/60 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              >
                {/* Icon box updated to gradient-hero (Indigo) */}
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};