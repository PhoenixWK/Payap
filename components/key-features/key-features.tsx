import { Button } from "../ui/button";

const KeyFeaturesSection = () => {
    return (
        <section className="pt-10 w-full">
            <p className="text-[16px] text-[#3fa477] font-semibold">
                Real-time Tracking
            </p>
            <h2 className="mt-4 text-2xl md:text-4xl text-black dark:text-white font-bold tracking-wider">
                Track your finances in real-time, anytime, anywhere
            </h2>
            <p className="mt-4 text-[16px] xl:text-[24px] text-[#888888] font-sans font-semibold">
                Gain full control over your spending with live updates on every transaction, available across all your devices, no matter where you are.
            </p>
            <Button 
                variant="secondary"
                className="mt-4 p-4 bg-[#eee] text-black font-sans font-semibold"
            >
                Learn More
            </Button>
        </section>
    )
}

export default KeyFeaturesSection;