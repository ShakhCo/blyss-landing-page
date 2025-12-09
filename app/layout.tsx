import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLYSS - Telegram orqali sartaroshxonaga yoziling | blyss.uz",
  description: "BLYSS - O'zbekistondagi birinchi Telegram Mini App. Sartaroshxona va go'zallik salonlariga bir zumda yoziling. @blyssbot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
