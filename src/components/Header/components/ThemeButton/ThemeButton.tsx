'use client';

import { useTheme } from '@michalspace/hooks/useTheme';
import { FC, MouseEventHandler, useCallback } from 'react';
import { Button, MoonIcon, SunIcon } from './ThemeButton.style';

export const ThemeButton: FC = () => {
    const [theme, setTheme] = useTheme();

    const onClick = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }, [setTheme]);

    return (
        <Button onClick={onClick} data-theme={theme} aria-label="Theme switch button">
            <MoonIcon />
            <SunIcon />
        </Button>
    );
};
