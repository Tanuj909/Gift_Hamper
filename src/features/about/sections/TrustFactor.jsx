import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import { TRUST_FACTORS } from "../data/aboutData";

const TrustFactor = () => {
  return (
    <section className="py-14 sm:py-20 bg-transparent">
      <Container>
        <div className="w-full">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <SectionTitle
              title="Why Choose Sajjao"
              subtitle="Our Pillars of Trust"
              align="center"
              className="mb-5"
            />

            <p className="font-lora text-sm sm:text-[15px] text-primary/80 leading-relaxed">
              We bring together handcrafted styling, practical planning, and festive elegance so every gift feels beautiful, thoughtful, and ready for the moment.
            </p>
          </div>

          <div className="bg-[#FAF4E8]/80 backdrop-blur-sm border border-primary/5 rounded-2xl shadow-soft overflow-hidden">
            {TRUST_FACTORS.map((item, idx) => (
              <div
                key={idx}
                className="group grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-4 sm:gap-8 p-6 sm:p-8 border-b border-primary/10 last:border-b-0 transition-colors duration-300 hover:bg-white/20"
              >
                <div className="flex sm:flex-col items-center sm:items-start gap-3">
                  <span className="font-cinzel text-3xl sm:text-5xl font-bold text-primary/20 leading-none transition-colors duration-300 group-hover:text-primary/35">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-16 sm:w-full bg-primary/20" />
                </div>

                <div>
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-primary tracking-wide mb-3">
                    {item.title}
                  </h4>

                  <p className="font-lora text-sm sm:text-[15px] text-primary/75 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustFactor;
