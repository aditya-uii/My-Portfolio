import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Preloader = () => {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Fake loading progress
        tl.to({ value: 0 }, {
            value: 100,
            duration: 2.2,
            ease: 'power3.inOut',
            onUpdate: function () {
                setProgress(Math.round(this.targets()[0].value));
            }
        });

        // Fade out text
        tl.to('.preloader-content', {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: 'power3.inOut'
        });

        // Slide out the background panel seamlessly
        tl.to('.preloader-panel', {
            yPercent: -100,
            duration: 1.2,
            ease: 'expo.inOut',
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
            {/* The absolute background that slides away */}
            <div className="preloader-panel absolute inset-0 bg-lofi-bg z-10"></div>

            <div className="preloader-content relative z-20 w-full h-full flex flex-col items-center justify-center">
                <div className="flex items-center space-x-3 mb-6">
                    <span className="w-2 h-2 rounded-full bg-lofi-accent2 animate-pulse"></span>
                    <span className="font-mono text-lofi-accent2 text-sm uppercase tracking-widest">loading vibes</span>
                </div>
                <div className="font-display text-7xl md:text-[9rem] text-lofi-primary font-bold tracking-tighter flex items-end">
                    {progress}<span className="text-lofi-muted text-4xl md:text-6xl mb-2 md:mb-6 leading-none">%</span>
                </div>

                {/* Fake progress bar line */}
                <div className="absolute bottom-1/4 w-48 h-[1px] bg-white/10 overflow-hidden">
                    <div
                        className="h-full bg-lofi-accent1 transition-all duration-[2.2s] ease-[cubic-bezier(0.645,0.045,0.355,1)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Preloader;
