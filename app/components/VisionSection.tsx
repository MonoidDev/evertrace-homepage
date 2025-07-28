import Image from "next/image";
import visionWatercolor from "../assets/vision-watercolor.png";
import digitalMemoriesIllustration from "../assets/digital-memories-illustration.png";

export const VisionSection = () => {
  return (
    <section className="bg-beige-500 py-32 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-olive-500 text-4xl md:text-5xl lg:text-5xl font-bold mb-8">
            <span className="font-serif">Evertrace</span> のビジョン
          </h1>
          <div className="text-olive-500 text-xl md:text-xl lg:text-2xl leading-relaxed">
            <p>あなたの「かけがえのなさ」を</p>
            <p>未来に届けます。</p>
            <div className="mt-8">
              <p>ただ遺すのではなく、</p>
              <p>忘れられない存在として</p>
              <p>残すために。</p>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-[440px_1fr] gap-4">
          <div className="overflow-hidden self-stretch rounded-lg min-h-0 relative">
            <Image
              src={visionWatercolor}
              alt="Watercolor illustration of elderly people"
              className="absolute top-0 right-0 left-0 right-0 object-cover"
            />
          </div>

          <div className="grid grid-cols-10 gap-4">
            {/* Emotional OS Card */}
            <div className="lg:col-span-7 lg:row-span-1">
              <div className="bg-beige-50/50 backdrop-blur-sm border border-white rounded-lg p-5 h-full">
                <h3 className="text-olive-500 text-2xl font-semibold mb-4">
                  感情OS（Emotional OS）
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  記憶や想い、価値観など、感情のレガシーを保存し、伝えていくための基盤となるプラットフォームを構築します。
                </p>
              </div>
            </div>

            {/* Legacy System Card - spans 2 rows */}
            <div className="lg:col-span-3 lg:row-span-2">
              <div className="bg-beige-50/50 backdrop-blur-sm border border-white rounded-lg p-5 h-full">
                <h3 className="text-olive-500 text-2xl font-semibold mb-4 leading-tight">
                  全方位レガシー・
                  <br />
                  エコシステム
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  精神的な想いから物質的な資産まで、ペットとの絆から人とのつながりまで
                  <br />
                  <br />
                  ——すべての「大切なもの」を未来へつなぐ、包括的なレガシー・インフラを目指します。
                </p>
              </div>
            </div>

            {/* Tech and Emotion Card */}
            <div className="lg:col-span-7 lg:row-span-1">
              <div className="bg-beige-50/50 backdrop-blur-sm border border-white rounded-lg p-5 h-full">
                <h3 className="text-olive-500 text-2xl font-semibold mb-4">
                  技術と感情の融合
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  セキュリティ性の高い金融・法務・AI技術と、直感的なUX設計を組み合わせ、誰もが安心して使える、温かみのあるデジタルサービスを提供します。
                </p>
              </div>
            </div>

            {/* Japan to World Card - spans 3 columns */}
            <div className="lg:col-span-full">
              <div className="flex gap-4">
                <div className="flex-1 bg-beige-50/50 backdrop-blur-sm border border-white rounded-lg p-5">
                  <h3 className="text-olive-500 text-2xl font-semibold mb-4">
                    日本発、世界へ
                  </h3>
                  <div className="text-black text-lg leading-relaxed">
                    <p>日本の終活文化「就活（しゅうかつ）」を原点に、</p>
                    <p>
                      グローバルに広がる"レガシーのあり方"を
                    </p>
                    <p>
                      再定義していきます。
                    </p>
                  </div>
                </div>
                <Image
                  src={digitalMemoriesIllustration}
                  alt="People viewing digital profiles illustration"
                  className="flex-shrink-0 w-[280px] h-[200px] object-cover rounded-xl opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
