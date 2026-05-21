import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Button from "@/shared/components/ui/Button";
import bannerImg from "@/assets/banners/custom_hamper.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Contact inquiry submitted:", formData);
    setSubmitted(true);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact-section");
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
                Let's Create
              </h2>
              <h1 className="inline-block border border-primary px-5 py-2.5 font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-primary mt-2 leading-none whitespace-nowrap backdrop-blur-sm shadow-sm md:border-0 md:px-0 md:py-0 md:backdrop-blur-none md:shadow-none">
                Contact Sajjao
              </h1>
            </div>

            <p className="hidden md:block font-lora text-sm sm:text-base text-primary/85 leading-relaxed max-w-md">
              Share your gifting requirement, event details, or custom hamper idea. We will help you shape it beautifully.
            </p>

            <p className="hidden md:block font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              FORM - WHATSAPP - MAP - GURUGRAM
            </p>

            <button
              onClick={scrollToContact}
              className="border border-primary px-8 py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <Container id="contact-section" className="mt-20 scroll-mt-24">
        <div className="text-center mb-12">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent block mb-3 font-cinzel">
            Contact
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-primary break-words">
            Talk To Sajjao
          </h2>
          <p className="font-lora text-[15px] sm:text-base text-primary/80 leading-relaxed max-w-2xl mx-auto mt-5">
            Reach us for wedding gifting, corporate hampers, festive collections, return gifts, and personalized packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 items-stretch">
          {/* Merged Contact Form & Quick Contact Card */}
          <div className="bg-[#FAF4E8]/85 backdrop-blur-sm border border-primary/5 rounded-2xl shadow-soft p-6 sm:p-8 flex flex-col md:flex-row gap-8">
            
            {/* Contact Form Section */}
            <div className="flex-1">
              <SectionTitle
                title="Contact Form"
                subtitle="Send Your Requirement"
                align="left"
                className="mb-6"
              />

              {submitted ? (
                <div className="min-h-[360px] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/15 text-primary flex items-center justify-center font-cinzel text-xl font-bold mb-5">
                    OK
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-primary">
                    Message Received
                  </h3>
                  <p className="font-lora text-sm text-primary/75 leading-relaxed max-w-md mt-3">
                    Thank you for contacting Sajjao. We will review your details and connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col space-y-1 text-left">
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
                        placeholder="Enter your name"
                        className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3.5 bg-white/40 focus:outline-none focus:border-accent text-primary"
                      />
                    </div>

                    <div className="flex flex-col space-y-1 text-left">
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
                        placeholder="+91-XXXXXXXXXX"
                        className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3.5 bg-white/40 focus:outline-none focus:border-accent text-primary"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1 text-left">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3.5 bg-white/40 focus:outline-none focus:border-accent text-primary"
                    />
                  </div>

                  <div className="flex flex-col space-y-1 text-left">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your occasion, quantity, budget, preferred colors, and delivery timeline."
                      className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3.5 bg-white/40 focus:outline-none focus:border-accent text-primary resize-none"
                    />
                  </div>

                  <Button variant="primary" size="lg" className="w-full" type="submit">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Quick Contact Section */}
            <div className="w-full md:w-[300px] shrink-0 border-t md:border-t-0 md:border-l border-primary/10 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
              <div>
                <SectionTitle
                  title="Quick Contact"
                  subtitle="Direct Details"
                  align="left"
                  className="mb-6"
                />

                <div className="space-y-4">
                  <a
                    href="https://wa.me/919899913137"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 border border-primary/10 rounded-2xl p-4 hover:bg-white/25 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-primary shrink-0">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <p className="font-cinzel text-[11px] font-bold uppercase tracking-wider text-primary">
                        WhatsApp
                      </p>
                      <p className="font-lora text-xs text-primary/75 mt-1">
                        Chat for custom queries
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 border border-primary/10 rounded-2xl p-4">
                    <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-primary shrink-0">
                      <Phone size={17} />
                    </div>
                    <div>
                      <p className="font-cinzel text-[11px] font-bold uppercase tracking-wider text-primary">
                        Phone
                      </p>
                      <p className="font-lora text-xs text-primary/75 mt-1">
                        +91-9899913137
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border border-primary/10 rounded-2xl p-4">
                    <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-primary shrink-0">
                      <Mail size={17} />
                    </div>
                    <div>
                      <p className="font-cinzel text-[11px] font-bold uppercase tracking-wider text-primary">
                        Email
                      </p>
                      <p className="font-lora text-xs text-primary/75 mt-1 break-all">
                        infosajjao@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border border-primary/10 rounded-2xl p-4">
                    <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={17} />
                    </div>
                    <div>
                      <p className="font-cinzel text-[11px] font-bold uppercase tracking-wider text-primary">
                        Location
                      </p>
                      <p className="font-lora text-xs text-primary/75 mt-1">
                        Gurugram, Haryana
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="flex flex-col">
            <div className="flex-1 rounded-2xl overflow-hidden shadow-soft border border-primary/5 bg-[#FAF4E8]/85 min-h-[420px]">
              <iframe
                title="Sajjao Gurugram map"
                src="https://www.google.com/maps?q=Gurugram%2C%20Haryana&output=embed"
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
