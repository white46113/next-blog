import Link from "next/link";
import { ArrowRight, Github, Twitter, Linkedin, PlayCircle, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import RelatedPosts from "@/components/RelatedPosts";
import CrossAppLinks from "@/components/CrossAppLinks";
import PopularContent from "@/components/PopularContent";

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const url = `https://anime.weebcoder.com/posts/${params.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: url,
      siteName: 'Anime Blog',
      publishedTime: post.date,
      authors: [post.author || 'Anime Blog Team'],
      images: [
        {
          url: post.image || 'https://anime.weebcoder.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image || 'https://anime.weebcoder.com/og-image.jpg'],
    },
  };
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const PostComponent = post.component;

  // JSON-LD structured data for SEO
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    articleBody: post.description,
    image: post.image || 'https://anime.weebcoder.com/og-image.jpg',
    datePublished: post.date,
    dateModified: post.date, // Can be updated when post is modified
    articleSection: post.category || 'Anime',
    wordCount: post.wordCount || 2000,
    author: {
      '@type': 'Person',
      name: post.author || 'Anime Blog Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Anime Blog',
      logo: {
        '@type': 'ImageObject',
        url: 'https://anime.weebcoder.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://anime.weebcoder.com/posts/${params.slug}`,
    },
  };

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://anime.weebcoder.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Posts',
        item: 'https://anime.weebcoder.com/#posts',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://anime.weebcoder.com/posts/${params.slug}`,
      },
    ],
  };

  // FAQ JSON-LD (only if post has FAQs)
  const faqJsonLd = post.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Article JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* FAQ JSON-LD (conditional) */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
              A
            </div>
            <span className="font-bold text-xl tracking-tight">Anime Blog</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <PostComponent />

        {/* Related Posts */}
        <RelatedPosts currentSlug={params.slug} category={post.category} />

        {/* Cross-App Links */}
        <CrossAppLinks />

        {/* Popular Content */}
        <PopularContent />

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          {/* <Button>Share Article</Button> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <span className="font-bold text-lg">AnimeBlog</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your ultimate destination for anime reviews, recommendations, and insights.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Content</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Reviews</Link></li>
                <li><Link href="#" className="hover:text-foreground">Recommendations</Link></li>
                <li><Link href="#" className="hover:text-foreground">News</Link></li>
                <li><Link href="#" className="hover:text-foreground">Season Guides</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 AnimeBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
