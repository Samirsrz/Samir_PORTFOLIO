// ---------------------------------------------------------------------------
// Add, remove, or edit projects here. Each object is one project card.
// `roles` = the distinct user roles the system serves (leave empty to hide).
// `links.live/client/server` = omit any you don't have (button just won't render).
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  roles?: string[];
  features?: string[];
  tech: string[];
  links: {
    live?: string;
    client?: string;
    server?: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
  slug: "fixflow",
  name: "FixFlow",
  tagline: "Community maintenance management platform",
  description: [
    "A full-stack community maintenance platform that connects residents, property managers, and maintenance workers. It streamlines the entire maintenance process, from reporting issues with photos and assigning workers to tracking repairs and confirming completed jobs.",
    "Residents can report issues, track progress, chat with assigned workers, and pay monthly maintenance invoices. Managers can prioritize requests, assign workers, and generate invoices, while workers manage assigned jobs and submit progress updates. Admins oversee users, communities, categories, and platform activity."
  ],
  roles: ["Resident", "Manager", "Worker", "Admin"],
  features: [
    "Maintenance issue reporting with photo uploads",
    "Worker assignment and priority management",
    "Issue lifecycle and repair tracking",
    "Resident-worker chat",
    "Invoice generation and Stripe payments",
    "Role-based access control",
    "Email OTP registration and Google OAuth",
    "Admin user and community management"
  ],
  tech: [
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "TanStack Query",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma ORM",
    "Redis",
    "Stripe",
    "Cloudinary",
    "JWT Auth",
    "Google OAuth"
  ],
  links: {
    live: "https://fix-flow-frontend-a7-l2.vercel.app/",
    client: "https://github.com/Samirsrz/fix-flow-frontend-A7-L2",
    server: "https://github.com/Samirsrz/fix-flow_A6_L2"
  },
  featured: true,
},
  {
    slug: "renthub",
    name: "RentHub",
    tagline: "Property rental marketplace",
    description: [
      "A full-stack rental marketplace with a Node.js/Express backend, Prisma data models, and a Next.js App Router frontend — built around three roles that all need different access to the same listings.",
      "Tenants browse listings, submit rental requests, track status, and pay via Stripe. Landlords manage properties and approve or reject requests in real time. Admins moderate the whole platform — listings, rentals, payments, and user bans — from one dashboard.",
    ],
    roles: ["Tenant", "Landlord", "Admin"],
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "JWT Auth",
      "Stripe",
    ],
    links: {
      live: "https://a-5-l2-property-management-opal.vercel.app/",
      client: "https://github.com/Samirsrz/A-5-L2_property_management",
      server: "https://github.com/Samirsrz/Level2_A4",
    },
    featured: true,
  },
  {
    slug: "next-hire",
    name: "Next-Hire",
    tagline: "AI-assisted job portal",
    description: [
      "A job portal that layers AI-powered recommendations on top of the usual search-and-apply flow — surfacing roles based on a candidate's profile and preferences instead of just keyword matches.",
      "Job seekers can filter by salary, location, and type, and upload a resume directly to apply.",
    ],
    features: ["AI job recommendations", "Salary/location/type filters", "Direct resume upload"],
    tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
    links: {
      live: "https://innovative-codex.web.app/?lang=en",
      client: "https://github.com/Samirsrz/Job-Hunting",
      server: "https://github.com/Samirsrz/Job-Hunting-server",
    },
    featured: true,
  },
  {
    slug: "blood-donation",
    name: "Blood Donation Management System",
    tagline: "Donor coordination platform",
    description: [
      "A platform coordinating three sides of a blood drive — admins, volunteers, and donors — each with a dashboard scoped to what they're responsible for.",
      "Donors are searchable by district, user status is sortable (active/blocked), and admins manage both platform roles and an in-app blog.",
    ],
    roles: ["Admin", "Volunteer", "Donor"],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
    links: {
      live: "https://blood-donation-45cc0.web.app/",
      client: "https://github.com/Samirsrz/blood-donation-client",
      server: "https://github.com/Samirsrz/blood-donation-server-main",
    },
    featured: true,
  },
];

// Research / ML work — shown in its own strip, no live/repo links.
export const researchProjects: Project[] = [
  {
    slug: "bangla-hateful-meme",
    name: "Bangla Hateful Meme Classification & Mitigation",
    tagline: "Undergraduate ML research project",
    description: [
      "A system to detect hateful content in Bangla memes across both text and image, then mitigate it — neutralizing hateful text, masking hateful visual elements, or both — to produce a safer version of the meme.",
      "Covered the full pipeline: data preprocessing, feature extraction, model training, evaluation, and result analysis.",
    ],
    features: [
      "Multimodal detection (text + image)",
      "Automated text neutralization",
      "Visual element masking",
    ],
    tech: ["Python", "NLP", "Computer Vision", "Model Training & Evaluation"],
    links: {},
  },
];
