"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { localeNames, type Locale } from "@/i18n/config";
import { useLocale } from "next-intl";

const navLinks = [
  { name: "features", href: "#features" },
  { name: "howItWorks", href: "#how-it-works" },
  { name: "pricing", href: "#pricing" },
  { name: "testimonials", href: "#testimonials" },
  { name: "faq", href: "#faq" },
];

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsLangMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold logo-gradient">Blyss</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-600 hover:text-primary transition-colors font-medium"
                >
                  {t(link.name)}
                </a>
              ))}
            </div>

            {/* CTA Buttons & Language Switcher */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 text-stone-600 hover:text-primary transition-colors p-2"
                >
                  <Globe size={18} />
                  <span className="text-sm font-medium">
                    {localeNames[locale]}
                  </span>
                </button>

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-stone-100 py-2 min-w-[140px]"
                    >
                      {(Object.keys(localeNames) as Locale[]).map((loc) => (
                        <button
                          key={loc}
                          onClick={() => switchLocale(loc)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${
                            locale === loc
                              ? "text-primary font-semibold"
                              : "text-stone-600"
                          }`}
                        >
                          {localeNames[loc]}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#"
                className="text-stone-700 hover:text-primary transition-colors font-medium"
              >
                {t("login")}
              </a>
              <a href="#pricing" className="btn-primary">
                {t("startFree")}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-stone-700 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - Outside header for proper stacking */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto"
            >
              {/* Header spacer */}
              <div className="h-16" />

              <div className="py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-6 py-4 text-stone-700 hover:text-primary hover:bg-stone-50 transition-colors font-medium text-lg border-b border-stone-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(link.name)}
                  </a>
                ))}

                {/* Language options in mobile */}
                <div className="px-6 py-6">
                  <p className="text-xs text-stone-400 mb-3 uppercase tracking-wide font-semibold">
                    Language
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(localeNames) as Locale[]).map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          switchLocale(loc);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          locale === loc
                            ? "bg-primary text-white"
                            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        {localeNames[loc]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="px-6 pt-4 border-t border-stone-100 space-y-4">
                  <a
                    href="#"
                    className="block text-center py-3 text-stone-700 font-medium hover:text-primary transition-colors text-lg"
                  >
                    {t("login")}
                  </a>
                  <a
                    href="#pricing"
                    className="block text-center btn-primary text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("startFree")}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
