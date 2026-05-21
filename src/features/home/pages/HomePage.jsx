import React from "react";
import HeroSection from "../sections/HeroSection";
import Categories from "../sections/Categories";
import FeaturedGifts from "../sections/FeaturedGifts";
import CustomeHamper from "../sections/CustomeHamper";
import Testimonials from "../sections/Testimonials";
import InqaryForm from "../sections/InqaryForm";

const HomePage = () => {
  return (
    <div className="bg-transparent min-h-screen text-primary flex flex-col pb-24 overflow-hidden">
      <HeroSection />
      <Categories />
      <FeaturedGifts />
      <CustomeHamper />
      <Testimonials />
      <InqaryForm />
    </div>
  );
};

export default HomePage;