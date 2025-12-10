import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
    title: "Anime Personality Quiz - Discover Your Anime Type | Anime Blog",
    description: "Take our interactive anime personality quiz to discover which anime type matches your personality. Get personalized anime recommendations based on your results - Shonen, Slice-of-Life, Isekai, or Psychological.",
    keywords: [
        "anime quiz",
        "anime personality test",
        "anime recommendations",
        "what anime should I watch",
        "anime personality types",
        "anime character quiz",
        "best anime for me",
        "anime genre quiz",
    ],
    alternates: {
        canonical: "https://anime.weebcoder.com/quiz",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://anime.weebcoder.com/quiz",
        siteName: "Anime Blog",
        title: "Anime Personality Quiz - Discover Your Anime Type",
        description: "Take our interactive anime personality quiz to discover which anime type matches your personality. Get personalized recommendations!",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Anime Personality Quiz",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Anime Personality Quiz - Discover Your Anime Type",
        description: "Take our interactive anime personality quiz to discover which anime type matches your personality. Get personalized recommendations!",
        images: ["/og-image.png"],
        creator: "@weebcoder",
    },
};

export default function QuizPage() {
    return <QuizClient />;
}
