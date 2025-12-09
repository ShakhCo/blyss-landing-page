"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { SplitText } from "./SplitText";

export default function Pricing() {
  const t = useTranslations("pricing");

  const plans = [
    {
      key: "starter",
      features: 5,
      popular: false,
    },
    {
      key: "professional",
      features: 8,
      popular: true,
    },
    {
      key: "business",
      features: 8,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section bg-white">
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

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl shadow-primary/20 scale-105"
                  : "bg-white border border-stone-200"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-white text-primary px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    <Sparkles size={14} />
                    {t(`${plan.key}.popular`)}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.popular ? "text-white" : "text-stone-900"
                  }`}
                >
                  {t(`${plan.key}.name`)}
                </h3>
                <p
                  className={`text-sm ${
                    plan.popular ? "text-white/80" : "text-stone-500"
                  }`}
                >
                  {t(`${plan.key}.description`)}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.popular ? "text-white" : "text-stone-900"
                  }`}
                >
                  {t(`${plan.key}.price`)}
                </span>
                {plan.key !== "starter" && (
                  <span
                    className={`text-sm ml-1 ${
                      plan.popular ? "text-white/80" : "text-stone-500"
                    }`}
                  >
                    {t(`${plan.key}.currency`)}
                  </span>
                )}
                <span
                  className={plan.popular ? "text-white/80" : "text-stone-500"}
                >
                  {t(`${plan.key}.period`)}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {Array.from({ length: plan.features }, (_, i) => i + 1).map(
                  (num) => (
                    <li key={num} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? "bg-white/20" : "bg-green-100"
                        }`}
                      >
                        <Check
                          size={12}
                          className={
                            plan.popular ? "text-white" : "text-green-600"
                          }
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/90" : "text-stone-600"
                        }`}
                      >
                        {t(`${plan.key}.feature${num}`)}
                      </span>
                    </li>
                  )
                )}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-white text-primary hover:bg-stone-100"
                    : "bg-stone-900 text-white hover:bg-stone-800"
                }`}
              >
                {t(`${plan.key}.cta`)}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-stone-400">
            <div className="flex items-center gap-2">
              <Zap size={18} />
              <span className="text-sm">{t("trial")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} />
              <span className="text-sm">{t("noCard")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} />
              <span className="text-sm">{t("cancelAnytime")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
