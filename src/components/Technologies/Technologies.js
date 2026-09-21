import React from "react";
import {
  AiOutlineCode,
  AiOutlineDatabase,
  AiOutlineTool,
  AiOutlineApartment,
} from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  SkillsGrid,
  SkillCategoryCard,
  CategoryHeader,
  CategoryIndex,
  CategoryTitleGroup,
  CategoryIconBadge,
  CategoryTitle,
  SkillCountBadge,
  SkillsList,
  SkillChip,
} from "./TechnologiesStyles";

const skillGroups = [
  {
    index: "01 // FRONTEND",
    category: "Frontend UI",
    icon: <AiOutlineCode size="1.7rem" aria-hidden="true" />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    index: "02 // STATE & DATA",
    category: "State & Data",
    icon: <AiOutlineDatabase size="1.7rem" aria-hidden="true" />,
    skills: [
      "Zustand",
      "TanStack Query",
      "REST APIs",
      "Supabase",
      "Convex",
      "Firebase",
    ],
  },
  {
    index: "03 // TOOLING & CI",
    category: "Tooling & CI",
    icon: <AiOutlineTool size="1.7rem" aria-hidden="true" />,
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "ESLint",
      "GitHub Actions",
      "Docker",
    ],
  },
  {
    index: "04 // PRACTICES",
    category: "Engineering",
    icon: <AiOutlineApartment size="1.7rem" aria-hidden="true" />,
    skills: [
      "Responsive Layouts",
      "Accessibility (WCAG)",
      "Performance Tuning",
      "Component Systems",
      "API Integration",
      "Agile & Scrum",
      "Technical Docs",
    ],
  },
];

const Technologies = () => (
  <Section id="skills" aria-label="Technical Skills">
    <SectionDivider divider />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      Core technologies, state management architectures, developer tooling, and engineering methodologies utilized to design and ship reliable, production-grade web software.
    </SectionText>

    <SkillsGrid>
      {skillGroups.map((group, index) => (
        <SkillCategoryCard key={index}>
          <CategoryHeader>
            <CategoryIndex>{group.index}</CategoryIndex>
            <CategoryTitleGroup>
              <CategoryTitle>{group.category}</CategoryTitle>
              <CategoryIconBadge aria-hidden="true">
                {group.icon}
              </CategoryIconBadge>
            </CategoryTitleGroup>
            <SkillCountBadge>{group.skills.length} competencies</SkillCountBadge>
          </CategoryHeader>

          <SkillsList aria-label={`${group.category} competencies`}>
            {group.skills.map((skill, idx) => (
              <SkillChip key={idx}>
                <span className="chip-dot" aria-hidden="true" />
                <span>{skill}</span>
              </SkillChip>
            ))}
          </SkillsList>
        </SkillCategoryCard>
      ))}
    </SkillsGrid>
  </Section>
);

export default Technologies;
