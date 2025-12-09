import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blyss.uz"),
  title: {
    default: "BLYSS - Sartaroshxona va Go'zallik Salonlariga Telegram orqali yoziling | O'zbekiston",
    template: "%s | BLYSS",
  },
  description:
    "BLYSS - O'zbekistondagi birinchi Telegram Mini App orqali sartaroshxona va go'zallik salonlariga yoziling. Tez, qulay va bepul. @blyssbot orqali hoziroq boshlang!",
  keywords: [
    "BLYSS",
    "blyss.uz",
    "sartaroshxona",
    "barbershop",
    "go'zallik saloni",
    "beauty salon",
    "online booking",
    "onlayn yozilish",
    "band qilish",
    "Telegram mini app",
    "Telegram bot",
    "blyssbot",
    "Uzbekistan",
    "O'zbekiston",
    "Tashkent",
    "Toshkent",
    "haircut",
    "soch olish",
    "soqol olish",
    "beard trim",
    "spa",
    "massage",
    "manicure",
    "pedicure",
  ],
  authors: [{ name: "BLYSS", url: "https://blyss.uz" }],
  creator: "BLYSS",
  publisher: "BLYSS",
  applicationName: "BLYSS",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "BLYSS - Sartaroshxona va Go'zallik Salonlariga Telegram orqali yoziling",
    description: "O'zbekistondagi birinchi Telegram Mini App orqali sartaroshxona va go'zallik salonlariga yoziling. @blyssbot orqali hoziroq boshlang!",
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
    url: "https://blyss.uz",
    siteName: "BLYSS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BLYSS - Telegram orqali sartaroshxonaga yoziling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLYSS - Telegram orqali sartaroshxonaga yoziling",
    description: "O'zbekistondagi birinchi Telegram Mini App. @blyssbot orqali hoziroq boshlang!",
    images: ["/og-image.png"],
    creator: "@blyssuz",
  },
  alternates: {
    canonical: "https://blyss.uz",
    languages: {
      "uz": "https://blyss.uz/uz",
      "uz-Cyrl": "https://blyss.uz/uz-Cyrl",
      "ru": "https://blyss.uz/ru",
      "en": "https://blyss.uz/en",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Business",
  other: {
    "telegram:channel": "@blyssuz",
    "telegram:bot": "@blyssbot",
    "telegram:business_bot": "@blyss_business_bot",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://blyss.uz/#organization",
        name: "BLYSS",
        url: "https://blyss.uz",
        logo: {
          "@type": "ImageObject",
          url: "https://blyss.uz/logo.png",
        },
        sameAs: [
          "https://t.me/blyssbot",
          "https://t.me/blyss_business_bot",
          "https://instagram.com/blyss.uz",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: "https://t.me/blyssbot",
          availableLanguage: ["uz", "ru", "en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://blyss.uz/#website",
        url: "https://blyss.uz",
        name: "BLYSS",
        description: "O'zbekistondagi birinchi Telegram Mini App orqali sartaroshxona va go'zallik salonlariga yoziling",
        publisher: {
          "@id": "https://blyss.uz/#organization",
        },
        inLanguage: ["uz", "uz-Cyrl", "ru", "en"],
      },
      {
        "@type": "SoftwareApplication",
        name: "BLYSS",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Telegram",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "UZS",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "1000",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://blyss.uz/#localbusiness",
        name: "BLYSS",
        description: "Telegram Mini App for booking barbershop and beauty salon appointments in Uzbekistan",
        url: "https://blyss.uz",
        telephone: "+998",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tashkent",
          addressCountry: "UZ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "41.2995",
          longitude: "69.2401",
        },
        areaServed: {
          "@type": "Country",
          name: "Uzbekistan",
        },
        serviceType: ["Barbershop Booking", "Beauty Salon Booking", "Appointment Scheduling"],
      },
    ],
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
