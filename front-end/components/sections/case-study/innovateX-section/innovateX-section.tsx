
import Image from "next/image"

export default function InnovateXSection() {
    return (
        <section className="mt-10 mx-5 bg-[#f1d7b7] dark:bg-[#5d3c12] rounded-lg xl:grid xl:grid-cols-2">
            <div className="p-5 lg:p-10 space-y-6">
                <div>
                    <div className="block dark:hidden">
                        <Image 
                            src="/logo/innovateX(dark).svg"
                            alt="Logo image"
                            width={128}
                            height={32}
                        />
                    </div>
                    <div className="hidden dark:block">
                        <Image 
                            src="/logo/innovateX.svg"
                            alt="Logo image"
                            width={128}
                            height={32}
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-5xl text-black leading-tight dark:text-white font-bold">
                        Streamlining financial operations for a growing tech startup
                    </h1>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <p className="text-[16px]  font-semibold text-black dark:text-white">
                                <span className="text-[#947777] dark:text-[#a9a9a9]">Client:</span>  InnovateX
                            </p>
                        </li>
                        <li>
                            <p className="text-[16px]  font-semibold text-black dark:text-white">
                                <span className="text-[#947777] dark:text-[#a9a9a9]">Industry:</span>  Technology
                            </p>
                        </li>
                        <li>
                            <p className="text-[16px]  font-semibold text-black dark:text-white">
                                <span className="text-[#947777] dark:text-[#a9a9a9]">Joined:</span>  August 12, 2024
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-[16px] font-semibold text-black dark:text-white">Solution:</p>
                    <p className="w-full text-black dark:text-white font-sans tracking-tighter">
                        InnovateX, a rapidly growing tech startup, faced challenges in managing their expanding financial operations. With multiple revenue streams and a growing team, keeping track of expenses, payroll, and budgeting became increasingly complex.
                    </p>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                    <li className="p-4 md:p-8 lg:p-10 bg-white dark:bg-black rounded-xl space-y-2 tracking-tighter">
                        <p className="text-3xl text-black dark:text-white font-bold">30%</p>
                        <p className="md:text-2xl text-[#888] font-urbanist">Reduction in manual financial tasks</p>
                    </li>
                    <li className="p-4 md:p-8 lg:p-10 bg-white dark:bg-black rounded-xl space-y-2 tracking-tighter">
                        <p className="text-3xl text-black dark:text-white font-bold">20%</p>
                        <p className="md:text-2xl text-[#888] font-urbanist">Improvement in budgeting accuracy</p>
                    </li>
                    <li className="p-4 md:p-8 lg:p-10 bg-white dark:bg-black rounded-xl space-y-2 tracking-tighter">
                        <p className="text-3xl text-black dark:text-white font-bold">15%</p>
                        <p className="md:text-2xl text-[#888] font-urbanist">Faster decisions with real-time data</p>
                    </li>
                </ul>
            </div>
            <div className="mt-[24px] xl:mt-0 xl:flex items-end justify-end">
                <Image 
                    src="/images-png/img-casestudy-1.png"
                    alt="Image"
                    width={864}
                    height={667}
                />
            </div>
        </section>
    )
}