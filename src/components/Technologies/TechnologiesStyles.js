import styled from 'styled-components';

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.8rem;
  margin: 3rem 0 4.5rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 2.2rem;
  }
`;

export const SkillCategoryCard = styled.div`
  background: transparent;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0;
  padding: 1.8rem 0 0 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #38bdf8;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.8rem;
`;

export const CategoryIndex = styled.span`
  font-family: monospace;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #38bdf8;
  text-transform: uppercase;
`;

export const CategoryTitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const CategoryIconBadge = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #38bdf8;
  flex-shrink: 0;
`;

export const CategoryTitle = styled.h3`
  font-weight: 700;
  font-size: 1.85rem;
  color: #f8fafc;
  letter-spacing: -0.02em;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.75rem;
  }
`;

export const SkillCountBadge = styled.span`
  font-size: 1.15rem;
  font-family: monospace;
  font-weight: 600;
  color: #94a3b8;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SkillChip = styled.li`
  font-size: 1.3rem;
  font-weight: 500;
  padding: 6px 11px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  .chip-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #38bdf8;
  }

  &:hover {
    background: rgba(56, 189, 248, 0.08);
    border-color: rgba(56, 189, 248, 0.3);
    color: #f8fafc;
    transform: translateY(-1px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.25rem;
    padding: 5px 9px;
  }
`;
