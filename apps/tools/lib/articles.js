import HowToCalculatePercentage from '@/components/articles/HowToCalculatePercentage';
import PercentageIncreaseCalculator from '@/components/articles/PercentageIncreaseCalculator';
import PercentageDecreaseCalculator from '@/components/articles/PercentageDecreaseCalculator';
import WhatIsPercentage from '@/components/articles/WhatIsPercentage';
import PercentageDifferenceCalculator from '@/components/articles/PercentageDifferenceCalculator';
import LoanEMICalculator from '@/components/articles/LoanEMICalculator';
import GstVatCalculator from '@/components/articles/GstVatCalculator';

export const articles = {
    'how-to-calculate-percentage': {
        title: 'How to Calculate Percentage: The Ultimate Guide for Daily Life & Business',
        description: 'Learn how to calculate percentage easily with our comprehensive guide. Master formulas for percentage increase, decrease, and find out how to use a percentage calculator effectively.',
        date: 'January 15, 2025',
        readTime: '10 min read',
        component: HowToCalculatePercentage,
    },
    'percentage-increase-calculator': {
        title: 'Percentage Increase Calculator: Formula, Examples & How to Calculate',
        description: 'Master the percentage increase formula with our easy-to-follow guide. Learn how to calculate growth in salaries, prices, and investments with real-life examples.',
        date: 'January 16, 2025',
        readTime: '12 min read',
        component: PercentageIncreaseCalculator,
    },
    'percentage-decrease-calculator': {
        title: 'Percentage Decrease Calculator: Formula, Examples & How to Find the Drop',
        description: 'Learn how to calculate percentage decrease with our comprehensive guide. Understand the formula for discounts, depreciation, and sales drops with real-world examples.',
        date: 'January 17, 2025',
        readTime: '11 min read',
        component: PercentageDecreaseCalculator,
    },
    'what-is-percentage': {
        title: 'What is Percentage? Definition, History, Formula & Real-Life Uses',
        description: 'Discover the meaning of percentage, its history from Ancient Rome to today, and how it\'s used in finance, statistics, and daily life. A complete educational guide.',
        date: 'January 18, 2025',
        readTime: '10 min read',
        component: WhatIsPercentage,
    },
    'percentage-difference-calculator': {
        title: 'Percentage Difference Calculator: Formula, Examples & How to Compare Values',
        description: 'Learn the difference between percentage change and percentage difference. Master the formula to compare two values accurately with our step-by-step guide.',
        date: 'January 19, 2025',
        readTime: '11 min read',
        component: PercentageDifferenceCalculator,
    },
    'loan-emi-calculator': {
        title: 'Loan EMI Calculator: Calculate Your Monthly Installments Instantly',
        description: 'Plan your loans effectively with our Loan EMI Calculator. Calculate monthly installments for home, car, or personal loans with accurate interest breakdowns.',
        date: 'January 20, 2025',
        readTime: '5 min use',
        component: LoanEMICalculator,
    },
    'gst-vat-calculator': {
        title: 'GST / VAT Calculator: Add or Remove Tax from Amount',
        description: 'Easily calculate GST or VAT for any amount. Use our tool to add tax to a net price or remove tax from a total price (inclusive/exclusive calculations).',
        date: 'January 21, 2025',
        readTime: '5 min use',
        component: GstVatCalculator,
    },
};

export function getArticleBySlug(slug) {
    return articles[slug];
}
