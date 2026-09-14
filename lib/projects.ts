// Project data — edit copy, links and screenshot labels here.
// TODO: replace githubUrl values with the actual repository URLs for each project.
export type Project = {
  slug: string;
  title: string;
  short: string;
  category: string;
  type: "Full-Stack" | "Frontend";
  year: string;
  timeline: string;
  tags: string[];
  tech: string[];
  description: string;
  overview: string;
  problem: string;
  role: string;
  features: string[];
  process: string[];
  liveUrl: string;
  githubUrl: string;
  screenshots: { label: string; src?: string }[];
};

export const projects: Project[] = [
  {
    slug: "crochet-ecommerce",
    title: "Crochet E-commerce Website",
    short: "Mojo's Place",
    category: "E-commerce Website",
    type: "Full-Stack",
    year: "2025",
    timeline: "6 Weeks",
    tags: ["Full-Stack", "E-commerce", "Real Project"],
    tech: ["Next.js", "Tailwind CSS", "Appwrite"],
    description:
      "A full-stack e-commerce website for a crochet business, including product browsing, ordering, backend functionality, database integration, and an admin dashboard.",
    overview:
      "A complete online store for a handmade crochet business — from the customer-facing storefront with product browsing and ordering, to an admin dashboard for managing products and orders, all backed by a real database and authentication.",
    problem:
      "The business needed a professional online presence to showcase and sell handmade crochet products, with a straightforward way to manage products and orders without any technical overhead.",
    role: "Designed and developed the entire application end-to-end: the frontend UI, backend integration with Appwrite, database structure, authentication, admin dashboard, and deployment.",
    features: [
      "Product catalog with categories and product detail pages",
      "Shopping cart and complete order flow",
      "Admin dashboard for managing products and orders",
      "Backend, database and authentication with Appwrite",
      "Fully responsive, mobile-first design",
      "Deployed to Vercel",
    ],
    process: [
      "Planned the data model and core user flows: browsing, ordering, and admin management",
      "Built the storefront UI with Next.js and Tailwind CSS",
      "Integrated Appwrite for database, authentication, and storage",
      "Implemented the admin dashboard for store management",
      "Tested responsive behaviour across devices and deployed to Vercel",
    ],
    liveUrl: "https://mojos-place-ndhowkvyr-alancodes1.vercel.app/",
    githubUrl: "https://github.com/Alani158",
    screenshots: [
      {
        label: "Homepage / Hero",
        src: "/screenshots/crochet-ecommerce/Crochet-Homepage.webp",
      },
      {
        label: "Product catalog",
        src: "/screenshots/crochet-ecommerce/Crochet_Product.webp",
      },
      {
        label: "Product detail page",
        src: "/screenshots/crochet-ecommerce/Crochet_Product_detail.webp",
      },
      {
        label: "Admin dashboard",
        src: "/screenshots/crochet-ecommerce/Crochet_admin_dashboard.webp",
      },
      {
        label: "Mobile view",
        src: "/screenshots/crochet-ecommerce/Crochet_mobile.webp",
      },
    ],
  },
  {
    slug: "newsletter-app",
    title: "Newsletter Web Application",
    short: "Newsletter",
    category: "Web Application",
    type: "Full-Stack",
    year: "2024",
    timeline: "4 Weeks",
    tags: ["Full-Stack", "Web App", "Real Project"],
    tech: ["Next.js", "Prisma", "MySQL"],
    description:
      "A responsive newsletter platform with user registration, database integration, and reusable frontend components.",
    overview:
      "A full-stack newsletter platform where users can register, subscribe, and manage their subscriptions — built with a Next.js frontend, a Prisma schema, and a MySQL database, with a reusable component system throughout the UI.",
    problem:
      "The goal was a clean, reliable newsletter product backed by a real database: users needed a smooth registration and subscription experience, and the codebase needed a maintainable, reusable component structure.",
    role: "Built the full application: Next.js frontend, Prisma schema and MySQL database, user registration and subscription flows, and the reusable component system.",
    features: [
      "User registration and authentication",
      "Subscription management",
      "Database integration with Prisma and MySQL",
      "Reusable, composable UI components",
      "Fully responsive layout across devices",
      "Deployed to Netlify",
    ],
    process: [
      "Defined the data schema with Prisma and set up the MySQL database",
      "Built the user registration and subscription flows",
      "Created a reusable component library for the UI",
      "Connected the frontend to the database via API routes",
      "Polished the responsive layout and deployed to Netlify",
    ],
    liveUrl: "https://news-letter-alani.netlify.app/",
    githubUrl: "https://github.com/Alani158",
    screenshots: [
      {
        label: "Homepage / Hero",
        src: "/screenshots/Newsletter/newsletter_homePage.webp",
      },
      {
        label: "Registration flow",
        src: "/screenshots/Newsletter/newsletter_Registration.webp",
      },
      {
        label: "Subscription page",
        src: "/screenshots/Newsletter/newsletter_subscribe.webp",
      },
      {
        label: "Mobile view",
        src: "/screenshots/Newsletter/newsletter_mobile.webp",
      },
    ],
  },
  {
    slug: "noir-landing",
    title: "Next.js Landing Page Website",
    short: "NOIR",
    category: "Landing Page",
    type: "Frontend",
    year: "2024",
    timeline: "2 Weeks",
    tags: ["Frontend", "Landing Page", "Real Project"],
    tech: ["Next.js", "Tailwind CSS"],
    description:
      "A responsive landing page focused on clean UI, product presentation, navigation, and user experience.",
    overview:
      "A sharp, minimal landing page built to present a product clearly — with a strong hero, considered product presentation sections, smooth navigation, and a fully responsive layout.",
    problem:
      "The project needed a landing page with a strong visual hierarchy: something that presents the product clearly, guides visitors through the content, and feels polished on every screen size.",
    role: "Designed and developed the landing page from scratch with Next.js and Tailwind CSS, focusing on layout, typography, spacing, and responsiveness.",
    features: [
      "Clean, minimal hero section",
      "Product presentation sections",
      "Smooth navigation and section flow",
      "Fully responsive design",
      "Performance-focused build",
      "Deployed to Netlify",
    ],
    process: [
      "Defined the content structure and visual direction",
      "Built each section with a utility-first Tailwind CSS approach",
      "Refined typography, spacing, and visual hierarchy",
      "Tested responsiveness across breakpoints and deployed to Netlify",
    ],
    liveUrl: "https://noir-landing.netlify.app/",
    githubUrl: "https://github.com/Alani158",
    screenshots: [
      { label: "Hero section", src: "/screenshots/Noir/Landingpage_hero.webp" },
      {
        label: "Product presentation",
        src: "/screenshots/Noir/LandingPageproduct-section.webp",
      },
      {
        label: "Feature sections",
        src: "/screenshots/Noir/LandingPage-feature.webp",
      },
      {
        label: "Mobile view",
        src: "/screenshots/Noir/Landing-page_mobile.webp",
      },
    ],
  },
];
