import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { TESTIMONIALS } from "@/features/home/data/homeData";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure currentIndex is in bounds if visible cards changes dynamically
  useEffect(() => {
    const maxIndex = TESTIMONIALS.length - visibleCards;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCards, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = TESTIMONIALS.length - visibleCards;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = TESTIMONIALS.length - visibleCards;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <Container>
        <SectionTitle 
          title="Kind Words from Clients" 
          subtitle="Customer Experiences" 
          align="center"
        />

        <div className="relative px-0 sm:px-14 mt-10">
          
          {/* Navigation Arrows - Hidden on extra small mobile screens for clean layout */}
          <button 
            onClick={handlePrev}
            className="group absolute -left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-primary/20 bg-[#FAF4E8]/90 backdrop-blur-sm hidden sm:flex items-center justify-center text-primary shadow-soft hover:bg-primary hover:text-[#FAF4E8] hover:border-primary transition-all duration-300 z-20 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>
          
          <button 
            onClick={handleNext}
            className="group absolute -right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-primary/20 bg-[#FAF4E8]/90 backdrop-blur-sm hidden sm:flex items-center justify-center text-primary shadow-soft hover:bg-primary hover:text-[#FAF4E8] hover:border-primary transition-all duration-300 z-20 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          {/* Slider Viewport */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out -mx-4"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {TESTIMONIALS.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="shrink-0 px-4 transition-all duration-300"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className="bg-[#FAF4E8]/90 backdrop-blur-sm p-8 rounded-2xl border border-primary/5 shadow-soft flex flex-col justify-between h-full min-h-[280px]">
                    <div>
                      {/* Quote Mark */}
                      <span className="font-cinzel text-5xl text-accent/20 leading-none h-4 block select-none">
                        “
                      </span>

                      {/* Review Text */}
                      <p className="font-lora text-xs text-primary/80 leading-relaxed italic mb-6 mt-2 relative z-10">
                        {testimonial.review}
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-primary/5 mt-auto">
                      {/* Initials Avatar */}
                      <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center font-cinzel text-xs font-bold text-primary shrink-0">
                        {testimonial.initials}
                      </div>
                      
                      <div>
                        <h4 className="font-cinzel text-xs font-bold text-primary leading-tight">
                          {testimonial.name}
                        </h4>
                        <span className="text-[10px] font-lora text-primary/60">
                          {testimonial.location}
                        </span>
                        
                        {/* Rating Stars */}
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg 
                              key={i} 
                              className="w-2.5 h-2.5 text-accent" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
