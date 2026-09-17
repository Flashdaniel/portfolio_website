export const featuredProjects = [
  {
    title: "Audiophile E-Commerce Platform",
    subtitle: "Full-Featured Audio Equipment Storefront & Checkout",
    description:
      "A high-performance audio equipment e-commerce application engineered with Next.js, React, Tailwind CSS, Radix UI primitives, and a Convex backend. Implements persistent multi-item cart state, responsive product catalog, server-rendered pages for low latency, and robust form validation for checkout.",
    highlights: [
      "Dynamic cart state with persistent localStorage synchronization",
      "Multi-step checkout validation handling shipping & payment methods",
      "Fast server-rendered pages and optimized image delivery",
      "Accessible UI primitives powered by Radix UI and Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "React", "TypeScript", "Convex", "Tailwind CSS", "Radix UI"],
    source: "https://github.com/Flashdaniel/hng-audiophile",
    visit: "https://bespoke-wisp-2d4be3.netlify.app/",
    id: 1,
  },
  {
    title: "Markdown Studio Pro",
    subtitle: "Real-Time Developer Markdown Workspace & Editor",
    description:
      "A desktop-grade web Markdown editor and document workspace built with React, Vite, Tailwind CSS, shadcn/ui, and CodeMirror. Delivers instant AST preview parsing, syntax highlighting, local document persistence, and multi-format document exporting (HTML and Markdown).",
    highlights: [
      "Synchronized split-pane editor with instantaneous live preview",
      "Embedded CodeMirror editor with markdown syntax highlighting",
      "Document state persistence with auto-save across sessions",
      "Clean dark/light UI tokens and accessible modal dialogs",
    ],
    image:
      "https://experimental-pink-v060lhrw57.edgeone.app/Screenshot%202025-12-31%20at%2014-05-33%20markdown.png",
    tags: ["React", "shadcn/ui", "Tailwind CSS", "Vite", "CodeMirror", "TypeScript"],
    source: "https://github.com/Flashdaniel",
    visit: "https://markdown-exa.netlify.app/",
    id: 2,
  },
  {
    title: "Bejamas Modern Storefront",
    subtitle: "Responsive E-Commerce Catalog with Slide-Out Cart",
    description:
      "A responsive e-commerce storefront engineered with React and Tailwind CSS. Features dynamic product filtering, category sorting, an interactive slide-out cart drawer with real-time price calculations, and an optimized mobile-first checkout flow.",
    highlights: [
      "Dynamic category filtering and price sorting mechanisms",
      "Interactive slide-out shopping cart drawer with live state",
      "Mobile-first responsive layout tested across screen viewports",
    ],
    image:
      "https://efficient-coral-joan02iger.edgeone.app/Screenshot%202025-12-31%20at%2014-16-19%20BEJAMAS_.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive UI"],
    source:
      "https://github.com/Flashdaniel/altschool-semester-2-assignment-3-bejamas_",
    visit: "https://bejamas-pro.netlify.app/",
    id: 3,
  },
];

// Backwards compatibility alias
export const projects = featuredProjects;

export const otherProjects = [
  {
    title: "TicketFlow Support Portal",
    category: "Support Operations",
    description:
      "A customer support ticket management application built with React. Enables users to create, categorize, update status, and track support requests with real-time UI state updates and resilient data handling.",
    tags: ["React", "State Management", "REST APIs", "Modern CSS"],
    source: "https://github.com/Flashdaniel/hng-ticket-app-react",
    visit: "https://hng-ticket-app-react.netlify.app/",
    id: 4,
  },
  {
    title: "Light Visual Product Experience",
    category: "Interface Engineering",
    description:
      "A product landing page engineered with semantic HTML5, modern CSS architecture, and smooth micro-interactions optimized for rapid load times and cross-browser consistency.",
    tags: ["JavaScript", "Modern CSS", "HTML5", "Performance"],
    source: "https://github.com/Flashdaniel/Light-visual-landing-page",
    visit: "https://flashdaniel.github.io/Light-visual-landing-page/",
    id: 5,
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

