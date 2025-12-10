"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

const languages = [
  { code: "uz", label: "O'zbekcha", shortLabel: "UZ" },
  { code: "uz-Cyrl", label: "Ўзбекча", shortLabel: "ЎЗ" },
  { code: "ru", label: "Русский", shortLabel: "RU" },
  { code: "en", label: "English", shortLabel: "EN" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex justify-center py-4 mt-10 md:pt-20 px-4">
      <div className="flex items-center gap-1 sm:gap-1.5 bg-gray-100 rounded-full p-1 sm:p-1.5">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={`px-3 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all cursor-pointer ${
              locale === lang.code
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            <span className="hidden sm:inline">{lang.label}</span>
            <span className="sm:hidden">{lang.shortLabel}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
