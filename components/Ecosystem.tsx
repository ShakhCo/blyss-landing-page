export function Ecosystem() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#162b60] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2
            className="font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-4"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            Экосистема{" "}
            <span className="bg-gradient-to-r from-[#00ddff] to-[#ff00d4] bg-clip-text text-transparent">
              BLYSS
            </span>
          </h2>
          <p
            className="text-[#8690ab] text-[16px] sm:text-[18px] md:text-[20px]"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            Два приложения — одна платформа. Клиенты записываются через BLYSS,
            вы управляете через BLYSS Business.
          </p>
        </div>

        {/* Two apps */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* BLYSS User App */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 sm:p-8 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-[#00ddff] to-[#ff00d4] rounded-[12px] flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className="font-bold text-[22px] sm:text-[26px]"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  BLYSS
                </h3>
                <p
                  className="text-[#8690ab] text-[14px] sm:text-[15px]"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Для клиентов
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Поиск салонов и барбершопов рядом",
                "Просмотр услуг, цен и отзывов",
                "Онлайн-запись в любое время",
                "Выбор мастера и времени",
                "Оплата картой",
                "Чат с салоном",
                "Бонусная программа",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#3ed37a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-[15px] sm:text-[16px] text-white/90"
                    style={{ fontFamily: "Archivo, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* BLYSS Business App */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 sm:p-8 border border-white/20 relative">
            {/* Popular badge */}
            <div className="absolute -top-3 right-6 bg-[#3ed37a] text-white text-[12px] sm:text-[13px] font-semibold px-4 py-1.5 rounded-full">
              Вы здесь
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#3ed37a] rounded-[12px] flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className="font-bold text-[22px] sm:text-[26px]"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  BLYSS Business
                </h3>
                <p
                  className="text-[#8690ab] text-[14px] sm:text-[15px]"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Для бизнеса
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Управление расписанием и записями",
                "Добавление мастеров и услуг",
                "Приём онлайн-платежей",
                "Уведомления о новых записях",
                "Аналитика и отчёты",
                "Чат с клиентами",
                "Промокоды и программа лояльности",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#3ed37a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span
                    className="text-[15px] sm:text-[16px] text-white/90"
                    style={{ fontFamily: "Archivo, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Connection indicator */}
        <div className="flex items-center justify-center mt-10 lg:mt-12">
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="w-3 h-3 bg-[#3ed37a] rounded-full animate-pulse"></div>
            <span
              className="text-[14px] sm:text-[15px] text-white/80"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Синхронизация в реальном времени
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
