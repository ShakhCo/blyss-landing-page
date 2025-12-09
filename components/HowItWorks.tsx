"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import { SplitText } from "./SplitText";

const stepIcons = [UserPlus, Settings, Rocket];
const stepColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = ["step1", "step2", "step3"];

  return (
    <section id="how-it-works" className="section bg-stone-50">
      <div className="container-custom mx-auto px-4">
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

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200" />

          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            const color = stepColors[index];
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full overflow-hidden">
                  {/* Step number with icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg relative z-10`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <span className="absolute top-0 left-0 text-6xl font-bold text-stone-100 -z-0 select-none">
                      {number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {t(`${step}.title`)}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {t(`${step}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center gap-2"
          >
            {t("cta")}
            <Rocket size={18} />
          </a>
          <p className="text-sm text-stone-500 mt-4">{t("ctaSubtext")}</p>
        </motion.div>
      </div>
    </section>
  );
}
