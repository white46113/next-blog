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
        excerpt: 'Learn how to calculate percentages using 5 proven methods including the basic formula, decimal conversion, fraction method, proportion method, and calculator shortcuts. Master percentage calculations for business, finance, grades, discounts, and everyday math problems.',
        date: 'November 15, 2024',
        readTime: '10 min read',
        wordCount: 2500,
        component: HowToCalculatePercentage,
    },
    'percentage-increase-calculator': {
        title: 'Percentage Increase Calculator 2025: Formula & Examples (Free Tool)',
        description: 'Calculate percentage increase instantly! Master the formula to track salary growth, price changes, and investment returns. Includes real-world examples, step-by-step guide, and free calculator tool.',
        excerpt: 'Calculate percentage increase using the formula: ((New Value - Old Value) / Old Value) × 100. Track salary growth, price changes, investment returns, and business metrics. Includes step-by-step examples for calculating raises, inflation rates, and revenue growth.',
        date: 'November 16, 2024',
        readTime: '12 min read',
        wordCount: 2800,
        component: PercentageIncreaseCalculator,
    },
    'percentage-decrease-calculator': {
        title: 'Percentage Decrease Calculator 2025: Find Discounts & Drops (Free)',
        description: 'Calculate percentage decrease in seconds! Learn the formula for discounts, depreciation, and sales analysis. Includes practical examples for shopping, business, and finance with our free calculator.',
        excerpt: 'Calculate percentage decrease using the formula: ((Old Value - New Value) / Old Value) × 100. Find discounts, track depreciation, analyze sales drops, and calculate weight loss percentages. Includes real-world examples for shopping savings and business analysis.',
        date: 'November 17, 2024',
        readTime: '11 min read',
        wordCount: 2600,
        component: PercentageDecreaseCalculator,
    },
    'what-is-percentage': {
        title: 'What is Percentage? Complete Guide 2025 (Definition, History & Uses)',
        description: 'Understand percentages from basics to advanced! Discover the definition, fascinating history from Ancient Rome, and real-life applications in finance, statistics, and daily decisions. Complete educational guide with examples.',
        excerpt: 'A percentage is a ratio expressed as a fraction of 100, derived from the Latin "per centum" meaning "by the hundred". Learn the definition, symbol (%), history from Ancient Rome, evolution of mathematical notation, and real-world applications in finance, statistics, health, and everyday decision-making.',
        date: 'November 18, 2024',
        readTime: '10 min read',
        wordCount: 2400,
        component: WhatIsPercentage,
    },
    'percentage-difference-calculator': {
        title: 'Percentage Difference Calculator 2025: Compare Values Accurately (Free)',
        description: 'Compare two values with precision! Learn the difference between percentage change vs. percentage difference. Includes formula, step-by-step examples, and free calculator for accurate comparisons.',
        excerpt: 'Calculate percentage difference using the formula: (|Value 1 - Value 2| / ((Value 1 + Value 2) / 2)) × 100. Understand the difference between percentage change and percentage difference. Compare prices, analyze data variations, and make accurate comparisons in science, business, and statistics.',
        date: 'November 19, 2024',
        readTime: '11 min read',
        wordCount: 2700,
        component: PercentageDifferenceCalculator,
    },
    'loan-emi-calculator': {
        title: 'Free Loan EMI Calculator 2025: Calculate Monthly Payments Instantly',
        description: 'Plan your loan repayments in seconds! Calculate accurate EMI for home loans, car loans, and personal loans. Get instant interest breakdowns and amortization schedules. 100% free calculator tool.',
        excerpt: 'Calculate loan EMI (Equated Monthly Installment) using the formula: EMI = [P × R × (1+R)^N] / [(1+R)^N-1]. Plan home loans, car loans, and personal loans with accurate monthly payment calculations, interest breakdowns, and complete amortization schedules.',
        date: 'November 20, 2024',
        readTime: '5 min use',
        wordCount: 1800,
        component: LoanEMICalculator,
    },
    'gst-vat-calculator': {
        title: 'Free GST/VAT Calculator 2025: Add or Remove Tax Instantly',
        description: 'Calculate GST and VAT in seconds! Add tax to net prices or remove tax from totals (inclusive/exclusive). Perfect for businesses, accountants, and shoppers. Free, accurate, and easy to use.',
        excerpt: 'Calculate GST and VAT instantly with formulas for adding tax (Net Price × (1 + Tax Rate)) and removing tax (Gross Price / (1 + Tax Rate)). Handle tax-inclusive and tax-exclusive pricing for businesses, accounting, invoicing, and shopping calculations.',
        date: 'November 21, 2024',
        readTime: '5 min use',
        wordCount: 1600,
        component: GstVatCalculator,
    },
};

export function getArticleBySlug(slug) {
    return articles[slug];
}
