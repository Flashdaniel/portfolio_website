import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  AboutContent,
  ProseColumn,
  Paragraph,
  HighlightsColumn,
  PillarCard,
  PillarHeader,
  PillarNumber,
  PillarTitle,
  PillarDescription,
  JourneySection,
  JourneyTitle,
  MilestoneGrid,
  MilestoneCard,
} from './AboutStyles';

const pillars = [
  {
    number: '01',
    title: 'Product-Minded Engineering',
    description:
      'I treat the interface as the product, not just a technical afterthought. That means prioritizing user workflows, performance budgets, edge cases, and business outcomes over complexity.',
  },
  {
    number: '02',
    title: 'Resilient & Accessible UI',
    description:
      'Software must hold up in the real world. I build with semantic HTML, keyboard accessibility (WCAG), and responsive layouts that perform reliably across varied devices and network conditions.',
  },
  {
    number: '03',
    title: 'African & Global Perspective',
    description:
      'Inspired by the transformative impact of technology across Africa and global markets, I build software engineered to international standards with practical, real-world utility.',
  },
];

const milestones = [
  {
    period: 'FOUNDATIONS',
    title: 'Engineering Rigor',
    detail: 'B.Eng in Agricultural & Bioresources Engineering from University of Nigeria — analytical thinking and systems modeling.',
  },
  {
    period: 'COMPUTER SCIENCE',
    title: 'Harvard CS50',
    detail: 'Rigorous foundation in computer science, algorithms, memory models, and data structures.',
  },
  {
    period: 'FRONTEND MASTERY',
    title: 'AltSchool Africa',
    detail: 'Diploma in Frontend Software Engineering with hands-on production builds using modern React and TypeScript workflows.',
  },
  {
    period: 'CONTINUOUS GROWTH',
    title: 'Production Software',
    detail: 'Building resilient client-side web products with Next.js, Zustand, and Tailwind CSS. Open to global & remote engineering roles.',
  },
];

const About = () => {
  return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>About Me</SectionTitle>

      <AboutContent>
        <ProseColumn>
          <Paragraph>
            I'm <strong>Daniel Nweze</strong>, a Frontend Engineer based in Nigeria. My transition into software began with a degree in Agricultural &amp; Bioresources Engineering from the University of Nigeria and deep computer science fundamentals through Harvard University's <strong>CS50</strong>. That engineering background fundamentally shapes how I write code: I treat user interfaces as interconnected, fault-tolerant systems rather than static design mockups.
          </Paragraph>

          <Paragraph>
            My day-to-day focus is on building practical, dependable web applications using <strong>React, TypeScript, Next.js, and modern CSS frameworks</strong>. I don't just care about rendering components — I care about product thinking. That means optimizing for how software behaves under real-world conditions: how quickly it responds on slower networks, how accessible it is for keyboard and assistive tech users, and how gracefully it handles state transitions and error boundaries.
          </Paragraph>

          <Paragraph>
            I'm energized by the tech ecosystem unfolding across Africa and globally — from fintech infrastructure to everyday digital tools that solve tangible problems for real people. Building impactful products requires both engineering discipline and continuous technical growth. Whether I'm evaluating state synchronization patterns with Zustand and TanStack Query, optimizing Core Web Vitals, or refining component abstractions, my goal is always the same: <strong>building practical software that delivers lasting value.</strong>
          </Paragraph>
        </ProseColumn>

        <HighlightsColumn>
          {pillars.map((pillar) => (
            <PillarCard key={pillar.number}>
              <PillarHeader>
                <PillarNumber>{pillar.number}</PillarNumber>
                <PillarTitle>{pillar.title}</PillarTitle>
              </PillarHeader>
              <PillarDescription>{pillar.description}</PillarDescription>
            </PillarCard>
          ))}
        </HighlightsColumn>
      </AboutContent>

      <JourneySection>
        <JourneyTitle>Engineering Background &amp; Milestones</JourneyTitle>
        <MilestoneGrid>
          {milestones.map((m, idx) => (
            <MilestoneCard key={idx}>
              <span className="period">{m.period}</span>
              <span className="title">{m.title}</span>
              <span className="detail">{m.detail}</span>
            </MilestoneCard>
          ))}
        </MilestoneGrid>
      </JourneySection>
    </Section>
  );
};

export default About;
