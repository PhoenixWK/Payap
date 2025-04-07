
import Image from "next/image";
import PricingPlans from "@/components/sections/pricing/pricingPlans/pricing-plans";
import FeatureTable from "@/components/sections/pricing/features-table/features-table";
import FAQSection from "@/components/sections/pricing/faq-section/faq-section";
import LandingPageLayout from "@/app/LandingPageLayout";

const apps:Array<string> = [
    '/logo/dark_logo/dark_contenful.svg',
    '/logo/dark_logo/dark_databrick.svg',
    '/logo/dark_logo/dark_monday.svg',
    '/logo/dark_logo/dark_monzo.svg',
    '/logo/dark_logo/dark_pipedrive.svg',
    '/logo/dark_logo/dark_treehouse.svg'
]
export default function PricingPage() {
    return (
        <LandingPageLayout>
            <div className="bg-white dark:bg-black w-full pt-[80px]">
                <div className="px-5 pb-5 pt-8 lg:p-10 space-y-6">
                    <div className="space-y-2">
                        <p className="text-[12px] md:text-[16px] text-[#3fa477] font-semibold">
                            Choose the plan that’s right for you
                        </p>
                            <h1 className="text-3xl md:text-5xl text-black leading-tight dark:text-white font-bold">
                                Pricing
                            </h1>
                            <p className="mt-2 text-[16px] xl:text-[24px] text-[#888888] font-sans font-semibold">
                                We&apos;re here to help! Whether you have a question, need support, or just want to learn more about Payap, feel free to reach out to us.
                            </p>
                    </div>
                </div>
                <PricingPlans />
                <div className="p-5 space-y-4 bg-[#EEEEEE] dark:bg-[#161616] font-bold font-monsterat text-center">
                    <h2 className="text-xl dark:text-white">
                        Trusted by 7,000+ apps and the world&apos;s largest app publishers
                    </h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
                        {apps.map((app) => (
                            <li key={app} className="">
                                <Image
                                    src={app as string}
                                    alt="Logo"
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-auto"
                                    priority={false}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <section className="pt-10 px-5 lg:p-10">
                    <div className="space-y-4">
                        <h2 className="text-xl lg:text-3xl font-bold font-montserrat leading-7">Compare all features</h2>
                        <FeatureTable />
                    </div>
                </section>
                <section>
                    <FAQSection />
                </section>
            </div>
        </LandingPageLayout>
    )
}