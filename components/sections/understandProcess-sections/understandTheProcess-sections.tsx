

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

