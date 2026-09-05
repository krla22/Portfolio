import type { Metadata } from 'next';
import { leadGenProjects, ecommerceProjects, archivedProjects, skills } from './project/project-data';
import ProjectCard from './components/project-card';
import JsonLd from './components/json-ld';
import { site, siteUrl } from './lib/site';

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.metaDescription,
  alternates: { canonical: '/' },
};

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#profilepage`,
  url: siteUrl,
  name: `${site.name} — ${site.role}`,
  description: site.metaDescription,
  isPartOf: { '@id': `${siteUrl}/#website` },
  about: { '@id': `${siteUrl}/#person` },
  mainEntity: { '@id': `${siteUrl}/#person` },
};

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="font-mono text-xs text-moss tracking-[0.2em]">{index}</span>
      <h2 className="font-serif text-2xl lg:text-3xl font-medium text-paper">{title}</h2>
      <span className="flex-1 h-px bg-line ml-2" />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={profileSchema} />

      <header className="mb-16 lg:mb-20">
        <h1 className="font-serif text-3xl lg:text-5xl font-medium text-paper leading-tight max-w-3xl">
          {site.role} building WordPress &amp; WooCommerce for{' '}
          <span className="italic text-moss">US and Australian</span> businesses.
        </h1>
        <p className="mt-6 text-bone/80 leading-relaxed max-w-2xl lg:hidden">{site.bio}</p>
      </header>

      <section id="ecommerce-projects">
        <SectionHeading index="01" title="E-Commerce Websites" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ecommerceProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="lead-gen-projects" className="mt-20 pt-16 border-t border-line">
        <SectionHeading index="02" title="Lead Generation Websites" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {leadGenProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="other-projects" className="mt-20 pt-16 border-t border-line">
        <SectionHeading index="03" title="Full Stack & Mobile Work" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {archivedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="mt-20 pt-16 border-t border-line">
        <SectionHeading index="04" title="Core Technical Skills" />
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="font-mono text-xs uppercase tracking-wide text-bone border border-line px-3 py-2 hover:border-moss hover:text-moss transition-colors"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-20 pt-10 border-t border-line">
        <p className="text-center font-mono text-xs text-bone/70 tracking-wide">
          &copy; {new Date().getFullYear()} {site.name} — Built with Next.js
        </p>
      </footer>
    </>
  );
}
