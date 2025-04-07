export const realTimeTrackingProperties: Array<{
    key: string,
    heading3: string,
    descForHeading3: string[],
    img: string,
    darkImg: string
}> = [
    {
        key: "instant-expense-updates",
        heading3: "Instane expense updates",
        descForHeading3: ["Immediate visibility into spending habits", "Ability to adjust budget in real time"],
        img: "/instant-expense-updates.svg",
        darkImg: "/instant-expense-updates(dark).svg"
    },
    {
        key: "automated-expense-categorization",
        heading3: "Automated expense categorization",
        descForHeading3: ["No manual sorting or categorizing", "Financial data is always organized"],
        img: "/automated-expense-categorization.svg",
        darkImg: "/automated-expense-categorization(dark).svg"
    },
    {
        key: "visual-financial-insights",
        heading3: "Visual financial insights",
        descForHeading3: ["Clear, easy-to-read charts and graphs", "Spot trends and anomalies quickly"],
        img: "/visual-financial-insights.svg",
        darkImg: "/visual-financial-insights(dark).svg"
    },
    {
        key: "cross-platform accessibility",
        heading3: "Cross-platform accessibility",
        descForHeading3: ["Access your financial data", "Seamless experience across web, mobile, and tablet"],
        img: "/cross-platform-accessibility.svg",
        darkImg: "/cross-platform-accessibility(dark).svg"
    }
];

export const servicesInCaseStudy: Array<{
    key: string,
    linkImg: string,
    linkImgInDarkMode: string | null,
    heading2: string,
    serviceProperties: {
        client: string,
        industry: string,
        joined: string
    },
    solution: string,
    measureAbilities: Array<{
        accuracy: string,
        ability: string
    }>
}> = [
    {
        key: "treehouse",
        linkImg: "/logo/treehouse.svg",
        linkImgInDarkMode: "/logo/treehouse(dark).svg",
        heading2: "Empowering a nonprofit organization to optimize donations",
        serviceProperties: {
            client: "Treehouse",
            industry: "Noneprofit",
            joined: "August 1, 2022"
        },
        solution: "Payap’s donation management system enabled Treehouse to track donations seamlessly, optimize fund allocation, and generate detailed reports for donors.",
        measureAbilities: [
            {
                accuracy: "25%",
                ability: "Increase in donation tracking efficiency"
            },
            {
                accuracy: "20%",
                ability: "Improvement in fund allocation"
            },
            {
                accuracy: "50%",
                ability: "Faster reporting to donors"
            }
        ]
    },
    {
        key: "airwallex",
        linkImg: "/logo/airwallex.svg",
        linkImgInDarkMode: "/logo/airwallex(dark).svg",
        heading2: "Simplifying budgeting for a freelance graphic designer",
        serviceProperties: {
            client: "Airwallex",
            industry: "Freelancing",
            joined: "August 10, 2023"
        },
        solution: "Payap provided Airwallex with budgeting tools tailored for freelancers, allowing them to plan for fluctuating income and set aside funds for taxes and savings.",
        measureAbilities: [
            {
                accuracy: "40%",
                ability: "Increase in donation tracking efficiency"
            },
            {
                accuracy: "25%",
                ability: "Reduction in financial stress"
            },
            {
                accuracy: "35%",
                ability: "Increase in savings for taxes"
            }
        ]
    },
    {
        key: "wealthsimple",
        linkImg: "/logo/wealthsimple.svg",
        linkImgInDarkMode: "/logo/wealthsimple.svg",
        heading2: "Enhancing financial reporting for a retail chain",
        serviceProperties: {
            client: "Wealthsimple",
            industry: "Retail",
            joined: "July 10, 2024"
        },
        solution: "With Payap, Wealthsimple implemented an integrated financial reporting system that automated data collection and provided real-time insights across all locations.",
        measureAbilities: [
            {
                accuracy: "50%",
                ability: "Reduction in time spent"
            },
            {
                accuracy: "40%",
                ability: "Increase in report accuracy"
            },
            {
                accuracy: "60%",
                ability: "Improvement in financial visibility"
            }
        ]
    },
    {
        key: "outreach",
        linkImg: "/logo/outreach.svg",
        linkImgInDarkMode: "/logo/outreach(dark).svg",
        heading2: "Automating payroll for a medium-sized manufacturing firm",
        serviceProperties: {
            client: "Outreach",
            industry: "Manufacturing",
            joined: "July 1, 2024"
        },
        solution: "Payap’s payroll automation tools streamlined the entire payroll process, reducing errors and saving valuable time for the HR department.",
        measureAbilities: [
            {
                accuracy: "31%",
                ability: "Decrease in payroll processing time"
            },
            {
                accuracy: "65%",
                ability: "Reduction in payroll errors"
            },
            {
                accuracy: "70%",
                ability: "Increase in productivity"
            }
        ]
    },
    {
        key: "hopin",
        linkImg: "/logo/hopin.svg",
        linkImgInDarkMode: "/logo/hopin(dark).svg",
        heading2: "Optimizing financial planning for a real estate development firm",
        serviceProperties: {
            client: "Hopin",
            industry: "Real Estate",
            joined: "June 20, 2024"
        },
        solution: "Payap’s financial planning tools provided Hopin with advanced cash flow forecasting and detailed expense tracking",
        measureAbilities: [
            {
                accuracy: "19%",
                ability: "Improvement in cash flow"
            },
            {
                accuracy: "50%",
                ability: "Reduction in project budget overruns"
            },
            {
                accuracy: "20%",
                ability: "Faster financial reporting"
            }
        ]
    },
    {
        key: "databricks",
        linkImg: "/logo/databricks.svg",
        linkImgInDarkMode: "/logo/databricks(dark).svg",
        heading2: "Revolutionizing expense management for an international travel agency",
        serviceProperties: {
            client: "Databricks",
            industry: "Travel",
            joined: "August 1, 2022"
        },
        solution: "Payap’s automated expense management system allowed Databricks to streamline their expense tracking process, reduce errors",
        measureAbilities: [
            {
                accuracy: "70%",
                ability: "Reduction in expense"
            },
            {
                accuracy: "40%",
                ability: "Decrease in expense report errors"
            },
            {
                accuracy: "35%",
                ability: "Faster employee reimbursement"
            }
        ]
    }
    
]

