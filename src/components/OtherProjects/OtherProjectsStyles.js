import styled from 'styled-components';

export const OtherProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;
  margin: 2.5rem 0 3.5rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }
`;

export const CompactCard = styled.div`
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  box-sizing: border-box;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(56, 189, 248, 0.35);
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.8rem 1.6rem;
  }

  @media (max-width: 360px) {
    padding: 1.5rem 1.2rem;
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
  color: #f8fafc;
  letter-spacing: -0.02em;
`;

export const CategoryTag = styled.span`
  font-size: 1.15rem;
  font-weight: 600;
  color: #38bdf8;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-family: monospace;
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
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
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
  min-height: 38px;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;
