import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Enjoy7DaysFreeSection from "../default/enjoy7DaysFree-section/enjoy7DaysFree-section";

export default function ShowFeatures() {
    return (
        <section>
            <div className="w-full mx-auto pt-16 pb-4">
                <section className="mb-16 md:mb-24">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="lg:pl-5 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Instant expense updates</h2>
                            <p className="dark:text-white text-black">
                                Every transaction is automatically tracked and updated in real time, whether you&apos;re paying bills,
                                shopping online, or swiping your card.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>Immediate visibility into spending habits</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>Ability to adjust budget in real time</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>Instant action on unexpected expenses</span>
                                </li>
                            </ul>
                            <Button className="py-6 bg-[#f4fbf2] dark:bg-black hover:bg-[#9cdd8a] dark:hover:bg-[#9cdd8a] text-black dark:text-white border-2 border-[#9cdd8a] font-semibold rounded-md px-6">Get Started</Button>
                        </div>
                        <div className="dark:hidden">
                            <Image
                                src="/landing_page-images/features-page-images/receipts.png"
                                alt="Expense tracking dashboard"
                                loading="lazy"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            /> 
                        </div>
                        <div className="hidden dark:block">
                            <Image
                                src="/features-page-images/receipts(black).png"
                                alt="Expense tracking dashboard"
                                loading="lazy"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    </section>
                    <section className="mb-16 md:mb-24">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1">
                                <div className="dark:hidden">
                                        <Image
                                            src="/landing_page-images/features-page-images/latest-transaction.png"
                                            alt="Expense tracking dashboard"
                                            loading="lazy"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: 'auto' }}
                                        /> 
                                </div>
                            <div className="hidden dark:block">
                                <Image
                                    src="/landing_page-images/features-page-images/latestTransaction.png"
                                    alt="Expense tracking dashboard"
                                    loading="lazy"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                /> 
                            </div>
                        </div>
                        <div className="lg:pr-5 order-1 md:order-2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Automated expense categorization</h2>
                            <p className="dark:text-white text-black">
                                Playa intelligently categorizes your expenses, ensuring that your financial data is organized and easy
                                to understand. Categories like Office Supplies, Utilities, and more are automatically assigned to each
                                expense.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>No manual sorting or categorizing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>Financial data is always organized</span>
                                </li>
                            </ul>
                            <Button className="py-6 bg-[#f4fbf2] dark:bg-black hover:bg-[#9cdd8a] dark:hover:bg-[#9cdd8a] text-black dark:text-white border-2 border-[#9cdd8a] font-semibold rounded-md px-6">Get Started</Button>
                        </div>
                    </div>
                </section>
                <section className="mb-16 md:mb-24">
                    <div className="lg:pl-5 grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Visual financial insights</h2>
                            <p className="dark:text-white text-black">
                                Make informed financial decisions with intuitive dashboards that visualize your spending trends. See
                                your biggest expense categories, track your spending habits over time, and compare your financial
                                performance month by month.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>Clear, easy-to-read charts and graphs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>Gain deeper insights into spending patterns</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>Spot trends and anomalies quickly</span>
                                </li>
                            </ul>
                            <Button className="py-6 bg-[#f4fbf2] dark:bg-black hover:bg-[#9cdd8a] dark:hover:bg-[#9cdd8a] text-black dark:text-white border-2 border-[#9cdd8a] font-semibold rounded-md px-6">Get Started</Button>
                        </div>
                        <div className="dark:hidden">
                            <Image
                                src="/landing_page-images/features-page-images/source.png"
                                alt="Visual financial insights image"
                                loading="lazy"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div className="hidden dark:block">
                            <Image
                                src="/landing_page-images/features-page-images/source(black).png"
                                alt="Visual financial insights image"
                                loading="lazy"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </section>
                <section className="mb-16 md:mb-24">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <div className="dark:hidden">
                                <Image
                                    src="/landing_page-images/features-page-images/cross-platform.png"
                                    alt="Cross-platform accessibility image"
                                    loading="lazy"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="hidden dark:block">
                                <Image
                                    src="/landing_page-images/features-page-images/cross-platform(black).png"
                                    alt="Cross-platform accessibility image"
                                    loading="lazy"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                        <div className="lg:pr-5 order-1 md:order-2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Cross-platform accessibility</h2>
                            <p className="text-black dark:text-white">
                                Track and manage your finances from anywhere, whether you&apos;re on your desktop, tablet, or mobile device.
                                The Playa app ensures that your real-time expense data is always within reach.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>Access your financial data from any device</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>Seamless experience across web, mobile, and tablet</span>
                                </li>
                                    <li className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>Stay connected to your finances anytime, anywhere</span>
                                </li>
                            </ul>
                            <Button className="py-6 bg-[#f4fbf2] dark:bg-black hover:bg-[#9cdd8a] dark:hover:bg-[#9cdd8a] text-black dark:text-white border-2 border-[#9cdd8a] font-semibold rounded-md px-6">Get Started</Button>
                        </div>
                    </div>
                </section>
                <Enjoy7DaysFreeSection />
            </div>
        </section>
    )
}
