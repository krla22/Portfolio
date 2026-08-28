export type TimelineEntry = {
  company: string;
  subtitle?: string;
  role: string;
  duration: string;
  current?: boolean;
  description: string;
  highlights: string[];
};

export const timelineData: TimelineEntry[] = [
  {
    company: "Oikos Technologies",
    role: "Laravel Full Stack Developer",
    duration: "July 2021 - May 2022",
    description:
      "Architected the backend infrastructure for a comprehensive school management system using PHP frameworks.",
    highlights: [
      "Developed scalable backend logic and RESTful routing using the Laravel framework to support complex scheduling and task management operations.",
      "Designed and managed relational MySQL databases, optimizing queries and schemas to handle large datasets for student and faculty records.",
      "Wrote Python scripts to automate administrative data processing and utilized GitHub for version control, streamlining the development pipeline.",
    ],
  },
  {
    company: "TQ Travel Solutions",
    role: "Web Designer & Digital Creative",
    duration: "July 2022 - February 2023",
    description:
      "Created and managed the travel agency's website and digital branding assets, focusing on visual design, marketing content, and customer engagement.",
    highlights: [
      "Produced high quality digital assets using Adobe Photoshop, Canva, and Premiere Pro, creating banners and video ads that strengthened the brand's online authority.",
      "Designed and deployed the agency's full website interface, focusing on visual hierarchy and user journey flow to maximize customer engagement.",
      "Applied responsive design principles and visual storytelling techniques to reduce bounce rates and increase session duration for organic visitors.",
    ],
  },
  {
    company: "SkinABCs Skincare",
    role: "Full Stack Developer & E-Commerce SEO Specialist (React/React Native)",
    duration: "April 2023 - May 2024",
    description:
      "Built and launched the company's e-commerce website and mobile app to streamline customer purchases, order tracking, and payment processing, directly improving sales and customer retention.",
    highlights: [
      "Built and launched a full-stack e-commerce ecosystem, handling everything from server configuration to technical SEO and payment gateways.",
      "Developed a custom WooCommerce theme with modified checkout flows (2-step to 1-step A/B testing) that reduced cart abandonment by 15%.",
      "Implemented automated Product and Review Schema (JSON-LD), ensuring rich snippet eligibility for hundreds of SKUs immediately upon launch.",
      "Built a React Native mobile app synced with the WooCommerce database via REST API, allowing customers to track orders in real-time.",
    ],
  },
  {
    company: "America Energy Partners",
    role: "Elementor Specialist & Web Developer",
    duration: "August 2024 - January 2025",
    description:
      "Delivered a high-performance WordPress website for a renewable energy company, focusing on usability, SEO, and fast turnaround to support time-sensitive marketing goals.",
    highlights: [
      "Constructed pixel-perfect, responsive layouts using Elementor Pro, translating self-made Figma designs into live, functional web pages with strict adherence to brand guidelines.",
      "Built reusable global widgets and theme templates to streamline site expansion, ensuring consistent structure across all landing pages and service areas.",
      "Optimized Elementor asset loading and container structures to minimize DOM depth, ensuring design did not compromise site speed or SEO performance.",
    ],
  },
  {
    company: "NuVision Auto Glass",
    role: "Full Stack Web Developer | Lead Growth Engineer",
    duration: "April 2025 - Present",
    current: true,
    description:
      "Lead developer overseeing the multi-state digital presence (AZ, FL, SC), responsible for the entire technical website rebuild and organic growth infrastructure.",
    highlights: [
      "Modernized a legacy WordPress site into a high-performance system, improving load times from 7s to 1s and raising Lighthouse scores from 30 to 95+ to secure mobile rankings.",
      "Built and optimized a programmatic landing page architecture for multi-state expansion, driving a 30%+ increase in lead volume through localized \"City + Service\" targeting.",
      "Integrated GA4, GTM, and custom event tracking to visualize checkout behavior, then re-engineered the lead capture forms to maximize conversion rates.",
      "Established disaster recovery protocols and 24/7 monitoring systems, maintaining 99.9% uptime for business-critical lead generation portals during high-traffic ad campaigns.",
    ],
  },
  {
    company: "NuroSparX",
    subtitle: "Co-founded with NuVision Auto Glass's Vice Manager",
    role: "Senior Lead Web Developer & Technical SEO Lead",
    duration: "July 2025 - Present",
    current: true,
    description:
      "Senior SEO lead and developer managing teams to deliver client-facing websites and growth platforms for US businesses. Serving as technical lead for a business servicing high-profile clients, including Integrate IQ (HubSpot Diamond Partner), United Law, and Hygeia Health.",
    highlights: [
      "Directed technical strategy for Integrate IQ (HubSpot Diamond Partner) and United Law, managing site migrations, directory listings, and API integrations that aligned development with aggressive marketing goals.",
      "Built modular WordPress frameworks using reusable ACF Pro modules and custom Schema automation, cutting development cycles by 40% while ensuring perfect structured page data.",
      "Managed and mentored a distributed team of developers and freelancers, enforcing semantic HTML standards and rigorous QA processes that reduced technical debt and on-page SEO errors.",
      "Engineered custom Filevine API integrations for legal clients and real-time HubSpot data syncs, ensuring seamless data flow between the frontend and CRM.",
    ],
  },
];

export const education = {
  school: "Polytechnic University of the Philippines",
  degree: "Bachelor of Science in Computer Engineering",
  duration: "2020 - 2024",
};
