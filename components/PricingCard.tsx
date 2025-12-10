import { CheckIcon } from "./icons/CheckIcon";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceSuffix: string;
  priceDescription: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
  savingsPercent?: number;
  saveLabel?: string;
}

export function PricingCard({
  title,
  subtitle,
  price,
  priceSuffix,
  priceDescription,
  features,
  buttonText,
  highlighted = false,
  savingsPercent,
  saveLabel = "Save",
}: PricingCardProps) {
  return (
    <div>

      <div
        className={`relative p-8 w-full min-h-[775px] flex flex-col overflow-hidden ${highlighted
          ? "bg-[#162b60] rounded-[15px] shadow-[0px_44px_64px_0px_rgba(72,118,235,0.3)]"
          : "bg-white rounded-[15px] border border-gray-300 shadow-[0px_4px_14px_0px_rgba(28,66,161,0.04)]"
          }`}
      >
        {/* Background decoration for highlighted card */}
        {highlighted && (
          <div className="absolute top-0 right-0 w-[200px] h-[200px] opacity-20">
            <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] rounded-full border border-white/50" />
            <div className="absolute top-[-20px] right-[-20px] w-[250px] h-[250px] rounded-full border border-white/50" />
          </div>
        )}

        {/* Header */}
        <div className="relative z-10">
          <h3
            className={`font-bold text-[26px] md:text-[30px] mb-1 ${highlighted ? "text-white" : "text-[#162b60]"
              }`}
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            {title}
          </h3>
          <p
            className="text-[#8690ab] text-base sm:text-lg"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Price */}
        <div className="relative z-10 mt-6">
          {savingsPercent && savingsPercent > 0 && (
            <span
              className="text-[#3ed37a] text-[16px] md:text-[18px] font-semibold mb-2 block"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              {saveLabel} {savingsPercent}%
            </span>
          )}
          <div className="flex items-baseline flex-wrap gap-2">
            <span
              className={`font-semibold text-[44px] md:text-[55px] leading-[1] ${highlighted ? "text-white" : "text-[#162b60]"
                }`}
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              {price}
            </span>
            <span
              className={`text-[16px] md:text-[17px] ${highlighted ? "text-white" : "text-[#162b60]"
                }`}
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              {priceSuffix}
            </span>
          </div>
          <p
            className={`text-[16px] md:text-[17px] mt-2 ${highlighted ? "text-white" : "text-[#162b60]"
              }`}
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            {priceDescription}
          </p>
        </div>

        {/* Button */}
        <button
          className={`cursor-pointer relative z-10 w-full py-4 rounded-[15px] mt-6 text-[16px] font-normal transition-all ${highlighted
            ? "bg-[#3ed37a] text-white hover:bg-[#35c06c]"
            : "bg-[#162b60] text-white hover:bg-[#1a3470]"
            }`}
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          {buttonText}
        </button>

        {/* Features */}
        <div className="relative z-10 mt-8 flex flex-col gap-5 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckIcon className="flex-shrink-0 mt-0.5" />
              <span
                className={`text-[15px] md:text-[16px] leading-snug ${highlighted ? "text-white" : "text-[#162b60]"
                  }`}
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
