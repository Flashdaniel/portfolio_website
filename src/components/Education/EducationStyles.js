import styled from 'styled-components';

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
  margin: 3rem 0;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 2.6rem;
  }
`;

export const EducationCard = styled.div`
  background: transparent;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0;
  padding: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &:hover {
    border-color: #38bdf8;
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const InstitutionBadge = styled.span`
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #38bdf8;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.25);
  font-family: monospace;
`;

export const PeriodText = styled.span`
  font-size: 1.25rem;
  font-family: monospace;
  color: #94a3b8;
  font-weight: 600;
`;

export const InstitutionName = styled.h3`
  font-size: 1.85rem;
  font-weight: 700;
  color: #f8fafc;
  letter-spacing: -0.02em;
  margin: 0 0 4px 0;
`;

export const CredentialName = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
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
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const FocusTag = styled.span`
  font-size: 1.15rem;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  font-family: monospace;
`;
