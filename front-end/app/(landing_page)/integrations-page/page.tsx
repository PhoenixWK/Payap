import LandingPageLayout from "@/app/LandingPageLayout";
import Heading1Section from "@/components/sections/integrations-page/heading1-section/heading1-section";
import StakeHolders from "@/components/sections/integrations-page/heading1-section/stakeholders";

export default function IntegrationsPage() {
    return (
        <LandingPageLayout>
            <div className="pt-[120px] pb-10 px-5 lg:px-10 bg-white dark:bg-black">
                <Heading1Section />
                <StakeHolders />
            </div>
        </LandingPageLayout>
    )
}