import '../../styles/globals.css';
import { GoogleAnalytics } from '@repo/lib/GoogleAnalytics';

export const metadata = {
  metadataBase: new URL('https://anime.weebcoder.com'),
  title: {
    default: 'Anime Blog - Your Gateway to Japanese Animation',
    template: '%s | Anime Blog'
  },
  description: 'Discover the latest anime reviews, recommendations, and insights. Stay updated with the world of Japanese animation.',
  keywords: ['anime', 'anime reviews', 'anime recommendations', 'japanese animation', 'manga', 'anime blog', 'anime news'],
  authors: [{ name: 'WeebCoder' }],
  creator: 'WeebCoder',
  publisher: 'WeebCoder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anime.weebcoder.com',
    siteName: 'Anime Blog',
    title: 'Anime Blog - Your Gateway to Japanese Animation',
    description: 'Discover the latest anime reviews, recommendations, and insights. Stay updated with the world of Japanese animation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anime Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anime Blog - Your Gateway to Japanese Animation',
    description: 'Discover the latest anime reviews, recommendations, and insights. Stay updated with the world of Japanese animation.',
    images: ['/og-image.png'],
    creator: '@weebcoder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="oM0yaIv34GsKUg4bx2NiCfOgphNLtiF6Sm3DOdc3mqM" />
        <GoogleAnalytics />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}