import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Check if it's a touch device
        if (window.matchMedia("(pointer: coarse)").matches) return;

        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.15;

        const xSet = gsap.quickSetter(follower, "x", "px");
        const ySet = gsap.quickSetter(follower, "y", "px");

        const onMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0, ease: "none" });
        };

        gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });

        const onMouseDown = () => {
            gsap.to(cursor, { scale: 0.5, duration: 0.2 });
            gsap.to(follower, { scale: 1.5, opacity: 0.4, duration: 0.2 });
        };

        const onMouseUp = () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(follower, { scale: 1, opacity: 0.15, duration: 0.2 });
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        // Hide default cursor on body
        document.body.style.cursor = 'none';

        // Add interactivity to links and buttons
        const handleMouseOver = (e) => {
            const target = e.target.closest('a, button');
            if (target) {
                gsap.to(cursor, { scale: 0, duration: 0.2 });
                gsap.to(follower, { scale: 2.5, backgroundColor: '#c87968', opacity: 0.3, duration: 0.2 });
            } else {
                gsap.to(cursor, { scale: 1, duration: 0.2 });
                gsap.to(follower, { scale: 1, backgroundColor: '#e0dcd3', opacity: 0.15, duration: 0.2 });
            }
        };

        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseover', handleMouseOver);
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-lofi-primary rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 bg-lofi-primary opacity-15 rounded-full pointer-events-none z-[99] blur-[1px] hidden md:block transition-colors duration-300"
            />
        </>
    );
};

export default CustomCursor;
