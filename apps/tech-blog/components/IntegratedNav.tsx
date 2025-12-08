import Link from 'next/link';
import { ReactNode } from 'react';

interface LocalLink {
    href: string;
    label: string;
}

interface IntegratedNavProps {
    currentApp?: 'hub' | 'anime' | 'tech' | 'tools';
    appName?: string;
    appIcon?: ReactNode;
    localLinks?: LocalLink[];
}

export default function IntegratedNav({
    currentApp = 'hub',
    appName = 'WeebCoder',
    appIcon = null,
    localLinks = []
}: IntegratedNavProps) {
    const crossAppLinks = [
        { name: 'Home', url: 'https://weebcoder.com', key: 'hub' as const },
        { name: 'Anime', url: 'https://anime.weebcoder.com', key: 'anime' as const },
        { name: 'Tech', url: 'https://tech.weebcoder.com', key: 'tech' as const },
        { name: 'Tools', url: 'https://tools.weebcoder.com', key: 'tools' as const },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Top bar with cross-app links */}
            <div className="border-b border-border/40 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-10">
                        <div className="flex items-center gap-1 text-xs">
                            <span className="text-muted-foreground mr-2">Explore:</span>
                            {crossAppLinks.map((link) => (
                                <a
                                    key={link.key}
                                    href={link.url}
                                    className={`px-3 py-1.5 rounded-md transition-colors ${currentApp === link.key
                                        ? 'bg-primary/10 text-primary font-medium'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
                            <a href="https://twitter.com/weebcoder" className="hover:text-foreground transition-colors">
                                Twitter
                            </a>
                            <a href="https://github.com/weebcoder" className="hover:text-foreground transition-colors">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main header with app branding and local navigation */}
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {appIcon}
                    <span className="font-bold text-xl tracking-tight">{appName}</span>
                </div>

                {localLinks.length > 0 && (
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        {localLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="transition-colors hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
