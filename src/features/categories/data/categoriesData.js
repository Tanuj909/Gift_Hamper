import corporateImg from "@/assets/categories/corporate_gifting.png";
import weddingImg from "@/assets/categories/wedding_gifts.png";
import birthdayImg from "@/assets/categories/birthday_gifts.png";
import returnImg from "@/assets/categories/return_gifts.png";
import corporateHamperImg from "@/assets/corporate_hamper.png";
import premiumGiftImg from "@/assets/premium_gift_flatlay.png";
import gourmetReserveImg from "@/assets/gourmet_reserve.png";
import weddingHamperImg from "@/assets/wedding_hamper.png";
import customHamperCraftImg from "@/assets/custom_hamper_craft.png";
import crimsonVelvetImg from "@/assets/crimson_velvet.png";
import sereneLavenderImg from "@/assets/serene_lavender.png";
import wellnessHamperImg from "@/assets/wellness_hamper.png";
import goldenAuraImg from "@/assets/golden_aura.png";

export const PAGE_CATEGORIES = [
  {
    id: "corporate",
    subtitle: "BUSINESS GIFTING",
    title: "Corporate Gifting",
    description: "Bulk gifts, employee kits, and branded hampers curated for client appreciation, team celebrations, festive campaigns, and milestone gifting.",
    image: corporateImg,
    reverse: false,
    subCategories: [
      {
        title: "Bulk Gifts",
        image: corporateHamperImg,
      },
      {
        title: "Employee Kits",
        image: premiumGiftImg,
      },
      {
        title: "Branded Hampers",
        image: gourmetReserveImg,
      },
    ],
  },
  {
    id: "wedding",
    subtitle: "WEDDING CELEBRATIONS",
    title: "Wedding Gifts",
    description: "Wedding hampers, bridesmaid gifts, and favors styled with elegant packaging, premium fillers, and occasion-ready presentation.",
    image: weddingImg,
    reverse: true,
    subCategories: [
      {
        title: "Wedding Hampers",
        image: weddingHamperImg,
      },
      {
        title: "Bridesmaid Gifts",
        image: customHamperCraftImg,
      },
      {
        title: "Favors",
        image: crimsonVelvetImg,
      },
    ],
  },
  {
    id: "birthday",
    subtitle: "PERSONAL MOMENTS",
    title: "Birthday Gifts",
    description: "Personalized birthday hampers designed with thoughtful treats, keepsakes, colors, and details that feel made for the person receiving them.",
    image: birthdayImg,
    reverse: false,
    subCategories: [
      {
        title: "Personalized Birthday Hampers",
        image: sereneLavenderImg,
      },
    ],
  },
  {
    id: "return",
    subtitle: "EVENT FAVORS",
    title: "Return Gifts",
    description: "Return gifts and event favors for weddings, birthdays, festive gatherings, and intimate celebrations where every guest should leave with something special.",
    image: returnImg,
    reverse: true,
    subCategories: [
      {
        title: "Return Gifts",
        image: wellnessHamperImg,
      },
      {
        title: "Event Favors",
        image: goldenAuraImg,
      },
    ],
  }
];
