import React from "react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { BRAND_STORY } from "../data/aboutData";

const BrandStory = () => {
  return (
    <section className="pt-2 pb-16 bg-transparent">
      <Container>
        {/* Single Centered Story Card */}
        <div className="max-w-5xl mx-auto bg-[#FAF4E8]/85 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-primary/5 shadow-soft">
          <SectionTitle 
            title={BRAND_STORY.title} 
            subtitle={BRAND_STORY.subtitle} 
            align="center"
            className="mb-8"
          />
          
          <div className="space-y-5 text-center max-w-4xl mx-auto">
            {BRAND_STORY.storyParagraphs.map((para, idx) => (
              <p key={idx} className="font-lora text-sm sm:text-[15px] text-primary/80 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandStory;
