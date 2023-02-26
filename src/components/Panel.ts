import { styled } from '@linaria/react';
import { mediaMin } from '@michalspace/utils/mediaQueries';

export const Panel = styled.div`
    background: var(--layout-panel-background-primary);
    flex: 1;
    max-width: 140rem;
    transition: background 0.5s;
    width: 100%;
    overflow: hidden;

    ${mediaMin('large')} {
        box-shadow: 0px 0.4rem 1.4rem rgba(0, 0, 0, 0.25);
        border-radius: 1rem;
    }
`;
