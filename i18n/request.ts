import { getRequestConfig } from "next-intl/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { cookies, headers } from "next/headers";

const locales = ["en-US", "ja-JP"];
const defaultLocale = "en-US";

async function getLocale(): Promise<string> {
  // 1. Check for cookie first
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("EVERTRACE_LOCALE")?.value;

  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Use Accept-Language header with negotiator
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");

  if (acceptLanguage) {
    const negotiator = new Negotiator({
      headers: { "accept-language": acceptLanguage },
    });

    const languages = negotiator.languages();

    try {
      return match(languages, locales, defaultLocale);
    } catch {
      return defaultLocale;
    }
  }

  return defaultLocale;
}

export default getRequestConfig(async () => {
  const locale = await getLocale();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
