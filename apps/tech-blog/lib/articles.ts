import PhoneHacked from '../components/articles/PhoneHacked';

export const articles = {
    '10-signs-your-phone-is-hacked': {
        title: '10 Signs Your Phone Is Hacked (And How to Fix It Fast)',
        description: 'A complete 3,000-word guide explaining the top signs your phone has been hacked, how to check for malware, and how to remove a hacker from your device.',
        date: 'January 10, 2025',
        readTime: '12 min read',
        component: PhoneHacked,
    },
};

export function getArticleBySlug(slug: string) {
    return articles[slug as keyof typeof articles];
}
