import React from "react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Button from "@/shared/components/ui/Button";
import { BUILD_STEPS } from "@/features/home/data/homeData";

const CustomeHamper = () => {
  return (
    <section className="py-20 bg-transparent flex flex-col gap-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
          
          {/* Centered Title Section */}
          <div>
            <SectionTitle 
              title="Design Your Custom Hamper" 
              subtitle="The Gifting Studio" 
              align="center"
              className="mb-3"
            />
            <p className="font-lora text-[14px] sm:text-[15px] text-primary/80 leading-relaxed max-w-xl mx-auto">
              You can also get a custom hamper designed exactly to your needs. Create a custom gift that reflects your warm sentiments and respect for tradition. Our studio allows you to design every single piece of packaging, sweets, and decor.
            </p>
          </div>

          {/* Simple Grid Points Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-4">
            {BUILD_STEPS.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAF4E8]/90 backdrop-blur-sm p-6 rounded-2xl border border-primary/5 shadow-soft flex flex-col items-center text-center"
              >
                {/* Clean circle step indicator */}
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center font-cinzel text-sm font-bold text-primary mb-3">
                  {item.step}
                </div>
                
                <h4 className="font-cinzel text-xs font-bold text-primary tracking-wide mb-2 min-h-[32px] flex items-center justify-center">
                  {item.title}
                </h4>
                
                <p className="font-lora text-[13px] text-primary/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Custom Hamper Button */}
          <div className="pt-2">
            <Button 
              variant="primary" 
              size="lg"
              className="font-bold text-xs uppercase tracking-wider px-8 shadow-md"
              onClick={() => window.location.href = "/custom-hampers"}
            >
              Custom Hampers
            </Button>
          </div>

        </div>
      </Container>

    </section>
  );
};

export default CustomeHamper;
