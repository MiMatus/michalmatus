import { styled } from '@linaria/react';
import { ButtonLink } from '@michalspace/components/ButtonLink';
import { Logo } from '@michalspace/components/Ilustration/Logo';
import { mediaMin } from '@michalspace/utils/mediaQueries';
import { Message } from '../Ilustration/Message';

export const HeaderLogo = styled(Logo)`
    width: 4.5rem;
    height: 4.5rem;
    & circle {
        fill: var(--layout-panel-background-secondary);
    }
    & path {
        fill: var(--layout-panel-background-primary);
    }

    ${mediaMin('medium')} {
        width: 6.6rem;
        height: 6.6rem;
    }
`;

export const HelloIcon = styled(Message)`
    width: 1.2em;
    height: 1.2em;
    margin: 0.45em 0;

    ${mediaMin('medium')} {
        display: none;
    }
`;

export const HelloText = styled.span`
    display: none;
    ${mediaMin('medium')} {
        display: inline;
    }
`;

export const HelloLink = styled(ButtonLink)`
    && {
        font-size: 1.5rem;
        display: flex;
        margin-left: 4rem;
    }

    ${mediaMin('medium')} {
        && {
            font-size: 2.5rem;
        }
    }
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
`;

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: var(--layout-panel-padding-size);
`;
