import { z } from 'zod';

const robotsSchema = z.object({
  index: z.boolean().optional(),
  follow: z.boolean().optional(),
});

const siteSchema = z.object({
  name: z.string().optional(),
  site: z.union([z.string().url(), z.undefined()]).optional(),
  base: z.string().optional(),
  trailingSlash: z.boolean().optional(),
  googleSiteVerificationId: z.string().optional(),
});

const metadataSchema = z.object({
  title: z
    .object({
      default: z.string(),
      template: z.string(),
    })
    .optional(),
  description: z.string().optional(),
  robots: robotsSchema.optional(),
  openGraph: z.record(z.unknown()).optional(),
  twitter: z.record(z.unknown()).optional(),
});

const i18nSchema = z.object({
  language: z.string().optional(),
  textDirection: z.string().optional(),
});

const appBlogSchema = z.object({
  isEnabled: z.boolean().optional(),
  postsPerPage: z.number().optional(),
  isRelatedPostsEnabled: z.boolean().optional(),
  relatedPostsCount: z.number().optional(),
  post: z
    .object({
      isEnabled: z.boolean().optional(),
      permalink: z.string().optional(),
      robots: robotsSchema.optional(),
    })
    .optional(),
  list: z
    .object({
      isEnabled: z.boolean().optional(),
      pathname: z.string().optional(),
      robots: robotsSchema.optional(),
    })
    .optional(),
  category: z
    .object({
      isEnabled: z.boolean().optional(),
      pathname: z.string().optional(),
      robots: robotsSchema.optional(),
    })
    .optional(),
  tag: z
    .object({
      isEnabled: z.boolean().optional(),
      pathname: z.string().optional(),
      robots: robotsSchema.optional(),
    })
    .optional(),
});

const analyticsSchema = z.object({
  vendors: z
    .object({
      googleAnalytics: z
        .object({
          id: z.union([z.string(), z.null()]).optional(),
          partytown: z.boolean().optional(),
        })
        .optional(),
    })
    .optional(),
});

const uiSchema = z.object({
  theme: z.string().optional(),
});

export const configSchema = z.object({
  site: siteSchema.optional(),
  metadata: metadataSchema.optional(),
  i18n: i18nSchema.optional(),
  apps: z
    .object({
      blog: appBlogSchema.optional(),
    })
    .optional(),
  ui: uiSchema.optional(),
  analytics: analyticsSchema.optional(),
});

export type ValidatedConfig = z.infer<typeof configSchema>;
