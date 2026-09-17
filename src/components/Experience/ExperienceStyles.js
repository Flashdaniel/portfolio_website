import styled from 'styled-components';

export const ExperienceCard = styled.div`
  background: #111a2e;
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 16px;
  padding: 3.6rem;
  margin: 2.5rem 0 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #38bdf8 0%, #2563eb 100%);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2.4rem 1.8rem;
    gap: 2rem;
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
  color: #ffffff;
  letter-spacing: -0.4px;

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
    font-size: 1.8rem;
    font-weight: 600;
    color: #38bdf8;
  }

  .separator {
    color: #475569;
  }

  .badge {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 4px;
    background: rgba(56, 189, 248, 0.12);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const TenureBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 6px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #4ade80;
  font-size: 1.35rem;
  font-weight: 600;
  font-family: monospace;

  .current-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #22c55e;
    box-shadow: 0 0 8px #22c55e;
  }
`;

export const ProductBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0b1120;
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 12px;
  padding: 2.2rem 2.4rem;
  flex-wrap: wrap;
  gap: 1.6rem;

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
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #38bdf8;
    }

    .title {
      font-size: 2rem;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.2px;
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
  gap: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  background: #38bdf8;
  color: #0b1120;
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #ffffff;
    color: #0b1120;
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(56, 189, 248, 0.4);
  }

  &:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }
`;

export const ResponsibilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  .section-subtitle {
    font-size: 1.35rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #64748b;
  }
`;

export const ResponsibilitiesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }
`;

export const ResponsibilityItem = styled.li`
  background: #0b1120;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.6rem;
  font-size: 1.45rem;
  line-height: 1.65;
  color: #94a3b8;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(56, 189, 248, 0.2);
  }

  strong {
    color: #f1f5f9;
    font-weight: 600;
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.35rem;
    padding: 1.4rem;

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
  padding-top: 1.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .label {
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #64748b;
    margin-right: 0.4rem;
  }
`;

export const StackPill = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 5px;
  background: #0b1120;
  border: 1px solid #1e293b;
  color: #cbd5e1;
  font-family: monospace;
`;

