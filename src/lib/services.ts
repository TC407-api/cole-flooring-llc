export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: "residential" | "commercial";
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "hardwood",
    name: "Hardwood Flooring",
    shortDescription: "Timeless elegance that increases your home's value.",
    description:
      "Nothing matches the warmth and beauty of genuine hardwood floors. From classic oak to exotic species, we install, refinish, and restore hardwood flooring that transforms any room into a showcase. Our commercial-grade installation standards mean your floors are built to last generations.",
    category: "residential",
    benefits: [
      "Increases home value by up to 10%",
      "Lasts 50+ years with proper care",
      "Wide variety of species and finishes",
      "Can be refinished multiple times",
      "Hypoallergenic and easy to clean",
    ],
    process: [
      "Free in-home consultation and measurement",
      "Material selection with samples brought to your home",
      "Subfloor preparation and moisture testing",
      "Professional installation with commercial-grade techniques",
      "Finishing, sealing, and final inspection",
    ],
    faqs: [
      {
        question: "How long does hardwood installation take?",
        answer:
          "Most residential installations take 2-5 days depending on the area size. We handle all furniture moving and cleanup.",
      },
      {
        question: "Can hardwood floors handle Florida humidity?",
        answer:
          "Yes, with proper acclimation and moisture barriers. We use engineered hardwood for areas with higher humidity exposure, which handles Florida's climate beautifully.",
      },
      {
        question: "What's the difference between solid and engineered hardwood?",
        answer:
          "Solid hardwood is milled from a single piece of wood, while engineered has a real hardwood veneer over plywood layers. Engineered is more dimensionally stable in humid climates like Florida.",
      },
    ],
    metaTitle: "Hardwood Flooring Installation Kissimmee FL | Cole Flooring LLC",
    metaDescription:
      "Premium hardwood flooring installation in Kissimmee and Central Florida. 20+ years experience, free estimates. Oak, maple, exotic species. Call today!",
  },
  {
    slug: "tile",
    name: "Tile Flooring",
    shortDescription: "Perfect for Florida's climate — kitchens, baths, and more.",
    description:
      "Tile is the gold standard for Florida homes. From porcelain and ceramic to natural stone, our tile installations handle humidity, spills, and heavy traffic with ease. With experience installing tile in medical facilities and commercial kitchens, we bring precision that most residential-only contractors can't match.",
    category: "residential",
    benefits: [
      "100% waterproof — ideal for Florida",
      "Extremely durable and scratch-resistant",
      "Endless design options and patterns",
      "Easy to clean and maintain",
      "Keeps your home cooler in summer",
    ],
    process: [
      "Design consultation with layout planning",
      "Surface preparation and leveling",
      "Waterproofing membrane installation where needed",
      "Precision tile cutting and installation",
      "Professional grouting and sealing",
    ],
    faqs: [
      {
        question: "What type of tile is best for bathrooms?",
        answer:
          "Porcelain tile with a slip-resistant finish is the best choice for bathrooms. We can also install beautiful large-format tiles with minimal grout lines for a modern look.",
      },
      {
        question: "How long does tile flooring last?",
        answer:
          "Quality tile flooring lasts 50-100+ years. It's one of the most durable flooring options available, especially when professionally installed.",
      },
    ],
    metaTitle: "Tile Flooring Installation Kissimmee FL | Cole Flooring LLC",
    metaDescription:
      "Expert tile flooring installation in Kissimmee FL. Porcelain, ceramic, and natural stone. Kitchens, bathrooms, whole-home. Free estimates. Call now!",
  },
  {
    slug: "lvp-vinyl",
    name: "LVP & Vinyl Flooring",
    shortDescription: "Waterproof, durable, and beautiful — the modern choice.",
    description:
      "Luxury Vinyl Plank (LVP) is the fastest-growing flooring category for good reason. It's 100% waterproof, incredibly durable, and comes in stunning wood and stone looks that rival the real thing. Perfect for Florida families, pet owners, and anyone who wants beauty without the worry.",
    category: "residential",
    benefits: [
      "100% waterproof — perfect for all rooms",
      "Realistic wood and stone aesthetics",
      "Softer underfoot than tile or hardwood",
      "Pet and kid-friendly durability",
      "Budget-friendly without sacrificing style",
    ],
    process: [
      "Free consultation and material selection",
      "Precise room measurement and material ordering",
      "Subfloor preparation and leveling",
      "Click-lock or glue-down installation",
      "Trim work, transitions, and final walkthrough",
    ],
    faqs: [
      {
        question: "Is LVP really waterproof?",
        answer:
          "Yes, quality LVP is 100% waterproof at the plank level. We also ensure proper installation with sealed edges and transitions to protect your subfloor.",
      },
      {
        question: "How does LVP compare to real hardwood?",
        answer:
          "Modern LVP is virtually indistinguishable from hardwood visually. It's more affordable, completely waterproof, and requires less maintenance. The trade-off is it can't be refinished like real hardwood.",
      },
    ],
    metaTitle: "LVP & Vinyl Flooring Installation Kissimmee FL | Cole Flooring LLC",
    metaDescription:
      "Luxury Vinyl Plank (LVP) installation in Kissimmee FL. 100% waterproof, stunning designs, pet-friendly. Free estimates from experienced pros!",
  },
  {
    slug: "laminate",
    name: "Laminate Flooring",
    shortDescription: "The affordable way to get the hardwood look you love.",
    description:
      "Laminate flooring delivers the warmth and beauty of hardwood at a fraction of the cost. Today's laminate features incredibly realistic textures and patterns, with improved durability and water resistance. It's an excellent choice for budget-conscious homeowners who refuse to compromise on aesthetics.",
    category: "residential",
    benefits: [
      "Fraction of the cost of real hardwood",
      "Highly realistic wood-grain textures",
      "Scratch and fade resistant",
      "Easy and fast installation",
      "Low maintenance requirements",
    ],
    process: [
      "Material selection with in-home samples",
      "Accurate room measurement",
      "Subfloor inspection and preparation",
      "Floating floor installation with underlayment",
      "Trim, transitions, and quality check",
    ],
    faqs: [
      {
        question: "Is laminate good for Florida homes?",
        answer:
          "Modern water-resistant laminate works well in Florida's climate. We recommend it for bedrooms, living areas, and hallways. For wet areas like bathrooms, we'd suggest LVP or tile instead.",
      },
      {
        question: "How long does laminate flooring last?",
        answer:
          "Quality laminate lasts 15-25 years with proper care. It's highly resistant to scratches, fading, and everyday wear.",
      },
    ],
    metaTitle: "Laminate Flooring Installation Kissimmee FL | Cole Flooring LLC",
    metaDescription:
      "Affordable laminate flooring installation in Kissimmee FL. Realistic hardwood looks at a fraction of the cost. Free estimates!",
  },
  {
    slug: "carpet",
    name: "Carpet Installation",
    shortDescription: "Soft, warm comfort for bedrooms and living spaces.",
    description:
      "There's nothing like the comfort of plush carpet underfoot, especially in bedrooms and family rooms. We install all types of carpet — from budget-friendly to ultra-premium — with the same precision we bring to our commercial projects. Proper carpet installation means no wrinkles, no bumps, and years of comfort.",
    category: "residential",
    benefits: [
      "Supreme comfort and warmth underfoot",
      "Excellent sound absorption",
      "Slip-resistant and soft for kids",
      "Wide range of colors and textures",
      "Budget-friendly flooring option",
    ],
    process: [
      "In-home consultation and material selection",
      "Room measurement and ordering",
      "Removal and disposal of old flooring",
      "Pad installation and carpet stretching",
      "Seaming, trimming, and final inspection",
    ],
    faqs: [
      {
        question: "What's the best carpet for pets?",
        answer:
          "We recommend solution-dyed nylon or polyester with stain treatment. These materials resist pet stains and are easy to clean. We'll help you choose the right option for your household.",
      },
      {
        question: "How often should carpet be replaced?",
        answer:
          "Quality carpet typically lasts 10-15 years. We can assess your current carpet and let you know if replacement or just professional cleaning is the better option.",
      },
    ],
    metaTitle: "Carpet Installation Kissimmee FL | Cole Flooring LLC",
    metaDescription:
      "Professional carpet installation in Kissimmee FL. Plush, durable, and affordable. Bedrooms, living rooms, whole-home. Free estimates!",
  },
  {
    slug: "epoxy",
    name: "Epoxy Flooring",
    shortDescription: "Durable, stunning garage and patio coating.",
    description:
      "Transform your garage, patio, or workshop with professional epoxy flooring. Our epoxy coatings create a seamless, high-gloss surface that resists chemicals, stains, and heavy impact. With decorative chip and metallic options, your garage floor can look as good as your living room.",
    category: "residential",
    benefits: [
      "Chemical and stain resistant",
      "Seamless, easy-to-clean surface",
      "Decorative chip and metallic finishes",
      "Extremely durable against heavy use",
      "Transforms garages into showrooms",
    ],
    process: [
      "Surface assessment and moisture testing",
      "Diamond grinding or shot blasting preparation",
      "Crack and joint repair",
      "Multi-coat epoxy application with chosen finish",
      "Topcoat sealing and 24-hour cure time",
    ],
    faqs: [
      {
        question: "How long does epoxy flooring last?",
        answer:
          "Professional epoxy coatings last 10-20+ years in residential settings. Our commercial-grade application process ensures maximum adhesion and longevity.",
      },
      {
        question: "Can I park on epoxy flooring?",
        answer:
          "Absolutely. Our epoxy coatings are designed to handle vehicle traffic, hot tire pickup, and chemical spills. Most coatings are ready for foot traffic in 24 hours and vehicle traffic in 72 hours.",
      },
    ],
    metaTitle: "Epoxy Flooring Installation Kissimmee FL | Cole Flooring LLC",
    metaDescription:
      "Professional epoxy flooring for garages, patios, and workshops in Kissimmee FL. Decorative chip & metallic finishes. Free estimates!",
  },
  {
    slug: "commercial",
    name: "Commercial Flooring",
    shortDescription: "Full-scale installations for offices, retail, and restaurants.",
    description:
      "Cole Flooring brings commercial-grade expertise to every business flooring project. From retail stores and restaurants to office buildings and warehouses, we handle large-scale installations on tight timelines without sacrificing quality. Our portfolio includes work for Disney, Universal, and convention centers across Central Florida.",
    category: "commercial",
    benefits: [
      "Experience with Fortune 500 clients",
      "Large-scale project management",
      "Minimal business disruption — we work around your schedule",
      "ADA-compliant installations",
      "All commercial flooring types: VCT, carpet tile, rubber, LVT",
    ],
    process: [
      "On-site consultation and scope assessment",
      "Material specification and budgeting",
      "Project scheduling to minimize downtime",
      "Professional installation with commercial crews",
      "Final inspection and warranty documentation",
    ],
    faqs: [
      {
        question: "Can you work after business hours?",
        answer:
          "Absolutely. We regularly work nights, weekends, and holidays to minimize disruption to your business operations. Many of our theme park projects happen overnight.",
      },
      {
        question: "What commercial flooring types do you install?",
        answer:
          "We install VCT (vinyl composition tile), carpet tile, rubber flooring, LVT (luxury vinyl tile), epoxy, polished concrete, hardwood, and all types of tile for commercial spaces.",
      },
    ],
    metaTitle: "Commercial Flooring Contractor Kissimmee FL | Cole Flooring LLC",
    metaDescription:
      "Commercial flooring installation in Central Florida. Disney, Universal, convention centers. VCT, carpet tile, LVT, epoxy. Licensed & insured.",
  },
  {
    slug: "medical-healthcare",
    name: "Medical & Healthcare Flooring",
    shortDescription: "Hospital ORs, clinics, and dialysis centers — infection-control compliant.",
    description:
      "Healthcare flooring demands perfection. A single gap or improperly sealed seam can harbor bacteria and compromise patient safety. Cole Flooring specializes in medical-grade installations including flashcove base, heat-welded seams, and antimicrobial sheet vinyl — the same standards required in hospital operating rooms and dialysis centers.",
    category: "commercial",
    benefits: [
      "Heat-welded seams for infection control",
      "Flashcove wall base for seamless transitions",
      "Antimicrobial and chemical-resistant materials",
      "HIPAA-compliant installation practices",
      "Experience with active healthcare facilities",
    ],
    process: [
      "Facility assessment and compliance review",
      "Material specification meeting healthcare codes",
      "Phased installation to maintain facility operations",
      "Heat welding and flashcove installation",
      "Infection control verification and documentation",
    ],
    faqs: [
      {
        question: "What is flashcove flooring?",
        answer:
          "Flashcove is a technique where sheet vinyl is curved up the wall to create a seamless, coved transition. This eliminates the gap between floor and wall where bacteria can collect — critical in healthcare settings.",
      },
      {
        question: "Can you work in active medical facilities?",
        answer:
          "Yes. We have extensive experience working in operating hospitals and clinics. We follow strict protocols for dust containment, noise management, and infection control during installation.",
      },
    ],
    metaTitle:
      "Medical & Healthcare Flooring Kissimmee FL | Cole Flooring LLC",
    metaDescription:
      "Specialized medical flooring installation. Hospital ORs, dialysis centers, clinics. Heat-welded seams, flashcove base. Infection-control compliant.",
  },
  {
    slug: "hospitality",
    name: "Hospitality & Entertainment",
    shortDescription: "Theme parks, convention centers, and hotels — high-traffic durability.",
    description:
      "When Disney and Universal need flooring installed, they call contractors who understand the unique demands of hospitality and entertainment venues. High foot traffic, tight turnarounds, and exacting aesthetic standards are our specialty. From hotel lobbies to convention center ballrooms, we deliver floors that perform under pressure.",
    category: "commercial",
    benefits: [
      "Proven with Disney and Universal projects",
      "High-traffic durability specifications",
      "Aesthetic excellence for guest-facing spaces",
      "Rapid turnaround capabilities",
      "Convention center and hotel expertise",
    ],
    process: [
      "Venue walkthrough and project scoping",
      "Material selection for high-traffic performance",
      "Timeline coordination with venue operations",
      "Installation with minimal guest impact",
      "Post-installation inspection and touch-ups",
    ],
    faqs: [
      {
        question: "What theme park projects has Cole Flooring completed?",
        answer:
          "We've completed flooring installations at both Walt Disney World and Universal Studios Orlando properties, as well as multiple convention centers throughout Central Florida.",
      },
      {
        question: "How do you handle tight turnaround times?",
        answer:
          "We maintain experienced commercial crews that can mobilize quickly. Many of our entertainment venue projects are completed overnight or during scheduled closures to avoid guest disruption.",
      },
    ],
    metaTitle:
      "Hospitality & Entertainment Flooring Central FL | Cole Flooring LLC",
    metaDescription:
      "Flooring for theme parks, convention centers, and hotels in Central Florida. Disney & Universal experience. High-traffic durability. Licensed & insured.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getResidentialServices(): Service[] {
  return services.filter((s) => s.category === "residential");
}

export function getCommercialServices(): Service[] {
  return services.filter((s) => s.category === "commercial");
}

export const serviceAreas = [
  "Kissimmee",
  "St. Cloud",
  "Poinciana",
  "Celebration",
  "Haines City",
  "Davenport",
  "Orlando",
  "Winter Garden",
  "Clermont",
  "Lake Nona",
  "Dr. Phillips",
  "Windermere",
  "Winter Park",
  "Altamonte Springs",
  "Sanford",
  "Apopka",
];

export const PHONE_NUMBER = "(407) 555-0192";
export const PHONE_HREF = "tel:+14075550192";
export const EMAIL = "travis@coleflooringllc.com";
export const ADDRESS = "Kissimmee, FL 34758";
export const BUSINESS_NAME = "Cole Flooring LLC";
