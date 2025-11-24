Turborepo Monorepo - Production Ready Next.js Applications (App Router)
A comprehensive monorepo setup featuring multiple Next.js applications with shared UI components, SEO optimization, and production-ready configurations using the latest App Router architecture.

🚀 Project Overview
This monorepo contains three fully functional Next.js applications built with JavaScript, Tailwind CSS, and complete SEO optimization using Next.js 15 App Router:

tech-blog - Technology and development blog
anime-blog - Anime reviews and recommendations blog
tool - Developer utilities and tools
📁 Project Structure

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
14
turborepo-monorepo/
├── apps/
│   ├── anime-blog/          # Anime blog application
│   │   └── app/            # App Router structure
│   ├── tech-blog/           # Technology blog application
│   │   └── app/            # App Router structure
│   └── tool/               # Developer tools application
│       └── app/            # App Router structure
├── packages/
│   └── ui/                 # Shared UI components
├── turbo.json              # Turborepo configuration
├── package.json            # Root package.json with workspaces
├── jsconfig.json           # JavaScript configuration with path aliases
└── README.md              # This file
🛠 Technology Stack
Framework: Next.js 15 with App Router (latest architecture)
Language: JavaScript (ES6+)
Styling: Tailwind CSS with shadcn/ui components
Monorepo: Turborepo with npm workspaces
Package Manager: npm 10.3.0
Node.js: 20.11.1
📋 Prerequisites
Ensure you have the following installed:

Node.js v20.11.1 or higher
npm v10.3.0 or higher
🚀 Quick Start
1. Clone and Install Dependencies
bash

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
# Clone the repository
git clone <repository-url>
cd turborepo-monorepo

# Install dependencies for all packages
npm install
2. Run Development Servers
bash

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
# Run all applications in development mode
npm run dev

# Or run individual applications
npm run dev:tech-blog     # http://localhost:3000
npm run dev:anime-blog    # http://localhost:3001  
npm run dev:tool          # http://localhost:3002
3. Build for Production
bash

Line Wrapping

Collapse
Copy
1
2
3
4
5
# Build all applications
npm run build

# Start production servers
npm run start
📱 Applications
Tech Blog (apps/tech-blog)
URL: http://localhost:3000

App Router Structure:

app/layout.js - Root layout with metadata
app/page.js - Home page
app/posts/page.js - Posts listing
app/posts/[slug]/page.js - Dynamic blog post pages
app/(routes)/sitemap.xml/route.js - Sitemap generation
app/(routes)/rss.xml/route.js - RSS feed generation
app/(routes)/robots.txt/route.js - Robots.txt
Features:

SEO-optimized blog posts with structured data
RSS feed generation
Sitemap generation
Mobile-responsive design
Example post: "Latest AI Tools Developers Must Know (2025 Edition)"
Anime Blog (apps/anime-blog)
URL: http://localhost:3001

App Router Structure:

app/layout.js - Root layout with metadata
app/page.js - Home page with anime recommendations
app/posts/[slug]/page.js - Dynamic anime post pages
app/(routes)/sitemap.xml/route.js - Sitemap generation
app/(routes)/rss.xml/route.js - RSS feed generation
app/(routes)/robots.txt/route.js - Robots.txt
Features:

Anime reviews and recommendations
Category-based browsing
Rating system
Example post: "Top 10 Anime to Watch in 2025"
Tool App (apps/tool)
URL: http://localhost:3002

App Router Structure:

app/layout.js - Root layout with metadata
app/page.js - Home page showcasing tools
app/reading-time-calculator/page.js - Reading time calculator
app/(routes)/sitemap.xml/route.js - Sitemap generation
app/(routes)/robots.txt/route.js - Robots.txt
Features:

Reading time calculator (fully functional)
Color converter (placeholder)
JSON formatter (placeholder)
Base64 encoder (placeholder)
Password generator (placeholder)
🎨 Shared UI Components (packages/ui)
The @repo/ui package provides reusable components across all applications:

