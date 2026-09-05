import React from 'react';
import { Zap, Shield, Rocket, Users, Wrench, BarChart3, Truck, CreditCard, Bot, Globe } from 'lucide-react';

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  /** Omitted for private / NDA work — the card renders a local placeholder instead. */
  image?: string;
  lighthouseImage?: string;
  client?: string;
  position: string;
  duration: string;
  summary: string;
  wins: {
    icon: React.ElementType;
    text: string;
  }[];
};

export const leadGenProjects: Project[] = [
  {
    slug: "nuvision-auto-glass",
    title: "NuVision Auto Glass",
    description: "Multi-state rebuild and organic growth infrastructure for an auto glass network.",
    tech: ["WordPress", "ACF Pro", "PHP", "HubSpot", "GA4", "GTM", "Kinsta", "Cloudflare"],
    link: "https://nuvisionautoglass.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fnuvisionautoglass.com?w=1200&h=800",
    lighthouseImage: "/lighthouse/nv-desktop.png",
    position: "Lead Web Developer",
    duration: "April 2025 - December 2025",
    summary: "I rebuilt NuVision's legacy WordPress site and ran organic growth for its Arizona, Florida, and South Carolina locations. The rebuild focused on Core Web Vitals and a programmatic landing page architecture that could scale with the company's multi-state expansion.",
    wins: [
      { icon: Rocket, text: "Rebuilt the legacy site: load time 7s to 1s, Lighthouse 30 to 95." },
      { icon: Users, text: "Built programmatic City + Service landing pages for the multi-state rollout; lead volume rose roughly 30%." },
      { icon: BarChart3, text: "Set up GA4, GTM, and custom event tracking, then reworked the lead forms based on what the funnel data showed." },
      { icon: Zap, text: "Automated Google review pulls so live reviews rendered on the location pages." },
      { icon: Shield, text: "Put monitoring and backup recovery in place ahead of the high-traffic ad campaigns." },
    ]
  },
  {
    slug: "nurosparx",
    title: "NuroSparX",
    description: "Web agency I co-founded, building growth platforms for US businesses.",
    tech: ["WordPress", "ACF Pro", "PHP", "Schema Automation", "GTM", "GA4", "HubSpot API", "Filevine API"],
    link: "https://nurosparx.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fnurosparx.com?w=1200&h=800",
    lighthouseImage: "/lighthouse/nx-desktop.png",
    position: "Co-founder & Lead Developer",
    duration: "July 2025 - December 2025",
    summary: "An agency I co-founded with NuVision Auto Glass's vice manager, running alongside my NuVision role. I was the technical lead for a small team of developers and freelancers building sites for US clients including Integrate IQ (a HubSpot Diamond Partner), United Law, and Hygeia Health.",
    wins: [
      { icon: Wrench, text: "Built a modular WordPress framework on ACF Pro with automated schema output, so new client sites reused the same components instead of starting from zero." },
      { icon: Rocket, text: "Set technical direction for Integrate IQ and United Law: site migrations, directory listings, API integrations, and Google Ads conversion tracking." },
      { icon: Users, text: "Managed the dev team and freelancers, enforcing semantic HTML and a QA pass before shipping." },
      { icon: Bot, text: "Automated data entry and content updates with Zapier and AI tooling for the marketing team." },
    ]
  },
  {
    slug: "united-law",
    title: "United Law",
    description: "A multi-state legal platform built for local search visibility.",
    tech: ["WordPress", "ACF Pro", "PHP", "JSON-LD Schema", "Local SEO", "Kinsta", "Filevine API"],
    link: "https://unitedlawpa.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Funitedlawpa.com?w=1200&h=800",
    client: "NuroSparX Client",
    lighthouseImage: "/lighthouse/ul-desktop.png",
    position: "Lead Developer",
    duration: "July 2025 - December 2025",
    summary: "A custom WordPress build for a multi-state law firm, prioritising trust signals and technical SEO. The project needed structured data done properly and a lean codebase to compete in the legal search landscape across Florida and Texas.",
    wins: [
      { icon: Rocket, text: "Implemented JSON-LD schema across practice areas and locations for local search visibility." },
      { icon: Wrench, text: "Built a Filevine API integration so case intake flowed straight into the firm's existing system." },
      { icon: Users, text: "Delivered a component-based ACF Pro system for rapid landing page deployment." },
    ]
  },
  {
    slug: "integrate-iq",
    title: "Integrate IQ",
    description: "B2B marketing site for a HubSpot Diamond Partner.",
    tech: ["WordPress", "ACF Pro", "PHP", "Technical SEO", "HubSpot API", "GTM", "WP Engine"],
    link: "https://integrateiq.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fintegrateiq.com?w=1200&h=800",
    client: "NuroSparX Client",
    lighthouseImage: "/lighthouse/iq-desktop.png",
    position: "Lead Developer",
    duration: "July 2025 - December 2025",
    summary: "For this HubSpot Diamond Partner I handled the site migration and the technical marketing stack: a live HubSpot sync for forms and CRM records, GTM pixels for the paid campaigns, and Google Ads conversion tracking wired to the real lead events.",
    wins: [
      { icon: Zap, text: "Built a live HubSpot sync connecting site forms to the CRM." },
      { icon: BarChart3, text: "Configured GTM pixels and Google Ads conversion tracking for the paid campaigns." },
      { icon: Wrench, text: "Custom ACF Pro architecture keeping brand consistency across the marketing pages." },
    ]
  },
  {
    slug: "the-optico",
    title: "The Optico",
    description: "Insurance sales platform with multi-channel ad attribution.",
    tech: ["WordPress", "ACF Pro", "PHP", "HubSpot", "GA4", "GTM", "Kinsta"],
    link: "https://theoptico.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftheoptico.com?w=1200&h=800",
    client: "NuVision Sister Company",
    lighthouseImage: "/lighthouse/to-desktop.png",
    position: "Lead Web Developer",
    duration: "April 2025 - December 2025",
    summary: "A sales platform for the insurance sector built on the Kinsta stack. The focus was attribution: getting tracking pixels and server-side tagging set up so spend across diverse ad networks could actually be measured.",
    wins: [
      { icon: Rocket, text: "Built on Kinsta for reliability under peak ad-campaign traffic." },
      { icon: BarChart3, text: "Implemented server-side tagging via GTM for consistent cross-network ad attribution." },
      { icon: Wrench, text: "Created a simplified CMS interface for the non-technical sales team." },
    ]
  }
];

