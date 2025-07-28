"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import deviceMockups from "../assets/device-mockups.png";
import heroIllustration from "../assets/hero-illustration.png";
import lockIcon from "../assets/lock-icon.svg";
import lightbulbIcon from "../assets/lightbulb-icon.svg";
import toolsIcon from "../assets/tools-icon.svg";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const SolutionSection = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-[523px] h-[523px] relative">
                <Image
                  src={heroIllustration}
                  alt="Integration of assets, emotion and ritual illustration"
                  className="w-full h-full object-cover"
                  width={523}
                  height={523}
                />
              </div>
            </motion.div>

            <div className="space-y-6 pl-8">
              <motion.h2
                className={
                  "text-4xl lg:text-5xl font-bold text-olive-500 mb-8 " +
                  (locale === "en-US" ? "font-serif" : "")
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {t.rich("solution.title", {
                  b: (chunks) => <span className="font-serif">{chunks}</span>,
                })}
              </motion.h2>
              <motion.div
                className="space-y-4 text-[#1f281b] leading-[1.5] text-xl font-medium tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {locale === "ja-JP" ? (
                  <>
                    <p>私たちは、</p>
                    <p>「別れ」と「継承」をテクノロジーで支えるための</p>
                    <p>次世代デジタルインフラを構築しています。</p>
                    <p>資産・感情・儀式という3つのレイヤーを、</p>
                    <p>
                      ひとつのモジュール型エコシステムとして統合的に提供することで、
                    </p>
                    <p>誰もが自然に、そして安心して「人生の締めくくり」</p>
                    <p>と向き合える環境をつくります。</p>
                  </>
                ) : (
                  <>
                    <p>We are</p>
                    <p>building next-generation digital infrastructure</p>
                    <p>
                      to support <b>farewell</b> and <b>inheritance</b> with
                      technology.
                    </p>
                    <p>
                      By integrating three layers: assets, emotions, and rituals
                    </p>
                    <p>as a unified modular ecosystem,</p>
                    <p>we create an environment where everyone can naturally</p>
                    <p>
                      and confidently face <b>life's conclusion</b>.
                    </p>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-[#fefdfa] relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              {/* Legacy Organizer */}
              <motion.div
                className="flex gap-6 pb-24 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-[85px] h-[85px] relative">
                  <div className="w-full h-full rounded-full border border-dashed border-black flex items-center justify-center">
                    <Image
                      src={lockIcon}
                      alt="Lock icon"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold text-black tracking-tight">
                    Legacy Organizer
                  </h3>
                  <p className="text-lg text-[#686868] leading-normal tracking-tight mb-4">
                    {t.rich("solution.legacyOrganizer.subtitle", {
                      br: () => <br />,
                    })}
                  </p>
                  <p className="text-base text-black leading-[1.5] tracking-wide">
                    {t("solution.legacyOrganizer.content")}
                  </p>
                </div>

                <div className="absolute top-[calc(85px+12px)] bottom-[12px] left-[42.5px] w-0 border-l border-dashed border-black"></div>
              </motion.div>

              {/* AI Life Story Platform */}
              <motion.div
                className="flex gap-6 pb-24 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex-shrink-0 w-[85px] h-[85px] relative">
                  <div className="w-full h-full rounded-full border border-dashed border-black flex items-center justify-center">
                    <Image
                      src={lightbulbIcon}
                      alt="Lightbulb icon"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold text-black tracking-tight">
                    AI Life Story Platform
                  </h3>
                  <p className="text-lg text-[#686868] leading-normal tracking-tight mb-4">
                    {t("solution.aiLifeStoryPlatform.subtitle")}
                  </p>
                  <p className="text-base text-black leading-[1.5] tracking-wide">
                    {t("solution.aiLifeStoryPlatform.content")}
                  </p>
                </div>

                <div className="absolute top-[calc(85px+12px)] bottom-[12px] left-[42.5px] w-0 border-l border-dashed border-black"></div>
              </motion.div>

              {/* 拡張レガシーツール */}
              <motion.div
                className="flex gap-6 pb-24 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex-shrink-0 w-[85px] h-[85px] relative">
                  <div className="w-full h-full rounded-full border border-dashed border-black flex items-center justify-center">
                    <Image
                      src={toolsIcon}
                      alt="Tools icon"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold text-black tracking-tight">
                    {t("solution.legacyToolkit.title")}
                  </h3>
                  <p className="text-lg text-[#686868] leading-normal tracking-tight mb-4">
                    {t.rich("solution.legacyToolkit.subtitle", {
                      br: () => <br />,
                    })}
                  </p>
                  <div className="text-base text-black leading-[1.5] tracking-wide space-y-1">
                    {t.rich("solution.legacyToolkit.content", {
                      p: (chunks) => <p>•{chunks}</p>,
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Device Mockups */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="relative">
                <Image
                  src={deviceMockups}
                  alt="Device mockups showing mobile and tablet interfaces"
                  className="w-full max-w-[562px] h-auto"
                  width={562}
                  height={400}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionSection;
