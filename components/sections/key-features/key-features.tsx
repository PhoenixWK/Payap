
import Image from "next/image";
import { realTimeTrackingProperties } from "@/utils/links";
import { Button } from "../../ui/button";

const KeyFeaturesSection = () => {
    return (
        <section className="py-10 w-full bg-white dark:bg-black">
            <div className="px-5">
                <p className="text-[16px] text-[#3fa477] font-semibold">
                    Real-time Tracking
                </p>
                <h2 className="mt-2 text-2xl md:text-4xl text-black dark:text-white font-bold tracking-wider">
                    Track your finances in real-time, anytime, anywhere
                </h2>
                <p className="mt-2 text-[16px] xl:text-[24px] text-[#888888] font-sans font-semibold">
                    Gain full control over your spending with live updates on every transaction, available across all your devices, no matter where you are.
                </p>
                <Button 
                    variant="secondary"
                    className="mt-2 p-4 bg-[#eee] text-black font-sans font-semibold"
                >
                    Learn More
                </Button>
                <ul className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {realTimeTrackingProperties.map((realTimeTrackingProperty) => (
                        <li key={realTimeTrackingProperty.key} className="w-full p-4 bg-[#faf8f6] dark:bg-[#161616] rounded-lg">
                            <h3 className="text-xl text-black dark:text-white font-bold">
                                {realTimeTrackingProperty.heading3}
                            </h3>
                            <ul className="mt-4 flex flex-col md:flex-row md:justify-between gap-2">
                                <li className="text-[14px] flex gap-2">
                                    <div className="w-3 h-3 rounded-full border-2 border-[#9CDD8A]"></div>
                                    {realTimeTrackingProperty.descForHeading3[0]}
                                </li>
                                <li className="text-[14px] flex gap-2">
                                    <div className="w-3 h-3 rounded-full border-2 border-[#9CDD8A]"></div>
                                    {realTimeTrackingProperty.descForHeading3[1]}
                                </li>
                            </ul>
                            <div className="dark:hidden mt-4">
                                <Image
                                    src={realTimeTrackingProperty.img as string}
                                    alt="Image"
                                    className="w-full h-full"
                                    width={318}
                                    height={171}
                                />
                            </div>
                            <div className="hidden dark:block mt-4">
                                <Image
                                    src={realTimeTrackingProperty.darkImg as string}
                                    alt="Image"
                                    className="w-full h-full"
                                    width={318}
                                    height={171}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default KeyFeaturesSection;