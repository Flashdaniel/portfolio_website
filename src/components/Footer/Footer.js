import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  Copyright,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper as="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call / WhatsApp</LinkTitle>
          <LinkItem href="tel:+2348100767459">+234 810 076 7459</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:danielchibundunweze@gmail.com">
            danielchibundunweze@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Status</LinkTitle>
          <LinkItem href="#contact">Open to Remote Opportunities</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Daniel Nweze — Frontend Engineer building accessible, scalable, and user-focused digital products.
          </Slogan>
          <Copyright>
            &copy; {new Date().getFullYear()} Daniel Nweze. All rights reserved.
          </Copyright>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://github.com/Flashdaniel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Daniel Nweze's GitHub Profile (opens in new tab)"
            title="GitHub (opens in new tab)"
          >
            <AiFillGithub size="2rem" aria-hidden="true" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/daniel-nweze-017909214/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Daniel Nweze's LinkedIn Profile (opens in new tab)"
            title="LinkedIn (opens in new tab)"
          >
            <AiFillLinkedin size="2rem" aria-hidden="true" />
          </SocialIcons>
          <SocialIcons
            href="https://x.com/iamflashdaniel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Daniel Nweze's X / Twitter Profile (opens in new tab)"
            title="X / Twitter (opens in new tab)"
          >
            <AiFillTwitterCircle size="2rem" aria-hidden="true" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

