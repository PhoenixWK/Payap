import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import { FaGoogle } from "react-icons/fa";

export default function SignInForm() {
    return (
        <div className="w-full md:max-w-md flex flex-col items-center justify-center">
            <div className="w-full">  
                <h1 className="text-3xl text-center font-bold mb-4">Login</h1>
                <Button 
                    variant={"outline"} 
                    className="w-full mb-4 flex items-center justify-center gap-2 border-2 rounded-lg py-6 bg-[#faf8f7] hover:bg-gray-50 dark:bg-[#161616] hover:dark:border-white"
                >
                    <FaGoogle size={20} />
                    <span className="text-sm font-semibold">Login with Google</span>
                </Button>
                <div className="text-center text-gray-500 my-4">Or</div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="johndoe@payap.com"
                            className={cn("w-full p-3 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                            Password<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className={cn("w-full p-3 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                        />
                        <button 
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                            👁️
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <p className="text-lg text-gray-600 dark:text-[#6d6d6d]">Forgot your password?</p>
                        <Link href="/sign-in/reset-password" className="text-lg text-[#3fa477] hover:underline hover:text-emerald-600">
                            Reset password
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#9cdd8a] text-black font-semibold rounded-lg p-3 hover:bg-[#9cdd8a]/80 transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}