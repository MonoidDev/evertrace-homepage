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
import JapanSection from "./components/JapanSection";
import GlobalTrendsSection from "./components/GlobalTrendsSection";
import FeaturesSection from "./components/FeaturesSection";
import WhyNowSection from "./components/WhyNowSection";
import DemoSection from "./components/DemoSection";
import TestimonialsSection from "./components/TestimonialsSection";
import VisionPoetrySection from "./components/VisionPoetrySection";
import TeamSection from "./components/TeamSection";
import CTASection from "./components/CTASection";
import { VisionSection } from "./components/VisionSection";

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
        {/* Japan Market Fit */}
        <section id="japan" className="relative">
          <JapanSection />
        </section>
        {/* Global Trends */}
        <section id="trends" className="relative">
          <GlobalTrendsSection />
        </section>
        {/* Features */}
        <section id="features" className="relative">
          <FeaturesSection />
        </section>
        {/* Why Now */}
        <section id="why-now" className="relative">
          <WhyNowSection />
        </section>
        {/* Demo */}
        <section id="demo" className="relative">
          <DemoSection />
        </section>
        {/* Testimonials */}
        <section id="testimonials" className="relative">
          <TestimonialsSection />
        </section>
        {/* Vision Poetry */}
        <section id="vision-poetry" className="relative">
          <VisionPoetrySection />
        </section>
        {/* Team */}
        <section id="team" className="relative">
          <TeamSection />
        </section>{" "}
        {/* CTA */}
        <section id="contact" className="relative">
          <CTASection />
        </section>
      </main>
    </div>
  );
}
