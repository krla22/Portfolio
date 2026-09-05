import type { Metadata } from 'next';
import TimelineContent from './timeline-content';
import JsonLd from '../components/json-ld';
import { timelineData, education } from './timeline-data';
import { site, siteUrl } from '../lib/site';

const description =
  'Career timeline for Kurt Robin Antonio — from a Laravel backend role in 2021 to leading e-commerce rebuilds for Australian and US businesses today.';

export const metadata: Metadata = {
  title: 'Work Timeline',
  description,
  alternates: { canonical: '/timeline' },
  openGraph: {
    type: 'article',
    url: `${siteUrl}/timeline`,
    title: `Work Timeline — ${site.name}`,
    description,
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Work Timeline — ${site.name}`,
    description,
    images: ['/opengraph-image'],
  },
};

/** Mirrors the visible timeline so search engines and LLM crawlers read the same history. */
const timelineSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/timeline#profilepage`,
  url: `${siteUrl}/timeline`,
  name: `Work Timeline — ${site.name}`,
  description,
  isPartOf: { '@id': `${siteUrl}/#website` },
  mainEntity: {
    '@id': `${siteUrl}/#person`,
    '@type': 'Person',
    name: site.name,
    hasOccupation: timelineData.map((entry) => ({
      '@type': 'Occupation',
      name: entry.role,
      description: entry.description,
      occupationLocation: { '@type': 'Organization', name: entry.company },
    })),
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: education.school,
    },
  },
};

export default function TimelinePage() {
  return (
    <>
      <JsonLd data={timelineSchema} />
      <TimelineContent />

      <footer className="mt-20 pt-10 border-t border-line">
        <p className="text-center font-mono text-xs text-bone/70 tracking-wide">
          &copy; {new Date().getFullYear()} {site.name} — Built with Next.js
        </p>
      </footer>
    </>
  );
}
