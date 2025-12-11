"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { PricingCard } from "./PricingCard";

const prices = {
  monthly: {
    start: "235,000",
    comfort: "315,000",
    pro: "699,000",
  },
  yearly: {
    start: "179,000",
    comfort: "229,000",
    pro: "549,000",
  },
};

export function PricingTable() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const t = useTranslations("Pricing");
  const locale = useLocale();

  const getPricingPlans = (cycle: "monthly" | "yearly") => [
    {
      title: t("plans.start.title"),
      subtitle: t("plans.start.subtitle"),
      price: prices[cycle].start,
      priceSuffix: t("perMonth"),
      priceDescription: cycle === "monthly" ? t("monthlySubscription") : t("annualSubscription"),
      features: [
        t("plans.start.features.f1"),
        t("plans.start.features.f2"),
        t("plans.start.features.f3"),
        t("plans.start.features.f4"),
        t("plans.start.features.f5"),
        t("plans.start.features.f6"),
      ],
      buttonText: cycle === "monthly" ? t("select") : t("getPriceEstimate"),
      highlighted: false,
    },
    {
      title: t("plans.comfort.title"),
      subtitle: t("plans.comfort.subtitle"),
      price: prices[cycle].comfort,
      priceSuffix: t("perMonth"),
      priceDescription: cycle === "monthly" ? t("monthlySubscription") : t("annualSubscription"),
      features: [
        t("plans.comfort.features.f1"),
        t("plans.comfort.features.f2"),
        t("plans.comfort.features.f3"),
        t("plans.comfort.features.f4"),
        t("plans.comfort.features.f5"),
        t("plans.comfort.features.f6"),
        t("plans.comfort.features.f7"),
      ],
      buttonText: cycle === "monthly" ? t("select") : t("getPriceEstimate"),
      highlighted: true,
    },
    {
      title: t("plans.pro.title"),
      subtitle: t("plans.pro.subtitle"),
      price: prices[cycle].pro,
      priceSuffix: t("perMonth"),
      priceDescription: cycle === "monthly" ? t("monthlySubscription") : t("annualSubscription"),
      features: [
        t("plans.pro.features.f1"),
        t("plans.pro.features.f2"),
        t("plans.pro.features.f3"),
        t("plans.pro.features.f4"),
        t("plans.pro.features.f5"),
        t("plans.pro.features.f6"),
        t("plans.pro.features.f7"),
        t("plans.pro.features.f8"),
        t("plans.pro.features.f9"),
      ],
      buttonText: cycle === "monthly" ? t("select") : t("getPriceEstimate"),
      highlighted: false,
    },
  ];

  const currentPlans = getPricingPlans(billingCycle);

  return (
    <section className="py-20 lg:py-32 px-4 bg-[#3ed37a]/4">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-3xl mx-auto">
          <h1
            className="lg:text-center font-bold text-4xl md:text-5xl xl:text-6xl leading-tight mb-10 text-gray-900"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            {t("title")} <span className="text-[#3ed37a]">{t("titleHighlight")}</span>
            {''} {t("titleEnd")}
          </h1>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="w-full sm:w-auto flex items-center bg-gray-100 rounded-full p-1.5 sm:p-2">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`cursor-pointer flex-1 sm:flex-none sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full text-[15px] sm:text-[18px] md:text-[20px] font-bold transition-all ${billingCycle === "monthly"
                ? "bg-white text-gray-800 shadow-md"
                : "text-gray-700 hover:text-gray-800"
                }`}
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              {t("monthly")}
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`cursor-pointer flex-1 sm:flex-none sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full text-[15px] sm:text-[18px] md:text-[20px] font-bold transition-all flex items-center justify-center gap-2 sm:gap-3 ${billingCycle === "yearly"
                ? "bg-white text-gray-800 shadow-md"
                : "text-gray-700 hover:text-gray-800"
                }`}
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              {t("yearly")}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 items-center gap-6 mx-auto">
          {currentPlans.map((plan, index) => {
            // Calculate savings percentage when yearly is selected
            let savingsPercent: number | undefined;
            if (billingCycle === "yearly") {
              const monthlyPrices = prices.monthly;
              const yearlyPrices = prices.yearly;
              const planKey = index === 0 ? "start" : index === 1 ? "comfort" : "pro";
              const monthlyPrice = parseInt(monthlyPrices[planKey].replace(/,/g, ""));
              const yearlyPrice = parseInt(yearlyPrices[planKey].replace(/,/g, ""));
              savingsPercent = Math.round(((monthlyPrice - yearlyPrice) / monthlyPrice) * 100);
            }

            return (
              <PricingCard
                key={index}
                title={plan.title}
                subtitle={plan.subtitle}
                price={plan.price}
                priceSuffix={plan.priceSuffix}
                priceDescription={plan.priceDescription}
                features={plan.features}
                buttonText={plan.buttonText}
                highlighted={plan.highlighted}
                savingsPercent={savingsPercent}
                saveLabel={t("save")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
