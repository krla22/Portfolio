import React from 'react';
import { Zap, Shield, Rocket, Users, Wrench, BarChart3 } from 'lucide-react';

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
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

export const projects: Project[] = [
  {
    slug: "nuvision-auto-glass",
    title: "NuVision Auto Glass",
    description: "Enterprise-grade digital transformation for a multi-state auto glass network.",
    tech: ["WordPress", "ACF Pro", "PHP", "HubSpot", "GA4", "n8n", "Kinsta", "Cloudflare", "Zapier"],
    link: "https://nuvisionautoglass.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fnuvisionautoglass.com?w=600&h=400",
    lighthouseImage: "/lighthouse/nv-desktop.png",
    position: "Lead Full Stack Engineer",
    duration: "April 2025 - Present",
    summary: "I architected the complete digital transformation of NuVision's legacy systems. Leading the migration to a modular WordPress architecture, I focused on Core Web Vitals and Technical SEO to support aggressive expansion into Florida and South Carolina. The new infrastructure supports high-volume traffic with zero downtime.",
    wins: [
      { icon: Rocket, text: "Achieved 95+ Mobile & Desktop Lighthouse scores (up from <30)." },
      { icon: Zap, text: "Engineered sub-second load times, reducing form abandonment by 60%." },
      { icon: Users, text: "Scaled infrastructure to handle 30% increase in qualified leads across new markets." },
      { icon: Wrench, text: "Orchestrated full marketing automation pipelines via n8n and Zapier." },
    ]
  },
  {
    slug: "nurosparx",
    title: "NuroSparX",
    description: "Technical leadership for a high-growth digital agency and startup incubator.",
    tech: ["WordPress", "ACF Pro", "PHP", "GTM", "GA4", "Technical SEO", "Hostinger", "Calendly"],
    link: "https://nurosparx.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fnurosparx.com?w=600&h=400",
    lighthouseImage: "/lighthouse/nx-desktop.png",
    position: "Technical Lead & SEO Strategist",
    duration: "July 2025 - Present",
    summary: "As Co-Founder and Technical Lead, I define the engineering standards and SEO strategies for the agency. I mentor the development team, overseeing the architecture of client solutions to ensure they are technically sound, secure, and optimized for search engines from day one.",
    wins: [
      { icon: Wrench, text: "Standardized modular development frameworks, cutting delivery time by 40%." },
      { icon: Rocket, text: "Implemented 'SEO-First' architecture, reducing average client bounce rates by 20%." },
      { icon: Zap, text: "Deployed AI-driven workflows to automate 60% of internal reporting tasks." },
      { icon: Shield, text: "Architected disaster recovery protocols ensuring 99.9% agency uptime." },
    ]
  },
  {
    slug: "united-law",
    title: "United Law",
    description: "A high-authority legal platform engineered for local search dominance.",
    tech: ["WordPress", "ACF Pro", "PHP", "Schema Markup", "Local SEO", "Kinsta", "HubSpot"],
    link: "https://unitedlawpa.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Funitedlawpa.com?w=600&h=400",
    client: "NuroSparX Client",
    lighthouseImage: "/lighthouse/ul-desktop.png",
    position: "Lead Developer & SEO Specialist",
    duration: "July 2025 - Present",
    summary: "I engineered a custom WordPress solution for a multi-state law firm, prioritizing trust signals and Technical SEO. The project required advanced Schema markup implementation and a high-performance codebase to compete in the highly competitive legal SEM landscape of Florida and Texas.",
    wins: [
      { icon: Rocket, text: "Implemented advanced JSON-LD Schema for maximum local search visibility." },
      { icon: Users, text: "Optimized conversion paths, integrating HubSpot for immediate lead capture." },
      { icon: Wrench, text: "Delivered a component-based design system for rapid landing page deployment." },
    ]
  },
  {
    slug: "integrate-iq",
    title: "Integrate IQ",
    description: "B2B marketing engine for a HubSpot Diamond Partner.",
    tech: ["WordPress", "ACF Pro", "PHP", "Technical SEO", "HubSpot API", "WPEngine"],
    link: "https://integrateiq.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fintegrateiq.com?w=600&h=400",
    client: "NuroSparX Client",
    lighthouseImage: "/lighthouse/iq-desktop.png",
    position: "Senior Web Developer",
    duration: "July 2025 - Present",
    summary: "For this HubSpot Diamond Partner, I developed a high-performance marketing site designed to showcase complex CRM integrations. The site utilizes a headless-hybrid approach to fetch data from HubSpot while maintaining the SEO benefits of WordPress.",
    wins: [
      { icon: Zap, text: "Seamless bi-directional data sync with HubSpot CRM via API." },
      { icon: Wrench, text: "Custom-built ACF architecture allowing for strict brand consistency." },
      { icon: Rocket, text: "Optimized Core Web Vitals to capture high-intent B2B organic traffic." },
    ]
  },
  {
    slug: "the-optico",
    title: "The Optico",
    description: "Multi-channel insurance sales platform with advanced analytics.",
    tech: ["WordPress", "ACF Pro", "PHP", "HubSpot", "GA4", "Kinsta"],
    link: "https://theoptico.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftheoptico.com?w=600&h=400",
    client: "NuVision Sister Company",
    lighthouseImage: "/lighthouse/to-desktop.png",
    position: "Lead Full Stack Developer",
    duration: "April 2025 - Present",
    summary: "I led the development of a scalable sales platform for the insurance sector. Leveraging the Kinsta stack, I integrated complex tracking pixels and server-side tagging (GTM) to ensure accurate attribution across diverse ad networks.",
    wins: [
      { icon: Rocket, text: "Built on high-availability Kinsta architecture for peak ad-traffic loads." },
      { icon: BarChart3, text: "Implemented server-side tracking for 100% accurate ROAS measurement." },
      { icon: Wrench, text: "Created a simplified CMS interface for non-technical sales teams." },
    ]
  }
];

