import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 3.6rem;
  margin: 2.5rem 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 4.8rem;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 3.6rem;
    padding: 2.8rem 2.2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 1.6rem;
    border-radius: 6px;
    gap: 2.6rem;
  }

  @media (max-width: 360px) {
    padding: 1.6rem 1.2rem;
  }
`;

// Left Column: Channels & Direct Contact
export const ContactInfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ContactSubheading = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: #f8fafc;
  margin: 0;
  letter-spacing: -0.025em;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;

export const ContactDescription = styled.p`
  font-size: 1.45rem;
  line-height: 1.65;
  color: #94a3b8;
  margin: 0.6rem 0 0 0;
`;

export const ChannelsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-top: 0.5rem;
`;

export const ChannelCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 1.2rem 1.4rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 4px;
  transition: border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(56, 189, 248, 0.35);
  }

  .channel-icon {
    width: 36px;
    height: 36px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #38bdf8;
  }

  .channel-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;

    .channel-label {
      font-size: 1.15rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #94a3b8;
      font-family: monospace;
      margin-bottom: 2px;
    }

    .channel-value {
      font-size: 1.4rem;
      font-weight: 500;
      color: #f1f5f9;
      text-decoration: none;
      word-break: break-all;
      overflow-wrap: break-word;
      transition: color 0.2s ease;

      &:hover {
        color: #38bdf8;
      }
    }
  }
`;

export const QuickActionsRow = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-top: 0.8rem;
`;

export const CvDownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.95rem 1.8rem;
  background: #f8fafc;
  color: #0a0e17;
  border-radius: 4px;
  font-size: 1.35rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #38bdf8;
    color: #0a0e17;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

export const CopyEmailButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.95rem 1.8rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #f8fafc;
  border-radius: 4px;
  font-size: 1.35rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #38bdf8;
    color: #38bdf8;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

// Right Column: Functional Contact Form
export const ContactFormCol = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.4rem;
  border-left: 1px solid rgba(255, 255, 255, 0.08);

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 3rem;
  }
`;

export const FormHeading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #f8fafc;
  margin: 0 0 0.6rem 0;
  letter-spacing: -0.02em;
`;

export const FormSubtext = styled.p`
  font-size: 1.4rem;
  color: #94a3b8;
  margin: 0 0 2rem 0;
  line-height: 1.55;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 600;
  color: #e2e8f0;
  display: flex;
  align-items: center;
  gap: 4px;

  .required {
    color: #f43f5e;
    font-size: 1.4rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 44px;
  box-sizing: border-box;
  padding: 1rem 1.4rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${(props) => (props['aria-invalid'] ? '#f43f5e' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 4px;
  color: #ffffff;
  font-size: 1.4rem;
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props['aria-invalid'] ? '#f43f5e' : '#38bdf8')};
    box-shadow: 0 0 0 2px ${(props) => (props['aria-invalid'] ? 'rgba(244, 63, 94, 0.2)' : 'rgba(56, 189, 248, 0.2)')};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 1.1rem 1.4rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${(props) => (props['aria-invalid'] ? '#f43f5e' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 4px;
  color: #ffffff;
  font-size: 1.4rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props['aria-invalid'] ? '#f43f5e' : '#38bdf8')};
    box-shadow: 0 0 0 2px ${(props) => (props['aria-invalid'] ? 'rgba(244, 63, 94, 0.2)' : 'rgba(56, 189, 248, 0.2)')};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const FieldError = styled.span`
  font-size: 1.2rem;
  color: #f87171;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1.1rem 2.2rem;
  min-height: 44px;
  background: #f8fafc;
  color: #0a0e17;
  border: 1px solid #f8fafc;
  border-radius: 4px;
  font-size: 1.45rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    background: #38bdf8;
    border-color: #38bdf8;
    color: #0a0e17;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(10, 14, 23, 0.3);
  border-top-color: #0a0e17;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  display: inline-block;
`;

// Success Card
export const SuccessCard = styled.div`
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 4px;
  padding: 2.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2rem;

  .success-icon {
    color: #22c55e;
  }

  h4 {
    font-size: 2rem;
    font-weight: 700;
    color: #f8fafc;
    margin: 0;
  }

  p {
    font-size: 1.45rem;
    line-height: 1.6;
    color: #cbd5e1;
    margin: 0;
    max-width: 440px;
  }
`;

export const ResetButton = styled.button`
  margin-top: 1rem;
  padding: 0.9rem 1.8rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #f8fafc;
  border-radius: 4px;
  font-size: 1.35rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #38bdf8;
    border-color: #38bdf8;
  }

  &:active {
    transform: translateY(1px);
  }
`;

// Error Banner
export const ErrorBanner = styled.div`
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: 4px;
  padding: 1.4rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: #fecaca;
  font-size: 1.35rem;
  line-height: 1.5;

  .error-top {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: #f87171;
  }

  .fallback-actions {
    display: flex;
    gap: 1rem;
    margin-top: 0.4rem;
    flex-wrap: wrap;
  }
`;

export const FallbackMailtoBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.7rem 1.4rem;
  background: #f43f5e;
  color: #ffffff;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    color: #ffffff;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const RetryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.7rem 1.4rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  &:active {
    transform: translateY(1px);
  }
`;

// Legacy exports for backward compatibility
export const ContactLeft = ContactInfoCol;
export const ContactHeading = ContactSubheading;
export const ContactText = ContactDescription;
export const ContactActions = QuickActionsRow;
export const MailtoLink = CvDownloadButton;
export const LinkedInButton = CvDownloadButton;
export const ContactRight = ContactFormCol;
export const InfoItem = ChannelCard;
