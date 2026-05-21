import React from "react";
import Container from "@/shared/components/ui/Container";
import { ArrowRight } from "lucide-react";
import bannerImg from "@/assets/banners/custom_hamper.png";
import { GALLERY_ITEMS } from "../data/galleryData";

const GalleryPage = () => {
  const featuredItems = GALLERY_ITEMS.filter((item) => item.featured);
  const galleryItems = GALLERY_ITEMS.filter((item) => !item.featured);

  const scrollToGallery = () => {
    const element = document.getElementById("gallery-collection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen flex flex-col">
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
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider text-primary mt-1 leading-tight">
                Our Gallery
              </h1>
            </div>

            <p className="font-lora text-sm sm:text-base text-primary/85 leading-relaxed max-w-md">
              Explore handcrafted hampers, event favors, festive trays, and curated gift presentations by Sajjao.
            </p>

            <p className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase">
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
