import styled from 'styled-components';

export const CaseStudyContainer = styled.article`
  max-width: 980px;
  margin: 0 auto;
  padding: 4rem 2rem 8rem;
  width: 100%;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2.4rem 1.6rem 6rem;
  }

  @media (max-width: 360px) {
    padding: 2rem 1.2rem 5rem;
  }
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #38bdf8;
  text-decoration: none;
  margin-bottom: 3.2rem;
  min-height: 44px;
  padding: 4px 0;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateX(-3px);
  }

  &:active {
    transform: translateX(-1px);
  }
`;

export const CaseStudyHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 4rem;
`;

export const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  .timeline {
    font-size: 1.3rem;
    font-family: monospace;
    color: #94a3b8;
  }
`;

export const CaseStudyTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.5px;
  overflow-wrap: break-word;
  word-break: break-word;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.5rem;
  }

  @media (max-width: 360px) {
    font-size: 2.1rem;
  }
`;

export const MetaSpecGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  padding: 1.8rem 2rem;
  margin-top: 1rem;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 1.6rem;
    gap: 1.2rem;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  .label {
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #38bdf8;
    font-family: monospace;
  }

  .value {
    font-size: 1.45rem;
    color: #f1f5f9;
    font-weight: 500;
  }
`;

export const ActionLinksBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
`;

export const CaseStudyActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.9rem 1.8rem;
  border-radius: 4px;
  font-size: 1.35rem;
  font-weight: 600;
  text-decoration: none;
  min-height: 42px;
  box-sizing: border-box;
  transition: all 0.2s ease;

  @media (max-width: 480px) {
    width: 100%;
  }

  ${(props) =>
    props.primary
      ? `
    background: #f8fafc;
    border: 1px solid #f8fafc;
    color: #0a0e17;
    &:hover {
      background: #38bdf8;
      border-color: #38bdf8;
      color: #0a0e17;
      transform: translateY(-1px);
    }
  `
      : `
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.16);
    color: #f8fafc;
    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: #38bdf8;
      color: #38bdf8;
      transform: translateY(-1px);
    }
  `}

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

export const ContentSection = styled.section`
  margin-bottom: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const SectionHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #f8fafc;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  .section-num {
    color: #38bdf8;
    font-family: monospace;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const BodyParagraph = styled.p`
  font-size: 1.55rem;
  line-height: 1.75;
  color: #cbd5e1;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.45rem;
    line-height: 1.7;
  }
`;

export const TechPillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 0.6rem;
`;

export const TechPillItem = styled.span`
  font-size: 1.25rem;
  font-family: monospace;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
`;

export const DecisionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.8rem;
  margin-top: 0.8rem;
`;

export const DecisionCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-left: 3px solid #38bdf8;
  border-radius: 4px;
  padding: 1.8rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h3 {
    font-size: 1.7rem;
    font-weight: 700;
    color: #f8fafc;
    margin: 0;
  }

  p {
    font-size: 1.45rem;
    line-height: 1.65;
    color: #94a3b8;
    margin: 0;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem;
  margin-top: 0.8rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 4px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #f8fafc;
    margin: 0;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.6;
    color: #94a3b8;
    margin: 0;
  }
`;

export const ProblemSolutionCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  padding: 2rem;
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }

  .block {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .badge-label {
      font-size: 1.15rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 2px 8px;
      border-radius: 4px;
      width: fit-content;
      font-family: monospace;

      &.problem {
        background: rgba(239, 68, 68, 0.1);
        color: #f87171;
        border: 1px solid rgba(239, 68, 68, 0.25);
      }

      &.solution {
        background: rgba(34, 197, 94, 0.1);
        color: #4ade80;
        border: 1px solid rgba(34, 197, 94, 0.25);
      }
    }

    h4 {
      font-size: 1.55rem;
      font-weight: 700;
      color: #f8fafc;
      margin: 0;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.65;
      color: #94a3b8;
      margin: 0;
    }
  }
`;

export const ResultBox = styled.div`
  background: rgba(56, 189, 248, 0.03);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-left: 3px solid #38bdf8;
  border-radius: 4px;
  padding: 2.2rem 2.4rem;
  font-size: 1.55rem;
  line-height: 1.7;
  color: #e2e8f0;

  strong {
    color: #38bdf8;
  }
`;

export const LessonsBox = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 3px solid #38bdf8;
  border-radius: 4px;
  padding: 2rem 2.2rem;
  font-size: 1.55rem;
  line-height: 1.7;
  color: #cbd5e1;
`;

export const CaseStudyFooterNav = styled.footer`
  margin-top: 6rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.6rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;

    a {
      width: 100%;
      justify-content: center;
    }
  }
`;
