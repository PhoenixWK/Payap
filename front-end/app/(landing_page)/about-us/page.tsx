import Image from "next/image";
import LandingPageLayout from "@/app/LandingPageLayout";
import { BsTransparency } from "react-icons/bs";
import { RiFundsBoxLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { Button } from "@/components/ui/button";

const teamMembers = [
    {
        id: 1,
        name: "Emma Nguyen",
        role: "Chief Executive Officer",
        image: "/landing_page-images/about-us/emma-nguyen.png"
    },
    {
        id: 2,
        name: "James Turner",
        role: "Chief Technology Officer",
        image: "/landing_page-images/about-us/james-turner.png"
    },
    {
        id: 3,
        name: "Sophia Li",
        role: "Head of Design",
        image: "/landing_page-images/about-us/sophia-li.png"
    },
    {
        id: 4,
        name: "Michael Kim",
        role: "Lead Product Designer",
        image: "/landing_page-images/about-us/michael-kim.png"
    },
    {
        id: 5,
        name: "Ava Martinez",
        role: "Senior Developer",
        image: "/landing_page-images/about-us/ava-martinez.png"
    },
    {
        id: 6,
        name: "Ethan Patel",
        role: "Marketing Director",
        image: "/landing_page-images/about-us/ethan-patel.png"
    },
    {
        id: 7,
        name: "Oliver Brown",
        role: "Customer Success Manager",
        image: "/landing_page-images/about-us/oliver-brown.png"
    },
    {
        id: 8,
        name: "Liam David",
        role: "UX/UI Designer",
        image: "/landing_page-images/about-us/liam-david.png"
    },
];

// Company values data
const values = [
    {
        id: 1,
        title: "Transparency",
        description: "We prioritize clear and honest communication with our customers.",
        icon: (
            <BsTransparency size={40} className="dark:text-white" />
        ),
    },
    {
        id: 2,
        title: "Innovation",
        description: "We're committed to creating solutions that meet evolving financial needs.",
        icon: (
            <FaRegUserCircle size={40} className="dark:text-white" />
        ),
    },
    {
        id: 3,
        title: "Customer Focus",
        description: "Everything we do is centered around making financial management easier for you.",
        icon: (
            <RiFundsBoxLine size={40} className="dark:text-white" />
        ),
    },
    {
        id: 4,
        title: "Security",
        description: "We implement state-of-the-art protections to safeguard your financial data.",
        icon: (
            <MdOutlineSecurity size={40} className="dark:text-white" />
        ),
    },
];
export default function AboutPage() {
    // Team members data
    

    return (
        <LandingPageLayout>
            {/* Hero Section */}
            <section className="bg-[#eee] dark:bg-black pt-[120px] pb-12 w-full">
                <div className=" mx-auto px-5 xl:px-10">
                    <div className="flex flex-col items-center gap-8">
                        <div className="">
                            <h1 className="text-4xl text-center font-bold leading-tight mb-4">
                                Meet the team transforming your financial journey
                            </h1>
                            <p className="text-[#888] text-sm lg:text-lg text-center font-semibold">
                                At Payap, we believe that financial management should be simple, secure, and accessible to 
                                everyone. Powered with the vision of empowering individuals and businesses to take control of 
                                their financial future, our team of experts works tirelessly to develop innovative solutions with 
                                user-friendly features.
                            </p>
                        </div>
                        <div className="w-full h-full">
                            <Image 
                                src="/landing_page-images/about-us/img-aboutus-hero.png" 
                                alt="Team meeting" 
                                width={0} 
                                height={0}
                                sizes="100vw" 
                                className="w-full h-auto rounded-lg" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 w-full">
                <div className="mx-auto px-5 xl:px-10">
                   <div className="space-y-3">
                        <p className="text-sm text-[#3fa477] font-semibold">What drives us forward</p>
                        <h2 className="text-3xl font-bold">Our Values</h2>
                        <p className="text-[#888] text-sm font-semibold mb-12">
                            Our mission is to revolutionize financial planning, budgeting, and payments, helping our users 
                            control cash flow and optimize returns. Using advanced technologies and domain expertise, we&apos;re 
                            committed to making innovative solutions. Payap offers reliable platforms built to scale.
                        </p>
                   </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {values.map((value) => (
                            <div key={value.id} className="p-5 bg-[#faf8f6] dark:bg-[#161616] rounded-md flex flex-col items-start">
                                <div className="text-gray-600 mb-3">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold mt-4 mb-2">{value.title}</h3>
                                <p className="text-[#6d6d6d] text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="pb-16 w-full">
                <div className="mx-auto px-5 xl:px-10">
                    <div className="space-y-3">
                        <p className="text-sm text-[#3fa477] font-semibold">The people behind Payap</p>
                        <h2 className="text-3xl font-bold">Meet Our Team</h2>
                        <p className="text-[#888] text-sm font-semibold mb-12">
                            The Payap team consists of finance experts, engineers, designers, and customer service 
                            professionals committed to creating solutions that help manage your finances in the 
                            smoothest and safest way possible.
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="relative w-full h-fit bg-[#e7f7e1] dark:bg-[#17320d] rounded-lg overflow-hidden shadow-sm">
                                <div className="relative">
                                    <Image 
                                        src={member.image} 
                                        alt={member.name} 
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-full h-full object-contain" 
                                    />
                                    
                                </div>  
                                <div className="bg-white dark:bg-black rounded-r-md bottom-8 left-0 absolute p-4 w-fit">
                                    <h3 className="font-semibold dark:text-white text-lg">{member.name}</h3>
                                    <p className="text-black dark:text-white text-sm">{member.role}</p>
                                </div>                   
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white dark:bg-black px-5 xl:px-10 pb-12 md:pb-16">
                <div className="mx-auto px-4 py-6 md:py-12 lg:py-16 w-full h-full bg-[#9CDD8A] rounded-lg">
                    <div className="space-y-4 text-center">
                        <h2 className="text-2xl text-black md:text-4xl font-bold">Be part of a growing team shaping the future of finance</h2>
                        <Button 
                            variant="secondary" 
                            className="px-6 py-8 text-base text-black dark:hover:text-white font-bold bg-white shadow-md rounded-lg"
                        >
                            Join Our Team
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer is handled by the LandingPageLayout */}
        </LandingPageLayout>
    );
}
