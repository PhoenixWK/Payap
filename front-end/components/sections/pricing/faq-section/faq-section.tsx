const faqs = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time to fit your changing needs."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial on all our plans so you can explore the features before committing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no additional fees."
    }
]


export default function FAQSection() {
    return (
        <section className="px-5 lg:px-10 pt-5 pb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="space-y-2 border-b-2 border-[#e1e0e0]">
                        <h3 className="font-semibold text-lg lg:text-xl">{faq.question}</h3>
                        <p className="pb-4 lg:pb-8 text-sm lg:text-lg font-sans text-black dark:text-white">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}