"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Purok Talisay, Barangay Biton", "Magallanes, Sorsogon City"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 (555) 123-4567", "Mon-Sat: 9AM - 6PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["vivianjoy@gmail.com", "orders@vivianprinting.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon - Fri: 9AM - 7PM", "Saturday: 10AM - 5PM"],
  },
];

export const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/15551234567?text=Hi! I'm interested in your printing services.", "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Get in <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We're here to help! Reach out through any channel that works for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-5 shadow-soft border border-border"
                >
                  <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-500/10 rounded-xl p-6 border border-green-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    Quick Response on WhatsApp
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get instant quotes and updates. We typically respond within minutes!
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-primary-foreground"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d4122.683546584407!2d123.84594184330317!3d12.75933964632445!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d12.7561716!2d123.8441182!4m3!3m2!1d12.760093399999999!2d123.84641119999999!5e0!3m2!1sen!2sph!4v1768648283488!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vivian Printing Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
