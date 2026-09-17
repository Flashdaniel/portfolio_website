import React from 'react';
import { AiFillGithub, AiOutlineEye } from 'react-icons/ai';
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import {
  OtherProjectsGrid,
  CompactCard,
  CardHeader,
  CardTitle,
  CategoryTag,
  CardDescription,
  TagRow,
  TagPill,
  ActionsRow,
  CompactLink,
} from './OtherProjectsStyles';
import { otherProjects } from '../../constants/constants';

const OtherProjects = () => {
  return (
    <Section id="other-projects">
      <SectionDivider divider />
      <SectionTitle>Other Projects &amp; Explorations</SectionTitle>
      <SectionText>
        Secondary applications and interface implementations developed for specialized use-cases and technical experiments.
      </SectionText>

      <OtherProjectsGrid>
        {otherProjects.map((project) => (
          <CompactCard key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              {project.category && <CategoryTag>{project.category}</CategoryTag>}
            </CardHeader>
            <CardDescription>{project.description}</CardDescription>
            <TagRow>
              {project.tags.map((tag, idx) => (
                <TagPill key={idx}>{tag}</TagPill>
              ))}
            </TagRow>
            <ActionsRow>
              {project.visit && (
                <CompactLink
                  href={project.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <AiOutlineEye size="1.6rem" aria-hidden="true" />
                  <span>Live Demo</span>
                </CompactLink>
              )}
              {project.source && (
                <CompactLink
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View GitHub source code for ${project.title}`}
                >
                  <AiFillGithub size="1.6rem" aria-hidden="true" />
                  <span>Source Code</span>
                </CompactLink>
              )}
            </ActionsRow>
          </CompactCard>
        ))}
      </OtherProjectsGrid>
    </Section>
  );
};

export default OtherProjects;
