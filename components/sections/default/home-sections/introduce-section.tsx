
import Image from "next/image";
import { Button } from "../../../ui/button";

const IntroduceSection = () => {
    return (
        <section className="mt-10 w-full">
           <div className="px-5">
            <h1 className="text-4xl md:text-7xl text-black dark:text-white font-bold text-center tracking-wider">
                    <span className="text-[#3FA477] px-2">Revolutionize</span> the Way You Manage Your Finances
                </h1>
                <p className="mt-10 text-[16px] xl:text-[24px] text-[#888888] text-center font-sans">
                    Experience seamless financial control with real-time tracking, smart insights, and effortless integration. <br></br>
                    Discover a new level of clarity and efficiency for your financial management.
                </p>
                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
                    <Button
                        variant="secondary"
                        className="w-full md:w-fit h-14 md:px-8 py-4 bg-[#9CDD8A] rounded-xl shadow-inner text-[16px] text-black dark:hover:text-white text-center"
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-full md:w-fit h-14 md:px-8 py-4 bg-white rounded-xl shadow-inner text-[16px] text-black dark:hover:text-white text-center"
                    >
                        Book a Call
                    </Button>
                </div>
                <div className="dark:hidden mt-10 flex items-center justify-center">
                    <Image 
                        src="/IntroduceBackground.svg"
                        alt="background"
                        className="md:w-[696px] md:h-[322px] lg:w-[1296px] lg:h-[579px]"
                        width={342}
                        height={172}
                        quality={100}
                        priority={true}
                    />
                </div>
                <div className="hidden mt-10 dark:flex items-center justify-center">
                    <Image 
                        src="/IntroduceBackground(dark).svg"
                        alt="background"
                        className="md:w-[696px] md:h-[322px] lg:w-[1296px] lg:h-[579px]"
                        width={342}
                        height={172}
                        quality={100}
                    />
                </div>
                <div className="my-10 flex justify-center items-center gap-4 md:gap-8 lg:gap-12 ">
                    <Image 
                        src="/segment.svg"
                        alt="Sponsor logo"
                        className="hidden md:block w-auto h-auto lg:w-36 lg:h-18 opacity-25 md:opacity-100"
                        width={171}
                        height={48}
                    />
                    <Image 
                        src="/contentfull.svg"
                        alt="Sponsor logo"
                        className="hidden md:block w-24 h-auto lg:w-36 lg:h-18 dark:fill-white"
                        width={163}
                        height={48}
                    />
                    <Image 
                        src="/airtasker.svg"
                        alt="Sponsor logo"
                        className="w-20 h-8 md:w-24 md:h-12 lg:w-36 lg:h-18"
                        width={144}
                        height={48}
                    />
                    <Image 
                        src="/treehouse.svg"
                        alt="Sponsor logo"
                        className="w-20 h-8 md:w-24 md:h-auto lg:w-36 lg:h-18 "
                        width={165}
                        height={48}
                    />
                    <Image 
                        src="/databricks.svg"
                        alt="Sponsor logo"
                        className="w-20 h-8 md:w-24 md:h-auto lg:w-36 lg:h-18"
                        width={178}
                        height={48}
                    />
                </div>
           </div>
        </section>
    )
}

export default IntroduceSection;