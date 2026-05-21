import React, { useState } from "react";
import Container from "@/shared/components/ui/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Button from "@/shared/components/ui/Button";

const InqaryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occasion: "wedding",
    budget: "under-5k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
    setSubmitted(true);
    // Reset form after a brief period
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        occasion: "wedding",
        budget: "under-5k",
        message: "",
      });
    }, 4000);
  };

  return (
    <section className="py-16 bg-transparent" id="inqary-section">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Details / QR Reference (Redesigned with Glassmorphic Cream Card) */}
          <div className="lg:col-span-5 bg-[#FAF4E8]/90 backdrop-blur-sm text-primary p-8 rounded-3xl shadow-soft border border-primary/5 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative background mandalas/patterns */}
            <div className="absolute -right-16 -top-16 w-48 h-48 border border-primary/10 rounded-full pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold font-lora">
                  Sajjao Gifting Solves For
                </span>
                <h3 className="font-cinzel text-xl font-bold tracking-wide text-primary">
                  Weddings & Corporate
                </h3>
              </div>

              {/* Lora typography customized paragraph */}
              <p className="font-lora text-sm text-primary/85 leading-relaxed max-w-sm">
                Connect with Ankita & her creative team to customize your haldi-mehendi platters, torans, trousseau crates, and corporate gifting needs perfectly to your budget.
              </p>

              {/* Contact Lists (All fields styled strictly in Lora) */}
              <div className="space-y-4 pt-4">
                
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-primary text-sm shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="text-[10px] font-lora uppercase tracking-wider text-primary/60">Phone</p>
                    <p className="text-sm font-lora font-medium text-primary">+91-9899913137</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-primary text-sm shrink-0">
                    ✉
                  </div>
                  <div>
                    <p className="text-[10px] font-lora uppercase tracking-wider text-primary/60">Email</p>
                    <p className="text-sm font-lora font-medium text-primary">infosajjao@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-primary text-sm shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="text-[10px] font-lora uppercase tracking-wider text-primary/60">Location</p>
                    <p className="text-sm font-lora font-medium text-primary">Gurugram, Haryana</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-primary text-sm shrink-0">
                    📸
                  </div>
                  <div>
                    <p className="text-[10px] font-lora uppercase tracking-wider text-primary/60">Instagram</p>
                    <a 
                      href="https://www.instagram.com/sajjaoo" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-lora font-medium text-primary hover:underline"
                    >
                      @sajjaoo
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Slogan details */}
            <div className="pt-8 border-t border-primary/10 mt-8 relative z-10">
              <p className="font-cinzel text-xs text-accent font-bold uppercase tracking-wider mb-1">
                Ankita's Creative Promise
              </p>
              <p className="font-lora text-[11px] text-primary/75 italic leading-relaxed">
                "Crafting Elegance | Celebrating Traditions | Curating Memories"
              </p>
            </div>

          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7 bg-[#FAF4E8]/90 backdrop-blur-sm p-8 rounded-3xl shadow-soft border border-primary/5">
            <SectionTitle 
              title="Share Your Requirements" 
              subtitle="Submit An Inquiry" 
              align="left"
              className="mb-6"
            />

            {submitted ? (
              <div className="h-[350px] flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h4 className="font-cinzel text-base font-bold text-primary">
                  Inquiry Received!
                </h4>
                <p className="font-lora text-xs text-primary/75 max-w-sm leading-relaxed">
                  Thank you for connecting with Sajjao by Ankita. We will review your details and get back to you with custom quotes shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
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
                      className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent bg-transparent text-primary"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col space-y-1 text-left">
                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91-XXXXXXXXXX"
                      className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent bg-transparent text-primary"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Occasions select */}
                  <div className="flex flex-col space-y-1 text-left">
                    <label htmlFor="occasion" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                      Occasion / Service
                    </label>
                    <select 
                      id="occasion" 
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent bg-transparent text-primary cursor-pointer"
                    >
                      <option value="wedding">Wedding Return Gifts & Platters</option>
                      <option value="trousseau">Trousseau & Sagan packing</option>
                      <option value="festival">Festival Decor & Torans</option>
                      <option value="baby">Baby Announcement Hampers</option>
                      <option value="other">Other Customs</option>
                    </select>
                  </div>

                  {/* Budget select */}
                  <div className="flex flex-col space-y-1 text-left">
                    <label htmlFor="budget" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                      Estimated Budget Range
                    </label>
                    <select 
                      id="budget" 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent bg-transparent text-primary cursor-pointer"
                    >
                      <option value="under-5k">Under ₹5,000</option>
                      <option value="5k-15k">₹5,000 - ₹15,000</option>
                      <option value="15k-50k">₹15,000 - ₹50,000</option>
                      <option value="above-50k">Above ₹50,000</option>
                    </select>
                  </div>

                </div>

                {/* Message / Requirement detail */}
                <div className="flex flex-col space-y-1 text-left">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-primary/70">
                    Event Details & Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you are looking for (quantity, specific style, delivery date)..."
                    className="w-full text-xs font-lora border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent bg-transparent text-primary resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    type="submit"
                  >
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default InqaryForm;
