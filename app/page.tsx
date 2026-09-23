import type { Metadata } from 'next';
import { Download, Mail, Linkedin, Github, Phone } from 'lucide-react';
import {
  leadGenProjects,
  ecommerceProjects,
  archivedProjects,
  skillGroups,
  type Project,
} from './project/project-data';
import ProjectCard from './components/project-card';
import { site } from './lib/site';

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.metaDescription,
};

function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-serif text-3xl font-medium text-heading">{title}</h2>
      {intro && <p className="mt-2 max-w-2xl text-body">{intro}</p>}
    </div>
  );
}

function ProjectGroup({ id, title, projects }: { id: string; title: string; projects: Project[] }) {
  return (
    <div id={id} className="mt-12 first:mt-0">
      <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-royal">
        {title}
        <span className="h-px flex-1 bg-line" />
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

const primaryButton =
  'inline-flex items-center gap-2 rounded-md bg-royal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2';
const secondaryButton =
  'inline-flex items-center gap-2 rounded-md border border-heading px-5 py-3 text-sm font-semibold text-heading transition-colors hover:bg-heading hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2';

export default function PortfolioPage() {
  return (
    <>
      <header className="mb-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-royal">
          {site.role}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-tight text-heading lg:text-5xl">
          I build fast, custom WordPress &amp; WooCommerce sites for US and Australian businesses.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">{site.bio}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {site.facts.map((fact) => (
            <li
              key={fact}
              className="rounded-full bg-royal-tint px-3 py-1 text-sm font-medium text-royal-dark"
            >
              {fact}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className={primaryButton}>
            <Download size={16} aria-hidden="true" />
            Resume (PDF)
          </a>
          <a href={`mailto:${site.email}`} className={secondaryButton}>
            <Mail size={16} aria-hidden="true" />
            Email me
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </header>

      <section id="projects">
        <SectionHeading
          title="Projects"
          intro="Here's my client work, newest first. Open any card to see what I did and how it turned out."
        />
        <ProjectGroup id="ecommerce-projects" title="E-Commerce" projects={ecommerceProjects} />
        <ProjectGroup id="lead-gen-projects" title="Lead Generation" projects={leadGenProjects} />
        <ProjectGroup id="other-projects" title="Full Stack & Mobile" projects={archivedProjects} />
      </section>

      <section id="skills" className="mt-24">
        <SectionHeading title="Skills" />
        <dl className="divide-y divide-line border-y border-line">
          {skillGroups.map((group) => (
            <div key={group.label} className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold text-heading">{group.label}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-body"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact" className="mt-24 rounded-xl bg-ink p-8 text-white sm:p-10">
        <h2 className="font-serif text-3xl font-medium">Let&apos;s talk</h2>
        <p className="mt-3 max-w-xl text-ink-text">
          If you&apos;d like to chat, send me a message. I&apos;m happy to walk you through any of these
          projects on a call, private ones included.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          <li>
            <a href={`mailto:${site.email}`} className="group flex items-center gap-3 break-all">
              <Mail size={18} aria-hidden="true" className="flex-shrink-0 text-royal-light" />
              <span className="group-hover:underline">{site.email}</span>
            </a>
          </li>
          <li>
            <a href={`tel:${site.phone}`} className="group flex items-center gap-3">
              <Phone size={18} aria-hidden="true" className="flex-shrink-0 text-royal-light" />
              <span className="group-hover:underline">{site.phone}</span>
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
              <Linkedin size={18} aria-hidden="true" className="flex-shrink-0 text-royal-light" />
              <span className="group-hover:underline">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
              <Github size={18} aria-hidden="true" className="flex-shrink-0 text-royal-light" />
              <span className="group-hover:underline">GitHub</span>
            </a>
          </li>
        </ul>
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-royal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal-dark"
        >
          <Download size={16} aria-hidden="true" />
          Resume (PDF)
        </a>
      </section>
    </>
  );
}
