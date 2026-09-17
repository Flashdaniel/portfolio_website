import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  LogoLink,
  LogoBadge,
  LogoText,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" passHref>
        <LogoLink aria-label="Daniel Nweze - Home">
          <LogoBadge>&lt;DN /&gt;</LogoBadge>
          <LogoText>
            <span className="name">Daniel Nweze</span>
            <span className="role">Frontend Engineer</span>
          </LogoText>
        </LogoLink>
      </Link>
    </Div1>
    <Div2 as="nav" aria-label="Main Navigation">
      <Link href="#experience" passHref>
        <NavLink>Experience</NavLink>
      </Link>
      <Link href="#projects" passHref>
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="#skills" passHref>
        <NavLink>Skills</NavLink>
      </Link>
      <Link href="#education" passHref>
        <NavLink>Education</NavLink>
      </Link>
      <Link href="#contact" passHref>
        <NavLink>Contact</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://github.com/Flashdaniel/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Daniel Nweze's GitHub Profile"
        title="GitHub"
      >
        <AiFillGithub size="2.6rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/daniel-nweze-017909214/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Daniel Nweze's LinkedIn Profile"
        title="LinkedIn"
      >
        <AiFillLinkedin size="2.6rem" />
      </SocialIcons>
      <SocialIcons
        href="https://x.com/iamflashdaniel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Daniel Nweze's X (Twitter) Profile"
        title="X (Twitter)"
      >
        <AiFillTwitterCircle size="2.6rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

