export const caseStudies = {
  myrabbai: {
    slug: "myrabbai",
    title: "myRabbAi — AI-Powered CBT & Exam Preparation Platform",
    badge: "Professional Experience",
    badgeType: "commercial",
    company: "The Upskill Space",
    timeline: "2026 – Present",
    role: "Frontend Developer",
    overview:
      "myRabbAi is a commercial educational technology web platform engineered to help Nigerian secondary school students prepare for high-stakes national computerized examinations, including JAMB (UTME), WAEC, and NECO. The platform delivers timed practice test simulations, instant scoring, subject review modules, and structured study assistance.",
    problem:
      "Over 1.5 million students sit for computerized examinations (CBT) annually in Nigeria, yet most practice resources are either desktop-only, fragile on unstable 3G/EDGE mobile networks, or fail to simulate realistic exam timing constraints. A common frustration among students is losing their entire exam progress midway through a test due to network drops or accidental browser reloads. myRabbAi solves this by providing a resilient, mobile-first, and zero-latency CBT examination experience.",
    myRole:
      "As a Frontend Developer at The Upskill Space, I contributed to the production frontend implementation. My core responsibilities included translating Figma designs and multi-step examination flows into responsive React and Next.js interfaces, implementing a fault-tolerant client-side test timer and navigation state machine, connecting frontend views to backend REST APIs, optimizing mobile-first layouts for varied screen resolutions, and conducting cross-browser testing across desktop and mobile devices.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "REST APIs",
      "Tailwind CSS",
      "Local Storage API",
      "Git & GitHub",
      "Figma",
    ],
    architecture: [
      {
        title: "Defensive Client-Side State Partitioning",
        description:
          "Separated volatile exam state (active question index, selected choices, remaining elapsed time) from asynchronous network requests. All user interactions are written to a localized state machine and synchronized with localStorage on every choice selection, guaranteeing that page reloads or intermittent connectivity drops never result in lost test progress.",
      },
      {
        title: "Pre-Cached Session Hydration",
        description:
          "Engineered the question runner to prefetch and locally cache the entire test question bank upon test initialization. This decouples student interactions during timed testing from network latency, providing instantaneous question navigation even under erratic 3G connections.",
      },
      {
        title: "Component Error Boundary Isolation",
        description:
          "Wrapped complex question rendering components in React Error Boundaries to prevent unexpected data formatting issues (such as mathematical symbols or scientific diagrams) from crashing the entire examination session.",
      },
    ],
    features: [
      {
        name: "Timed CBT Exam Engine",
        detail:
          "Realistic countdown timer with automated submission at time expiration, visual time warnings, and background synchronization.",
      },
      {
        name: "Question Navigator Grid",
        detail:
          "Interactive question matrix providing immediate visual status for answered, unanswered, and flagged questions with instant jump navigation.",
      },
      {
        name: "Performance & Subject Analytics",
        detail:
          "Instant post-test performance summaries detailing percentage scores, subject breakdowns, and review mode for correct and incorrect answers.",
      },
      {
        name: "Mobile-First Responsive Layout",
        detail:
          "Touch-optimized controls, clear typography, and responsive layouts calibrated for low-cost Android smartphones and desktop browsers.",
      },
    ],
    challenges: [
      {
        challenge: "Timer Drift & Accidental Page Refreshes",
        description:
          "Standard JavaScript setInterval timers drift over time when browser tabs lose focus or devices throttle background processes. Furthermore, accidental pull-to-refresh gestures on mobile devices could terminate ongoing student examinations.",
      },
      {
        challenge: "Inconsistent Formula & Image Asset Delivery",
        description:
          "Students testing on low-bandwidth connections experienced delayed rendering of scientific diagrams, causing significant Cumulative Layout Shift (CLS) during timed tests.",
      },
    ],
    solutions: [
      {
        challengeRef: "Timer Drift & Accidental Page Refreshes",
        solution:
          "Replaced naive setInterval countdown ticks with a timestamp-anchored timer that computes remaining time against targetEndTime derived from performance.now() and Date.now(). Backed the state with localStorage and added beforeunload confirmation dialogs to prevent accidental navigation away from an active test.",
      },
      {
        challengeRef: "Inconsistent Formula & Image Asset Delivery",
        solution:
          "Implemented CSS aspect-ratio placeholders for all question diagrams to reserve layout geometry prior to image load. Preloaded first-tier question assets during the exam countdown sequence to eliminate layout shifting during active answering.",
      },
    ],
    result:
      "Successfully launched into production at myrabbai.com.ng. Delivered a resilient, mobile-optimized test practice experience that operates reliably across modern web browsers without exam session losses during testing. (No unverified metrics claimed).",
    lessonsLearned:
      "When building web applications for emerging market environments, network availability cannot be treated as a guarantee. Designing for offline-first resiliency and defensive client caching transforms user trust in critical workflows like academic examinations.",
    links: {
      liveDemo: "https://myrabbai.com.ng/",
      github: "https://github.com/Flashdaniel",
    },
  },

  "interactive-learning-platform": {
    slug: "interactive-learning-platform",
    title: "Interactive Learning Platform — Courseware & Code Sandbox Engine",
    badge: "Full-Stack EdTech Architecture",
    badgeType: "architecture",
    company: "Engineering Project",
    timeline: "2025",
    role: "Frontend Engineer & UI Architect",
    overview:
      "A comprehensive modern digital courseware platform that unites structured technical curriculum documentation with in-browser interactive coding sandboxes, visual lesson authoring, and multimedia learning modules.",
    problem:
      "Technical education platforms typically isolate theory from practice: students are forced to constantly switch between external documentation, code editors, and video streaming sites. At the same time, technical instructors lack streamlined tools to author rich, structured curriculum that embeds runnable code samples alongside multimedia lectures.",
    myRole:
      "As Frontend Engineer & UI Architect, I engineered the application from ground up using Next.js, React, and TypeScript. I integrated Fumadocs to handle MDX documentation processing and hierarchical curriculum generation, built a synchronized split-pane lesson player with embedded code editors, established dual role-based dashboards (Learner & Instructor) with Supabase Auth, and orchestrated cross-route state with Zustand.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Fumadocs",
      "Supabase",
      "Zustand",
      "Tailwind CSS",
      "CodeMirror",
    ],
    architecture: [
      {
        title: "Hybrid Static Documentation & Dynamic Client State",
        description:
          "Combined static MDX curriculum generation via Fumadocs for ultra-fast load times and SEO with dynamic client-side hydration for personalized learner progress, bookmarks, and code scratchpads.",
      },
      {
        title: "Zustand Slice Architecture for Performance",
        description:
          "Decoupled fast-moving editor keystroke buffers from top-level application layout states using isolated Zustand stores, eliminating costly unnecessary re-renders during active code typing.",
      },
      {
        title: "Role-Based Access Control (RBAC) via Supabase",
        description:
          "Enforced strict route guards and UI state controls through Supabase session data, cleanly partitioning instructor authoring suites from learner progress dashboards.",
      },
    ],
    features: [
      {
        name: "Split-Pane Course Viewer",
        detail:
          "Synchronized multi-pane layout featuring structured lesson guides, multimedia video streams, and an interactive coding sandbox.",
      },
      {
        name: "Fumadocs Documentation Engine",
        detail:
          "Hierarchical, searchable technical curriculum driven by typed MDX files with syntax-highlighted code snippets and callout components.",
      },
      {
        name: "Visual Lesson Authoring",
        detail:
          "Comprehensive editor allowing course creators to publish formatted lessons, embed practice problems, and organize modules.",
      },
      {
        name: "Learner & Instructor Dashboards",
        detail:
          "Granular role-specific portals showing active student course completion metrics and instructor content management tools.",
      },
    ],
    challenges: [
      {
        challenge: "Main-Thread Blocking with Heavy Editor Bundles",
        description:
          "Importing full-featured in-browser code editor components inflated initial JavaScript bundle size and noticeably increased Total Blocking Time (TBT) on slower devices.",
      },
      {
        challenge: "Multi-Widget State Synchronization",
        description:
          "Coordinating video playback progress, interactive code execution results, and checklist completion across split viewports without triggering cascading render cascades.",
      },
    ],
    solutions: [
      {
        challengeRef: "Main-Thread Blocking with Heavy Editor Bundles",
        solution:
          "Applied Next.js dynamic code splitting (`next/dynamic` with `ssr: false`) to defer editor loading until the sandbox view is requested, keeping initial page load lightweight and responsive.",
      },
      {
        challengeRef: "Multi-Widget State Synchronization",
        solution:
          "Constructed localized, subscriber-specific Zustand store selectors so each widget re-renders only when its specific slice of state changes.",
      },
    ],
    result:
      "Engineered a production-ready, full-stack educational platform architecture demonstrating end-to-end technical mastery across Next.js, Fumadocs, Zustand, and Supabase. (No unverified metrics claimed).",
    lessonsLearned:
      "Fumadocs offers unmatched developer ergonomics for documentation-driven courseware. Strict separation of static server-rendered content from interactive client state is essential for maintaining snappy performance in complex web applications.",
    links: {
      liveDemo: "https://github.com/Flashdaniel",
      github: "https://github.com/Flashdaniel",
    },
  },

  campushq: {
    slug: "campushq",
    title: "CampusHQ — School Operations & Academic ERP SaaS Concept",
    badge: "SaaS Product Concept",
    badgeType: "saas",
    company: "Product Concept",
    timeline: "2025",
    role: "Product & Frontend Engineer",
    overview:
      "CampusHQ is a multi-tenant educational operations SaaS concept engineered to digitize administrative workflows, academic grade tracking, student attendance, tuition fee ledgers, and parent-teacher communication for primary and secondary schools.",
    problem:
      "Educational institutions in developing regions frequently struggle with fragmented paper ledgers and disconnected spreadsheets. Existing enterprise school management software requires reliable high-speed broadband—meaning daily operations like morning attendance, exam score entry, and tuition receipt generation grind to a halt during internet blackouts.",
    myRole:
      "As Product & Frontend Engineer, I conceptualized and developed the complete frontend architecture using React, TypeScript, and Vite with Tailwind CSS. I structured four dedicated role-based portals (Administrators, Teachers, Students, Parents), designed offline-first caching mechanisms using Service Workers and IndexedDB, and implemented academic grade computation algorithms.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PWA",
      "Service Workers",
      "IndexedDB",
      "Tailwind CSS",
    ],
    architecture: [
      {
        title: "Offline-First Data Synchronization",
        description:
          "Constructed an offline mutation queue backed by IndexedDB. When staff enter grades or mark attendance without an active connection, mutations are written locally and replayed sequentially to Supabase upon network re-establishment.",
      },
      {
        title: "PWA Service Worker Caching Strategy",
        description:
          "Employed Stale-While-Revalidate caching for static application assets and Network-First-with-Cache-Fallback for institutional records, ensuring instant application boot times even completely offline.",
      },
      {
        title: "Multi-Role Dashboard Partitioning",
        description:
          "Modularized views around strict role permission sets, preventing unauthorized access across student academic records, teacher grading books, and administrative billing ledgers.",
      },
    ],
    features: [
      {
        name: "Four Role-Based Portals",
        detail:
          "Distinct interfaces tailored for School Administrators, Teachers, Students, and Parents with appropriate permission boundaries.",
      },
      {
        name: "Academic Results & Transcripts",
        detail:
          "Automated term grade calculation, weighted subject averages, and formatted printable report cards.",
      },
      {
        name: "Tuition & Fee Management",
        detail:
          "Financial ledger displaying invoices, recorded installments, outstanding balances, and receipt histories.",
      },
      {
        name: "Offline PWA Resilience",
        detail:
          "Complete offline operational capability with clear visual sync status indicators and automatic background reconciliation.",
      },
    ],
    challenges: [
      {
        challenge: "Offline Mutation Conflicts & Queue Ordering",
        description:
          "Handling data integrity when multiple records are entered or updated while offline, ensuring network reconciliation does not overwrite newer changes or corrupt audit trails.",
      },
      {
        challenge: "Dense Data Tables on Mobile Screens",
        description:
          "Presenting multi-column grading rosters, attendance sheets, and financial records cleanly across narrow smartphone viewports.",
      },
    ],
    solutions: [
      {
        challengeRef: "Offline Mutation Conflicts & Queue Ordering",
        solution:
          "Implemented timestamped mutation envelopes with client-generated UUIDs stored in an IndexedDB outbox. On reconnect, the synchronization engine replays actions in chronological order with optimistic rollback handling.",
      },
      {
        challengeRef: "Dense Data Tables on Mobile Screens",
        solution:
          "Engineered responsive card-based list views for mobile screens while preserving freeze-pane sticky column data tables with horizontal scroll on larger tablet and desktop viewports.",
      },
    ],
    result:
      "Engineered a comprehensive, offline-first school operations SaaS architecture demonstrating how modern frontend engineering can bridge infrastructural internet gaps in emerging markets. (No unverified metrics claimed).",
    lessonsLearned:
      "Offline capabilities in SaaS applications require deliberate data modeling from day one. Implementing IndexedDB and background sync creates tremendous reliability advantages for mission-critical administrative tools.",
    links: {
      liveDemo: "https://github.com/Flashdaniel",
      github: "https://github.com/Flashdaniel",
    },
  },

  audiophile: {
    slug: "audiophile",
    title: "Audiophile E-Commerce — High-Fidelity Audio Equipment Platform",
    badge: "Modern E-Commerce",
    badgeType: "ecommerce",
    company: "Engineering Project",
    timeline: "2025",
    role: "Frontend Developer",
    overview:
      "A high-performance audio equipment e-commerce web application engineered with Next.js, React, Tailwind CSS, Radix UI primitives, and a Convex reactive backend. Features responsive product catalog showcases, slide-out shopping cart, real-time inventory synchronization, and a validated multi-step checkout workflow.",
    problem:
      "High-end consumer e-commerce demands seamless browsing and fluid product interactions. Many shopping experiences suffer from slow page transitions, client-side hydration mismatches between cached carts and server pages, and confusing checkout forms that fail to validate input gracefully across mobile viewports.",
    myRole:
      "As Frontend Developer, I built the entire interface using Next.js and Tailwind CSS, leveraging Radix UI for accessible headless dialogs and form controls. I connected the application with a Convex reactive backend, implemented global cart state management with persistent storage, and built an accessible multi-step checkout flow.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Radix UI",
      "Netlify",
    ],
    architecture: [
      {
        title: "Convex Reactive Backend Synchronization",
        description:
          "Integrated Convex reactive queries to maintain real-time inventory and shopping cart synchronization across multiple browser tabs with zero client polling overhead.",
      },
      {
        title: "Hydration-Safe Client State Management",
        description:
          "Engineered a dedicated post-mount hydration hook to harmonize server-rendered static product pages with client-side localStorage cart data, eliminating Next.js hydration warning mismatches.",
      },
      {
        title: "Accessible Headless Primitives",
        description:
          "Constructed modals, drawers, and radio groups using Radix UI primitives to ensure full keyboard navigation, focus trap management, and WCAG accessibility standards.",
      },
    ],
    features: [
      {
        name: "Responsive Multi-Tier Catalog",
        detail:
          "Showcases headphones, earphones, and speakers with high-resolution imagery, feature breakdowns, and package contents lists.",
      },
      {
        name: "Interactive Cart Drawer",
        detail:
          "Slide-out shopping cart allowing real-time quantity adjustments, item removal, and instant total recalculations.",
      },
      {
        name: "Multi-Step Form Checkout",
        detail:
          "Structured billing, shipping, and payment sections with comprehensive client-side form validation and inline error states.",
      },
      {
        name: "Order Confirmation Modal",
        detail:
          "Accessible order confirmation modal detailing purchased items, grand total, and back-to-home navigation.",
      },
    ],
    challenges: [
      {
        challenge: "SSR vs. Client Cart Hydration Mismatches",
        description:
          "Next.js server renders pages with an initial empty cart state, while returning visitors have items saved in localStorage. Direct hydration produced mismatched markup warnings and UI layout flicker.",
      },
      {
        challenge: "Complex Checkout Form Validation",
        description:
          "Validating conditional payment inputs (e-Money PIN vs. Cash on Delivery) while maintaining immediate keyboard focus and accessible error announcements.",
      },
    ],
    solutions: [
      {
        challengeRef: "SSR vs. Client Cart Hydration Mismatches",
        solution:
          "Implemented a `useHasMounted` hook pattern that guarantees cart indicators and persisted data only render after client hydration is complete, preserving deterministic server markup.",
      },
      {
        challengeRef: "Complex Checkout Form Validation",
        solution:
          "Engineered a controlled form state handler with declarative schema validation, conditional field rendering, and aria-describedby error messaging linked to each input.",
      },
    ],
    result:
      "Successfully deployed live to Netlify with fast server-rendered pages, fluid mobile navigation, and zero client-side hydration errors. (No unverified metrics claimed).",
    lessonsLearned:
      "Combining headless accessible primitives (Radix UI) with Tailwind CSS yields a substantially more resilient and accessible frontend than monolithic component libraries. Reactive databases like Convex drastically simplify client synchronization.",
    links: {
      liveDemo: "https://bespoke-wisp-2d4be3.netlify.app/",
      github: "https://github.com/Flashdaniel/hng-audiophile",
    },
  },
};

export const getAllCaseStudySlugs = () => Object.keys(caseStudies);

export const getCaseStudyBySlug = (slug) => caseStudies[slug] || null;
