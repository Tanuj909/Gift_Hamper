import React from "react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <a 
              href="/contact"
              key={product.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft border border-primary/10 bg-[#FAF4E8]/80 block cursor-pointer animate-in fade-in duration-500"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-primary text-white text-[9px] uppercase tracking-widest font-semibold font-lora px-2.5 py-0.5 rounded-full z-10">
                  {product.badge}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF4E8]/95 via-[#FAF4E8]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-primary leading-snug">
                  {product.title}
                </h3>
                <p className="font-lora text-[11px] uppercase tracking-[0.18em] text-accent font-bold mt-1">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedGifts;
