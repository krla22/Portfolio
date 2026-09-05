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
  bio:
    'Full stack web developer with five years building WordPress and WooCommerce sites for US and Australian businesses. I take projects from Figma to launch with custom themes, payments, shipping, hosting, DNS, and the technical SEO that gets them ranking. Most of my recent work is rebuilding slow page-builder sites as custom-coded WordPress and fixing the Core Web Vitals along the way.',
  /** Short form for meta descriptions — kept under ~160 chars. */
  metaDescription:
    'Full stack web developer with five years building WordPress and WooCommerce sites for US and Australian businesses, from Figma to launch with the technical SEO to match.',
} as const;

export const navItems = [
  { num: '01', label: 'E-Commerce', href: '/#ecommerce-projects' },
  { num: '02', label: 'Lead Gen', href: '/#lead-gen-projects' },
  { num: '03', label: 'Other Work', href: '/#other-projects' },
  { num: '04', label: 'Skills', href: '/#skills' },
  { num: '05', label: 'Work Timeline', href: '/timeline' },
];
