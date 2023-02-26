'use client';

import { styled } from '@linaria/react';
import { useTheme } from '@michalspace/hooks/useTheme';
import { ThemeType } from '@michalspace/types/theme';
import { mediaMin } from '@michalspace/utils/mediaQueries';
import { FC, PropsWithChildren } from 'react';

export const Wrapper = styled.div<{ 'data-theme': ThemeType }>`
    display: flex;
    justify-content: center;
    width: 100%;

    background: var(--layout-background);
    transition: background 0.5s;

    ${mediaMin('large')} {
        padding-top: 8rem;
        padding-bottom: 8rem;
    }
`;

export const ThemeWrapper: FC<PropsWithChildren> = ({ children }) => {
    const [theme] = useTheme();

    return <Wrapper data-theme={theme}>{children}</Wrapper>;
};
