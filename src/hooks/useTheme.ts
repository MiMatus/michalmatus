'use client';

import { ThemeType } from '@michalspace/types/theme';
import { useEffect, useSyncExternalStore } from 'react';

let theme: ThemeType | undefined = undefined;
let listeners: (() => void)[] = [];

type themeSetter = (prevTheme: ThemeType) => ThemeType;

const setTheme = (setter: themeSetter) => {
    theme = setter(theme ?? 'light');
    for (let listener of listeners) {
        listener();
    }
};

const subscribe = (listener: () => void) => {
    listeners = [...listeners, listener];
    return () => {
        listeners = listeners.filter((l) => l !== listener);
    };
};

const getSnapshot = (): ThemeType => {
    return theme ?? 'light';
};

export const useTheme = () => {
    const syncTheme = useSyncExternalStore<ThemeType>(subscribe, getSnapshot, getSnapshot);

    useEffect(() => {
        if (typeof theme === 'undefined') {
            if (window?.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme(() => 'dark');
                return;
            }
        }
    }, []);

    return [syncTheme, setTheme] as const;
};
