import IntegrationsSection from "@/components/sections/default/integrations-section/integrations-section";
import IntroduceSection from "@/components/sections/default/home-sections/introduce-section";
import KeyFeaturesSection from "@/components/sections/default/key-features/key-features";
import SecuritySection from "@/components/sections/default/security-sections/security-sections";
import UnderstandTheProcessSection from "@/components/sections/default/understandProcess-sections/understandTheProcess-sections";
import Enjoy7DaysFreeSection from "@/components/sections/default/enjoy7DaysFree-section/enjoy7DaysFree-section";
import LandingPageLayout from "./LandingPageLayout";

export default function Home() {
  return (
    <LandingPageLayout>
      <div className="bg-[#EEEEEE] dark:bg-black w-full pt-[80px]">
        <IntroduceSection />
        <KeyFeaturesSection />
        <SecuritySection />
        <UnderstandTheProcessSection />
        <IntegrationsSection />
        <Enjoy7DaysFreeSection />
      </div>
    </LandingPageLayout>
  );
}
