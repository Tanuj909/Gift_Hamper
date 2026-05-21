import React from "react";
import { Sparkles, Coins, Heart, Award } from "lucide-react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { TRUST_FACTORS } from "../data/aboutData";

const iconMap = {
  Sparkles: Sparkles,
  PiggyBank: Coins, // Map PiggyBank data field to premium Coins icon
  Heart: Heart,
  Award: Award
};

const TrustFactor = () => {
  return (
    <section className="py-20 bg-transparent">
      <Container>
        <div className="max-w-6xl mx-auto text-center">
          
          <SectionTitle 
            title="Why Choose Sajjao" 
            subtitle="Our Pillars of Trust" 
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {TRUST_FACTORS.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <div 
                  key={idx}
                  className="bg-[#FAF4E8]/80 backdrop-blur-sm p-8 rounded-3xl border border-primary/5 shadow-soft flex items-start gap-6 transition-all duration-300"
                >
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-primary shrink-0">
                    <IconComponent size={22} className="stroke-[1.5]" />
                  </div>

                  <div>
                    <h4 className="font-cinzel text-xs sm:text-sm font-bold text-primary tracking-wide mb-2">
                      {item.title}
                    </h4>
                    
                    <p className="font-lora text-[13px] text-primary/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TrustFactor;
