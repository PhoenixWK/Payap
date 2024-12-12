import IntroduceSection from "@/components/sections/home-sections/introduce-section";
import KeyFeaturesSection from "@/components/sections/key-features/key-features";
import SecuritySection from "@/components/sections/security-sections/security-sections";
import UnderstandTheProcessSection from "@/components/sections/understandProcess-sections/understandTheProcess-sections";

export default function Home() {
  return (
    <div className="bg-[#EEEEEE] dark:bg-black w-full pt-[80px]">
      <div className="px-5">
        <IntroduceSection />
      </div>
      <div className="bg-white dark:bg-black px-5">
        <KeyFeaturesSection />
      </div>
      <div className="">
        <SecuritySection />
      </div>
      <div className="px-5">
        <UnderstandTheProcessSection />
      </div>
      HELLO WORLD
    </div>
  );
}
