import React from 'react';
import { AiFillGithub, AiOutlineEye, AiOutlineCheckCircle } from 'react-icons/ai';

import {
  BlogCard,
  CardBody,
  CardInfo,
  GridContainer,
  HeaderThree,
  Subtitle,
  Hr,
  Img,
  ImgContainer,
  LiveDemoLink,
  SourceCodeLink,
  HighlightsList,
  HighlightItem,
  StackTitle,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { featuredProjects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Strongest Real Projects</SectionTitle>
    <SectionText>
      Selected production-grade web applications demonstrating component architecture, client-side state management, and modern frontend engineering.
    </SectionText>
    <GridContainer>
      {featuredProjects.map((p) => {
        return (
          <BlogCard key={p.id}>
            <ImgContainer>
              <Img
                src={p.image}
                alt={`Screenshot of ${p.title}`}
                loading="lazy"
              />
            </ImgContainer>
            <CardBody>
              <TitleContent>
                <HeaderThree>{p.title}</HeaderThree>
                {p.subtitle && <Subtitle>{p.subtitle}</Subtitle>}
                <Hr />
              </TitleContent>
              <CardInfo>{p.description}</CardInfo>

              {p.highlights && (
                <HighlightsList>
                  {p.highlights.map((h, i) => (
                    <HighlightItem key={i}>
                      <AiOutlineCheckCircle size="1.4rem" aria-hidden="true" />
                      <span>{h}</span>
                    </HighlightItem>
                  ))}
                </HighlightsList>
              )}

              <div>
                <StackTitle>Technologies</StackTitle>
                <TagList>
                  {p.tags.map((t, idx) => {
                    return <Tag key={idx}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                {p.visit && (
                  <LiveDemoLink
                    href={p.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${p.title}`}
                  >
                    <AiOutlineEye size="1.8rem" aria-hidden="true" />
                    <span>Live Demo</span>
                  </LiveDemoLink>
                )}
                {p.source && (
                  <SourceCodeLink
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View GitHub source code for ${p.title}`}
                  >
                    <AiFillGithub size="1.8rem" aria-hidden="true" />
                    <span>Source Code</span>
                  </SourceCodeLink>
                )}
              </UtilityList>
            </CardBody>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
