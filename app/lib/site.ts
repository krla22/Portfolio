export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://kurtrobinantonio.com';

export const site = {
  name: 'Kurt Robin Antonio',
  firstName: 'Kurt Robin',
  lastName: 'Antonio',
  role: 'Full Stack Web Developer',
  headline: 'WordPress, WooCommerce & Technical SEO',
  location: 'Philippines',
  email: 'antoniokurtrobin.work@gmail.com',
  phone: '+639994238370',
  github: 'https://github.com/krla22',
  linkedin: 'https://www.linkedin.com/in/kurtrobinantonio/',
  resume: '/AntonioKurtRobin_Resume.pdf',
  /** Quick facts shown under the homepage headline; what a recruiter checks first. */
  facts: [
    '5 years experience',
    'Based in the Philippines (UTC+8)',
    'Working remotely with US & AU clients',
    'Figma to launch, end to end',
  ],
  bio:
    "I've spent the last five years building WordPress and WooCommerce sites for businesses in the US and Australia. I usually take a project all the way from Figma to launch: the custom theme, payments, shipping, hosting, DNS, and the SEO so people can actually find it. Lately, most of my work has been taking slow page-builder sites and rebuilding them as fast, custom-coded WordPress.",
  /** Short form used for link previews (LinkedIn, email). */
  metaDescription:
    "I build fast, custom WordPress and WooCommerce sites for businesses in the US and Australia, from Figma all the way to launch.",
} as const;

export const navItems = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/timeline' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];
