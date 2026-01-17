// import Image from "next/image";
// import { Header } from "@/components/Header";
// import { HeroSection } from "@/components/HeroSection";
// import { AboutSection } from "@/components/AboutSection";
// import { ServicesSection } from "@/components/ServicesSection";
// import { PricingSection } from "@/components/PricingSection";
// import { UploadSection } from "@/components/UploadSection";
// import { GallerySection } from "./components/GallerySection";
// import { ContactSection } from "@/components/ContactSection";
// import { Footer } from "@/components/Footer";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <ServicesSection />
//         <PricingSection />
//         <UploadSection />
//         <GallerySection />
//         <ContactSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }

"use client";


import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
