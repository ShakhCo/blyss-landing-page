"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-white to-orange-50/30">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-logo-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto px-4 pt-28 md:pt-36 lg:pt-40 pb-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-semibold">{t("badge")}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6"
          >
            {t("headline")}{" "}
            <span className="text-gradient-orange">{t("headlineHighlight")}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl mx-auto"
          >
            {t("subheadline")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href="#pricing"
              className="btn-primary flex items-center gap-2 !text-base !px-6 !py-3 md:!text-lg md:!px-8 md:!py-4"
            >
              {t("cta")}
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </a>
            <button className="flex items-center gap-2 text-stone-700 hover:text-primary transition-colors font-medium px-4 py-3 md:px-6 md:py-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                <Play size={18} fill="currentColor" className="ml-0.5 md:ml-1 md:w-5 md:h-5" />
              </div>
              {t("watchDemo")}
            </button>
          </motion.div>

          {/* Trial info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-stone-500 mb-12"
          >
            {t("trialInfo")}
          </motion.p>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative max-w-3xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-primary to-primary-dark p-1 rounded-3xl shadow-2xl shadow-primary/20">
              <div className="bg-stone-900 rounded-3xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/20 transition-colors">
                      <Play
                        size={32}
                        className="text-white ml-1"
                        fill="currentColor"
                      />
                    </div>
                    <p className="text-white/60 text-sm">{t("videoText")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 md:-left-12 top-1/4 bg-white rounded-2xl shadow-xl p-4 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">
                    {t("newBooking")}
                  </p>
                  <p className="text-xs text-stone-500">{t("haircut")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -right-4 md:-right-12 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-lg">$</span>
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">
                    {t("paymentReceived")}
                  </p>
                  <p className="text-xs text-stone-500">+$85.00</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
