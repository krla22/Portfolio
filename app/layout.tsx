import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Shell from './components/shell';
import JsonLd from './components/json-ld';
import { site, siteUrl } from './lib/site';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-fraunces',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  keywords: [
    'WordPress developer',
    'WooCommerce developer',
    'full stack developer',
    'technical SEO',
    'Core Web Vitals',
    'custom WordPress theme',
    'ACF Pro',
    'Next.js',
    'Laravel',
    'Philippines',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    siteName: `${site.name} Portfolio`,
    url: siteUrl,
    title: `${site.name} — ${site.role}`,
    description: site.metaDescription,
    firstName: site.firstName,
    lastName: site.lastName,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: site.name,
  givenName: site.firstName,
  familyName: site.lastName,
  url: siteUrl,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  image: `${siteUrl}/opengraph-image`,
  jobTitle: site.role,
  description: site.bio,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PH',
  },
  sameAs: [site.github, site.linkedin],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Polytechnic University of the Philippines',
  },
  knowsAbout: [
    'WordPress development',
    'WooCommerce',
    'Technical SEO',
    'Core Web Vitals',
    'PHP',
    'React',
    'Next.js',
    'Laravel',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: `${site.name} Portfolio`,
  description: site.metaDescription,
  inLanguage: 'en',
  publisher: { '@id': `${siteUrl}/#person` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} font-sans bg-ink text-bone`}
      >
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