generateMetadata() - App Router metadata generation function
Meta.js - Legacy Page Router meta tags component (for compatibility)
Header.js - Navigation header
Footer.js - Site footer with links
Layout.js - Page layout wrapper
Button.js - Reusable button component
cn.js - className merge utility
Using Shared Components
javascript

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
⌄
⌄
// App Router - Recommended approach
import { generateMetadata } from '@repo/ui';

export const metadata = generateMetadata({
  title: "Page Title",
  description: "Page description",
  canonical: "https://example.com/page"
});

// Legacy support for Page Router
import { Meta } from '@repo/ui';

export default function LegacyPage() {
  return (
    <>
      <Meta title="Page Title" description="Page description" />
      {/* Page content */}
    </>
  );
}
🔧 Configuration Files
Root Configuration
turbo.json - Turborepo pipeline configuration
package.json - Root package with workspace configuration
jsconfig.json - JavaScript configuration with path aliases
App Configuration
Each application includes:

next.config.js - Next.js configuration with App Router support
tailwind.config.js - Tailwind CSS configuration
postcss.config.js - PostCSS configuration
package.json - Application-specific dependencies
🌍 SEO Features
All applications include comprehensive SEO optimization using App Router metadata:

App Router Metadata
generateMetadata() function for consistent metadata
Automatic Open Graph tags
Twitter Card generation
Canonical URLs and hreflang
JSON-LD structured data support
Technical SEO
Sitemap generation (/sitemap.xml)
RSS feed generation (/rss.xml)
robots.txt configuration
Semantic HTML structure
Alt text for images
Mobile-first responsive design
📝 Adding New Blog Posts
1. Create Post File
Create a new file in apps/[app-name]/app/posts/[slug]/page.js:

javascript

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
⌄
⌄
⌄
// apps/tech-blog/app/posts/my-new-post/page.js
import { generateMetadata } from '@repo/ui';

export const metadata = generateMetadata({
  title: "My New Post Title",
  description: "Post description for SEO",
  canonical: "https://techblog.com/posts/my-new-post",
  ogType: "article",
  article: {
    headline: "My New Post Title",
    description: "Post description for SEO",
    author: "Author Name",
    datePublished: "2025-01-20T10:00:00Z",
    dateModified: "2025-01-20T10:00:00Z",
    image: "https://techblog.com/images/my-post.jpg"
  }
});

export default function PostPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Your post content */}
    </article>
  );
}
2. Update Sitemap and RSS
Add your new post to the respective route files in each app:

javascript

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
10
⌄
⌄
// app/(routes)/sitemap.xml/route.js
const pages = [
  // ... existing pages
  {
    url: 'https://techblog.com/posts/my-new-post',
    lastmod: '2025-01-20T10:00:00Z',
    changefreq: 'weekly',
    priority: '0.9'
  }
];
🗺️ Sitemap Generation
Each application automatically generates a sitemap at /sitemap.xml. The App Router uses Route Handlers:

javascript

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
14
⌄
⌄
⌄
// app/(routes)/sitemap.xml/route.js
export default function SitemapRoute() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {/* URL entries */}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
📡 RSS Feed Generation
RSS feeds are available at /rss.xml for each application using Route Handlers:

javascript

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
14
⌄
⌄
⌄
// app/(routes)/rss.xml/route.js
export default function RssRoute() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    {/* RSS content */}
  </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
🚀 Deployment to Vercel
1. Connect Repository
Push your code to GitHub
Connect your repository to Vercel
Vercel will automatically detect the monorepo structure and App Router
2. Configure Build Settings
In your Vercel dashboard, set the following for each app:

Root Directory: apps/[app-name]
Build Command: npm run build
Output Directory: .next
Install Command: npm install

3. Environment Variables
Add any necessary environment variables in Vercel's dashboard.

💰 Monetization Strategy
Advertisement Placement
Each application includes strategic ad placement:

