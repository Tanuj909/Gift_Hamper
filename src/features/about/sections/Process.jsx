import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { PROCESS_STEPS } from "../data/aboutData";
import customHamperCraft from "@/assets/custom_hamper_craft.png";
import premiumGiftFlatlay from "@/assets/premium_gift_flatlay.png";
import weddingHamper from "@/assets/wedding_hamper.png";
import corporateHamper from "@/assets/corporate_hamper.png";

const processImages = [
  customHamperCraft,
  premiumGiftFlatlay,
  weddingHamper,
  corporateHamper
];

const Process = () => {
  return (
    <section className="py-14 sm:py-20 bg-transparent">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <SectionTitle
            title="Sajjao Work Process"
            subtitle="Our Process"
            align="center"
            className="mb-5"
          />

          <p className="font-lora text-sm sm:text-[15px] text-primary/80 leading-relaxed">
            From the first idea to the final packed hamper, our process keeps every detail clear, thoughtful, and beautifully finished.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col gap-12 sm:gap-14 lg:gap-16">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-primary/20" />

          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)] gap-5 md:gap-8 lg:gap-12 items-center"
            >
              <div className={`${idx % 2 === 1 ? "md:col-start-3" : ""}`}>
                <div className="w-full max-w-md mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-soft border border-primary/10 bg-[#FAF4E8]/80">
                  <img
                    src={processImages[idx]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="hidden md:flex md:col-start-2 md:row-start-1 justify-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#FAF4E8] border border-primary/25 shadow-soft flex items-center justify-center font-cinzel text-sm font-bold text-primary">
                  {item.step}
                </div>
              </div>

              <div className={`text-left ${idx % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div className="md:hidden w-14 h-14 rounded-full bg-[#FAF4E8] border border-primary/25 shadow-soft flex items-center justify-center font-cinzel text-sm font-bold text-primary mb-5">
                  {item.step}
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-primary tracking-wide mb-4 md:whitespace-nowrap">
                  {item.title}
                </h3>

                <p className="font-lora text-sm sm:text-[15px] lg:text-base text-primary/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
