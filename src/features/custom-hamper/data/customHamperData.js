import corporateImg from "@/assets/corporate_hamper.png";
import crimsonImg from "@/assets/crimson_velvet.png";
import goldenImg from "@/assets/golden_aura.png";
import gourmetImg from "@/assets/gourmet_reserve.png";
import sereneImg from "@/assets/serene_lavender.png";
import weddingImg from "@/assets/wedding_hamper.png";
import wellnessImg from "@/assets/wellness_hamper.png";

export const BOX_TYPES = [
  {
    id: "willow-basket",
    name: "Handwoven Willow Basket",
    description: "Rustic yet elegant, hand-woven from organic willow twigs. Perfect for a warm, artisanal feel.",
    price: 850,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    capacity: 8,
  },
  {
    id: "velvet-box",
    name: "Royal Crimson Velvet Box",
    description: "Deep maroon velvet fabric with plush gold trim, adding a touch of heritage luxury.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=600&q=80",
    capacity: 6,
  },
  {
    id: "pine-wood",
    name: "Handcrafted Pine Wood Chest",
    description: "Sustainably sourced premium pine wood with a brass clasp. Durable and reusable.",
    price: 1000,
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=600&q=80",
    capacity: 10,
  },
  {
    id: "ivory-box",
    name: "Ivory Textured Keepsake Box",
    description: "Premium heavy-weight textured paper box in warm off-white, secured with a magnetic latch.",
    price: 600,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
    capacity: 6,
  }
];

export const HAMPER_ITEMS = [
  // Sweets & Indulgences
  {
    id: "rose-chocolate",
    name: "Rose & Cardamom Chocolates",
    category: "Sweets & Indulgences",
    price: 450,
    description: "Premium hand-tempered milk chocolate infused with organic rose petals and fresh cardamom. (Box of 6)",
    image: "https://images.unsplash.com/photo-1548907040-4d42b52115af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "stuffed-dates",
    name: "Almond-Stuffed Medjool Dates",
    category: "Sweets & Indulgences",
    price: 500,
    description: "Imported dates stuffed with premium roasted almonds, glazed with a hint of honey. (150g)",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "roasted-nuts",
    name: "Roasted Pistachios & Cashews",
    category: "Sweets & Indulgences",
    price: 380,
    description: "Perfectly dry-roasted nuts dusted with pink Himalayan salt. (200g)",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d96?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "organic-honey",
    name: "Organic Wildflower Honey",
    category: "Sweets & Indulgences",
    price: 280,
    description: "Pure, unpasteurized honey gathered from wild forest blossoms. Comes with a mini wooden dipper.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "saffron-tea",
    name: "Royal Saffron Kahwa Tea",
    category: "Sweets & Indulgences",
    price: 420,
    description: "Traditional Kashmiri green tea leaves blended with saffron strands, almonds, and cardamom. (100g)",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
  },

  // Wellness & Aromatherapy
  {
    id: "lavender-candle",
    name: "French Lavender Soy Candle",
    category: "Wellness & Aromatherapy",
    price: 320,
    description: "Hand-poured candle in an amber glass jar, scented with organic lavender essential oil.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "rose-soap",
    name: "Goat Milk & Rose Soap",
    category: "Wellness & Aromatherapy",
    price: 180,
    description: "Nourishing soap bar made with fresh goat milk and wild rose extracts, cured for 6 weeks.",
    image: "https://images.unsplash.com/photo-1607006342411-1a9032b27f28?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sandalwood-incense",
    name: "Sandalwood Incense Cones",
    category: "Wellness & Aromatherapy",
    price: 220,
    description: "Charcoal-free incense cones rolled with pure Mysore sandalwood powder. (Pack of 20 with stand)",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bath-salts",
    name: "Himalayan Pink Bath Salts",
    category: "Wellness & Aromatherapy",
    price: 350,
    description: "Therapeutic bath soak infused with mineral-rich salts and calming eucalyptus essential oil. (250g)",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80"
  },

  // Accessories & Keepsakes
  {
    id: "brass-strainer",
    name: "Handcrafted Brass Tea Strainer",
    category: "Accessories & Keepsakes",
    price: 450,
    description: "Elegant, antique-finished solid brass tea strainer with an intricate hand-carved handle.",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ceramic-mug",
    name: "Hand-Painted Ceramic Mug",
    category: "Accessories & Keepsakes",
    price: 380,
    description: "Stoneware mug hand-painted in traditional floral patterns by local artisans. (350ml)",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "leather-bookmark",
    name: "Premium Tan Leather Bookmark",
    category: "Accessories & Keepsakes",
    price: 150,
    description: "Genuine full-grain leather bookmark, hand-stitched and finished with a rustic brass rivet.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  }
];

export const RIBBON_OPTIONS = [
  { id: "crimson-satin", name: "Crimson Satin Ribbon", price: 0, color: "#800c0c" },
  { id: "gold-organza", name: "Royal Gold Organza Ribbon", price: 0, color: "#c59b27" },
  { id: "forest-velvet", name: "Forest Green Velvet Ribbon", price: 60, color: "#1e3f20" },
  { id: "navy-satin", name: "Midnight Navy Satin Ribbon", price: 0, color: "#0c1a30" },
  { id: "dried-flowers", name: "Dried Flower Bunch Accent", price: 150, color: "var(--color-primary)", icon: "💐" }
];

export const CARD_OPTIONS = [
  { id: "sajjao-card", name: "Standard Sajjao Gift Card", price: 0, desc: "A clean card with our gold brand logo." },
  { id: "gold-foil", name: "Gold Foil Embossed Greeting Card", price: 50, desc: "Textured paper with royal gold foil calligraphy." },
  { id: "handmade-seed", name: "Handmade Plantable Seed Card", price: 80, desc: "Eco-friendly cotton paper embedded with wildflower seeds." },
  { id: "calligraphy", name: "Classic Calligraphy Note Card", price: 40, desc: "Thick parchment card with hand-written calligraphy." }
];

export const CATEGORIES = [
  "All",
  "Sweets & Indulgences",
  "Wellness & Aromatherapy",
  "Accessories & Keepsakes"
];

export const SIGNATURE_GIFTS = [
  { id: "wedding", name: "Matrimonial Shubh Box", image: weddingImg },
  { id: "corporate", name: "Executive Corporate Crate", image: corporateImg },
  { id: "crimson", name: "Royal Crimson Velvet Hamper", image: crimsonImg },
  { id: "golden", name: "Golden Aura Festival Hamper", image: goldenImg },
  { id: "gourmet", name: "Gourmet Reserve Chest", image: gourmetImg },
  { id: "wellness", name: "Tranquil Wellness Crate", image: wellnessImg },
  { id: "serene", name: "Serene Lavender Gift Crate", image: sereneImg }
];
