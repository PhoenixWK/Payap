import { Button } from "@/components/ui/button";

export default function Enjoy7DaysFreeSection() {
    return (
        <section className="bg-white dark:bg-black px-5 py-12 md:py-16">
            <div className="mx-auto px-4 py-6 md:py-12 lg:py-16 w-full h-full bg-[#f4fbf2] dark:bg-[#151515] rounded-lg">
                <div className="space-y-4 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold">Get started in under 30 seconds. Enjoy a 7-day free trial.</h2>
                    <p className="text-[#888888] font-semibold">
                        Streamline your business operations by uniting projects, clients, 
                        and teams in one intuitive, all-in-one platform.
                    </p>
                    <Button 
                        variant="secondary" 
                        className="px-6 py-6 text-base text-black dark:hover:text-white font-bold bg-[#9CDD8A] border-2 border-[#EEEEEE] rounded-lg"
                    >
                        Start your 7 days free trial
                    </Button>
                </div>
            </div>
        </section>
    )
}