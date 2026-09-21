import styled from 'styled-components';

export const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 3.6rem;
  margin: 2.5rem 0 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2.2rem 1.6rem;
    gap: 2rem;
  }

  @media (max-width: 360px) {
    padding: 1.8rem 1.2rem;
    gap: 1.6rem;
  }
`;

export const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.6rem;
  padding-bottom: 2.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const RoleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const JobTitle = styled.h3`
  font-size: 2.6rem;
  font-weight: 700;
  color: #f8fafc;
  letter-spacing: -0.025em;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.1rem;
  }
`;

export const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  .company-name {
    font-size: 1.75rem;
    font-weight: 600;
    color: #38bdf8;
  }

  .separator {
    color: #475569;
  }

  .badge {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 4px;
    background: rgba(56, 189, 248, 0.08);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.25);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const TenureBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 4px;
  background: rgba(34, 197, 94, 0.06);
  border: 1px solid rgba(34, 197, 94, 0.25);
  color: #4ade80;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: monospace;

  .current-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #22c55e;
  }
`;

export const ProductBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(56, 189, 248, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 3px solid #38bdf8;
  border-radius: 4px;
  padding: 2.2rem 2.4rem;
  flex-wrap: wrap;
  gap: 1.8rem;
  box-sizing: border-box;

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    max-width: 680px;

    .tag-row {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .label {
      font-size: 1.15rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #38bdf8;
      font-family: monospace;
    }

    .title {
      font-size: 2rem;
      font-weight: 700;
      color: #f8fafc;
      letter-spacing: -0.02em;
    }

    .description {
      font-size: 1.45rem;
      color: #94a3b8;
      line-height: 1.6;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.6rem;

    .product-info .title {
      font-size: 1.7rem;
    }
    .product-info .description {
      font-size: 1.35rem;
    }
  }
`;

export const LiveProductLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: 4px;
  background: #f8fafc;
  color: #0a0e17;
  font-size: 1.35rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    justify-content: center;
    min-height: 44px;
    box-sizing: border-box;
  }

  &:hover {
    background: #38bdf8;
    color: #0a0e17;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

export const ResponsibilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .section-subtitle {
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #94a3b8;
    font-family: monospace;
  }
`;

export const ResponsibilitiesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.2rem;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`;

export const ResponsibilityItem = styled.li`
  background: transparent;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0;
  padding: 1.6rem 0 0 0;
  font-size: 1.45rem;
  line-height: 1.65;
  color: #94a3b8;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  box-sizing: border-box;

  strong {
    color: #f8fafc;
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: -0.01em;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.35rem;
    padding-top: 1.4rem;

    strong {
      font-size: 1.4rem;
    }
  }
`;

export const StackRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .label {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #94a3b8;
    font-family: monospace;
    margin-right: 0.4rem;
  }
`;

export const StackPill = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  font-family: monospace;
`;

