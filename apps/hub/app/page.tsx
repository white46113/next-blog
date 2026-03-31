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
                "url": "https://weebcoder.com"
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
            title: "Technical Articles",
            description: "Deep dive into programming, mathematics, and technical concepts with our curated guides",
            url: "/articles/integration-vs-differentiation",
            gradient: "from-blue-600 via-indigo-600 to-purple-600",
            icon: "📚",
        },
        {
            title: "Developer Tools",
            description: "Professional-grade web utilities including JSON editors, formatters, and more",
            url: "/tools/json-editor",
            gradient: "from-emerald-500 via-teal-500 to-cyan-500",
            icon: "🛠️",
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
                                    Articles & Tools
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                                Master complex concepts with our deep-dive articles and boost your productivity with our suite of professional online tools
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
                                <div className="text-4xl font-bold text-purple-600 mb-2">2</div>
                                <div className="text-gray-600 font-medium">Content Zones</div>
                            </div>
                            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                                <div className="text-4xl font-bold text-blue-600 mb-2">Weekly</div>
                                <div className="text-gray-600 font-medium">New Articles</div>
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
                                Knowledge and tools designed to empower your development journey
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {zones.map((zone, index) => (
                                <div
                                    key={zone.title}
                                    className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in border border-gray-100"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${zone.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    <div className="relative p-8">
                                        {/* Icon */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                                {zone.icon}
                                            </div>
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                                            {zone.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {zone.description}
                                        </p>

                                        {/* CTA Button */}
                                        <Link
                                            href={zone.url}
                                            className={`group/btn inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r ${zone.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                        >
                                            Explore {zone.title.split(' ')[0]}
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Content Section - Internal Linking Boost */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Featured Content
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Handpicked guides and tools to accelerate your learning
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Featured Article */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">📐</span>
                                    </div>
                                    <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Article</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Integration vs Differentiation
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Master the fundamentals of calculus with our beginner-friendly visual guide. Learn derivatives, integrals, and the Fundamental Theorem.
                                </p>
                                <Link
                                    href="/articles/integration-vs-differentiation"
                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                                >
                                    Read Article
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Featured Tool */}
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">🛠️</span>
                                    </div>
                                    <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Tool</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    JSON Editor
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Format, validate, and edit JSON data with our professional online editor. Real-time syntax highlighting and error detection.
                                </p>
                                <Link
                                    href="/tools/json-editor"
                                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                                >
                                    Try Tool
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Coming Soon Placeholder */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 shadow-lg hover:shadow-xl transition-shadow opacity-75">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">🚀</span>
                                    </div>
                                    <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Coming Soon</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    More Tools & Articles
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We're constantly adding new content and utilities. Check back weekly for fresh resources.
                                </p>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                                >
                                    Explore Hub
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
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
