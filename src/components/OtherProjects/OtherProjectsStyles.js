import styled from 'styled-components';

export const OtherProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2.5rem 0 3.5rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`;

export const CompactCard = styled.div`
  background: #0d1527;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(56, 189, 248, 0.25);
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.8rem 1.6rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.2px;
`;

export const CategoryTag = styled.span`
  font-size: 1.15rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

export const CardDescription = styled.p`
  font-size: 1.35rem;
  line-height: 1.6;
  color: #94a3b8;
  flex: 1;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const TagPill = styled.span`
  font-size: 1.15rem;
  padding: 2px 8px;
  border-radius: 4px;
  background: #080d1a;
  border: 1px solid #1e293b;
  color: #cbd5e1;
  font-family: monospace;
`;

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const CompactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #38bdf8;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;
