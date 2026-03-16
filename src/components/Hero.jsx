import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        tl.from('.hero-text', {
            y: 60,
            opacity: 0,
            duration: 1.6,
            stagger: 0.15,
            delay: 2.8
        })
            .from('.hero-badge', {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.5)'
            }, "-=1.2")
            .from('.hero-scatter', {
                scale: 0,
                opacity: 0,
                y: 30,
                stagger: 0.15,
                duration: 1.5,
                ease: 'elastic.out(1, 0.6)'
            }, "-=1.0")
            .from('.bg-outline-text', {
                opacity: 0,
                scale: 1.1,
                duration: 2,
            }, "-=1.4");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center pt-20 w-full overflow-hidden">

            {/* Outline text in background for depth */}
            <div className="bg-outline-text absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] text-center pointer-events-none opacity-[0.03] dark:opacity-[0.03] opacity-[0.08] select-none z-0 overflow-hidden dark:mix-blend-plus-lighter mix-blend-multiply hidden md:block">
                <h1 className="text-[20vw] font-display font-extrabold leading-none text-transparent tracking-tighter" style={{ WebkitTextStroke: '2px rgb(var(--lofi-primary))' }}>
                    CREATIVE
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col md:flex-row items-center justify-between z-10 relative">

                {/* Left Text Column */}
                <div className="w-full md:w-1/2 flex flex-col items-start dark:items-end dark:text-right pr-0 md:pr-10">
                    <div className="hero-badge font-mono text-lofi-accent2 mb-8 text-sm flex items-center space-x-3 dark:bg-lofi-primary/[0.03] bg-lofi-primary/[0.08] py-2 px-5 rounded-full border dark:border-lofi-primary/[0.05] border-lofi-primary/20 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/40">
                        <span className="w-2 h-2 rounded-full bg-lofi-accent2 animate-pulse-slow shadow-[0_0_10px_rgb(var(--lofi-accent2))]"></span>
                        <span>status: shipping cool ideas</span>
                    </div>

                    <h1 className="hero-text text-5xl md:text-6xl lg:text-[6rem] font-display font-medium text-lofi-primary mb-8 leading-[1.05] tracking-tighter drop-shadow-2xl">
                        <span className="dark:hidden">front-end dev <br /></span>
                        <span className="hidden dark:inline">digital <br /> architect <br /></span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lofi-text via-lofi-accent1 to-lofi-accent3 mix-blend-lighten">
                            creating vibes.
                        </span>
                    </h1>

                    <p className="hero-text font-sans text-lofi-text/80 max-w-lg md:text-xl mb-12 leading-relaxed">
                        I believe the web should feel like a cozy, inviting space.
                        Specializing in React, minimalist design, and satisfying interactions.
                    </p>

                    <div className="hero-text flex flex-col sm:flex-row items-start dark:items-end gap-6 w-full dark:justify-end">
                        <a href="#projects" className="group relative inline-flex items-center space-x-4 font-mono text-sm text-lofi-primary overflow-hidden px-8 py-4 bg-lofi-primary/10 rounded-full border border-lofi-primary/10 hover:bg-lofi-primary/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(242,132,130,0.2)]">
                            <span className="relative z-10">view work [↓]</span>
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-lofi-accent1/20 to-lofi-accent3/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-full"></div>
                        </a>

                        {/* Extra element visible only in dark mode to break symmetry */}
                        <div className="hidden dark:block h-[1px] w-24 bg-white/10 my-auto"></div>
                    </div>
                </div>

                {/* Right Interactive Column - Floating Ecosystem (Visible in Dark Mode/Large Screens) */}
                <div className="w-full md:w-1/2 hidden md:flex justify-center items-center relative pl-0 md:pl-10 mt-16 md:mt-0 h-[30rem] lg:h-[40rem]">

                    {/* Floating Badges */}
                    <div className="hero-scatter absolute top-[25%] right-[15%] px-6 py-3 rounded-full bg-lofi-surface/40 border border-white/10 backdrop-blur-md text-lofi-primary font-mono text-sm shadow-xl shadow-lofi-accent2/10 animate-float" style={{ animationDelay: '0s' }}>
                        {`<React />`}
                    </div>

                    <div className="hero-scatter absolute top-[45%] left-[10%] px-5 py-2.5 rounded-full bg-lofi-surface/40 border border-white/10 backdrop-blur-md text-lofi-accent2 font-mono text-xs shadow-xl shadow-lofi-accent1/10 animate-float" style={{ animationDelay: '1.5s' }}>
                        gsap.to()
                    </div>

                    <div className="hero-scatter absolute bottom-[25%] right-[25%] px-6 py-3 rounded-full bg-lofi-surface/40 border border-white/10 backdrop-blur-md text-lofi-accent1 font-mono text-sm shadow-xl shadow-white/5 animate-float" style={{ animationDelay: '3s' }}>
                        TailwindCSS
                    </div>

                    <div className="hero-scatter absolute bottom-[15%] left-[20%] px-4 py-2 rounded-full bg-lofi-surface/40 border border-white/10 backdrop-blur-md text-lofi-muted font-mono text-xs shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                        UI / UX
                    </div>

                    <div className="hero-scatter absolute top-[15%] left-[30%] px-5 py-2 rounded-full bg-transparent border border-white/20 text-white/50 font-mono text-xs backdrop-blur-sm animate-float" style={{ animationDelay: '0.8s' }}>
                        * cloud *
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
