import LandingPageLayout from "@/app/LandingPageLayout";
import InnovateXSection from "@/components/sections/case-study/innovateX-section/innovateX-section";
import ServiceInCaseStudySection from "@/components/sections/case-study/serviceInCaseStudy-section/servicesInCaseStudy-section";

export default function CaseStudyPage() {
    return (
        <LandingPageLayout>
            <div className="bg-[#EEEEEE] dark:bg-black w-full pt-[80px]">
                <InnovateXSection />
                <ServiceInCaseStudySection />
            </div>
        </LandingPageLayout>
    )
}