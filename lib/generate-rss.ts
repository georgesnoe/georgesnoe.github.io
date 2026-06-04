import RSS from 'rss';
import { writeFileSync } from 'fs';
import path from 'path';

interface Post {
    title: string;
    description: string;
    slug: string;
    date: string;
}

export async function generateRssFeed(posts: Post[]) {
    const siteUrl = "https://www.georgesnoe.fr.eu.org";

    const feed = new RSS({
        title: 'My Next.js Blog',
        description: 'Welcome to my blog where I write about tech and code.',
        feed_url: `${siteUrl}/feed.xml`,
        site_url: siteUrl,
        language: 'en',
        pubDate: new Date().toUTCString(),
    });

    posts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.description,
            url: `${siteUrl}/blog/${post.slug}`,
            date: post.date,
        });
    });

    const outputPath = path.join(process.cwd(), 'public', 'feed.xml');
    writeFileSync(outputPath, feed.xml({ indent: true }));
}