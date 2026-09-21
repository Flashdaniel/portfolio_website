import styled from "styled-components"

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 2rem 28px 40px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem 16px 48px;
    width: 100%;
  }

  @media (max-width: 360px) {
    padding: 1.5rem 12px 40px;
  }
`;

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: color 0.2s ease, transform 0.2s ease;

	&:hover {
		color: #fff;
		transform: translateX(6px);
	}

	&:focus-visible {
		outline: 2px solid #38bdf8;
		outline-offset: 3px;
		border-radius: 4px;
		color: #ffffff;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 22px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`;

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;
align-items: center;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items: baseline;
	flex-direction: column;
	margin-right: auto;

	@media ${props => props.theme.breakpoints.sm}{
		margin: 0;
		align-items: flex-start;
	}
`

export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.7);
	letter-spacing: 0.02em;
	font-size: 1.5rem;
	line-height: 26px;
	margin-bottom: 0.8rem;

	@media ${props => props.theme.breakpoints.sm}{
		font-size: 1.35rem;
		line-height: 22px;
	}
`

export const Copyright = styled.p`
	color: #94a3b8;
	font-size: 1.3rem;
	line-height: 20px;
`;

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;
  gap: 0.8rem;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
	}
`;

export const LinkList = styled.div`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-wrap: wrap;
	gap: 48px;
  padding: 36px 0 28px;

	@media ${props => props.theme.breakpoints.md} {
		gap: 24px;
		padding: 28px 0 20px;
	}
	@media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
		gap: 16px;
		padding: 24px 0 16px;
	}
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 180px;

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

export const LinkTitle = styled.span`
  display: block;
	font-weight: 600;
	font-size: 1.2rem;
	line-height: 20px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
	color: #94a3b8;
	margin-bottom: 10px;
`;
