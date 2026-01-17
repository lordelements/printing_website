"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, FileText, X, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

export const UploadSection = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    colorOption: "",
    paperSize: "",
    quantity: "",
    notes: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Inquiry submitted successfully! We'll contact you shortly.", {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    });

    setFiles([]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      colorOption: "",
      paperSize: "",
      quantity: "",
      notes: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="upload" className="py-20 md:py-28">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Upload & Order</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Ready to <span className="text-gradient-cyan">Print?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Upload your files and tell us what you need. We'll get back to you with a quote.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-medium border border-border p-6 md:p-8">
            {/* File Upload */}
            <div className="mb-8">
              <Label className="text-foreground font-medium mb-3 block">Upload Files</Label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-medium text-foreground mb-1">Drop files here or click to upload</p>
                  <p className="text-sm text-muted-foreground">PDF, DOC, JPG, PNG (Max 10MB each)</p>
                </label>
              </div>

              {/* File List */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-muted rounded-lg px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <span className="text-sm text-foreground truncate max-w-[200px] sm:max-w-none">
                          {file.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Form Fields */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium mb-2 block">Name *</Label>
                <Input
                  id="name"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground font-medium mb-2 block">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground font-medium mb-2 block">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="quantity" className="text-foreground font-medium mb-2 block">Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  required
                  placeholder="Number of copies"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>
              <div>
                <Label className="text-foreground font-medium mb-2 block">Color Option *</Label>
                <Select
                  value={formData.colorOption}
                  onValueChange={(value) => setFormData({ ...formData, colorOption: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select color option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bw">Black & White</SelectItem>
                    <SelectItem value="color">Full Color</SelectItem>
                    <SelectItem value="mixed">Mixed (Both)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-foreground font-medium mb-2 block">Paper Size *</Label>
                <Select
                  value={formData.paperSize}
                  onValueChange={(value) => setFormData({ ...formData, paperSize: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select paper size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a4">A4</SelectItem>
                    <SelectItem value="a3">A3</SelectItem>
                    <SelectItem value="letter">Letter</SelectItem>
                    <SelectItem value="legal">Legal</SelectItem>
                    <SelectItem value="custom">Custom Size</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="notes" className="text-foreground font-medium mb-2 block">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any special requirements? (e.g., binding, lamination, paper type...)"
                rows={4}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gradient-hero shadow-glow-cyan text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="mr-2 w-5 h-5" />
                  Submit Inquiry
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
