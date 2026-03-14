import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import Expertise from './components/sections/Expertise';
import Contact from './components/sections/Contact';
import FAQ from './components/sections/FAQ';
import Footer from './components/layout/Footer';
import FloatButton from './components/ui/FloatButton';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Initialize GSAP Animations on sections
    const sections = document.querySelectorAll('.gsap-section');
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        {
          y: 100,
          opacity: 0,
          filter: 'blur(10px)',
          autoAlpha: 0
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          autoAlpha: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Expertise />
      <Contact />
      <FAQ />
      <Footer />
      <FloatButton />
    </>
  );
}

export default App;
