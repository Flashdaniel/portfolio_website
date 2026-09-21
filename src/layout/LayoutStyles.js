import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const pageFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainContent = styled.main`
  animation: ${pageFadeIn} 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
  outline: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
`;

export const SkipToContentLink = styled.a`
  position: absolute;
  top: 16px;
  left: 16px;
  transform: translateY(-200px);
  background: #38bdf8;
  color: #0b1120;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.4rem;
  z-index: 1000;
  text-decoration: none;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);

  &:focus {
    transform: translateY(0);
    outline: 3px solid #ffffff;
    outline-offset: 2px;
  }
`;
