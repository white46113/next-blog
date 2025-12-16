import HowToCalculatePercentage from '@/components/articles/HowToCalculatePercentage';
import PercentageIncreaseCalculator from '@/components/articles/PercentageIncreaseCalculator';
import PercentageDecreaseCalculator from '@/components/articles/PercentageDecreaseCalculator';
import WhatIsPercentage from '@/components/articles/WhatIsPercentage';
import PercentageDifferenceCalculator from '@/components/articles/PercentageDifferenceCalculator';
import LoanEMICalculator from '@/components/articles/LoanEMICalculator';
import GstVatCalculator from '@/components/articles/GstVatCalculator';

export const articles = {
    'how-to-calculate-percentage': {
        title: 'How to Calculate Percentage in 2025: Ultimate Guide (5 Easy Methods)',
        description: 'Master percentage calculations in minutes! Learn 5 proven methods to calculate percentage for business, finance, and daily life. Includes formulas, examples, and a free calculator. Perfect for students and professionals.',
        date: 'November 15, 2024',
        readTime: '10 min read',
        component: HowToCalculatePercentage,
    },
    'percentage-increase-calculator': {
        title: 'Percentage Increase Calculator 2025: Formula & Examples (Free Tool)',
        description: 'Calculate percentage increase instantly! Master the formula to track salary growth, price changes, and investment returns. Includes real-world examples, step-by-step guide, and free calculator tool.',
        date: 'November 16, 2024',
        readTime: '12 min read',
        component: PercentageIncreaseCalculator,
    },
    'percentage-decrease-calculator': {
        title: 'Percentage Decrease Calculator 2025: Find Discounts & Drops (Free)',
        description: 'Calculate percentage decrease in seconds! Learn the formula for discounts, depreciation, and sales analysis. Includes practical examples for shopping, business, and finance with our free calculator.',
        date: 'November 17, 2024',
        readTime: '11 min read',
        component: PercentageDecreaseCalculator,
    },
    'what-is-percentage': {
        title: 'What is Percentage? Complete Guide 2025 (Definition, History & Uses)',
        description: 'Understand percentages from basics to advanced! Discover the definition, fascinating history from Ancient Rome, and real-life applications in finance, statistics, and daily decisions. Complete educational guide with examples.',
        date: 'November 18, 2024',
        readTime: '10 min read',
        component: WhatIsPercentage,
    },
    'percentage-difference-calculator': {
        title: 'Percentage Difference Calculator 2025: Compare Values Accurately (Free)',
        description: 'Compare two values with precision! Learn the difference between percentage change vs. percentage difference. Includes formula, step-by-step examples, and free calculator for accurate comparisons.',
        date: 'November 19, 2024',
        readTime: '11 min read',
        component: PercentageDifferenceCalculator,
    },
    'loan-emi-calculator': {
        title: 'Free Loan EMI Calculator 2025: Calculate Monthly Payments Instantly',
        description: 'Plan your loan repayments in seconds! Calculate accurate EMI for home loans, car loans, and personal loans. Get instant interest breakdowns and amortization schedules. 100% free calculator tool.',
        date: 'November 20, 2024',
        readTime: '5 min use',
        component: LoanEMICalculator,
    },
    'gst-vat-calculator': {
        title: 'Free GST/VAT Calculator 2025: Add or Remove Tax Instantly',
        description: 'Calculate GST and VAT in seconds! Add tax to net prices or remove tax from totals (inclusive/exclusive). Perfect for businesses, accountants, and shoppers. Free, accurate, and easy to use.',
        date: 'November 21, 2024',
        readTime: '5 min use',
        component: GstVatCalculator,
    },
};

export function getArticleBySlug(slug) {
    return articles[slug];
}