export const pricingPlans: Array<{
    key: string,
    heading2: string,
    subscription: string,
    cost: number,
    timeline: string,
    benefitOfPricing: Array<{
        key: string,
        descrition: string
    }>
}> = [
    {
        key: 'basic',
        heading2: 'Basic',
        subscription: 'For individuals and freelancers',
        cost: 9.99,
        timeline: 'month',
        benefitOfPricing: [
            {
                key: "budget-tracking",
                descrition: 'Budget tracking',
            },
            {
                key: "expense-categorizarion",
                descrition: 'Expense categorization',
            },
            {
                key: "basic-financial-reports",
                descrition: 'Basic financial reports'
            }
        ]
    },
    {
        key: 'pro',
        heading2: 'Pro 🔥',
        subscription: 'Ideal for small businesses',
        cost: 29.99,
        timeline: 'month',
        benefitOfPricing: [
            {
                key: "all-features-in-basic-plan",
                descrition: 'All features in Basic Plan',
            },
            {
                key: "invoicing-and-billing",
                descrition: 'Invoicing and billing',
            },
            {
                key: "advanced-financial-reports",
                descrition: 'Advanced financial reports',
            },
            {
                key: "multi-user-access",
                descrition: 'Multi-user access (up to 5 users)',
            },
            {
                key: 'priority-email-support',
                descrition: 'Priority email support'
            }
                 
          
        ]
    },
    {
        key: 'business',
        heading2: 'Business',
        subscription: 'Perfect for growing businesses',
        cost: 79.99,
        timeline: 'month',
        benefitOfPricing: [
            {
                key: "all-features-in-pro-plan",
                descrition: 'All features in Pro Plan',
            },
            {
                key: "payroll-management",
                descrition: 'Payroll management',
            },
            {
                key: "inventory-management",
                descrition: 'Inventory management',
            },
            {
                key: "multi-user-access",
                descrition: 'Multi-user access (up to 20 users)',
            },
            {
                key: "dedicated-account-manager",
                descrition: 'Dedicated account manager',
            },
            {
                key: 'phone-support',
                descrition: 'Phone support'
            }         
        ]
    },
    {
        key: 'enterprise',
        heading2: 'Enterprise',
        subscription: 'Solutions for large enterprises',
        cost: 199.99,
        timeline: 'month',
        benefitOfPricing: [
            {
                key: 'all-features-in-business-plan',
                descrition: 'All features in Business Plan',
            },
            {
                key: "custom-integrations",
                descrition: 'Custom integrations',
            },
            {
                key: "unlimited-users",
                descrition: 'Unlimited users',
            },
            {
                key: "advanced-analytics-and-reporting",
                descrition: 'Advanced analytics and reporting',
            },
            {
                key: '24/7-premium-support',
                descrition: '24/7 premium support',
            },
            {
                key: 'tailored-onboarding-and-training',
                descrition: 'Tailored onboarding and training'
            }        
        ]
    }
];

