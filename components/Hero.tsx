"use client";

import { useState, useEffect } from "react";

const rotatingWords = [
  "салонов красоты",
  "барбершопов",
  "спа-центров",
  "ногтевых студий",
  "бровистов",
];

export function Hero() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "out" | "waiting" | "in">("visible");

  const maxLetters = Math.max(...rotatingWords.map((w) => w.length));
  const outDuration = maxLetters * 30 + 300;
  const inDuration = maxLetters * 30 + 300;

  useEffect(() => {
    const interval = setInterval(() => {
      // Start animating out
      setPhase("out");

      // After out animation completes, switch word and set to waiting (hidden)
      setTimeout(() => {
        setDisplayIndex((prev) => (prev + 1) % rotatingWords.length);
        setPhase("waiting");

        // Small delay then start animating in
        setTimeout(() => {
          setPhase("in");

          // After in animation completes, set to visible
          setTimeout(() => {
            setPhase("visible");
          }, inDuration);
        }, 50);
      }, outDuration);
    }, 3500);

    return () => clearInterval(interval);
  }, [outDuration, inDuration]);

  const currentWord = rotatingWords[displayIndex];
  const letters = currentWord.split("");

  return (
    <section className="py-20 sm:py-28 lg:py-36 max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="text-center max-w-5xl mx-auto relative">
        {/* Floating decorative elements - positioned around title, description and buttons */}

        {/* Top left - Calendar */}
        <div className="hidden lg:block absolute -left-16 -top-8 bg-white rounded-[16px] shadow-xl p-4 transform -rotate-6 animate-float">
          <div className="w-16 h-16 bg-[#162b60]/10 rounded-[12px] flex items-center justify-center">
            <svg className="w-8 h-8 text-[#162b60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Top right - Notification bell */}
        <div className="hidden lg:block absolute -right-12 -top-4 bg-white rounded-[16px] shadow-xl p-4 transform rotate-6 animate-float-delayed">
          <div className="w-16 h-16 bg-[#3ed37a]/10 rounded-[12px] flex items-center justify-center relative">
            <svg className="w-8 h-8 text-[#3ed37a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">3</span>
          </div>
        </div>

        {/* Left middle - User/Client */}
        <div className="hidden lg:block absolute -left-28 top-[40%] bg-white rounded-[16px] shadow-xl p-4 transform -rotate-3 animate-float-slow">
          <div className="w-16 h-16 bg-[#f97316]/10 rounded-[12px] flex items-center justify-center">
            <svg className="w-8 h-8 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        {/* Right middle - Analytics */}
        <div className="hidden lg:block absolute -right-24 top-[35%] bg-white rounded-[16px] shadow-xl p-4 transform rotate-3 animate-float">
          <div className="w-16 h-16 bg-[#162b60]/10 rounded-[12px] flex items-center justify-center">
            <svg className="w-8 h-8 text-[#162b60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>

        {/* Bottom left - Money/Payment */}
        <div className="hidden lg:block absolute -left-12 -bottom-8 bg-white rounded-[16px] shadow-xl p-4 transform rotate-6 animate-float-delayed">
          <div className="w-16 h-16 bg-[#3ed37a]/10 rounded-[12px] flex items-center justify-center">
            <svg className="w-8 h-8 text-[#3ed37a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Bottom right - Scissors (for salon) */}
        <div className="hidden lg:block absolute -right-8 -bottom-4 bg-white rounded-[16px] shadow-xl p-4 transform -rotate-6 animate-float-slow">
          <div className="w-16 h-16 bg-[#f97316]/10 rounded-[12px] flex items-center justify-center">
            <svg className="w-8 h-8 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
            </svg>
          </div>
        </div>

        {/* Small floating dots */}
        <div className="hidden lg:block absolute left-4 top-8 w-3 h-3 bg-[#162b60] rounded-full animate-pulse"></div>
        <div className="hidden lg:block absolute right-8 top-12 w-2 h-2 bg-[#3ed37a] rounded-full animate-pulse"></div>
        <div className="hidden lg:block absolute left-16 bottom-4 w-2 h-2 bg-[#f97316] rounded-full animate-pulse"></div>
        <div className="hidden lg:block absolute right-12 bottom-8 w-3 h-3 bg-[#162b60] rounded-full animate-pulse"></div>

        {/* Main Headline */}
        <h1
          className="font-bold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] xl:text-[80px] leading-[1.1] mb-6 relative z-10"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          Суперсила для
          <br />
          <span className="relative inline-flex items-center justify-center min-h-[1.2em]">
            <span className="text-[#f97316] inline-flex">
              {letters.map((letter, index) => {
                const isHidden = phase === "out" || phase === "waiting";
                const delay =
                  phase === "out" || phase === "in" ? `${index * 30}ms` : "0ms";

                return (
                  <span
                    key={`${displayIndex}-${index}`}
                    className="inline-block"
                    style={{
                      opacity: isHidden ? 0 : 1,
                      transform: isHidden
                        ? "translateY(8px) scale(0.9)"
                        : "translateY(0) scale(1)",
                      filter: isHidden ? "blur(4px)" : "blur(0)",
                      transitionProperty: phase === "waiting" ? "none" : "opacity, transform, filter",
                      transitionDuration: phase === "waiting" ? "0ms" : "300ms",
                      transitionTimingFunction: "ease-out",
                      transitionDelay: phase === "waiting" ? "0ms" : delay,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                );
              })}
            </span>
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-[#8690ab] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto relative z-10"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          Онлайн-запись, управление расписанием, клиентская база, аналитика и
          многое другое — всё в одном удобном сервисе
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button
            className="cursor-pointer bg-[#f97316] text-white px-10 py-5 rounded-[15px] text-[17px] sm:text-[18px] font-semibold transition-all shadow-lg hover:shadow-xl"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            Попробовать бесплатно
          </button>
          <button
            className="cursor-pointer bg-[#f97316]/10 text-[#f97316] px-10 py-5 rounded-[15px] text-[17px] sm:text-[18px] font-semibold hover:bg-[#f97316]/20 transition-all flex items-center justify-center gap-3"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 384 512"
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
            Смотреть видео
          </button>
        </div>
      </div>
    </section>
  );
}
