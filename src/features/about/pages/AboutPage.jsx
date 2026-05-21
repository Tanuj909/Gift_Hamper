import React from "react";
import Container from "@/shared/components/ui/Container";
import BrandStory from "../sections/BrandStory";
import Process from "../sections/Process";
import TrustFactor from "../sections/TrustFactor";

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen flex flex-col">
      
      {/* Page Header Title Card */}
      <Container className="text-center mt-8 mb-4">
        <div className="bg-[#FAF4E8]/90 backdrop-blur-sm border border-primary/10 rounded-2xl px-10 py-6 shadow-soft inline-block mx-auto mb-4">
          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-widest text-primary">
            About Us
          </h1>
        </div>
      </Container>

      {/* Sections */}
      <BrandStory />
      <Process />
      <TrustFactor />
      
    </div>
  );
};

export default AboutPage;
