import Image from "next/image";

import LandingPageLayout from "@/app/LandingPageLayout";
import { Button } from "@/components/ui/button";
import RealTimeExpenseTracking from "@/components/sections/integrations-page/RealTimeExpenseTracking";
import ShowFeatures from "@/components/sections/features/ShowFeatures";

export default function FeaturesPage() {
    return (
        <LandingPageLayout>
            <div className="bg-white dark:bg-black w-full pt-[120px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="px-6">
                        <h1 className="text-3xl md:text-4xl text-black dark:text-white font-bold text-left tracking-wider">
                            Effortless real-time expense tracking for<br></br><span className="text-[#3FA477]">smarter financial</span> control
                        </h1>
                        <p className="mt-4 text-[14px] xl:text-[16px] text-[#888888] text-left font-sans font-semibold">
                            With Payap's seamless tracking, you can monitor your expenses instantly, uncover spending patterns, and optimize your budget—all within an intuitive, user-friendly platform designed to help you stay in control.
                        </p>
                        <div className="mt-6">
                            <Button
                                variant="secondary"
                                className="w-fit h-14 md:px-8 py-2 bg-[#9CDD8A] rounded-xl shadow-inner text-[16px] font-semibold text-black dark:hover:text-white text-center"
                            >
                                Start yout 7 day free trial
                            </Button>
                        </div>
                    </div>
                    <div className="my-10">
                        <Image
                            src="/landing_page-images/features/small_overviews.png"
                            alt="small_overviews"
                            loading="lazy"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                <div className="bg-[#faf8f6] dark:bg-[#161616]">
                    <RealTimeExpenseTracking />
                </div>
                <div>
                    <ShowFeatures />
                </div>
            </div>      
        </LandingPageLayout>
    )
}
