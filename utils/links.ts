export const headerLinks: Array<{
    key: string
    link: string,
    label: string
}> = [
    {
        key: "how-it-works",
        link: "/how-it-works",
        label: "How it works"
    },
    {
        key: "features",
        link: "/features",
        label: "Features"
    },
    {
        key: "pricing",
        link: "/pricing",
        label: "Pricing"
    },
    {
        key: "integrations",
        link: "/integrations-page",
        label: "Integrations"
    },
    {
        key: "case-study",
        link: "/case-study",
        label: "Case study"
    }
];

export const featureConcerns: Array<{
    key: string,
    link: string,
    label: string
}> = [
    {
        key: "real-time-tracking",
        link: "/features",
        label: "Real-time tracking"
    },
    {
        key: "budget-alert",
        link: "/features",
        label: "Budget alerts"
    },
    {
        key: "bill-reminder",
        link: "/features",
        label: "Bill reminders"
    },
    {
        key: "account-integration",
        link: "/features",
        label: "Account integration"
    },
    {
        key: "data-security",
        link: "/features",
        label: "Data security"
    }
];

export const productConcerns: Array<{
    key: string,
    link: string,
    label: string
}> = [
    {
        key: "how-it-works",
        link: "/how-it-works",
        label: "How it works"
    },
    {
        key: "pricing",
        link: "/how-it-works",
        label: "Pricing"
    },
    {
        key: "integration",
        link: "/how-it-works",
        label: "Integrations"
    }
];

export const resourcesConcerns: Array<{
    key: string,
    link: string,
    label: string
}> = [
    {
        key: "faqs",
        link: "",
        label: "FAQS"
    },
    {
        key: "careers",
        link: "",
        label: "Careers"
    },
    {
        key: "case-studies",
        link: "",
        label: "Case Studies"
    }
];

export const companyConcerns: Array<{
    key: string,
    link: string,
    label: string
}> = [
    {
        key: "about-us",
        link: "",
        label: "About Us"
    }, 
    {
        key: "careers",
        link: "",
        label: "Careers"
    },
    {
        key: "contact-us",
        link: "",
        label: "Contact Us"
    },
    {
        key: "blog",
        link: "",
        label: "Blog"
    }
];

export const legalDocuments: Array<{
    key: string,
    link: string,
    label: string
}> = [
    {
        key: "privacy-policy",
        link: "",
        label: "Privacy Policy"
    },
    {
        key: "terms-of-service",
        link: "",
        label: "Terms of Service"
    },
    {
        key: "security-policy",
        link: "",
        label: "Security Policy"
    }
];

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