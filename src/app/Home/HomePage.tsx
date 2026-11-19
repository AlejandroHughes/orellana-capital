'use client';

import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import BannerCTA from "./Banner-CTA";
import Brands from "./Brands";
import WhyCompany from "./WhyCompany";
import Contact from "./Contact";
import Footer from "./Footer";
import { LanguageProvider } from "../i18n/LanguageContext";
import type { Language } from "../i18n/translations";

export default function HomePage({ language }: { language: Language }) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up-init, .fade-in-init');

    observer.current = new IntersectionObserver(
      (entries) => {
        let delay = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply animation with staggered delay when element enters viewport
            const el = entry.target as HTMLElement;

            // Determine the animation type based on the class
            if (el.classList.contains('fade-up-init')) {
              setTimeout(() => {
                el.classList.add('fade-up');
                el.classList.remove('fade-up-init');
              }, delay += 200); // 200ms stagger delay for fade-up
            }

            if (el.classList.contains('fade-in-init')) {
              setTimeout(() => {
                el.classList.add('fade-in');
                el.classList.remove('fade-in-init');
              }, delay += 100); // 100ms stagger delay for fade-in
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    elements.forEach((el) => observer.current?.observe(el));

    return () => {
      elements.forEach((el) => observer.current?.unobserve(el));
      observer.current?.disconnect();
    };
  }, []);

  return (
    <LanguageProvider language={language}>
      <div className="relative bg-cover bg-hero w-full h-[600px] md:h-[850px] md:bg-fixed">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-blue/70 to-transparent" />
        <Navbar />
        <Hero />
      </div>
      <AboutUs />
      <Services />
      <Brands />
      <BannerCTA />
      <WhyCompany />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}
