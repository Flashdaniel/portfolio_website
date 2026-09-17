import styled from 'styled-components';

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 4.8rem;
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 3.2rem;
  }
`;

export const ProseColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const Paragraph = styled.p`
  font-size: 1.7rem;
  line-height: 1.75;
  color: #94a3b8;
  font-weight: 400;

  strong {
    color: #f1f5f9;
    font-weight: 600;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.55rem;
    line-height: 1.65;
  }
`;

export const HighlightsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const PillarCard = styled.div`
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 2rem 2.2rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #334155;
    background: #111e38;
  }
`;

export const PillarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 0.8rem;
`;

export const PillarNumber = styled.span`
  font-family: monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
`;

export const PillarTitle = styled.h3`
  font-size: 1.65rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.2px;
`;

export const PillarDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #94a3b8;
`;

export const JourneySection = styled.div`
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #1e293b;
  width: 100%;
`;

export const JourneyTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #64748b;
  margin-bottom: 2rem;
`;

export const MilestoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.6rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

export const MilestoneCard = styled.div`
  background: #0b1120;
  border: 1px solid #1e293b;
  border-radius: 10px;
  padding: 1.6rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  .period {
    font-family: monospace;
    font-size: 1.2rem;
    font-weight: 600;
    color: #38bdf8;
  }

  .title {
    font-size: 1.45rem;
    font-weight: 600;
    color: #ffffff;
  }

  .detail {
    font-size: 1.3rem;
    line-height: 1.5;
    color: #64748b;
  }
`;
