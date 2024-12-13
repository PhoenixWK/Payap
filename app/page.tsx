import IntegrationsSection from "@/components/sections/integrations-section/integrations-section";
import IntroduceSection from "@/components/sections/home-sections/introduce-section";
import KeyFeaturesSection from "@/components/sections/key-features/key-features";
import SecuritySection from "@/components/sections/security-sections/security-sections";
import UnderstandTheProcessSection from "@/components/sections/understandProcess-sections/understandTheProcess-sections";
import Enjoy7DaysFreeSection from "@/components/sections/enjoy7DaysFree-section/enjoy7DaysFree-section";

export default function Home() {
  return (
    <div className="bg-[#EEEEEE] dark:bg-black w-full pt-[80px]">
      <IntroduceSection />
      <KeyFeaturesSection />
      <SecuritySection />
      <UnderstandTheProcessSection />
      <IntegrationsSection />
      <Enjoy7DaysFreeSection />
    </div>
  );
}
