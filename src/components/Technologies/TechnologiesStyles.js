import styled from 'styled-components';

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.4rem;
  margin: 3.5rem 0 5rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.8rem;
    margin: 2.5rem 0 3.5rem;
  }
`;

export const TechCard = styled.div`
  background: #111a2e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(19, 173, 199, 0.35);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }
`;

export const TechCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 1.6rem;
`;

export const TechIconBadge = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.gradient || 'linear-gradient(135deg, #13adc7 0%, #945dd6 100%)'};
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const TechCardTitle = styled.h3`
  font-weight: 700;
  font-size: 1.9rem;
  color: #ffffff;
  letter-spacing: -0.2px;
`;

export const TechDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.6rem;
`;

export const SkillTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

export const SkillTag = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.88);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(19, 173, 199, 0.12);
    border-color: rgba(19, 173, 199, 0.35);
    color: #13adc7;
  }
`;

