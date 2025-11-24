export interface SEOMetadata {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    twitterCard?: 'summary' | 'summary_large_image';
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

export function generateMetadata(config: SEOMetadata) {
    const {
        title,
        description,
        keywords = [],
        canonical,
        ogImage,
        ogType = 'website',
        twitterCard = 'summary_large_image',
        author,
        publishedTime,
        modifiedTime,
    } = config;

    return {
        title,
        description,
        keywords: keywords.join(', '),
        authors: author ? [{ name: author }] : undefined,
        openGraph: {
            title,
            description,
            type: ogType,
            url: canonical,
            images: ogImage ? [{ url: ogImage }] : undefined,
            publishedTime,
            modifiedTime,
        },
        twitter: {
            card: twitterCard,
            title,
            description,
            images: ogImage ? [ogImage] : undefined,
        },
        alternates: {
            canonical,
        },
    };
}

export function generateArticleMetadata(config: SEOMetadata & {
    category?: string;
    tags?: string[];
}) {
    return generateMetadata({
        ...config,
        ogType: 'article',
        keywords: [...(config.keywords || []), ...(config.tags || [])],
    });
}

export function generateToolMetadata(toolName: string, description: string) {
    return generateMetadata({
        title: `${toolName} - Free Online Tool`,
        description,
        keywords: [toolName, 'online tool', 'free', 'converter', 'utility'],
        ogType: 'website',
    });
}
