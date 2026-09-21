import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineDownload,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import {
  HeaderWrapper,
  Container,
  Div1,
  Div2,
  Div3,
  LogoLink,
  LogoBadge,
  LogoText,
  NavLink,
  NavCvButton,
  SocialIcons,
  MobileActions,
  MobileToggleBtn,
  MobileMenu,
  MobileNavLink,
  MobileCvButton,
  MobileSocialRow,
} from "./HeaderStyles";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Automatically close mobile menu if viewport widens to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderWrapper>
      <Container>
        <Div1>
          <Link href="/#home" passHref>
            <LogoLink aria-label="Daniel Nweze - Home" onClick={closeMenu}>
              <LogoBadge>&lt;DN /&gt;</LogoBadge>
              <LogoText>
                <span className="name">Daniel Nweze</span>
                <span className="role">Frontend Engineer</span>
              </LogoText>
            </LogoLink>
          </Link>
        </Div1>

        {/* Desktop Navigation */}
        <Div2 as="nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} passHref>
              <NavLink>{item.label}</NavLink>
            </Link>
          ))}
        </Div2>

        {/* Desktop Actions */}
        <Div3>
          <NavCvButton
            href="/Daniel_Nweze_CV.pdf"
            download="Daniel_Nweze_Frontend_Engineer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Daniel Nweze's CV (PDF)"
          >
            <AiOutlineDownload size="1.7rem" aria-hidden="true" />
            <span>Download CV</span>
          </NavCvButton>
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
            aria-label="Daniel Nweze's X Profile (opens in new tab)"
            title="X (Twitter) (opens in new tab)"
          >
            <AiFillTwitterCircle size="2rem" aria-hidden="true" />
          </SocialIcons>
        </Div3>

        {/* Mobile Actions: Fast CV button + Hamburger Toggle */}
        <MobileActions>
          <NavCvButton
            href="/Daniel_Nweze_CV.pdf"
            download="Daniel_Nweze_Frontend_Engineer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Daniel Nweze's CV (PDF)"
            style={{ padding: "0.65rem 1.2rem", fontSize: "1.2rem" }}
          >
            <AiOutlineDownload size="1.5rem" aria-hidden="true" />
            <span>CV</span>
          </NavCvButton>
          <MobileToggleBtn
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? (
              <AiOutlineClose size="2.2rem" aria-hidden="true" />
            ) : (
              <AiOutlineMenu size="2.2rem" aria-hidden="true" />
            )}
          </MobileToggleBtn>
        </MobileActions>
      </Container>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <MobileMenu as="nav" id="mobile-navigation-menu" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} passHref>
              <MobileNavLink onClick={closeMenu}>
                <span>{item.label}</span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </MobileNavLink>
            </Link>
          ))}

          <MobileCvButton
            href="/Daniel_Nweze_CV.pdf"
            download="Daniel_Nweze_Frontend_Engineer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            aria-label="Download Daniel Nweze's CV (PDF)"
          >
            <AiOutlineDownload size="2rem" aria-hidden="true" />
            <span>Download CV</span>
          </MobileCvButton>

          <MobileSocialRow>
            <SocialIcons
              href="https://github.com/Flashdaniel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daniel Nweze's GitHub Profile (opens in new tab)"
              title="GitHub (opens in new tab)"
            >
              <AiFillGithub size="2.6rem" aria-hidden="true" />
            </SocialIcons>
            <SocialIcons
              href="https://www.linkedin.com/in/daniel-nweze-017909214/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daniel Nweze's LinkedIn Profile (opens in new tab)"
              title="LinkedIn (opens in new tab)"
            >
              <AiFillLinkedin size="2.6rem" aria-hidden="true" />
            </SocialIcons>
            <SocialIcons
              href="https://x.com/iamflashdaniel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Daniel Nweze's X Profile (opens in new tab)"
              title="X (Twitter) (opens in new tab)"
            >
              <AiFillTwitterCircle size="2.6rem" aria-hidden="true" />
            </SocialIcons>
          </MobileSocialRow>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};

export default Header;
