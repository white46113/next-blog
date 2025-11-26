import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BMI Calculator - Free Online Tool",
    description: "Calculate your Body Mass Index (BMI) to assess your body weight relative to your height. Free, fast, and privacy-focused.",
    alternates: {
        canonical: "https://tools.weebcoder.com/tools/bmi-calculator",
    },
};

export default function BmiCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
