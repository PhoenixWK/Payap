import LandingPageLayout from "@/app/LandingPageLayout";
import Link from "next/link";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
import { FaPhone, FaFax, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineFax } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactUs() {
    return (
        <LandingPageLayout>
            <div className="flex flex-col min-h-screen px-5 lg:px-10 pb-12 lg:py-12 w-full">
                {/* Main Content */}
                <main className="pt-[80px] flex-grow">
                   
                    <div className="mx-auto w-full">              
                        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                        <p className="text-[#888] font-semibold mb-8">
                            We're here to help! Whether you have a question, need support, or just want to learn more about Payap, feel free to contact us.
                        </p>
                        {/* Contact Information */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
                            {/* Email */}
                            <div className="w-full h-full p-6 dark:bg-[#1d1d1d] flex flex-col items-start gap-4 border-2 border-[#eee] rounded-lg">
                                <div className="">
                                    <MdOutlineEmail size={48} className="" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-[#888] text-sm">For any inquiries or support requests</p>
                                                       
                                </div>
                                <p className="text-[#888] text-xl font-semibold">support@payap.com</p>  
                                <Button className={cn("p-5 bg-[#faf8f6] hover:bg-[#9cdd8a] hover:text-white dark:hover:bg-[#9cdd8a] dark:hover:text-white text-black font-semibold")}>
                                    Email to Support
                                </Button>
                            </div>

                            {/* Phone */}
                            <div className="w-full h-full p-6 dark:bg-[#1d1d1d] flex flex-col items-start gap-4 border-2 border-[#eee] rounded-lg">
                                <div className="">
                                    <FiPhone size={48} className="" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold">Phone Number</h3>
                                    <p className="text-[#888] text-sm">Speak directly with our support team.</p>
                                                       
                                </div>
                                <p className="text-[#888] text-xl font-semibold">+1 (800) 123-4567</p>  
                                <Button className={cn("p-5 bg-[#faf8f6] hover:bg-[#9cdd8a] hover:text-white dark:hover:bg-[#9cdd8a] dark:hover:text-white text-black font-semibold")}>
                                    Call Our Team
                                </Button>
                            </div>

                            {/* Fax */}
                            <div className="w-full h-full p-6 dark:bg-[#1d1d1d] flex flex-col items-start gap-4 border-2 border-[#eee] rounded-lg">
                                <div className="">
                                    <MdOutlineFax size={48} className="" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold">Fax</h3>
                                    <p className="text-[#888] text-sm">Send us your documents securely.</p>
                                                       
                                </div>
                                <p className="text-[#888] text-xl font-semibold">+1 (800) 987-6543</p>  
                            </div>

                            {/* Office Address */}
                            <div className="w-full h-full p-6 dark:bg-[#1d1d1d] flex flex-col items-start gap-4 border-2 border-[#eee] rounded-lg">
                                <div className="">
                                    <MdOutlineLocationOn size={48} className="" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold">Office Address</h3>
                                    <p className="text-[#888] text-sm">Visit our headquarters.</p>
                                                       
                                </div>
                                <p className="text-[#888] text-xl font-semibold">123 Finance Ave, Suite 100, New York, NY 10001, USA</p>  
                            </div>
                        </div>
                    </div>   
                </main>
            </div>
        </LandingPageLayout>
    )
}
