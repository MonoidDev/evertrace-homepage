import Image from "next/image";
import visionWatercolor from "../assets/vision-watercolor.png";
import digitalMemoriesIllustration from "../assets/digital-memories-illustration.png";
import { useLocale, useTranslations } from "next-intl";

export const VisionSection = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="bg-beige-500 py-32 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1
            className={
              "text-olive-500 text-4xl md:text-5xl lg:text-5xl font-bold mb-8 " +
              (locale === "en-US" ? "font-serif" : "")
            }
          >
            {t.rich("vision.title", {
              b: (chunks) => <span className="font-serif">{chunks}</span>,
            })}
          </h1>
          <div className="text-olive-500 text-xl md:text-xl lg:text-2xl leading-relaxed">
            {t.rich("vision.content", {
              br: () => <br />,
              p: (chunks) => <p>{chunks}</p>,
            })}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-[440px_1fr] gap-4">
          <div className="overflow-hidden self-stretch rounded-lg min-h-0 relative">
            <div
              className="absolute top-0 bottom-0 left-0 right-0 object-cover"
              style={{
                backgroundImage: `url(${visionWatercolor.src})`,
                backgroundSize: 'cover',
              }}
            />
          </div>

          <div className="grid grid-cols-10 gap-4">
            {/* Emotional OS Card */}
            <div className="lg:col-span-7 lg:row-span-1">
              <div className="bg-beige-50/50 backdrop-blur-sm border border-white rounded-lg p-5 h-full">
                <h3 className="text-olive-500 text-2xl font-semibold mb-4">
                  {t("vision.emotionalOS.title")}
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  {t("vision.emotionalOS.content")}
                </p>
              </div>
            </div>

            {/* Legacy System Card - spans 2 rows */}
            <div className="lg:col-span-3 lg:row-span-2">
              <div className="bg-beige-50/50 backdrop-blur-sm border border-white rounded-lg p-5 h-full">
                <h3 className="text-olive-500 text-2xl font-semibold mb-4 leading-tight">
                  {t.rich("vision.legacyEcosystem.title", {
                    br: () => <br />,
                  })}
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  {t.rich("vision.legacyEcosystem.content", {
                    br: () => <br />,
                  })}
                </p>
              </div>
            </div>

            {/* Tech and Emotion Card */}
            <div className="lg:col-span-7 lg:row-span-1">
              <div className="bg-beige-50/50 backdrop-blur-sm border border-white rounded-lg p-5 h-full">
                <h3 className="text-olive-500 text-2xl font-semibold mb-4">
                  {t("vision.combiningEmotionsAndTechnology.title")}
                </h3>
                <p className="text-black text-lg leading-relaxed">
                  {t("vision.combiningEmotionsAndTechnology.content")}
                </p>
              </div>
            </div>

            {/* Japan to World Card - spans 3 columns */}
            <div className="lg:col-span-full">
              <div className="flex gap-4">
                <div className="flex-1 bg-beige-50/50 backdrop-blur-sm border border-white rounded-lg p-5">
                  <h3 className="text-olive-500 text-2xl font-semibold mb-4">
                    {t("vision.japanToWorld.title")}
                  </h3>
                  <div className="text-black text-lg leading-relaxed">
                    {t.rich("vision.japanToWorld.content", {
                      br: () => <br />,
                    })}
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
