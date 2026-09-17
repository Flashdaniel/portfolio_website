import styled from 'styled-components';

export const ImgContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  background: #1e293b;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  padding: 3rem 0;
  column-gap: 2.8rem;
  row-gap: 3.6rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    row-gap: 2.4rem;
  }
`;

export const BlogCard = styled.div`
  background: #111a2e;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(19, 173, 199, 0.35);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
  }
`;

export const CardBody = styled.div`
  padding: 2rem 2.4rem 2.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
`;

export const TitleContent = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 1.2rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  color: #ffffff;
  font-size: 2.2rem;
  line-height: 1.3;
  letter-spacing: -0.3px;
`;

export const Subtitle = styled.p`
  font-size: 1.35rem;
  color: #38bdf8;
  font-weight: 600;
  margin-top: 0.4rem;
`;

export const Hr = styled.hr`
  width: 48px;
  height: 3px;
  margin: 12px 0 16px;
  border: 0;
  border-radius: 4px;
  background: linear-gradient(90deg, #13adc7 0%, #945dd6 100%);
`;

export const CardInfo = styled.p`
  width: 100%;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.45rem;
  line-height: 24px;
  margin-bottom: 1.6rem;
`;

export const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const HighlightItem = styled.li`
  font-size: 1.3rem;
  line-height: 1.5;
  color: #94a3b8;
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: #38bdf8;
  }
`;

export const StackTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin-bottom: 2.4rem;
  list-style: none;
`;

export const Tag = styled.li`
  color: #13adc7;
  background: rgba(19, 173, 199, 0.1);
  border: 1px solid rgba(19, 173, 199, 0.25);
  font-size: 1.25rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
`;

export const UtilityList = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: auto;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const LiveDemoLink = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #ffffff;
  font-size: 1.45rem;
  font-weight: 600;
  padding: 1rem 1.4rem;
  background: linear-gradient(135deg, #13adc7 0%, #945dd6 100%);
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(19, 173, 199, 0.4);
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`;

export const SourceCodeLink = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #ffffff;
  font-size: 1.45rem;
  font-weight: 600;
  padding: 1rem 1.4rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.35);
    transform: translateY(-2px);
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #13adc7;
    outline-offset: 2px;
  }
`;