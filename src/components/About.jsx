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

        // Setup mouse interaction for the vibe graphic
        const card = document.querySelector('.about-image-container');
        const orb = document.querySelector('.central-orb');
        const satellites = document.querySelectorAll('.satellite');
        
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();
            
            // Normalize cursor position
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;
            
            // 3D Tilt container
            gsap.to('.about-image-container', {
                rotationY: x * 15,
                rotationX: -y * 15,
                duration: 0.6,
                ease: 'power2.out',
                transformPerspective: 1000
            });
            
            // Move central orb
            gsap.to(orb, {
                x: x * 40,
                y: y * 40,
                duration: 1,
                ease: 'power3.out'
            });
            
            // Move satellites with different parallax factors
            satellites.forEach((sat, i) => {
                const factor = (i + 1) * 30;
                gsap.to(sat, {
                    x: x * factor,
                    y: y * factor,
                    duration: 1.2 + i * 0.2,
                    ease: 'power3.out'
                });
            });

            // Update Glow
            gsap.to('.cursor-glow', {
                x: clientX - left - 100,
                y: clientY - top - 100,
                opacity: 0.6,
                duration: 0.4
            });
        };

        const handleMouseLeave = () => {
            gsap.to('.about-image-container', {
                rotationY: 0,
                rotationX: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.5)'
            });
            gsap.to([orb, ...satellites], {
                x: 0,
                y: 0,
                duration: 1,
                ease: 'power2.out'
            });
            gsap.to('.cursor-glow', {
                opacity: 0,
                duration: 0.5
            });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, { scope: containerRef });

    return (
        <section id="about" ref={containerRef} className="py-24 md:py-32 w-full relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

                {/* Left column: Image / Vibe graphic */}
                <div className="w-full lg:w-1/2 relative group perspective">
                    <div className="about-image about-image-container relative z-10 w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden dark:bg-lofi-surface/40 bg-lofi-surface/60 border dark:border-lofi-primary/5 border-lofi-primary/15 backdrop-blur-sm shadow-2xl transition-all duration-500">
                        {/* Interactive Background Elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-lofi-accent3/10 via-lofi-accent1/5 to-transparent"></div>
                        
                        {/* Dynamic Glow that follows cursor */}
                        <div className="cursor-glow absolute w-[200px] h-[200px] bg-lofi-accent2/30 blur-[80px] rounded-full opacity-0 pointer-events-none transition-opacity duration-300"></div>

                        {/* Central Morphing Orb */}
                        <div className="central-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-lofi-accent1/40 to-lofi-accent2/20 blur-[40px] mix-blend-screen animate-pulse-slow"></div>

                        {/* Interactive Floating Satellites (Icons/Shapes) */}
                        <div className="relative w-full h-full flex items-center justify-center p-8 pointer-events-none overflow-hidden">
                            
                            {/* Layered Content */}
                            <div className="satellite absolute top-[15%] left-[20%] w-16 h-16 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center rotate-12">
                                <Code className="text-lofi-accent1" size={24} />
                            </div>

                            <div className="satellite absolute bottom-[20%] right-[15%] w-20 h-20 bg-white/5 dark:bg-black/10 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center -rotate-6">
                                <Coffee className="text-lofi-accent2" size={28} />
                            </div>

                            <div className="satellite absolute top-[25%] right-[20%] w-14 h-14 bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-xl border border-white/20 flex items-center justify-center -rotate-12">
                                <Music className="text-lofi-accent3" size={22} />
                            </div>

                            <div className="satellite absolute bottom-[15%] left-[15%] w-12 h-12 bg-white/5 dark:bg-black/10 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center rotate-6">
                                <div className="w-4 h-4 rounded-full bg-lofi-accent1/60 blur-sm"></div>
                            </div>

                            {/* Center visual focus */}
                            <div className="z-10 text-center scale-90 md:scale-100">
                                <div className="font-display text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br from-lofi-primary to-lofi-primary/40 select-none">
                                    VIBE
                                </div>
                                <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-lofi-muted mt-2">
                                    Digital Identity
                                </div>
                            </div>
                        </div>

                        {/* Interaction Prompt Overlay */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-60 group-hover:opacity-0 transition-opacity duration-300">
                            <p className="font-mono text-[10px] tracking-widest uppercase text-lofi-text/40">
                                [ drag or move to feel ]
                            </p>
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
