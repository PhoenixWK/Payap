import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function VerifyEmailForm() {
    return (
        <form className="w-full md:max-w-md space-y-6">
            <div>
                <label htmlFor="email_otp" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                    Password<span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="email_otp"
                    className={cn("w-full p-4 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                />
            </div>
            <Button
                type="submit"
                className="w-full bg-[#9cdd8a] text-lg text-black font-semibold rounded-lg py-8 hover:bg-[#9cdd8a]/80 transition-colors"
            >
                Send vertification code
            </Button>
            <div className="w-full text-center">
                <Button
                    variant="link"
                    className="text-lg text-[#9cdd8a] font-semibold"
                >
                    Resend code
                </Button>
            </div>
        </form>
    )
}