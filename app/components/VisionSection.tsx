"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import deviceMockups from "../assets/device-mockups.png";
import heroIllustration from "../assets/hero-illustration.png";
import lockIcon from "../assets/lock-icon.svg";
import lightbulbIcon from "../assets/lightbulb-icon.svg";
import toolsIcon from "../assets/tools-icon.svg";

const VisionSection = () => {
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
                className="text-4xl lg:text-5xl font-bold text-[#1f281b] mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-serif">Evertrace</span> の解決策
              </motion.h2>
              <motion.div
                className="space-y-4 text-[#1f281b] leading-[1.5] text-xl font-medium tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p>私たちは、</p>
                <p>「別れ」と「継承」をテクノロジーで支えるための</p>
                <p>次世代デジタルインフラを構築しています。</p>
                <p>資産・感情・儀式という3つのレイヤーを、</p>
                <p>
                  ひとつのモジュール型エコシステムとして統合的に提供することで、
                </p>
                <p>誰もが自然に、そして安心して「人生の締めくくり」</p>
                <p>と向き合える環境をつくります。</p>
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
                className="flex gap-6 pb-8 relative"
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
                  <p className="text-lg text-[#686868] leading-none tracking-tight mb-4">
                    物理的・金融的資産 + デジタル資産の統合管理プラットフォーム
                  </p>
                  <p className="text-base text-black leading-[1.5] tracking-wide">
                    相続の手続きを見える化し、トラブルを未然に防ぐための相続ガイド付き資産管理ツールです。銀行口座や保険、暗号資産、SNSアカウントまで、あらゆる資産を一元的に登録・分類・保管可能。家族や信頼できる第三者への継承設定も簡単に行え、セキュアなデジタル金庫として機能します。
                  </p>
                </div>

                <div className="absolute top-[calc(85px+12px)] bottom-[12px] left-[42.5px] w-0 border-l border-dashed border-black"></div>
              </motion.div>

              {/* AI Life Story Platform */}
              <motion.div
                className="flex gap-6 pb-8 relative"
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
                  <p className="text-lg text-[#686868] leading-none tracking-tight mb-4">
                    感情的・精神的なレガシーの保存と伝承
                  </p>
                  <p className="text-base text-black leading-[1.5] tracking-wide">
                    人生の想い出や価値観、大切にしてきた言葉を、AIの力で記録・構造化・再現するライフストーリープラットフォーム。写真や動画、音声、エッセイなど多様な形式で、自分の人生を綴ることができ、未来の家族や大切な人へ、"声"と"想い"を残すことが可能になります。
                  </p>
                </div>

                <div className="absolute top-[calc(85px+12px)] bottom-[12px] left-[42.5px] w-0 border-l border-dashed border-black"></div>
              </motion.div>

              {/* 拡張レガシーツール */}
              <motion.div
                className="flex gap-6 pb-8 relative"
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
                    拡張レガシーツール
                  </h3>
                  <p className="text-lg text-[#686868] leading-none tracking-tight mb-4">
                    オンラインで簡潔かつ安心して操作できるUI/UXで提供します。
                  </p>
                  <div className="text-base text-black leading-[1.5] tracking-wide space-y-1">
                    <p>•葬儀の事前手配・希望の可視化</p>
                    <p>•事前指示書の作成（医療・介護・延命など）</p>
                    <p>•オンライン遺言の準備と共有</p>
                    <p>•ペット追悼メモリアルページの作成</p>
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

export default VisionSection;
