import { getRssString } from '@astrojs/rss';

import { SITE, METADATA, APP_BLOG } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  const lastBuildDate = posts[0]
    ? posts.reduce((newest, p) => (p.publishDate > newest ? p.publishDate : newest), posts[0].publishDate)
    : new Date();

  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || '',
    site: import.meta.env.SITE,

    customData: `<lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>`,

    items: posts.map((post) => {
      const categories = post.category
        ? [post.category.title, ...(post.tags?.map((t) => t.title) ?? [])]
        : (post.tags?.map((t) => t.title) ?? undefined);

      return {
        link: getPermalink(post.permalink, 'post'),
        title: post.title,
        description: post.excerpt,
        pubDate: post.publishDate,
        categories,
        author: post.author,
      };
    }),

    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
