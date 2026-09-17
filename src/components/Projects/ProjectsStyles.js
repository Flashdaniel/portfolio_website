import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2.5rem 0;
  column-gap: 2.6rem;
  row-gap: 2.8rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    row-gap: 2.4rem;
  }
`;

export const BlogCard = styled.div`
  background: #111a2e;
  border-radius: 14px;
  border: ${(props) =>
    props.isProminent
      ? '1.5px solid rgba(56, 189, 248, 0.45)'
      : '1px solid rgba(255, 255, 255, 0.08)'};
  box-shadow: ${(props) =>
    props.isProminent
      ? '0 8px 24px rgba(0, 0, 0, 0.35), 0 0 18px rgba(56, 189, 248, 0.1)'
      : '0 4px 16px rgba(0, 0, 0, 0.2)'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  position: relative;
  transition: border-color 0.2s ease, transform 0.2s ease;

  ${(props) =>
    props.isProminent &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #38bdf8 0%, #2563eb 100%);
      z-index: 2;
    }
  `}

  &:hover {
    transform: translateY(-3px);
    border-color: ${(props) =>
      props.isProminent ? '#38bdf8' : 'rgba(56, 189, 248, 0.35)'};
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
  background: #0f172a;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CardBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  color: #ffffff;
  font-size: 2.1rem;
  line-height: 1.25;
  letter-spacing: -0.3px;
  margin: 0;
`;

export const ProjectBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 1.15rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;

  ${(props) =>
    props.type === 'commercial'
      ? `
    background: rgba(34, 197, 94, 0.12);
    color: #4ade80;
    border: 1px solid rgba(34, 197, 94, 0.3);
  `
      : props.type === 'saas'
      ? `
    background: rgba(168, 85, 247, 0.12);
    color: #c084fc;
    border: 1px solid rgba(168, 85, 247, 0.3);
  `
      : `
    background: rgba(56, 189, 248, 0.12);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.3);
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
  font-size: 1.35rem;
  line-height: 1.55;
  margin: 0 0 1.4rem 0;
`;

export const SpecsBox = styled.div`
  background: #090f1d;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 1.2rem 1.4rem;
  margin-bottom: 1.4rem;
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
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #38bdf8;
  letter-spacing: 0.6px;
`;

export const SpecValue = styled.span`
  font-size: 1.35rem;
  color: #e2e8f0;
  line-height: 1.45;
`;

export const TechSection = styled.div`
  margin-bottom: 1.6rem;

  .tech-label {
    display: block;
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #64748b;
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
  background: #090f1d;
  border: 1px solid #1e293b;
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
  padding-top: 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  flex-wrap: wrap;
`;

export const CaseStudyLink = styled.a`
  flex: 1;
  min-width: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.85rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(56, 189, 248, 0.2);
    border-color: #38bdf8;
    color: #ffffff;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

export const LiveDemoLink = styled.a`
  flex: 1;
  min-width: 90px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #0b1120;
  background: #38bdf8;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.85rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #0b1120;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

export const SourceCodeLink = styled.a`
  flex: 1;
  min-width: 80px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #e2e8f0;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.85rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 6px;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.35);
    color: #ffffff;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;
