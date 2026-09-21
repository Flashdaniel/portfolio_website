import styled from 'styled-components';

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 5.6rem;
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 3.6rem;
  }
`;

export const ProseColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.65rem;
  line-height: 1.75;
  color: #94a3b8;
  font-weight: 400;

  strong {
    color: #f8fafc;
    font-weight: 600;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    line-height: 1.65;
  }
`;

export const HighlightsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

export const PillarCard = styled.div`
  background: transparent;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  padding: 1.8rem 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #38bdf8;
  }
`;

export const PillarHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
`;

export const PillarNumber = styled.span`
  font-family: monospace;
  font-size: 1.2rem;
  font-weight: 700;
  color: #38bdf8;
  letter-spacing: 0.06em;
`;

export const PillarTitle = styled.h3`
  font-size: 1.65rem;
  font-weight: 700;
  color: #f8fafc;
  letter-spacing: -0.015em;
  margin: 0;
`;

export const PillarDescription = styled.p`
  font-size: 1.45rem;
  line-height: 1.65;
  color: #94a3b8;
  margin: 0;
`;

export const JourneySection = styled.div`
  margin-top: 3.5rem;
  padding-top: 3.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
`;

export const JourneyTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
  font-family: monospace;
  margin-bottom: 2.4rem;
`;

export const MilestoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const MilestoneCard = styled.div`
  background: transparent;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  padding: 1.4rem 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #38bdf8;
  }

  .period {
    font-family: monospace;
    font-size: 1.15rem;
    font-weight: 700;
    color: #38bdf8;
    letter-spacing: 0.06em;
  }

  .title {
    font-size: 1.55rem;
    font-weight: 700;
    color: #f8fafc;
    letter-spacing: -0.015em;
    margin: 0;
  }

  .detail {
    font-size: 1.35rem;
    line-height: 1.6;
    color: #94a3b8;
  }
`;
