
import Link from "next/link";
import Image from "next/image";
import ResetPasswordForm from "@/components/auth-form/signin-form/reset-password/reset-password-form";

export default function ResetPassword() {
    return (
        <main className="w-sreen h-screen px-5 py-5 flex justify-between overflow-hidden">
            <div className="w-full lg:mr-4 flex flex-col items-center justify-between">
                <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-2 md:gap-0">
                    <div className="inline-block text-2xl font-bold">
                        <Link href="/" className="inline-flex items-center gap-2">
                            <Image 
                                src="/payap.png"
                                alt="Payap logo"
                                width={40}
                                height={40}
                                className="w-auto h-auto"
                                priority={true}               
                            />
                            <span>Payap</span>
                        </Link>
                    </div> 
                    <p className="text-gray-600 text-lg dark:text-[#6d6d6d]">Don&apos;t have an account? <Link href="/sign-up" className="text-[#3fa477] font-semibold hover:underline hover:text-emerald-600">Sign up</Link></p>
                </div>
                <div className="w-full flex flex-col items-start md:items-center space-y-6">
                    <div>
                        <h1 className="text-4xl inline-block text-left font-bold mb-2">Reset your password</h1>
                        <p className="text-lg text-[#888] dark:text-[#6d6d6d]">Please enter your registered email to receive a reset link.</p>
                    </div>
                    <ResetPasswordForm />
                </div>
                
                <div className="mt-8 flex items-center justify-center w-full  text-gray-500 dark:text-[#6d6d6d]">
                    <div className="space-x-4">
                        <Link href="/terms-of-service" className="hover:text-black">Terms of service</Link>
                        <Link href="/privacy-policy" className="hover:text-black">Privacy policy</Link>
                    </div>
                </div>
            </div>
            <div className="hidden xl:block w-full h-full">
                <Image 
                    src="/landing_page-images/form-images/main.png" 
                    alt="main page image"                
                    width={0}
                    height={0}
                    sizes="80vw"
                    className="w-full h-full"
                    loading="lazy"                 
                />
            </div>
        </main>
    )
}
