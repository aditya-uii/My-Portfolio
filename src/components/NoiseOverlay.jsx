import React from 'react';

const NoiseOverlay = () => {
    return (
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-hard-light md:opacity-[0.03]">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
};

export default NoiseOverlay;
