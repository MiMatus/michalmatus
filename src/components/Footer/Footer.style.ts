import { styled } from '@linaria/react';
import { Github } from '../Ilustration/Github';
import { LinkedIn } from '../Ilustration/LinkedIn';
import { Logo } from '../Ilustration/Logo';
import { Twitter } from '../Ilustration/Twitter';

export const FooterLogo = styled(Logo)`
    & circle {
        fill: var(--font-color-text-secondary);
    }
    & path {
        fill: var(--layout-panel-background-secondary);
    }
`;

export const Motto = styled.h3`
    font-size: var(--font-size-text);
    font-weight: 300;
    color: var(--font-color-text-secondary);
    margin: 2rem 0 0 0;
    max-width: 45rem;
`;

export const LinkedInIcon = styled(LinkedIn)`
    width: 4rem;
    height: 4.5rem;
    color: var(--font-color-text-secondary);
`;

export const GithubIcon = styled(Github)`
    width: 4rem;
    height: 4.1rem;
    color: var(--font-color-text-secondary);
`;

export const TwitterIcon = styled(Twitter)`
    width: 4rem;
    height: 4rem;
    color: var(--font-color-text-secondary);
    opacity: 0.3;
`;

export const FooterLink = styled.a`
    text-decoration: none;
    display: block;
`;

export const FooterLinks = styled.nav`
    display: flex;
    gap: 4rem;
    margin-top: 2rem;
`;

export const PageSourceLink = styled.a`
    text-decoration: none;
    font-size: var(--font-size-text);
    font-weight: 300;
    color: var(--font-color-text-secondary);
    margin-top: 4rem;
`;

export const AttributionTitle = styled.h4`
    font-size: var(--font-size-small-note);
    font-weight: 300;
    color: var(--font-color-text-secondary);
    margin: 0 0 2rem 0;
`;

export const AttributionLink = styled.a`
    display: block;
    font-size: var(--font-size-small-note);
    font-weight: 300;
    color: var(--font-color-text-secondary);
    text-decoration: none;
`;

export const AttributionList = styled.div``;

export const FooterWrapper = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--layout-panel-background-secondary);
    padding: var(--layout-panel-padding-size);
    margin-top: 10rem;
    text-align: center;
`;
