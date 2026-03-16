import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import gsap from 'gsap';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    // Initialize theme
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;

        // Quick GSAP flash animation for transition
        gsap.to('body', { opacity: 0.8, duration: 0.1, yoyo: true, repeat: 1 });

        if (isDark) {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-lofi-primary/10 bg-lofi-surface/50 hover:bg-lofi-primary/10 text-lofi-muted hover:text-lofi-primary transition-colors duration-300 flex items-center justify-center backdrop-blur-md"
            aria-label="Toggle Theme"
        >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    );
};

export default ThemeToggle;
