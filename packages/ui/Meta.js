import Head from 'next/head';

export function Meta({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  ogType = 'website',
  article,
  alternateUrls = {}
}) {
  const siteName = 'Tech Blog';
  const defaultTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = description || 'Discover the latest insights, tutorials, and news in technology and development.';
  
  return (
    <Head>
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* hreflang */}
      {alternateUrls.en && <link rel="alternate" hrefLang="en" href={alternateUrls.en} />}
      {alternateUrls.es && <link rel="alternate" hrefLang="es" href={alternateUrls.es} />}
      
      {/* RSS */}
      <link rel="alternate" type="application/rss+xml" title={`${siteName} RSS Feed`} href="/rss.xml" />
      
      {/* Article Schema */}
      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: article.headline,
              description: article.description,
              author: {
                '@type': 'Person',
                name: article.author
              },
              datePublished: article.datePublished,
              dateModified: article.dateModified,
              image: article.image,
              publisher: {
                '@type': 'Organization',
                name: siteName,
                logo: {
                  '@type': 'ImageObject',
                  url: '/logo.png'
                }
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': canonical
              }
            })
          }}
        />
      )}
      
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  );
}

// App Router compatible metadata export
export function generateMetadata({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  ogType = 'website',
  article,
  alternateUrls = {}
}) {
  const siteName = 'Tech Blog';
  const defaultTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = description || 'Discover the latest insights, tutorials, and news in technology and development.';
  
  return {
    title: defaultTitle,
    description: defaultDescription,
    alternates: {
      canonical: canonical,
      languages: {
        'en': alternateUrls.en,
        'es': alternateUrls.es,
      },
    },
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      type: ogType,
      images: ogImage ? [{ url: ogImage }] : [],
      url: canonical,
      siteName: siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDescription,
      images: ogImage ? [ogImage] : [],
    },
    other: {
      'article:section': article?.category || 'Technology',
    },
  };
}