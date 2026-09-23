import React from 'react';
import { Zap, Shield, Rocket, Users, Wrench, BarChart3, Truck, CreditCard, Bot, Globe } from 'lucide-react';

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  /** Omitted for private / NDA work; the card renders a local placeholder instead. */
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
    description: "I rebuilt their old site and handled organic growth across three states.",
    tech: ["WordPress", "ACF Pro", "PHP", "HubSpot", "GA4", "GTM", "Kinsta", "Cloudflare"],
    link: "https://nuvisionautoglass.com/",
    image: "/projects/nuvisionautoglass.png",
    lighthouseImage: "/lighthouse/nv-desktop.png",
    position: "Lead Web Developer",
    duration: "April 2025 - December 2025",
    summary: "NuVision had an old, slow WordPress site and locations in Arizona, Florida, and South Carolina. I rebuilt the site with speed as the main goal, then set up landing pages that could grow with them as they opened in new states. I also looked after their organic growth the whole time I was there.",
    wins: [
      { icon: Rocket, text: "Got the load time down from 7s to 1s, and the Lighthouse score up from 30 to 92." },
      { icon: Users, text: "Built City + Service landing pages for each new state. Leads went up by about 30%." },
      { icon: BarChart3, text: "Set up GA4, GTM, and custom event tracking, then fixed the lead forms based on where people were dropping off." },
      { icon: Zap, text: "Pulled in Google reviews automatically so each location page showed real, up-to-date reviews." },
      { icon: Shield, text: "Put monitoring and backups in place before the big ad campaigns went live." },
    ]
  },
  {
    slug: "nurosparx",
    title: "NuroSparX",
    description: "A web agency I co-founded, building sites for US businesses.",
    tech: ["WordPress", "ACF Pro", "PHP", "Schema Automation", "GTM", "GA4", "HubSpot API", "Filevine API"],
    link: "https://nurosparx.com/",
    image: "/projects/nurosparx.png",
    lighthouseImage: "/lighthouse/nx-desktop.png",
    position: "Co-founder & Lead Developer",
    duration: "July 2025 - December 2025",
    summary: "I started this agency with NuVision Auto Glass's vice manager and ran it alongside my NuVision job. I was the tech lead for a small team of devs and freelancers, and we built sites for US clients like Integrate IQ (a HubSpot Diamond Partner), United Law, and Hygeia Health.",
    wins: [
      { icon: Wrench, text: "Built a reusable WordPress framework on ACF Pro with schema baked in, so we never started a client site from zero." },
      { icon: Rocket, text: "Led the technical side for Integrate IQ and United Law: migrations, directory listings, API integrations, and Google Ads conversion tracking." },
      { icon: Users, text: "Managed the devs and freelancers, and made sure everything got a proper QA pass before it shipped." },
      { icon: Bot, text: "Automated a lot of the marketing team's data entry and content updates with Zapier and AI tools." },
    ]
  },
  {
    slug: "united-law",
    title: "United Law",
    description: "A law firm site built to show up in local search in Florida and Texas.",
    tech: ["WordPress", "ACF Pro", "PHP", "JSON-LD Schema", "Local SEO", "Kinsta", "Filevine API"],
    link: "https://unitedlawpa.com/",
    image: "/projects/unitedlawpa.png",
    client: "NuroSparX Client",
    lighthouseImage: "/lighthouse/ul-desktop.png",
    position: "Lead Developer",
    duration: "July 2025 - December 2025",
    summary: "A custom WordPress build for a law firm working in Florida and Texas. Legal search is really competitive, so the site needed to load fast, look trustworthy, and have its structured data done properly.",
    wins: [
      { icon: Rocket, text: "Added JSON-LD schema to every practice area and location page to help with local search." },
      { icon: Wrench, text: "Hooked the intake forms up to Filevine through their API, so new cases went straight into the firm's system." },
      { icon: Users, text: "Built a set of ACF Pro blocks so the team could put together new landing pages quickly." },
    ]
  },
  {
    slug: "integrate-iq",
    title: "Integrate IQ",
    description: "A B2B marketing site for a HubSpot Diamond Partner.",
    tech: ["WordPress", "ACF Pro", "PHP", "Technical SEO", "HubSpot API", "GTM", "WP Engine"],
    link: "https://integrateiq.com/",
    image: "/projects/integrateiq.png",
    client: "NuroSparX Client",
    lighthouseImage: "/lighthouse/iq-desktop.png",
    position: "Lead Developer",
    duration: "July 2025 - December 2025",
    summary: "I moved Integrate IQ's site over and set up the marketing side: their forms sync live with HubSpot, the paid campaigns have GTM pixels, and Google Ads conversions are tied to real leads.",
    wins: [
      { icon: Zap, text: "Built a live sync between the site's forms and HubSpot." },
      { icon: BarChart3, text: "Set up GTM pixels and Google Ads conversion tracking for their paid campaigns." },
      { icon: Wrench, text: "Built the pages on ACF Pro so the branding stays consistent no matter who edits them." },
    ]
  },
  {
    slug: "the-optico",
    title: "The Optico",
    description: "An insurance sales site where they can see which ads actually work.",
    tech: ["WordPress", "ACF Pro", "PHP", "HubSpot", "GA4", "GTM", "Kinsta"],
    link: "https://theoptico.com/",
    image: "/projects/theoptico.png",
    client: "NuVision Sister Company",
    lighthouseImage: "/lighthouse/to-desktop.png",
    position: "Lead Web Developer",
    duration: "April 2025 - December 2025",
    summary: "A sales site for an insurance business, hosted on Kinsta. The main job was tracking. They were running ads on a bunch of networks, so I set up pixels and server-side tagging so they could see which spend was actually bringing in sales.",
    wins: [
      { icon: Rocket, text: "Hosted it on Kinsta so it holds up when the ad campaigns bring in traffic spikes." },
      { icon: BarChart3, text: "Set up server-side tagging through GTM so the ad numbers match up across every network." },
      { icon: Wrench, text: "Made the admin simple enough for the sales team to update things themselves." },
    ]
  }
];

