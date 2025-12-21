import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BMI Calculator - Free Online Tool",
    description: "Calculate your Body Mass Index (BMI) to assess your body weight relative to your height. Free, fast, and privacy-focused.",
    keywords: ["bmi calculator", "body mass index", "bmi", "health calculator", "weight calculator", "fitness calculator", "free bmi calculator"],
    alternates: {
        canonical: "https://tools.weebcoder.com/tools/bmi-calculator",
    },
    openGraph: {
        title: "BMI Calculator - Free Online Tool",
        description: "Calculate your Body Mass Index (BMI) to assess your body weight relative to your height. Free, fast, and privacy-focused.",
        url: "https://tools.weebcoder.com/tools/bmi-calculator",
        type: "website",
        siteName: "WeebCoder Tools",
    },
    twitter: {
        card: "summary_large_image",
        title: "BMI Calculator - Free Online Tool",
        description: "Calculate your Body Mass Index (BMI) to assess your body weight relative to your height. Free, fast, and privacy-focused.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function BmiCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
