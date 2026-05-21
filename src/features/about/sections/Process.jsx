import React from "react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { PROCESS_STEPS } from "../data/aboutData";

const Process = () => {
  return (
    <section className="py-20 bg-transparent">
      <Container>
        <div className="max-w-6xl mx-auto text-center">
          
          <SectionTitle 
            title="Our Creative Process" 
            subtitle="How We Curation Elegance" 
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {PROCESS_STEPS.map((item, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#FAF4E8]/80 backdrop-blur-sm p-7 rounded-2xl border border-primary/5 shadow-soft flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Step badge */}
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center font-cinzel text-sm font-bold text-primary mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {item.step}
                  </div>
                  
                  <h4 className="font-cinzel text-xs font-bold text-primary tracking-wide mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="font-lora text-xs sm:text-[13px] text-primary/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Process;