export const ecommerceProjects: Project[] = [
  {
    slug: "ozcut-welding-tables",
    title: "Ozcut Welding Tables",
    description: "An Australian WooCommerce store that ships heavy tables and small parts on different carriers.",
    tech: ["WordPress", "WooCommerce", "PHP", "Custom Theme", "ACF Pro", "CyberSource", "TNT", "Mainfreight", "Cloudflare"],
    link: "https://ozcutweldingtables.com.au/",
    image: "/projects/ozcutweldingtables.png",
    // TODO: add public/lighthouse/oz-desktop.png, then uncomment:
    // lighthouseImage: "/lighthouse/oz-desktop.png",
    position: "Senior WordPress Developer",
    duration: "June 2026 - Present",
    summary: "Ozcut Abrasives was an Elementor store. I rebuilt it as Ozcut Welding Tables with a fully custom WooCommerce theme, working from our designer's Figma files. Before the rebuild I'd already been fixing checkout issues and PageSpeed on the old site, so I knew where the problems were.",
    wins: [
      { icon: Wrench, text: "Got rid of Elementor and custom-coded the whole theme. The site now runs on fewer than 10 plugins." },
      { icon: Truck, text: "Split shipping between TNT and Mainfreight, so welding tables go out on the heavy goods carrier and smaller items stay on standard freight." },
      { icon: CreditCard, text: "Set up CyberSource card payments with live shipping rates for anywhere in Australia." },
      { icon: Shield, text: "Added Cloudflare Turnstile to checkout, plus firewall rules and SPF/DKIM records to lock down the domain." },
    ]
  },
  {
    slug: "the-full-grip",
    title: "The Full Grip",
    description: "A WooCommerce multisite with separate stores for Australia and Canada.",
    tech: ["WordPress", "WooCommerce", "PHP", "Custom Theme", "Multisite", "Airwallex", "Freightcom", "Cloudflare"],
    link: "https://thefullgrip.com/",
    image: "/projects/thefullgrip.png",
    // TODO: add public/lighthouse/fg-desktop.png, then uncomment:
    // lighthouseImage: "/lighthouse/fg-desktop.png",
    position: "Senior WordPress Developer",
    duration: "April 2026 - June 2026",
    summary: "The Full Grip is four WooCommerce sites in one multisite, with Australia and Canada each running on their own. I moved all of it off Elementor to a custom theme and set up Airwallex payments and Freightcom shipping for each region, without letting the speed drop. I still look after it today.",
    wins: [
      { icon: Wrench, text: "Replaced Elementor with a custom-coded theme on all four sites. There's no page builder left." },
      { icon: Globe, text: "Set up the multisite so the Australian and Canadian stores run separately." },
      { icon: CreditCard, text: "Configured Airwallex payments and Freightcom shipping for each region." },
      { icon: Rocket, text: "Kept Lighthouse scores high on every regional site after the rebuild." },
      { icon: Shield, text: "Added Cloudflare Turnstile to every checkout, plus custom rules and SPF/DKIM records on each domain." },
    ]
  },
  {
    slug: "tenaxis-tables",
    title: "Tenaxis Tables",
    description: "A global WooCommerce multisite with its own quoting system.",
    tech: ["WordPress", "WooCommerce", "PHP", "Custom Theme", "ACF Pro", "Multisite", "CyberSource", "TNT", "Cloudflare"],
    link: "https://tenaxistables.com/",
    image: "/projects/tenaxistables.png",
    // TODO: add public/lighthouse/tx-desktop.png, then uncomment:
    // lighthouseImage: "/lighthouse/tx-desktop.png",
    position: "Senior WordPress Developer",
    duration: "February 2026 - April 2026",
    summary: "I built Tenaxis from scratch to sell worldwide, with separate sites for Canada, New Zealand, and the UK. Flat-rate shipping doesn't work for a lot of destinations, so I built a custom quote and shipping system for those orders. It worked well enough that all three of the group's brands use it now. I still look after the site today.",
    wins: [
      { icon: Globe, text: "Set up the multisite with its own sites for Canada, New Zealand, and the UK, plus a global store." },
      { icon: BarChart3, text: "Built a custom quote system that was getting quote requests every day soon after launch. All three group brands use it now." },
      { icon: Truck, text: "Wrote the shipping and quoting logic for places flat-rate shipping doesn't cover." },
      { icon: Shield, text: "Set up Cloudflare rules and SPF/DKIM records on every site's domain so emails actually land." },
    ]
  }
];

