import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineArrowRight,
  AiOutlineDownload,
} from "react-icons/ai";

import { Section } from "../../styles/GlobalComponents";
import {
  LeftSection,
  EyebrowRow,
  NameTag,
  AvailabilityBadge,
  HeroHeading,
  HeroSupportingCopy,
  HeroActions,
  HeroBtnPrimary,
  HeroBtnSecondary,
  HeroBtnLinkedIn,
  QuickLinksRow,
  QuickLinkItem,
  TechPillsRow,
  TechPill,
} from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <EyebrowRow>
        <NameTag>Daniel Nweze</NameTag>
        <AvailabilityBadge>
          <span className="pulse-dot" aria-hidden="true" />
          <span>Available for Frontend Roles (Remote & Hybrid)</span>
        </AvailabilityBadge>
      </EyebrowRow>

      <HeroHeading>
        Frontend Engineer building accessible, scalable &amp; user-focused digital products.
      </HeroHeading>

      <HeroSupportingCopy>
        I build responsive and intuitive web experiences with React, TypeScript, Next.js, and modern frontend technologies — turning product ideas and designs into reliable software.
      </HeroSupportingCopy>

      <HeroActions>
        <Link href="#experience" passHref>
          <HeroBtnPrimary aria-label="View My Work - Jump to professional experience section">
            <span>View My Work</span>
            <AiOutlineArrowRight size="1.8rem" aria-hidden="true" />
          </HeroBtnPrimary>
        </Link>
        <HeroBtnSecondary
          href="/Daniel_Nweze_CV.pdf"
          download="Daniel_Nweze_Frontend_Engineer_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Daniel Nweze's CV (PDF)"
        >
          <AiOutlineDownload size="1.8rem" aria-hidden="true" />
          <span>Download CV</span>
        </HeroBtnSecondary>
        <HeroBtnLinkedIn
          href="https://www.linkedin.com/in/daniel-nweze-017909214/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Daniel Nweze on LinkedIn (opens in new tab)"
        >
          <AiFillLinkedin size="1.8rem" aria-hidden="true" />
          <span>LinkedIn</span>
        </HeroBtnLinkedIn>
      </HeroActions>

      <QuickLinksRow aria-label="Quick contact and profile links">
        <span className="label">Recruiter Quick Links:</span>
        <QuickLinkItem
          href="https://www.linkedin.com/in/daniel-nweze-017909214/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Daniel Nweze's LinkedIn profile (opens in new tab)"
          highlight
        >
          <AiFillLinkedin size="1.8rem" aria-hidden="true" />
          <span>LinkedIn Profile ↗</span>
        </QuickLinkItem>
        <QuickLinkItem
          href="https://github.com/Flashdaniel/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile (opens in new tab)"
        >
          <AiFillGithub size="1.8rem" aria-hidden="true" />
          <span>GitHub</span>
        </QuickLinkItem>
        <QuickLinkItem
          href="mailto:flashdaniel0@gmail.com"
          aria-label="Send direct email to flashdaniel0@gmail.com"
        >
          <AiOutlineMail size="1.8rem" aria-hidden="true" />
          <span>flashdaniel0@gmail.com</span>
        </QuickLinkItem>
      </QuickLinksRow>

      <TechPillsRow aria-label="Primary technical competencies">
        <span className="label">Main Stack:</span>
        <TechPill>React</TechPill>
        <TechPill>TypeScript</TechPill>
        <TechPill>Next.js</TechPill>
        <TechPill>Tailwind CSS</TechPill>
        <TechPill>shadcn/ui</TechPill>
        <TechPill>Zustand</TechPill>
        <TechPill>REST APIs</TechPill>
        <TechPill>Convex</TechPill>
      </TechPillsRow>
    </LeftSection>
  </Section>
);

export default Hero;


