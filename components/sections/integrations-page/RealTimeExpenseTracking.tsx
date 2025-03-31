import { Check } from "lucide-react"

const benefits = [
    {
      title: "Immediate financial awareness",
      description:
        "Stay informed with up-to-the-minute updates on your spending, allowing you to make timely adjustments and avoid overspending.",
    },
    {
      title: "Better budget management",
      description:
        "Track all expenses in real-time, ensuring you stay within your budget and allocate resources efficiently.",
    },
    {
      title: "Proactive decision making",
      description:
        "Get instant insights into your financial habits, empowering you to make smarter, faster decisions to optimize your spending.",
    },
    {
      title: "Reduced risk of overspending",
      description:
        "Real-time tracking ensures you know exactly when you're approaching budget limits, helping to prevent unplanned financial strain.",
    },
    {
      title: "Simplified expense organization",
      description:
        "With automated tracking and categorization, your expenses are neatly organized, making it easier to analyze and manage your expenses.",
    },
]
export default function RealTimeExpenseTracking() {
    return (
        <section className="w-full mx-auto px-6 py-12">
            <article>
                <h2 className="text-2xl font-bold lg:text-3xl mb-4 text-black dark:text-white">Why real-time expense tracking matters</h2>
                <p className="text-black dark:text-white mb-8">
                Managing expenses effectively is key to maintaining financial health, whether you&apos;re running a small business
                or handling personal finances. Here&apos;s how Real-Time Expense Tracking helps you:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 col-auto gap-2">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`bg-white dark:bg-black rounded-lg p-4 flex items-start gap-1 md:gap-4 ${
                                index === benefits.length - 1 ? 'col-span-full lg:col-auto' : ''
                            }`}
                        >
                            <div className="mt-1 flex-shrink-0">
                                <Check className="h-5 w-5 text-green-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1 dark:text-white">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}
