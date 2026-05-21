import Container from "@/shared/components/ui/Container";
import { ArrowRight, Edit3 } from "lucide-react";
import { PAGE_CATEGORIES } from "../data/categoriesData";
import bannerImg from "@/assets/banners/custom_hamper.png";

const CategoriesPage = () => {
  const scrollToCategories = () => {
    const element = document.getElementById("gift-categories");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen flex flex-col">
      
      {/* Hero Banner */}
      <div 
        className="relative w-full h-[55vh] min-h-[350px] bg-cover bg-center flex items-center justify-end overflow-hidden" 
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF4E8]/20 to-[#FAF4E8]/65 pointer-events-none" />
        
        <div className="max-w-[92%] xl:max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">
          <div className="w-full md:w-[48%] text-right flex flex-col items-end space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-right duration-700">
            <div className="text-primary">
              <h2 className="font-lora italic text-xl sm:text-2xl lg:text-3xl text-primary/95 font-light leading-none">
                Curated for Every
              </h2>
              <h1 className="inline-block border border-primary px-5 py-2.5 font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-primary mt-2 leading-none whitespace-nowrap backdrop-blur-sm shadow-sm md:border-0 md:px-0 md:py-0 md:backdrop-blur-none md:shadow-none">
                Gift Category
              </h1>
            </div>

            <p className="hidden md:block font-lora text-sm sm:text-base text-primary/85 leading-relaxed max-w-md">
              Explore luxury hampers and favors for corporate events, weddings, birthdays, and memorable celebrations.
            </p>

            <p className="hidden md:block font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              CORPORATE - WEDDING - BIRTHDAY - RETURN GIFTS
            </p>

            <button 
              onClick={scrollToCategories}
              className="border border-primary px-8 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-sm"
            >
              Explore Categories
            </button>
          </div>
        </div>
      </div>

      <Container id="gift-categories" className="text-center mt-20 mb-16 w-full scroll-mt-24">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent block mb-3 font-cinzel">
          Main Category Page
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-primary break-words">
          Gift Categories
        </h2>
        <p className="font-lora text-[15px] sm:text-base text-primary/80 leading-relaxed max-w-2xl mx-auto mt-5">
          Choose the gifting occasion, and Sajjao will shape the details with premium curation, refined packaging, and thoughtful presentation.
        </p>
      </Container>

      {/* Category Blocks - Alternating Layout */}
      <Container className="flex flex-col gap-28">
        {PAGE_CATEGORIES.map((category) => (
          <div 
            key={category.id} 
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${category.reverse ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image Column */}
            <div className="w-full md:w-[45%] flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft bg-[#FAF4E8]/80 backdrop-blur-sm">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className={`w-full md:w-[55%] flex flex-col ${category.reverse ? "md:items-start text-left" : "md:items-start text-left"}`}>
              {/* Note: I'm keeping all text left-aligned as per the screenshot, even when image is on the right, it looks cleaner that way! */}
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-accent font-bold mb-3 font-cinzel">
                {category.subtitle}
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 break-words">
                {category.title}
              </h2>
              <p className="font-lora text-[15px] sm:text-base text-primary/80 leading-relaxed mb-10 max-w-lg">
                {category.description}
              </p>

              {category.subCategories?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10">
                  {category.subCategories.map((point) => (
                    <div
                      key={point.title}
                      className="group relative aspect-[4/3] bg-[#FAF4E8]/90 border border-primary/10 rounded-xl overflow-hidden shadow-soft"
                    >
                      <img
                        src={point.image}
                        alt={point.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF4E8]/95 via-[#FAF4E8]/30 to-transparent transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center px-4 py-4 text-center">
                        <h3 className="font-cinzel text-base sm:text-sm lg:text-base font-bold text-primary leading-snug">
                          {point.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 font-cinzel text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#6a0a0a] hover:-translate-y-0.5 shadow-md group w-fit">
                Explore Collection
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </Container>

      {/* Bottom Custom Hamper Section */}
      <Container className="mt-40 mb-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-wider mb-6 break-words">
            Need Something Unique?
          </h2>
          <p className="font-lora text-[15px] sm:text-[17px] text-primary/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Sometimes the perfect gift hasn't been created yet. Work with our artisans to design a bespoke hamper tailored exactly to your vision.
          </p>
          
          <button 
            onClick={() => window.location.href = "/custom-hampers"}
            className="flex items-center gap-3 border border-primary text-primary px-8 py-4 font-cinzel text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#FAF4E8]/80 backdrop-blur-sm shadow-sm group"
          >
            Try Our Custom Hampers
            <Edit3 size={16} className="text-primary transition-transform duration-300 group-hover:rotate-12" />
          </button>
        </div>
      </Container>

    </div>
  );
};

export default CategoriesPage;
