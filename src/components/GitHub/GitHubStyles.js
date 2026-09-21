import styled from 'styled-components';

export const GitHubHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2.8rem;
`;

export const ProfileButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.9rem 1.8rem;
  min-height: 42px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #f8fafc;
  font-size: 1.35rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

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

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ReposGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
  width: 100%;
  margin-bottom: 4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }
`;

export const RepoCard = styled.article`
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
  box-sizing: border-box;

  &:hover {
    border-color: rgba(56, 189, 248, 0.35);
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.8rem 1.4rem;
  }

  @media (max-width: 360px) {
    padding: 1.5rem 1.2rem;
  }
`;

export const RepoTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .repo-icon {
    color: #38bdf8;
    flex-shrink: 0;
  }
`;

export const RepoName = styled.h3`
  font-size: 1.65rem;
  font-weight: 700;
  color: #f8fafc;
  margin: 0;
  font-family: monospace;
  letter-spacing: -0.02em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 360px) {
    font-size: 1.45rem;
  }
`;

export const RepoDescription = styled.p`
  font-size: 1.35rem;
  line-height: 1.6;
  color: #94a3b8;
  margin: 0;
  flex: 1;
`;

export const RepoTechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const RepoTechTag = styled.span`
  font-size: 1.15rem;
  font-family: monospace;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
`;

export const RepoActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: auto;
`;

export const RepoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  min-height: 38px;
  padding: 6px 10px;
  border-radius: 4px;
  transition: all 0.2s ease;

  ${(props) =>
    props.primary
      ? `
    color: #38bdf8;
    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  `
      : `
    color: #cbd5e1;
    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  `}

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;
