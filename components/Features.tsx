"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  BarChart3,
  Bell,
  Smartphone,
  MessageSquare,
  Clock,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { SplitText } from "./SplitText";

const featureIcons = {
  stayBooked: Calendar,
  growClientele: Users,
  trackSuccess: BarChart3,
};

const featureColors = {
  stayBooked: {
    bg: "bg-blue-500",
    bgLight: "bg-gradient-to-br from-blue-100 to-blue-50",
    text: "text-blue-500",
    textDark: "text-blue-600",
    badge: "#3b82f620",
    iconColor: "text-blue-300",
  },
  growClientele: {
    bg: "bg-purple-500",
    bgLight: "bg-gradient-to-br from-purple-100 to-purple-50",
    text: "text-purple-500",
    textDark: "text-purple-600",
    badge: "#a855f720",
    iconColor: "text-purple-300",
  },
  trackSuccess: {
    bg: "bg-orange-500",
    bgLight: "bg-gradient-to-br from-orange-100 to-orange-50",
    text: "text-orange-500",
    textDark: "text-orange-600",
    badge: "#f9731620",
    iconColor: "text-orange-300",
  },
};

const quickFeatureIcons = [Bell, Smartphone, MessageSquare, Clock];

export default function Features() {
  const t = useTranslations("features");

  const featureKeys = ["stayBooked", "growClientele", "trackSuccess"] as const;
  const quickFeatureKeys = ["smartNotifications", "mobileApp", "clientMessaging", "timeManagement"];

  return (
    <section id="features" className="section bg-white">
      <div className="container-custom mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider inline-block"
          >
            {t("label")}
          </motion.span>
          <SplitText
            text={t("title")}
            as="h2"
            className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Main features with alternating layout */}
        <div className="space-y-24 mb-24">
          {featureKeys.map((key, index) => {
            const Icon = featureIcons[key];
            const colors = featureColors[key];
            const reversed = index % 2 === 1;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12 lg:gap-20`}
              >
                {/* Content */}
                <div className="flex-1 max-w-xl">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                    style={{ backgroundColor: colors.badge }}
                  >
                    <Icon size={18} className={colors.text} />
                    <span className={`text-sm font-semibold ${colors.textDark}`}>
                      {t(`${key}.tag`)}
                    </span>
                  </div>

                  <SplitText
                    text={t(`${key}.headline`)}
                    as="h3"
                    className="text-2xl md:text-3xl font-bold text-stone-900 mb-4"
                  />

                  <p className="text-stone-600 mb-6 leading-relaxed">
                    {t(`${key}.description`)}
                  </p>

                  <ul className="space-y-3">
                    {[1, 2, 3, 4].map((num) => (
                      <li key={num} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-stone-700">
                          {t(`${key}.benefit${num}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image placeholder */}
                <div className="flex-1 w-full max-w-lg">
                  <div
                    className={`aspect-[4/3] rounded-3xl ${colors.bgLight} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={80} className={colors.iconColor} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick features grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-stone-900 text-center mb-8">
            {t("more")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFeatureKeys.map((key, index) => {
              const Icon = quickFeatureIcons[index];
              return (
                <div
                  key={key}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-stone-900 mb-2">
                    {t(key)}
                  </h4>
                  <p className="text-sm text-stone-600">{t(`${key}Desc`)}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
