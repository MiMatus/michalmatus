'use client';

import { styled } from '@linaria/react';
import { Moon } from '@michalspace/components/Ilustration/Moon';
import { Sun } from '@michalspace/components/Ilustration/Sun';
import { ThemeType } from '@michalspace/types/theme';
import { mediaMin } from '@michalspace/utils/mediaQueries';

export const SunIcon = styled(Sun)``;

export const MoonIcon = styled(Moon)``;

export const Button = styled.button<{ 'data-theme': ThemeType }>`
    font-size: 2rem;
    background: none;
    outline: none;
    border: none;
    display: flex;
    align-items: flex-start;
    cursor: pointer;

    &[data-theme='dark'] {
        flex-direction: row-reverse;
    }

    ${mediaMin('medium')} {
        font-size: 3rem;
    }

    ${MoonIcon}, ${SunIcon} {
        width: 1em;
        height: 1em;
        color: var(--button-active-color);
        transition: width 0.5s;
    }

    &[data-theme='light'] ${SunIcon}, &[data-theme='dark'] ${MoonIcon} {
        color: var(--button-inactive-color);
        width: 0.65em;
        height: 0.65em;
    }
`;
