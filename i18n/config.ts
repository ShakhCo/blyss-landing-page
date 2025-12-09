export const locales = ['uz', 'uz-Cyrl', 'ru', 'en'] as const;
export const defaultLocale = 'uz' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  uz: "O'zbekcha",
  'uz-Cyrl': 'Ўзбекча',
  ru: 'Русский',
  en: 'English',
};

export const localeFlags: Record<Locale, string> = {
  uz: '🇺🇿',
  'uz-Cyrl': '🇺🇿',
  ru: '🇷🇺',
  en: '🇬🇧',
};
