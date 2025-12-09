"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const testimonials = [
  {
    name: "Dilnoza Karimova",
    role: "Salon Owner",
    location: "Tashkent",
    rating: 5,
    textKey: "t1",
  },
  {
    name: "Jasur Toshmatov",
    role: "Barber",
    location: "Samarkand",
    rating: 5,
    textKey: "t2",
  },
  {
    name: "Malika Rahimova",
    role: "Beauty Specialist",
    location: "Bukhara",
    rating: 5,
    textKey: "t3",
  },
  {
    name: "Sardor Alimov",
    role: "Spa Owner",
    location: "Tashkent",
    rating: 5,
    textKey: "t4",
  },
  {
    name: "Gulnora Yusupova",
    role: "Nail Artist",
    location: "Fergana",
    rating: 5,
    textKey: "t5",
  },
  {
    name: "Bobur Nazarov",
    role: "Hair Stylist",
    location: "Namangan",
    rating: 5,
    textKey: "t6",
  },
];

// Testimonial texts in simple, conversational language
const testimonialTexts: Record<string, Record<string, string>> = {
  t1: {
    uz: "Oldin WhatsApp'da yozishib, bron qilardim. Juda ko'p vaqt ketardi. Endi mijozlar o'zlari bron qiladi, men faqat ishlayman. Juda qulay!",
    "uz-Cyrl": "Олдин WhatsApp'да ёзишиб, брон қилардим. Жуда кўп вақт кетарди. Энди мижозлар ўзлари брон қилади, мен фақат ишлайман. Жуда қулай!",
    ru: "Раньше записывала клиентов через WhatsApp. Уходило много времени. Теперь клиенты сами записываются, а я просто работаю. Очень удобно!",
    en: "I used to book clients through WhatsApp. Took so much time. Now clients book themselves, and I just work. So convenient!",
  },
  t2: {
    uz: "Men barber ishlayman. Blyss bilan ishim ancha osonlashdi. Eslatmalar boradi, mijozlar unutmaydi. Kelmaganlar deyarli yo'q endi.",
    "uz-Cyrl": "Мен барбер ишлайман. Blyss билан ишим анча осонлашди. Эслатмалар боради, мижозлар унутмайди. Келмаганлар деярли йўқ энди.",
    ru: "Я работаю барбером. С Blyss стало намного легче. Напоминания приходят, клиенты не забывают. Теперь почти никто не пропускает.",
    en: "I'm a barber. Blyss made my job much easier. Reminders go out, clients don't forget. Almost no no-shows now.",
  },
  t3: {
    uz: "Avval ishonmadim, lekin sinab ko'rdim. Juda oson ekan! Mijozlarim ham yoqtirib qoldi. Telefondan hamma narsani ko'raman.",
    "uz-Cyrl": "Аввал ишонмадим, лекин синаб кўрдим. Жуда осон экан! Мижозларим ҳам ёқтириб қолди. Телефондан ҳамма нарсани кўраман.",
    ru: "Сначала не верила, но попробовала. Оказалось очень просто! Клиентам тоже понравилось. Всё вижу с телефона.",
    en: "Didn't believe it at first, but tried it. Turns out it's super easy! Clients liked it too. I see everything from my phone.",
  },
  t4: {
    uz: "Salonimda 8 kishi ishlaydi. Oldin kalendar bilan bosh og'rirdim. Endi har kimning o'z jadvali bor. Blyss hamma narsani hal qildi.",
    "uz-Cyrl": "Салонимда 8 киши ишлайди. Олдин календар билан бош оғрирдим. Энди ҳар кимнинг ўз жадвали бор. Blyss ҳамма нарсани ҳал қилди.",
    ru: "У меня в салоне 8 человек работает. Раньше мучилась с расписанием. Теперь у каждого свой календарь. Blyss всё решил.",
    en: "I have 8 people working in my salon. Used to struggle with scheduling. Now everyone has their own calendar. Blyss solved it all.",
  },
  t5: {
    uz: "Hisobotlar juda yaxshi! Qancha pul ishlaganimni, qaysi xizmatlar mashhur - hammasini ko'raman. Foydali ilova.",
    "uz-Cyrl": "Ҳисоботлар жуда яхши! Қанча пул ишлаганимни, қайси хизматлар машҳур - ҳаммасини кўраман. Фойдали илова.",
    ru: "Отчёты - это супер! Вижу сколько заработала, какие услуги популярны. Полезное приложение.",
    en: "Reports are great! I see how much I earned, which services are popular. Useful app.",
  },
  t6: {
    uz: "Yangi boshlaganman, lekin Blyss bilan professional ko'rinaman. Mijozlar havola orqali bron qiladi. Hamma tavsiya qilaman!",
    "uz-Cyrl": "Янги бошлаганман, лекин Blyss билан профессионал кўринаман. Мижозлар ҳавола орқали брон қилади. Ҳамма тавсия қиламан!",
    ru: "Я только начинаю, но с Blyss выгляжу профессионально. Клиенты записываются по ссылке. Всем рекомендую!",
    en: "I'm just starting out, but Blyss makes me look professional. Clients book through my link. Recommend to everyone!",
  },
};

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="section bg-stone-50 overflow-hidden">
      <div className="container-custom mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-4">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-stone-600 mb-4">{t("ctaSubtext")}</p>
          <a href="#pricing" className="btn-primary">
            {t("cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const locale = useLocale();
  const text = testimonialTexts[testimonial.textKey][locale] || testimonialTexts[testimonial.textKey]["en"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Quote icon */}
      <Quote size={24} className="text-primary/20 mb-4" fill="currentColor" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
        ))}
      </div>

      {/* Text */}
      <p className="text-stone-600 mb-6 leading-relaxed">&ldquo;{text}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-logo-cyan/20 flex items-center justify-center">
          <span className="text-lg font-semibold text-primary">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-stone-900">{testimonial.name}</p>
          <p className="text-sm text-stone-500">
            {testimonial.role} • {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

