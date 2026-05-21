import React from "react";
import Container from "@/shared/components/ui/Container";
import Button from "@/shared/components/ui/Button";
import heroBanner from "@/assets/custom_hamper_craft.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-bg-paper">
      
      {/* Background Image Cover */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroBanner} 
          alt="Bespoke Hampers Background" 
          className="w-full h-full object-cover object-center scale-102"
        />
        {/* Soft overlay filter */}
        <div className="absolute inset-0 bg-[#FAF4E8]/20"></div>
      </div>

      <Container className="relative z-10 w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center gap-6">
          
          {/* 1. Brand Tagline with separate card background */}
          <div className="bg-[#FAF4E8]/90 backdrop-blur-md border border-primary/10 rounded-full px-6 py-2.5 shadow-sm inline-flex flex-col items-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary font-bold font-lora">
              Sajjao by Ankita
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-primary/70 font-semibold font-lora mt-0.5">
              Crafting Elegance | Celebrating Traditions
            </span>
          </div>
          
          {/* 2. Main Title in a single line with separate card background */}
          <div className="bg-[#FAF4E8]/90 backdrop-blur-md border border-primary/10 rounded-2xl px-6 sm:px-10 py-4 sm:py-5 shadow-sm inline-block max-w-full">
            <h1 className="font-cinzel text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-wide text-primary whitespace-nowrap">
              Gifting & <span className="italic font-lora font-normal text-primary/95">Celebrating</span>
            </h1>
          </div>
          
          {/* 3. Action Buttons (No shared background card, standard premium hover states) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center pt-2">
            <Button 
              variant="primary" 
              size="lg" 
              className="font-bold text-xs uppercase tracking-wider px-8 min-w-[200px]"
            >
              Explore Collections
            </Button>
            <Button 
              variant="primary" 
              size="lg" 
              className="font-bold text-xs uppercase tracking-wider px-8 min-w-[200px]"
            >
              Custom Hampers
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
