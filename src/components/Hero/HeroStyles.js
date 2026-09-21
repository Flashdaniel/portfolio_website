import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  max-width: 860px;
  display: flex;
  flex-direction: column;
  padding: 4rem 0 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 3rem 0 2.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 0 2rem;
  }
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const NameTag = styled.span`
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #38bdf8;
  font-family: monospace;
`;

export const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  max-width: 100%;
  padding: 4px 10px;
  border-radius: 4px;
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
  color: #4ade80;
  font-size: 1.25rem;
  font-family: monospace;
  font-weight: 500;
  line-height: 1.4;

  .pulse-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #22c55e;
    flex-shrink: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.15rem;
    padding: 3px 8px;
  }
`;

export const HeroHeading = styled.h1`
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 1.16;
  letter-spacing: -0.035em;
  color: #f8fafc;
  margin-bottom: 2rem;
  overflow-wrap: break-word;
  word-break: break-word;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3.8rem;
    line-height: 1.2;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.8rem;
    line-height: 1.25;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 360px) {
    font-size: 2.4rem;
  }
`;

export const HeroSupportingCopy = styled.p`
  max-width: 720px;
  font-size: 1.75rem;
  line-height: 1.65;
  font-weight: 400;
  color: #94a3b8;
  margin-bottom: 3.2rem;
  overflow-wrap: break-word;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.6rem;
    line-height: 1.6;
    margin-bottom: 2.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.45rem;
    line-height: 1.55;
    margin-bottom: 2.2rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2.8rem;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1rem;
    margin-bottom: 2.2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;

    a {
      width: 100%;
      min-height: 48px;
      justify-content: center;
    }
  }
`;

export const HeroBtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1.15rem 2.2rem;
  font-size: 1.45rem;
  font-weight: 600;
  color: #f8fafc;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.16);
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
    transform: translateY(-1px);

    svg {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: translateY(1px) scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.1rem 2rem;
    font-size: 1.4rem;
  }
`;

export const HeroBtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1.15rem 2.2rem;
  font-size: 1.45rem;
  font-weight: 600;
  color: #0a0e17;
  border-radius: 6px;
  background: #f8fafc;
  border: 1px solid #f8fafc;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #e2e8f0;
    border-color: #e2e8f0;
    transform: translateY(-1px);
    color: #0a0e17;
  }

  &:active {
    transform: translateY(1px) scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.1rem 2rem;
    font-size: 1.4rem;
  }
`;

export const HeroBtnLinkedIn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1.15rem 2rem;
  font-size: 1.45rem;
  font-weight: 600;
  color: #38bdf8;
  border-radius: 6px;
  background: rgba(56, 189, 248, 0.05);
  border: 1px solid rgba(56, 189, 248, 0.25);
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(56, 189, 248, 0.12);
    border-color: #38bdf8;
    color: #ffffff;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px) scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.1rem 2rem;
    font-size: 1.4rem;
  }
`;

export const QuickLinksRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2.8rem;
  flex-wrap: wrap;

  .label {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #94a3b8;
    font-family: monospace;
    margin-right: 0.2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.8rem;
    margin-bottom: 2.2rem;
  }
`;

export const QuickLinkItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: ${(props) => (props.highlight ? '#38bdf8' : '#cbd5e1')};
  font-size: 1.35rem;
  font-weight: ${(props) => (props.highlight ? '600' : '500')};
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  background: ${(props) =>
    props.highlight ? 'rgba(56, 189, 248, 0.06)' : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid
    ${(props) => (props.highlight ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255, 255, 255, 0.08)')};
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background: ${(props) => (props.highlight ? 'rgba(56, 189, 248, 0.14)' : 'rgba(255, 255, 255, 0.08)')};
    border-color: ${(props) => (props.highlight ? '#38bdf8' : 'rgba(255, 255, 255, 0.25)')};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

export const TechPillsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  padding-top: 1.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .label {
    font-size: 1.2rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
    font-family: monospace;
    margin-right: 0.4rem;
  }
`;

export const TechPill = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  font-family: monospace;
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    color: #ffffff;
    border-color: rgba(56, 189, 248, 0.35);
    background: rgba(56, 189, 248, 0.06);
    transform: translateY(-1px);
  }
`;