export const pricingFeatures: Array<{
    key: string,
    typeOfPricing: string,
    cost: string,
    listOfFeatures: Array<{
        key: string,
        feature: string,
        status: true | false | string
    }>
}> = [
    {
        key: "basic",
        typeOfPricing: "Basic",
        cost: "$9.99 / month",
        listOfFeatures: [
            { key: "budget_tracking", feature: "Budget tracking", status: true },
            { key: "expense_categorization", feature: "Expense categorization", status: true },
            { key: "invoicing_billing", feature: "Invoicing and billing", status: false },
            { key: "basic_reports", feature: "Basic financial reports", status: true },
            { key: "advanced_reports", feature: "Advanced financial reports", status: false },
            { key: "multi_user", feature: "Multi-user access", status: false },
            { key: "payroll_management", feature: "Payroll management", status: false },
            { key: "inventory_management", feature: "Inventory management", status: false },
            { key: "custom_integrations", feature: "Custom integrations", status: false },
            { key: "dedicated_manager", feature: "Dedicated account manager", status: false },
            { key: "email_support", feature: "Email support", status: true },
            { key: "priority_support", feature: "Priority email support", status: false },
            { key: "phone_support", feature: "Phone support", status: false },
            { key: "premium_support", feature: "24/7 premium support", status: false },
            { key: "onboarding_training", feature: "Tailored onboarding and training", status: false }
        ]
    },
    {
        key: "standard",
        typeOfPricing: "Pro",
        cost: "$29.99 / month",
        listOfFeatures: [
            { key: "budget_tracking", feature: "Budget tracking", status: true },
            { key: "expense_categorization", feature: "Expense categorization", status: true },
            { key: "invoicing_billing", feature: "Invoicing and billing", status: true },
            { key: "basic_reports", feature: "Basic financial reports", status: true },
            { key: "advanced_reports", feature: "Advanced financial reports", status: true },
            { key: "multi_user", feature: "Multi-user access", status: "Up to 5 users" },
            { key: "payroll_management", feature: "Payroll management", status: false },
            { key: "inventory_management", feature: "Inventory management", status: false },
            { key: "custom_integrations", feature: "Custom integrations", status: false },
            { key: "dedicated_manager", feature: "Dedicated account manager", status: false },
            { key: "email_support", feature: "Email support", status: true },
            { key: "priority_support", feature: "Priority email support", status: true },
            { key: "phone_support", feature: "Phone support", status: false },
            { key: "premium_support", feature: "24/7 premium support", status: false },
            { key: "onboarding_training", feature: "Tailored onboarding and training", status: false }
        ]
    },
    {
        key: "business",
        typeOfPricing: "Business",
        cost: "$79.99 / month",
        listOfFeatures: [
            { key: "budget_tracking", feature: "Budget tracking", status: true },
            { key: "expense_categorization", feature: "Expense categorization", status: true },
            { key: "invoicing_billing", feature: "Invoicing and billing", status: true },
            { key: "basic_reports", feature: "Basic financial reports", status: true },
            { key: "advanced_reports", feature: "Advanced financial reports", status: true },
            { key: "multi_user", feature: "Multi-user access", status: "Up to 20 users" },
            { key: "payroll_management", feature: "Payroll management", status: true },
            { key: "inventory_management", feature: "Inventory management", status: true },
            { key: "custom_integrations", feature: "Custom integrations", status: false },
            { key: "dedicated_manager", feature: "Dedicated account manager", status: true },
            { key: "email_support", feature: "Email support", status: true },
            { key: "priority_support", feature: "Priority email support", status: true },
            { key: "phone_support", feature: "Phone support", status: true },
            { key: "premium_support", feature: "24/7 premium support", status: false },
            { key: "onboarding_training", feature: "Tailored onboarding and training", status: false }
        ]
    },
    {
        key: "enterprise",
        typeOfPricing: "Enterprise",
        cost: "$199.99 / month",
        listOfFeatures: [
            { key: "budget_tracking", feature: "Budget tracking", status: true },
            { key: "expense_categorization", feature: "Expense categorization", status: true },
            { key: "invoicing_billing", feature: "Invoicing and billing", status: true },
            { key: "basic_reports", feature: "Basic financial reports", status: true },
            { key: "advanced_reports", feature: "Advanced financial reports", status: true },
            { key: "multi_user", feature: "Multi-user access", status: "Unlimited users" },
            { key: "payroll_management", feature: "Payroll management", status: true },
            { key: "inventory_management", feature: "Inventory management", status: true },
            { key: "custom_integrations", feature: "Custom integrations", status: true },
            { key: "dedicated_manager", feature: "Dedicated account manager", status: true },
            { key: "email_support", feature: "Email support", status: true },
            { key: "priority_support", feature: "Priority email support", status: true },
            { key: "phone_support", feature: "Phone support", status: true },
            { key: "premium_support", feature: "24/7 premium support", status: true },
            { key: "onboarding_training", feature: "Tailored onboarding and training", status: true }
        ]
    }
]