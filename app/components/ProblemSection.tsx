"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import physicalAssets from "../assets/physical-assets.png";
import digitalAssets from "../assets/digital-assets.png";
import emotionalLegacy from "../assets/emotional-legacy.png";
import communityBonds from "../assets/community-bonds.png";

const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  const problemPointsJP = [
    {
      title: "「遺産」という概念が物質資産に偏りすぎている",
      description:
        "現在の相続制度は、不動産や預貯金などの物理的・金銭的資産のみを対象としており、現代のライフスタイルに対応できていません。さらに、手続きの複雑さや不透明さから、家族間の争いやトラブルの原因にもなっています。",
      image: physicalAssets,
      alt: "Physical assets like books and gold coins",
    },
    {
      title: "デジタル資産の継承が制度的に未整備",
      description:
        "SNSアカウント、クラウドデータ、サブスクリプション、暗号資産など、私たちの日常の重要な一部となっているデジタル資産に対して、広く認知された継承方法が存在しません。",
      image: digitalAssets,
      alt: "Digital assets and cloud storage",
    },
    {
      title: "「感情的な遺産」に関する保存手段が存在しない",
      description:
        "人との絆、想い出、価値観、人生の物語——そうした感情的・精神的なレガシーは、明確な保存や継承の仕組みがないため、数世代後には完全に失われてしまうのが現実です。",
      image: emotionalLegacy,
      alt: "Family photos and emotional memories",
    },
    {
      title:
        "家族以外とのつながり（ペット・友人・コミュニティなど）を反映できない",
      description:
        "従来の相続制度は、家族・血縁を前提としているため、現代的な「家族以外の絆」が取り残されやすい。",
      image: communityBonds,
      alt: "Community bonds with pets and friends",
    },
  ];

  const problemPointsEN = [
    {
      title: "Inheritance Focused Only on Assets",
      description:
        "Conventional inheritance systems are limited to physical and financial assets like real estate and savings, failing to reflect modern lifestyles. The complexity and lack of transparency often lead to family conflicts and disputes.",
      image: physicalAssets,
      alt: "Physical assets like books and gold coins",
    },
    {
      title: "No Framework for Digital Assets",
      description:
        "There are still no well-established systems for passing on digital assets—such as social media accounts, cloud data, subscriptions, or crypto—which now form an essential part of daily life.",
      image: digitalAssets,
      alt: "Digital assets and cloud storage",
    },
    {
      title: "Emotional Legacies Are Lost",
      description:
        "Memories, values, life stories, and emotional bonds have no formal way of being preserved or passed on. As a result, these intangible legacies often disappear after just a few generations.",
      image: emotionalLegacy,
      alt: "Family photos and emotional memories",
    },
    {
      title: "Non-Family Bonds Are Overlooked",
      description:
        "Traditional inheritance systems are built around family and blood ties, making it difficult to account for meaningful relationships outside the family—such as pets, friends, and communities.",
      image: communityBonds,
      alt: "Community bonds with pets and friends",
    },
  ];

  const problemPoints = locale === "ja-JP" ? problemPointsJP : problemPointsEN;

  const sectionTitle =
    locale === "ja-JP" ? (
      <>
        現代の「遺産」は、もはや物質的な
        <br />
        ものだけではありません。
      </>
    ) : (
      <>
        Modern “inheritance” is no longer <br /> just about material things.
      </>
    );

  return (
    <div
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-48 bg-beige-600"
    >
      <div className="container-max section-padding">
        {/* Section Title */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-olive-500 mb-4 sm:mb-6 md:mb-8 px-4">
            {sectionTitle}
          </h2>
        </motion.div>

        {/* Problem Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12">
          {problemPoints.map((point, index) => (
            <motion.div
              key={index}
              className={`problem-point-${index} glass rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300`}
              viewport={{ once: true }}
            >
              {/* Image placeholder - you can replace with actual images */}
              <Image
                src={point.image}
                alt={point.alt}
                className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-lg mb-4 sm:mb-6 flex items-center justify-center object-cover"
              />

              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 leading-tight">
                {point.title}
              </h4>

              <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-navy-200/10 rounded-full blur-2xl -z-10" />
      </div>
    </div>
  );
};

export default ProblemSection;