export const archivedProjects: Project[] = [
  {
    slug: "skinabcs",
    title: "SkinABCs Ecosystem",
    description: "A WooCommerce store plus a React Native app to go with it.",
    tech: ["React Native", "WordPress", "WooCommerce", "PHP", "REST API", "JSON-LD Schema"],
    link: "#",
    position: "Full Stack Developer",
    duration: "April 2023 - May 2024",
    summary: "I built the company's online store and a mobile app for orders and tracking. I handled all of it, from the server setup and payment gateways to the SEO.",
    wins: [
      { icon: Zap, text: "Tested a one-step checkout against the usual two-step one. Cart abandonment dropped by about 15%." },
      { icon: Rocket, text: "Automated Product and Review schema so a few hundred products could show up as rich results in Google." },
      { icon: Wrench, text: "Trimmed the frontend and fixed slow database queries, so product pages loaded in under 2 seconds." },
      { icon: Users, text: "Built a React Native app on the WooCommerce REST API so customers could track orders on their phone." },
    ]
  },
  {
    slug: "america-energy-partners",
    title: "America Energy Partners",
    description: "A renewable energy site built on a tight deadline.",
    tech: ["WordPress", "Elementor Pro", "Figma", "Technical SEO"],
    link: "#",
    position: "Web Developer (Elementor)",
    duration: "August 2024 - January 2025",
    summary: "A WordPress site for a renewable energy company. I designed it in Figma and built it in Elementor Pro so it'd be ready in time for a campaign launch.",
    wins: [
      { icon: Wrench, text: "Designed the pages in Figma, then built them in Elementor Pro." },
      { icon: Rocket, text: "Made reusable widgets and templates so new service and landing pages all stayed consistent." },
      { icon: Zap, text: "Kept the Elementor layouts light so the page builder didn't slow the site down." },
    ]
  },
  {
    slug: "oikos-school-management",
    title: "Oikos School Management",
    description: "The Laravel backend for a school management system.",
    tech: ["Laravel", "PHP", "MySQL", "Python", "Bootstrap"],
    link: "#",
    position: "Laravel Full Stack Developer",
    duration: "July 2021 - May 2022",
    summary: "This was my first dev job. I built the backend for a school management system: the Laravel app, the database for student and faculty records, and some automation to save the staff time.",
    wins: [
      { icon: Wrench, text: "Designed the Laravel app and MySQL database for student and faculty records." },
      { icon: Zap, text: "Wrote Python scripts for admin work the staff used to do by hand." },
      { icon: Rocket, text: "Built the REST routes behind the scheduling and task management features." },
    ]
  }
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "WordPress", items: ["Custom Themes", "Custom Plugins", "ACF Pro", "WooCommerce", "Multisite", "Elementor", "Divi"] },
  { label: "Frontend", items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "React Native", "Tailwind CSS", "SCSS", "Vite"] },
  { label: "Backend", items: ["PHP", "Laravel", "MySQL", "REST API", "GraphQL", "Python"] },
  { label: "E-commerce", items: ["CyberSource", "Airwallex", "TNT", "Mainfreight", "Freightcom"] },
  { label: "SEO & Analytics", items: ["Technical SEO", "Core Web Vitals", "JSON-LD Schema", "GA4", "GTM", "Search Console", "Google Ads", "Microsoft Clarity"] },
  { label: "Hosting & Infra", items: ["Kinsta", "WP Engine", "Cloudflare", "Google Cloud", "Docker", "DNS (SPF/DKIM)"] },
  { label: "Automation", items: ["HubSpot", "Zapier", "n8n", "Local LLM Hosting", "Chatbot Integrations"] },
];

export const allProjects: Project[] = [
  ...ecommerceProjects,
  ...leadGenProjects,
  ...archivedProjects,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}
