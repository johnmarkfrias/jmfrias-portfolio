// src/data/projects.js

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "website", label: "Website Development" },
  { id: "ui-ux", label: "UI / UX Design" },
  { id: "graphic-design", label: "Graphic Design" },
];

export const projects = [
  // --- WEBSITE DEVELOPMENT ---
  {
    id: 1,
    slug: "ashford-homes-ohio",
    category: "website",
    title: "Ashford Homes Ohio",
    description:
      "A property showcase and custom home builder website featuring rich floor plans, community details, and client lead generation.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/ashford.png",
    liveUrl: "https://www.ashfordhomesohio.com/",
    featured: true,
  },
  {
    id: 2,
    slug: "hanna-mellul",
    category: "website",
    title: "Hanna Mellul",
    description:
      "An elegant personal brand and portfolio platform designed to present creative work with modern typography and fluid interactions.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/hannah-mellul.png",
    liveUrl: "https://hannamellul.com/",
    featured: true,
  },
  {
    id: 3,
    slug: "fnq-connect",
    category: "website",
    title: "FNQ Connect",
    description:
      "A community-centered regional platform focused on resource accessibility, seamless user navigation, and clear organization of information.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/fnq-connect.png",
    liveUrl: "https://fnqconnect.org.au/",
    featured: true,
  },
  {
    id: 4,
    slug: "sulca-aesthetics",
    category: "website",
    title: "Sulca Aesthetics",
    description:
      "A modern medical aesthetics website providing client booking clarity, service breakdowns, and high-trust clinic branding.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/sulca.png",
    liveUrl: "https://sulcaaesthetics.com/",
    featured: true,
  },
  {
    id: 5,
    slug: "cobell-interiors",
    category: "website",
    title: "Cobell Interiors",
    description:
      "A sophisticated interior design showcase website highlighting premium residential and commercial spaces with seamless visual storytelling.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/cobell.png",
    liveUrl: "https://cobellinteriors.com/",
    featured: true,
  },
  {
    id: 6,
    slug: "wellness-pro-incorporated",
    category: "website",
    title: "Wellness PRO Incorporated",
    description:
      "A healthcare and wellness distribution platform featuring detailed product catalogs, client solutions, and responsive brand design.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/wellness-pro.png",
    liveUrl: "https://wellnessproinc.com/",
    featured: true,
  },
  {
    id: 7,
    slug: "scott-salisbury-homes",
    category: "website",
    title: "Scott Salisbury Homes",
    description:
      "A premium custom home builder and property portfolio website featuring stunning architectural designs, interactive layouts, and user engagement features.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/scottsalisbury-homes.jpg",
    liveUrl: "https://www.scottsalisburyhomes.com.au/",
    featured: false,
  },
  {
    id: 8,
    slug: "adventure-oshc",
    category: "website",
    title: "Adventure OSHC",
    description:
      "A child care and outside school hours care service website designed with intuitive navigation, engaging branding, and parent resource portals.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/adventure-oshc.jpg",
    liveUrl: "http://adventureoshc.com.au/",
    featured: false,
  },
  {
    id: 9,
    slug: "mc-strata",
    category: "website",
    title: "MC Strata",
    description:
      "A professional property management and strata services platform delivering clear information architecture, client portal integration, and responsive layouts.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/mc-cormacks.jpg",
    liveUrl: "https://mcstrata.wpenginepowered.com/",
    featured: false,
  },
  {
    id: 10,
    slug: "right-hear",
    category: "website",
    title: "Right Hear",
    description:
      "An accessibility-focused technology platform providing advanced spatial orientation and audio description solutions for independent navigation.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/right-hear.jpg",
    liveUrl: "https://www.right-hear.com",
    featured: false,
  },
  {
    id: 11,
    slug: "magnetics-designs",
    category: "website",
    title: "Magnetics Designs",
    description:
      "A creative design and branding portfolio showcasing dynamic visual assets, custom web solutions, and modern interactive elements.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/magnetics.jpg",
    liveUrl: "https://magneticsdesigns.com/",
    featured: false,
  },
  {
    id: 12,
    slug: "saturn-packaging",
    category: "website",
    title: "Saturn Packaging",
    description:
      "An industrial packaging solutions platform featuring eco-friendly product lines, technical specifications, and streamlined inquiry funnels.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    image: "/assets/projects/web-development/saturn-packaging.jpg",
    liveUrl: "https://saturnpackaging.devstudio.work/",
    featured: false,
  },

  // --- UI / UX DESIGN ---
  {
    id: 28,
    slug: "wellness-pro-incorporated-ui-ux",
    category: "ui-ux",
    title: "Wellness PRO Incorporated - UI/UX Design",
    description:
      "Interactive Figma prototype and design system showcasing user flow layouts, wireframes, and responsive medical distribution platform screens.",
    tags: ["Prototype", "Medical UI", "Figma"],
    image: "/assets/projects/ui-ux-designs/wellness-pro-inc-prototype.jpg",
    liveUrl:
      "https://www.figma.com/proto/bwKgbPskqnJuJdnAyvlIXS/Wellness-PRO-Incorporated-%7C-Web-Design-by-JM-Frias?t=O1Y6R88GDORhcjuu-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&node-id=1262-6038&starting-point-node-id=1262%3A6038&hide-ui=1",
    featured: true,
  },
  {
    id: 29,
    slug: "gameplanet-ordering-system-prototype",
    category: "ui-ux",
    title: "GAMEPLANET - Ordering System Prototype",
    description:
      "Interactive Figma prototype and e-commerce ordering system UI designed for gaming merchandise, computer hardware, and digital services platforms.",
    tags: ["Prototype", "Ordering System", "Figma"],
    image: "/assets/projects/ui-ux-designs/gameplanet-prototype.jpg",
    liveUrl:
      "https://www.figma.com/proto/joPe3s0KuNDnMKKUn9nw6k/GAMEPLANET-Ordering-System-Prototype?node-id=303-2&t=RGvCtJbsrdxH10Cj-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=303%3A2&hide-ui=1",
    featured: true,
  },

  // --- GRAPHIC DESIGN WORKS ---
  // 1. Seca 354
  {
    id: 14,
    slug: "wellness-pro-seca-354-digital-baby-scale",
    category: "graphic-design",
    title: "Seca 354 Digital Baby Scale Product Creative",
    description:
      "Detailed medical product showcase graphic highlighting specifications, features, and clinical benefits for Seca digital baby scales.",
    tags: ["Graphic Design", "Product Marketing", "Medical UI"],
    image: "/assets/projects/graphic-designs/wellness-pro-seca-354-digital-baby-scale-banner.png",
    liveUrl: "",
    featured: true,
  },
  // 2. CvSU Recognition
  {
    id: 19,
    slug: "john-mark-frias-cvsu-cum-laude-honor",
    category: "graphic-design",
    title: "CvSU-Imus Cum Laude Recognition Feature",
    description:
      "Official typography and visual layout asset celebrating academic excellence and Latin honor recognition at Cavite State University.",
    tags: ["Graphic Design", "Typography", "Editorial Layout"],
    image: "/assets/projects/graphic-designs/john-mark-frias-cvsu-imus-cum-laude-honor-graphic.png",
    liveUrl: "",
    featured: false,
  },
  // 3. PPS
  {
    id: 16,
    slug: "wellness-pro-pps-next-gen-pediatrics",
    category: "graphic-design",
    title: "PPS Next-Gen Pediatrics Social Graphic",
    description:
      "Targeted digital marketing graphic created for the Philippine Pediatric Society convention exhibition.",
    tags: ["Graphic Design", "Social Media Art", "Healthcare Branding"],
    image: "/assets/projects/graphic-designs/wellness-pro-pps-next-gen-pediatrics-social-media-post.png",
    liveUrl: "",
    featured: false,
  },
  // 4. National Children's Month
  {
    id: 26,
    slug: "national-childrens-month-poster",
    category: "graphic-design",
    title: "National Children's Month Awareness Poster",
    description:
      "Vibrant community awareness poster design focused on youth empowerment, education, and modern illustrative layout.",
    tags: ["Graphic Design", "Campaign Poster", "Illustration"],
    image: "/assets/projects/graphic-designs/national-childrens-month-poster.png",
    liveUrl: "",
    featured: false,
  },
  // 5. James
  {
    id: 18,
    slug: "james-pokemon-custom-graphic-banner",
    category: "graphic-design",
    title: "Custom Pokémon Graphic Banner",
    description:
      "Creative custom digital illustration and banner design showcasing personal artistic layout and typography styling.",
    tags: ["Graphic Design", "Digital Illustration", "Banner Art"],
    image: "/assets/projects/graphic-designs/james-pokemon-custom-graphic-banner.jpg",
    liveUrl: "",
    featured: false,
  },
  // 6. FNRI
  {
    id: 15,
    slug: "wellness-pro-dost-fnri-seminar-series",
    category: "graphic-design",
    title: "DOST-FNRI Seminar Series Poster",
    description:
      "Educational and promotional event collateral designed for medical distribution partnerships during the DOST-FNRI seminar series.",
    tags: ["Graphic Design", "Seminar Collateral", "Print Design"],
    image: "/assets/projects/graphic-designs/wellness-pro-dost-fnri-seminar-series-poster.jpg",
    liveUrl: "",
    featured: false,
  },
  // 7. All Souls' Day
  {
    id: 30,
    slug: "wellness-pro-all-souls-day-social-media",
    category: "graphic-design",
    title: "All Souls' Day Corporate Observance Post",
    description:
      "Commemorative corporate social media visual asset designed with ambient lighting, candle illustration, and floral accents.",
    tags: ["Graphic Design", "Social Media Art", "Corporate Branding"],
    image: "/assets/projects/graphic-designs/wellness-pro-all-souls-day-social-media.png",
    liveUrl: "",
    featured: false,
  },
  // 8. Nutrition Congress
  {
    id: 17,
    slug: "wellness-pro-nutrition-congress-email",
    category: "graphic-design",
    title: "Nutrition Congress Campaign Flyer",
    description:
      "High-engagement campaign collateral and flyer designed for medical product campaigns at nutrition congress events.",
    tags: ["Graphic Design", "Campaign Flyer", "Digital Banner"],
    image: "/assets/projects/graphic-designs/wellness-pro-nutrition-congress-email-campaign-flyer.png",
    liveUrl: "",
    featured: false,
  },
  // 9. All Saints' Day
  {
    id: 31,
    slug: "wellness-pro-all-saints-day-social-media",
    category: "graphic-design",
    title: "All Saints' Day Corporate Social Media Art",
    description:
      "Solemn holiday commemorative graphic post created for company social media channels and audience engagement.",
    tags: ["Graphic Design", "Social Media Art", "Corporate Branding"],
    image: "/assets/projects/graphic-designs/wellness-pro-all-saints-day-social-media.png",
    liveUrl: "",
    featured: false,
  },
  // 10. ANSAP 58th Midyear Convention
  {
    id: 32,
    slug: "wellness-pro-ansap-58th-midyear-convention-social-media",
    category: "graphic-design",
    title: "ANSAP 58th Midyear Convention Social Graphic",
    description:
      "Promotional convention post design for ANSAP 58th Midyear Convention delegation held at Waterfront Cebu City.",
    tags: ["Graphic Design", "Event Branding", "Social Media Art"],
    image: "/assets/projects/graphic-designs/wellness-pro-ansap-58th-midyear-convention-social-media.png",
    liveUrl: "",
    featured: false,
  },
  // Remaining Graphic Design Works
  {
    id: 13,
    slug: "wellness-pro-18th-annual-scientific-meet",
    category: "graphic-design",
    title: "Wellness PRO - 18th Annual Scientific Meeting",
    description:
      "Official event branding and promotional graphic asset created for Wellness PRO Inc.'s participation in the 18th Annual Scientific Meeting.",
    tags: ["Graphic Design", "Event Branding", "Promotional Poster"],
    image: "/assets/projects/graphic-designs/wellness-pro-18th-annual-scientific-meeting-congress-poster.png",
    liveUrl: "",
    featured: true,
  },
  {
    id: 20,
    slug: "wellness-pro-blood-pressure-monitor",
    category: "graphic-design",
    title: "Blood Pressure Monitor Product Showcase",
    description:
      "Marketing collateral and product presentation layout emphasizing clinical accuracy and ergonomic medical device design.",
    tags: ["Graphic Design", "Product Catalog", "Healthcare UI"],
    image: "/assets/projects/graphic-designs/wellness-pro-and-blood-pressure-monitors-banner.jpg",
    liveUrl: "",
    featured: false,
  },
  {
    id: 21,
    slug: "wellness-pro-sinapi-chest-drain",
    category: "graphic-design",
    title: "Sinapi Chest Drain Medical Spec Sheet",
    description:
      "Technical product flyer and graphic layout detailing specialized hospital equipment functionality and safety features.",
    tags: ["Graphic Design", "Technical Flyer", "Medical Devices"],
    image: "/assets/projects/graphic-designs/wellness-pro-sinapi-chest-drain-medical-banner.jpg",
    liveUrl: "",
    featured: false,
  },
  {
    id: 22,
    slug: "wellness-pro-axis-500-mobile-operating",
    category: "graphic-design",
    title: "Axis 500 Mobile Operating Table Creative",
    description:
      "Promotional banner highlighting surgical equipment capabilities and ergonomic clinical advantages.",
    tags: ["Graphic Design", "Equipment Showcase", "Marketing Asset"],
    image: "/assets/projects/graphic-designs/wellness-pro-axis-500-mobile-operating-table-banner.jpg",
    liveUrl: "",
    featured: false,
  },
  {
    id: 23,
    slug: "wellness-pro-good-friday-social-media",
    category: "graphic-design",
    title: "Good Friday Corporate Social Media Art",
    description:
      "Holiday observance graphic creative designed for company social media channels and client engagement.",
    tags: ["Graphic Design", "Social Media Art", "Corporate Branding"],
    image: "/assets/projects/graphic-designs/wellness-pro-good-friday-social-media-post.png",
    liveUrl: "",
    featured: false,
  },
  {
    id: 24,
    slug: "wellness-pro-seca-787-medical-scale",
    category: "graphic-design",
    title: "Seca 787 Medical Column Scale Banner",
    description:
      "High-resolution product feature graphic created for digital catalogs and promotional medical displays.",
    tags: ["Graphic Design", "Catalog Design", "Medical Equipment"],
    image: "/assets/projects/graphic-designs/wellness-pro-seca-787-medical-scale-banner.png",
    liveUrl: "",
    featured: false,
  },
  {
    id: 25,
    slug: "john-mark-frias-graduation-portrait",
    category: "graphic-design",
    title: "John Mark Frias Graduation Portrait Layout",
    description:
      "Professional formal graduation photo edit and commemorative portfolio layout composition.",
    tags: ["Graphic Design", "Photo Retouching", "Branding Asset"],
    image: "/assets/projects/graphic-designs/john-mark-frias-graduation-portrait.png",
    liveUrl: "",
    featured: false,
  },
  {
    id: 27,
    slug: "wellness-pro-pafp-annual-convention-banner",
    category: "graphic-design",
    title: "PAFP 64th Annual Convention Booth Banner",
    description:
      "Official promotional booth banner and event collateral designed for Wellness PRO Inc. at the Philippine Academy of Family Physicians 64th Annual Convention.",
    tags: ["Graphic Design", "Event Branding", "Promotional Poster"],
    image: "/assets/projects/graphic-designs/wellness-pro-pafp-annual-convention-banner.png",
    liveUrl: "",
    featured: true,
  },
];