export const archivedProjects: Project[] = [
  {
    slug: "america-energy-partners",
    title: "America Energy Partners",
    description: "Rapid-deployment renewable energy platform.",
    tech: ["WordPress", "ACF Pro", "PHP", "Technical SEO"],
    link: "#",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=AEP+(Private)",
    position: "Contract Developer",
    duration: "Sept. 2024 - Oct. 2024",
    summary: "Executed a rapid-turnaround development cycle for a renewable energy firm. Delivered a fully optimized, secure, and SEO-ready site in under 30 days to meet critical campaign deadlines.",
    wins: [
      { icon: Rocket, text: "Zero-to-Launch in under 4 weeks without technical debt." },
      { icon: Wrench, text: "Modular landing page system for A/B testing campaigns." },
      { icon: Zap, text: "100/100 Performance Score on Google PageSpeed Insights." },
    ]
  },
  {
    slug: "skinabcs",
    title: "SkinABCs Ecosystem",
    description: "Full-stack E-commerce & React Native Mobile App.",
    tech: ["React Native", "WordPress", "PHP", "Firebase", "REST API"],
    link: "#",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=SkinABCs",
    position: "Full Stack Engineer",
    duration: "October 2022 - April 2024",
    summary: "Architected a cross-platform digital ecosystem. I built a React Native mobile app and a synchronous WordPress e-commerce store, unified by a custom Firebase backend for real-time inventory and order management.",
    wins: [
      { icon: Zap, text: "Real-time database synchronization via Firebase." },
      { icon: Wrench, text: "Developed custom E-Wallet and Order Tracking systems." },
      { icon: Rocket, text: "Single codebase strategy reduced maintenance costs by 50%." },
    ]
  },
  {
    slug: "oikos-school-management",
    title: "Oikos School Management",
    description: "SaaS-style school management platform.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Python"],
    link: "#",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Oikos+Tech",
    position: "Backend Developer",
    duration: "July 2022 - December 2022",
    summary: "Co-developed a comprehensive school management system. I focused on the Laravel backend architecture, designing efficient MySQL schemas and Python automation scripts for administrative workflows.",
    wins: [
      { icon: Wrench, text: "Automated complex admin tasks with Python & Cron jobs." },
      { icon: Zap, text: "Optimized SQL queries for fast reporting on large datasets." },
      { icon: Rocket, text: "Built secure Role-Based Access Control (RBAC) for users." },
    ]
  }
];

export const skills = [
  // Core & Architecture
  "Technical SEO", "System Architecture", "React", "Next.js", "PHP", "Laravel", "React Native",
  // Frontend
  "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "SCSS", "HTML5", 
  // Backend & CMS
  "WordPress (Headless/Custom)", "ACF Pro", "MySQL", "REST API", "GraphQL",
  // Ops & Analytics
  "GA4", "GTM", "HubSpot", "n8n", "Zapier", "Kinsta", "Cloudflare", "Docker"
];