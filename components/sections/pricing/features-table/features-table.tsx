import Image from 'next/image'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface PricingFeature {
  name: string
  basic: boolean
  pro: boolean
  business: boolean
  enterprise: boolean
}

const features: PricingFeature[] = [
  {
    name: "Budget tracking",
    basic: true,
    pro: true,
    business: true,
    enterprise: true,
  },
  {
    name: "Expense categorization",
    basic: true,
    pro: true,
    business: true,
    enterprise: true,
  },
  {
    name: "Invoicing and billing",
    basic: false,
    pro: true,
    business: true,
    enterprise: true,
  },
  {
    name: "Basic financial reports",
    basic: true,
    pro: true,
    business: true,
    enterprise: true,
  },
  {
    name: "Advanced financial reports",
    basic: false,
    pro: true,
    business: true,
    enterprise: true,
  },
  {
    name: "Multi-user access",
    basic: false,
    pro: true,
    business: true,
    enterprise: true,
  },
  {
    name: "Payroll management",
    basic: false,
    pro: false,
    business: true,
    enterprise: true,
  },
  {
    name: "Inventory management",
    basic: false,
    pro: false,
    business: true,
    enterprise: true,
  },
  {
    name: "Custom integrations",
    basic: false,
    pro: false,
    business: false,
    enterprise: true,
  },
  {
    name: "Dedicated account manager",
    basic: false,
    pro: false,
    business: true,
    enterprise: true,
  },
  {
    name: "Email support",
    basic: true,
    pro: true,
    business: true,
    enterprise: true,
  },
  {
    name: "Priority email support",
    basic: false,
    pro: true,
    business: true,
    enterprise: true,
  },
  {
    name: "Phone support",
    basic: false,
    pro: false,
    business: true,
    enterprise: true,
  },
  {
    name: "24/7 premium support",
    basic: false,
    pro: false,
    business: false,
    enterprise: true,
  },
  {
    name: "Tailored onboarding and training",
    basic: false,
    pro: false,
    business: false,
    enterprise: true,
  },
]

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$29.99",
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Business",
    price: "$79.99",
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Enterprise",
    price: "$199.99",
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
]

export default function PricingComparison() {
  return (
        <div className="w-full mx-auto">
            {/* Mobile View - Cards */}
            <div className="grid gap-6 md:hidden">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className="rounded-lg border text-card-foreground shadow-sm"
                    >
                        <div className="p-6 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">
                                    {plan.name}
                                    {plan.popular && <span className="ml-2 text-orange-500">🔥</span>}
                                </h3>
                                <div className="text-2xl font-bold">{plan.price}</div>
                            </div>
                            <p className="text-sm text-muted-foreground">/ month</p>
                            <Button variant={plan.buttonVariant} className="w-full bg-[#9cdd8a]">
                                {plan.buttonText}
                            </Button>
                            <div className="space-y-2">
                                {features.map((feature) => {
                                    const included = feature[plan.name.toLowerCase() as keyof typeof feature]
                                    return (
                                        <div key={feature.name} className="flex items-center gap-2">
                                            {included ? (
                                                <Image
                                                    src="/tick-circle.svg"
                                                    alt='image'
                                                    width={0}
                                                    height={0}
                                                    sizes='100vw'
                                                    className='w-[16px] h-auto'
                                                />
                                            ) : (
                                                <Image
                                                    src="/close-circle.svg"
                                                    alt='image'
                                                    width={0}
                                                    height={0}
                                                    sizes='100vw'
                                                    className='w-[16px] h-auto'
                                                />
                                            )}
                                            <span className="text-sm">
                                                {feature.name}
                                                {feature.name === "Multi-user access" && (
                                                    <span className="block text-xs text-muted-foreground">
                                                        {plan.name === "Pro"
                                                        ? "Up to 5 users"
                                                        : plan.name === "Business"
                                                        ? "Up to 20 users"
                                                        : plan.name === "Enterprise"
                                                        ? "Unlimited users"
                                                        : ""}
                                                    </span>
                                                )}
                                            </span>
                                    </div>
                                )})}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        {/* Desktop View - Table */}
        <div className="hidden md:block overflow-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px] text-xl font-semibold hover:bg-none">Features</TableHead>
                            {plans.map((plan) => (
                                <TableHead key={plan.name} className="text-center hover:bg-none">
                                    <div className="min-w-[140px] pb-4">
                                        <div className="text-black dark:text-white font-semibold">
                                            {plan.name}
                                            {plan.popular && <span className="ml-2 text-orange-500">🔥</span>}
                                        </div>
                                        <div className="text-2xl text-black dark:text-white font-bold">{plan.price}</div>
                                        <div className="text-sm text-muted-foreground">/ month</div>
                                        <Button variant={plan.buttonVariant} className={
                                            plan.popular === true ? cn("mt-4 w-full py-5 rounded-lg bg-[#9cdd8a] hover:bg-white hover:text-[#9cdd8a] text-black font-semibold") : cn("mt-4 w-full py-5 rounded-lg border-2 border-[#9cdd8a] text-black dark:text-white font-semibold hover:bg-[#9cdd8a] hover:text-white")}>
                                        {plan.buttonText}
                                        </Button>
                                    </div>
                                </TableHead>
                            ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {features.map((feature) => (
                        <TableRow key={feature.name}>
                            <TableCell className="font-sans font-medium">{feature.name}</TableCell>
                            {plans.map((plan) => (
                            <TableCell key={plan.name} className="text-center">
                                {feature.name === "Multi-user access" ? (
                                <span className="text-sm">
                                    {plan.name === "Pro"
                                    ? "Up to 5 users"
                                    : plan.name === "Business"
                                    ? "Up to 20 users"
                                    : plan.name === "Enterprise"
                                    ? "Unlimited users"
                                    : (
                                        <div className='flex items-center justify-center'>
                                            <Image
                                                src="/close-circle.svg"
                                                alt='image'
                                                width={0}
                                                height={0}
                                                sizes='100vw'
                                                className='w-[16px] h-auto'
                                            />
                                    </div>
                                    )}
                                </span>
                                ) : feature[plan.name.toLowerCase() as keyof typeof feature] ? (
                                    <div className='flex items-center justify-center'>
                                        <Image
                                        src="/tick-circle.svg"
                                        alt='image'
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        className='w-[16px] h-auto'
                                        />
                                    </div>
                                ) : (
                                    <div className='flex items-center justify-center'>
                                        <Image
                                            src="/close-circle.svg"
                                            alt='image'
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className='w-[16px] h-auto'
                                        />
                                    </div>
                                )}
                            </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        </div>
    )
}

