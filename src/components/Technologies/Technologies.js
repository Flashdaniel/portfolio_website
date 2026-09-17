import React from "react";
import {
  AiOutlineCode,
  AiOutlineLayout,
  AiOutlineDatabase,
  AiOutlineTool,
} from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  TechGrid,
  TechCard,
  TechCardHeader,
  TechIconBadge,
  TechCardTitle,
  TechDescription,
  SkillTagsContainer,
  SkillTag,
} from "./TechnologiesStyles";

const domains = [
  {
    title: "Core & Frameworks",
    icon: <AiOutlineCode size="2.4rem" aria-hidden="true" />,
    gradient: "linear-gradient(135deg, #13adc7 0%, #2563eb 100%)",
    description:
      "Developing resilient, component-driven client applications using modern JavaScript and TypeScript with performance-first architectures.",
    skills: ["React", "TypeScript", "JavaScript (ES6+)", "Next.js", "Vite", "HTML5 & Semantic Web"],
  },
  {
    title: "Styling & UI Architecture",
    icon: <AiOutlineLayout size="2.4rem" aria-hidden="true" />,
    gradient: "linear-gradient(135deg, #945dd6 0%, #ec4899 100%)",
    description:
      "Crafting accessible, scalable design systems, responsive multi-breakpoint layouts, and smooth micro-interactions.",
    skills: ["Tailwind CSS", "shadcn/ui", "Styled Components", "Modern CSS", "Web Accessibility (WCAG)", "Responsive UI"],
  },
  {
    title: "State & Data Layer",
    icon: <AiOutlineDatabase size="2.4rem" aria-hidden="true" />,
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    description:
      "Managing complex client-side state, server caching, error handling, and declarative API integrations.",
    skills: ["Zustand", "TanStack Query", "REST APIs", "Context API", "Convex", "Data Fetching & Cache"],
  },
  {
    title: "Services & Tooling",
    icon: <AiOutlineTool size="2.4rem" aria-hidden="true" />,
    gradient: "linear-gradient(135deg, #10b981 0%, #13adc7 100%)",
    description:
      "Leveraging modern developer tooling, version control workflows, cloud backends, and browser performance instrumentation.",
    skills: ["Git", "GitHub", "Supabase", "Firebase", "Chrome DevTools", "VS Code"],
  },
];

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Engineering Skills</SectionTitle>
    <SectionText>
      Core technologies, architectural frameworks, and engineering tools utilized daily to build production-grade web applications.
    </SectionText>
    <TechGrid>
      {domains.map((domain, index) => (
        <TechCard key={index}>
          <TechCardHeader>
            <TechIconBadge gradient={domain.gradient}>
              {domain.icon}
            </TechIconBadge>
            <TechCardTitle>{domain.title}</TechCardTitle>
          </TechCardHeader>
          <TechDescription>{domain.description}</TechDescription>
          <SkillTagsContainer>
            {domain.skills.map((skill, idx) => (
              <SkillTag key={idx}>{skill}</SkillTag>
            ))}
          </SkillTagsContainer>
        </TechCard>
      ))}
    </TechGrid>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

