"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Image, 
  Palette, 
  FileImage, 
  Layers, 
  BookOpen 
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Document Printing",
    description: "Professional printing for business documents, reports, proposals, and more.",
    features: ["High-quality paper", "Crisp text", "Fast turnaround"],
    gradient: "gradient-hero",
  },
  {
    icon: FileImage,
    title: "PDF Printing",
    description: "Seamless PDF printing with accurate colors and formatting preserved.",
    features: ["All sizes supported", "Color matching", "Bulk orders"],
    gradient: "gradient-magenta",
  },
  {
    icon: Image,
    title: "Photo Printing",
    description: "Bring your memories to life with vibrant, long-lasting photo prints.",
    features: ["Glossy & matte", "Various sizes", "Archival quality"],
    gradient: "gradient-warm",
  },
  {
    icon: Palette,
    title: "Color Printing",
    description: "Full-color printing with rich, accurate colors for impactful results.",
    features: ["CMYK printing", "Pantone matching", "High resolution"],
    gradient: "gradient-hero",
  },
  {
    icon: FileText,
    title: "Black & White",
    description: "Cost-effective B&W printing perfect for text-heavy documents.",
    features: ["Sharp contrast", "Budget-friendly", "Quick service"],
    gradient: "gradient-magenta",
  },
  {
    icon: Layers,
    title: "Paper Sizes",
    description: "From A4 to large format, we print on various paper sizes.",
    features: ["A4, A3, Letter", "Legal, Tabloid", "Custom sizes"],
    gradient: "gradient-warm",
  },
  {
    icon: BookOpen,
    title: "Binding & Lamination",
    description: "Professional finishing services for a polished, durable result.",
    features: ["Spiral binding", "Thermal binding", "Lamination"],
    gradient: "gradient-hero",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need to <span className="text-gradient-cyan">Print</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From everyday documents to special photo prints, we've got you covered with quality and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.gradient} flex items-center justify-center mb-5`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
