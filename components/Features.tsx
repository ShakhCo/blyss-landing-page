"use client";

import { useTranslations } from "next-intl";

const featureIcons = [
  // Calendar icon - Online Booking 24/7
  <svg
    key="calendar"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>,
  // Team icon - Team Management
  <svg
    key="team"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>,
  // Analytics icon - Analytics & Reports
  <svg
    key="analytics"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>,
  // Bell icon - Smart Notifications
  <svg
    key="bell"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>,
  // Payment icon - Online Payments
  <svg
    key="payment"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
  // Heart icon - Loyalty Program
  <svg
    key="loyalty"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>,
];

export function Features() {
  const t = useTranslations("Features");

  const features = [
    { icon: featureIcons[0], title: t("feature1.title"), description: t("feature1.description") },
    { icon: featureIcons[1], title: t("feature2.title"), description: t("feature2.description") },
    { icon: featureIcons[2], title: t("feature3.title"), description: t("feature3.description") },
    { icon: featureIcons[3], title: t("feature4.title"), description: t("feature4.description") },
    { icon: featureIcons[4], title: t("feature5.title"), description: t("feature5.description") },
    { icon: featureIcons[5], title: t("feature6.title"), description: t("feature6.description") },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">

          <h1
            className="lg:text-center text-gray-900 font-bold text-4xl md:text-5xl xl:text-6xl leading-tight mb-10"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            {t("title")}{" "}
            <span className="text-[#f97316]">{t("titleHighlight")}</span>
          </h1>

          <p
            className="lg:text-center text-[#8690ab] text-lg md:text-xl lg:text-2xl"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            {t("subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[15px] p-6 sm:p-8 border border-gray-200 hover:border-blue-600/30 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-[#f97316]/10 rounded-[12px] flex items-center justify-center text-[#f97316] mb-5 group-hover:bg-[#f97316] group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3
                className="font-bold text-xl sm:text-2xl text-gray-900 mb-3"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[#8690ab] text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
