import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
    width: 100%;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${(props) => props.theme.fonts.title};
    overflow-wrap: break-word;
    word-break: break-word;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  img, svg, video, canvas, audio, iframe, embed, object {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea, button, select {
    font-family: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Universal accessible keyboard focus indicator */
  :focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 3px;
  }

  /* Screen reader only utility class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Subtle, professional scroll reveal */
  .scroll-reveal {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: opacity, transform;
  }

  .scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
    will-change: auto;
  }

  /* Accessibility: Support users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }

    .pulse-dot {
      animation: none !important;
    }

    .scroll-reveal {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
      will-change: auto !important;
    }
  }
`;

export default GlobalStyles;