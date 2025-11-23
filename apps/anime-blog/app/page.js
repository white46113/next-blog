import { generateMetadata } from '@repo/ui';
import { Button } from '@repo/ui';

export const metadata = generateMetadata({
  title: 'Anime Blog - Your Gateway to Japanese Animation',
  description: 'Discover the latest anime reviews, recommendations, and insights. Stay updated with the world of Japanese animation and manga culture.',
  canonical: 'https://animeblog.com',
  ogImage: '/anime-hero.jpg',
  alternateUrls: {
    en: 'https://animeblog.com',
    es: 'https://animeblog.com/es'
  }
});

export default function HomePage() {
  const featuredPosts = [
    {
      title: "Top 10 Anime to Watch in 2025",
      excerpt: "From mind-bending sci-fi to heartwarming slice-of-life, discover the must-watch anime series that are defining 2025's animation landscape.",
      slug: "top-10-anime-to-watch-2025",
      date: "2025-01-18",
      readTime: "10 min read",
      category: "Recommendations",
      rating: "9.5"
    },
    {
      title: "The Evolution of Isekai: A Deep Dive",
      excerpt: "Explore how the isekai genre has transformed from simple fantasy tropes to complex narratives that challenge traditional storytelling.",
      slug: "evolution-isekai-deep-dive",
      date: "2025-01-12",
      readTime: "15 min read",
      category: "Analysis",
      rating: "8.8"
    },
    {
      title: "Studio Ghibli's Influence on Modern Anime",
      excerpt: "How Hayao Miyazaki and Studio Ghibli continue to shape the anime industry decades after their groundbreaking works.",
      slug: "studio-ghibli-influence-modern-anime",
      date: "2025-01-08",
      readTime: "12 min read",
      category: "Industry",
      rating: "9.2"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Welcome to Anime Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your ultimate destination for anime reviews, recommendations, and insights. 
              Dive deep into the world of Japanese animation with us.
            </p>
            <Button href="/posts" variant="primary" className="text-lg px-8 py-3">
              Explore All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Posts</h2>
            <p className="text-lg text-gray-600">Hand-picked articles for anime enthusiasts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600">{post.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    <a href={`/posts/${post.slug}`} className="hover:text-purple-600 transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">{post.date}</time>
                    <Button href={`/posts/${post.slug}`} variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Find content that matches your interests</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Reviews', 'Recommendations', 'Analysis', 'Industry', 'Manga', 'Characters', 'Soundtracks', 'Conventions'].map((category) => (
              <Button 
                key={category}
                href={`/category/${category.toLowerCase()}`}
                variant="outline"
                className="justify-center"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Anime Community</h2>
          <p className="text-xl text-purple-100 mb-8">
            Get weekly anime recommendations, reviews, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-purple-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Affiliate CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stream Anime Anywhere</h2>
          <p className="text-xl text-pink-100 mb-8">
            Get access to thousands of anime series and movies with premium streaming services. 
            Support the creators and enjoy ad-free watching.
          </p>
          <Button 
            href="https://example.com/anime-streaming" 
            variant="secondary" 
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Start Free Trial - 14 Days
          </Button>
          <p className="text-pink-100 text-sm mt-4">
            *Limited time offer. Affiliate link.
          </p>
        </div>
      </section>

      {/* Ad Placeholder */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
            <p className="text-gray-500 text-sm">Advertisement Space</p>
            <p className="text-gray-400 text-xs mt-2">728x90 leaderboard ad</p>
          </div>
        </div>
      </section>
    </div>
  );
}