import { styled } from '@linaria/react';
import { LinkedIn } from '@michalspace/components/Ilustration/LinkedIn';
import { Github } from '@michalspace/components/Ilustration/Github';
import { Twitter } from '@michalspace/components/Ilustration/Twitter';
import { ProgrammerBrain } from '../Ilustration/ProgrammerBrain';
// import { Image } from '../Image';
import { mediaMin } from '@michalspace/utils/mediaQueries';

export const LinkedInIcon = styled(LinkedIn)`
    width: 4rem;
    height: 4.5rem;
    color: var(--button-active-color);
`;

export const GithubIcon = styled(Github)`
    width: 4rem;
    height: 4.1rem;
    color: var(--button-active-color);
`;

export const TwitterIcon = styled(Twitter)`
    width: 4rem;
    height: 4rem;
    color: var(--button-inactive-color);
`;

export const SidebarLink = styled.a`
    text-decoration: none;
    display: block;
`;

export const LinksSidebar = styled.aside`
    display: none;

    ${mediaMin('medium')} {
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        & > * {
            margin-top: 3rem;
        }
        &:first-child {
            margin-top: 6rem;
        }
    }
`;

export const Bubble = styled.div`
    display: inline-block;
    background: var(--bubble-background-primary);
    color: var(--bubble-font-color);
    font-size: var(--font-size-note);
    padding: 1em 1.2em;
    border-radius: 1em;
    position: relative;
    font-weight: 700;
    margin-left: 4rem;

    &::after {
        position: absolute;
        display: block;
        content: '';
        width: 0;
        height: 0;
        border-left: 1.8em solid transparent;
        border-right: 1em solid transparent;
        border-top: 1.4em solid var(--bubble-background-primary);

        bottom: -1.2rem;
        right: 1.4rem;
    }
`;

export const LightTitlePart = styled.span`
    color: var(--font-color-heading-light);
`;

export const IntroductionTitle = styled.h1`
    font-size: var(--font-size-heading-primary);
    color: var(--font-color-heading-primary);
    margin: 0px;
    margin-top: 1rem;
`;

export const IntroductionText = styled.p`
    font-size: var(--font-size-text);
    font-weight: var(--font-weight-text);
    color: var(--font-color-text-primary);
    max-width: 45rem;
    margin: 0px;
`;

export const HelloButton = styled.a`
    padding: 2.5em 2.2em;
    background: var(--bubble-background-secondary);
    color: var(--bubble-font-color);
    font-size: var(--font-size-note);
    line-height: 1.2em;
    border-radius: 10em;
    border: none;
    position: relative;
    z-index: 1;
    text-align: left;
    margin-top: 7.8rem;
    align-self: center;
    text-decoration: none;

    &::before {
        z-index: -1;
        width: 5em;
        height: 5em;
        border-radius: 10em;
        content: '';
        display: block;
        background: var(--bubble-background-primary);
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        margin: auto;
    }
`;

export const IntroductionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const SecondaryIntroduction = styled.div`
    flex-direction: column;
    align-items: center;
    display: flex;
    margin-top: 3rem;

    ${mediaMin('medium')} {
        justify-content: space-between;
        flex-direction: row;
    }
`;

export const IntroductionWrapper = styled.div`
    text-align: center;
    margin: 0 var(--layout-panel-content-padding-size);

    ${mediaMin('medium')} {
        text-align: left;
    }
`;

export const ProgrammerIllustration = styled(ProgrammerBrain)`
    width: 100rem;
    max-width: 100%;
    height: auto;
    margin: 7rem auto 0rem auto;
    display: block;
`;

export const ItsMeSection = styled.section`
    position: relative;
    margin: 0px var(--layout-panel-padding-size);
`;
