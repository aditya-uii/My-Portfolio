import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Code, Coffee, Music } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            }
        });

        tl.from('.about-header', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
            .from('.about-text', {
                y: 20,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power2.out'
            }, "-=0.5")
            .from('.about-card', {
                scale: 0.9,
                opacity: 0,
                y: 20,
                stagger: 0.15,
                duration: 0.8,
                ease: 'back.out(1.7)'
            }, "-=0.4");

        // Continuous floating image subtle animation
        gsap.to('.about-image', {
            y: -15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

    }, { scope: containerRef });

    return (
        <section id="about" ref={containerRef} className="py-24 md:py-32 w-full relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

                {/* Left column: Image / Vibe graphic */}
                <div className="w-full lg:w-1/2 relative group perspective">
                    <div className="about-image relative z-10 w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden dark:bg-lofi-surface/40 bg-lofi-surface/60 border dark:border-lofi-primary/5 border-lofi-primary/15 backdrop-blur-sm flex items-center justify-center">
                        {/* Instead of a photo, a beautiful abstract lo-fi element */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-lofi-accent3/20 via-lofi-accent1/10 to-transparent"></div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-lofi-accent1/30 blur-[60px] rounded-full dark:mix-blend-screen mix-blend-multiply mix-blend-mode"></div>
                        <div className="absolute bottom-10 left-10 w-32 h-32 bg-lofi-accent2/20 blur-[50px] rounded-full dark:mix-blend-screen mix-blend-multiply mix-blend-mode"></div>

                        <div className="font-mono text-lofi-text/40 text-sm italic z-10 flex flex-col items-center">
                            <Music size={32} className="mb-4 text-lofi-accent2/50" />
                            <p>lofi beats playing softly</p>
                        </div>
                    </div>

                    {/* Decorative accents */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-lofi-accent2/20 to-transparent rounded-3xl blur-2xl -z-10 opacity-30 group-hover:opacity-60 transition duration-700"></div>
                    <div className="absolute top-8 -right-8 w-24 h-24 border border-lofi-accent1/30 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none hidden md:block"></div>
                </div>

                {/* Right column: Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start relative z-10">
                    <h2 className="about-header font-display text-3xl md:text-5xl font-medium mb-10 text-lofi-primary tracking-tight">
                        behind the code<span className="text-lofi-accent1">.</span>
                    </h2>

                    <div className="space-y-6 mb-12">
                        <p className="about-text font-sans text-lofi-text/80 text-base md:text-lg leading-relaxed">
                            Hey there. I'm a developer and designer who believes that technology shouldn't just be functional—it should evoke a feeling.
                        </p>
                        <p className="about-text font-sans text-lofi-text/80 text-base md:text-lg leading-relaxed">
                            When I'm not building pixel-perfect interfaces with React, you can usually find me compiling inspiration moodboards, brewing an unnecessary amount of coffee, or curating ridiculously chill Spotify playlists.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div className="about-card dark:bg-lofi-surface/40 bg-lofi-surface/60 p-6 rounded-xl border dark:border-lofi-primary/5 border-lofi-primary/10 flex items-start space-x-4">
                            <div className="bg-lofi-primary/5 p-3 rounded-lg text-lofi-accent2">
                                <Code size={20} />
                            </div>
                            <div>
                                <h4 className="font-display text-lofi-primary mb-1">Clean Code</h4>
                                <p className="font-sans text-lofi-muted text-sm">Scalable, maintainable, and deeply aesthetic.</p>
                            </div>
                        </div>

                        <div className="about-card dark:bg-lofi-surface/40 bg-lofi-surface/60 p-6 rounded-xl border dark:border-lofi-primary/5 border-lofi-primary/10 flex items-start space-x-4">
                            <div className="bg-lofi-primary/5 p-3 rounded-lg text-lofi-accent1">
                                <Coffee size={20} />
                            </div>
                            <div>
                                <h4 className="font-display text-lofi-primary mb-1">Fresh Ideas</h4>
                                <p className="font-sans text-lofi-muted text-sm">Always exploring the edge of web interactions.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
