import { Inter } from 'next/font/google';
import '../../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Anime Blog - Your Gateway to Japanese Animation',
  description: 'Discover the latest anime reviews, recommendations, and insights. Stay updated with the world of Japanese animation.',
  icons: {
    icon: "/favicon.svg",
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