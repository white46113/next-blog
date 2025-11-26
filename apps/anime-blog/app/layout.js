import { Inter } from 'next/font/google';
import '../../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    icon: "/favicon.svg",
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
        <meta name="google-site-verification" content="oM0yaIv34GsKUg4bx2NiCfOgphNLtiF6Sm3DOdc3mqM" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}