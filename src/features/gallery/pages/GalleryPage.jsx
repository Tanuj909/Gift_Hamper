import Container from "@/shared/components/ui/Container";
import { ArrowRight } from "lucide-react";
import bannerImg from "@/assets/banners/custom_hamper.png";
import { GALLERY_ITEMS } from "../data/galleryData";

const GalleryPage = () => {
  const featuredItems = GALLERY_ITEMS.filter((item) => item.featured);
  const galleryItems = GALLERY_ITEMS.filter((item) => !item.featured);
  
  // Single portfolio item
  const portfolioItem = {
    title: "Our Portfolio",
    description: "Handcrafted hampers, wedding favors, corporate gifting, and festive celebrations. Thoughtfully designed to capture every special moment.",
    image: GALLERY_ITEMS.find((item) => item.id === "wedding-hamper")?.image,
    link: "/portfolio",
    linkText: "Explore Portfolio",
  };

  const scrollToGallery = () => {
    const element = document.getElementById("gallery-collection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen flex flex-col">
      {/* Banner Section */}
      <div
        className="relative w-full h-[55vh] min-h-[350px] bg-cover bg-center flex items-center justify-end overflow-hidden"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF4E8]/20 to-[#FAF4E8]/65 pointer-events-none" />

        <div className="max-w-[92%] xl:max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">
          <div className="w-full md:w-[48%] text-right flex flex-col items-end space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-right duration-700">
            <div className="text-primary">
              <h2 className="font-lora italic text-xl sm:text-2xl lg:text-3xl text-primary/95 font-light leading-none">
                A Glimpse of
              </h2>
              <h1 className="inline-block border border-primary px-5 py-2.5 font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-primary mt-2 leading-none whitespace-nowrap backdrop-blur-sm shadow-sm md:border-0 md:px-0 md:py-0 md:backdrop-blur-none md:shadow-none">
                Our Gallery
              </h1>
            </div>

            <p className="hidden md:block font-lora text-sm sm:text-base text-primary/85 leading-relaxed max-w-md">
              Explore handcrafted hampers, event favors, festive trays, and curated gift presentations by Sajjao.
            </p>

            <p className="hidden md:block font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              CURATED - HANDCRAFTED - OCCASION READY
            </p>

            <button
              onClick={scrollToGallery}
              className="border border-primary px-8 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-sm"
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* PORTFOLIO SECTION */}
      <div className="max-w-[92%] xl:max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 mt-20">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent block mb-3 font-cinzel">
            Portfolio
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-primary">
            Our Portfolio
          </h2>
          <div className="w-16 h-[1.5px] bg-accent/40 mx-auto mt-3 sm:mt-4" />
        </div>

        {/* Image Section - Reduced Height */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-soft group">
          <div className="relative w-full h-[22vh] min-h-[180px] sm:h-[25vh] md:h-[28vh] lg:h-[32vh]">
            <img
              src={portfolioItem.image}
              alt="Our Portfolio"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            
            {/* Darker Overlay Gradient for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Text Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12">
              {/* Heading inside image */}
              <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                Explore Portfolio
              </h3>
              
              <div className="w-10 h-[1px] bg-white/40 mx-auto mb-3 sm:mb-4" />
              
              {/* Description - Hidden on mobile, visible on tablet and up */}
              <p className="hidden sm:block font-lora text-xs sm:text-sm md:text-base text-white/95 leading-relaxed max-w-3xl mx-auto mb-3 sm:mb-4">
                Handcrafted hampers, wedding favors, corporate gifting, and festive celebrations. Thoughtfully designed to capture every special moment.
              </p>
              
              <a
                href={portfolioItem.link}
                className="group/link inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-cinzel font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] md:text-xs px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 transition-all duration-300 hover:gap-3"
              >
                {portfolioItem.linkText}
                <ArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work Section */}
      <Container className="mt-20">
        <div className="text-center mb-12">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent block mb-3 font-cinzel">
            Featured Work
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-primary break-words">
            Signature Moments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft border border-primary/10 bg-[#FAF4E8]/80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF4E8]/95 via-[#FAF4E8]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <span className="font-lora text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                  {item.category}
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-primary mt-1 leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Gallery Collection Section */}
      <Container id="gallery-collection" className="mt-20 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent block mb-3 font-cinzel">
              Collection
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              Gift Gallery
            </h2>
          </div>

          <a
            href="/custom-hampers"
            className="inline-flex items-center gap-2 text-[10px] font-cinzel font-bold uppercase tracking-wider text-primary border border-primary px-5 py-3 hover:bg-primary hover:text-white transition-colors w-fit"
          >
            Custom Inquiry
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft border border-primary/10 bg-[#FAF4E8]/80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF4E8]/95 via-[#FAF4E8]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="font-cinzel text-base font-bold text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="font-lora text-[11px] uppercase tracking-[0.18em] text-accent font-bold mt-1">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default GalleryPage;