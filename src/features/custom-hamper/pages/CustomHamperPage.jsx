import React, { useState, useEffect, useRef } from "react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Button from "@/shared/components/ui/Button";
import { SIGNATURE_GIFTS } from "../data/customHamperData";
import bannerImg from "@/assets/banners/custom_hamper.png";
import { 
  Send, 
  Calendar, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

const CustomHamperPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occasion: "wedding",
    budget: "5k-15k",
    eventDate: "",
    ideas: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const containerRef = useRef(null);

  // Responsive Carousel Visible Count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1200) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll carousel viewport to follow currentIndex
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const firstChild = container.children[0];
      if (firstChild) {
        const itemWidth = firstChild.getBoundingClientRect().width;
        const gap = 24; // gap-6 in Tailwind is 24px
        container.scrollTo({
          left: currentIndex * (itemWidth + gap),
          behavior: "smooth"
        });
      }
    }
  }, [currentIndex, visibleItems]);

  // Carousel Auto-scroll effect
  useEffect(() => {
    const maxIdx = Math.max(0, SIGNATURE_GIFTS.length - visibleItems);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIdx ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [visibleItems]);

  const nextSlide = () => {
    const maxIdx = Math.max(0, SIGNATURE_GIFTS.length - visibleItems);
    setCurrentIndex((prev) => (prev >= maxIdx ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIdx = Math.max(0, SIGNATURE_GIFTS.length - visibleItems);
    setCurrentIndex((prev) => (prev === 0 ? maxIdx : prev - 1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Custom Inquiry Submitted:", formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      occasion: "wedding",
      budget: "5k-15k",
      eventDate: "",
      ideas: ""
    });
    setIsSubmitted(false);
  };

  const scrollToForm = () => {
    const element = document.getElementById("inquiry-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen flex flex-col bg-transparent">
      
      {/* 1. Hero Banner: 55% height, full background image, right-aligned text overlay using brand color (text-primary) */}
      <div 
        className="relative w-full h-[55vh] min-h-[350px] bg-cover bg-center flex items-center justify-end overflow-hidden" 
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Soft elegant gradient overlay to blend with the light blue silk banner background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF4E8]/20 to-[#FAF4E8]/65 pointer-events-none" />
        
        <div className="max-w-[92%] xl:max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">
          <div className="w-full md:w-[45%] text-right flex flex-col items-end space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-right duration-700">
            
            {/* Title Text in Primary Brand Color from global.css (#800c0c) */}
            <div className="text-primary">
              <h2 className="font-lora italic text-xl sm:text-2xl lg:text-3xl text-primary/95 font-light leading-none">
                Where Gifting Meets
              </h2>
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider text-primary mt-1 leading-tight">
                Grandeur
              </h1>
            </div>

            {/* Tagline in Primary Brand Color from global.css (#800c0c) */}
            <p className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              LIMITED • LUXURIOUS • DISTINCTIVE
            </p>

            {/* CTA Button in Primary Brand Color and Border */}
            <button 
              onClick={scrollToForm}
              className="border border-primary px-8 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-sm"
            >
              Custom Hamper
            </button>

          </div>
        </div>
      </div>

      {/* 2. Signature Gift Carousel: Center-aligned name overlays, bottom 12% space */}
      <Container className="my-20 overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent block mb-2 font-cinzel">
            Sajjao Creations
          </span>
          <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-primary">
            Signature Hampers
          </h2>
        </div>

        <div className="relative px-0 sm:px-12">
          {/* Carousel Viewport Scroll Container */}
          <div 
            ref={containerRef}
            className="overflow-x-hidden flex gap-6 w-full scroll-smooth"
          >
            {SIGNATURE_GIFTS.map((gift) => (
              <div 
                key={gift.id}
                className="shrink-0 aspect-[4/5] relative rounded-2xl overflow-hidden shadow-soft border border-primary/5 bg-[#FAF4E8] group"
                style={{ width: `calc(${100 / visibleItems}% - ${(visibleItems - 1) * 24 / visibleItems}px)` }}
              >
                <img 
                  src={gift.image} 
                  alt={gift.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
                />
                {/* Overlay text at bottom 12% space with font-lora, primary red text, and solid cream background (same as form bg) */}
                <div className="absolute bottom-0 left-0 right-0 h-[12%] min-h-[48px] bg-[#FAF4E8] border-t border-primary/10 flex items-center justify-center text-center px-4 z-10 transition-all duration-300">
                  <span className="font-lora text-primary text-xs sm:text-sm md:text-base font-bold tracking-wide truncate">
                    {gift.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white border border-[#FAF4E8]/20 flex items-center justify-center hover:bg-accent transition-all cursor-pointer z-20 shadow-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white border border-[#FAF4E8]/20 flex items-center justify-center hover:bg-accent transition-all cursor-pointer z-20 shadow-md"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>

      {/* 3. Inquiry Form Container: Full Width w-full with ID for scrolling */}
      <Container id="inquiry-form" className="w-full scroll-mt-24">
        <div className="bg-[#FAF4E8]/90 backdrop-blur-md p-6 sm:p-12 rounded-3xl border border-primary/10 shadow-soft">
          
          <SectionTitle 
            title="Custom Gift Inquiry" 
            subtitle="Submit Your Ideas & Requirements" 
            align="center"
            className="mb-8"
          />

          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
              <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center text-3xl shadow-sm">
                ✓
              </div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-primary">
                Inquiry Received Successfully!
              </h3>
              <p className="font-lora text-xs sm:text-sm text-primary/80 max-w-md leading-relaxed">
                Thank you, <strong className="text-primary">{formData.name}</strong>. Your custom requirements and ideas have been sent to Ankita and the Sajjao creative design team. We will review your concepts and contact you with custom drafts and quotes shortly.
              </p>
              <div className="pt-4">
                <Button 
                  variant="primary" 
                  size="md" 
                  onClick={handleReset}
                  className="rounded-full"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <p className="font-lora text-xs sm:text-sm text-primary/75 leading-relaxed text-center max-w-2xl mx-auto pb-4 border-b border-primary/5">
                Have specific colors, products, or ideas in mind? Fill out the fields below. Don't worry if details aren't finalized yet—we will work with you to perfect them!
              </p>

              {/* Personal Details Row - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3.5 bg-white/50 focus:outline-none focus:border-accent text-primary transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91-XXXXXXXXXX"
                    className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3.5 bg-white/50 focus:outline-none focus:border-accent text-primary transition-colors"
                  />
                </div>
              </div>

              {/* Gifting & Delivery Details Row - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Occasion */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="occasion" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                    Occasion
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3.5 bg-white/50 focus:outline-none focus:border-accent text-primary cursor-pointer transition-colors"
                  >
                    <option value="wedding">Wedding return gifts</option>
                    <option value="trousseau">Trousseau & Sagan packing</option>
                    <option value="corporate">Corporate appreciation</option>
                    <option value="anniversary">Anniversary or Birthday</option>
                    <option value="baby">Baby announcement</option>
                    <option value="other">Festival & Custom occasions</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="budget" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                    Budget Per Hamper
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3.5 bg-white/50 focus:outline-none focus:border-accent text-primary cursor-pointer transition-colors"
                  >
                    <option value="under-1k">Under ₹1,000</option>
                    <option value="1k-3k">₹1,000 - ₹3,000</option>
                    <option value="3k-5k">₹3,000 - ₹5,000</option>
                    <option value="5k-15k">₹5,000 - ₹15,000</option>
                    <option value="above-15k">Above ₹15,000</option>
                  </select>
                </div>

                {/* Event/Delivery Date */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="eventDate" className="text-[10px] font-bold uppercase tracking-wider text-primary/70 flex items-center gap-1">
                    <Calendar size={12} className="text-accent" /> Expected Delivery Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3.5 bg-white/50 focus:outline-none focus:border-accent text-primary cursor-pointer transition-colors"
                  />
                </div>
              </div>

              {/* Ideas / Requirements Textarea */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="ideas" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                  Custom Requirements & Ideas
                </label>
                <textarea
                  id="ideas"
                  name="ideas"
                  required
                  rows="5"
                  value={formData.ideas}
                  onChange={handleChange}
                  placeholder="Describe your design vision (e.g. 'We are looking for floral themed return gifts in gold packaging containing sweets and scented candles for our mehendi ceremony...')"
                  className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3.5 bg-white/50 focus:outline-none focus:border-accent text-primary resize-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-primary text-white py-4 sm:py-5 font-cinzel text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#6a0a0a] hover:-translate-y-0.5 shadow-md group cursor-pointer"
                >
                  Submit Inquiry Ideas <Send size={13} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}

        </div>
      </Container>

    </div>
  );
};

export default CustomHamperPage;
