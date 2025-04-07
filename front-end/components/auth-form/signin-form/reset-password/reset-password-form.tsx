import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ResetPasswordForm() {
    return (
        <form className="w-full md:max-w-md space-y-4">
            <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                    Email<span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="johndoe@payap.com"
                    className={cn("w-full p-4 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                />
            </div>
            <div className="pt-6 flex flex-col gap-4">
                <Button
                    type="submit"
                    className="w-full bg-[#9cdd8a] text-lg text-black font-semibold rounded-lg py-8 hover:bg-[#9cdd8a]/80 transition-colors"
                >
                    Login
                </Button>
                <Button 
                        variant={"outline"} 
                        className="w-full mb-4 flex items-center justify-center gap-2 border-2 rounded-lg py-8 bg-[#faf8f7] hover:bg-gray-50 dark:bg-[#161616] hover:dark:border-white"
                    >
                        <span className="text-lg text-black dark:text-white font-semibold">Back to login</span>
                </Button>
            </div>
        </form>
    )
}
