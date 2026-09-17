import styled from 'styled-components';

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.6rem;
  margin: 3rem 0 4.5rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const SkillCategoryCard = styled.div`
  background: #111a2e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 2.6rem;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(56, 189, 248, 0.35);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 1.6rem;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  margin-bottom: 2rem;
`;

export const CategoryTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const CategoryIconBadge = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.gradient || 'linear-gradient(135deg, #13adc7 0%, #2563eb 100%)'};
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`;

export const CategoryTitle = styled.h3`
  font-weight: 700;
  font-size: 2.1rem;
  color: #ffffff;
  letter-spacing: -0.3px;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.9rem;
  }
`;

export const SkillCountBadge = styled.span`
  font-size: 1.2rem;
  font-family: monospace;
  font-weight: 600;
  color: #64748b;
  padding: 3px 9px;
  border-radius: 4px;
  background: #090f1d;
  border: 1px solid #1e293b;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SkillChip = styled.li`
  font-size: 1.35rem;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 8px;
  background: #090f1d;
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: #e2e8f0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  .chip-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #38bdf8;
  }

  &:hover {
    background: rgba(56, 189, 248, 0.1);
    border-color: rgba(56, 189, 248, 0.35);
    color: #ffffff;
    transform: translateY(-1px);

    .chip-dot {
      background: #ffffff;
      box-shadow: 0 0 6px #38bdf8;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.25rem;
    padding: 7px 12px;
  }
`;
