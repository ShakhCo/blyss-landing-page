"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Scissors, Calendar, Clock, Star, MapPin, Send, Globe, Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { localeNames, defaultLocale, type Locale } from "@/i18n/config";
import { Logo } from "@/components/Logo";

// Navigation Component
function Navigation() {
  const t = useTranslations("demo1.nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    // Close menus
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);

    // If already on this locale, do nothing
    if (newLocale === locale) {
      return;
    }

    // Always include locale prefix in URL for explicit language selection
    const newPath = `/${newLocale}${pathname}`;
    window.location.href = newPath;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo height={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-gray-900 font-medium text-[15px]">{t("forBusiness")}</a>
            <a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors text-[15px]">{t("features")}</a>
            <a href="#how-it-works" className="text-gray-500 hover:text-gray-900 transition-colors text-[15px]">{t("howItWorks")}</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-[15px]">{t("about")}</a>
          </div>

          {/* CTA Buttons & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{localeNames[locale]}</span>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <>
                    {/* Backdrop to close menu */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsLangMenuOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[140px] z-20"
                    >
                      {(Object.keys(localeNames) as Locale[]).map((loc) => (
                        <button
                          key={loc}
                          onClick={() => switchLocale(loc)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${locale === loc
                              ? "text-purple-600 font-semibold bg-purple-50"
                              : "text-gray-600"
                            }`}
                        >
                          {localeNames[loc]}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {t("login")}
            </a>
            <a href="#" className="bg-gray-900 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
              {t("openTelegram")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-900 font-medium py-2">{t("forBusiness")}</a>
              <a href="#features" className="block text-gray-500 py-2" onClick={() => setIsMobileMenuOpen(false)}>{t("features")}</a>
              <a href="#how-it-works" className="block text-gray-500 py-2" onClick={() => setIsMobileMenuOpen(false)}>{t("howItWorks")}</a>
              <a href="#" className="block text-gray-500 py-2">{t("about")}</a>

              {/* Language options in mobile */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide font-semibold">Language</p>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(localeNames) as Locale[]).map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${locale === loc
                          ? "bg-purple-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      {localeNames[loc]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a href="#" className="block text-center py-2 text-gray-700 font-medium">
                  {t("login")}
                </a>
                <a href="#" className="block text-center bg-gray-900 text-white font-semibold px-5 py-3 rounded-full">
                  {t("openTelegram")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Hero Section
function Hero() {
  const t = useTranslations("demo1.hero");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 text-gray-600 text-sm mb-6"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              {t("badge")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              {t("headline")}<br />{t("headlineHighlight")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 text-lg md:text-xl mb-8 max-w-md"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Send size={18} />
                {t("cta")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mt-8"
            >
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Play size={16} fill="currentColor" className="ml-0.5 text-gray-700" />
              </button>
              <span className="text-gray-500 text-sm">{t("watchVideo")}</span>
            </motion.div>
          </div>

          {/* Right Content - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Phone Frame */}
            <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                <img
                  src="/hero.png"
                  alt="Blyss App"
                  className="w-[280px] lg:w-[320px] h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const t = useTranslations("demo1.howItWorks");

  const features = [
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
          <MapPin className="w-8 h-8 text-blue-500" />
        </div>
      ),
      title: t("step1.title"),
      description: t("step1.description")
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center">
          <Calendar className="w-8 h-8 text-purple-500" />
        </div>
      ),
      title: t("step2.title"),
      description: t("step2.description")
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl flex items-center justify-center">
          <Scissors className="w-8 h-8 text-pink-500" />
        </div>
      ),
      title: t("step3.title"),
      description: t("step3.description")
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Open in Telegram Section
function OpenInTelegram() {
  const t = useTranslations("demo1.telegram");

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="relative bg-gray-900 rounded-[3rem] p-3 max-w-[320px] mx-auto shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* App Screen Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-lg font-bold text-gray-900">{t("myBookings")}</div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>

                  {/* Upcoming Appointment Card */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-500 rounded-2xl p-4 mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-white/70 text-xs mb-1">{t("upcoming")}</div>
                        <div className="text-white font-bold">{t("classicHaircut")}</div>
                      </div>
                      <div className="bg-white/20 rounded-lg px-2 py-1">
                        <span className="text-white text-xs">{t("confirmed")}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Dec 15</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>3:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Past Bookings */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-4">{t("recentVisits")}</div>

                    {/* Booking Items */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <Scissors className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{t("beardTrim")}</div>
                            <div className="text-xs text-gray-400">Dec 8, 2024</div>
                          </div>
                        </div>
                        <span className="text-gray-900 text-sm font-medium">50,000 so'm</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                            <Scissors className="w-5 h-5 text-pink-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{t("haircutStyling")}</div>
                            <div className="text-xs text-gray-400">Dec 1, 2024</div>
                          </div>
                        </div>
                        <span className="text-gray-900 text-sm font-medium">80,000 so'm</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Scissors className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{t("kidsHaircut")}</div>
                            <div className="text-xs text-gray-400">Nov 25, 2024</div>
                          </div>
                        </div>
                        <span className="text-gray-900 text-sm font-medium">35,000 so'm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-1/4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Booking</div>
                  <div className="text-sm font-bold text-gray-900">{t("bookingConfirmed")}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("title")}<br />{t("titleHighlight")}
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-8 max-w-md">
              {t("subtitle")}
            </p>

            {/* Telegram Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                <Send className="w-5 h-5" />
                {t("cta")} {t("ctaHighlight")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// For Barbershops Section
function ForBarbershops() {
  const t = useTranslations("demo1.business");

  return (
    <section id="features" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("title")}<br />{t("titleLine2")}<br />{t("titleLine3")}
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-8 max-w-md">
              {t("subtitle")}
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 text-base md:text-lg">{t("benefit1")}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 text-base md:text-lg">{t("benefit2")}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 text-base md:text-lg">{t("benefit3")}</span>
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              {t("cta")}
            </a>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-400 to-orange-500 rounded-[3rem] transform -rotate-3 scale-95 opacity-60"></div>

            {/* Phone Frame */}
            <div className="relative bg-gray-900 rounded-[3rem] p-3 max-w-[320px] mx-auto shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* App Screen Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="text-lg font-bold text-gray-900 mb-6">{t("todaySchedule")}</div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-purple-50 rounded-xl p-3 text-center">
                      <div className="text-xl font-bold text-purple-600">8</div>
                      <div className="text-[10px] text-gray-500">{t("bookings")}</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3 text-center">
                      <div className="text-xl font-bold text-green-600">2</div>
                      <div className="text-[10px] text-gray-500">{t("available")}</div>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-3 text-center">
                      <div className="text-xl font-bold text-pink-600">320k</div>
                      <div className="text-[10px] text-gray-500">{t("revenue")}</div>
                    </div>
                  </div>

                  {/* Appointments */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-4">{t("upcoming")}</div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">AK</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Akmal K.</div>
                            <div className="text-xs text-gray-400">{t("haircutBeard")}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">2:00 PM</div>
                          <div className="text-xs text-green-500">{t("inMinutes")}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">JS</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">Jasur S.</div>
                            <div className="text-xs text-gray-400">{t("classicCut")}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">3:00 PM</div>
                          <div className="text-xs text-gray-400">{t("inHour")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Newsletter Section
function Newsletter() {
  const t = useTranslations("demo1.newsletter");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-8">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <div className="relative w-full sm:flex-1">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">@</span>
              <input
                type="text"
                placeholder={t("placeholder")}
                className="w-full pl-10 pr-6 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
            </div>
            <button className="w-full sm:w-auto bg-gray-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              {t("cta")}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  const t = useTranslations("demo1.footer");

  return (
    <footer className="bg-white border-t border-gray-100 ">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 ">
            <Link href="/demo-1" className="inline-block mb-4">
              <Logo height={40} />
            </Link>
            <p className="text-gray-500 text-sm md:text-base mb-6">
              {t("description")}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Send className="w-4 h-4 text-gray-600" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-600 text-xs">ig</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-600 text-xs">in</span>
              </a>
            </div>
          </div>

          {/* Blyss Links */}
          <div className="">
            <h3 className="font-semibold text-gray-900 mb-4">{t("blyss")}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("about")}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("terms")}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("privacy")}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("howItWorks")}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("contact")}</a></li>
            </ul>
          </div>

          {/* For Business Links */}
          <div className="">
            <h3 className="font-semibold text-gray-900 mb-4">{t("forBusiness")}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("registerSalon")}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("pricing")}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("features")}</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="">
            <h3 className="font-semibold text-gray-900 mb-4">{t("support")}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("helpCenter")}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("telegramSupport")}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">{t("faq")}</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
            <p className="text-gray-400 text-sm">
              {t("madeIn")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Demo1Page() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <OpenInTelegram />
        <ForBarbershops />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
