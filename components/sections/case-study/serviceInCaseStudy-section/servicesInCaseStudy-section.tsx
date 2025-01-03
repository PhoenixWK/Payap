
import Image from "next/image";
import { servicesInCaseStudy } from "@/utils/content";

export default function ServiceInCaseStudySection() {
    return (
        <section className="mt-[24px] mx-5">
            <ul className="pb-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-6 space-y-6 lg:space-y-0">
                {servicesInCaseStudy.map((service) => (
                    <li key={service.key} className={
                        service.key === 'treehouse' ? "bg-[#f4fbf2] dark:bg-[#151515] p-5 md:p-10 rounded-md space-y-6" :
                        service.key === 'airwallex' ? "bg-[#fbf6fa] dark:bg-[#151515] p-5 md:p-10 rounded-md space-y-6" :
                        service.key === 'wealthsimple' ? "bg-[#e6e5e5] dark:bg-[#151515] p-5 md:p-10 rounded-md space-y-6" : 
                        service.key === 'outreach' ? "bg-[#fcf7f0] dark:bg-[#151515] p-5 md:p-10 rounded-md space-y-6" :
                        service.key === 'hopin' ? "bg-[#ecfffe] dark:bg-[#151515] p-5 md:p-10 rounded-md space-y-6" :
                        service.key === 'databricks' ? "bg-[#fcf3fa] dark:bg-[#151515] p-5 md:p-10 rounded-md space-y-6" : ""
                    }>
                        <div>
                            <div className="block dark:hidden relative">
                                <Image
                                    src={service.linkImg as string}
                                    alt="Logo image"
                                    className="w-[130px] h-[32px]"
                                    width={`${130}`}
                                    height={`${32}`}
                                />
                            </div>
                            <div className="hidden dark:block">
                                <Image
                                    src={service.linkImgInDarkMode as string}
                                    alt="Logo image"
                                    className="w-[130px] h-[32px]"
                                    width={`${130}`}
                                    height={`${32}`}
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-4xl text-black dark:text-white font-bold">
                                {service.heading2}
                            </h2>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <p className="text-[16px]  font-semibold text-black dark:text-white">
                                        <span className="text-[#947777] dark:text-[#a9a9a9]">Client:</span>  {service.serviceProperties.client}
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[16px]  font-semibold text-black dark:text-white">
                                        <span className="text-[#947777] dark:text-[#a9a9a9]">Industry:</span>  {service.serviceProperties.industry}
                                    </p>
                                </li>
                                <li>
                                    <p className="text-[16px]  font-semibold text-black dark:text-white">
                                        <span className="text-[#947777] dark:text-[#a9a9a9]">Joined:</span>  {service.serviceProperties.joined}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[16px] font-semibold text-black dark:text-white">Solution:</p>
                            <p className="w-full text-black dark:text-white font-sans tracking-tighter">
                                {service.solution}
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
                            {service.measureAbilities.map((measureAbility) => (
                                <div key={measureAbility.accuracy} className="w-full flex flex-col space-y-2">
                                    <p className="text-xl text-[#006567] font-urbanist font-bold">{measureAbility.accuracy}</p>
                                    <p className="text-sm font-sans text-black dark:text-white text-balance">{measureAbility.ability}</p>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}