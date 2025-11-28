import TopAnime2025 from '@/components/posts/TopAnime2025';

export const posts = {
    'top-10-anime-2025': {
        title: 'Top 10 Anime to Watch in 2025 – The Ultimate Guide',
        description: 'From Attack on Titan: Legacy to Demon Slayer: Infinite Castle Arc, discover the must-watch anime series defining 2025.',
        date: 'January 18, 2025',
        readTime: '10 min read',
        component: TopAnime2025,
    },
};

export function getPostBySlug(slug) {
    return posts[slug];
}
