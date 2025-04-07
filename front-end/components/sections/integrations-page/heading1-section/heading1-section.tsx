import Providers from "./providers";

export default function Heading1Section() {
    return (
        <section className="bg-[#343434] px-4 lg:px-6 py-6 lg:py-8 rounded-lg">
           <div className="space-y-6 ">
                <h1 className="text-3xl lg:text-5xl text-white text-center font-bold">Integrations</h1>
                <p className="text-sm text-center text-[#888] font-semibold">
                    Seamlessly connect Payap with the tools you already use. Our integrations are designed to help you manage your finances more efficiently by syncing data across platforms and streamlining your workflow.
                </p>
           </div>
           <div className="pt-4 md:pt-12">
                <Providers />
           </div>
        </section>
    )
}