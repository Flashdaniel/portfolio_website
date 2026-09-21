import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: rgba(10, 14, 23, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.2s ease;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3rem;
  max-width: 1280px;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1.4rem 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.2rem 1.6rem;
  }

  @media (max-width: 360px) {
    padding: 1rem 1.2rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 4px;
    border-radius: 6px;
  }
`;

export const LogoBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #38bdf8;
  font-family: monospace;
  font-weight: 700;
  font-size: 1.45rem;
  flex-shrink: 0;
  transition: all 0.2s ease;

  ${LogoLink}:hover & {
    border-color: #38bdf8;
    background: rgba(56, 189, 248, 0.08);
  }
`;

export const LogoText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  .name {
    font-size: 1.9rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.3px;
  }

  .role {
    font-size: 1.15rem;
    font-weight: 600;
    color: #38bdf8;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    .name {
      font-size: 1.7rem;
    }
    .role {
      font-size: 1.05rem;
    }
  }

  @media (max-width: 360px) {
    .name {
      font-size: 1.5rem;
    }
    .role {
      font-size: 0.95rem;
    }
  }
`;

// Desktop Navigation Links
export const Div2 = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.2rem;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.lg} {
    gap: 1.6rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 1.55rem;
  font-weight: 500;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.78);
  transition: all 0.2s ease;
  position: relative;
  padding: 0.6rem 0;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: #38bdf8;
    transition: width 0.25s ease;
  }

  &:hover:after {
    width: 100%;
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 4px;
    border-radius: 4px;
    color: #ffffff;
  }
`;

// Desktop Right Actions
export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavCvButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.8rem 1.6rem;
  border-radius: 6px;
  background: #f8fafc;
  color: #0a0e17;
  font-size: 1.35rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #f8fafc;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #e2e8f0;
    border-color: #e2e8f0;
    color: #0a0e17;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(248, 250, 252, 0.15);
  }

  &:active {
    transform: translateY(0) scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

// Mobile Actions: Compact CV button + Hamburger Toggle
export const MobileActions = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  }
`;

export const MobileToggleBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  min-width: 42px;
  min-height: 42px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  color: #f8fafc;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #38bdf8;
    color: #38bdf8;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

// Expandable Mobile Menu Drawer
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.6rem 2rem 2.4rem;
  background: #0a0e17;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  max-height: calc(100vh - 65px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  border-radius: 4px;
  font-size: 1.55rem;
  font-weight: 600;
  color: #e2e8f0;
  text-decoration: none;
  box-sizing: border-box;
  min-height: 44px;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);

  .arrow {
    color: #38bdf8;
    font-size: 1.6rem;
    transition: transform 0.2s ease;
  }

  &:hover,
  &:active {
    background: rgba(56, 189, 248, 0.08);
    border-color: rgba(56, 189, 248, 0.3);
    color: #38bdf8;

    .arrow {
      transform: translateX(4px);
    }
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

export const MobileCvButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 1.2rem;
  margin-top: 0.8rem;
  border-radius: 4px;
  box-sizing: border-box;
  min-height: 44px;
  background: #f8fafc;
  color: #0a0e17;
  font-size: 1.45rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #f8fafc;
  transition: all 0.2s ease;

  &:hover {
    background: #38bdf8;
    border-color: #38bdf8;
    color: #0a0e17;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

export const MobileSocialRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding-top: 1.4rem;
  margin-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

// Social Icons (used in Header & Footer)
export const SocialIcons = styled.a`
  transition: all 0.2s ease;
  color: #cbd5e1;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;

  &:hover {
    background-color: rgba(56, 189, 248, 0.08);
    border-color: rgba(56, 189, 248, 0.35);
    color: #38bdf8;
    transform: translateY(-1px);
    cursor: pointer;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

// DropDown Contact (legacy compatibility)
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }
`;