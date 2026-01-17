"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
    {
        id: 1,
        title: "Photo Prints",
        category: "Marketing",
        image: "/img/img1.jpg",
    },
    {
        id: 2,
        title: "Study Materials",
        category: "Documents",
        image: "/img/Document.jpg",
    },
    {
        id: 3,
        title: "Photo Prints",
        category: "Photos",
        image: "/img/img3.jpg",
    },
    {
        id: 4,
        title: "School Workbooks and Projects",
        category: "Documents",
        image: "/img/schools.jpg",
    },
    {
        id: 5,
        title: "Bound Reports",
        category: "Documents",
        image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=400&fit=crop",
    },
    {
        id: 6,
        title: "Canvas Prints",
        category: "Photos",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
    },
];

export const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="gallery" className="py-20 md:py-28 bg-muted/50">
            <div className="container px-4 mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Our <span className="text-gradient-cyan">Work</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        See samples of our quality printing. Every project receives our full attention and care.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group relative bg-card rounded-2xl overflow-hidden shadow-soft border border-border cursor-pointer"
                            onClick={() => setSelectedImage(item.image)}
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded">
                                    {item.category}
                                </span>
                                <h3 className="mt-2 font-display font-semibold text-lg text-primary">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-primary-foreground hover:text-primary transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <motion.img
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        src={selectedImage}
                        alt="Gallery preview"
                        className="max-w-full max-h-[90vh] rounded-xl shadow-medium"
                    />
                </motion.div>
            )}
        </section>
    );
};
