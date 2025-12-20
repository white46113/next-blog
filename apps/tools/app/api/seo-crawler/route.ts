import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';
import robotsParser from 'robots-parser';

interface SEOIssue {
    category: 'critical' | 'warning' | 'info' | 'success';
    title: string;
    description: string;
    recommendation?: string;
}

interface SEOAnalysis {
    url: string;
    timestamp: number;
    httpStatus: number;
    loadTime: number;
    issues: SEOIssue[];
    stats: {
        title: string;
        titleLength: number;
        description: string;
        descriptionLength: number;
        h1Count: number;
        h1Text: string[];
        imageCount: number;
        imagesWithoutAlt: number;
        wordCount: number;
        internalLinks: number;
        externalLinks: number;
        hasViewport: boolean;
        hasCanonical: boolean;
        canonicalUrl: string;
        hasNoindex: boolean;
        hasNofollow: boolean;
        robotsTxtAllows: boolean;
        contentType: string;
    };
}

export async function POST(request: NextRequest) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json(
                { error: 'URL is required' },
                { status: 400 }
            );
        }

        // Validate URL format
        let targetUrl: URL;
        try {
            targetUrl = new URL(url);
        } catch (error) {
            return NextResponse.json(
                { error: 'Invalid URL format' },
                { status: 400 }
            );
        }

        const startTime = Date.now();
        const issues: SEOIssue[] = [];

        // Fetch the webpage
        let response;
        try {
            response = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (compatible; SEO-Crawler/1.0; +https://tools.weebcoder.com)',
                },
                timeout: 30000,
                maxRedirects: 5,
                validateStatus: () => true, // Accept any status code
            });
        } catch (error: any) {
            return NextResponse.json({
                url,
                timestamp: Date.now(),
                httpStatus: 0,
                loadTime: Date.now() - startTime,
                issues: [{
                    category: 'critical',
                    title: 'Failed to fetch URL',
                    description: error.message || 'Could not connect to the server',
                    recommendation: 'Check if the URL is accessible and not blocking automated requests',
                }],
                stats: {} as any,
            } as SEOAnalysis);
        }

        const loadTime = Date.now() - startTime;
        const $ = cheerio.load(response.data);

        // Check HTTP status
        if (response.status >= 400) {
            issues.push({
                category: 'critical',
                title: `HTTP ${response.status} Error`,
                description: `The page returned a ${response.status} status code`,
                recommendation: 'Fix server errors or broken links. Search engines cannot index error pages.',
            });
        } else if (response.status >= 300) {
            issues.push({
                category: 'warning',
                title: `HTTP ${response.status} Redirect`,
                description: 'The page uses redirects',
                recommendation: 'Ensure redirects are intentional and use 301 for permanent redirects.',
            });
        }

        // Extract meta robots
        const metaRobots = $('meta[name="robots"]').attr('content')?.toLowerCase() || '';
        const hasNoindex = metaRobots.includes('noindex');
        const hasNofollow = metaRobots.includes('nofollow');

        // Check for noindex
        if (hasNoindex) {
            issues.push({
                category: 'critical',
                title: 'Noindex Tag Detected',
                description: 'The page has a meta robots noindex tag',
                recommendation: 'Remove the noindex tag if you want this page to be indexed by search engines.',
            });
        }

        // Check for nofollow
        if (hasNofollow) {
            issues.push({
                category: 'warning',
                title: 'Nofollow Tag Detected',
                description: 'The page has a meta robots nofollow tag',
                recommendation: 'This prevents search engines from following links on this page.',
            });
        }

        // Check X-Robots-Tag header
        const xRobotsTag = response.headers['x-robots-tag']?.toLowerCase() || '';
        if (xRobotsTag.includes('noindex')) {
            issues.push({
                category: 'critical',
                title: 'X-Robots-Tag Noindex Header',
                description: 'The server is sending an X-Robots-Tag: noindex header',
                recommendation: 'Remove this header from your server configuration.',
            });
        }

        // Check robots.txt
        let robotsTxtAllows = true;
        try {
            const robotsUrl = `${targetUrl.protocol}//${targetUrl.host}/robots.txt`;
            const robotsResponse = await axios.get(robotsUrl, {
                timeout: 5000,
                validateStatus: (status) => status === 200,
            });

            if (robotsResponse.status === 200) {
                const robots = robotsParser(robotsUrl, robotsResponse.data);
                robotsTxtAllows = robots.isAllowed(url, 'Googlebot') ?? true;

                if (!robotsTxtAllows) {
                    issues.push({
                        category: 'critical',
                        title: 'Blocked by robots.txt',
                        description: 'This URL is disallowed in robots.txt',
                        recommendation: 'Update your robots.txt to allow crawling of this page.',
                    });
                }
            }
        } catch (error) {
            // robots.txt not found or error - not critical
        }

        // Extract title
        const title = $('title').text().trim();
        const titleLength = title.length;

        if (!title) {
            issues.push({
                category: 'critical',
                title: 'Missing Title Tag',
                description: 'The page has no title tag',
                recommendation: 'Add a unique, descriptive title tag (50-60 characters).',
            });
        } else if (titleLength < 30) {
            issues.push({
                category: 'warning',
                title: 'Title Too Short',
                description: `Title is only ${titleLength} characters`,
                recommendation: 'Aim for 50-60 characters for optimal display in search results.',
            });
        } else if (titleLength > 60) {
            issues.push({
                category: 'warning',
                title: 'Title Too Long',
                description: `Title is ${titleLength} characters (may be truncated)`,
                recommendation: 'Keep titles under 60 characters to avoid truncation in search results.',
            });
        } else {
            issues.push({
                category: 'success',
                title: 'Title Tag Optimized',
                description: `Title length is ${titleLength} characters`,
            });
        }

        // Extract meta description
        const description = $('meta[name="description"]').attr('content')?.trim() || '';
        const descriptionLength = description.length;

        if (!description) {
            issues.push({
                category: 'warning',
                title: 'Missing Meta Description',
                description: 'The page has no meta description',
                recommendation: 'Add a compelling meta description (150-160 characters).',
            });
        } else if (descriptionLength < 120) {
            issues.push({
                category: 'warning',
                title: 'Meta Description Too Short',
                description: `Description is only ${descriptionLength} characters`,
                recommendation: 'Aim for 150-160 characters for better search result display.',
            });
        } else if (descriptionLength > 160) {
            issues.push({
                category: 'info',
                title: 'Meta Description Long',
                description: `Description is ${descriptionLength} characters (may be truncated)`,
                recommendation: 'Keep descriptions under 160 characters to avoid truncation.',
            });
        } else {
            issues.push({
                category: 'success',
                title: 'Meta Description Optimized',
                description: `Description length is ${descriptionLength} characters`,
            });
        }

        // Check canonical URL
        const canonicalUrl = $('link[rel="canonical"]').attr('href') || '';
        const hasCanonical = !!canonicalUrl;

        if (!hasCanonical) {
            issues.push({
                category: 'warning',
                title: 'Missing Canonical Tag',
                description: 'No canonical URL specified',
                recommendation: 'Add a canonical tag to prevent duplicate content issues.',
            });
        } else if (canonicalUrl !== url) {
            issues.push({
                category: 'info',
                title: 'Canonical Points to Different URL',
                description: `Canonical URL: ${canonicalUrl}`,
                recommendation: 'Ensure this is intentional. The canonical URL should be the preferred version.',
            });
        } else {
            issues.push({
                category: 'success',
                title: 'Canonical Tag Present',
                description: 'Self-referencing canonical tag found',
            });
        }

        // Check H1 tags
        const h1Elements = $('h1');
        const h1Count = h1Elements.length;
        const h1Text = h1Elements.map((_, el) => $(el).text().trim()).get();

        if (h1Count === 0) {
            issues.push({
                category: 'warning',
                title: 'Missing H1 Tag',
                description: 'No H1 heading found on the page',
                recommendation: 'Add a single, descriptive H1 tag that includes your target keyword.',
            });
        } else if (h1Count > 1) {
            issues.push({
                category: 'warning',
                title: 'Multiple H1 Tags',
                description: `Found ${h1Count} H1 tags`,
                recommendation: 'Use only one H1 tag per page for better SEO structure.',
            });
        } else {
            issues.push({
                category: 'success',
                title: 'H1 Tag Optimized',
                description: `Single H1 found: "${h1Text[0]}"`,
            });
        }

        // Check viewport meta tag
        const hasViewport = $('meta[name="viewport"]').length > 0;

        if (!hasViewport) {
            issues.push({
                category: 'critical',
                title: 'Missing Viewport Meta Tag',
                description: 'No viewport meta tag for mobile optimization',
                recommendation: 'Add: <meta name="viewport" content="width=device-width, initial-scale=1">',
            });
        } else {
            issues.push({
                category: 'success',
                title: 'Mobile Viewport Configured',
                description: 'Viewport meta tag present',
            });
        }

        // Check images
        const images = $('img');
        const imageCount = images.length;
        const imagesWithoutAlt = images.filter((_, el) => !$(el).attr('alt')).length;

        if (imagesWithoutAlt > 0) {
            issues.push({
                category: 'warning',
                title: 'Images Missing Alt Text',
                description: `${imagesWithoutAlt} out of ${imageCount} images lack alt attributes`,
                recommendation: 'Add descriptive alt text to all images for accessibility and SEO.',
            });
        } else if (imageCount > 0) {
            issues.push({
                category: 'success',
                title: 'Image Alt Text Complete',
                description: `All ${imageCount} images have alt attributes`,
            });
        }

        // Content analysis
        const bodyText = $('body').text().replace(/\s+/g, ' ').trim();
        const wordCount = bodyText.split(' ').filter(word => word.length > 0).length;

        if (wordCount < 300) {
            issues.push({
                category: 'warning',
                title: 'Thin Content Detected',
                description: `Page has only ${wordCount} words`,
                recommendation: 'Add more quality content. Aim for at least 300-500 words for better rankings.',
            });
        } else if (wordCount < 500) {
            issues.push({
                category: 'info',
                title: 'Moderate Content Length',
                description: `Page has ${wordCount} words`,
                recommendation: 'Consider adding more comprehensive content for competitive keywords.',
            });
        } else {
            issues.push({
                category: 'success',
                title: 'Good Content Length',
                description: `Page has ${wordCount} words`,
            });
        }

        // Check links
        const links = $('a[href]');
        let internalLinks = 0;
        let externalLinks = 0;

        links.each((_, el) => {
            const href = $(el).attr('href') || '';
            try {
                const linkUrl = new URL(href, url);
                if (linkUrl.host === targetUrl.host) {
                    internalLinks++;
                } else {
                    externalLinks++;
                }
            } catch (error) {
                // Invalid URL, skip
            }
        });

        // Performance check
        if (loadTime > 3000) {
            issues.push({
                category: 'warning',
                title: 'Slow Page Load',
                description: `Page took ${loadTime}ms to load`,
                recommendation: 'Optimize images, minify CSS/JS, and use caching to improve load time.',
            });
        } else if (loadTime > 1500) {
            issues.push({
                category: 'info',
                title: 'Moderate Load Time',
                description: `Page loaded in ${loadTime}ms`,
                recommendation: 'Consider further optimization for better user experience.',
            });
        } else {
            issues.push({
                category: 'success',
                title: 'Fast Page Load',
                description: `Page loaded in ${loadTime}ms`,
            });
        }

        // Content-Type check
        const contentType = response.headers['content-type'] || '';
        if (!contentType.includes('text/html')) {
            issues.push({
                category: 'warning',
                title: 'Non-HTML Content Type',
                description: `Content-Type: ${contentType}`,
                recommendation: 'Ensure the page serves HTML content for proper indexing.',
            });
        }

        // Build response
        const analysis: SEOAnalysis = {
            url,
            timestamp: Date.now(),
            httpStatus: response.status,
            loadTime,
            issues,
            stats: {
                title,
                titleLength,
                description,
                descriptionLength,
                h1Count,
                h1Text,
                imageCount,
                imagesWithoutAlt,
                wordCount,
                internalLinks,
                externalLinks,
                hasViewport,
                hasCanonical,
                canonicalUrl,
                hasNoindex,
                hasNofollow,
                robotsTxtAllows,
                contentType,
            },
        };

        return NextResponse.json(analysis);

    } catch (error: any) {
        console.error('SEO Crawler Error:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
