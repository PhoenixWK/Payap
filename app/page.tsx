import IntroduceSection from "@/components/home-sections/introduce-section";
import KeyFeaturesSection from "@/components/key-features/key-features";

export default function Home() {
  return (
    <div className="bg-[#EEEEEE] dark:bg-black w-full pt-[80px]">
      <div className="px-5">
        <IntroduceSection />
      </div>
      <div className="bg-white dark:bg-black px-5">
        <KeyFeaturesSection />
      </div>
      HELLO WORLD
    </div>
  );
}
