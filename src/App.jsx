import React from 'react';
import NoiseOverlay from './components/NoiseOverlay';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen w-full selection:bg-lofi-accent2/30 selection:text-lofi-primary bg-transparent">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Opening Animation Preloader */}
      <Preloader />

      {/* Global Background Animation & Overlay */}
      <BackgroundAnimation />
      <NoiseOverlay />

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10 flex flex-col items-center w-full min-h-screen">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
