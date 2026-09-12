// src/data/projects.js

import ashfordImg from "../assets/ashford.png";
import hannahMellulImg from "../assets/hannah-mellul.png";
import fnqConnectImg from "../assets/fnq-connect.png";
import sulcaImg from "../assets/sulca.png";
import cobellImg from "../assets/cobell.png";
import wellnessProImg from "../assets/wellness-pro.png";

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
];