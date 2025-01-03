import Image from "next/image";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/utils/content";

export default function PricingPlans() {
    return (
        <section className="px-5 lg:px-10 pt-4 pb-10 space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:space-y-0 md:gap-4">
            {pricingPlans.map((pricingPlan) => (
                <div key={pricingPlan.key} className={pricingPlan.key === 'pro' ? 'bg-[#131313] dark:bg-white  rounded-lg shadow-lg' : "bg-white dark:bg-[#131313] border-2 border-[#cdcdcd] rounded-lg shadow-lg"}>
                    <div className="p-4 md:p-6 space-y-2 border-b-2 border-[#cdcdcd] ">
                        <h3 className={pricingPlan.key === 'pro' ? 'text-white dark:text-black text-lg font-semibold' : "text-lg font-semibold"}>{pricingPlan.heading2}</h3>
                        <p className="text-sm text-[#888] font-urbanist">{pricingPlan.subscription}</p>
                    </div>
                    <div className="p-4 md:p-6 space-y-6">
                        <p className={pricingPlan.key === 'pro' ? 'text-white dark:text-black text-2xl md:text-4xl font-sans font-bold' : "text-2xl md:text-4xl font-sans font-bold"}>
                            ${pricingPlan.cost} <span className="text-sm text-[#888]">/ month</span>
                        </p>
                        <Button
                            className={pricingPlan.key === 'pro' ? 'w-full p-5 bg-[#9cdd8a]  rounded-xl text-sm text-black hover:text-[#9cdd8a] dark:hover:text-[#9cdd8a] dark:text-white font-semibold text-center' : "w-full p-5 bg-[#f4fbf2] hover:bg-[#9cdd8a] dark:hover:bg-[#9cdd8a] dark:bg-[#131313] border-2 border-[#9cdd8a] rounded-xl text-sm text-black hover:text-white dark:text-white font-semibold text-center"}
                        >
                            {pricingPlan.key === 'basic' || pricingPlan.key === 'business' ? "Get Started" : "Contact Sale"}
                        </Button>
                        <ul className="space-y-2">
                            {pricingPlan.benefitOfPricing.map((benefit) => (
                                <li key={benefit.key} className={pricingPlan.key === 'pro' ? "flex gap-2 text-white dark:text-black text-sm font-sans" : "flex gap-2 text-sm font-sans"}>
                                    <Image 
                                        src="/tick-circle.svg"
                                        alt="icon"
                                        className="w-[16px] h-[16px]"
                                        width={`${16}`}
                                        height={`${16}`}
                                    />
                                    {benefit.descrition}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    )
}