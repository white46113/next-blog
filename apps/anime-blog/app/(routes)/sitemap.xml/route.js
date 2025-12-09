// apps/anime-blog/app/(routes)/sitemap.xml/route.js

import { posts } from '@/lib/posts';

export function GET() {
  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: 'https://anime.weebcoder.com/',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: 'https://anime.weebcoder.com/posts',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.8'
    },
    {
      url: 'https://anime.weebcoder.com/privacy',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.5'
    },
    {
      url: 'https://anime.weebcoder.com/terms',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.5'
    },
    {
      url: 'https://anime.weebcoder.com/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      url: 'https://anime.weebcoder.com/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    }
  ];

  const postPages = Object.keys(posts).map((slug) => ({
    url: `https://anime.weebcoder.com/posts/${slug}`,
    lastmod: posts[slug].date ? new Date(posts[slug].date).toISOString() : currentDate,
    changefreq: 'monthly',
    priority: '0.9'
  }));

  const pages = [...staticPages, ...postPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
      .map(
        (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
      )
      .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=1800, s-maxage=3600',
    },
  });
}
