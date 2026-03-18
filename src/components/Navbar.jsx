import React, { useRef } from 'react';
import { Github, Instagram } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const navRef = useRef(null);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -50,
            opacity: 0,
            duration: 1.5,
            ease: 'power4.out',
            delay: 3.2 
        });
    });

    return (
        <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-3xl z-50 px-6">
            <div className="bg-lofi-surface/40 backdrop-blur-md border border-lofi-primary/[0.08] px-6 py-4 rounded-full flex justify-between items-center shadow-2xl shadow-black/20">
                <a href="#" className="font-display font-medium text-lg text-lofi-primary hover:text-lofi-accent2 transition-colors">
                    Adiii.
                </a>

                <div className="hidden md:flex items-center space-x-8 text-sm font-mono text-lofi-muted">
                    <a href="#projects" className="hover:text-lofi-primary transition-colors">projects</a>
                    <a href="#about" className="hover:text-lofi-primary transition-colors">about</a>
                    <a href="#contact" className="hover:text-lofi-primary transition-colors">contact</a>
                </div>

                <div className="flex items-center space-x-4 text-lofi-muted">
                    <ThemeToggle />
                    <a href="https://github.com/aditya-uii" target="_blank" rel="noreferrer" className="hover:text-lofi-primary transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://www.instagram.com/adityakashyap7998/" target="_blank" rel="noreferrer" className="hover:text-lofi-primary transition-colors">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
