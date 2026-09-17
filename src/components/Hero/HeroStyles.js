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
  padding: 4px 12px;
  border-radius: 6px;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.25);
  color: #4ade80;
  font-size: 1.3rem;
  font-weight: 500;

  .pulse-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #22c55e;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 3px 8px;
  }
`;

export const HeroHeading = styled.h1`
  font-weight: 700;
  font-size: 4.4rem;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: #ffffff;
  margin-bottom: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3.6rem;
    line-height: 1.25;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.8rem;
    line-height: 1.3;
    margin-bottom: 1.6rem;
  }
`;

export const HeroSupportingCopy = styled.p`
  max-width: 720px;
  font-size: 1.8rem;
  line-height: 1.65;
  font-weight: 400;
  color: #94a3b8;
  margin-bottom: 3.2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.65rem;
    line-height: 1.6;
    margin-bottom: 2.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    line-height: 1.55;
    margin-bottom: 2.2rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 2.8rem;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1rem;
    margin-bottom: 2.2rem;
  }
`;

export const HeroBtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1.2rem 2.4rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #ffffff;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #e2e8f0;
    border-color: #e2e8f0;
    color: #0f172a;
    transform: translateY(-1px);
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
  padding: 1.2rem 2.4rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #f1f5f9;
  border-radius: 8px;
  background: transparent;
  border: 1px solid #334155;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #1e293b;
    border-color: #475569;
    color: #ffffff;
    transform: translateY(-1px);
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
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #64748b;
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
  color: #cbd5e1;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #1e293b;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background: #1e293b;
    border-color: #475569;
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
  border-top: 1px solid #1e293b;

  .label {
    font-size: 1.25rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 600;
    margin-right: 0.4rem;
  }
`;

export const TechPill = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 5px;
  background: #0f172a;
  border: 1px solid #1e293b;
  color: #94a3b8;
  font-family: monospace;
`;



