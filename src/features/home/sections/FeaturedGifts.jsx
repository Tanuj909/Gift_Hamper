import React from "react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Button from "@/shared/components/ui/Button";
import { FEATURED_PRODUCTS } from "@/features/home/data/homeData";

const FeaturedGifts = () => {
  return (
    <section className="py-16 bg-transparent">
      <Container>
        <SectionTitle 
          title="Featured Gifts" 
          subtitle="Celebrating Traditions" 
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="group flex flex-col justify-between bg-[#FAF4E8]/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-soft border border-primary/5 p-4"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden rounded-xl bg-white mb-4">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-[9px] uppercase tracking-widest font-semibold font-lora px-2.5 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Centered Title */}
                <h3 className="font-cinzel text-xs sm:text-sm font-bold text-primary leading-tight text-center w-full mt-2 mb-4">
                  {product.title}
                </h3>
              </div>

              {/* Action Button */}
              <Button 
                variant="primary" 
                size="sm" 
                className="w-full text-xs font-bold uppercase tracking-wider py-2"
              >
                Inquire Pricing
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedGifts;
