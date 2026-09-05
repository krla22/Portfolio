import type { MetadataRoute } from 'next';
import { allProjects } from './project/project-data';
import { siteUrl } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/timeline`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...allProjects.map((project) => ({
      url: `${siteUrl}/project/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
