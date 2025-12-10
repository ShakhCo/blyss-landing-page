import { Features } from "@/components/Features";
import { PricingTable } from "@/components/PricingTable";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Page() {
  return (
    <main>
      <LanguageSwitcher />
      <Features />
      <PricingTable />
    </main>
  );
}
