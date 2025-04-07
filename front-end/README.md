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

## Add SecuritySection component and handle its dark mode state (8.39pm, 12/09/2024)
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

## Add understandTheProcessSections and handle its dark mode (12/12/2024, 8.38pm)
understandTheProcessSections.tsx    

    import { BarChart3, Clock, User2, Wallet } from 'lucide-react'
    import Image from 'next/image'
    
    export default function UnderstandTheProcessSection() {
        return (
            <section className="bg-[#FAF8F6] dark:bg-black">
                <div className="w-full h-full mx-auto py-12 md:py-16 lg:grid lg:grid-cols-2">
                    <div className="flex items-center justify-cente w-full h-full">
                        <Image 
                            src="/how-its-works.svg"
                            alt="Image"
                            className="dark:hidden w-full h-full"
                            width={716}
                            height={558}
                            quality={100}
                        />
                        <Image 
                            src="/how-its-works(dark).svg"
                            alt="Image"
                            className="hidden dark:block w-full h-full"
                            width={716}
                            height={558}
                            quality={100}
                        />
                    </div>
                    <div className="w-full h-full space-y-8">                  
                        <div className="space-y-2">
                            <p className="text-[#3FA477] font-semibold">How it works</p>
                            <h2 className="text-3xl md:text-4xl font-bold">Understand the Process</h2>
                            <p className="text-[#888888] font-semibold">
                            We're here to help! Whether you have a question, need support, or just want to learn more about Payap, feel
                            free to reach out to us.
                            </p>
                        </div>
    
                        <div className="grid gap-8 md:gap-12">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <User2 className="w-6 h-6 text-[#888888]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Connect your accounts</h3>
                                    <p className="text-[#888888]">
                                    Easily link your bank accounts, credit cards, and payment gateways to Payap.
                                    </p>
                                </div>
                            </div>
    
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 bg-white dark:bg-[#2f2f2f] rounded-md flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-[#3FA477]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Track your expenses in real time</h3>
                                    <p className="text-[#888888]">
                                    Once your accounts are connected, every transaction is tracked and categorized automatically.
                                    </p>
                                </div>
                            </div>
    
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <BarChart3 className="w-6 h-6 text-[#888888]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Customize your reports</h3>
                                    <p className="text-[#88888]">
                                    Generate detailed reports on income, expenses, and profits that are tailored to your business needs.
                                    </p>
                                </div>
                            </div>
    
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Wallet className="w-6 h-6 text-[#888888]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Stay on budget</h3>
                                    <p className="text-[#888888]">
                                        Set up budget limits and receive real-time alerts to help you avoid overspending.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

## Add understandTheProcess-section, integrations-section, enjoy7DaysFree-section and handle our dark mode state.
understandTheProcess-sections.tsx

    import { BarChart3, Clock, User2, Wallet } from 'lucide-react'
    import Image from 'next/image'
    
    export default function UnderstandTheProcessSection() {
        return (
            <section className="bg-[#FAF8F6] dark:bg-black">
                <div className="w-full h-full mx-auto px-5 py-12 md:py-16 lg:grid lg:grid-cols-2">
                    <div className="flex items-center justify-cente w-full h-full">
                        <Image 
                            src="/how-its-works.svg"
                            alt="Image"
                            className="dark:hidden w-full h-full"
                            width={1432}
                            height={1116}
                            quality={100}
                        />
                        <Image 
                            src="/how-its-works(dark).svg"
                            alt="Image"
                            className="hidden dark:block w-full h-full"
                            width={716}
                            height={558}
                            quality={100}
                        />
                    </div>
                    <div className="w-full h-full space-y-8">                  
                        <div className="space-y-2">
                            <p className="text-[#3FA477] font-semibold">How it works</p>
                            <h2 className="text-3xl md:text-4xl font-bold">Understand the Process</h2>
                            <p className="text-[#888888] font-semibold">
                            We're here to help! Whether you have a question, need support, or just want to learn more about Payap, feel
                            free to reach out to us.
                            </p>
                        </div>
    
                        <div className="grid gap-8 md:gap-12">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <User2 className="w-6 h-6 text-[#888888]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Connect your accounts</h3>
                                    <p className="text-[#888888]">
                                    Easily link your bank accounts, credit cards, and payment gateways to Payap.
                                    </p>
                                </div>
                            </div>
    
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 bg-white dark:bg-[#2f2f2f] rounded-md flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-[#3FA477]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Track your expenses in real time</h3>
                                    <p className="text-[#888888]">
                                    Once your accounts are connected, every transaction is tracked and categorized automatically.
                                    </p>
                                </div>
                            </div>
    
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <BarChart3 className="w-6 h-6 text-[#888888]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Customize your reports</h3>
                                    <p className="text-[#88888]">
                                    Generate detailed reports on income, expenses, and profits that are tailored to your business needs.
                                    </p>
                                </div>
                            </div>
    
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Wallet className="w-6 h-6 text-[#888888]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Stay on budget</h3>
                                    <p className="text-[#888888]">
                                        Set up budget limits and receive real-time alerts to help you avoid overspending.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

integrations-section.tsx

    import Image from "next/image"
    
    const apps: Array<{
        name: string,
        imgLink: string
    }> = [
        {
            name: "Paypal",
            imgLink: "/Name=paypal-2.svg"
        },
        {
            name: "Square",
            imgLink: "/Name=square.svg"
        },
        {
            name: "Envato",
            imgLink: "/Name=envato.svg"
        },
        {
            name: "Qiwi",
            imgLink: "/Name=qiwi.svg"
        },
        {
            name: "Stripe",
            imgLink: "/Name=stripe.svg"
        },
        {
            name: "Tech Crunch",
            imgLink: "/Name=tech_crunch.svg"
        },
        {
            name: "Shopify",
            imgLink: "/Name=shopify.svg"
        },
        {
            name: "Xero",
            imgLink: "/Name=xero.svg"
        },
        {
            name: "Alfa Bank",
            imgLink: "/Name=alfa_bank.svg"
        },
        {
            name: "Product Hunt",
            imgLink: "/Name=product_hunt.svg"
        },
        {
            name: "Yandex Kassa",
            imgLink: "/Name=yandex_kassa.svg"
        },
    ]
    
    export default function IntegrationsSection() {
        return (
            <section className="bg-white dark:bg-black">
                <div className="mx-auto px-5 py-12">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <p className="text-[#3FA477] text-center font-semibold">Integrations</p>
                            <h2 className="text-3xl dark:text-white md:text-4xl text-center font-bold">Integrate apps with a few seconds</h2>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4">
                            {apps.map((app) => (
                                <li 
                                    key={app.name}
                                    className="p-3 bg-[#faf8f6] rounded-3xl shadow-xl flex items-center gap-2"
                                >
                                    <Image
                                        src={app.imgLink as string}
                                        alt="Image"
                                        width={40}
                                        height={40}
                                    />
                                    <p className="text-sm text-[#888] font-medium">{app.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }

enjoy7DaysFree-section.tsx

    import { Button } from "@/components/ui/button";
    
    export default function Enjoy7DaysFreeSection() {
        return (
            <section className="bg-white dark:bg-black px-5 py-12 md:py-16">
                <div className="mx-auto px-4 py-6 md:py-12 lg:py-16 w-full h-full bg-[#f4fbf2] dark:bg-[#151515] rounded-lg">
                    <div className="space-y-4 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold">Get started in under 30 seconds. Enjoy a 7-day free trial.</h2>
                        <p className="text-[#888888] font-semibold">
                            Streamline your business operations by uniting projects, clients, 
                            and teams in one intuitive, all-in-one platform.
                        </p>
                        <Button 
                            variant="secondary" 
                            className="px-6 py-6 text-base text-black dark:hover:text-white font-bold bg-[#9CDD8A] border-2 border-[#EEEEEE] rounded-lg"
                        >
                            Start your 7 days free trial
                        </Button>
                    </div>
                </div>
            </section>
        )
    }
