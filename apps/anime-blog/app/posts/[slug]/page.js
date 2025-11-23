import Image from 'next/image';
import { generateMetadata as uiGenerateMetadata, Button } from '@repo/ui';

// NOTE: This file is intentionally production-ready for the Next.js App Router.
// Path provided by you: /next-blog-app-roter/apps/anime-blog/app/posts/[slug]/page.js

export async function generateMetadata({ params }) {
  const postSlug = params.slug;

  // canonical + alternates
  const canonical = `https://animeblog.com/posts/${postSlug}`;

  // Base metadata that your ui helper may augment / normalize
  const base = {
    title: 'Top 10 Anime to Watch in 2025',
    description:
      "From mind-bending sci-fi to heartwarming slice-of-life, discover the must-watch anime series that are defining 2025's animation landscape.",
    canonical,
    openGraph: {
      title: 'Top 10 Anime to Watch in 2025',
      description:
        "From mind-bending sci-fi to heartwarming slice-of-life, discover the must-watch anime series that are defining 2025's animation landscape.",
      url: canonical,
      siteName: 'Anime Blog',
      images: [
        {
          url: 'https://animeblog.com/images/top-anime-2025.jpg',
          alt: 'Top 10 Anime to Watch in 2025',
        },
      ],
      type: 'article',
    },
    alternates: {
      canonical,
      languages: {
        'en-US': canonical,
        'es-ES': `https://animeblog.com/es/posts/${postSlug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      'googlebot': {
        index: true,
        follow: true,
      },
    },
    // Article-specific fields for other systems that expect them
    article: {
      headline: 'Top 10 Anime to Watch in 2025',
      description:
        "From mind-bending sci-fi to heartwarming slice-of-life, discover the must-watch anime series that are defining 2025's animation landscape.",
      author: 'Anime Blog Team',
      datePublished: '2025-01-18T10:00:00Z',
      dateModified: '2025-01-18T10:00:00Z',
      image: 'https://animeblog.com/images/top-anime-2025.jpg',
      url: canonical,
    },
  };

  // Let your UI library produce metadata if it exists and returns a compatible shape
  return uiGenerateMetadata ? uiGenerateMetadata(base) : base;
}

export default function PostPage({ params }) {
  const postSlug = params.slug;
  const canonical = `https://animeblog.com/posts/${postSlug}`;

  // JSON-LD objects
  const blogPostingLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Top 10 Anime to Watch in 2025',
    description:
      "From mind-bending sci-fi to heartwarming slice-of-life, discover the must-watch anime series that are defining 2025's animation landscape.",
    image: 'https://animeblog.com/images/top-anime-2025.jpg',
    author: {
      '@type': 'Organization',
      name: 'Anime Blog Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Anime Blog',
      logo: { '@type': 'ImageObject', url: 'https://animeblog.com/images/logo.png' },
    },
    datePublished: '2025-01-18T10:00:00Z',
    dateModified: '2025-01-18T10:00:00Z',
    mainEntityOfPage: canonical,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [  
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://animeblog.com' },
      { '@type': 'ListItem', position: 2, name: 'Posts', item: 'https://animeblog.com/posts' },
      { '@type': 'ListItem', position: 3, name: 'Top 10 Anime to Watch in 2025', item: canonical },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which anime should I start with from this list?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'If you like psychological thrillers, start with Fushigi no Yume. For a calming, emotional watch try Sakura no Kaze.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these anime available internationally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Availability varies by region and streaming partner — we list streaming recommendations and always link to official sources where possible.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do any of these shows contain mature themes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Some titles (e.g., psychological or horror entries) contain mature themes — check the official rating and content warnings before watching.',
        },
      },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
            Recommendations
          </span>
          <span className="text-sm text-gray-500">10 min read</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-gray-600">9.5</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Anime to Watch in 2025</h1>

        <div className="flex items-center text-gray-600 text-sm">
          <time dateTime="2025-01-18">January 18, 2025</time>
          <span className="mx-2">•</span>
          <span>By Anime Blog Team</span>
        </div>

        {/* Featured image — improves social previews & SEO */}
        <div className="mt-6 mb-6">
          <Image
            src="/images/top-anime-2025.jpg"
            alt="Collage: Top anime to watch in 2025 — titles and characters"
            width={1200}
            height={630}
            priority
            className="rounded-lg"
          />
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          The year 2025 has already proven to be exceptional for anime enthusiasts, with groundbreaking series
          pushing the boundaries of storytelling, animation, and emotional depth. Below you'll find our
          curated list of the <strong>best anime of 2025</strong> and why each title deserves your time.
        </p>

        {/* SEO-friendly section targeting keyword variations */}
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why These Are the Best Anime to Watch in 2025</h2>
        <p className="mb-6">
          We selected titles based on storytelling, animation quality, cultural impact, and critical reception. Use
          this guide to pick anime by genre or mood — whether you want thought-provoking sci-fi, heartwarming
          slice-of-life, or edge-of-your-seat horror.
        </p>

        {/* Original list with small microcopy improvements for keyword density */}
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Fushigi no Yume (Mysterious Dreams)</h2>
        <p className="mb-4">
          <strong>Genre:</strong> Psychological Thriller, Mystery<br />
          <strong>Studio:</strong> Madhouse<br />
          <strong>Episodes:</strong> 24
        </p>
        <p className="mb-6">
          This mind-bending series follows a group of individuals who discover they can enter each other's dreams.
          With stunning animation and a narrative that keeps you guessing, "Fushigi no Yume" often tops critics'
          lists for 2025.
        </p>

        {/* Keep the remaining list entries — trimmed a little for readability but preserving original copy */}
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Sakura no Kaze (Wind of Sakura)</h2>
        <p className="mb-4">
          <strong>Genre:</strong> Slice of Life, Romance<br />
          <strong>Studio:</strong> Kyoto Animation<br />
          <strong>Episodes:</strong> 12
        </p>
        <p className="mb-6">
          A beautiful tale set in rural Japan. The breathtaking scenery and heartfelt storytelling make this a
          must-watch for fans of emotional, character-driven narratives — a standout in the <em>best anime of
          2025</em> lists.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cyber Revolution 2085</h2>
        <p className="mb-4">
          <strong>Genre:</strong> Sci-Fi, Action<br />
          <strong>Studio:</strong> Production I.G<br />
          <strong>Episodes:</strong> 26
        </p>
        <p className="mb-6">
          A cyberpunk masterpiece with powerful questions about consciousness. One of the most-discussed titles of
          2025 among sci-fi anime fans.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Kumo no Shiro (Castle of Clouds)</h2>
        <p className="mb-4">
          <strong>Genre:</strong> Fantasy, Adventure<br />
          <strong>Studio:</strong> Studio Ghibli<br />
          <strong>Episodes:</strong> Movie (120 minutes)
        </p>
        <p className="mb-6">Studio Ghibli returns with another magical tale that will enchant audiences of all ages.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Shinju no Monsho (Pearl's Emblem)</h2>
        <p className="mb-4">
          <strong>Genre:</strong> Historical, Drama<br />
          <strong>Studio:</strong> MAPPA<br />
          <strong>Episodes:</strong> 24
        </p>
        <p className="mb-6">A powerful historical drama set in the Meiji period with exquisite production design.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Digital Hearts</h2>
        <p className="mb-4">
          <strong>Genre:</strong> Romance, Comedy<br />
          <strong>Studio:</strong> A-1 Pictures<br />
          <strong>Episodes:</strong> 12
        </p>
        <p className="mb-6">A modern love story that explores relationships in the digital age.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Ronin's Path</h2>
        <p className="mb-4">
          <strong>Genre:</strong> Action, Historical<br />
          <strong>Studio:</strong> Ufotable<br />
          <strong>Episodes:</strong> 26
        </p>
        <p className="mb-6">High-caliber samurai action with deeply human stakes.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Little Garden</h2>
        <p className="mb-4">
          <strong>Genre:</strong> Slice of Life, Comedy<br />
          <strong>Studio:</strong> SHAFT<br />
          <strong>Episodes:</strong> 12
        </p>
        <p className="mb-6">A charming, feel-good series about a community garden and friendship.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Void Walker</h2>
        <p className="mb-4">
          <strong>Genre:</strong> Horror, Supernatural<br />
          <strong>Studio:</strong> Bones<br />
          <strong>Episodes:</strong> 13
        </p>
        <p className="mb-6">Atmospheric horror that blends folklore and modern dread.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Symphony of Stars</h2>
        <p className="mb-4">
          <strong>Genre:</strong> Music, Drama<br />
          <strong>Studio:</strong> P.A. Works<br />
          <strong>Episodes:</strong> 24
        </p>
        <p className="mb-6">A moving series about young musicians and original music compositions.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Honorable Mentions</h2>
        <p className="mb-6">
          Several other series deserve recognition: "Neon Dreams," "Last Samurai," and "Whispers of the Forest"
          — each notable for style, accuracy, or message.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why 2025 Is Special</h2>
        <p className="mb-6">
          2025 stands out for more international collaboration, diverse storytelling, and technical advances in
          animation — all reasons why these series rose to the top of our list.
        </p>

        {/* FAQ section visible to users (matches FAQ JSON-LD) */}
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FAQ</h2>
        <div>
          <p>
            <strong>Which anime should I start with?</strong>
            <br />If you like psychological thrillers, start with <em>Fushigi no Yume</em>. For a calming mood, try
            <em> Sakura no Kaze</em>.
          </p>

          <p className="mt-4">
            <strong>Are these anime available internationally?</strong>
            <br />Availability varies by region; check official streaming partners linked on each title page.
          </p>

          <p className="mt-4">
            <strong>Do any of these shows contain mature themes?</strong>
            <br />Yes — some entries contain mature themes. Check official ratings and content warnings.
          </p>
        </div>

      </div>

      {/* Affiliate CTA — marked sponsored for SEO */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Watch These Anime Anywhere</h3>
        <p className="text-gray-600 mb-6">
          Stream these series with premium services. Support creators and enjoy ad-free, high-quality viewing.
        </p>
        <Button
          href="https://example.com/anime-streaming"
          variant="primary"
          className="text-lg px-8 py-3"
          rel="sponsored"
          aria-label="Start your free trial for anime streaming (affiliate)"
        >
          Start Your Free Trial
        </Button>
        <p className="text-sm text-gray-500 mt-4">*14-day free trial. Cancel anytime. Affiliate link.</p>
      </div>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 rounded-lg p-6 mt-8 text-center border-2 border-dashed border-gray-300">
        <p className="text-gray-500 text-sm">Advertisement</p>
        <p className="text-gray-400 text-xs mt-2">300x250 medium rectangle</p>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <Button href="/" variant="outline">← Back to Home</Button>
            <Button href="/posts" variant="outline">All Posts</Button>
          </div>
          <div className="flex gap-4">
            <Button href="/posts/evolution-isekai-deep-dive" variant="outline">Next Post →</Button>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>Tags: Anime Recommendations, 2025 Anime, Best Anime, Anime Reviews, Top 10</p>
        </div>
      </footer>
    </article>
  );
}
