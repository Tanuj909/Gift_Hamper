import BrandStory from "../sections/BrandStory";
import Process from "../sections/Process";
import TrustFactor from "../sections/TrustFactor";
import bannerImg from "@/assets/banners/custom_hamper.png";

const AboutPage = () => {
  const scrollToStory = () => {
    const element = document.getElementById("about-story");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 pb-16 min-h-screen flex flex-col">
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
                Handcrafted With
              </h2>
              <h1 className="inline-block border border-primary px-5 py-2.5 font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-primary mt-2 leading-none whitespace-nowrap backdrop-blur-sm shadow-sm md:border-0 md:px-0 md:py-0 md:backdrop-blur-none md:shadow-none">
                Sajjao
              </h1>
            </div>

            <p className="hidden md:block font-lora text-sm sm:text-base text-primary/85 leading-relaxed max-w-md">
              Discover the story, craft, and thoughtful details behind every luxury hamper and celebration gift we create.
            </p>

            <p className="hidden md:block font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              HERITAGE - CRAFT - CELEBRATION - DETAIL
            </p>

            <button
              onClick={scrollToStory}
              className="border border-primary px-8 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-sm"
            >
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* Sections */}
      <BrandStory />
      <Process />
      <TrustFactor />
      
    </div>
  );
};

export default AboutPage;
