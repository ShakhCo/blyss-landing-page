"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, HeadphonesIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { SplitText } from "./SplitText";

const featureIcons = [Sparkles, Zap, HeadphonesIcon];

export default function WhyBlyss() {
  const t = useTranslations("whyBlyss");

  const features = ["feature1", "feature2", "feature3"];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-logo-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
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
            className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-800/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-700/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`${feature}.title`)}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {t(`${feature}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
