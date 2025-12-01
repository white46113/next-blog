import PhoneHacked from '../components/articles/PhoneHacked';
import HowToSpeedUpPhone from '../components/articles/HowToSpeedUpPhone';

import AndroidStorageGuide from '../components/articles/AndroidStorageGuide';

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
    'android-storage-guide': {
        title: 'The Modern Android Storage Crisis: 15 Proven Ways to Reclaim Space',
        description: 'Struggling with full storage? Discover 15 proven methods to reclaim 5-50GB of space on your Android device without losing important data.',
        date: 'January 28, 2025',
        readTime: '15 min read',
        component: AndroidStorageGuide,
    },
};

export function getArticleBySlug(slug: string) {
    return articles[slug as keyof typeof articles];
}
