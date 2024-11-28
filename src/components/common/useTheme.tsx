import { useState, useEffect } from 'react';

export function useTheme() {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        setTheme(systemTheme);

        const listener = (event: MediaQueryListEvent) => {
        setTheme(event.matches ? 'light' : 'dark');
        };

        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', listener);

        return () => {
        window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', listener);
        };
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
}