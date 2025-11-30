import TopAnime2025 from '@/components/posts/TopAnime2025';
import BestRomanceAnime from '@/components/posts/BestRomanceAnime';

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
};

export function getPostBySlug(slug) {
    return posts[slug];
}