Header: 728x90 leaderboard (commented placeholders)
Sidebar: 300x250 medium rectangle (commented placeholders)
Content: In-content ads (commented placeholders)
Affiliate Marketing
Example affiliate sections included:

Tech Blog: Premium coding courses and development tools
Anime Blog: Anime streaming services and merchandise
Tool App: Developer productivity tools and courses
Implementation
javascript

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
14
{/* Ad Placeholder */}
<div className="bg-gray-100 rounded-lg p-6 text-center border-2 border-dashed border-gray-300">
  <p className="text-gray-500 text-sm">Advertisement</p>
  <p className="text-gray-400 text-xs mt-2">300x250 medium rectangle</p>
</div>

{/* Affiliate CTA */}
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
  <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Offer</h3>
  <Button href="https://affiliate-link.com" variant="primary">
    Get Started - Save 20%
  </Button>
  <p className="text-sm text-gray-500 mt-4">*Affiliate link</p>
</div>
📊 SEO Checklist
✅ On-Page SEO
 Title tags with keywords
 Meta descriptions
 Header tags (H1, H2, H3)
 URL structure
 Internal linking
 Image alt text
 Content quality (300-600 words minimum)
✅ Technical SEO
 Mobile responsiveness
 Page speed optimization
 XML sitemap
 RSS feed
 robots.txt
 Canonical URLs
 Structured data (JSON-LD)
✅ App Router Specific
 Server Components for better performance
 Route Handlers for API endpoints
 Metadata API for SEO
 Streaming SSR with Suspense
 Automatic code splitting
✅ Off-Page SEO
 Backlink strategy (implement as needed)
 Social media integration
 Guest posting opportunities
🔧 Development Scripts
Root Scripts
bash

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
npm run dev              # Run all apps in development
npm run build            # Build all apps
npm run start            # Start all apps in production
npm run lint             # Lint all packages
npm run clean            # Clean build artifacts
npm run test             # Run tests (when implemented)
Individual App Scripts
bash

Line Wrapping

Collapse
Copy
1
2
3
npm run dev:tech-blog    # Run tech-blog only
npm run dev:anime-blog   # Run anime-blog only
npm run dev:tool         # Run tool app only
🐛 Troubleshooting
Common Issues
Port Conflicts
bash

Line Wrapping

Collapse
Copy
1
2
# Kill processes on ports 3000-3002
lsof -ti:3000,3001,3002 | xargs kill -9
Dependency Issues
bash

Line Wrapping

Collapse
Copy
1
2
3
4
5
6
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
Build Failures
bash

Line Wrapping

Collapse
Copy
1
2
3
4
5
# Clean build artifacts
npm run clean

# Rebuild
npm run build
App Router Specific Issues
bash

Line Wrapping

Collapse
Copy
1
2
3
4
5
# Check if you're using app/ directory structure
ls apps/*/app/

# Ensure you're using export const metadata
grep -r "export const metadata" apps/*/app/
🔄 Migration from Page Router
If you're migrating from Page Router to App Router:

Key Changes
Directory Structure: pages/ → app/
File Extensions: .js files remain, but structure changes
Metadata: <Head> → export const metadata
Dynamic Routes: [slug].js → [slug]/page.js
API Routes: pages/api/ → app/api/ (Route Handlers)
Migration Steps
Create app/ directory structure
Move pages to app/ with /page.js suffix
Convert <Head> to metadata exports
Update dynamic routes to folder structure
Convert API routes to Route Handlers
📚 Additional Resources
Next.js App Router Documentation
Next.js Migration Guide
Turborepo Documentation
Tailwind CSS Documentation
SEO Best Practices
🤝 Contributing
Fork the repository
Create a feature branch
Make your changes
Test thoroughly
Submit a pull request
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

📞 Support
For questions or support, please open an issue in the repository or contact the development team.

Built with ❤️ using Next.js 15 App Router, Turborepo, and Tailwind CSS