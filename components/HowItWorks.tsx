const steps = [
  {
    number: "01",
    title: "Зарегистрируйтесь",
    description:
      "Откройте BLYSS Business в Telegram, заполните данные о салоне и добавьте свои услуги. Занимает 5 минут.",
  },
  {
    number: "02",
    title: "Настройте расписание",
    description:
      "Добавьте мастеров, укажите их график работы и специализации. Всё синхронизируется автоматически.",
  },
  {
    number: "03",
    title: "Принимайте записи",
    description:
      "Клиенты находят вас в BLYSS и записываются онлайн. Вы получаете уведомления и управляете записями.",
  },
  {
    number: "04",
    title: "Развивайте бизнес",
    description:
      "Анализируйте статистику, привлекайте новых клиентов и увеличивайте доход с помощью наших инструментов.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <h2
          className="font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-tight mb-4"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          Как это <span className="text-[#162b60]">работает</span>
        </h2>
        <p
          className="text-[#8690ab] text-[16px] sm:text-[18px] md:text-[20px]"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          Начните принимать онлайн-записи за 4 простых шага
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-40px)] h-[2px] bg-gradient-to-r from-[#162b60] to-[#162b60]/20"></div>
            )}

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#162b60] text-white rounded-full mb-5">
                <span
                  className="font-bold text-[20px]"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="font-bold text-[20px] sm:text-[22px] text-[#162b60] mb-3"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                {step.title}
              </h3>

              <p
                className="text-[#8690ab] text-[15px] sm:text-[16px] leading-relaxed"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12 lg:mt-16">
        <button
          className="cursor-pointer bg-[#162b60] text-white px-10 py-4 rounded-[15px] text-[16px] sm:text-[18px] font-medium hover:bg-[#1a3470] transition-all"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          Начать бесплатно
        </button>
      </div>
    </section>
  );
}
