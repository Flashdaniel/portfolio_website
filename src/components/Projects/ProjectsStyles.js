import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2.5rem 0;
  column-gap: 2.8rem;
  row-gap: 3rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    row-gap: 2.4rem;
  }
`;

export const BlogCard = styled.div`
  background: rgba(255, 255, 255, 0.015);
  border-radius: 6px;
  border: ${(props) =>
    props.isProminent
      ? '1px solid rgba(56, 189, 248, 0.35)'
      : '1px solid rgba(255, 255, 255, 0.08)'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) =>
      props.isProminent ? '#38bdf8' : 'rgba(56, 189, 248, 0.35)'};
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  position: relative;
  background: #090e17;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  ${BlogCard}:hover & {
    transform: scale(1.03);
  }
`;

export const CardBody = styled.div`
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.8rem 1.4rem;
  }

  @media (max-width: 360px) {
    padding: 1.5rem 1.2rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  color: #f8fafc;
  font-size: 2.1rem;
  line-height: 1.25;
  letter-spacing: -0.025em;
  margin: 0;
  overflow-wrap: break-word;
  word-break: break-word;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.85rem;
  }

  @media (max-width: 360px) {
    font-size: 1.65rem;
  }
`;

export const ProjectBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  font-family: monospace;

  ${(props) =>
    props.type === 'commercial'
      ? `
    background: rgba(34, 197, 94, 0.08);
    color: #4ade80;
    border: 1px solid rgba(34, 197, 94, 0.25);
  `
      : props.type === 'saas'
      ? `
    background: rgba(168, 85, 247, 0.08);
    color: #c084fc;
    border: 1px solid rgba(168, 85, 247, 0.25);
  `
      : `
    background: rgba(56, 189, 248, 0.08);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.25);
  `}

  .pulse-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #22c55e;
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  color: #94a3b8;
  font-size: 1.4rem;
  line-height: 1.6;
  margin: 0 0 1.6rem 0;
`;

export const SpecsBox = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  padding: 1.2rem 1.4rem;
  margin-bottom: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SpecRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const SpecLabel = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #38bdf8;
  letter-spacing: 0.08em;
  font-family: monospace;
`;

export const SpecValue = styled.span`
  font-size: 1.35rem;
  color: #e2e8f0;
  line-height: 1.45;
`;

export const TechSection = styled.div`
  margin-bottom: 1.8rem;

  .tech-label {
    display: block;
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #94a3b8;
    font-family: monospace;
    margin-bottom: 0.6rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Tag = styled.li`
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 1.2rem;
  font-weight: 500;
  font-family: monospace;
  padding: 3px 9px;
  border-radius: 4px;
`;

export const UtilityList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: auto;
  padding-top: 1.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

export const CaseStudyLink = styled.a`
  flex: 1;
  min-width: 96px;
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.06);
  border: 1px solid rgba(56, 189, 248, 0.25);
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: rgba(56, 189, 248, 0.14);
    border-color: #38bdf8;
    color: #ffffff;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }

  @media (max-width: 420px) {
    min-width: 100%;
  }
`;

export const LiveDemoLink = styled.a`
  flex: 1;
  min-width: 88px;
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #0a0e17;
  background: #f8fafc;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #38bdf8;
    color: #0a0e17;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }

  @media (max-width: 420px) {
    min-width: 100%;
  }
`;

export const SourceCodeLink = styled.a`
  flex: 1;
  min-width: 80px;
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #e2e8f0;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.25);
    color: #ffffff;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }

  @media (max-width: 420px) {
    min-width: 100%;
  }
`;
