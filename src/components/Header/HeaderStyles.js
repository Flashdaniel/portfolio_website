import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 50;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1.5rem 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 1rem;
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
  font-weight: 700;
  font-size: 2.2rem;
  letter-spacing: -0.5px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const LogoBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #13ADC7 0%, #945DD6 100%);
  color: #ffffff;
  font-family: monospace;
  font-weight: 800;
  font-size: 1.8rem;
  box-shadow: 0 4px 14px rgba(19, 173, 199, 0.3);
`;

export const LogoText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  .name {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
  }

  .role {
    font-size: 1.2rem;
    font-weight: 500;
    color: #13ADC7;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`;

export const Div2 = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.75);
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #13ADC7, #945DD6);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

/// DropDown Contact
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

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
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

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`