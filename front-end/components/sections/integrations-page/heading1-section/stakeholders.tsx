
import Image from "next/image"

const stakeHolders: Array<{
    key: string,
    name: string,
    description: string,
    type: string,
    linkImg: string
}> = [
    {
        key: "xero",
        name: "Xero",
        description: "Connect with Xero to manage your finances effortlessly. Xero helps you monitor your financial health.",
        type: "Embed",
        linkImg: "/stakeholders/Name=xero.svg"
    },
    {
        key: "shopify",
        name: "Shopify",
        description: "Integrate Payop with your Shopify store to manage expenses, track sales, and improve cash flow visibility.",
        type: "Native",
        linkImg: "/stakeholders/Name=shopify.svg"
    },
    {
        key: "tech_crunch",
        name: "Tech Crunch",
        description: "Keep track of your company's press mentions and financial impact with TechCrunch integration.",
        type: "Embed",
        linkImg: "/stakeholders/Name=tech_crunch.svg"
    },
    {
        key: "product_hunt",
        name: "Product Hunt",
        description: "Track the success of your product launch and sales performance on Product Hunt, integrating financial insights seamlessly.",
        type: "Embed",
        linkImg: "/stakeholders/Name=product_hunt.svg"
    },
    {
        key: "envato",
        name: "Envato",
        description: "Manage your earnings and track expenses from your Envato marketplace sales directly.",
        type: "Native",
        linkImg: "/stakeholders/Name=envato.svg"
    },
    {
        key: "qiwi",
        name: "Qiwi",
        description: "Integrate Qiwi payment gateway with Payop to manage your payments and track expenses through one platform.",
        type: "Embed",
        linkImg: "/stakeholders/Name=qiwi.svg"
    },
    {
        key: "alfa_bank",
        name: "Alfa Bank",
        description: "Easily connect your Alfa Bank accounts to Payop for seamless financial management and reporting.",
        type: "Native",
        linkImg: "/stakeholders/Name=alfa_bank.svg"
    },
    {
        key: "yandex_kassa",
        name: "Yandex Kassa",
        description: "Integrate Payop with Yandex Kassa for smooth payment processing and transaction management.",
        type: "Embed",
        linkImg: "/stakeholders/Name=yandex_kassa.svg"
    }    
]

export default function StakeHolders() {
    return (
        <section className="pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stakeHolders.map((stakeHolder) => (
                <div key={stakeHolder.key} className="p-4 space-y-4 border-2 border-[#eaeaea] hover:border-[#9CDD8A] rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="w-fit p-2 dark:p-0 rounded-full shadow-lg">
                            <Image 
                                src={stakeHolder.linkImg as string}
                                alt={`Image of ${stakeHolder.name}`}
                                width={0}
                                height={0}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className="w-fit px-4 py-2 bg-[#f0f0f0] rounded-lg text-sm text-[#888] text-center font-medium">
                            {stakeHolder.type}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-lg font-montserrat font-semibold">{stakeHolder.name}</p>
                        <p className="text-sm text-[#888] font-sans">{stakeHolder.description}</p>
                        
                    </div>
                </div>
            ))}
        </section>
    )
}