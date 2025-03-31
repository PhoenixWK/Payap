import { cn } from "@/lib/utils";

export default function SignUpForm() {
    return (
        <form action="">
            <div>
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
            </div>
        </form>
    )
}
