"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"];

function FAQItem({
  questionKey,
  isOpen,
  onClick,
  t,
}: {
  questionKey: string;
  isOpen: boolean;
  onClick: () => void;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div className="border-b border-stone-200 last:border-none">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="font-semibold text-stone-900 pr-8">{t(questionKey)}</span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? "bg-primary text-white" : "bg-stone-100 text-stone-600"
          }`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-stone-600 leading-relaxed">
              {t(questionKey.replace("q", "a"))}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="container-custom mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t("label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-4">
              {t("title")}
            </h2>
            <p className="text-base md:text-lg text-stone-600 mb-8">{t("subtitle")}</p>

            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="font-semibold text-stone-900 mb-2">
                {t("stillQuestions")}
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                {t("stillQuestionsDesc")}
              </p>
              <a
                href="mailto:support@blyss.uz"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                {t("contactSupport")}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right column - FAQ items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {faqKeys.map((key, index) => (
              <FAQItem
                key={key}
                questionKey={key}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                t={t}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
