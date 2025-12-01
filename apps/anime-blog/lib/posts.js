import TopAnime2025 from '@/components/posts/TopAnime2025';
import BestRomanceAnime from '@/components/posts/BestRomanceAnime';
import ActionAnimePrimer from '@/components/posts/ActionAnimePrimer';
import IsekaiAnimePrimer from '@/components/posts/IsekaiAnimePrimer';

export const posts = {
    'top-10-anime-2025': {
        title: 'Top 10 Anime to Watch in 2025 – The Ultimate Guide',
        description: 'From Attack on Titan: Legacy to Demon Slayer: Infinite Castle Arc, discover the must-watch anime series defining 2025.',
        date: 'January 18, 2025',
        readTime: '10 min read',
        component: TopAnime2025,
    },
    'best-romance-anime': {
        title: 'The Best Romance Anime of All Time',
        description: 'Get ready to feel all the feels! Our definitive guide to the best romance anime of all time, from heart-pounding classics to modern masterpieces.',
        date: 'November 30, 2025',
        readTime: '15 min read',
        component: BestRomanceAnime,
    },
    'action-anime-primer': {
        title: "The Ultimate Beginner's Primer: Why Action Anime is Your Perfect Gateway",
        description: "Discover why action anime is the perfect entry point into the medium. From Fullmetal Alchemist to Demon Slayer, find your next obsession.",
        date: 'January 20, 2025',
        readTime: '20 min read',
        component: ActionAnimePrimer,
    },
    'isekai-anime-primer': {
        title: "Welcome to the World of Isekai: Your Portal to Infinite Possibilities",
        description: "Explore the most popular genre in anime. From Re:Zero to Slime, discover the best 'another world' adventures.",
        date: 'January 25, 2025',
        readTime: '25 min read',
        component: IsekaiAnimePrimer,
    },
};

export function getPostBySlug(slug) {
    return posts[slug];
}
