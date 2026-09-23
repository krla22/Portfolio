import type { MetadataRoute } from 'next';

// Crawling stays allowed so bots can read the noindex header/meta tag;
// blocking them here would let bare URLs still show up in results.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
  };
}
