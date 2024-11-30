
import Image from "next/image"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { companyConcerns, featureConcerns, legalDocuments, productConcerns, resourcesConcerns } from "@/utils/links";
import Link from "next/link";

const Footer = () => {
    return (
        <nav className="w-full h-full px-6 xl:px-10 py-6 bg-[#FAF8F6] dark:bg-black">
            <footer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2">
                            <Image
                                src="/payap(noname).svg"
                                alt="Icon"
                                width={40}
                                height={40}
                            />
                            <p className="text-[26px] text-black dark:text-white font-monsterat font-bold">Payap</p>
                        </div>
                        <div className="flex gap-4">
                            <FaFacebookSquare
                                size={20}
                            />
                            <FaSquareXTwitter
                                size={20}
                            />
                            <FaLinkedin
                                size={20}
                            />
                            <FaYoutubeSquare 
                                size={20}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[16px] text-[#888888] font-bold">Feature</h2>   
                        <ul className="mt-5 flex flex-col gap-4">
                            {featureConcerns.map((featureConcern) => (
                                <li key={featureConcern.key}>
                                    <Link href={featureConcern.link} className="text-[16px] text-black dark:text-white font-bold hover:underline">
                                        {featureConcern.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[16px] text-[#888888] font-bold">Product</h2>   
                        <ul className="mt-5 flex flex-col gap-4">
                            {productConcerns.map((productConcern) => (
                                <li key={productConcern.key}>
                                    <Link href={productConcern.link} className="text-[16px] text-black dark:text-white font-bold hover:underline">
                                        {productConcern.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden md:flex w-full h-full">

                    </div>
                    <div>
                        <h2 className="text-[16px] text-[#888888] font-bold">Resources</h2>   
                        <ul className="mt-5 flex flex-col gap-4">
                            {resourcesConcerns.map((resourcesConcern) => (
                                <li key={resourcesConcern.key}>
                                    <Link href={resourcesConcern.link} className="text-[16px] text-black dark:text-white font-bold hover:underline">
                                        {resourcesConcern.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[16px] text-[#888888] font-bold">Company</h2>   
                        <ul className="mt-5 flex flex-col gap-4">
                            {companyConcerns.map((companyConcern) => (
                                <li key={companyConcern.key}>
                                    <Link href={companyConcern.link} className="text-[16px] text-black dark:text-white font-bold hover:underline">
                                        {companyConcern.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
                <div className="mt-10">
                    <ul className="mt-5 flex justify-between sm:items-start sm:justify-start sm:gap-5">
                        {legalDocuments.map((legalDocument) => (
                            <li key={legalDocument.key}>
                                <Link href={legalDocument.link} className="text-[16px] text-black dark:text-white font-normal">
                                    {legalDocument.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-10">
                    <p className="text-[14px] text-[#888888]">
                        © 2024 Payap, Inc. All Rights Reserved. Powered by Payap Technologies.
                    </p>
                </div>
            </footer>
        </nav>
    )
}

export default Footer