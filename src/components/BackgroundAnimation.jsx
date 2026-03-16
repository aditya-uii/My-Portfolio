import React, { useMemo } from 'react';

const BackgroundAnimation = () => {
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 10,
            duration: Math.random() * 10 + 10,
        }));
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none bg-lofi-bg transition-colors duration-500">
            {/* Softly glowing animated blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-lofi-accent3/20 dark:bg-lofi-accent3/20 bg-lofi-accent3/40 rounded-full dark:mix-blend-screen mix-blend-multiply filter blur-[120px] animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-lofi-accent1/20 dark:bg-lofi-accent1/20 bg-lofi-accent1/40 rounded-full dark:mix-blend-screen mix-blend-multiply filter blur-[130px] animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-lofi-accent2/20 dark:bg-lofi-accent2/20 bg-lofi-accent2/40 rounded-full dark:mix-blend-screen mix-blend-multiply filter blur-[150px] animate-blob animation-delay-4000"></div>

            {/* Subtle digital grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] z-0"></div>

            {/* Dark mode only: Ascending Stardust/Ashes */}
            <div className="hidden dark:block absolute inset-0 z-10 mix-blend-screen">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute bg-white rounded-full opacity-0 animate-[float-particle_15s_ease-in-out_infinite]"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`,
                            boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.8)`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BackgroundAnimation;
