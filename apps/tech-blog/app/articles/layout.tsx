import type { Metadata } from "next";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
    title: 'Tech Articles - In-Depth Technology Guides & Tutorials | TechBlog',
    description: 'Browse our comprehensive collection of in-depth technology articles covering Windows, Android, security, performance optimization, and more. Expert guides with step-by-step instructions.',
    alternates: {
        canonical: 'https://tech.weebcoder.com/articles',
    },
    openGraph: {
        title: 'Tech Articles - In-Depth Technology Guides & Tutorials',
        description: 'Browse our comprehensive collection of in-depth technology articles covering Windows, Android, security, performance optimization, and more.',
        type: 'website',
        url: 'https://tech.weebcoder.com/articles',
        siteName: 'TechBlog',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tech Articles - In-Depth Technology Guides & Tutorials',
        description: 'Browse our comprehensive collection of in-depth technology articles covering Windows, Android, security, performance optimization, and more.',
    },
};

export default function ArticlesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const articlesList = Object.entries(articles).map(([slug, article]) => ({
        slug,
        ...article,
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Tech Articles",
        "description": "Comprehensive collection of in-depth technology articles and guides",
        "url": "https://tech.weebcoder.com/articles",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": articlesList.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Article",
                    "headline": article.title,
                    "description": article.description,
                    "url": `https://tech.weebcoder.com/articles/${article.slug}`,
                    "datePublished": article.date,
                    "author": {
                        "@type": "Person",
                        "name": article.author || "Tech Team"
                    }
                }
            }))
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
