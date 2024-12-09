
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


