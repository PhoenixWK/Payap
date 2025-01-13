import Image from "next/image"

const providers: Array<{
  title: 'Stripe' | 'Square' | 'Paypal',
  linkImg: string,
  description: string,
  type: string,
  color: string,
  icon: string
}> = [
    {
      title: "Stripe",
      linkImg: "/logo/Stripe.svg",
      description: "Connect your Stripe account to Paysa for smooth revenue tracking and financial reporting",
      type: "Embed" as const,
      color: "bg-[#635BFF]",
      icon: "S"
    },
    {
      title: "Square",
      linkImg: "/logo/Square.svg",
      description: "Automatically sync your Square transactions and manage your payments in Paysa",
      type: "Native" as const,
      color: "bg-black",
      icon: "□"
    },
    {
      title: "Paypal",
      linkImg: "/logo/Paypal.svg",
      description: "Track payments and expenses through PayPal. Payment processing, real-time tracking",
      type: "Embed" as const,
      color: "bg-[#0070BA]",
      icon: "P"
    }
]

export default function Providers() {
  return (
    <div className="space-y-6 lg:grid grid-cols-3 gap-5 lg:space-y-0">
      {providers.map((provider) => (
        <div key={provider.title} className="shadow-lg rounded-lg">
          <div className={`px-6 py-4 ${provider.color} rounded-t-lg`}>
            <Image
              src={provider.linkImg}
              alt="Provider logo"
              width={0}
              height={0}
              className="w-auto h-auto"
            />
          </div>
          <div className="px-4 py-4 space-y-4 bg-white rounded-b-lg">
            <p className="text-lg text-black font-sans font-semibold">{provider.title}</p>
            <p className="text-sm text-[#888] font-sans">{provider.description}</p>
            <p className="w-fit px-4 py-2 bg-[#f0f0f0] rounded-lg text-sm text-[#888] text-center font-medium">
              {provider.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}