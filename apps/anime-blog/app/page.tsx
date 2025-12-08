import type { Metadata } from 'next';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Github, Twitter, Linkedin, PlayCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: 'Anime Blog - Your Gateway to Japanese Animation',
  description: 'Discover the latest anime reviews, recommendations, and insights. Stay updated with the world of Japanese animation and manga culture.',
  alternates: {
    canonical: 'https://anime.weebcoder.com',
  },
  openGraph: {
    title: 'Anime Blog - Your Gateway to Japanese Animation',
    description: 'Discover the latest anime reviews, recommendations, and insights. Stay updated with the world of Japanese animation and manga culture.',
    url: 'https://anime.weebcoder.com',
    siteName: 'Anime Blog',
    type: 'website',
    images: [
      {
        url: '/anime-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Anime Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anime Blog - Your Gateway to Japanese Animation',
    description: 'Discover the latest anime reviews, recommendations, and insights. Stay updated with the world of Japanese animation and manga culture.',
    images: ['/anime-hero.jpg'],
  },
};

import IntegratedNav from "@/components/IntegratedNav";
import CrossAppFooter from "@/components/CrossAppFooter";

export default function HomePage() {
  const featuredPosts = [
    {
      id: 1,
      title: "Best Anime Like Solo Leveling: OP Protagonists & Unique Leveling Systems (2025)",
      excerpt: "Discover the best anime similar to Solo Leveling featuring overpowered protagonists, satisfying power progression, and epic battles.",
      slug: "best-anime-like-solo-leveling",
      date: "Dec 4, 2025",
      readTime: "12 min read",
      category: "Recommendations",
      rating: "9.4",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 2,
      title: "Top 10 Anime to Watch in 2025 – The Ultimate Guide",
      excerpt: "From Attack on Titan: Legacy to Demon Slayer: Infinite Castle Arc, discover the must-watch anime series defining 2025.",
      slug: "top-10-anime-2025",
      date: "Jan 18, 2025",
      readTime: "10 min read",
      category: "Recommendations",
      rating: "9.5",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      id: 3,
      title: "The Best Romance Anime of All Time",
      excerpt: "Get ready to feel all the feels! Our definitive guide to the best romance anime of all time, from heart-pounding classics to modern masterpieces.",
      slug: "best-romance-anime",
      date: "Nov 30, 2025",
      readTime: "15 min read",
      category: "Recommendations",
      rating: "9.2",
      image: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=800&h=400"
    }
  ];

  const categories = ['Reviews', 'Recommendations', 'Analysis', 'Industry', 'Manga', 'Characters', 'Soundtracks', 'Conventions'];

  // WebSite JSON-LD
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Anime Blog',
    url: 'https://anime.weebcoder.com',
    description: 'Discover the latest anime reviews, recommendations, and insights. Stay updated with the world of Japanese animation and manga culture.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://anime.weebcoder.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Organization JSON-LD
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Anime Blog',
    url: 'https://anime.weebcoder.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://anime.weebcoder.com/logo.png',
      width: 512,
      height: 512
    },
    sameAs: [
      'https://twitter.com/weebcoder',
      'https://github.com/weebcoder'
    ],
    description: 'Your ultimate destination for anime reviews, recommendations, and insights.'
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* WebSite JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <IntegratedNav
        currentApp="anime"
        appName="AnimeBlog"
        appIcon={
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
            A
          </div>
        }
        localLinks={[
          { href: "/", label: "Home" },
          { href: "#", label: "Reviews" },
          { href: "#", label: "Recommendations" },
          { href: "#", label: "News" }
        ]}
      />


      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 border-b bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full bg-white/50 backdrop-blur border-purple-200 text-purple-700">
              New: Winter 2025 Season Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Your Gateway to <span className="text-purple-600 dark:text-purple-400">Japanese Animation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the latest anime reviews, recommendations, and insights. Dive deep into the world of Japanese animation and manga culture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 text-lg bg-purple-600 hover:bg-purple-700">
                Explore All Posts <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                Latest Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Posts</h2>
                <p className="text-muted-foreground">Hand-picked articles for anime enthusiasts</p>
              </div>
              <Button variant="ghost" className="hidden sm:flex">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/posts/${post.slug}`} className="block h-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 border-muted overflow-hidden flex flex-col h-full">
                    <div className="aspect-video w-full overflow-hidden bg-muted relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-background/90 text-foreground backdrop-blur hover:bg-background/90">
                          {post.category}
                        </Badge>
                        <Badge variant="secondary" className="bg-yellow-400/90 text-yellow-950 backdrop-blur flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" /> {post.rating}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="space-y-2">
                      <CardTitle className="line-clamp-2 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>A</AvatarFallback>
                          </Avatar>
                          <span>AnimeBlog Team</span>
                        </div>
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Browse by Category</h2>
            <p className="text-muted-foreground mb-12">Find content that matches your interests</p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="h-10 px-6 hover:border-purple-500 hover:text-purple-600 transition-colors"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-purple-900 text-white">
          <div className="container mx-auto max-w-xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Join Our Anime Community</h2>
            <p className="text-purple-100">
              Get weekly anime recommendations, reviews, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-11 bg-white text-foreground border-0 focus-visible:ring-offset-purple-900"
              />
              <Button size="lg" variant="secondary" className="h-11 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <CrossAppFooter />
      </main>
    </div>
  );
}
