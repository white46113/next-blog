import Link from 'next/link';

export default function CrossAppNav({ currentApp = 'hub' }) {
    const apps = [
        { name: 'Home', url: 'https://weebcoder.com', key: 'hub' },
        { name: 'Anime', url: 'https://anime.weebcoder.com', key: 'anime' },
        { name: 'Tech', url: 'https://tech.weebcoder.com', key: 'tech' },
        { name: 'Tools', url: 'https://tools.weebcoder.com', key: 'tools' },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <a href="https://weebcoder.com" className="flex items-center gap-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                WeebCoder
                            </span>
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {apps.map((app) => (
                            <a
                                key={app.key}
                                href={app.url}
                                rel={app.key === 'hub' ? undefined : 'nofollow'}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentApp === app.key
                                        ? 'bg-purple-100 text-purple-700'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {app.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="p-2 rounded-lg text-gray-700 hover:bg-gray-100">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden pb-4 space-y-1">
                    {apps.map((app) => (
                        <a
                            key={app.key}
                            href={app.url}
                            rel={app.key === 'hub' ? undefined : 'nofollow'}
                            className={`block px-4 py-2 rounded-lg text-sm font-medium ${currentApp === app.key
                                    ? 'bg-purple-100 text-purple-700'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {app.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