export const ecommerceProjects: Project[] = [
  {
    slug: "ozcut-welding-tables",
    title: "Ozcut Welding Tables",
    description: "Australian WooCommerce storefront with split freight routing and card payments.",
    tech: ["WordPress", "WooCommerce", "PHP", "Custom Theme", "ACF Pro", "CyberSource", "TNT", "Mainfreight", "Cloudflare"],
    link: "https://ozcutweldingtables.com.au/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fozcutweldingtables.com.au?w=1200&h=800",
    position: "Senior WordPress Developer",
    duration: "June 2026 - Present",
    summary: "I rebuilt Ozcut Abrasives into Ozcut Welding Tables, replacing an Elementor storefront with a fully custom-coded WooCommerce theme built from the group designer's Figma files. I had already taken over checkout fixes and PageSpeed work on the legacy site before the rebuild started.",
    wins: [
      { icon: Wrench, text: "Migrated off Elementor to a fully custom-coded theme, cutting the plugin count to under 10." },
      { icon: Truck, text: "Split TNT/Mainfreight routing so welding tables ship on the heavy goods carrier while smaller items stay on standard freight." },
      { icon: CreditCard, text: "Wired up CyberSource card payments with real-time, Australia-wide shipping rates at checkout." },
      { icon: Shield, text: "Secured checkout with Cloudflare Turnstile and locked down the domain with custom firewall rules and DNS records (SPF/DKIM)." },
      { icon: Bot, text: "Site is being surfaced by AI chat assistants (ChatGPT, Gemini) as a recommendation for welding table searches in Australia." },
    ]
  },
  {
    slug: "the-full-grip",
    title: "The Full Grip",
    description: "Multi-region WooCommerce multisite serving Australia and Canada.",
    tech: ["WordPress", "WooCommerce", "PHP", "Custom Theme", "Multisite", "Airwallex", "Freightcom", "Cloudflare"],
    link: "https://thefullgrip.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fthefullgrip.com?w=1200&h=800",
    position: "Senior WordPress Developer",
    duration: "April 2026 - June 2026",
    summary: "The Full Grip runs as a WooCommerce multisite — four sites total — serving Australia and Canada independently. I migrated it off Elementor to a fully custom-coded theme, wiring Airwallex payments and Freightcom shipping per region while keeping performance high across every storefront. Still under active maintenance.",
    wins: [
      { icon: Wrench, text: "Migrated off Elementor to a fully custom-coded theme across all four sites, with no page builder left in the stack." },
      { icon: Globe, text: "Multisite architecture serving Australian and Canadian storefronts independently." },
      { icon: CreditCard, text: "Airwallex payments and Freightcom shipping configured per region." },
      { icon: Rocket, text: "Kept Lighthouse performance high across every regional site despite the custom rebuild." },
      { icon: Shield, text: "Secured every regional checkout with Cloudflare Turnstile and hardened each domain with custom rules and DNS records (SPF/DKIM)." },
    ]
  },
  {
    slug: "tenaxis-tables",
    title: "Tenaxis Tables",
    description: "Global WooCommerce multisite with a custom quotation system.",
    tech: ["WordPress", "WooCommerce", "PHP", "Custom Theme", "ACF Pro", "Multisite", "CyberSource", "TNT", "Cloudflare"],
    link: "https://tenaxistables.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftenaxistables.com?w=1200&h=800",
    position: "Senior WordPress Developer",
    duration: "February 2026 - April 2026",
    summary: "Tenaxis Tables was built from the ground up as a global-first WooCommerce multisite, with dedicated subsites for Canada, New Zealand, and the UK on top of worldwide reach. I built a custom quotation and shipping system for destinations where flat-rate shipping isn't viable — it now runs on all three of the group's brands. Still under active maintenance.",
    wins: [
      { icon: Globe, text: "Architected a multisite with dedicated subsites for Canada, New Zealand, and the UK alongside global reach." },
      { icon: BarChart3, text: "Built a custom quotation system that started generating daily quote requests shortly after launch — now reused across all three group brands." },
      { icon: Truck, text: "Worldwide shipping and quoting logic for destinations outside standard flat-rate zones." },
      { icon: Shield, text: "Hardened every subsite's domain with custom Cloudflare rules and managed DNS records (SPF/DKIM) for reliable email delivery." },
    ]
  }
];

