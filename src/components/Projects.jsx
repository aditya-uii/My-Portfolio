import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STUB_PROJECTS = [
    {
        id: 1,
        title: 'AI chat-bot',
        category: 'Ai bot',
        description: 'AI-ChatBot enables users to speak prompts, send them to an AI API and receive responses—all in a clean, responsive UI.',
        link: 'https://github.com/aditya-uii/AI-ChatBot'
    },
    {
        id: 2,
        title: 'Youtube-Clone-Reactjs',
        category: 'web-clone',
        description: 'A simple and clean YouTube Clone built using React and Vite, featuring video cards, a sidebar layout, a YouTube-style header, and responsive design.',
        link: 'https://github.com/aditya-uii/Youtube-Clone-Reactjs'
    },
    {
        id: 3,
        title: 'Fun Waffle Site',
        category: 'Fun',
        description: 'Waffle is a [brief description: e.g. “lightweight front-end UI project,” “interactive web app,” “utility for X”] built with HTML, CSS, and JavaScript.',
        link: 'https://github.com/aditya-uii/waffle'
    }
];

const Projects = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.project-card');

        cards.forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: i * 0.1
            });
        });

        gsap.from('.projects-header', {
            scrollTrigger: {
                trigger: '.projects-header',
                start: 'top 90%',
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });

    }, { scope: containerRef });

    return (
        <section id="projects" ref={containerRef} className="py-24 md:py-32 w-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="projects-header font-display text-3xl md:text-5xl font-medium mb-16 text-lofi-primary tracking-tight">
                    selected work<span className="text-lofi-accent2">.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {STUB_PROJECTS.map((project, i) => (
                        <div
                            key={project.id}
                            className="project-card group relative dark:bg-lofi-surface/40 bg-lofi-surface/60 backdrop-blur-md border dark:border-lofi-primary/[0.08] border-lofi-primary/10 p-8 rounded-2xl dark:hover:bg-lofi-surface hover:bg-lofi-surface border-transparent dark:hover:border-lofi-primary/[0.15] hover:border-lofi-primary/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-lofi-accent1/10"
                        >
                            {/* Dynamic glowing background that follows somewhat inside the card */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${i % 2 === 0 ? 'dark:from-lofi-accent1/20 from-lofi-accent1/40 dark:to-lofi-accent3/20 to-lofi-accent3/40' : 'dark:from-lofi-accent2/20 from-lofi-accent2/40 dark:to-lofi-accent1/20 to-lofi-accent1/40'} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 -z-10`} />

                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <span className="font-mono text-xs text-lofi-accent2">0{project.id} // {project.category}</span>
                                <a href={project.link} className="text-lofi-muted hover:text-lofi-primary transition-colors duration-300 bg-lofi-primary/5 rounded-full p-2 hover:bg-lofi-primary/10 group-hover:-rotate-12 group-hover:scale-110">
                                    <ExternalLink size={18} />
                                </a>
                            </div>

                            <h3 className="font-display text-2xl text-lofi-primary mb-4 group-hover:text-lofi-accent1 transition-colors duration-300 relative z-10">
                                {project.title}
                            </h3>
                            <p className="font-sans text-lofi-text/80 text-sm leading-relaxed relative z-10 group-hover:text-lofi-text transition-colors">
                                {project.description}
                            </p>

                            {/* Subtle hover blur effect */}
                            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-lofi-primary/5 rounded-full blur-[40px] group-hover:bg-lofi-primary/10 transition-all duration-700 opacity-0 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
