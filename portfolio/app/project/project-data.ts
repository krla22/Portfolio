import { Zap, Shield, Rocket, Users, Wrench } from 'lucide-react';

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
    description: "The leading auto glass dealership for Arizona, Florida, and South Carolina.",
    tech: ["WordPress", "ACF Pro", "PHP", "HubSpot", "GA4", "n8n", "Kinsta", "Cloudflare", "Zapier"],
    link: "https://nuvisionautoglass.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fnuvisionautoglass.com?w=600&h=400",
    lighthouseImage: "/lighthouse/nv-desktop.png",
    position: "Full Stack Web Developer | Lead WordPress Developer",
    duration: "April 2025 - Present",
    summary: "As the lead developer, I directed a team in a complete rebuild of NuVision's entire WordPress ecosystem. We modernized their legacy system into a scalable, high-performance, and modular architecture designed for 24/7 uptime and high-volume lead generation.",
    wins: [
      { icon: Rocket, text: "Raised Lighthouse scores from 30 to 95+." },
      { icon: Zap, text: "Improved form submission speed from 7 seconds to under 1 second." },
      { icon: Users, text: "Increased qualified lead volume by 30%+ across three new state markets." },
      { icon: Wrench, text: "Automated publishing workflows, cutting manual marketing effort by 40%." },
    ]
  },
  {
    slug: "nurosparx",
    title: "NuroSparX",
    description: "A tech-driven company co-founded to deliver scalable WordPress solutions.",
    tech: ["WordPress", "ACF Pro", "PHP", "GTM", "GA4", "SEO", "Hostinger", "Calendly"],
    link: "https://nurosparx.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fnurosparx.com?w=600&h=400",
    lighthouseImage: "/lighthouse/nx-desktop.png",
    position: "Lead Web Developer | Technical Project Lead",
    duration: "July 2025 - Present",
    summary: "As a co-founder and the technical lead, I manage and mentor developer teams to build client-facing websites and growth platforms. I am responsible for setting coding standards, managing project architecture, and integrating advanced analytics and automation to improve client ROI.",
    wins: [
      { icon: Wrench, text: "Cut development cycles by 40% using reusable, modular ACF frameworks." },
      { icon: Rocket, text: "Enhanced client SEO and UX, reducing bounce rates by an average of 20%." },
      { icon: Zap, text: "Deployed AI-powered automations, reducing manual marketing tasks by 60%." },
      { icon: Shield, text: "Established security and disaster recovery protocols to maintain 99.9% uptime." },
    ]
  },
  {
    slug: "united-law",
    title: "United Law",
    description: "A professional, high-trust website for a Florida & Texas-based law firm.",
    tech: ["WordPress", "ACF Pro", "PHP", "SEO", "Lead Generation", "Kinsta", "HubSpot", "Zapier"],
    link: "https://unitedlawpa.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Funitedlawpa.com?w=600&h=400",
    client: "NuroSparX Client",
    lighthouseImage: "/lighthouse/ul-desktop.png",
    position: "Lead Web Developer (via NuroSparX)",
    duration: "July 2025 - Present",
    summary: "I led the development of a custom, high-performance WordPress site for a law firm operating in Florida and Texas. The primary goal was to establish a professional, trustworthy brand presence while building a strong technical SEO foundation to capture local search traffic.",
    wins: [
      { icon: Rocket, text: "Built with a strong focus on technical SEO to drive local search visibility." },
      { icon: Users, text: "Engineered clear calls-to-action integrated with HubSpot for lead capture." },
      { icon: Wrench, text: "Developed using a custom, modular ACF framework for long-term scalability." },
    ]
  },
  {
    slug: "integrate-iq",
    title: "Integrate IQ",
    description: "A modern marketing site for a HubSpot Diamond Partner specializing in CRM.",
    tech: ["WordPress", "ACF Pro", "PHP", "SEO", "HubSpot", "WPEngine", "Zapier"],
    link: "https://integrateiq.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fintegrateiq.com?w=600&h=400",
    client: "NuroSparX Client",
    lighthouseImage: "/lighthouse/iq-desktop.png",
    position: "Lead Web Developer (via NuroSparX)",
    duration: "July 2025 - Present",
    summary: "I developed the primary marketing website for Integrate IQ, a HubSpot Diamond Partner. The focus was on a clean, professional design that showcased their expertise in complex CRM work, data migrations, and systems integrations. The site was deeply integrated with their own marketing stack (HubSpot and Zapier) to effectively capture and nurture B2B leads.",
    wins: [
      { icon: Zap, text: "Fully integrated with HubSpot and Zapier for seamless lead nurturing." },
      { icon: Wrench, text: "Built with a custom, high-performance ACF Pro theme." },
      { icon: Rocket, text: "Optimized for technical SEO to attract a B2B audience." },
    ]
  },
  {
    slug: "the-optico",
    title: "The Optico",
    description: "A multi-channel sales website focused on insurance and claims processing.",
    tech: ["WordPress", "ACF Pro", "PHP", "HubSpot", "GA4", "Kinsta"],
    link: "https://theoptico.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftheoptico.com?w=600&h=400",
    client: "NuVision Sister Company",
    lighthouseImage: "/lighthouse/to-desktop.png",
    position: "Lead Web Developer (via NuVision)",
    duration: "April 2025 - Present",
    summary: "I developed the website for The Optico, a sister company of NuVision focused on multi-channel sales for the insurance and claims industry. The site was built on the same high-performance Kinsta stack and included lead generation funnels integrated with HubSpot and GA4 to track both B2B and B2C campaign performance.",
    wins: [
      { icon: Rocket, text: "Built on a high-performance, scalable Kinsta architecture." },
      { icon: Zap, text: "Integrated advanced GA4 and HubSpot tracking for multi-channel campaigns." },
      { icon: Wrench, text: "Custom-coded with ACF Pro for easy content management by their sales team." },
    ]
  },
];

