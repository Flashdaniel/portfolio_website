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
  CategoryTitleGroup,
  CategoryIconBadge,
  CategoryTitle,
  SkillCountBadge,
  SkillsList,
  SkillChip,
} from "./TechnologiesStyles";

const skillGroups = [
  {
    category: "Frontend",
    icon: <AiOutlineCode size="2.4rem" aria-hidden="true" />,
    gradient: "linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    category: "State & Data",
    icon: <AiOutlineDatabase size="2.4rem" aria-hidden="true" />,
    gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
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
    category: "Tools",
    icon: <AiOutlineTool size="2.4rem" aria-hidden="true" />,
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
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
    category: "Engineering",
    icon: <AiOutlineApartment size="2.4rem" aria-hidden="true" />,
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    skills: [
      "Responsive Design",
      "Accessibility",
      "Performance Optimization",
      "Component Architecture",
      "API Integration",
      "Agile/Scrum",
      "SDLC",
      "Technical Documentation",
    ],
  },
];

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      Core technologies, state management architectures, developer tools, and engineering methodologies utilized to design and ship reliable, production-grade web software.
    </SectionText>

    <SkillsGrid>
      {skillGroups.map((group, index) => (
        <SkillCategoryCard key={index}>
          <CategoryHeader>
            <CategoryTitleGroup>
              <CategoryIconBadge gradient={group.gradient}>
                {group.icon}
              </CategoryIconBadge>
              <CategoryTitle>{group.category}</CategoryTitle>
            </CategoryTitleGroup>
            <SkillCountBadge>{group.skills.length} Skills</SkillCountBadge>
          </CategoryHeader>

          <SkillsList aria-label={`${group.category} skills`}>
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
