import React from 'react';
import { AiOutlineArrowRight, AiOutlineCheckCircle } from 'react-icons/ai';
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import {
  ExperienceCard,
  RoleHeader,
  RoleInfo,
  JobTitle,
  CompanyRow,
  TenureBadge,
  ProductBanner,
  LiveProductLink,
  ResponsibilitiesContainer,
  ResponsibilitiesList,
  ResponsibilityItem,
  StackRow,
  StackPill,
} from './ExperienceStyles';

const Experience = () => {
  return (
    <Section id="experience" aria-label="Professional Experience">
      <SectionDivider divider />
      <SectionTitle>Professional Experience</SectionTitle>
      <SectionText>
        Active commercial frontend engineering experience building production web software, implementing responsive user interfaces, and shipping digital product features.
      </SectionText>

      <ExperienceCard>
        <RoleHeader>
          <RoleInfo>
            <JobTitle>Frontend Developer</JobTitle>
            <CompanyRow>
              <span className="company-name">The Upskill Space</span>
              <span className="separator">•</span>
              <span className="badge">Production Engineering</span>
            </CompanyRow>
          </RoleInfo>
          <TenureBadge>
            <span className="current-dot" aria-hidden="true" />
            <span>2026 – Present (Current Role)</span>
          </TenureBadge>
        </RoleHeader>

        <ProductBanner>
          <div className="product-info">
            <span className="label">Commercial Product Spotlight</span>
            <h4 className="title">myRabbAi — AI-Powered CBT &amp; Exam Preparation</h4>
            <span className="description">
              A high-impact educational technology platform delivering personalized computer-based test (CBT) practice, automated scoring, and study tools for JAMB, WAEC, and NECO students across Nigeria.
            </span>
          </div>
          <LiveProductLink
            href="https://myrabbai.com.ng/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit myRabbAi live platform (opens in new tab)"
          >
            <span>View Live Platform</span>
            <AiOutlineArrowRight size="1.4rem" aria-hidden="true" />
          </LiveProductLink>
        </ProductBanner>

        <ResponsibilitiesContainer>
          <span className="section-subtitle">Core Production Contributions</span>
          <ResponsibilitiesList>
            <ResponsibilityItem>
              <strong>UI Implementation &amp; Design-to-Code</strong>
              Translating Figma interface designs and interactive mockups into responsive, accessible, and high-performance React/Next.js frontend views aligned with design system guidelines.
            </ResponsibilityItem>
            <ResponsibilityItem>
              <strong>API Integration &amp; Real-Time State</strong>
              Connecting frontend views with backend REST endpoints to power dynamic student authentication, timed test delivery, subject navigation, and instant score summaries.
            </ResponsibilityItem>
            <ResponsibilityItem>
              <strong>Mobile-First &amp; Cross-Device Optimization</strong>
              Engineering mobile-first layouts and progressive enhancements to ensure consistent usability across smartphones, low-spec tablets, and desktop browsers on Nigerian networks.
            </ResponsibilityItem>
            <ResponsibilityItem>
              <strong>Performance Tuning &amp; Error Handling</strong>
              Diagnosing UI rendering bottlenecks, eliminating layout shifts, and implementing resilient error boundaries to prevent exam session disruptions during connectivity drops.
            </ResponsibilityItem>
            <ResponsibilityItem>
              <strong>Quality Assurance &amp; Accessibility (WCAG)</strong>
              Conducting cross-browser testing across modern engines, validating semantic HTML structure, keyboard navigation, and UI states before production deployment.
            </ResponsibilityItem>
            <ResponsibilityItem>
              <strong>Sprint Planning &amp; Agile Collaboration</strong>
              Participating actively in agile sprint cycles, backlog estimation, and feature reviews while collaborating directly with product managers, UI/UX designers, and backend engineers.
            </ResponsibilityItem>
          </ResponsibilitiesList>
        </ResponsibilitiesContainer>

        <StackRow aria-label="Technologies used in this role">
          <span className="label">Stack &amp; Practices:</span>
          <StackPill>React</StackPill>
          <StackPill>TypeScript</StackPill>
          <StackPill>JavaScript (ES6+)</StackPill>
          <StackPill>REST APIs</StackPill>
          <StackPill>Mobile-First UI</StackPill>
          <StackPill>Accessibility (WCAG)</StackPill>
          <StackPill>Performance Optimization</StackPill>
          <StackPill>Cross-Browser QA</StackPill>
          <StackPill>Git &amp; GitHub</StackPill>
        </StackRow>
      </ExperienceCard>
    </Section>
  );
};

export default Experience;

