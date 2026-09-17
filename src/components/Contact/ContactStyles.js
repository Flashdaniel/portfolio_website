import styled from 'styled-components';

export const ContactCard = styled.div`
  background: #111a2e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 4rem;
  margin: 2rem 0 4rem;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 3rem 2.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2.4rem 1.6rem;
  }
`;

export const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactHeading = styled.h3`
  font-size: 2.6rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.2rem;
  letter-spacing: -0.3px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.2rem;
  }
`;

export const ContactText = styled.p`
  font-size: 1.55rem;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 2.4rem;
`;

export const ContactActions = styled.div`
  display: flex;
  gap: 1.4rem;
  flex-wrap: wrap;
`;

export const CopyEmailButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 1.2rem 2.2rem;
  background: linear-gradient(135deg, #13adc7 0%, #945dd6 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(19, 173, 199, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(19, 173, 199, 0.5);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`;

export const MailtoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 1.2rem 2.2rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #13adc7;
    outline-offset: 2px;
  }
`;

export const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  padding-left: 2rem;
  border-left: 1px solid rgba(255, 255, 255, 0.08);

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 2rem;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(19, 173, 199, 0.1);
    color: #13adc7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .content {
    display: flex;
    flex-direction: column;

    .label {
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: rgba(255, 255, 255, 0.5);
    }

    .value {
      font-size: 1.6rem;
      font-weight: 600;
      color: #ffffff;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: #13adc7;
      }
    }
  }
`;
