
import Image from "next/image"

const apps: Array<{
    name: string,
    imgLink: string
}> = [
    {
        name: "Paypal",
        imgLink: "/stakeholders/Name=paypal-2.svg"
    },
    {
        name: "Square",
        imgLink: "/stakeholders/Name=square.svg"
    },
    {
        name: "Envato",
        imgLink: "/stakeholders/Name=envato.svg"
    },
    {
        name: "Qiwi",
        imgLink: "/stakeholders/Name=qiwi.svg"
    },
    {
        name: "Stripe",
        imgLink: "/stakeholders/Name=stripe.svg"
    },
    {
        name: "Tech Crunch",
        imgLink: "/stakeholders/Name=tech_crunch.svg"
    },
    {
        name: "Shopify",
        imgLink: "/stakeholders/Name=shopify.svg"
    },
    {
        name: "Xero",
        imgLink: "/stakeholders/Name=xero.svg"
    },
    {
        name: "Alfa Bank",
        imgLink: "/stakeholders/Name=alfa_bank.svg"
    },
    {
        name: "Product Hunt",
        imgLink: "/stakeholders/Name=product_hunt.svg"
    },
    {
        name: "Yandex Kassa",
        imgLink: "/stakeholders/Name=yandex_kassa.svg"
    },
]

export default function IntegrationsSection() {
    return (
        <section className="bg-white dark:bg-black">
            <div className="mx-auto px-5 py-12">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <p className="text-[#3FA477] text-center font-semibold">Integrations</p>
                        <h2 className="text-3xl dark:text-white md:text-4xl text-center font-bold">Integrate apps with a few seconds</h2>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4">
                        {apps.map((app) => (
                            <li 
                                key={app.name}
                                className="p-3 bg-[#faf8f6] rounded-3xl shadow-xl flex items-center gap-2"
                            >
                                <Image
                                    src={app.imgLink as string}
                                    alt="Image"
                                    width={40}
                                    height={40}
                                />
                                <p className="text-sm text-[#888] font-medium">{app.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}