import React from "react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { CATEGORIES } from "@/features/home/data/homeData";

const Categories = () => {
  return (
    <section className="py-16 bg-transparent">
      <Container>
        <SectionTitle 
          title="Browse Our Categories" 
          subtitle="Crafting Elegance" 
          align="center"
        />

        {/* 4-column responsive grid matching the wider layout guidelines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto">
          {CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="group relative bg-[#FAF4E8]/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-soft border border-primary/5 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-accent text-[9px] uppercase tracking-widest font-semibold font-lora px-2.5 py-0.5 rounded-full shadow-sm">
                  {category.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-cinzel text-xs font-bold text-primary mb-2 leading-snug min-h-[32px] flex items-center">
                    {category.title}
                  </h3>
                  
                  <p className="font-lora text-[13px] text-primary/80 leading-relaxed font-normal">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-primary/5 flex justify-start">
                  <a 
                    href={category.link}
                    className="inline-flex items-center text-[10px] font-lora font-bold uppercase tracking-wider text-accent group-hover:opacity-80 transition-opacity"
                  >
                    Explore Service
                    <svg 
                      className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-0.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
