// import React from "react";
// import Container from "@/shared/components/ui/Container";
// import SectionTitle from "@/shared/components/ui/SectionTitle";
// import Button from "@/shared/components/ui/Button";
// import { BUILD_STEPS } from "@/features/home/data/homeData";

// const CustomeHamper = () => {
//   return (
//     <section className="py-20 bg-transparent flex flex-col gap-20">
//       <Container>
//         <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
          
//           {/* Centered Title Section */}
//           <div>
//             <SectionTitle 
//               title="Design Your Custom Hamper" 
//               subtitle="The Gifting Studio" 
//               align="center"
//               className="mb-3"
//             />
//             <p className="font-lora text-[14px] sm:text-[15px] text-primary/80 leading-relaxed max-w-xl mx-auto">
//               You can also get a custom hamper designed exactly to your needs. Create a custom gift that reflects your warm sentiments and respect for tradition. Our studio allows you to design every single piece of packaging, sweets, and decor.
//             </p>
//           </div>

//           {/* Simple Grid Points Layout */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-4">
//             {BUILD_STEPS.map((item, idx) => (
//               <div 
//                 key={idx} 
//                 className="bg-[#FAF4E8]/90 backdrop-blur-sm p-6 rounded-2xl border border-primary/5 shadow-soft flex flex-col items-center text-center"
//               >
//                 {/* Clean circle step indicator */}
//                 <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center font-cinzel text-sm font-bold text-primary mb-3">
//                   {item.step}
//                 </div>
                
//                 <h4 className="font-cinzel text-xs font-bold text-primary tracking-wide mb-2 min-h-[32px] flex items-center justify-center">
//                   {item.title}
//                 </h4>
                
//                 <p className="font-lora text-[13px] text-primary/70 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Custom Hamper Button */}
//           <div className="pt-2">
//             <Button 
//               variant="primary" 
//               size="lg"
//               className="font-bold text-xs uppercase tracking-wider px-8 shadow-md"
//               onClick={() => window.location.href = "/custom-hampers"}
//             >
//               Custom Hampers
//             </Button>
//           </div>

//         </div>
//       </Container>

//     </section>
//   );
// };

// export default CustomeHamper;

import React from "react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Button from "@/shared/components/ui/Button";
import { BUILD_STEPS } from "@/features/home/data/homeData";
import { Sparkles, Package, Truck, ArrowRight, CheckCircle2 } from "lucide-react";

const stepIcons = [Sparkles, Package, Truck];

const CustomeHamper = () => {
  return (
    <section className="py-24 relative">
      <Container>
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent font-cinzel">
                Bespoke Creations
              </span>
            </div>
            <SectionTitle 
              title="Design Your Custom Hamper" 
              subtitle="The Gifting Studio" 
              align="center"
              className="mb-4"
            />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto my-6" />
            <p className="font-lora text-[15px] sm:text-base text-primary/70 leading-relaxed max-w-2xl mx-auto">
              Create a custom gift that reflects your warm sentiments and respect for tradition. 
              Our studio allows you to design every single piece of packaging, sweets, and decor.
            </p>
          </div>

          {/* Process Timeline - Horizontal Style */}
          <div className="relative mb-16">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {BUILD_STEPS.map((item, idx) => {
                const Icon = stepIcons[idx];
                return (
                  <div key={idx} className="relative text-center group">
                    {/* Step Number Circle */}
                    <div className="relative z-10 mb-6">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white border-2 border-accent/20 shadow-lg flex items-center justify-center group-hover:border-accent/50 transition-all duration-300 group-hover:scale-105">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-accent/70 group-hover:text-accent transition-colors" />
                        </div>
                      </div>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-cinzel text-[11px] font-bold shadow-md">
                        {item.step}
                      </div>
                    </div>
                    
                    <h3 className="font-cinzel text-lg font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    
                    <div className="w-12 h-px bg-accent/30 mx-auto mb-3" />
                    
                    <p className="font-lora text-[13px] text-primary/65 leading-relaxed max-w-[200px] mx-auto">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Grid - 2 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-12">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/5 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-primary mb-2">Endless Customization</h4>
                  <p className="font-lora text-[13px] text-primary/65 leading-relaxed">
                    Choose from premium packaging, gourmet treats, luxury gifts, and personalized messages. Every element is handpicked for you.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/5 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-primary mb-2">Quality Assurance</h4>
                  <p className="font-lora text-[13px] text-primary/65 leading-relaxed">
                    Handcrafted with care using premium ingredients and materials. Each hamper undergoes strict quality checks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section - Single Button */}
          <div className="text-center mt-12">
            <Button 
              variant="primary" 
              size="lg"
              className="font-bold text-xs uppercase tracking-wider px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-300 group"
              onClick={() => window.location.href = "/custom-hampers"}
            >
              <span className="flex items-center gap-2">
                Custom hampers
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default CustomeHamper;