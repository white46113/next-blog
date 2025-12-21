// apps/anime-blog/app/(routes)/sitemap.xml/route.js

import { posts } from '@/lib/posts';

export function GET() {
  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: 'https://anime.weebcoder.com/',
      lastmod: currentDate,
    },
    {
      url: 'https://anime.weebcoder.com/posts',
      lastmod: currentDate,
    },
    {
      url: 'https://anime.weebcoder.com/privacy',
      lastmod: currentDate,
    },
    {
      url: 'https://anime.weebcoder.com/terms',
      lastmod: currentDate,
    },
    {
      url: 'https://anime.weebcoder.com/about',
      lastmod: currentDate,
    },
    {
      url: 'https://anime.weebcoder.com/contact',
      lastmod: currentDate,
    }
  ];

  const postPages = Object.keys(posts).map((slug) => ({
    url: `https://anime.weebcoder.com/posts/${slug}`,
    lastmod: posts[slug].date ? new Date(posts[slug].date).toISOString() : currentDate,
  }));

  const pages = [...staticPages, ...postPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
      .map(
        (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
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
