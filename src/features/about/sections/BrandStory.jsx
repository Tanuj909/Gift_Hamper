import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { BRAND_STORY } from "../data/aboutData";
import premiumGiftFlatlay from "@/assets/premium_gift_flatlay.png";
import customHamperCraft from "@/assets/custom_hamper_craft.png";
import weddingHamper from "@/assets/wedding_hamper.png";

const BrandStory = () => {
  return (
    <section id="about-story" className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-transparent scroll-mt-24">
      <Container className="w-full">
        <div className="w-full grid grid-cols-1 xl:grid-cols-[0.92fr_1.08fr] gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center">
          <div className="w-full bg-[#FAF4E8]/85 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-2xl border border-primary/5 shadow-soft">
            <SectionTitle
              title={BRAND_STORY.title}
              subtitle={BRAND_STORY.subtitle}
              align="left"
              className="mb-6 sm:mb-8"
            />

            <div className="space-y-5">
              {BRAND_STORY.storyParagraphs.map((para, idx) => (
                <p key={idx} className="font-lora text-sm sm:text-[15px] lg:text-base text-primary/80 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-7 sm:mt-8 border-l-2 border-primary/30 pl-4 sm:pl-5">
              <p className="font-lora italic text-sm sm:text-[15px] lg:text-base text-primary/80 leading-relaxed">
                "{BRAND_STORY.founderQuote.quote}"
              </p>
              <p className="font-cinzel text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary mt-4">
                {BRAND_STORY.founderQuote.author}
              </p>
              <p className="font-lora text-xs text-primary/65 mt-1">
                {BRAND_STORY.founderQuote.role}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            <div className="col-span-2 sm:col-span-1 sm:row-span-2 min-h-[360px] sm:min-h-[560px] rounded-2xl overflow-hidden shadow-soft border border-primary/10 bg-[#FAF4E8]/80">
              <img
                src={premiumGiftFlatlay}
                alt="Premium Sajjao gift hamper flatlay"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-primary/10 bg-[#FAF4E8]/80">
              <img
                src={customHamperCraft}
                alt="Handcrafted Sajjao hamper styling"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-primary/10 bg-[#FAF4E8]/80">
              <img
                src={weddingHamper}
                alt="Sajjao wedding gift hamper"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandStory;
