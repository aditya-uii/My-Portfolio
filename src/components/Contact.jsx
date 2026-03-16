import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import emailjs from '@emailjs/browser';
import { X } from 'lucide-react';

const Contact = () => {
    const containerRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const formRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setTimeout(() => {
                setIsModalOpen(false);
                setSubmitStatus(null);
                formRef.current?.reset();
            }, 3000);
        }).catch((error) => {
            console.error(error);
            setIsSubmitting(false);
            setSubmitStatus('error');
        });
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            }
        });

        tl.from('.contact-content', {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: 'power3.out'
        });

        // Endless subtle pulsing on ambient glow
        gsap.to('.contact-glow', {
            opacity: 0.5,
            scale: 1.1,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }, { scope: containerRef });

    return (
        <footer id="contact" ref={containerRef} className="py-24 md:py-32 w-full relative overflow-hidden bg-lofi-surface/20 border-t border-lofi-primary/[0.03]">
            {/* Background ambient glow */}
            <div className="contact-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] max-w-4xl bg-gradient-to-b from-lofi-accent3/10 to-transparent blur-[120px] -z-10 rounded-full pointer-events-none opacity-80" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">

                {/* Main CTA */}
                <div className="text-center mb-32 relative z-10 w-full max-w-2xl">
                    <div className="contact-content w-16 h-16 mx-auto bg-lofi-accent2/10 rounded-full flex items-center justify-center mb-8 border border-lofi-primary/5">
                        <span className="w-2 h-2 rounded-full bg-lofi-accent2 animate-pulse"></span>
                    </div>

                    <p className="contact-content font-mono text-lofi-accent3 text-sm mb-4 tracking-wider uppercase">
                        what's next?
                    </p>
                    <h2 className="contact-content font-display text-5xl md:text-7xl font-medium text-lofi-primary mb-8 tracking-tighter">
                        let's create <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lofi-accent1 to-lofi-accent2">something chill.</span>
                    </h2>
                    <p className="contact-content font-sans text-lofi-text/70 mb-12 max-w-lg mx-auto leading-relaxed text-lg">
                        Currently open for new opportunities. Whether you have a question, a project idea, or just want to swap lofi recommendations, my inbox is open.
                    </p>

                    <div className="contact-content flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-lofi-primary text-lofi-bg font-mono text-sm font-medium rounded-full hover:bg-lofi-text transition-all duration-300 w-full sm:w-auto"
                        >
                            say hello -&gt;
                        </button>
                        {/* <a
                            href="#"
                            className="px-8 py-4 bg-transparent border border-lofi-primary/10 text-lofi-primary font-mono text-sm font-medium rounded-full hover:bg-lofi-primary/5 transition-all duration-300 w-full sm:w-auto"
                        >
                            resume 
                                                   </a> */}
                    </div>
                </div>

                {/* Footer Grid */}
                <div className="contact-content w-full grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 border-t border-lofi-primary/5 relative z-10">

                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="font-display font-medium text-2xl text-lofi-primary hover:text-lofi-accent2 transition-colors inline-block mb-4">
                            Adi.
                        </a>
                        <p className="font-sans text-lofi-muted text-sm max-w-xs leading-relaxed">
                            Building digital experiences that prioritize realism, smooth interactions, and ultimate comfort.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-mono text-xs text-lofi-primary uppercase tracking-wider mb-2">Navigation</h4>
                        <a href="#projects" className="font-sans text-sm text-lofi-muted hover:text-lofi-accent1 transition-colors w-fit">Projects</a>
                        <a href="#about" className="font-sans text-sm text-lofi-muted hover:text-lofi-accent1 transition-colors w-fit">About</a>
                        <a href="#contact" className="font-sans text-sm text-lofi-muted hover:text-lofi-accent1 transition-colors w-fit">Contact</a>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-mono text-xs text-lofi-primary uppercase tracking-wider mb-2">Socials</h4>
                        <a href="https://github.com/aditya-uii" className="font-sans text-sm text-lofi-muted hover:text-lofi-accent2 transition-colors w-fit">GitHub</a>
                        <a href="https://www.instagram.com/adityakashyap7998/" className="font-sans text-sm text-lofi-muted hover:text-lofi-accent2 transition-colors w-fit">Instagram</a>
                        <a href="https://leetcode.com/u/Adi7998/" className="font-sans text-sm text-lofi-muted hover:text-lofi-accent2 transition-colors w-fit">LinkedIn</a>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="contact-content w-full mt-24 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-lofi-muted/60">
                    <p>© {new Date().getFullYear()} Aditya Kashyap. Designed with <span className="text-lofi-accent3">♥</span></p>
                    <p className="mt-4 md:mt-0">Remote India</p>
                </div>

            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm shadow-2xl">
                    <div className="bg-lofi-surface border border-lofi-primary/10 rounded-3xl p-8 w-full max-w-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <button onClick={() => setIsModalOpen(false)} className="text-lofi-muted hover:text-lofi-primary transition-colors">
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>
                        
                        <h3 className="font-display text-2xl text-lofi-primary mb-2">drop a line.</h3>
                        <p className="font-sans text-sm text-lofi-muted mb-8">Fill out the form and I'll get back to you soon.</p>

                        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5 text-left">
                            <div className="flex flex-col gap-1.5">
                                <label className="font-mono text-xs text-lofi-primary uppercase tracking-wider">Name</label>
                                <input required type="text" name="user_name" className="w-full bg-transparent border border-lofi-primary/20 rounded-xl px-4 py-3 text-sm text-lofi-text placeholder:text-lofi-muted/50 focus:outline-none focus:border-lofi-primary/50 transition-colors" placeholder="John Doe" />
                            </div>
                            
                            <div className="flex flex-col gap-1.5">
                                <label className="font-mono text-xs text-lofi-primary uppercase tracking-wider">Email</label>
                                <input required type="email" name="user_email" className="w-full bg-transparent border border-lofi-primary/20 rounded-xl px-4 py-3 text-sm text-lofi-text placeholder:text-lofi-muted/50 focus:outline-none focus:border-lofi-primary/50 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="font-mono text-xs text-lofi-primary uppercase tracking-wider">Message</label>
                                <textarea required name="message" rows={4} className="w-full bg-transparent border border-lofi-primary/20 rounded-xl px-4 py-3 text-sm text-lofi-text placeholder:text-lofi-muted/50 focus:outline-none focus:border-lofi-primary/50 transition-colors resize-none" placeholder="What's on your mind?"></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="mt-2 w-full px-8 py-4 bg-lofi-primary text-lofi-bg font-mono text-sm font-medium rounded-xl hover:bg-lofi-text transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isSubmitting ? 'sending...' : submitStatus === 'success' ? 'sent!' : submitStatus === 'error' ? 'error!' : 'send message ->'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Contact;
