import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiOutlineEye, AiOutlineFileText } from 'react-icons/ai';

import {
  BlogCard,
  CardBody,
  CardHeader,
  CardInfo,
  CaseStudyLink,
  GridContainer,
  HeaderThree,
  Img,
  ImgContainer,
  LiveDemoLink,
  ProjectBadge,
  SourceCodeLink,
  SpecsBox,
  SpecRow,
  SpecLabel,
  SpecValue,
  Tag,
  TagList,
  TechSection,
  UtilityList,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { featuredProjects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Featured Projects</SectionTitle>
    <SectionText>
      High-impact engineering projects prioritizing responsive design, robust state management, and production-grade architectures.
    </SectionText>
    <GridContainer>
      {featuredProjects.map((p) => {
        return (
          <BlogCard key={p.id} isProminent={p.isProminent}>
            <ImgContainer>
              <Img
                src={p.image}
                alt={`Screenshot of ${p.title}`}
                loading="lazy"
              />
            </ImgContainer>
            <CardBody>
              {/* 1. Project Name */}
              <CardHeader>
                <HeaderThree>{p.title}</HeaderThree>
                {p.badge && (
                  <ProjectBadge type={p.badgeType}>
                    {p.badgeType === 'commercial' && <span className="pulse-dot" aria-hidden="true" />}
                    <span>{p.badge}</span>
                  </ProjectBadge>
                )}
              </CardHeader>

              {/* 2. Short Description */}
              <CardInfo>{p.description}</CardInfo>

              {/* 3 & 5. My Role & Key Feature */}
              <SpecsBox>
                <SpecRow>
                  <SpecLabel>My Role</SpecLabel>
                  <SpecValue>{p.role}</SpecValue>
                </SpecRow>
                <SpecRow>
                  <SpecLabel>Key Feature</SpecLabel>
                  <SpecValue>{p.keyFeature}</SpecValue>
                </SpecRow>
              </SpecsBox>

              {/* 4. Technology */}
              <TechSection>
                <span className="tech-label">Technology</span>
                <TagList>
                  {p.tags.map((t, idx) => (
                    <Tag key={idx}>{t}</Tag>
                  ))}
                </TagList>
              </TechSection>

              {/* Case Study + 6 & 7. Live Demo & GitHub */}
              <UtilityList>
                {p.slug && (
                  <Link href={`/projects/${p.slug}`} passHref>
                    <CaseStudyLink aria-label={`Read engineering case study for ${p.title}`}>
                      <AiOutlineFileText size="1.5rem" aria-hidden="true" />
                      <span>Case Study</span>
                    </CaseStudyLink>
                  </Link>
                )}

                <LiveDemoLink
                  href={p.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View Live Demo for ${p.title}`}
                >
                  <AiOutlineEye size="1.5rem" aria-hidden="true" />
                  <span>Live Demo</span>
                </LiveDemoLink>

                <SourceCodeLink
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View GitHub repository for ${p.title}`}
                >
                  <AiFillGithub size="1.5rem" aria-hidden="true" />
                  <span>GitHub</span>
                </SourceCodeLink>
              </UtilityList>
            </CardBody>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;

