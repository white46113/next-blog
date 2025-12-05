import PhoneHacked from '../components/articles/PhoneHacked';
import HowToSpeedUpPhone from '../components/articles/HowToSpeedUpPhone';
import AndroidStorageGuide from '../components/articles/AndroidStorageGuide';
import Windows11Guide from '../components/articles/Windows11Guide';

export const articles = {
    '10-signs-your-phone-is-hacked': {
        title: '10 Signs Your Phone Is Hacked in 2025 (And How to Fix It Fast)',
        description: 'Is your phone acting weird? Discover the 10 telltale signs of phone hacking, learn how to detect hidden malware, and remove hackers from your Android or iPhone in minutes. Complete 3,000-word security guide.',
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
        title: 'How to Speed Up Your Phone in 2025: 15 Proven Ways (Android & iPhone)',
        description: 'Is your phone lagging? Learn 15 proven methods to speed up your Android or iPhone in 2025—from quick 2-minute fixes to advanced optimizations. Boost performance by up to 300% without buying a new device.',
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
        title: 'Android Storage Full? 15 Proven Ways to Reclaim 5-50GB in 2025',
        description: 'Struggling with "Storage Full" errors? Discover 15 expert-tested methods to reclaim 5-50GB on your Android device in 2025 without deleting photos, apps, or important data. Includes hidden storage hogs most users miss.',
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
    'windows-11-guide': {
        title: 'Windows 11 Problems? 25+ Fixes for Common Issues in 2025 (Step-by-Step)',
        description: 'Frustrated with Windows 11? Fix installation errors, performance issues, taskbar bugs, and network problems with our 2025 troubleshooting guide. Includes 25+ proven solutions, hidden features, and expert tips to optimize your PC.',
        date: 'February 5, 2025',
        readTime: '12 min read',
        author: 'Tech Team',
        image: 'https://tech.weebcoder.com/og-image.jpg',
        category: 'Windows',
        wordCount: 3200,
        component: Windows11Guide,
        faqs: [
            { question: 'Can I still upgrade to Windows 11 for free?', answer: 'Yes! If you have a genuine Windows 10 license, Windows 11 remains free through Windows Update or Media Creation Tool.' },
            { question: 'Will Windows 11 slow down my older PC?', answer: 'Not necessarily. While requirements are stricter, optimized Windows 11 can perform similarly to Windows 10 on supported hardware.' },
            { question: 'How do I move the taskbar to the top or sides?', answer: 'Natively, Windows 11 only supports bottom alignment. Third-party tools like ExplorerPatcher can restore this functionality.' },
            { question: 'Is it safe to disable TPM after installation?', answer: 'No! Windows 11 may fail to boot or receive updates. Keep TPM enabled for security and stability.' },
            { question: 'Why can\'t I drag files to the taskbar?', answer: 'Microsoft removed this feature initially but reinstated it in 2022 updates. Ensure you\'re updated to build 22621 or later.' },
            { question: 'How do I bypass Microsoft account requirement?', answer: 'During setup, disconnect internet. When asked for account, enter no@thankyou.com with any password—the error will offer local account option.' },
            { question: 'What happened to Cortana?', answer: 'Cortana was deprecated from initial Windows 11 setup but remains available in Store for those who want it.' },
            { question: 'Can I get the old Windows 10-style Start menu back?', answer: 'Yes! Apps like Start11 or Open-Shell can customize Start to resemble Windows 10 or even Windows 7.' }
        ]
    },
};

export function getArticleBySlug(slug: string) {
    return articles[slug as keyof typeof articles];
}
