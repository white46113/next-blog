export async function GET() {
  const posts = [
    {
      title: "Top 10 Anime to Watch in 2025",
      description: "From mind-bending sci-fi to heartwarming slice-of-life, discover the must-watch anime series that are defining 2025's animation landscape.",
      url: 'https://animeblog.com/posts/top-10-anime-to-watch-2025',
      guid: 'top-10-anime-to-watch-2025',
      pubDate: 'Sat, 18 Jan 2025 10:00:00 GMT',
      category: 'Recommendations'
    },
    {
      title: "The Evolution of Isekai: A Deep Dive",
      description: "Explore how the isekai genre has transformed from simple fantasy tropes to complex narratives that challenge traditional storytelling.",
      url: 'https://animeblog.com/posts/evolution-isekai-deep-dive',
      guid: 'evolution-isekai-deep-dive',
      pubDate: 'Sun, 12 Jan 2025 14:30:00 GMT',
      category: 'Analysis'
    }
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Anime Blog</title>
    <description>Your ultimate destination for anime reviews, recommendations, and insights</description>
    <link>https://animeblog.com</link>
    <atom:link href="https://animeblog.com/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${posts.map(post => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.url}</link>
      <guid>${post.guid}</guid>
      <pubDate>${post.pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
    </item>`).join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}