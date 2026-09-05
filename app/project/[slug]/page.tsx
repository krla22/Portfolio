import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';
import { allProjects, getProjectBySlug, type Project } from '../project-data';
import JsonLd from '../../components/json-ld';
import { siteUrl } from '../../lib/site';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  const title = `${project.title} — ${project.position}`;
  const url = `${siteUrl}/project/${project.slug}`;

  return {
    title,
    description: project.description,
    alternates: { canonical: `/project/${project.slug}` },
    openGraph: {
      type: 'article',
      url,
      title,
      description: project.description,
      images: ['/opengraph-image'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.description,
      images: ['/opengraph-image'],
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteUrl}/project/${project.slug}#work`,
    name: project.title,
    headline: project.title,
    description: project.summary,
    url: `${siteUrl}/project/${project.slug}`,
    ...(project.link !== '#' ? { sameAs: [project.link] } : {}),
    author: { '@id': `${siteUrl}/#person` },
    creator: { '@id': `${siteUrl}/#person` },
    keywords: project.tech.join(', '),
    isPartOf: { '@id': `${siteUrl}/#website` },
  };

  return (
    <div className="text-paper">
      <JsonLd data={schema} />

      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-moss hover:text-moss-bright transition-colors group"
        >
          <ChevronLeft
            size={16}
            aria-hidden="true"
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to all projects</span>
        </Link>
      </div>

      <ProjectDetailContent project={project} />

      {project.lighthouseImage && (
        <div className="mt-14">
          <h2 className="font-mono text-xs font-semibold text-moss uppercase tracking-widest">
            Performance Report
          </h2>
          <div className="mt-4 relative aspect-[2/1] bg-ink-2 border border-line overflow-hidden">
            <Image
              src={project.lighthouseImage}
              alt={`Lighthouse desktop report for ${project.title}`}
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      <div className="py-8 mt-10 border-t border-line">
        {project.link === '#' ? (
          <p className="font-mono text-xs uppercase tracking-wide text-bone/70">
            This project is private — happy to walk through it on a call.
          </p>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full md:w-auto gap-2 bg-paper text-ink hover:bg-moss px-6 py-3 transition-colors font-mono text-xs uppercase tracking-wide"
          >
            <span>View live site</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <div className="space-y-10">
      <h1 className="font-serif text-4xl lg:text-5xl font-medium text-paper">{project.title}</h1>

      <div>
        <h2 className="font-mono text-xs font-semibold text-moss uppercase tracking-widest">
          Role &amp; Duration
        </h2>
        <p className="text-lg text-paper mt-2">{project.position}</p>
        <p className="text-sm text-bone/80 font-mono">{project.duration}</p>
      </div>

      <div>
        <h2 className="font-mono text-xs font-semibold text-moss uppercase tracking-widest">
          About This Project
        </h2>
        <p className="text-bone/80 mt-3 leading-relaxed max-w-3xl">{project.summary}</p>
      </div>

      <div>
        <h2 className="font-mono text-xs font-semibold text-moss uppercase tracking-widest">
          Key Wins
        </h2>
        <ul className="space-y-4 mt-4">
          {project.wins.map((win, index) => (
            <li key={index} className="flex items-start gap-3">
              <win.icon aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-moss mt-1" />
              <span className="text-paper text-lg leading-snug">{win.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-mono text-xs font-semibold text-moss uppercase tracking-widest">
          Tech Stack &amp; Tools
        </h2>
        <ul className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="font-mono text-xs uppercase tracking-wide text-bone border border-line px-3 py-2"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
