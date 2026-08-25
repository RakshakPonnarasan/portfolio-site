export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  metadata: string[];
  slug: string;
  heroImage: string;
  year: string;
  platform: string;
  status: string;
}


export const projects: Project[] = [
  {
    id: "payano",
    number: "01",
    title: "Payano",
    category: "Campus Mobility & Ride-Sharing",
    description:
      "A campus ride-sharing experience helping students find, match, and coordinate rides with less friction.",
    metadata: [
      "UI/UX Design",
      "Mobile Experience",
      "Interaction Design",
    ],
    slug: "payano",
    heroImage: "/projects/payano/hero.png",
    year: "2026",
    platform: "Mobile — iOS",
    status: "Completed",
  },

  {
    id: "framehouse",
    number: "02",
    title: "FrameHouse",
    category: "Creator Studio Discovery & Booking",
    description:
      "A creator-first platform for discovering, comparing, and booking production studios through one guided experience.",
    metadata: [
      "UI/UX Design",
      "User Research",
      "Web Platform",
    ],
    slug: "framehouse",
    heroImage: "/projects/framehouse/hero.png",
    year: "2026",
    platform: "Web",
    status: "Concept — Selected Work",
  },

  {
    id: "buildtrack",
    number: "03",
    title: "BuildTrack",
    category: "Game Development Workflow",
    description:
      "A workflow platform connecting game builds, features, and playtest feedback for faster, clearer team iteration.",
    metadata: [
      "UI/UX Design",
      "Systems Thinking",
      "Web Platform",
    ],
    slug: "buildtrack",
    heroImage: "/projects/buildtrack/hero.png",
    year: "2026",
    platform: "Web",
    status: "Concept — Selected Work",
  },

  {
    id: "syntri",
    number: "04",
    title: "Syntri",
    category: "Digital Workflow & Product Experience",
    description:
      "An AI-powered workspace connecting projects, tasks, knowledge, and assistance into one focused product workflow.",
    metadata: [
      "Product Design",
      "UX Design",
      "Web Platform",
    ],
    slug: "syntri",
    heroImage: "/projects/syntri/hero.png",
    year: "2026",
    platform: "Web",
    status: "Concept Project",
  },

  {
    id: "terrawild",
    number: "05",
    title: "TerraWild",
    category: "Visitor Experience & Discovery",
    description:
      "A visitor-focused mobile experience making destination exploration, discovery, and navigation clearer through experience-led interactions.",
    metadata: [
      "UI/UX Design",
      "Mobile Experience",
      "Experience Design",
    ],
    slug: "terrawild",
    heroImage: "/projects/terrawild/hero.png",
    year: "2026",
    platform: "Mobile",
    status: "Concept Project",
  },

  {
    id: "morpheus-ux",
    number: "06",
    title: "Morpheus UX",
    category: "UX Design & Digital Product Studio",
    description:
      "A digital studio concept exploring how focused product and UX capabilities can become a clear, distinctive experience.",
    metadata: [
      "Product Design",
      "UX Strategy",
      "Visual Design",
    ],
    slug: "morpheus-ux",
    heroImage: "/projects/morpheus-ux/hero.png",
    year: "2025",
    platform: "Web",
    status: "Concept Project",
  },

  {
    id: "crimson-feast",
    number: "07",
    title: "Crimson Feast",
    category: "Food & Dining Experience",
    description:
      "A dining experience helping users discover food, explore menus, and choose dishes through a structured interface.",
    metadata: [
      "UI/UX Design",
      "Mobile Experience",
      "Visual Design",
    ],
    slug: "crimson-feast",
    heroImage: "/projects/crimson-feast/hero.png",
    year: "2025",
    platform: "Mobile",
    status: "Concept Project",
  },
];


export function getProject(id: string): Project {
  const project = projects.find(
    (item) => item.id === id,
  );

  if (!project) {
    throw new Error(
      `Project with id "${id}" was not found.`,
    );
  }

  return project;
}


export const designApproach = [
  {
    step: "01",
    title: "Understand",
    description:
      "Identify user needs, product constraints, and the core problem before moving into interface design.",
  },
  {
    step: "02",
    title: "Structure",
    description:
      "Turn complex requirements into clear flows, information architecture, and interaction patterns.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Translate those structures into polished, consistent interfaces with strong visual hierarchy.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "Test decisions, resolve friction, and refine the experience until the product feels coherent.",
  },
];


export const capabilities = {
  ux: {
    title: "UX",
    items: [
      "User research",
      "User flows",
      "Information architecture",
      "Wireframing",
      "Interaction design",
    ],
  },

  ui: {
    title: "UI",
    items: [
      "Visual hierarchy",
      "Typography",
      "Responsive interfaces",
      "Design systems",
      "High-fidelity UI",
    ],
  },

  product: {
    title: "Product Thinking",
    items: [
      "Problem framing",
      "Feature definition",
      "End-to-end experiences",
      "Prototyping",
    ],
  },
};