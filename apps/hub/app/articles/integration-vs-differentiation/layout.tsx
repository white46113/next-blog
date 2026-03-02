import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Integration vs Differentiation Explained for Beginners",
    description:
        "A beginner-friendly guide to understanding differentiation and integration in calculus — with visual graphs, real-world examples, and step-by-step formulas.",
    alternates: {
        canonical: "https://weebcoder.com/articles/integration-vs-differentiation",
    },
    openGraph: {
        title: "Integration vs Differentiation Explained for Beginners",
        description:
            "Learn the difference between differentiation and integration with clear visuals, graphs, and beginner-friendly math explanations.",
        url: "https://weebcoder.com/articles/integration-vs-differentiation",
        type: "article",
        siteName: "WeebCoder",
        publishedTime: "2026-03-02T00:00:00Z",
    },
    twitter: {
        card: "summary_large_image",
        title: "Integration vs Differentiation Explained for Beginners",
        description:
            "Learn calculus the easy way — differentiation and integration explained with graphs and examples.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ArticleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
