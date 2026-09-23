import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import Shell from './components/shell';
import { site, siteUrl } from './lib/site';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  // Shared directly with recruiters; kept out of search results on purpose.
  robots: { index: false, follow: false },
  openGraph: {
    type: 'profile',
    siteName: `${site.name} Portfolio`,
    url: siteUrl,
    title: `${site.name} — ${site.role}`,
    description: site.metaDescription,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans bg-white text-body`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
