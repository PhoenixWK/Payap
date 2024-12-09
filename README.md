## Create a remote repository (12/05/2024, 9.09pm)
## Add KeyFeaturesSection and handle its dark mode (12/06/2024, 10.53pm)
key-feature.tsx

    import Image from "next/image";
    import { realTimeTrackingProperties } from "@/utils/links";
    import { Button } from "../ui/button";
    
    const KeyFeaturesSection = () => {
        return (
            <section className="py-10 w-full">
                <p className="text-[16px] text-[#3fa477] font-semibold">
                    Real-time Tracking
                </p>
                <h2 className="mt-4 text-2xl md:text-4xl text-black dark:text-white font-bold tracking-wider">
                    Track your finances in real-time, anytime, anywhere
                </h2>
                <p className="mt-4 text-[16px] xl:text-[24px] text-[#888888] font-sans font-semibold">
                    Gain full control over your spending with live updates on every transaction, available across all your devices, no matter where you are.
                </p>
                <Button 
                    variant="secondary"
                    className="mt-4 p-4 bg-[#eee] text-black font-sans font-semibold"
                >
                    Learn More
                </Button>
                <ul className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {realTimeTrackingProperties.map((realTimeTrackingProperty) => (
                        <li key={realTimeTrackingProperty.key} className="w-full p-4 bg-[#faf8f6] dark:bg-[#161616] rounded-lg">
                            <h3 className="text-[18px] text-black dark:text-white font-bold">
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
                                    width={294}
                                    height={147}
                                />
                            </div>
                            <div className="hidden dark:block mt-4">
                                <Image
                                    src={realTimeTrackingProperty.darkImg as string}
                                    alt="Image"
                                    className="w-full h-full"
                                    width={294}
                                    height={147}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
    
    export default KeyFeaturesSection;

## Add SecuritySection component and handle its dark mode state
security-sections.tsx

    
import Image from "next/image"

export default function SecuritySection() {
    return (
        <div className="min-h-screen bg-black dark:bg-[#EEEEEE] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10" />
                <div className="container mx-auto px-4 py-20 relative">
                    <div className="text-center mb-20">
                    <p className="text-emerald-400 font-semibold mb-4">Security & Data Privacy</p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white dark:text-black mb-6">
                        Your Data, Secured
                    </h1>
                    <p className="text-gray-400 dark:text-[#888888] font-semibold max-w-2xl mx-auto text-lg">
                        At Payap, we take your data security and privacy seriously. Our platform is built with industry-leading protection to ensure your information is safe.
                    </p>
                </div>          
                <div className="mx-auto">
                    <Image 
                        src="/security_section.png"
                        alt="Image"
                        className="w-full h-full"
                        width={1440}
                        height={1081}
                    />
                </div> 
            </div>
        </div>
        
    )
}


