'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image"
import { IoMenu } from "react-icons/io5";
import { useTheme } from 'next-themes';
import { headerLinks } from "@/utils/links";
import { Button } from "../ui/button";
import { DarkModeBtn } from "./DarkModeBtn";

const Header = () => {
    const [isMenuVisible, setMenuVisible] = React.useState<boolean>(false);

    return (
        <>
            <nav className="fixed w-full h-[80px] px-5 xl:px-10 bg-[#FAF8F6] dark:bg-black">
                <header className="w-full h-full flex items-center justify-between">
                    <div className="flex gap-6 w-fit">
                        <div className="flex gap-2">
                            <Image 
                                src="/payap(noname).svg"
                                alt="Web logo"
                                width={40}
                                height={40}
                                priority
                            />
                            <p className="text-[26px] hidden md:block text-black dark:text-white font-monsterat font-bold">Payap</p>
                        </div>
                        <ul className="hidden xl:flex items-center justify-center gap-8">
                            {headerLinks.map((headerLink) => (
                                <li key={headerLink.key}>
                                    <Link href={headerLink.link} className="text-[16px] text-black dark:text-white font-bold">
                                        {headerLink.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <DarkModeBtn />
                        </div>
                        <button
                            className="bg-transparent xl:hidden"
                            onClick={() => setMenuVisible((isMenuVisible) => !isMenuVisible)}
                        >
                            <IoMenu
                                size={24}
                            />
                        </button>
                        <Button
                            variant="secondary" 
                            className="hidden xl:flex text-[14px] text-black dark:hover:text-white font-bold bg-[#EEEEEE] border-2 border-[#EEEEEE]"
                        >
                            Login
                        </Button>
                        <Button 
                            variant="secondary" 
                            className="hidden xl:flex text-[14px] text-black dark:hover:text-white font-bold bg-[#9CDD8A] border-2 border-[#EEEEEE]"
                        >
                            Get started
                        </Button>
                    </div>
                </header>
            </nav>
            {isMenuVisible && (
                <div className="fixed z-10 w-full h-full p-6 mt-[78px] dark:bg-black bg-[#FAF8F6] border-t-2 border-[#d1d1d1]">
                    <ul className="flex flex-col items-start justify-start gap-8">
                        {headerLinks.map((headerLink) => (
                            <li key={headerLink.key}>
                                <Link href={headerLink.link} className="text-[16px] text-black dark:text-white font-bold">
                                    {headerLink.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Header