export const archivedProjects: Project[] = [
  {
    slug: "america-energy-partners",
    title: "America Energy Partners",
    description: "A rapid-deployment, SEO-optimized site for a renewable energy company.",
    tech: ["WordPress", "ACF Pro", "PHP", "SEO", "Responsive Design"],
    link: "#",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=AEP+(Private)",
    position: "WordPress Website Development (Project-based)",
    duration: "Sept. 2024 - Oct. 2024",
    summary: "I was brought on for a fast-turnaround project to build a high-performance WordPress site for a renewable energy company. The entire site was delivered in under one month to support a time-sensitive marketing campaign.",
    wins: [
      { icon: Rocket, text: "Delivered a complete, SEO-optimized website in under 1 month." },
      { icon: Wrench, text: "Built responsive landing pages that boosted customer inquiries." },
      { icon: Zap, text: "Heavily optimized site performance for fast load times during promotions." },
    ]
  },
  {
    slug: "skinabcs",
    title: "SkinABCs E-commerce & App",
    description: "A full-stack e-commerce storefront and React Native mobile application.",
    tech: ["React Native", "WordPress", "PHP", "Firebase", "E-commerce"],
    link: "#",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=SkinABCs",
    position: "Full Stack Website and Mobile App Developer",
    duration: "October 2022 - April 2024",
    summary: "I built and launched the company's entire digital platform: an e-commerce storefront using WordPress/PHP and a cross-platform mobile app using React Native. The systems were integrated via Firebase to streamline sales, payment processing, and order management.",
    wins: [
      { icon: Zap, text: "Integrated Firebase for real-time order tracking across devices." },
      { icon: Wrench, text: "Designed and built a database-driven order tracking system and e-wallet." },
      { icon: Rocket, text: "Scaled digital sales channels and significantly reduced customer support requests." },
    ]
  },
  {
    slug: "oikos-school-management",
    title: "Oikos School Management",
    description: "A full-stack school management platform built with Laravel and Bootstrap.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Python"],
    link: "#",
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Oikos+Tech",
    position: "Full Stack Website Developer (Client-based)",
    duration: "July 2022 - December 2022",
    summary: "I collaborated with a team to design and build a comprehensive school management website. The platform used a Laravel/MySQL backend to handle scheduling and tasks, with a responsive Bootstrap front-end for staff and student usability.",
    wins: [
      { icon: Wrench, text: "Automated backend administrative tasks using Python scripts." },
      { icon: Zap, text: "Streamlined team workflows and collaboration using GitHub." },
      { icon: Rocket, text: "Designed an accessible, mobile-ready interface for teachers and students." },
    ]
  },
];

export const skills = [
  "WordPress (Custom Themes)", "ACF Pro", "React", "Next.js", "PHP", "Laravel",
  "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "React Native", "MySQL", "REST API",
  "Technical SEO", "GA4", "GTM", "HubSpot", "Zapier", "n8n", "Kinsta", "WPEngine", "Hostinger", "Cloudflare"
];