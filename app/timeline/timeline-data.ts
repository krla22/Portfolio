export type TimelineProject = {
  name: string;
  duration: string;
  current?: boolean;
  maintaining?: boolean;
  description: string;
  highlights?: string[];
};

export type TimelineEntry = {
  company: string;
  subtitle?: string;
  role: string;
  duration: string;
  current?: boolean;
  description: string;
  highlights: string[];
  projects?: TimelineProject[];
};

export const timelineData: TimelineEntry[] = [
  {
    company: "Oikos Technologies",
    role: "Laravel Full Stack Developer",
    duration: "July 2021 - May 2022",
    description:
      "My first dev job. I built the backend for a school management system in Laravel.",
    highlights: [
      "Wrote the backend logic and REST routes behind the scheduling and task management features.",
      "Designed the MySQL database for student and faculty records and kept the queries fast as the data grew.",
      "Wrote Python scripts to automate admin work the staff used to do by hand, and kept everything in GitHub.",
    ],
  },
  {
    company: "TQ Travel Solutions",
    role: "Web Designer & Digital Creative",
    duration: "July 2022 - February 2023",
    description:
      "I looked after the travel agency's website and branding, from the site design to the marketing content.",
    highlights: [
      "Made banners and video ads in Photoshop, Canva, and Premiere Pro.",
      "Designed and launched the agency's whole website, with a focus on making it easy for customers to find what they needed.",
      "Built it to work well on every screen size, which helped keep visitors on the site longer.",
    ],
  },
  {
    company: "SkinABCs Skincare",
    role: "Full Stack Developer & E-Commerce SEO Specialist (React/React Native)",
    duration: "April 2023 - May 2024",
    description:
      "I built the company's online store and a mobile app so customers could buy, pay, and track their orders more easily.",
    highlights: [
      "Handled the whole store myself, from the server setup to the payment gateways and SEO.",
      "Built a custom WooCommerce theme and tested a one-step checkout against the usual two-step one. Cart abandonment dropped by about 15%.",
      "Automated Product and Review schema so a few hundred products could show up as rich results in Google from day one.",
      "Built a React Native app on the WooCommerce REST API so customers could track orders in real time.",
    ],
  },
  {
    company: "America Energy Partners",
    role: "Elementor Specialist & Web Developer",
    duration: "August 2024 - January 2025",
    description:
      "I built a WordPress site for a renewable energy company on a tight deadline, while keeping it fast and SEO-friendly.",
    highlights: [
      "Designed the pages myself in Figma, then built them in Elementor Pro to match the brand.",
      "Made reusable widgets and templates so new landing and service pages stayed consistent.",
      "Kept the Elementor layouts light so the page builder didn't slow the site down or hurt SEO.",
    ],
  },
  {
    company: "NuVision Auto Glass",
    role: "Full Stack Web Developer | Lead Growth Engineer",
    duration: "April 2025 - December 2025",
    description:
      "I was the lead developer for their sites in Arizona, Florida, and South Carolina. I handled the full rebuild and the organic growth side.",
    highlights: [
      "Rebuilt their old WordPress site. Load time went from 7s to 1s and the Lighthouse score went from 30 to 92, which helped their mobile rankings.",
      "Built City + Service landing pages for each new state. Leads went up by more than 30%.",
      "Set up GA4, GTM, and custom event tracking, then fixed the lead forms based on where people were dropping off.",
      "Put monitoring and backups in place before the big ad campaigns went live.",
    ],
  },
  {
    company: "NuroSparX",
    subtitle: "Co-founded with NuVision Auto Glass's Vice Manager",
    role: "Senior Lead Web Developer & Technical SEO Lead",
    duration: "July 2025 - December 2025",
    description:
      "I co-founded this agency and led the technical side, running a team that built sites for US clients like Integrate IQ (a HubSpot Diamond Partner), United Law, and Hygeia Health.",
    highlights: [
      "Led the technical side for Integrate IQ and United Law, including site migrations, directory listings, and API integrations.",
      "Built a reusable WordPress framework on ACF Pro with schema baked in, so we never started a client site from zero.",
      "Managed and mentored our devs and freelancers, and made sure everything got a proper QA pass before it shipped.",
      "Built a Filevine API integration for our legal clients and a live HubSpot sync so form data went straight into the CRM.",
    ],
  },
  {
    company: "Nexus Trade Group Pte Ltd",
    role: "Lead Full Stack Developer",
    duration: "January 2026 - Present",
    current: true,
    description:
      "I'm the lead developer for the group's online stores. I rebuild them from page builders into custom-coded WooCommerce themes for Australia, Canada, New Zealand, and the UK, then keep looking after them once they're live.",
    highlights: [],
    projects: [
      {
        name: "Ozcutabrasives (pre-rebuild)",
        duration: "January 2026",
        description:
          "I took over the old Ozcutabrasives store and fixed what needed fixing before the full rebuild. It later relaunched as Ozcut Welding Tables.",
      },
      {
        name: "Tenaxis Tables",
        duration: "February 2026 - April 2026",
        maintaining: true,
        description:
          "I built Tenaxis from scratch to sell worldwide, with separate sites for Canada, New Zealand, and the UK. I also built a custom quote and shipping system for orders flat-rate shipping doesn't cover. It launched in April 2026 and I still look after it.",
        highlights: [
          "Set up the multisite with its own sites for Canada, New Zealand, and the UK, plus a global store.",
          "Built a custom quote system that was getting quote requests every day soon after launch.",
          "Wrote the shipping and quoting logic for places flat-rate shipping doesn't cover.",
          "Set up Cloudflare rules and SPF/DKIM records on every site's domain.",
        ],
      },
      {
        name: "The Full Grip (rework)",
        duration: "April 2026 - June 2026",
        maintaining: true,
        description:
          "I moved The Full Grip's Australian and Canadian stores off Elementor to a custom-coded theme, without letting the speed drop. It relaunched in June 2026 and I still look after it.",
        highlights: [
          "Replaced Elementor with a custom-coded theme on every site and got the plugin count under 10.",
          "Kept Lighthouse scores high on every regional site after the rebuild.",
          "Tuned the live shipping rates separately for the Australian and Canadian stores.",
          "Added Cloudflare Turnstile to every checkout, plus custom rules and SPF/DKIM records on each domain.",
        ],
      },
      {
        name: "Ozcut Welding Tables",
        duration: "June 2026 - Present",
        current: true,
        description:
          "I rebuilt Ozcutabrasives as Ozcut Welding Tables, swapping the old Elementor store for a custom-coded WooCommerce theme.",
        highlights: [
          "Got rid of Elementor and custom-coded the whole theme. The site now runs on fewer than 10 plugins.",
          "Kept Lighthouse scores high even with all the extra checkout and shipping logic.",
          "Set up live shipping rates at checkout for anywhere in Australia.",
          "Added Cloudflare Turnstile to checkout, plus firewall rules and SPF/DKIM records to lock down the domain.",
        ],
      },
    ],
  },
];

export const education = {
  school: "Polytechnic University of the Philippines",
  degree: "Bachelor of Science in Computer Engineering",
  duration: "2020 - 2024",
};
