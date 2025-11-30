import PhoneHacked from '../components/articles/PhoneHacked';
import HowToSpeedUpPhone from '../components/articles/HowToSpeedUpPhone';

export const articles = {
    '10-signs-your-phone-is-hacked': {
        title: '10 Signs Your Phone Is Hacked (And How to Fix It Fast)',
        description: 'A complete 3,000-word guide explaining the top signs your phone has been hacked, how to check for malware, and how to remove a hacker from your device.',
        date: 'January 10, 2025',
        readTime: '12 min read',
        component: PhoneHacked,
    },
    'how-to-speed-up-your-phone': {
        title: 'How to Speed Up Your Phone: Your 2025 Guide to a Faster Device',
        description: 'Is your phone feeling slow? Our definitive 2025 guide reveals proven strategies to speed up your Android or iPhone, from quick cleans to advanced tricks.',
        date: 'January 15, 2025',
        readTime: '10 min read',
        component: HowToSpeedUpPhone,
    },
};

export function getArticleBySlug(slug: string) {
    return articles[slug as keyof typeof articles];
}
