import PhoneHacked from '../components/articles/PhoneHacked';
import HowToSpeedUpPhone from '../components/articles/HowToSpeedUpPhone';
import AndroidStorageGuide from '../components/articles/AndroidStorageGuide';

export const articles = {
    '10-signs-your-phone-is-hacked': {
        title: '10 Signs Your Phone Is Hacked (And How to Fix It Fast)',
        description: 'A complete 3,000-word guide explaining the top signs your phone has been hacked, how to check for malware, and how to remove a hacker from your device.',
        date: 'January 10, 2025',
        readTime: '12 min read',
        author: 'Tech Team',
        image: 'https://tech.weebcoder.com/og-image.jpg',
        category: 'Security',
        wordCount: 3000,
        component: PhoneHacked,
        faqs: [
            { question: 'Can my phone be hacked without me knowing?', answer: 'Yes. Most modern spyware is designed to stay hidden.' },
            { question: 'Can someone hack my phone through a call?', answer: 'No, but they can trick you into installing malware.' },
            { question: 'What is the first thing I should do if I suspect hacking?', answer: 'Check your installed apps and look for anything unfamiliar.' },
            { question: 'Will factory resetting remove all malware?', answer: 'Yes—except in extremely rare cases involving advanced spyware.' },
            { question: 'Can iPhones get hacked too?', answer: 'Yes. They are harder to hack, but not impossible.' }
        ]
    },
    'how-to-speed-up-your-phone': {
        title: 'How to Speed Up Your Phone: Your 2025 Guide to a Faster Device',
        description: 'Is your phone feeling slow? Our definitive 2025 guide reveals proven strategies to speed up your Android or iPhone, from quick cleans to advanced tricks.',
        date: 'January 15, 2025',
        readTime: '10 min read',
        author: 'Tech Team',
        image: 'https://tech.weebcoder.com/og-image.jpg',
        category: 'Performance',
        wordCount: 2800,
        component: HowToSpeedUpPhone,
        faqs: [
            { question: 'Will clearing my cache delete any important data?', answer: 'No, it only removes temporary files. Your passwords, photos, and docs are safe.' },
            { question: 'How often should I restart my phone?', answer: 'Once a week is a good rule of thumb to clear RAM and stuck processes.' },
            { question: 'I have done everything, but it is still slow. What now?', answer: 'A Factory Reset is the most effective solution. Ensure you backup first!' },
            { question: 'Can a phone case cause overheating and slowness?', answer: 'Yes, thick cases can trap heat, causing thermal throttling. Remove it during heavy use.' },
            { question: 'Does having too many browser tabs open slow down my phone?', answer: 'Absolutely. Each tab consumes RAM. Close unused tabs regularly.' },
            { question: 'My storage is full, what should I delete first?', answer: 'Check Downloads folder, streaming app caches, and old message attachments.' },
            { question: 'Are booster apps worth it?', answer: 'Generally no. Built-in tools are safer and more effective.' },
            { question: 'Can an old SIM card cause slowness?', answer: 'Rarely, but it can cause network lag. Replace it if it is very old.' },
            { question: 'How does battery health affect speed?', answer: 'Degraded batteries cause the OS to throttle performance to prevent shutdowns.' },
            { question: 'Should I update my old phone (2020 or earlier)?', answer: 'Research first. Latest OS versions might be too heavy for older hardware.' }
        ]
    },
    'android-storage-guide': {
        title: 'The Modern Android Storage Crisis: 15 Proven Ways to Reclaim Space',
        description: 'Struggling with full storage? Discover 15 proven methods to reclaim 5-50GB of space on your Android device without losing important data.',
        date: 'January 28, 2025',
        readTime: '15 min read',
        author: 'Tech Team',
        image: 'https://tech.weebcoder.com/og-image.jpg',
        category: 'Storage',
        wordCount: 3500,
        component: AndroidStorageGuide,
        faqs: [
            { question: 'Is it safe to clear Other storage?', answer: 'Yes, but use tools like SD Maid. Do not manually delete system folders you do not understand.' },
            { question: 'Will clearing cache slow down apps?', answer: 'Temporarily, yes. But it prevents bloat. Apps will rebuild necessary cache.' },
            { question: 'How often should I clear cache?', answer: 'Weekly for social media, monthly for browsers, quarterly for everything else.' },
            { question: 'Clear Cache vs Clear Data?', answer: 'Cache removes temp files (safe). Data removes logins and settings (use with caution).' },
            { question: 'Can I move apps to SD card?', answer: 'Yes, if the app supports it or via Adoptable Storage.' },
            { question: 'Why does storage fill up again?', answer: 'App caches, auto-downloads, and system updates. Automation is key.' },
            { question: 'Are cleaner apps safe?', answer: 'Stick to Google Files, SD Maid, or CCleaner. Avoid generic boosters.' },
            { question: 'What should I NEVER delete?', answer: 'Android system folders, encrypted files, and app data for essential apps.' }
        ]
    },
};

export function getArticleBySlug(slug: string) {
    return articles[slug as keyof typeof articles];
}
