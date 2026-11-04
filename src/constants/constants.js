export const featuredProjects = [
  {
    slug: "myrabbai",
    title: "myRabbAi",
    badge: "Professional Experience",
    badgeType: "commercial",
    company: "The Upskill Space",
    isProminent: true,
    description:
      "Commercial AI-powered CBT examination platform delivering personalized practice tests and automated scoring for Nigerian secondary students (JAMB, WAEC, NECO).",
    role: "Frontend Developer (The Upskill Space)",
    keyFeature:
      "Real-time CBT examination engine with client-side timer persistence, defensive offline caching, and responsive question-and-answer workflows.",
    tags: ["React", "TypeScript", "Next.js", "REST APIs", "Tailwind CSS"],
    visit: "https://myrabbai.com.ng/",
    source: "https://github.com/Flashdaniel",
    image:
      "/myrabbai.png",
    id: 1,
  },
  {
    slug: "interactive-learning-platform",
    title: "Interactive Learning Platform",
    badge: "Full-Stack EdTech",
    badgeType: "architecture",
    description:
      "Comprehensive digital courseware platform blending structured documentation curriculum with in-browser interactive coding sandboxes and multimedia learning.",
    role: "Frontend Engineer & UI Architect",
    keyFeature:
      "Dual Learner/Instructor dashboards with Role-Based Access Control (RBAC) and Fumadocs-powered visual lesson authoring.",
    tags: ["Next.js", "React", "TypeScript", "Fumadocs", "Supabase", "Zustand", "Tailwind CSS"],
    visit: "https://github.com/Flashdaniel",
    source: "https://github.com/Flashdaniel",
    image:
      "/tus-bootcamp.png",
    id: 2,
  },
  {
    slug: "campushq",
    title: "CampusHQ",
    badge: "SaaS Product Concept",
    badgeType: "saas",
    description:
      "Multi-tenant school operations ERP SaaS concept for academic record tracking, automated grade computation, and tuition fee billing portals.",
    role: "Product & Frontend Engineer",
    keyFeature:
      "Offline-resilient PWA architecture with Service Worker caching and IndexedDB sync for uninterrupted school operations during network blackouts.",
    tags: ["React", "TypeScript", "Vite", "Supabase", "PWA", "Tailwind CSS"],
    visit: "https://github.com/Flashdaniel",
    source: "https://github.com/Flashdaniel",
    image:
      "/campushq.png",
    id: 3,
  },
  {
    slug: "audiophile",
    title: "Audiophile E-Commerce",
    badge: "Modern E-Commerce",
    badgeType: "ecommerce",
    description:
      "Production-grade high-fidelity audio equipment storefront engineered with reactive state management, product showcases, and a multi-step checkout flow.",
    role: "Frontend Developer",
    keyFeature:
      "Real-time cart state synchronization with Convex database subscriptions and accessible multi-step form-validated checkout.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Convex", "Radix UI"],
    visit: "https://bespoke-wisp-2d4be3.netlify.app/",
    source: "https://github.com/Flashdaniel/hng-audiophile",
    image:
      "/audiophile.png",
    id: 4,
  },
];

// Backwards compatibility alias
export const projects = featuredProjects;

export const otherProjects = [
  {
    title: "Markdown Studio Pro",
    category: "Developer Workspace",
    description:
      "A desktop-grade web Markdown editor and document workspace built with React, Vite, Tailwind CSS, shadcn/ui, and CodeMirror. Delivers instant AST preview parsing, syntax highlighting, local document persistence, and multi-format document exporting.",
    tags: ["React", "shadcn/ui", "Tailwind CSS", "Vite", "CodeMirror"],
    source: "https://github.com/Flashdaniel",
    visit: "https://markdown-exa.netlify.app/",
    id: 5,
  },
  {
    title: "Bejamas Modern Storefront",
    category: "Storefront UI",
    description:
      "A responsive e-commerce storefront engineered with React and Tailwind CSS. Features dynamic product filtering, category sorting, an interactive slide-out cart drawer with real-time price calculations, and an optimized mobile-first checkout flow.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive UI"],
    source: "https://github.com/Flashdaniel/altschool-semester-2-assignment-3-bejamas_",
    visit: "https://bejamas-pro.netlify.app/",
    id: 6,
  },
  {
    title: "TicketFlow Support Portal",
    category: "Support Operations",
    description:
      "A customer support ticket management application built with React. Enables users to create, categorize, update status, and track support requests with real-time UI state updates and resilient data handling.",
    tags: ["React", "State Management", "REST APIs", "Modern CSS"],
    source: "https://github.com/Flashdaniel/hng-ticket-app-react",
    visit: "https://hng-ticket-app-react.netlify.app/",
    id: 7,
  },
  {
    title: "Light Visual Product Experience",
    category: "Interface Engineering",
    description:
      "A product landing page engineered with semantic HTML5, modern CSS architecture, and smooth micro-interactions optimized for rapid load times and cross-browser consistency.",
    tags: ["JavaScript", "Modern CSS", "HTML5", "Performance"],
    source: "https://github.com/Flashdaniel/Light-visual-landing-page",
    visit: "https://flashdaniel.github.io/Light-visual-landing-page/",
    id: 8,
  },
];

export const educationData = [
  {
    institution: "University of Nigeria, Nsukka",
    credential: "B.Eng. in Agricultural & Bioresources Engineering",
    period: "Undergraduate Degree",
    badge: "Engineering Degree",
    description:
      "Built rigorous foundations in engineering mathematics, computational modeling, systems analysis, and analytical problem-solving. This analytical background anchors my systems-oriented approach to software engineering.",
    focusAreas: ["Engineering Mathematics", "Systems Modeling", "Data Analysis", "Applied Engineering Principles"],
  },
  {
    institution: "Harvard University",
    credential: "CS50: Introduction to Computer Science",
    period: "Online Curriculum",
    badge: "Computer Science Foundation",
    description:
      "Completed Harvard's flagship computer science program, developing deep comprehension of core CS fundamentals including algorithms, data structures, memory allocation, and algorithmic complexity.",
    focusAreas: ["C", "Python", "Data Structures", "Memory Management", "Algorithms & Big O"],
  },
  {
    institution: "AltSchool Africa",
    credential: "Diploma in Software Engineering (Frontend Specialization)",
    period: "Specialized Training",
    badge: "Software Engineering Diploma",
    description:
      "Completed an intensive, practical frontend software engineering program covering modern JavaScript (ES6+), React component architecture, state management patterns, web accessibility (WCAG), and agile workflows.",
    focusAreas: ["Modern React", "TypeScript", "State Management", "Web Accessibility", "Frontend Tooling"],
  },
];

export const TimeLineData = [
  {
    year: "Foundation",
    text: "Studied Agricultural & Bioresources Engineering at University of Nigeria, establishing strong mathematical, analytical, and problem-solving fundamentals.",
  },
  {
    year: "CS50",
    text: "Completed Harvard University's CS50, building rigorous grounding in computer science principles, algorithms, data structures, and memory management.",
  },
  {
    year: "Frontend Focus",
    text: "Committed fully to frontend engineering, mastering modern JavaScript (ES6+), React, component-driven UI architecture, and design system integration.",
  },
  {
    year: "AltSchool",
    text: "Earned Diploma in Software Engineering (Frontend) at AltSchool Africa with hands-on production builds using React, TypeScript, and modern frontend tooling.",
  },
  {
    year: "Present",
    text: "Building production-quality web applications with React, Next.js, TypeScript, Zustand, and Tailwind CSS. Actively available for remote and hybrid engineering roles.",
  },
];

