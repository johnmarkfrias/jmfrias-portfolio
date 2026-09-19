// src/data/projects.js

import ashfordImg from "/public/assets/ashford.png";
import hannahMellulImg from "/public/assets/hannah-mellul.png";
import fnqConnectImg from "/public/assets/fnq-connect.png";
import sulcaImg from "/public/assets/sulca.png";
import cobellImg from "/public/assets/cobell.png";
import wellnessProImg from "/public/assets/wellness-pro.png";

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "website", label: "Website Development" },
  { id: "ui-ux", label: "UI / UX Design" },
  { id: "graphic-design", label: "Graphic Design" },
];

export const projects = [
  {
    id: 1,
    slug: "ashford-homes-ohio",
    category: "website",
    title: "Ashford Homes Ohio",
    description:
      "A property showcase and custom home builder website featuring rich floor plans, community details, and client lead generation.",
    tags: ["Web Development", "Responsive Layout", "Real Estate UI"],
    image: ashfordImg,
    liveUrl: "https://www.ashfordhomesohio.com/",
    featured: true,
  },
  {
    id: 2,
    slug: "hanna-mellul",
    category: "ui-ux",
    title: "Hanna Mellul",
    description:
      "An elegant personal brand and portfolio platform designed to present creative work with modern typography and fluid interactions.",
    tags: ["Web Development", "UI/UX Design", "Responsive Layout"],
    image: hannahMellulImg,
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
    tags: ["Web Development", "Accessibility", "Tailwind CSS"],
    image: fnqConnectImg,
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
    tags: ["Front-End Development", "UI/UX", "Brand Experience"],
    image: sulcaImg,
    liveUrl: "https://sulcaaesthetics.com/",
    featured: true,
  },
  {
    id: 5,
    slug: "cobell-interiors",
    category: "ui-ux",
    title: "Cobell Interiors",
    description:
      "A sophisticated interior design showcase website highlighting premium residential and commercial spaces with seamless visual storytelling.",
    tags: ["WordPress", "Responsive Web Design", "UI/UX"],
    image: cobellImg,
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
    tags: ["Web Development", "Healthcare UI", "Responsive Design"],
    image: wellnessProImg,
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
    tags: ["Web Development", "WordPress", "Custom Design"],
    image: ashfordImg,
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
    tags: ["Web Development", "UI/UX", "Service Platform"],
    image: fnqConnectImg,
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
    tags: ["Web Development", "Corporate UI", "Strata Management"],
    image: cobellImg,
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
    tags: ["Web Development", "Accessibility Tech", "UI/UX"],
    image: wellnessProImg,
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
    tags: ["Web Development", "Creative Agency", "UI/UX"],
    image: hannahMellulImg,
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
    tags: ["Web Development", "Industrial UI", "Catalog Design"],
    image: wellnessProImg,
    liveUrl: "https://saturnpackaging.devstudio.work/", // Note: if you want to exclude devstudio entirely, you can remove this entry. Keeping it as it's requested to show live URLs.
    featured: false,
  },
];