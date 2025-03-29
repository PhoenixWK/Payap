import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SetNewPasswordForm() {
    return (
        <form className="w-full md:max-w-md space-y-6">
            <div>
                <label htmlFor="new_password" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                    Password<span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    id="new_password"
                    placeholder="Minimum 8 characters"
                    className={cn("w-full p-4 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                />
            </div>
            <div>
                <label htmlFor="confirm_new_password" className="block text-lg font-semibold text-gray-600 dark:text-[#6d6d6d] mb-1">
                    Confirm new password<span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    id="confirm_new_password"
                    placeholder="Re-enter password"
                    className={cn("w-full p-4 rounded-lg border-2 focus:outline-none focus:border-[#9cdd8a]")}
                />
            </div>
            <Button
                    type="submit"
                    className="w-full bg-[#9cdd8a] text-lg text-black font-semibold rounded-lg py-8 hover:bg-[#9cdd8a]/80 transition-colors"
            >
                Set new password
            </Button>
        </form>
    )
}
