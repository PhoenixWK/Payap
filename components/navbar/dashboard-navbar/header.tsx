"use client"

import React from "react";
import { usePathname } from "next/navigation"
import { MdOutlineMenu } from "react-icons/md";
import { DarkModeBtn } from "../landing_page-navbar/DarkModeBtn";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SidebarNav from "./sidebar-nav";

export default function Header() {

    const pathname = usePathname();

    return (
        <>
            <div className="w-full h-20 p-4 flex items-center justify-between bg-white dark:bg-black border-b-2 border-gray-200">
                <div className="flex items-center gap-2">
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="flex items-center justify-center">
                                    <MdOutlineMenu size={32} />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-fit p-0">
                                <SheetHeader>
                                    <SheetTitle></SheetTitle>
                                    <SheetDescription>
                                       
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="pt-6">
                                    <SidebarNav />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <h1 className="text-2xl text-black dark:text-white font-bold font-montserrat">
                        { 
                            pathname === "/dashboard" ? "Dashboard" :
                            pathname === "/transactions" ? "Transactions" :
                            pathname === "/receipts" ? "Receipts" :
                            pathname === "/bank-accounts" ? "Bank Accounts" : ""
                        }
                    </h1>
                </div>
                <DarkModeBtn />
            </div>
        </>
    )
}
