"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import sekitourou from "../assets/sekitourou.png";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const t = useTranslations();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Parallax effect for hero background
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Animate floating particles
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      Array.from(particles).forEach((particle, index) => {
        gsap.to(particle, {
          y: "+=30",
          x: "+=20",
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      });
    }

    // Scroll-triggered animations
    gsap.fromTo(
      heroRef.current,
      { opacity: 1 },
      {
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative flex flex-col justify-center pt-[128px] pb-[64px] overflow-hidden bg-beige-500"
    >
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-indigo-300/40 rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-[520px_1fr] gap-24"
        >
          <motion.div>
            <Image src={sekitourou} alt="Sekitourou" />{" "}
          </motion.div>
          {/* Main Headline */}
          <motion.div className="flex flex-col justify-center">
            <motion.h1 className="text-left text-3xl md:text-4xl lg:text-5xl text-olive-500 font-serif font-semibold">Evertrace</motion.h1>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-olive-500 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-2xl md:text-4xl lg:text-5xl">
                {t('hero.title')}
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl">
                {t('hero.subtitle')}
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {t('hero.introLine1')}
              <br />
              {t('hero.introLine2')}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
