"use client"

import Image from "next/image";
import Link from "next/link";
import { BiHomeSmile } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineReceiptLong } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { usePathname } from "next/navigation";


export default function SidebarNav() {

    const pathname = usePathname();

    return (
        <div className="w-20 bg-white border-r border-gray-200 lg:flex flex-col items-center py-6 space-y-8">
            <div className="flex items-center justify-center">
                <Image 
                    src="/payap.png"
                    alt="Payap Logo"
                    width={26}
                    height={26}
                    sizes=""
                    className="w-auto h-auto"
                />
            </div>

            <nav className="flex flex-col items-center gap-10">
                <Link
                    href="/dashboard"
                    className={`${pathname === '/dashboard' ? 'bg-gray-100' : 'text-gray-500 hover:bg-gray-100'} + p-2 flex items-center justify-center rounded-lg`}
                >
                    <BiHomeSmile size={36} />
                </Link>
                <Link
                    href="/transactions"
                    className={`${pathname === '/transactions' ? 'bg-gray-100' : 'text-gray-500 hover:bg-gray-100'} + p-2 flex items-center justify-center rounded-lg`}
                >
                    <BiTransfer size={36} />
                    
                </Link>
                <Link
                    href="/receipts"
                    className={`${pathname === '/receipts' ? 'bg-gray-100' : 'text-gray-500 hover:bg-gray-100'} + p-2 flex items-center justify-center rounded-lg`}
                >
                    <MdOutlineReceiptLong size={36} />
                </Link>
                <Link
                    href="/bank-accounts"
                    className={`${pathname === '/bank-accounts' ? 'bg-gray-100' : 'text-gray-500 hover:bg-gray-100'} + p-2 flex items-center justify-center rounded-lg`}
                >
                    <FaRegCreditCard size={36} />
                </Link>
            </nav>
        </div>
    )
}
