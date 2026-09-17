import styled from 'styled-components';

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  margin: 3rem 0;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const EducationCard = styled.div`
  background: #111a2e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 2.4rem 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: rgba(56, 189, 248, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 1.6rem;
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const InstitutionBadge = styled.span`
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #38bdf8;
  padding: 3px 10px;
  border-radius: 4px;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.25);
`;

export const PeriodText = styled.span`
  font-size: 1.25rem;
  font-family: monospace;
  color: #64748b;
  font-weight: 600;
`;

export const InstitutionName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

export const CredentialName = styled.h4`
  font-size: 1.45rem;
  font-weight: 600;
  color: #38bdf8;
  line-height: 1.4;
  margin: 0;
`;

export const EducationDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #94a3b8;
  flex: 1;
`;

export const FocusTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const FocusTag = styled.span`
  font-size: 1.15rem;
  padding: 2px 8px;
  border-radius: 4px;
  background: #0b1120;
  border: 1px solid #1e293b;
  color: #cbd5e1;
  font-family: monospace;
`;
