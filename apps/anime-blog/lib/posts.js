import TopAnime2025 from '@/components/posts/TopAnime2025';
import BestRomanceAnime from '@/components/posts/BestRomanceAnime';
import ActionAnimePrimer from '@/components/posts/ActionAnimePrimer';
import IsekaiAnimePrimer from '@/components/posts/IsekaiAnimePrimer';
import SoloLevelingAlternatives from '@/components/posts/SoloLevelingAlternatives';

export const posts = {
    'top-10-anime-2025': {
        title: 'Top 10 Anime to Watch in 2025 – The Ultimate Guide',
        description: 'From Attack on Titan: Legacy to Demon Slayer: Infinite Castle Arc, discover the must-watch anime series defining 2025.',
        date: 'November 18, 2024',
        readTime: '10 min read',
        author: 'Anime Blog Team',
        image: 'https://anime.weebcoder.com/og-image.jpg',
        category: 'Recommendations',
        wordCount: 2500,
        component: TopAnime2025,
        faqs: [
            {
                question: 'What is the most anticipated anime of 2025?',
                answer: 'Demon Slayer: Infinite Castle Arc and Attack on Titan: Legacy are leading the hype.'
            },
            {
                question: 'Will One Punch Man Season 3 really release in 2025?',
                answer: 'Yes, all insider scheduling points to a 2025 release.'
            },
            {
                question: 'What anime should new fans watch first?',
                answer: 'Solo Leveling, Oshi no Ko, and Demon Slayer are excellent beginner recommendations.'
            },
            {
                question: 'Are there new original anime in 2025?',
                answer: 'Yes—several new sci-fi and fantasy originals are expected and will be announced mid-2025.'
            }
        ]
    },
    'best-anime-like-solo-leveling': {
        title: 'Best Anime Like Solo Leveling: OP Protagonists & Unique Leveling Systems (2025)',
        description: 'Discover the best anime similar to Solo Leveling featuring overpowered protagonists, satisfying power progression, and epic battles. From The Rising of the Shield Hero to Chainsaw Man, find your next obsession.',
        date: 'December 4, 2024',
        readTime: '12 min read',
        author: 'Anime Blog Team',
        image: 'https://anime.weebcoder.com/og-image.jpg',
        category: 'Recommendations',
        wordCount: 3000,
        component: SoloLevelingAlternatives,
        faqs: [
            {
                question: 'Is there a Solo Leveling Season 2?',
                answer: 'Yes! Season 2 premiered in 2025, continuing Jin-Woo\'s journey with even darker themes and bigger battles.'
            },
            {
                question: 'What is the best anime with a leveling system?',
                answer: 'Mushoku Tensei and The Rising of the Shield Hero are fan favorites for their deep progression systems.'
            },
            {
                question: 'Are there any new dark fantasy anime in 2025?',
                answer: 'Absolutely! Gachiakuta and Tougen Anki are 2025\'s standout dark fantasy anime, blending action, leveling, and mature themes.'
            },
            {
                question: 'What anime is most similar to Solo Leveling?',
                answer: 'The Rising of the Shield Hero and Berserk of Gluttony are the closest matches, featuring similar leveling systems and OP protagonist journeys.'
            },
            {
                question: 'Where can I watch anime like Solo Leveling?',
                answer: 'Most similar anime are available on Crunchyroll, with some also streaming on Netflix, Hulu, and Funimation.'
            }
        ]
    },
    'best-romance-anime': {
        title: 'The Best Romance Anime of All Time',
        description: 'Get ready to feel all the feels! Our definitive guide to the best romance anime of all time, from heart-pounding classics to modern masterpieces.',
        date: 'November 30, 2024',
        readTime: '15 min read',
        author: 'Anime Blog Team',
        image: 'https://anime.weebcoder.com/og-image.jpg',
        category: 'Recommendations',
        wordCount: 3200,
        component: BestRomanceAnime,
    },
    'action-anime-primer': {
        title: "The Ultimate Beginner's Primer: Why Action Anime is Your Perfect Gateway",
        description: "Discover why action anime is the perfect entry point into the medium. From Fullmetal Alchemist to Demon Slayer, find your next obsession.",
        date: 'November 20, 2024',
        readTime: '20 min read',
        author: 'Anime Blog Team',
        image: 'https://anime.weebcoder.com/og-image.jpg',
        category: 'Guides',
        wordCount: 4000,
        component: ActionAnimePrimer,
    },
    'isekai-anime-primer': {
        title: "Welcome to the World of Isekai: Your Portal to Infinite Possibilities",
        description: "Explore the most popular genre in anime. From Re:Zero to Slime, discover the best 'another world' adventures.",
        date: 'November 25, 2024',
        readTime: '25 min read',
        author: 'Anime Blog Team',
        image: 'https://anime.weebcoder.com/og-image.jpg',
        category: 'Guides',
        wordCount: 4500,
        component: IsekaiAnimePrimer,
    },
};

export function getPostBySlug(slug) {
    return posts[slug];
}
