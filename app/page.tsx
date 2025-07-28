"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import { VisionSection } from "./components/VisionSection";
import Footer from "./components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // GSAP ScrollTrigger setup
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-navy-50 dark:from-navy-900 dark:via-navy-800 dark:to-indigo-900"
    >
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="relative">
          <HeroSection />
        </section>
        {/* Problem Section */}
        <section id="problem" className="relative">
          <ProblemSection />
        </section>
        {/* Solution Section */}
        <section id="solution" className="relative">
          <SolutionSection />
        </section>
        {/* Vision Section */}
        <section id="vision" className="relative">
          <VisionSection />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
