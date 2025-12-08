import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import CrossAppNav from "../components/CrossAppNav";
import CrossAppFooter from "../components/CrossAppFooter";

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "name": "WeebCoder",
                "url": "https://weebcoder.com",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://weebcoder.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "Organization",
                "name": "WeebCoder",
                "url": "https://weebcoder.com",
                "logo": "https://weebcoder.com/logo.png",
                "sameAs": [
                    "https://twitter.com/weebcoder",
                    "https://github.com/weebcoder"
                ]
            }
        ]
    };

    const zones = [
        {
            title: "Anime Zone",
            description: "Dive into curated anime reviews, top lists, and recommendations for 2025",
            url: "https://anime.weebcoder.com",
            gradient: "from-pink-500 via-purple-500 to-indigo-500",
            icon: "🎭",
            stats: "500+ Reviews",
            recent: [
                { title: "Top 10 Anime 2025", url: "https://anime.weebcoder.com/posts/top-10-anime-2025" },
                { title: "Best Anime Like Solo Leveling", url: "https://anime.weebcoder.com/posts/best-anime-like-solo-leveling" },
                { title: "Romance Anime Picks", url: "https://anime.weebcoder.com/posts/best-romance-anime" }
            ]
        },
        {
            title: "Tech Zone",
            description: "Master Android & Windows with practical guides and troubleshooting tips",
            url: "https://tech.weebcoder.com",
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            icon: "💻",
            stats: "300+ Tutorials",
            recent: [
                { title: "Speed Up Your Phone", url: "https://tech.weebcoder.com/articles/how-to-speed-up-your-phone" },
                { title: "Android Storage Guide", url: "https://tech.weebcoder.com/articles/android-storage-guide" },
                { title: "Windows 11 Guide", url: "https://tech.weebcoder.com/articles/windows-11-guide" }
            ]
        },
        {
            title: "Tools Zone",
            description: "Free converters, calculators & utilities - instant, private, and easy to use",
            url: "https://tools.weebcoder.com",
            gradient: "from-orange-500 via-red-500 to-pink-500",
            icon: "🛠️",
            stats: "50+ Tools",
            recent: [
                { title: "PDF to Image", url: "https://tools.weebcoder.com/tools/pdf-to-image" },
                { title: "JPG to PDF", url: "https://tools.weebcoder.com/tools/jpg-to-pdf" },
                { title: "BMI Calculator", url: "https://tools.weebcoder.com/tools/bmi-calculator" }
            ]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <CrossAppNav currentApp="hub" />

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
                        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
                        <div className="animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 border border-purple-100">
                                <Sparkles className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium text-gray-700">Welcome to WeebCoder</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
                                Your Ultimate Hub for
                                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mt-2">
                                    Anime, Tech & Tools
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                                Discover curated anime reviews, master tech tutorials, and access powerful free tools—all in one place
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="#explore"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Explore Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#stats"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200"
                                >
                                    View Stats
                                    <TrendingUp className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section id="stats" className="py-12 bg-white/50 backdrop-blur-sm border-y border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="animate-fade-in">
                                <div className="text-4xl font-bold text-purple-600 mb-2">850+</div>
                                <div className="text-gray-600 font-medium">Total Articles & Tools</div>
                            </div>
                            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                                <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
                                <div className="text-gray-600 font-medium">Monthly Readers</div>
                            </div>
                            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
                                <div className="text-gray-600 font-medium">Free Access</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Zones Section */}
                <section id="explore" className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Explore Our Zones
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Three specialized hubs designed to entertain, educate, and empower you
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {zones.map((zone, index) => (
                                <div
                                    key={zone.title}
                                    className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in border border-gray-100"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${zone.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    <div className="relative p-8">
                                        {/* Icon & Stats */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                                {zone.icon}
                                            </div>
                                            <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                                                <Zap className="w-4 h-4 text-yellow-500" />
                                                {zone.stats}
                                            </div>
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                                            {zone.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {zone.description}
                                        </p>

                                        {/* Recent Posts */}
                                        <div className="mb-6 space-y-2">
                                            <div className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-3">
                                                Popular Now
                                            </div>
                                            {zone.recent.map((post, idx) => (
                                                <a
                                                    key={idx}
                                                    href={post.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block text-sm text-gray-700 hover:text-purple-600 transition-colors truncate"
                                                >
                                                    → {post.title}
                                                </a>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <a
                                            href={zone.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group/btn inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r ${zone.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                        >
                                            Visit {zone.title.split(' ')[0]}
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Why Choose WeebCoder?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                    <Sparkles className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Curated Content</h3>
                                <p className="text-gray-600">
                                    Hand-picked articles, reviews, and tools to save you time and deliver quality
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Always Free</h3>
                                <p className="text-gray-600">
                                    No paywalls, no subscriptions. Access everything completely free, forever
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                                    <TrendingUp className="w-6 h-6 text-pink-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Updates</h3>
                                <p className="text-gray-600">
                                    Fresh content added weekly to keep you informed and entertained
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <CrossAppFooter />
            </div>
        </>
    );
}
