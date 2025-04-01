import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SignUpForm() {
    return (
        <form action="" className="w-full md:max-w-md space-y-4">
           <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="first_name" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                            First name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            placeholder="John"
                            className={cn("w-full p-3 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                            Last name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            placeholder="Doe"
                            className={cn("w-full p-3 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                            Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="johndoe@gmail.com"
                        className={cn("w-full p-3 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                            Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className={cn("w-full p-3 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                    />
                </div>
                <div>
                    <label htmlFor="confirm_password" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                            Confirm password<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        id="confirm_password"
                        placeholder="Confirm your password"
                        className={cn("w-full p-3 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#9cdd8a] text-black font-semibold rounded-lg p-4 hover:bg-[#9cdd8a]/80 transition-colors"
                >
                    Login
                </button>
                <p className="text-sm text-center text-gray-500">By click Sign Up, you agree to our <Link href="/terms-of-service" className="text-[#3fa477] hover:underline hover:text-emerald-600">Terms of Use</Link> and that you have read our <Link href="/privacy-policy" className="text-[#3fa477] hover:underline hover:text-emerald-600">Privacy Policy</Link></p>
           </div>
        </form>
    )
}
