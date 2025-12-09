"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { localeNames, type Locale } from "@/i18n/config";
import { useLocale } from "next-intl";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Telegram", icon: Send, href: "#" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const footerLinks = {
    product: ["features", "pricing", "integrations", "mobileApp", "api"],
    company: ["aboutUs", "careers", "blog", "press", "partners"],
    resources: ["helpCenter", "community", "tutorials", "webinars", "status"],
    legal: ["privacyPolicy", "termsOfService", "cookiePolicy", "gdpr"],
  };

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <footer className="bg-stone-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-stone-800">
        <div className="container-custom mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-stone-400 text-base md:text-lg mb-8">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing" className="btn-primary">
                {t("cta.startTrial")}
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors font-semibold text-sm md:text-base"
              >
                {t("cta.contactSales")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold logo-gradient">Blyss</span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-sm">{t("description")}</p>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{t(category)}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-stone-400 hover:text-white transition-colors"
                    >
                      {t(link)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="container-custom mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-sm">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>

            {/* Language selector */}
            <div className="flex items-center gap-4">
              <select
                value={locale}
                onChange={handleLocaleChange}
                className="bg-stone-800 text-stone-400 text-sm rounded-lg px-3 py-2 border border-stone-700 focus:outline-none focus:border-primary cursor-pointer"
              >
                {(Object.keys(localeNames) as Locale[]).map((loc) => (
                  <option key={loc} value={loc}>
                    {localeNames[loc]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
