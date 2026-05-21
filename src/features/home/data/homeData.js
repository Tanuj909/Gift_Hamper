import weddingHamper from "@/assets/wedding_hamper.png";
import corporateHamper from "@/assets/corporate_hamper.png";
import wellnessHamper from "@/assets/wellness_hamper.png";
import sereneLavender from "@/assets/serene_lavender.png";

import crimsonVelvet from "@/assets/crimson_velvet.png";
import goldenAura from "@/assets/golden_aura.png";
import gourmetReserve from "@/assets/gourmet_reserve.png";

export const CATEGORIES = [
  {
    title: "Wedding & Sagan Packing",
    description: "Exquisite Haldi-Mehendi platters, decorative Ring platters, trousseau packing, and personalized wedding return gifts.",
    image: weddingHamper,
    link: "/categories/wedding",
    tag: "Elegant & Traditional",
  },
  {
    title: "Festival & Home Decor",
    description: "Brighten your space with handcrafted Torans, beaded Shubh Labh hangings, T-light candle holders, and festive hampers.",
    image: corporateHamper,
    link: "/categories/decor",
    tag: "Auspicious & Handcrafted",
  },
  {
    title: "Occasions & Milestones",
    description: "Charming baby shower giveaways, baby announcement hampers, birthday gift boxes, and customizable DIY trays & bags.",
    image: wellnessHamper,
    link: "/categories/occasions",
    tag: "Joyous & Bespoke",
  },
  {
    title: "Bespoke Trays & Gift Bags",
    description: "Artisanal styled DIY trays, premium organza bags, designer coin pouches, and decorated boxes for elegant packaging.",
    image: sereneLavender,
    link: "/categories/trays",
    tag: "Chic & Versatile",
  },
];

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: "Haldi - Mehendi Platter Set",
    price: "₹4,299",
    image: crimsonVelvet,
    badge: "Bestseller",
    description: "Intricately styled ceremony platter decorated with handmade flowers, gota lace borders, and gold-rimmed bowls.",
    items: ["Gota Work Platter", "Two Ritual Bowls", "Handmade Flowers", "Bespoke Base"],
  },
  {
    id: 2,
    title: "Exquisite Beaded Toran",
    price: "₹2,899",
    image: goldenAura,
    badge: "Festive Exclusive",
    description: "Traditional door hanging with brass t-light candle holders, pearls, and hand-stitched silk flowers.",
    items: ["Brass Holders", "Beaded Hangings", "Handcrafted Bells", "Gold Trims"],
  },
  {
    id: 3,
    title: "Bespoke Trousseau Box",
    price: "₹8,500",
    image: gourmetReserve,
    badge: "Wedding Luxe",
    description: "Luxurious velvet trunks finished with gold calligraphy tags, designer ribbons, and custom floral accents.",
    items: ["Velvet Trunk", "Organza Ribbon", "Dried Flowers", "Calligraphy Card"],
  },
  {
    id: 4,
    title: "Shubh Labh Floral Hangings",
    price: "₹1,899",
    image: sereneLavender,
    badge: "Traditions",
    description: "Traditional beaded wall hangings representing prosperity, featuring premium tassels and gotapatti detailing.",
    items: ["Wall Hangings Set", "Handmade Tassels", "Gotapatti Work", "Auspicious Beads"],
  },
];

export const BUILD_STEPS = [
  {
    step: "01",
    title: "Select Your Crate or Platter Base",
    desc: "Choose from our circular resin platters, hand-carved pine trunks, or custom velvet-padded wedding trays.",
  },
  {
    step: "02",
    title: "Curate Festive Essentials",
    desc: "Add traditional dry fruit jars, artisanal sweets, brass diyas, beaded torans, and customized decor hangings.",
  },
  {
    step: "03",
    title: "Add Calligraphy & Traditional Wrapping",
    desc: "Select gota work laces, custom gold calligraphy tags, and fresh marigold or baby's breath floral sprigs.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Pooja Gupta",
    location: "Gurugram",
    review: "We ordered 150 customized Haldi platters and wedding return gifts. The floral gota work detailing and sagan packaging were stunning and drew endless compliments from our guests.",
    initials: "PG",
    rating: 5,
  },
  {
    name: "Vikram Aditya",
    location: "New Delhi",
    review: "The handmade Torans and T-light candle holders we ordered for Diwali corporate gifting were beautiful. Every client loved the traditional gold-embossed boxes.",
    initials: "VA",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    location: "Noida",
    review: "Outstanding trousseau packing! Ankita and her team curated the most elegant crates and wrapping, accommodating all our requests while staying strictly within our budget.",
    initials: "AS",
    rating: 5,
  },
  {
    name: "Meera Khanna",
    location: "Mumbai",
    review: "The baby announcement hampers were crafted with such delicacy. The custom organza bags and calligraphy note added a very personal touch that made our announcement truly special.",
    initials: "MK",
    rating: 5,
  },
  {
    name: "Rohan Malhotra",
    location: "Gurugram",
    review: "Ankita's promise of providing something in every budget is 100% true. We customized our festive home decor torans and Sagan boxes under a tight budget, yet they looked extremely premium!",
    initials: "RM",
    rating: 5,
  },
  {
    name: "Shweta Tiwari",
    location: "Faridabad",
    review: "Sajjao curated our trousseau trunks and ring ceremony platters. The craftsmanship is flawless and the attention to detail in the beadwork and floral styling is phenomenal.",
    initials: "ST",
    rating: 5,
  },
];