export const archivedProjects: Project[] = [
  {
    slug: "skinabcs",
    title: "SkinABCs Ecosystem",
    description: "WooCommerce storefront plus a React Native companion app.",
    tech: ["React Native", "WordPress", "WooCommerce", "PHP", "REST API", "JSON-LD Schema"],
    link: "#",
    position: "Full Stack Developer",
    duration: "April 2023 - May 2024",
    summary: "I built the company's e-commerce site and a companion mobile app for orders and tracking — the whole stack, from server config and payment gateways through to the technical SEO.",
    wins: [
      { icon: Zap, text: "A/B tested a one-step checkout against the default two-step; cart abandonment dropped about 15%." },
      { icon: Rocket, text: "Automated Product and Review schema made a few hundred SKUs rich-snippet eligible." },
      { icon: Wrench, text: "Cut frontend assets and cleaned up slow DB queries; product pages loaded under 2 seconds." },
      { icon: Users, text: "Built a React Native app on the WooCommerce REST API so customers could track orders from their phone." },
    ]
  },
  {
    slug: "america-energy-partners",
    title: "America Energy Partners",
    description: "Renewable energy site delivered against a tight marketing deadline.",
    tech: ["WordPress", "Elementor Pro", "Figma", "Technical SEO"],
    link: "#",
    position: "Web Developer (Elementor)",
    duration: "August 2024 - January 2025",
    summary: "A WordPress build for a renewable energy company, designed in Figma and built in Elementor Pro to hit a time-sensitive campaign launch.",
    wins: [
      { icon: Wrench, text: "Designed the layouts in Figma and built them in Elementor Pro." },
      { icon: Rocket, text: "Built reusable global widgets and templates so new service and landing pages stayed consistent." },
      { icon: Zap, text: "Kept the Elementor DOM shallow and asset loading lean so the page builder didn't tank Core Web Vitals." },
    ]
  },
  {
    slug: "oikos-school-management",
    title: "Oikos School Management",
    description: "Laravel backend for a school management system.",
    tech: ["Laravel", "PHP", "MySQL", "Python", "Bootstrap"],
    link: "#",
    position: "Laravel Full Stack Developer",
    duration: "July 2021 - May 2022",
    summary: "My first developer role. I built the backend for a school management system — the Laravel application, the relational schema behind student and faculty records, and the automation around it.",
    wins: [
      { icon: Wrench, text: "Designed the Laravel and MySQL system for student and faculty records." },
      { icon: Zap, text: "Wrote Python scripts to batch the admin data processing staff had been doing by hand." },
      { icon: Rocket, text: "Built RESTful routing to support complex scheduling and task management operations." },
    ]
  }
];

export const skills = [
  // WordPress
  "Custom Themes", "Custom Plugins", "ACF Pro", "WooCommerce", "Multisite", "Elementor", "Divi",
  // Frontend
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "React Native", "Tailwind CSS", "SCSS", "Vite",
  // Backend
  "PHP", "Laravel", "MySQL", "REST API", "GraphQL", "Python",
  // E-commerce
  "CyberSource", "Airwallex", "TNT", "Mainfreight", "Freightcom",
  // SEO & analytics
  "Technical SEO", "Core Web Vitals", "JSON-LD Schema", "GA4", "GTM", "Search Console", "Google Ads", "Microsoft Clarity",
  // Hosting & infra
  "Kinsta", "WP Engine", "Cloudflare", "Google Cloud", "Docker", "DNS (SPF/DKIM)",
  // Automation
  "HubSpot", "Zapier", "n8n", "Local LLM Hosting", "Chatbot Integrations"
];

export const allProjects: Project[] = [
  ...ecommerceProjects,
  ...leadGenProjects,
  ...archivedProjects,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}
