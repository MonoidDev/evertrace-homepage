"use client";

import { useLocale } from "next-intl";

export default function LanguageSwitcher({
  isScrolled,
}: {
  isScrolled: boolean;
}) {
  const currentLocale = useLocale();

  const handleLanguageChange = (locale: string) => {
    // Set cookie
    document.cookie = `EVERTRACE_LOCALE=${locale}; path=/; max-age=31536000; SameSite=lax`;

    // Refresh page to apply new locale
    window.location.reload();
  };

  return (
    <div className={"inline-flex items-center rounded-lg p-1"}>
      <button
        onClick={() => handleLanguageChange("ja-JP")}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          currentLocale === "ja-JP"
            ? " text-gray-900 shadow-sm"
            : "text-gray-400 hover:text-gray-900"
        } ${
          isScrolled && currentLocale === "ja-JP"
            ? "bg-white/50"
            : currentLocale === "ja-JP"
            ? "bg-white/100"
            : ""
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => handleLanguageChange("en-US")}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          currentLocale === "en-US"
            ? "text-gray-900 shadow-sm"
            : "text-gray-400 hover:text-gray-900"
        } ${
        isScrolled && currentLocale === "en-US"
            ? "bg-white/50"
            : currentLocale === "en-US"
            ? "bg-white/100"
            : ""
        }`}
      >
        EN
      </button>
    </div>
  );
}
