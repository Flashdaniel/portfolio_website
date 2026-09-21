import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  AiOutlineArrowLeft,
  AiOutlineEye,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { Layout } from '../../layout/Layout';
import {
  caseStudies,
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from '../../constants/caseStudies';
import {
  CaseStudyContainer,
  BackLink,
  CaseStudyHeader,
  BadgeRow,
  CaseStudyTitle,
  MetaSpecGrid,
  MetaItem,
  ActionLinksBar,
  CaseStudyActionBtn,
  ContentSection,
  SectionHeading,
  BodyParagraph,
  TechPillsWrapper,
  TechPillItem,
  DecisionGrid,
  DecisionCard,
  FeatureGrid,
  FeatureCard,
  ProblemSolutionCard,
  ResultBox,
  LessonsBox,
  CaseStudyFooterNav,
} from '../../styles/CaseStudyStyles';
import { ProjectBadge } from '../../components/Projects/ProjectsStyles';

export default function CaseStudyPage({ caseStudy }) {
  if (!caseStudy) return null;

  return (
    <Layout>
      <Head>
        <title>{caseStudy.title} | Case Study — Daniel Nweze</title>
        <meta
          name="description"
          content={`Detailed engineering case study for ${caseStudy.title}: Architecture, frontend decisions, and technical solutions by Daniel Nweze.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <CaseStudyContainer>
        <Link href="/#projects" passHref>
          <BackLink aria-label="Back to Portfolio Projects">
            <AiOutlineArrowLeft size="1.6rem" aria-hidden="true" />
            <span>Back to Portfolio Projects</span>
          </BackLink>
        </Link>

        <CaseStudyHeader>
          <BadgeRow>
            <ProjectBadge type={caseStudy.badgeType}>
              {caseStudy.badgeType === 'commercial' && (
                <span className="pulse-dot" aria-hidden="true" />
              )}
              <span>{caseStudy.badge}</span>
            </ProjectBadge>
            <span className="timeline">{caseStudy.timeline}</span>
          </BadgeRow>

          <CaseStudyTitle>{caseStudy.title}</CaseStudyTitle>

          <MetaSpecGrid>
            <MetaItem>
              <span className="label">My Role</span>
              <span className="value">{caseStudy.role}</span>
            </MetaItem>
            <MetaItem>
              <span className="label">Organization / Context</span>
              <span className="value">{caseStudy.company}</span>
            </MetaItem>
            <MetaItem>
              <span className="label">Primary Stack</span>
              <span className="value">
                {caseStudy.technologies.slice(0, 3).join(', ')}
              </span>
            </MetaItem>
          </MetaSpecGrid>

          <ActionLinksBar>
            {caseStudy.links.liveDemo && (
              <CaseStudyActionBtn
                href={caseStudy.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                primary
                aria-label={`Open Live Demo for ${caseStudy.title} (opens in new tab)`}
              >
                <AiOutlineEye size="1.8rem" aria-hidden="true" />
                <span>Live Demo</span>
              </CaseStudyActionBtn>
            )}
            {caseStudy.links.github && (
              <CaseStudyActionBtn
                href={caseStudy.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open GitHub Repository for ${caseStudy.title} (opens in new tab)`}
              >
                <AiFillGithub size="1.8rem" aria-hidden="true" />
                <span>GitHub</span>
              </CaseStudyActionBtn>
            )}
            <CaseStudyActionBtn
              href="https://www.linkedin.com/in/daniel-nweze-017909214/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Daniel Nweze on LinkedIn (opens in new tab)"
            >
              <AiFillLinkedin size="1.8rem" aria-hidden="true" />
              <span>Connect on LinkedIn</span>
            </CaseStudyActionBtn>
          </ActionLinksBar>
        </CaseStudyHeader>

        {/* 1. Overview */}
        <ContentSection id="overview">
          <SectionHeading>
            <span className="section-num">01.</span> Overview
          </SectionHeading>
          <BodyParagraph>{caseStudy.overview}</BodyParagraph>
        </ContentSection>

        {/* 2. Problem */}
        <ContentSection id="problem">
          <SectionHeading>
            <span className="section-num">02.</span> The Problem Solved
          </SectionHeading>
          <BodyParagraph>{caseStudy.problem}</BodyParagraph>
        </ContentSection>

        {/* 3. My Role */}
        <ContentSection id="my-role">
          <SectionHeading>
            <span className="section-num">03.</span> My Role &amp; Personal Contributions
          </SectionHeading>
          <BodyParagraph>{caseStudy.myRole}</BodyParagraph>
        </ContentSection>

        {/* 4. Technologies */}
        <ContentSection id="technologies">
          <SectionHeading>
            <span className="section-num">04.</span> Technologies Used
          </SectionHeading>
          <TechPillsWrapper>
            {caseStudy.technologies.map((tech, index) => (
              <TechPillItem key={index}>{tech}</TechPillItem>
            ))}
          </TechPillsWrapper>
        </ContentSection>

        {/* 5. Architecture */}
        <ContentSection id="architecture">
          <SectionHeading>
            <span className="section-num">05.</span> Frontend Architecture &amp; Decisions
          </SectionHeading>
          <DecisionGrid>
            {caseStudy.architecture.map((item, index) => (
              <DecisionCard key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </DecisionCard>
            ))}
          </DecisionGrid>
        </ContentSection>

        {/* 6. Features */}
        <ContentSection id="features">
          <SectionHeading>
            <span className="section-num">06.</span> Key Functional Features
          </SectionHeading>
          <FeatureGrid>
            {caseStudy.features.map((feat, index) => (
              <FeatureCard key={index}>
                <h3>{feat.name}</h3>
                <p>{feat.detail}</p>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </ContentSection>

        {/* 7 & 8. Challenges & Solutions */}
        <ContentSection id="challenges-and-solutions">
          <SectionHeading>
            <span className="section-num">07.</span> Technical Challenges &amp; Solutions
          </SectionHeading>
          {caseStudy.challenges.map((c, index) => {
            const sol = caseStudy.solutions.find(
              (s) => s.challengeRef === c.challenge
            );
            return (
              <ProblemSolutionCard key={index}>
                <div className="block">
                  <span className="badge-label problem">Challenge #{index + 1}</span>
                  <h3>{c.challenge}</h3>
                  <p>{c.description}</p>
                </div>
                {sol && (
                  <div className="block">
                    <span className="badge-label solution">Engineered Solution</span>
                    <h4>Resolution</h4>
                    <p>{sol.solution}</p>
                  </div>
                )}
              </ProblemSolutionCard>
            );
          })}
        </ContentSection>

        {/* 9. Result */}
        <ContentSection id="result">
          <SectionHeading>
            <span className="section-num">08.</span> Measurable Results &amp; Real Impact
          </SectionHeading>
          <ResultBox>
            <strong>Outcome: </strong>
            {caseStudy.result}
          </ResultBox>
        </ContentSection>

        {/* 10. Lessons Learned */}
        <ContentSection id="lessons-learned">
          <SectionHeading>
            <span className="section-num">09.</span> Lessons Learned
          </SectionHeading>
          <LessonsBox>{caseStudy.lessonsLearned}</LessonsBox>
        </ContentSection>

        {/* 11. Links */}
        <ContentSection id="links">
          <SectionHeading>
            <span className="section-num">10.</span> Project Links
          </SectionHeading>
          <ActionLinksBar>
            {caseStudy.links.liveDemo && (
              <CaseStudyActionBtn
                href={caseStudy.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                primary
                aria-label={`Open Live Demo for ${caseStudy.title} (opens in new tab)`}
              >
                <AiOutlineEye size="1.8rem" aria-hidden="true" />
                <span>Visit Live Platform / Demo</span>
              </CaseStudyActionBtn>
            )}
            {caseStudy.links.github && (
              <CaseStudyActionBtn
                href={caseStudy.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open GitHub Repository for ${caseStudy.title} (opens in new tab)`}
              >
                <AiFillGithub size="1.8rem" aria-hidden="true" />
                <span>View Source Code on GitHub</span>
              </CaseStudyActionBtn>
            )}
          </ActionLinksBar>
        </ContentSection>

        <CaseStudyFooterNav>
          <Link href="/#projects" passHref>
            <BackLink aria-label="Back to All Featured Projects">
              <AiOutlineArrowLeft size="1.6rem" aria-hidden="true" />
              <span>Back to All Featured Projects</span>
            </BackLink>
          </Link>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CaseStudyActionBtn
              href="https://www.linkedin.com/in/daniel-nweze-017909214/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Daniel Nweze on LinkedIn (opens in new tab)"
            >
              <AiFillLinkedin size="1.8rem" aria-hidden="true" />
              <span>Connect on LinkedIn</span>
            </CaseStudyActionBtn>
            <Link href="/#contact" passHref>
              <CaseStudyActionBtn primary aria-label="Discuss This Project - Jump to Contact form">
                <span>Discuss This Project</span>
              </CaseStudyActionBtn>
            </Link>
          </div>
        </CaseStudyFooterNav>
      </CaseStudyContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllCaseStudySlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      caseStudy,
    },
  };
}
